import BreadCrumb from "../components/BreadCrumb"
import BlogPageDetails from "../components/BlogsPage/BlogPageDetails"
import ProductCart from "../components/CartPage/ProductCart"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import React, { useEffect, useState } from "react"
import { getUserCart } from "../features/user/userSlice"

function Cart() {
  const dispatch = useDispatch()
  const [totalAmount, setTotalAmount] = useState(0)

  // ** RTK - User cart state
  const userCartState = useSelector((state: any) => state.auth.userCart)

  // ** Get user cart
  useEffect(() => {
    // @ts-ignore
    dispatch(getUserCart())
  }, [])

  // ** Calculate Total cart Amount
  useEffect(() => {
    let sum = 0
    if (userCartState) {
      for (let i = 0; i < userCartState.length; i++) {
        sum = sum + Number(userCartState[i].quantity) * userCartState[i].price
        setTotalAmount(sum)
      }
    } else {
      setTotalAmount(0)
    }
  }, [userCartState])

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

            <div>
              {userCartState &&
                userCartState.map((product: any, index: React.Key) => (
                  <div key={index}>
                    <ProductCart
                      itemId={userCartState[index]?._id}
                      productId={userCartState[index]?.productId._id}
                      image={userCartState[index]?.productId.images[0]?.url}
                      title={userCartState[index]?.productId.title}
                      color={userCartState[index]?.color.title}
                      price={userCartState[index]?.price}
                      quantity={userCartState[index]?.quantity}
                    />
                  </div>
                ))}
            </div>

            <Link
              to="/"
              className="primary-btn px-8 py-3 normal-case text-xs text-center"
            >
              Continue Shopping
            </Link>

            {(totalAmount !== null || totalAmount !== 0) && (
              <div className="flex items-center mt-10 justify-between">
                <div />
                <div>
                  <div className="text-end ">
                    <div className="flex items-center justify-between">
                      <div />
                      <div className="text-base font-semibold text-gray flex items-center gap-4 mb-2">
                        <p>Subtotal</p>
                        <p className="font-semibold">
                          ${totalAmount ? totalAmount : 0}
                        </p>
                      </div>
                    </div>
                    <p className="text-xs text-gray/[.6]">
                      Taxes and shipping calculated at checkout
                    </p>
                  </div>
                  <Link
                    to="/cart/checkout/information"
                    className="w-full primary-btn py-3 mt-4 normal-case text-xs text-center"
                  >
                    Check Out
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default Cart
