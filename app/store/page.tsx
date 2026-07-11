import type { Metadata } from "next";
import PageTitle from "@/components/PageTitle";
import ProductCard from "@/components/ProductCard";
import { categoryLabels, products } from "@/lib/products";

export const metadata: Metadata = {
  title: "store",
  description:
    "hour hair salon のオリジナルプロダクトを購入できるオンラインストア",
};

export default function StorePage() {
  const categories = Object.entries(categoryLabels) as [
    keyof typeof categoryLabels,
    string,
  ][];

  return (
    <div className="mx-auto max-w-6xl px-5 pb-28 md:px-8">
      <PageTitle en="store" ja="オンラインストア" />

      <p className="mx-auto max-w-xl text-center text-xs leading-7 text-muted">
        サロンワークから生まれた hour
        のオリジナルプロダクト。毎日のケアが、すこし楽しみになるものだけを選びました。
      </p>

      <div className="mt-20 space-y-24">
        {categories.map(([category, label]) => {
          const items = products.filter((p) => p.category === category);
          if (items.length === 0) return null;
          return (
            <section key={category}>
              <div className="flex items-baseline gap-4">
                <h2 className="font-[family-name:var(--font-en)] text-2xl tracking-[0.35em]">
                  {category}
                </h2>
                <span className="text-xs tracking-[0.3em] text-muted">
                  {label}
                </span>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-x-5 gap-y-12 md:grid-cols-4 md:gap-x-8">
                {items.map((product) => (
                  <ProductCard key={product.slug} product={product} />
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
