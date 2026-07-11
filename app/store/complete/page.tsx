import type { Metadata } from "next";
import Link from "next/link";
import PageTitle from "@/components/PageTitle";

export const metadata: Metadata = {
  title: "thank you",
};

export default async function CompletePage({
  searchParams,
}: {
  searchParams: Promise<{ demo?: string }>;
}) {
  const { demo } = await searchParams;

  return (
    <div className="mx-auto max-w-2xl px-5 pb-28 text-center">
      <PageTitle en="thank you" ja="ご注文ありがとうございます" />
      {demo ? (
        <p className="text-sm leading-8 text-muted">
          これはデモモードの完了画面です。Square のアクセストークンを設定すると、
          実際の決済ページを経由してこの画面に戻ってきます。
        </p>
      ) : (
        <p className="text-sm leading-8">
          ご注文を受け付けました。確認メールをお送りしましたので、ご確認ください。
          <br />
          発送まで 2〜4 営業日ほどお時間をいただいています。
        </p>
      )}
      <Link
        href="/store"
        className="mt-12 inline-block border border-ink px-12 py-3 font-[family-name:var(--font-en)] text-xs tracking-[0.3em] transition-colors hover:bg-ink hover:text-background"
      >
        back to store
      </Link>
    </div>
  );
}
