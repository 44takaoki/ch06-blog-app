import { useParams } from "react-router-dom";
import { posts } from "../data/posts";
import PostDetail from "./PostDetail";

export default function PostDetailPage() {
  // ルートパラメータを取得
  const { id } = useParams();
  return (
    <div>
      <PostDetail posts={posts} id={id} />
    </div>
  );
}
