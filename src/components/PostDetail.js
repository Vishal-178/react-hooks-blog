import { useEffect, useState } from 'react';
import { fire } from '../firebase';
import { useParams } from 'react-router-dom';
function PostDetail() {
  const [post, setPost] = useState({});
  const { postId } = useParams();
  useEffect(() => {
    fire
      .collection('post')
      .doc(postId)
      .get()
      .then((snapshot) => {
        console.log(snapshot.data());
        setPost(snapshot.data());
      });
  }, []);
  return (
    <div className="post-detail">
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}
export default PostDetail;
