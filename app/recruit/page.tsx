import type { Metadata } from "next";
import PageTitle from "@/components/PageTitle";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "recruit",
  description: "hour hair salon では一緒に働く仲間を募集しています。",
};

const positions = [
  {
    title: "スタイリスト",
    type: "正社員 / 業務委託",
    salary: "月給 250,000円〜 + 歩合（経験・指名数を考慮）",
    requirements: ["美容師免許", "スタイリスト経験 1 年以上"],
  },
  {
    title: "アシスタント",
    type: "正社員",
    salary: "月給 210,000円〜",
    requirements: ["美容師免許（取得見込み可）", "経験不問"],
  },
];

const benefits = [
  "完全週休2日（火曜 + シフト1日）",
  "社会保険完備・交通費支給",
  "講習費・ウィッグ代サロン負担",
  "営業時間内レッスン（原則残業なし）",
  "産休・育休取得実績あり／時短勤務可",
];

export default function RecruitPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 pb-28">
      <PageTitle en="recruit" ja="採用情報" />

      <div className="text-center">
        <p className="text-sm leading-9">
          「長く、心地よく働けるサロン」を、一緒につくりませんか。
        </p>
        <p className="mx-auto mt-4 max-w-xl text-xs leading-7 text-muted">
          <span className="inline-block">hour は小さなサロンです。</span>
          <span className="inline-block">だからこそ、一人ひとりのお客さまと、</span>
          <span className="inline-block">そして働くスタッフ一人ひとりと、</span>
          <span className="inline-block">丁寧に向き合うことを大切にしています。</span>
          <span className="inline-block">経験よりも、</span>
          <span className="inline-block">髪とひとが好きという気持ちを重視します。</span>
        </p>
      </div>

      <div className="mt-20 space-y-12">
        {positions.map((p) => (
          <section key={p.title} className="border border-line p-8 md:p-10">
            <h2 className="text-lg tracking-[0.2em]">{p.title}</h2>
            <dl className="mt-6 space-y-4 text-sm">
              <div className="flex flex-col gap-1 md:flex-row">
                <dt className="w-32 shrink-0 text-xs tracking-[0.25em] text-muted">
                  雇用形態
                </dt>
                <dd>{p.type}</dd>
              </div>
              <div className="flex flex-col gap-1 md:flex-row">
                <dt className="w-32 shrink-0 text-xs tracking-[0.25em] text-muted">
                  給与
                </dt>
                <dd>{p.salary}</dd>
              </div>
              <div className="flex flex-col gap-1 md:flex-row">
                <dt className="w-32 shrink-0 text-xs tracking-[0.25em] text-muted">
                  応募資格
                </dt>
                <dd>{p.requirements.join(" / ")}</dd>
              </div>
            </dl>
          </section>
        ))}

        <section className="bg-pink-soft p-8 md:p-10">
          <h2 className="font-[family-name:var(--font-en)] text-lg tracking-[0.3em]">
            benefits
          </h2>
          <ul className="mt-6 space-y-2 text-sm">
            {benefits.map((b) => (
              <li key={b}>・{b}</li>
            ))}
          </ul>
        </section>
      </div>

      <div className="mt-20 text-center">
        <p className="text-xs tracking-[0.3em] text-muted">応募方法</p>
        <p className="mt-4 text-sm leading-8">
          履歴書（写真付き）を添付のうえ、下記メールアドレスまでご連絡ください。
          <br />
          サロン見学のみのご連絡も歓迎です。
        </p>
        <a
          href={`mailto:${site.email}?subject=${encodeURIComponent("採用応募について")}`}
          className="mt-10 inline-block border border-ink bg-ink px-12 py-4 font-[family-name:var(--font-en)] text-xs tracking-[0.25em] text-background transition-opacity hover:opacity-70"
        >
          {site.email}
        </a>
      </div>
    </div>
  );
}
