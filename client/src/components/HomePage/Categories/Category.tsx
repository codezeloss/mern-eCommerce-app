import laptop from "../../../assets/images/laptop.jpg"
import { Link } from "react-router-dom"

function Category() {
  return (
    <Link to="/">
      <div className="w-full flex items-center gap-2 p-5">
        <div>
          <p className="text-base font-semibold mb-2 hover:underline leading-5">
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
