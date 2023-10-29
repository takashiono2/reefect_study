import { useState, useEffect } from 'react';

function Post() {
  const [posts, setPosts] = useState([]);

  const controller = new AbortController();
  const signal = controller.signal;

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts', { signal })
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
      }, []);

    return () => {
      controller.abort();
    };
  });
  return (
    <>
      <h1>Post一覧</h1>
      {posts.map((post) => (
        <div key={post.id}>{post.title}</div>
      ))}
    </>
  );
}

export default Post;