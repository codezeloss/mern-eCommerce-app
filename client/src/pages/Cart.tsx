import BreadCrumb from "../components/BreadCrumb"
import BlogPageDetails from "../components/BlogsPage/BlogPageDetails"
import ProductCart from "../components/CartPage/ProductCart"
import { Link } from "react-router-dom"

function Cart() {
  return (
    <>
      <div>
        <div className="flex items-center justify-center">
          <BreadCrumb path="/cart" title="Shopping Cart" />
        </div>

        <div className="bg-lightGray h-full py-6">
          <div className="container mb-20">
            <div className="grid grid-cols-5 mb-10 text-gray/[.8] text-sm">
              <div className="col-span-2">
                <h3>Product</h3>
              </div>
              <div className="">
                <h3>Price</h3>
              </div>
              <div className="">
                <h3>Quantity</h3>
              </div>
              <div className="">
                <h3>Total</h3>
              </div>
            </div>

            {/* !! map() */}
            <div>
              <ProductCart />
              <ProductCart />
              <ProductCart />
            </div>

            <Link
              to="/"
              className="primary-btn px-8 py-3 normal-case text-xs text-center"
            >
              Continue Shopping
            </Link>

            <div className="flex items-center mt-10 justify-between">
              <div />
              <div>
                <div className="text-gray/[.6] text-end text-sm">
                  <div className="flex items-center justify-between">
                    <div></div>
                    <div className="flex items-center gap-4 mb-2">
                      <p>Subtotal</p>
                      <p className="font-semibold">$100.00</p>
                    </div>
                  </div>
                  <p>Taxes and shipping calculated at checkout</p>
                </div>
                <Link
                  to="/cart/checkout"
                  className="w-full primary-btn py-3 mt-4 normal-case text-xs text-center"
                >
                  Check Out
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cart
