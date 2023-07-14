import BreadCrumb from "../components/BreadCrumb"
import BlogPageDetails from "../components/BlogsPage/BlogPageDetails"
import { useLocation } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { getSingleBlog } from "../features/blogs/blogSlice"
import moment from "moment/moment"

function SingleBlog() {
  const dispatch = useDispatch()
  const location = useLocation()

  // ** Get blog ID
  const blogId = location.pathname.split("/")[3]

  // ** RTK - Blog state
  const blogState = useSelector((state: any) => state.blog.blog)

  useEffect(() => {
    // @ts-ignore
    dispatch(getSingleBlog(blogId))
  }, [blogId])

  return (
    <>
      <div>
        <div className="flex items-center justify-center">
          <BreadCrumb path="/blogs/single-blog" title="Single Blog Page" />
        </div>

        <div className="bg-lightGray h-full py-6">
          <div className="container mb-20">
            <div className="w-full">
              <BlogPageDetails
                image={blogState?.image}
                title={blogState?.title}
                description={blogState?.description}
                createdAt={moment(blogState?.createdAt).format(
                  "MMMM Do YYYY, h:mma",
                )}
                author={blogState?.author}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SingleBlog
