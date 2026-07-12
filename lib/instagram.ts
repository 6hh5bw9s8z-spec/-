// Instagram セクションのデータ。
// 投稿を差し替えるときは image（public/instagram/ 内のファイル）、
// url（投稿のリンク）、caption を書き換えるだけ。
export type InstagramPost = {
  image: string;
  url: string;
  caption: string;
};

// TODO: 実際のアカウント名に差し替える
export const instagramUser = "hour_hairsalon";

export const instagramPosts: InstagramPost[] = [
  {
    image: "/instagram/post-1.jpg",
    url: "https://www.instagram.com/",
    caption: "サンプル投稿：店内の様子（実際の投稿に差し替えます）",
  },
  {
    image: "/instagram/post-2.jpg",
    url: "https://www.instagram.com/",
    caption: "サンプル投稿：グリーンのある席（実際の投稿に差し替えます）",
  },
  {
    image: "/instagram/post-3.jpg",
    url: "https://www.instagram.com/",
    caption: "サンプル投稿：鏡と灯り（実際の投稿に差し替えます）",
  },
];
