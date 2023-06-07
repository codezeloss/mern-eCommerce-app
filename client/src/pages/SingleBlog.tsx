import BreadCrumb from "../components/BreadCrumb"
import ShopByCategories from "../components/ShopByCategories"
import BlogCard from "../components/BlogsPage/BlogCard"
import BlogPageDetails from "../components/BlogsPage/BlogPageDetails"

function SingleBlog() {
  return (
    <>
      <div>
        <div className="flex items-center justify-center">
          <BreadCrumb path="/blogs/single-blog" title="Single Blog Page" />
        </div>

        <div className="bg-lightGray h-full py-6">
          <div className="container mb-20">
            <div className="w-full">
              <BlogPageDetails />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SingleBlog
