import Image from "next/image";
import Link from "next/link";
import { formatPrice } from "@/lib/menu";
import type { Product } from "@/lib/products";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/store/${product.slug}`} className="group block">
      <div className="overflow-hidden bg-pink-soft">
        <Image
          src={product.image}
          alt={product.nameJa}
          width={800}
          height={1000}
          className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
        />
      </div>
      <div className="mt-4">
        <p className="font-[family-name:var(--font-en)] text-sm tracking-[0.2em]">
          {product.name}
        </p>
        <p className="mt-1 text-xs text-muted">{product.nameJa}</p>
        <p className="mt-2 text-sm">
          {formatPrice(product.price)}
          <span className="ml-1 text-[10px] text-muted">tax in</span>
        </p>
      </div>
    </Link>
  );
}
