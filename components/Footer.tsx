import Link from "next/link";
import { nav, site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-pink-soft">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8">
        <div className="flex flex-col gap-12 md:flex-row md:justify-between">
          <div>
            <p className="font-[family-name:var(--font-en)] text-3xl tracking-[0.5em]">
              hour
            </p>
            <p className="mt-1 font-[family-name:var(--font-en)] text-xs tracking-[0.35em] text-muted">
              hair salon
            </p>
            <p className="mt-6 max-w-xs text-xs leading-7 text-muted">
              <span className="inline-block">{site.addressLines[0]}</span>
              <span className="inline-block">{site.addressLines[1]}</span>
              <br />
              tel. {site.tel}
            </p>
          </div>

          <div className="flex gap-16">
            <nav className="flex flex-col gap-3">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="font-[family-name:var(--font-en)] text-sm tracking-[0.25em] transition-opacity hover:opacity-50"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="flex flex-col gap-3 text-xs text-muted">
              {site.hours.map((h) => (
                <p key={h.label}>
                  {h.label}
                  <br />
                  <span className="text-ink">{h.value}</span>
                </p>
              ))}
              <a
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="font-[family-name:var(--font-en)] tracking-[0.25em] text-ink transition-opacity hover:opacity-50"
              >
                instagram
              </a>
            </div>
          </div>
        </div>

        <p className="mt-16 font-[family-name:var(--font-en)] text-[11px] tracking-[0.3em] text-muted">
          © {new Date().getFullYear()} hour hair salon
        </p>
      </div>
    </footer>
  );
}
