"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import PageTitle from "@/components/PageTitle";
import { useCart } from "@/lib/cart";
import { formatPrice } from "@/lib/menu";
import { getProduct } from "@/lib/products";

export default function CartPage() {
  const { lines, total, setQty, remove, clear } = useCart();
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const checkout = async () => {
    setSubmitting(true);
    setError(null);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ lines }),
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error ?? "checkout failed");
      }
      if (data.demo) {
        clear();
        router.push("/store/complete?demo=1");
        return;
      }
      // Square Checkout（決済ページ）へ
      window.location.href = data.url;
    } catch (e) {
      setError(
        e instanceof Error && e.message !== "checkout failed"
          ? e.message
          : "チェックアウトを開始できませんでした。時間をおいて再度お試しください。",
      );
      setSubmitting(false);
    }
  };

  return (
    <div className="mx-auto max-w-3xl px-5 pb-28">
      <PageTitle en="cart" ja="カート" />

      {lines.length === 0 ? (
        <div className="py-16 text-center">
          <p className="text-sm text-muted">カートは空です。</p>
          <Link
            href="/store"
            className="mt-10 inline-block border border-ink px-12 py-3 font-[family-name:var(--font-en)] text-xs tracking-[0.3em] transition-colors hover:bg-ink hover:text-background"
          >
            back to store
          </Link>
        </div>
      ) : (
        <div>
          <ul className="border-t border-line">
            {lines.map((line) => {
              const product = getProduct(line.slug);
              if (!product) return null;
              return (
                <li
                  key={line.slug}
                  className="flex items-center gap-5 border-b border-line py-6 md:gap-8"
                >
                  <Link
                    href={`/store/${product.slug}`}
                    className="block w-20 shrink-0 bg-pink-soft md:w-24"
                  >
                    <Image
                      src={product.image}
                      alt={product.nameJa}
                      width={200}
                      height={250}
                      className="aspect-[4/5] w-full object-cover"
                    />
                  </Link>
                  <div className="min-w-0 flex-1">
                    <p className="truncate font-[family-name:var(--font-en)] text-sm tracking-[0.15em]">
                      {product.name}
                    </p>
                    <p className="mt-1 text-xs text-muted">
                      {formatPrice(product.price)}
                    </p>
                    <button
                      type="button"
                      onClick={() => remove(line.slug)}
                      className="mt-2 text-[11px] text-muted underline underline-offset-4 transition-opacity hover:opacity-60"
                    >
                      削除
                    </button>
                  </div>
                  <div className="flex items-center border border-line">
                    <button
                      type="button"
                      aria-label="数量を減らす"
                      onClick={() => setQty(line.slug, line.qty - 1)}
                      className="h-9 w-9 transition-colors hover:bg-pink-soft"
                    >
                      −
                    </button>
                    <span className="w-8 text-center text-sm">{line.qty}</span>
                    <button
                      type="button"
                      aria-label="数量を増やす"
                      onClick={() => setQty(line.slug, Math.min(9, line.qty + 1))}
                      className="h-9 w-9 transition-colors hover:bg-pink-soft"
                    >
                      +
                    </button>
                  </div>
                  <p className="w-20 shrink-0 text-right text-sm">
                    {formatPrice(product.price * line.qty)}
                  </p>
                </li>
              );
            })}
          </ul>

          <div className="mt-8 flex items-baseline justify-between">
            <p className="text-xs tracking-[0.3em] text-muted">小計（税込）</p>
            <p className="text-xl">{formatPrice(total)}</p>
          </div>
          <p className="mt-2 text-right text-[11px] text-muted">
            送料は全国一律 ¥550（¥8,800 以上で無料）。決済画面で加算されます。
          </p>

          {error && (
            <p className="mt-6 bg-pink px-4 py-3 text-xs">{error}</p>
          )}

          <button
            type="button"
            onClick={checkout}
            disabled={submitting}
            className="mt-10 w-full border border-ink bg-ink py-4 font-[family-name:var(--font-en)] text-xs tracking-[0.3em] text-background transition-opacity hover:opacity-70 disabled:opacity-40"
          >
            {submitting ? "processing…" : "checkout"}
          </button>
          <p className="mt-4 text-center text-[11px] text-muted">
            Square の安全な決済ページに移動します。
          </p>
        </div>
      )}
    </div>
  );
}
