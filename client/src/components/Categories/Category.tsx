import laptop from "../../../public/images/laptop.jpg"
import { Link } from "react-router-dom"

function Category() {
  return (
    <Link to="/">
      <div className="w-full flex items-center gap-2 p-8">
        <div>
          <p className="text-sm font-semibold mb-2 hover:underline">
            Computers & Laptop
          </p>
          <p className="text-xs text-gray font-light">8 items</p>
        </div>

        <div>
          <img className="" src={laptop} alt="Category" />
        </div>
      </div>
    </Link>
  )
}

export default Category
