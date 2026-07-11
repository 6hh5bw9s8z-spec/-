"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav } from "@/lib/site";
import { useCart } from "@/lib/cart";

export default function Header() {
  const pathname = usePathname();
  const { count } = useCart();
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
          <Link
            href="/cart"
            className="font-[family-name:var(--font-en)] text-sm tracking-[0.25em] opacity-70 transition-opacity hover:opacity-50"
          >
            cart{count > 0 && ` (${count})`}
          </Link>
        </nav>

        <div className="flex items-center gap-5 md:hidden">
          <Link
            href="/cart"
            className="font-[family-name:var(--font-en)] text-sm tracking-[0.2em]"
          >
            cart{count > 0 && ` (${count})`}
          </Link>
          <button
            type="button"
            aria-label="メニューを開閉する"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-8 w-8 flex-col items-center justify-center gap-1.5"
          >
            <span
              className={`block h-px w-6 bg-ink transition-transform ${open ? "translate-y-[3.5px] rotate-45" : ""}`}
            />
            <span
              className={`block h-px w-6 bg-ink transition-transform ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`}
            />
          </button>
        </div>
      </div>
    </header>

      {/* backdrop-blur を持つ header の中に置くと fixed の基準が header になり
          背景が描画されないため、オーバーレイは header の外に出す */}
      {open && (
        <div className="fixed inset-x-0 bottom-0 top-16 z-40 bg-background md:hidden">
          <nav className="flex flex-col items-center gap-8 pt-16">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={close}
                className="font-[family-name:var(--font-en)] text-xl tracking-[0.3em]"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/cart"
              onClick={close}
              className="font-[family-name:var(--font-en)] text-xl tracking-[0.3em]"
            >
              cart{count > 0 && ` (${count})`}
            </Link>
          </nav>
        </div>
      )}
    </>
  );
}
