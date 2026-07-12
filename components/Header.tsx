"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav } from "@/lib/site";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-background/90 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:h-20 md:px-8">
          <Link
            href="/"
            className="font-[family-name:var(--font-en)] text-2xl tracking-[0.5em] md:text-3xl"
          >
            hour
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`font-[family-name:var(--font-en)] text-sm tracking-[0.25em] transition-opacity hover:opacity-50 ${
                  pathname === item.href ? "opacity-100" : "opacity-70"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <button
            type="button"
            aria-label="メニューを開閉する"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-8 w-8 flex-col items-center justify-center gap-1.5 md:hidden"
          >
            <span
              className={`block h-px w-6 bg-ink transition-transform ${open ? "translate-y-[3.5px] rotate-45" : ""}`}
            />
            <span
              className={`block h-px w-6 bg-ink transition-transform ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`}
            />
          </button>
        </div>
      </header>

      {/* モバイル：右からスライドするメニューパネル
          （backdrop-blur を持つ header の中に置くと fixed の基準が header になるため外に置く） */}
      <div
        className={`fixed inset-0 z-40 bg-ink/30 transition-opacity md:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!open}
        onClick={close}
      />
      <div
        className={`fixed bottom-0 right-0 top-0 z-40 w-[78%] max-w-xs bg-background pt-24 shadow-[-8px_0_30px_rgba(33,31,28,0.12)] transition-transform duration-300 md:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!open}
      >
        <nav className="flex flex-col px-8">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={close}
              className="flex items-center justify-between border-b border-line py-5"
            >
              <span className="font-[family-name:var(--font-en)] text-base tracking-[0.25em]">
                {item.label}
              </span>
              <span aria-hidden className="text-muted">
                ›
              </span>
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
}
