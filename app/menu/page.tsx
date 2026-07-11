import type { Metadata } from "next";
import Link from "next/link";
import PageTitle from "@/components/PageTitle";
import { formatPrice, menuCategories } from "@/lib/menu";

export const metadata: Metadata = {
  title: "menu",
  description: "hour hair salon のメニュー・料金表（税込）",
};

export default function MenuPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 pb-28">
      <PageTitle en="menu" ja="メニュー・料金" />

      <p className="text-center text-xs text-muted">
        価格はすべて税込表示です。仕上がりの状態や髪の長さにより
        お時間・料金が変わる場合があります。
      </p>

      <div className="mt-16 space-y-16">
        {menuCategories.map((category) => (
          <section key={category.id}>
            <div className="flex items-baseline gap-4">
              <h2 className="font-[family-name:var(--font-en)] text-2xl tracking-[0.35em]">
                {category.title}
              </h2>
              <span className="text-xs tracking-[0.3em] text-muted">
                {category.titleJa}
              </span>
            </div>
            <ul className="mt-6 border-t border-line">
              {category.items.map((item) => (
                <li
                  key={item.name}
                  className="flex items-baseline justify-between gap-6 border-b border-line py-5"
                >
                  <div>
                    <p className="text-sm">{item.name}</p>
                    {item.note && (
                      <p className="mt-1 text-[11px] text-muted">
                        {item.note}
                      </p>
                    )}
                  </div>
                  <div className="shrink-0 text-right">
                    <p className="text-sm">{formatPrice(item.price)}</p>
                    {item.duration && (
                      <p className="mt-1 font-[family-name:var(--font-en)] text-[11px] tracking-[0.15em] text-muted">
                        {item.duration}
                      </p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      <div className="mt-20 bg-pink-soft px-8 py-12 text-center">
        <p className="text-sm">メニューに迷ったら、カウンセリングでご相談ください。</p>
        <Link
          href="/reserve"
          className="mt-8 inline-block border border-ink bg-ink px-12 py-4 font-[family-name:var(--font-en)] text-xs tracking-[0.3em] text-background transition-opacity hover:opacity-70"
        >
          reserve
        </Link>
      </div>
    </div>
  );
}
