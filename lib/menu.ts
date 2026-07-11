export type MenuItem = {
  name: string;
  price: number;
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
    items: [
      { name: "カット", price: 6600, duration: "60min" },
      { name: "前髪カット", price: 1650, duration: "20min" },
      { name: "学生カット（中・高・大学生）", price: 5500, duration: "60min" },
      { name: "キッズカット（小学生以下）", price: 3850, duration: "40min" },
    ],
  },
  {
    id: "color",
    title: "color",
    titleJa: "カラー",
    items: [
      { name: "フルカラー", price: 8800, duration: "90min" },
      { name: "リタッチカラー", price: 6600, duration: "60min" },
      { name: "ハイライト", price: 12100, duration: "120min" },
      {
        name: "ダブルカラー",
        price: 16500,
        duration: "150min",
        note: "ブリーチ1回込み",
      },
    ],
  },
  {
    id: "perm",
    title: "perm",
    titleJa: "パーマ",
    items: [
      { name: "パーマ", price: 11000, duration: "120min" },
      { name: "ポイントパーマ", price: 7700, duration: "90min" },
      { name: "縮毛矯正", price: 18700, duration: "180min" },
    ],
  },
  {
    id: "treatment",
    title: "treatment",
    titleJa: "トリートメント",
    items: [
      { name: "トリートメント", price: 5500, duration: "30min" },
      {
        name: "髪質改善トリートメント",
        price: 13200,
        duration: "90min",
        note: "カット別",
      },
    ],
  },
  {
    id: "spa",
    title: "head spa",
    titleJa: "ヘッドスパ",
    items: [
      { name: "ヘッドスパ 30min", price: 5500, duration: "30min" },
      { name: "ヘッドスパ 60min", price: 8800, duration: "60min" },
    ],
  },
];

export const formatPrice = (price: number) =>
  `¥${price.toLocaleString("ja-JP")}`;
