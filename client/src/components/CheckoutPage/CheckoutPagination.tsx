import { Link } from "react-router-dom"
import arrowLeft from "../../assets/icons/arrow-left.svg"

interface Props {
  path: string
}

function CheckoutPagination({ path }: Props) {
  return (
    <div className="flex items-center justify-between my-4">
      <Link to={`/cart/checkout/${path}`} className="flex items-center gap-2">
        <img className="w-4 h-4" src={arrowLeft} alt="Return to information" />
        <p className="text-sm text-gray/[.8]">Return to information</p>
      </Link>

      <button className="p-4 text-white bg-red-600 rounded-md text-sm">
        Continue to payment
      </button>
    </div>
  )
}

export default CheckoutPagination
