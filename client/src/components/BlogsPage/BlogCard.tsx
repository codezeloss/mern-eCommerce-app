import { Link } from "react-router-dom"
import blogImg from "../../assets/images/blog-1.jpg"
import moment from "moment"

interface Props {
  blogId: string
  image: any
  createdAt: string
  title: string
  description: string
}

function BlogCard({ blogId, image, createdAt, title, description }: Props) {
  return (
    <div className="bg-white rounded-md shadow-sm">
      <img
        className="w-full h-[300px] object-cover rounded-t-md"
        src={image}
        alt="Blogs"
      />

      <div className="py-6 px-5">
        <p className="text-xs text-gray/[.6] mb-2">
          {moment(createdAt).format("MMMM Do YYYY, h:mma")}
        </p>
        <h3 className="text-lg mb-2">{title}</h3>
        <p
          className="text-xs text-gray/[.6] mb-4"
          dangerouslySetInnerHTML={{
            __html: description?.substr(0, 70) + "...",
          }}
        />
        <Link to={`/blogs/blog/${blogId}`} className="primary-btn">
          Read More
        </Link>
      </div>
    </div>
  )
}

export default BlogCard
