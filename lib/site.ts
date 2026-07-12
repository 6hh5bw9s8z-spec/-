export const site = {
  name: "hour",
  nameFull: "hour hair salon",
  description:
    "hour hair salon ― 山梨県富士吉田市のヘアサロン。カット・カラー・トリートメント・パーマ。オンライン予約承ります。",
  tel: "070-5577-1105",
  email: "info@hour-hairsalon.jp",
  address: "〒403-0004 山梨県富士吉田市緑ヶ丘1-4-19 相川ビルC号",
  // 表示用（狭い画面で変な位置で折れないよう2行に分ける）
  addressLines: ["〒403-0004 山梨県富士吉田市", "緑ヶ丘1-4-19 相川ビルC号"],
  addressEn: "Aikawa Bldg C, 1-4-19 Midorigaoka, Fujiyoshida, Yamanashi",
  hours: [
    { label: "営業時間", value: "10:00 – 21:00" },
    { label: "定休日", value: "毎週火曜・ほか月2日（不定休）" },
  ],
  // オンライン予約ページのURL（設定するとreserveページ・予約ボタンがここへリンクする）
  reserveUrl: "",
  // Googleマップの共有リンク
  mapUrl: "https://maps.app.goo.gl/hxhUZwnjegFiybgCA",
  mapQuery: "山梨県富士吉田市緑ヶ丘1-4-19",
  // TODO: 実際のアカウントに差し替える（lib/instagram.ts の instagramUser と合わせる）
  instagram: "https://www.instagram.com/hour_hairsalon",
} as const;

export const nav = [
  { href: "/", label: "home" },
  { href: "/menu", label: "menu" },
  { href: "/reserve", label: "reserve" },
  { href: "/access", label: "access" },
  { href: "/recruit", label: "recruit" },
] as const;
