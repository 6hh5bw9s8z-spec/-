import type { Metadata } from "next";
import ReserveButton from "@/components/ReserveButton";
import PageTitle from "@/components/PageTitle";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "reserve",
  description: "hour hair salon のご予約",
};

const steps = [
  {
    step: "01",
    title: "メニューを選ぶ",
    body: "カット・カラーなど、ご希望のメニューをお選びください。迷ったらカットのみでご予約のうえ、当日にご相談いただけます。",
  },
  {
    step: "02",
    title: "日時を選ぶ",
    body: "空き状況を確認して、ご希望のお日にち・お時間をお選びください。",
  },
  {
    step: "03",
    title: "予約完了",
    body: "確認のご連絡が届いたらご予約完了です。当日お待ちしています。",
  },
];

export default function ReservePage() {
  return (
    <div className="mx-auto max-w-3xl px-5 pb-28">
      <PageTitle en="reserve" ja="ご予約" />

      <div className="grid gap-10 md:grid-cols-3">
        {steps.map((s) => (
          <div key={s.step}>
            <p className="font-[family-name:var(--font-en)] text-2xl tracking-[0.3em] text-muted">
              {s.step}
            </p>
            <h2 className="mt-3 text-sm">{s.title}</h2>
            <p className="mt-3 text-xs leading-6 text-muted">{s.body}</p>
          </div>
        ))}
      </div>

      <div className="mt-16 bg-pink-soft px-6 py-14 text-center md:px-12">
        {site.reserveUrl ? (
          <p className="text-sm leading-8">
            ご希望のメニュー・日時を選んで、そのままオンラインで予約が完了します。
          </p>
        ) : (
          <p className="text-sm leading-8">
            オンライン予約は現在準備中です。
            <br />
            お手数ですが、お電話にてご予約をお願いいたします。
          </p>
        )}
        <div className="mt-10 flex flex-col items-center justify-center gap-4">
          <ReserveButton
            label={site.reserveUrl ? "book an appointment" : `tel. ${site.tel}`}
            className="inline-block w-full max-w-xs border border-ink bg-ink px-8 py-4 text-center font-[family-name:var(--font-en)] text-xs tracking-[0.3em] text-background transition-opacity hover:opacity-70"
          />
          {site.reserveUrl && (
            <a
              href={`tel:${site.tel.replaceAll("-", "")}`}
              className="inline-block w-full max-w-xs border border-ink px-8 py-4 text-center font-[family-name:var(--font-en)] text-xs tracking-[0.3em] transition-colors hover:bg-ink hover:text-background"
            >
              tel. {site.tel}
            </a>
          )}
        </div>
      </div>

      <div className="mt-16 border-t border-line pt-12">
        <h2 className="font-[family-name:var(--font-en)] text-lg tracking-[0.3em]">
          notes
        </h2>
        <ul className="mt-6 space-y-3 text-xs leading-6 text-muted">
          <li>
            ・ご予約時間の 10 分前までにお越しいただけますと、ゆっくりカウンセリングができます。
          </li>
          <li>
            ・キャンセル・変更はご予約前日までにお願いいたします。当日キャンセルは施術料金の 50% を頂戴する場合があります。
          </li>
          <li>
            ・15 分以上遅れる場合はお電話（{site.tel}）にてご連絡ください。メニューを変更してのご案内となる場合があります。
          </li>
          <li>・お子さま連れのご来店も歓迎です。ご予約時にお知らせください。</li>
        </ul>
      </div>
    </div>
  );
}
