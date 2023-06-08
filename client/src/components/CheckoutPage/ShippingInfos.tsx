import arrowLeft from "/icons/arrow-left.svg"
import { Link } from "react-router-dom"
import PaymentInfos from "./PaymentInfos"
import CheckoutPagination from "./CheckoutPagination"

function ShippingInfos() {
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
        {false && (
          <div className="flex items-center justify-between pt-4 border-t-[1px] border-t-gray/[.1]">
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

      <CheckoutPagination />

      {false && <PaymentInfos />}
    </div>
  )
}

export default ShippingInfos
