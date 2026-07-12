// Instagram セクションのデータ。
// Behold (behold.so) のフィードから最新3件を自動取得する。
// 取得に失敗した場合は下の fallbackPosts（仮画像）を表示する。
export type InstagramPost = {
  image: string;
  url: string;
  caption: string;
};

export const instagramUser = "hour._hair";

// Behold の Feed URL
const FEED_URL = "https://feeds.behold.so/d9Y8b16cF4ORnCxs9dmD";

export const fallbackPosts: InstagramPost[] = [
  {
    image: "/instagram/post-1.jpg",
    url: `https://www.instagram.com/${instagramUser}`,
    caption: "",
  },
  {
    image: "/instagram/post-2.jpg",
    url: `https://www.instagram.com/${instagramUser}`,
    caption: "",
  },
  {
    image: "/instagram/post-3.jpg",
    url: `https://www.instagram.com/${instagramUser}`,
    caption: "",
  },
];

type BeholdPost = {
  mediaType?: string;
  mediaUrl?: string;
  thumbnailUrl?: string;
  permalink?: string;
  caption?: string;
  sizes?: { medium?: { mediaUrl?: string } };
};

export async function getInstagramPosts(): Promise<InstagramPost[]> {
  try {
    // 1時間ごとに再取得（新しい投稿が自動で反映される）
    const res = await fetch(FEED_URL, { next: { revalidate: 3600 } });
    if (!res.ok) throw new Error(`feed status ${res.status}`);
    const data = await res.json();
    const raw: BeholdPost[] = Array.isArray(data) ? data : (data.posts ?? []);
    const posts = raw
      .slice(0, 3)
      .map((p) => ({
        image:
          p.sizes?.medium?.mediaUrl ??
          (p.mediaType === "VIDEO" ? p.thumbnailUrl : p.mediaUrl) ??
          "",
        url: p.permalink ?? `https://www.instagram.com/${instagramUser}`,
        caption: p.caption ?? "",
      }))
      .filter((p) => p.image);
    return posts.length > 0 ? posts : fallbackPosts;
  } catch {
    return fallbackPosts;
  }
}
