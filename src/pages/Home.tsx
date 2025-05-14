import BlogCard from "../components/BlogCard"



const Home = () => {

    
  return (
    <div className="flex flex-col items-center py-2 px-20 bg-gray-200 gap-6 font-serif">
        <h1 className="text-3xl font-semibold">Welcome to our Blog Page</h1>

        <BlogCard />
    </div>
  )
}

export default Home