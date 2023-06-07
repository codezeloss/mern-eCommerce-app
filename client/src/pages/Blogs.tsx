import ShopByCategories from "../components/ShopByCategories"
import BlogCard from "../components/BlogsPage/BlogCard"
import BreadCrumb from "../components/BreadCrumb"

function Blogs() {
  return (
    <>
      <div>
        <div className="flex items-center justify-center">
          <BreadCrumb path="/blogs" title="News" />
        </div>

        <div className="bg-lightGray h-full py-6">
          <div className="container mb-20">
            <div className="w-full flex gap-4">
              <div className="min-w-[300px]">
                <ShopByCategories />
              </div>

              <div className="grid grid-cols-2 gap-6">
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Blogs
