import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fire } from '../firebase';
function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fire
      .collection('post')
      .get()
      .then((snapshot) => {
        const posts = snapshot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        });
        console.log('posts--', posts);
        setPosts(posts);
      });
  }, []);
  return (
    <div className="home">
      <h1>Tech Blog</h1>
      <div id="blog-by">Vishal Singh</div>
      {posts.map((post, index) => (
        <div className="post" key={`post-${index}`}>
          <Link to={`/post/${post.id}`}>
            <h3>{post.title}</h3>
          </Link>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
}
export default Home;
