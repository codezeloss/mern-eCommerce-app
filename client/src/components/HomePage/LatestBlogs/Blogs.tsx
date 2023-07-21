import BlogCard from "./BlogCard"
import chevronLeft from "../../../assets/icons/chevron-left.svg"
import chevronRight from "../../../assets/icons/chevron-right.svg"
import { useDispatch, useSelector } from "react-redux"
import React, { useEffect } from "react"
import { getAllBlogs } from "../../../features/blogs/blogSlice"

interface Props {
  _id: string
  image: any
  createdAt: string
  title: string
  description: string
}

function Blogs() {
  const dispatch = useDispatch()

  // RTK - blogs state
  const blogsState = useSelector((state: any) => state.blog.blogs)

  //
  useEffect(() => {
    // @ts-ignore
    dispatch(getAllBlogs())
  }, [])

  return (
    <div className="container mb-20">
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-bold text-2xl">Our Latest Blogs</h2>
        <div className="flex items-center gap-2">
          <button type="button">
            <img className="w-4 h-4" src={chevronLeft} alt="Blogs Left" />
          </button>
          <button type="button">
            <img className="w-4 h-4" src={chevronRight} alt="Blogs Right" />
          </button>
        </div>
      </div>

      <div className="flex items-center gap-4 justify-between">
        {blogsState &&
          blogsState.map((blog: Props, index: React.Key | null | undefined) => (
            <div key={index}>
              <BlogCard
                blogId={blog?._id}
                image={blog?.image}
                createdAt={blog?.createdAt}
                title={blog?.title}
                description={blog?.description}
              />
            </div>
          ))}
      </div>
    </div>
  )
}

export default Blogs
