import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import PaymentInfos from "./PaymentInfos"

import arrowLeft from "../../assets/icons/arrow-left.svg"

function ShippingInfos() {
  const [payment, setPayment] = useState(false)
  const { pathname } = useLocation()

  let path = pathname

  return (
    <div>
      <div className="border-[1px] border-gray/[.1] rounded-md px-4 pt-4 text-sm text-gray/[.8] my-8">
        <div className="flex items-center justify-between border-b-[1px] border-b-gray/[.1] pb-4">
          <p>Contact</p>
          <p>test@gmail.com</p>
          <button className="text-xs hover:underline">Change</button>
        </div>
        <div className="flex items-center justify-between py-4">
          <p>Ship to</p>
          <p>test@gmail.com</p>
          <button className="text-xs hover:underline">Change</button>
        </div>
        {payment && (
          <div className="flex items-center justify-between py-4 border-t-[1px] border-t-gray/[.1]">
            <p>Method</p>
            <p>
              Standard - <span className="font-bold text-primary">$19.65</span>
            </p>
            <div></div>
          </div>
        )}
      </div>

      <div>
        <h2 className="text-lg mb-4 text-primary">Shipping method</h2>
        <div className="flex items-center justify-between border-[1px] border-gray/[.1] rounded-md p-4 text-sm text-gray/[.8] mb-10">
          <div className="flex items-center gap-2">
            <input
              className="bg-primary text-primary"
              type="checkbox"
              name=""
              id=""
            />
            <p>Standard</p>
          </div>
          <p className="text-primary">$19.65</p>
        </div>
      </div>

      {!payment && (
        <div className="flex items-center justify-between my-4">
          <Link
            to="/cart/checkout/information"
            className="flex items-center gap-2"
          >
            <img
              className="w-4 h-4"
              src={arrowLeft}
              alt="Return to information"
            />
            <p className="text-sm text-gray/[.8]">Return to information</p>
          </Link>

          <button
            className="p-4 text-white bg-red-600 rounded-md text-sm"
            onClick={() => {
              setPayment(!payment)
            }}
          >
            Continue to payment
          </button>
        </div>
      )}

      {payment && <PaymentInfos />}
    </div>
  )
}

export default ShippingInfos
