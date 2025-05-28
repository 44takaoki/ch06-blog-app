import { useParams } from "react-router-dom";
import PostDetail from "./PostDetail";
import { useEffect, useState } from "react";

export default function PostDetailPage() {
  // ルートパラメータを取得
  const { id } = useParams();
  const [post, setPost] = useState([]);
  const [isLoading, setLoading] = useState(true);
  // const { state: posts } = useLocation();

  // APIでpostを取得する処理をuseEffectで実行
  useEffect(() => {
    const fetcher = async () => {
      const res = await fetch(
        `https://1hmfpsvto6.execute-api.ap-northeast-1.amazonaws.com/dev/posts/${id}`
      );
      const data = await res.json();

      setPost(data.post);
      setLoading(false);
    };

    fetcher();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isLoading) return <p className="text-left">読み込み中...</p>;

  return (
    <div>
      <PostDetail post={post} />
    </div>
  );
}
