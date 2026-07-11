import type { Metadata } from "next";
import PageTitle from "@/components/PageTitle";
import SquareAppointments from "@/components/SquareAppointments";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "reserve",
  description: "hour hair salon のオンライン予約",
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
    body: "空き状況はリアルタイムで反映されます。ご希望のお日にち・お時間をお選びください。",
  },
  {
    step: "03",
    title: "予約完了",
    body: "確認メールが届いたらご予約完了です。前日にリマインドのご連絡をお送りします。",
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

      <div className="mt-16">
        <SquareAppointments />
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
