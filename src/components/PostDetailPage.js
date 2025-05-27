import { useLocation, useParams } from "react-router-dom";
import PostDetail from "./PostDetail";

export default function PostDetailPage() {
  // ルートパラメータを取得
  const { id } = useParams();
  const { state: posts } = useLocation();
  // console.log(posts);

  return (
    <div>
      <PostDetail posts={posts} id={id} />
    </div>
  );
}
