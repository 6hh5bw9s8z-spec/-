import { site } from "@/lib/site";

/**
 * オンライン予約ボタン。
 * site.reserveUrl（予約ページのURL）を設定すると外部予約ページへ、
 * 未設定の間は電話発信リンクとして動く。
 */
export default function ReserveButton({
  className,
  label = "online reservation",
}: {
  className: string;
  label?: string;
}) {
  if (site.reserveUrl) {
    return (
      <a
        href={site.reserveUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {label}
      </a>
    );
  }
  return (
    <a href={`tel:${site.tel.replaceAll("-", "")}`} className={className}>
      {label}
    </a>
  );
}
