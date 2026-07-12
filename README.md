# hour hair salon

山梨県富士吉田市のヘアサロン「hour hair salon」の公式サイトです。
オフホワイト × ほんのり薄いピンクを基調に、Next.js (App Router) + Tailwind CSS で構築しています。

## ページ構成

| パス | 内容 |
| --- | --- |
| `/` | ホーム（写真ヒーロー・コンセプト・メニュー抜粋・予約 CTA・アクセス抜粋） |
| `/menu` | メニュー・料金表（price list） |
| `/reserve` | ご予約（オンライン予約ページへのリンク） |
| `/access` | アクセス・営業時間・地図 |
| `/recruit` | 採用情報 |

## 開発

```bash
npm install
npm run dev   # http://localhost:3000
```

## コンテンツの編集

データは `lib/` にまとめています。コードを触らず値の書き換えだけで反映されます。

- `lib/site.ts` — 店舗情報（住所・電話・営業時間・地図リンク・**予約ページURL**）
- `lib/menu.ts` — メニューと料金

### 予約ページの接続

オンライン予約ページ（Square 予約など）の URL が決まったら、
`lib/site.ts` の `reserveUrl` に設定してください。
サイト内のすべての予約ボタンがそのページへリンクします。
未設定の間は電話予約の案内になります。

### 画像の差し替え

- トップの写真: `public/hero.jpg`（縦位置の切り取りは `app/page.tsx` の
  `object-[center_38%]` で調整）
- ロゴ: Web フォント（Cormorant Garamond）による組版。元画像は `public/logo.jpg`

## デプロイ

Vercel を推奨します。リポジトリを Import して Deploy するだけで動きます。

```bash
npm run build   # 本番ビルド確認
```
