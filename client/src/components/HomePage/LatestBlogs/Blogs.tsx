import BlogCard from "./BlogCard"
import chevronLeft from "../../../../public/assets/icons/chevron-left.svg"
import chevronRight from "../../../../public/assets/icons/chevron-right.svg"

function Blogs() {
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
        {/* !! map() blogs below */}
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </div>
  )
}

export default Blogs
