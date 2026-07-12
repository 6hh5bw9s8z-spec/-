import type { Metadata } from "next";
import Link from "next/link";
import PageTitle from "@/components/PageTitle";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "access",
  description: `hour hair salon へのアクセス。${site.address}`,
};

export default function AccessPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 pb-28">
      <PageTitle en="access" ja="アクセス" />

      {/* 店舗ブロック（参考サイトの Shops 風） */}
      <div className="pb-16 text-center">
        <h2 className="font-[family-name:var(--font-en)] text-2xl tracking-[0.25em]">
          hour hair salon
        </h2>
        <p className="mt-6 text-sm leading-8">
          <span className="inline-block">{site.addressLines[0]}</span>
          <span className="inline-block">{site.addressLines[1]}</span>
        </p>
        <p className="mt-2">
          <a
            href={`tel:${site.tel.replaceAll("-", "")}`}
            className="text-sm underline underline-offset-4"
          >
            {site.tel}
          </a>
        </p>
        <Link
          href="/reserve"
          className="mt-8 inline-block border border-ink px-14 py-4 font-[family-name:var(--font-en)] text-sm tracking-[0.2em] transition-colors hover:bg-ink hover:text-background"
        >
          Reserve
        </Link>
      </div>

      <div className="aspect-[4/3] w-full bg-pink-soft md:aspect-[16/9]">
        <iframe
          title="map"
          src={`https://www.google.com/maps?q=${encodeURIComponent(site.mapQuery)}&output=embed`}
          className="h-full w-full border-0 grayscale-[0.4]"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      <p className="mt-4 text-center">
        <a
          href={site.mapUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="font-[family-name:var(--font-en)] text-xs tracking-[0.25em] underline underline-offset-8 transition-opacity hover:opacity-50"
        >
          open in google maps
        </a>
      </p>

      <dl className="mt-14 divide-y divide-line border-y border-line">
        <div className="flex flex-col gap-2 py-6 md:flex-row md:gap-0">
          <dt className="w-40 shrink-0 text-xs tracking-[0.3em] text-muted">
            住所
          </dt>
          <dd className="text-sm leading-7">
            <span className="inline-block">{site.addressLines[0]}</span>
            <span className="inline-block">{site.addressLines[1]}</span>
            <br />
            <span className="font-[family-name:var(--font-en)] text-xs tracking-[0.1em] text-muted">
              {site.addressEn}
            </span>
          </dd>
        </div>
        <div className="flex flex-col gap-2 py-6 md:flex-row md:gap-0">
          <dt className="w-40 shrink-0 text-xs tracking-[0.3em] text-muted">
            電話
          </dt>
          <dd className="text-sm">
            <a href={`tel:${site.tel.replaceAll("-", "")}`}>{site.tel}</a>
          </dd>
        </div>
        <div className="flex flex-col gap-2 py-6 md:flex-row md:gap-0">
          <dt className="w-40 shrink-0 text-xs tracking-[0.3em] text-muted">
            営業時間・定休日
          </dt>
          <dd className="space-y-1 text-sm">
            {site.hours.map((h) => (
              <p key={h.label}>
                {h.label}　{h.value}
              </p>
            ))}
          </dd>
        </div>
        <div className="flex flex-col gap-2 py-6 md:flex-row md:gap-0">
          <dt className="w-40 shrink-0 text-xs tracking-[0.3em] text-muted">
            アクセス
          </dt>
          <dd className="text-sm leading-7">
            富士急行線 月江寺駅より徒歩3分
          </dd>
        </div>
        <div className="flex flex-col gap-2 py-6 md:flex-row md:gap-0">
          <dt className="w-40 shrink-0 text-xs tracking-[0.3em] text-muted">
            駐車場
          </dt>
          <dd className="text-sm leading-7">2台完備</dd>
        </div>
        <div className="flex flex-col gap-2 py-6 md:flex-row md:gap-0">
          <dt className="w-40 shrink-0 text-xs tracking-[0.3em] text-muted">
            お支払い
          </dt>
          <dd className="text-sm leading-7">
            <span className="inline-block">現金・各種クレジットカード・</span>
            <span className="inline-block">交通系 IC・QR 決済</span>
            <span className="inline-block">（Square 決済対応）</span>
          </dd>
        </div>
      </dl>
    </div>
  );
}
