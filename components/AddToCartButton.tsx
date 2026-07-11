"use client";

import Link from "next/link";
import { useState } from "react";
import { useCart } from "@/lib/cart";

export default function AddToCartButton({ slug }: { slug: string }) {
  const { add } = useCart();
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  return (
    <div>
      <div className="flex items-center gap-6">
        <div className="flex items-center border border-line">
          <button
            type="button"
            aria-label="数量を減らす"
            onClick={() => setQty((q) => Math.max(1, q - 1))}
            className="h-11 w-11 transition-colors hover:bg-pink-soft"
          >
            −
          </button>
          <span className="w-10 text-center text-sm">{qty}</span>
          <button
            type="button"
            aria-label="数量を増やす"
            onClick={() => setQty((q) => Math.min(9, q + 1))}
            className="h-11 w-11 transition-colors hover:bg-pink-soft"
          >
            +
          </button>
        </div>
        <button
          type="button"
          onClick={() => {
            add(slug, qty);
            setAdded(true);
          }}
          className="flex-1 border border-ink bg-ink px-8 py-3.5 font-[family-name:var(--font-en)] text-xs tracking-[0.3em] text-background transition-opacity hover:opacity-70"
        >
          add to cart
        </button>
      </div>
      {added && (
        <p className="mt-4 text-xs text-muted">
          カートに追加しました。{" "}
          <Link href="/cart" className="text-ink underline underline-offset-4">
            カートを見る
          </Link>
        </p>
      )}
    </div>
  );
}
