# hour hair salon — EC & 予約サイト

オフホワイト × ほんのり薄いピンクを基調にした、ミニマルな美容室サイトです。
Next.js (App Router) + Tailwind CSS で構築し、決済と予約は Square と連携します。

## ページ構成

| パス | 内容 |
| --- | --- |
| `/` | ホーム（ロゴヒーロー・コンセプト・メニュー/ストア抜粋・予約 CTA） |
| `/menu` | メニュー・料金表 |
| `/store` | オンラインストア（商品一覧） |
| `/store/[slug]` | 商品詳細（カート追加） |
| `/cart` | カート・チェックアウト |
| `/store/complete` | 購入完了（Square からのリダイレクト先） |
| `/reserve` | 予約（Square Appointments 連携） |
| `/access` | アクセス・営業時間 |
| `/recruit` | 採用情報 |

## 開発

```bash
npm install
npm run dev   # http://localhost:3000
```

## Square 連携のセットアップ

`.env.example` を `.env.local` にコピーして値を設定してください。
**未設定でもサイトは動きます**（EC はデモモード、予約は電話案内表示）。

### 1. EC 決済（Square Checkout）

1. [Square Developer Dashboard](https://developer.squareup.com/apps) でアプリケーションを作成
2. Sandbox の **Access Token** を `SQUARE_ACCESS_TOKEN` に設定
3. **Location ID** を `SQUARE_LOCATION_ID` に設定（Sandbox 用のロケーション）
4. `SQUARE_ENVIRONMENT=sandbox` のままテスト決済（テストカード: `4111 1111 1111 1111`）
5. 本番公開時は Production のトークン/ロケーションに差し替えて `SQUARE_ENVIRONMENT=production`

チェックアウトの流れ: カート → `POST /api/checkout` が Square の
[Payment Links API](https://developer.squareup.com/docs/checkout-api) で決済ページを作成 → Square 上で決済 → `/store/complete` に戻る。
価格は必ずサーバー側の商品データ（`lib/products.ts`）から計算するため、クライアント改ざんの影響を受けません。

### 2. 予約（Square Appointments）

Square Appointments（Square 予約）を有効化し、どちらかを設定します。

- `NEXT_PUBLIC_SQUARE_APPOINTMENTS_URL` — 予約ページの URL（`/reserve` に予約ボタンが出ます）
- `NEXT_PUBLIC_SQUARE_APPOINTMENTS_WIDGET_URL` — 埋め込みウィジェットの script URL（`/reserve` にカレンダーが埋め込まれます）

## コンテンツの編集

コードを触らずに差し替えられるよう、データは `lib/` にまとめています。

- `lib/site.ts` — サロン名・住所・電話・営業時間・ナビゲーション
- `lib/menu.ts` — 施術メニューと料金
- `lib/products.ts` — ストアの商品（名前・価格・説明・画像パス）

### 画像の差し替え

- ロゴ: サイト上ではブランドロゴを Web フォント（Cormorant Garamond）で組版再現しています。
  元のロゴ画像は `public/logo.jpg` に保管してあります（OGP 画像などに利用可）。
- 商品画像: `public/products/*.svg` はプレースホルダーです。実写真（4:5 推奨）を
  `public/products/` に置き、`lib/products.ts` の `image` を差し替えてください。
  すべて実画像にしたら `next.config.ts` の `dangerouslyAllowSVG` は削除できます。

### 住所・地図

`lib/site.ts` の `address` と `mapQuery` は仮の値です。実店舗の住所に変更してください。

## デプロイ

Vercel を推奨します。環境変数（上記 Square 関連）をプロジェクト設定に登録するだけで動きます。

```bash
npm run build   # 本番ビルド確認
```
