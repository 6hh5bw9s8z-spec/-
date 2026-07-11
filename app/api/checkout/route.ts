import { NextResponse } from "next/server";
import { getProduct } from "@/lib/products";

type CheckoutBody = {
  lines?: { slug?: unknown; qty?: unknown }[];
};

const SQUARE_BASE_URL =
  process.env.SQUARE_ENVIRONMENT === "production"
    ? "https://connect.squareup.com"
    : "https://connect.squareupsandbox.com";

export async function POST(request: Request) {
  let body: CheckoutBody;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "invalid request" }, { status: 400 });
  }

  // 価格はクライアントを信用せず、必ずサーバー側の商品データから引く
  const lines = (body.lines ?? [])
    .map((l) => ({
      product: typeof l.slug === "string" ? getProduct(l.slug) : undefined,
      qty:
        typeof l.qty === "number" && Number.isInteger(l.qty)
          ? Math.min(Math.max(l.qty, 1), 9)
          : 0,
    }))
    .filter((l) => l.product && l.qty > 0);

  if (lines.length === 0) {
    return NextResponse.json({ error: "カートが空です" }, { status: 400 });
  }

  const accessToken = process.env.SQUARE_ACCESS_TOKEN;
  const locationId = process.env.SQUARE_LOCATION_ID;

  // Square 未接続の間はデモモードで動かす（.env.example 参照）
  if (!accessToken || !locationId) {
    return NextResponse.json({ demo: true });
  }

  const origin = request.headers.get("origin") ?? "http://localhost:3000";

  const res = await fetch(`${SQUARE_BASE_URL}/v2/online-checkout/payment-links`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
      "Square-Version": "2025-05-21",
    },
    body: JSON.stringify({
      idempotency_key: crypto.randomUUID(),
      order: {
        location_id: locationId,
        line_items: lines.map(({ product, qty }) => ({
          name: `${product!.name}（${product!.nameJa}）`,
          quantity: String(qty),
          base_price_money: {
            amount: product!.price, // JPY は最小単位が円
            currency: "JPY",
          },
        })),
      },
      checkout_options: {
        redirect_url: `${origin}/store/complete`,
        ask_for_shipping_address: true,
      },
    }),
  });

  if (!res.ok) {
    const detail = await res.text();
    console.error("Square payment link error:", res.status, detail);
    return NextResponse.json(
      { error: "決済ページの作成に失敗しました" },
      { status: 502 },
    );
  }

  const data = await res.json();
  return NextResponse.json({ url: data.payment_link.url });
}
