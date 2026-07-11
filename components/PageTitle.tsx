export default function PageTitle({
  en,
  ja,
}: {
  en: string;
  ja?: string;
}) {
  return (
    <div className="pb-14 pt-28 text-center md:pb-20 md:pt-40">
      <h1 className="font-[family-name:var(--font-en)] text-4xl tracking-[0.45em] md:text-5xl">
        {en}
      </h1>
      {ja && (
        <p className="mt-4 text-xs tracking-[0.35em] text-muted">{ja}</p>
      )}
    </div>
  );
}
