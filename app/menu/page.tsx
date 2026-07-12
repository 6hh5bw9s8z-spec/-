import type { Metadata } from "next";
import Link from "next/link";
import PageTitle from "@/components/PageTitle";
import { menuCategories, priceLabel } from "@/lib/menu";

export const metadata: Metadata = {
  title: "menu",
  description: "hour hair salon のメニュー・料金表（税込）",
};

export default function MenuPage() {
  return (
    <div className="mx-auto max-w-2xl px-5 pb-28">
      <PageTitle en="price list" ja="メニュー・料金" />

      <p className="text-center text-xs text-muted">
        <span className="inline-block">価格はすべて税込表示です。</span>
        <span className="inline-block">仕上がりの状態や髪の長さにより</span>
        <span className="inline-block">お時間・料金が変わる場合があります。</span>
        <br />
        <span className="inline-block">胸下の長さの方は</span>
        <span className="inline-block">レングスチャージ ¥1,500 を頂戴します。</span>
      </p>

      <div className="mt-20 space-y-20 text-center">
        {menuCategories.map((category) => (
          <section key={category.id}>
            <h2 className="font-[family-name:var(--font-en)] text-3xl tracking-[0.3em]">
              {category.title}
            </h2>
            <p className="mt-2 text-[11px] tracking-[0.3em] text-muted">
              {category.titleJa}
            </p>
            <ul className="mt-10 space-y-8">
              {category.items.map((item) => (
                <li key={item.name}>
                  <p className="font-[family-name:var(--font-en)] text-base tracking-[0.12em]">
                    {item.name} – {priceLabel(item)}
                  </p>
                  <p className="mt-1 text-[11px] text-muted">
                    {item.ja}
                    {item.duration && `　${item.duration}`}
                    {item.note && `　※${item.note}`}
                  </p>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      <div className="mt-24 bg-pink-soft px-8 py-12 text-center">
        <p className="text-sm">メニューに迷ったら、カウンセリングでご相談ください。</p>
        <Link
          href="/reserve"
          className="mt-8 inline-block border border-ink px-14 py-4 font-[family-name:var(--font-en)] text-xs tracking-[0.3em] transition-colors hover:bg-ink hover:text-background"
        >
          Reserve
        </Link>
      </div>
    </div>
  );
}
