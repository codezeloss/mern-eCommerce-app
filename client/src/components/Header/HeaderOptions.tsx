import { Link } from "react-router-dom"
import categories from "../../../public/icons/categories-icon.svg"
import chevronDown from "../../../public/icons/chevron-down.svg"

function HeaderOptions() {
  return (
    <div className="bg-secondary py-2">
      <div className="container flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <div className="flex items-center  border-r-white/[.3] border-r-[1px] pr-2 space-x-14">
            <div className="flex items-center space-x-2">
              <img className="w-6 h-6" src={categories} alt="" />
              <p className="uppercase text-xs font-normal">Shop Categories</p>
            </div>
            <img className="w-3 h-4" src={chevronDown} alt="" />
          </div>

          <div className="flex space-x-8">
            <Link className="uppercase text-xs" to="/">
              Home
            </Link>
            <Link className="uppercase text-xs" to="/store">
              Our Store
            </Link>
            <Link className="uppercase text-xs" to="/blogs">
              Blogs
            </Link>
            <Link className="uppercase text-xs" to="/contact">
              Contact
            </Link>
          </div>
        </div>

        <div></div>
      </div>
    </div>
  )
}

export default HeaderOptions
