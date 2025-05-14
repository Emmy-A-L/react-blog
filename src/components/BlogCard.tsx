import { Link } from "react-router-dom"
import { posts } from "../data/posts"


const BlogCard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 rounded-lg font-normal">
            {posts?.map(post => (
                <Link to={`/posts/${post.slug}`} key={post.id} className="flex flex-col gap-2 cursor-pointer">
                    <img src={post.imageUrl} alt={post.title}/>
                    <div className="flex flex-col gap-2 rounded-lg">
                        <p className="text-xl font-bold">{post.title}</p>
                        <p className="truncate">{post.content}</p>
                        <span className="flex justify-between text-gray-500"><p className="text-gray-800 font-semibold">{post.author}</p><p>{post.date}</p></span>
                    </div>
                </Link>
            ))}
        </div>
  )
}

export default BlogCard