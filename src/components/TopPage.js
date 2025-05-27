import { posts } from "../data/posts";
import PostList from "./PostList";

export default function TopPage() {
  return (
    <>
      <div>
        <PostList posts={posts} />
      </div>
    </>
  );
}
