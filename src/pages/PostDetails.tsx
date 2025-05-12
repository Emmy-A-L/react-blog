import { useParams } from "react-router-dom";
import { posts } from "../data/posts";

const PostDetails = () => {
  const { id } = useParams();

  const post = posts.find((post) => post.slug === id);
  if (!post) {
    return <div>Post not found</div>;
  }
  console.log(id);
  return (
    <div>
      <div className="max-w-2xl mx-auto p-6 gap-4">
        <img src={post.imageUrl} alt={post.title} className="mb-4" />
        <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
        <p className="text-gray-700 mb-4">{post.content}</p>
        <p className="text-gray-500">By {post.author}</p>
        <p className="text-gray-500">{post.date}</p>
      </div>
    </div>
  );
};

export default PostDetails;
