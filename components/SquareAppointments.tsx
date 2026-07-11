"use client";

import { useEffect, useRef } from "react";
import { site } from "@/lib/site";

const WIDGET_URL = process.env.NEXT_PUBLIC_SQUARE_APPOINTMENTS_WIDGET_URL;
const BOOKING_URL = process.env.NEXT_PUBLIC_SQUARE_APPOINTMENTS_URL;

/**
 * Square 予約（Square Appointments）の埋め込み。
 * - NEXT_PUBLIC_SQUARE_APPOINTMENTS_WIDGET_URL: 埋め込みウィジェットの script URL
 * - NEXT_PUBLIC_SQUARE_APPOINTMENTS_URL: 予約ページへのリンク
 * どちらも未設定の間はデモ表示になる（.env.example 参照）。
 */
export default function SquareAppointments() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!WIDGET_URL || !containerRef.current) return;
    const script = document.createElement("script");
    script.src = WIDGET_URL;
    script.async = true;
    containerRef.current.appendChild(script);
    return () => {
      script.remove();
    };
  }, []);

  if (WIDGET_URL) {
    return <div ref={containerRef} className="min-h-[600px]" />;
  }

  return (
    <div className="bg-pink-soft px-6 py-14 text-center md:px-12">
      {BOOKING_URL ? (
        <>
          <p className="text-sm leading-8">
            ご希望のメニュー・日時を選んで、そのままオンラインで予約が完了します。
          </p>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-block w-full max-w-xs border border-ink bg-ink px-8 py-4 font-[family-name:var(--font-en)] text-xs tracking-[0.3em] text-background transition-opacity hover:opacity-70"
          >
            book an appointment
          </a>
        </>
      ) : (
        <>
          <p className="text-sm leading-8">
            オンライン予約は現在準備中です。
            <br />
            お手数ですが、お電話にてご予約をお願いいたします。
          </p>
          <a
            href={`tel:${site.tel.replaceAll("-", "")}`}
            className="mt-10 inline-block w-full max-w-xs border border-ink px-8 py-4 font-[family-name:var(--font-en)] text-xs tracking-[0.3em] transition-colors hover:bg-ink hover:text-background"
          >
            tel. {site.tel}
          </a>
        </>
      )}
    </div>
  );
}
