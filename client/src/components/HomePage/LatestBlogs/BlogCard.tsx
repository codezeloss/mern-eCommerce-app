import picture from "../../../../public/assets/images/blog-1.jpg"
import moment from "moment/moment"
import { Link } from "react-router-dom"

interface Props {
  blogId: string
  image: any
  createdAt: string
  title: string
  description: string
}

function BlogCard({ blogId, image, createdAt, title, description }: Props) {
  return (
    <div className="bg-white shadow-sm rounded-b-md">
      <div>
        <img
          className="rounded-t-md object-cover w-full h-[200px]"
          src={image}
          alt="Blogs"
        />
      </div>

      <div className="bg-white py-6 px-4 rounded-b-md">
        <p className="text-xs text-gray/[.6] mb-3 uppercase">
          {moment(createdAt).format("MMMM Do YYYY, h:mma")}
        </p>
        <h3 className="text-base font-bold mb-2">{title}</h3>
        <p
          className="text-xs text-gray/[.6] mb-4 text-justify"
          dangerouslySetInnerHTML={{
            __html: description?.substr(0, 40) + "...",
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
