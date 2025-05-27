import "./App.css";
import { Route, Routes } from "react-router-dom";
import TopPage from "./components/TopPage";
import PostsDetailPage from "./components/PostDetailPage";

function App() {
  return (
    <div className="App">
      <header className=" bg-slate-600 p-4 ">
        <div className="flex justify-between mx-auto container items-center">
          <h1 className="text-2xl text-white font-semibold">Blog</h1>
          <p className="text-base text-white">お問い合わせ</p>
        </div>
      </header>
      <Routes>
        <Route path="/" element={<TopPage />} />
        <Route path="/posts/:id" element={<PostsDetailPage />} />
      </Routes>
    </div>
  );
}

export default App;
