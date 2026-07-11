import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import AddToCartButton from "@/components/AddToCartButton";
import { formatPrice } from "@/lib/menu";
import { categoryLabels, getProduct, products } from "@/lib/products";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};
  return {
    title: product.name,
    description: product.description,
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  return (
    <div className="mx-auto max-w-5xl px-5 pb-28 pt-28 md:pt-40">
      <div className="grid gap-12 md:grid-cols-2 md:gap-16">
        <div className="bg-pink-soft">
          <Image
            src={product.image}
            alt={product.nameJa}
            width={800}
            height={1000}
            priority
            className="aspect-[4/5] w-full object-cover"
          />
        </div>

        <div className="md:pt-8">
          <p className="text-[11px] tracking-[0.3em] text-muted">
            {categoryLabels[product.category]}
          </p>
          <h1 className="mt-4 font-[family-name:var(--font-en)] text-3xl tracking-[0.2em]">
            {product.name}
          </h1>
          <p className="mt-2 text-sm text-muted">
            {product.nameJa}
            {product.volume && ` / ${product.volume}`}
          </p>
          <p className="mt-6 text-xl">
            {formatPrice(product.price)}
            <span className="ml-2 text-xs text-muted">tax in</span>
          </p>
          <p className="mt-8 border-t border-line pt-8 text-sm leading-8">
            {product.description}
          </p>
          <div className="mt-10">
            <AddToCartButton slug={product.slug} />
          </div>
          <p className="mt-10 text-[11px] leading-6 text-muted">
            決済は Square
            の安全なチェックアウトページで行われます。送料は全国一律 ¥550、
            ¥8,800 以上のご注文で送料無料です。
          </p>
          <div className="mt-10">
            <Link
              href="/store"
              className="font-[family-name:var(--font-en)] text-xs tracking-[0.3em] underline underline-offset-8 transition-opacity hover:opacity-50"
            >
              back to store
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
