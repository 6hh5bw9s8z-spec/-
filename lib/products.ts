export type Product = {
  slug: string;
  name: string;
  nameJa: string;
  price: number; // 税込 (JPY)
  category: "care" | "styling" | "tool";
  description: string;
  volume?: string;
  image: string;
};

export const products: Product[] = [
  {
    slug: "hair-oil",
    name: "hour hair oil",
    nameJa: "ヘアオイル",
    price: 3850,
    category: "styling",
    volume: "100ml",
    description:
      "乾かす前にも、仕上げにも。植物由来オイルをベースに、するりと軽い質感に整えるマルチオイル。ほのかなネロリの香り。",
    image: "/products/hair-oil.svg",
  },
  {
    slug: "shampoo",
    name: "hour gentle shampoo",
    nameJa: "ジェントルシャンプー",
    price: 3300,
    category: "care",
    volume: "300ml",
    description:
      "アミノ酸系洗浄成分のやさしい泡で、頭皮と髪を毎日いたわるシャンプー。カラー後のデリケートな髪にも。",
    image: "/products/shampoo.svg",
  },
  {
    slug: "treatment",
    name: "hour repair treatment",
    nameJa: "リペアトリートメント",
    price: 3520,
    category: "care",
    volume: "300g",
    description:
      "毛先までなめらかに。ダメージ部分を選んで補修するサロン品質のデイリートリートメント。",
    image: "/products/treatment.svg",
  },
  {
    slug: "hair-balm",
    name: "hour hair balm",
    nameJa: "ヘアバーム",
    price: 2970,
    category: "styling",
    volume: "40g",
    description:
      "手のひらで溶かして、束感とツヤを。ハンドクリームとしても使える天然由来成分のみのバーム。",
    image: "/products/hair-balm.svg",
  },
  {
    slug: "hair-mist",
    name: "hour hair mist",
    nameJa: "ヘアミスト",
    price: 2750,
    category: "styling",
    volume: "120ml",
    description:
      "寝ぐせ直しと保湿を一本で。朝のスタイリング前にひと吹きする、みずみずしいミスト。",
    image: "/products/hair-mist.svg",
  },
  {
    slug: "wood-comb",
    name: "hour wood comb",
    nameJa: "ウッドコーム",
    price: 1980,
    category: "tool",
    description:
      "静電気が起きにくい天然木のコーム。手に馴染む小ぶりなサイズで、持ち歩きにも。",
    image: "/products/wood-comb.svg",
  },
  {
    slug: "scalp-brush",
    name: "hour scalp brush",
    nameJa: "スカルプブラシ",
    price: 2420,
    category: "tool",
    description:
      "シャンプーしながら頭皮をほぐす、やわらかなシリコンブラシ。バスタイムのセルフスパに。",
    image: "/products/scalp-brush.svg",
  },
  {
    slug: "travel-set",
    name: "hour travel set",
    nameJa: "トラベルセット",
    price: 4180,
    category: "care",
    volume: "50ml × 3",
    description:
      "シャンプー・トリートメント・オイルのミニサイズを巾着に。旅先でもいつもの髪へ。ギフトにも人気です。",
    image: "/products/travel-set.svg",
  },
];

export const getProduct = (slug: string) =>
  products.find((p) => p.slug === slug);

export const categoryLabels: Record<Product["category"], string> = {
  care: "ヘアケア",
  styling: "スタイリング",
  tool: "ツール",
};
