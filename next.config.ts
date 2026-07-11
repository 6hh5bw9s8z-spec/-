import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // 商品プレースホルダーが SVG のため許可する（実写真に差し替えたら削除可）
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;
