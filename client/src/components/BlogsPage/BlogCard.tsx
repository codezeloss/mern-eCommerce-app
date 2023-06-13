import { Link } from "react-router-dom"
import blogImg from "../../assets/images/blog-1.jpg"

function BlogCard() {
  return (
    <div className="bg-white rounded-md shadow-sm">
      <img
        className="w-full h-[300px] object-cover rounded-t-md"
        src={blogImg}
        alt="Blogs"
      />

      <div className="py-6 px-5">
        <p className="text-xs text-gray/[.6] mb-2">11 Jun, 2021</p>
        <h3 className="text-lg mb-2">A Beautiful Sunday Morning Renaissance</h3>
        <p className="text-xs text-gray/[.6] mb-4">
          You're only as good as your last collection, which is an enormous
          pressure. I think there is something about luxury...
        </p>
        <Link to="/blogs/single-blog" className="primary-btn">
          Read More
        </Link>
      </div>
    </div>
  )
}

export default BlogCard
