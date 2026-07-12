import Image from "next/image";
import Link from "next/link";
import ReserveButton from "@/components/ReserveButton";
import { menuCategories, priceLabel } from "@/lib/menu";
import { site } from "@/lib/site";

function SectionHeading({ en, ja }: { en: string; ja: string }) {
  return (
    <div className="text-center">
      <h2 className="font-[family-name:var(--font-en)] text-3xl tracking-[0.45em] md:text-4xl">
        {en}
      </h2>
      <p className="mt-3 text-xs tracking-[0.35em] text-muted">{ja}</p>
    </div>
  );
}

export default function Home() {
  return (
    <div>
      {/* hero — 店内写真。壁が明るいのでロゴはインク色で載せる */}
      <section className="relative flex min-h-svh flex-col items-center justify-center overflow-hidden px-5">
        <Image
          src="/hero.jpg"
          alt="hour hair salon 店内"
          fill
          priority
          className="object-cover object-[center_38%]"
        />
        <h1 className="relative -translate-y-16 text-center text-ink md:-translate-y-10">
          <span className="block font-[family-name:var(--font-en)] text-6xl tracking-[0.5em] md:text-7xl">
            hour
          </span>
          <span className="mt-4 block font-[family-name:var(--font-en)] text-sm tracking-[0.5em] opacity-80">
            hair&nbsp;&nbsp;salon
          </span>
        </h1>
        <span
          aria-hidden
          className="absolute bottom-10 font-[family-name:var(--font-en)] text-[10px] tracking-[0.4em] text-ink/60"
        >
          scroll
        </span>
      </section>

      {/* concept */}
      <section className="mx-auto max-w-2xl px-5 py-24 text-center md:py-32">
        <SectionHeading en="concept" ja="コンセプト" />
        <p className="mt-10 text-sm leading-9">
          いそがしい毎日から、すこしだけ離れて。
          <br />
          hour は「時間」を意味する名前のとおり、
          <br className="hidden md:block" />
          髪と向き合うひとときを、静かに、丁寧に過ごすための場所です。
        </p>
        <p className="mt-6 text-sm leading-9 text-muted">
          余白と光を大切にした空間で、
          あなたの輪郭に寄り添うスタイルを一緒に見つけます。
        </p>
      </section>

      {/* menu preview */}
      <section className="border-t border-line">
        <div className="mx-auto max-w-4xl px-5 py-24 md:py-32">
          <SectionHeading en="menu" ja="メニュー" />
          <div className="mt-14 grid gap-12 md:grid-cols-3">
            {menuCategories.slice(0, 3).map((category) => (
              <div key={category.id}>
                <h3 className="font-[family-name:var(--font-en)] text-lg tracking-[0.3em]">
                  {category.title}
                </h3>
                <ul className="mt-5 space-y-3 border-t border-line pt-5">
                  {category.items.slice(0, 3).map((item) => (
                    <li
                      key={item.name}
                      className="flex items-baseline justify-between gap-4 text-xs"
                    >
                      <span>{item.ja}</span>
                      <span className="shrink-0 text-muted">
                        {priceLabel(item)}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-14 text-center">
            <Link
              href="/menu"
              className="inline-block border border-ink px-12 py-3 font-[family-name:var(--font-en)] text-xs tracking-[0.3em] transition-colors hover:bg-ink hover:text-background"
            >
              view all menu
            </Link>
          </div>
        </div>
      </section>

      {/* reserve cta */}
      <section className="border-t border-line bg-pink">
        <div className="mx-auto max-w-3xl px-5 py-24 text-center md:py-32">
          <SectionHeading en="reserve" ja="ご予約" />
          <p className="mt-8 text-sm leading-8">
            ご予約はオンラインまたはお電話にて承ります。
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 md:flex-row">
            <ReserveButton className="inline-block w-64 border border-ink bg-ink px-8 py-4 text-center font-[family-name:var(--font-en)] text-xs tracking-[0.3em] text-background transition-opacity hover:opacity-70" />
            <a
              href={`tel:${site.tel.replaceAll("-", "")}`}
              className="inline-block w-64 border border-ink px-8 py-4 text-center font-[family-name:var(--font-en)] text-xs tracking-[0.3em] transition-colors hover:bg-ink hover:text-background"
            >
              tel. {site.tel}
            </a>
          </div>
        </div>
      </section>

      {/* access preview */}
      <section className="border-t border-line">
        <div className="mx-auto max-w-3xl px-5 py-24 text-center md:py-32">
          <SectionHeading en="access" ja="アクセス" />
          <p className="mt-8 text-sm leading-8">{site.address}</p>
          <div className="mt-6 space-y-1 text-xs text-muted">
            <p>富士急行線 月江寺駅より徒歩3分　／　駐車場2台完備</p>
            {site.hours.map((h) => (
              <p key={h.label}>
                {h.label} {h.value}
              </p>
            ))}
          </div>
          <div className="mt-10">
            <Link
              href="/access"
              className="font-[family-name:var(--font-en)] text-xs tracking-[0.3em] underline underline-offset-8 transition-opacity hover:opacity-50"
            >
              view map
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
