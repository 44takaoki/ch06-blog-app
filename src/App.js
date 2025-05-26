import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import TopPage from "./components/TopPage";
import PostsDetailPage from "./components/PostDetailPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<TopPage />} />
        <Route path="/posts/:id" element={<PostsDetailPage />} />
      </Routes>
    </div>
  );
}

export default App;
