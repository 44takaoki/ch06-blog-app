export default function Layout({ posts }) {
  const formatDate = (date) => {
    // 日時をyyyy/MM/DD形式にフォーマット
    const yeardate = new Date(date.createdAt).toLocaleString().split(" ", 1);
    return yeardate;
  };

  return (
    <ul className="max-w-4xl grid grid-cols-1 gap-2 mx-auto mt-6 ">
      {posts.map((post) => (
        <li key={post.id} className="h-auto m-5 p-3 border border-slate-400 ">
          <div className="flex justify-between mx-auto  ">
            <p className="text-gray-400">{formatDate(post)}</p>
            <div className="flex space-x-2 ">
              {post.categories.map((category, index) => (
                <p
                  key={index}
                  className="p-1 text-blue-500 border border-blue-300 rounded-md "
                >
                  {category}
                </p>
              ))}
            </div>
          </div>
          <p className="text-xl m-2 text-gray-500 ">{post.title}</p>
          {/* <img src={post.thumbnailUrl} alt={post.id} /> */}
          <div
            className="m-2 w-2/3  text-gray-500 line-clamp-2"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </li>
      ))}
    </ul>
  );
}
