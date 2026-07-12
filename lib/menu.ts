export type MenuItem = {
  name: string; // 英語主体の表記（参考サイト風）
  ja: string; // 日本語名
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
      { name: "Haircut", ja: "カット", price: 6600, duration: "60min" },
      { name: "Bang Trim", ja: "前髪カット", price: 1650, duration: "20min" },
      {
        name: "Student Cut",
        ja: "学生カット（中・高・大学生）",
        price: 5500,
        duration: "60min",
      },
      {
        name: "Kids Cut",
        ja: "キッズカット（小学生以下）",
        price: 3850,
        duration: "40min",
      },
    ],
  },
  {
    id: "color",
    title: "color",
    titleJa: "カラー",
    items: [
      { name: "Full Color", ja: "フルカラー", price: 8800, duration: "90min" },
      {
        name: "Retouch Color",
        ja: "リタッチカラー",
        price: 6600,
        duration: "60min",
      },
      {
        name: "Highlights",
        ja: "ハイライト",
        price: 12100,
        duration: "120min",
      },
      {
        name: "Double Process Color",
        ja: "ダブルカラー",
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
      { name: "Perm", ja: "パーマ", price: 11000, duration: "120min" },
      {
        name: "Partial Perm",
        ja: "ポイントパーマ",
        price: 7700,
        duration: "90min",
      },
      {
        name: "Japanese Straightening",
        ja: "縮毛矯正",
        price: 18700,
        duration: "180min",
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
        price: 5500,
        duration: "30min",
      },
      {
        name: "Repair Treatment",
        ja: "髪質改善トリートメント",
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
      {
        name: "Head Spa 30min",
        ja: "ヘッドスパ 30分",
        price: 5500,
        duration: "30min",
      },
      {
        name: "Head Spa 60min",
        ja: "ヘッドスパ 60分",
        price: 8800,
        duration: "60min",
      },
    ],
  },
];

export const formatPrice = (price: number) =>
  `¥${price.toLocaleString("ja-JP")}`;
