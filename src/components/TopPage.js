import { posts } from "../data/posts";
import Layout from "./Layout";

export default function TopPage() {
  return (
    <>
      <header className=" bg-slate-600 p-4 ">
        <div className="flex justify-between mx-auto container items-center">
          <h1 className="text-2xl text-white font-semibold">Blog</h1>
          <p className="text-base text-white">お問い合わせ</p>
        </div>
      </header>
      <div>
        <Layout posts={posts} />
      </div>
    </>
  );
}
