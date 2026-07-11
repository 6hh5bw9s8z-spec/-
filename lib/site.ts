export const site = {
  name: "hour",
  nameFull: "hour hair salon",
  tagline: "時間を、ほどく場所。",
  description:
    "hour hair salon ― 余白と光を大切にした、小さなヘアサロン。カット・カラー・トリートメントとオリジナルプロダクトのオンラインストア。",
  tel: "03-0000-0000",
  email: "info@hour-hairsalon.jp",
  address: "〒150-0001 東京都渋谷区神宮前 0-0-0 hour bldg 2F",
  addressEn: "0-0-0 Jingumae, Shibuya-ku, Tokyo",
  hours: [
    { label: "平日", value: "11:00 – 20:00" },
    { label: "土日祝", value: "10:00 – 19:00" },
    { label: "定休日", value: "毎週火曜・第2水曜" },
  ],
  mapQuery: "東京都渋谷区神宮前",
  instagram: "https://www.instagram.com/",
} as const;

export const nav = [
  { href: "/", label: "home" },
  { href: "/menu", label: "menu" },
  { href: "/store", label: "store" },
  { href: "/reserve", label: "reserve" },
  { href: "/access", label: "access" },
  { href: "/recruit", label: "recruit" },
] as const;
