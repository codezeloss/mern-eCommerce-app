import { Link } from "react-router-dom"

function ShopByCategories() {
  return (
    <div className="bg-white rounded-md shadow-sm p-4 mb-3">
      <h2 className="text-base mb-3">Shop By Categories</h2>
      <div className="flex flex-col items-start text-xs text-gray/[.6] gap-2">
        <Link to="/" className="hover:underline" type="Link">
          Home
        </Link>
        <Link to="/store" className="hover:underline" type="Link">
          Our Store
        </Link>
        <Link to="/blogs" className="hover:underline" type="Link">
          Blogs
        </Link>
        <Link to="/contact" className="hover:underline" type="Link">
          Contact
        </Link>
      </div>
    </div>
  )
}

export default ShopByCategories