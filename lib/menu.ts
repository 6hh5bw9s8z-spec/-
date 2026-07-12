export type MenuItem = {
  name: string; // 英語主体の表記
  ja: string; // 日本語名
  price: number;
  from?: boolean; // 「〜」付き（価格はここから）
  duration?: string;
  note?: string;
};

export type MenuCategory = {
  id: string;
  title: string;
  titleJa: string;
  items: MenuItem[];
};

// 価格はすべて税込
export const menuCategories: MenuCategory[] = [
  {
    id: "cut",
    title: "cut",
    titleJa: "カット",
    items: [{ name: "Haircut", ja: "カット", price: 5500 }],
  },
  {
    id: "color",
    title: "color",
    titleJa: "カラー",
    items: [
      { name: "Color", ja: "カラー", price: 8800 },
      { name: "Haircut + Color", ja: "カット＋カラー", price: 12600 },
    ],
  },
  {
    id: "perm",
    title: "perm / straight",
    titleJa: "パーマ・ストレート",
    items: [
      {
        name: "Haircut + Perm",
        ja: "カット＋パーマ",
        price: 12800,
        from: true,
      },
      {
        name: "Haircut + Digital Perm",
        ja: "カット＋デジタルパーマ",
        price: 17800,
        from: true,
      },
      {
        name: "Haircut + Straightening",
        ja: "カット＋ストレート",
        price: 24000,
        from: true,
      },
    ],
  },
  {
    id: "treatment",
    title: "treatment",
    titleJa: "トリートメント",
    items: [
      {
        name: "Treatment",
        ja: "トリートメント",
        price: 3300,
        from: true,
      },
    ],
  },
];

export const formatPrice = (price: number) =>
  `¥${price.toLocaleString("ja-JP")}`;

export const priceLabel = (item: MenuItem) =>
  `${formatPrice(item.price)}${item.from ? "〜" : ""}`;
