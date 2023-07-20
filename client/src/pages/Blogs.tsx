import ShopByCategories from "../components/ShopByCategories"
import BlogCard from "../components/BlogsPage/BlogCard"
import BreadCrumb from "../components/BreadCrumb"
import { useDispatch, useSelector } from "react-redux"
import React, { useEffect } from "react"
import { getAllBlogs } from "../features/blogs/blogSlice"

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
    <>
      <main>
        <div className="flex items-center justify-center">
          <BreadCrumb path="/blogs" title="News" />
        </div>

        <div className="bg-lightGray h-full py-6">
          <div className="container mb-20">
            <div className="w-full">
              <div className="grid grid-cols-2 gap-6">
                {blogsState &&
                  blogsState.map(
                    (blog: Props, index: React.Key | null | undefined) => (
                      <div key={index}>
                        <BlogCard
                          blogId={blog?._id}
                          image={blog?.image}
                          createdAt={blog?.createdAt}
                          title={blog?.title}
                          description={blog?.description}
                        />
                      </div>
                    ),
                  )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default Blogs
