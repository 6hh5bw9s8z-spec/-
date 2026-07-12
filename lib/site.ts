export const site = {
  name: "hour",
  nameFull: "hour hair salon",
  tagline: "時間を、ほどく場所。",
  description:
    "hour hair salon ― 山梨県富士吉田市のヘアサロン。カット・カラー・パーマとオリジナルプロダクトのオンラインストア。",
  tel: "070-5577-1105",
  email: "info@hour-hairsalon.jp",
  address: "〒403-0004 山梨県富士吉田市緑ヶ丘1-4-19 相川ビルC号",
  addressEn: "Aikawa Bldg C, 1-4-19 Midorigaoka, Fujiyoshida, Yamanashi",
  hours: [
    { label: "営業時間", value: "10:00 – 21:00" },
    { label: "定休日", value: "毎週火曜・ほか月2日（不定休）" },
  ],
  mapQuery: "山梨県富士吉田市緑ヶ丘1-4-19",
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
