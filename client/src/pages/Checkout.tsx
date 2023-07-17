import BreadCrumb from "../components/BreadCrumb"
import ContactInfos from "../components/CheckoutPage/ContactInfos"
import ProductInfos from "../components/CheckoutPage/ProductInfos"
import ShippingInfos from "../components/CheckoutPage/ShippingInfos"
import { useLocation } from "react-router-dom"
import CheckoutBreadCrumb from "../components/CheckoutPage/CheckoutBreadCrumb"
import { useDispatch, useSelector } from "react-redux"
import React, { useEffect, useState } from "react"
import { getUserCart } from "../features/user/userSlice"

function Checkout() {
  const { pathname } = useLocation()
  const dispatch = useDispatch()
  const [totalAmount, setTotalAmount] = useState(0)

  // ** RTK - Cart State
  const cartState = useSelector((state: any) => state.auth.userCart)

  // ** Get user cart
  useEffect(() => {
    // @ts-ignore
    dispatch(getUserCart())
  }, [])

  // ** Get Total cart Amount
  useEffect(() => {
    let sum = 0
    if (cartState) {
      for (let i = 0; i < cartState.length; i++) {
        sum = sum + Number(cartState[i].quantity) * cartState[i].price
        setTotalAmount(sum)
      }
    } else {
      setTotalAmount(0)
    }
  }, [cartState])

  return (
    <>
      <div>
        <div className="flex items-center justify-center">
          <BreadCrumb path="/cart/checkout" title="Checkout" />
        </div>

        <div className="bg-white h-full py-6">
          <div className="container mb-20">
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white pr-12 border-r-gray/[.1] border-r-[2px] mr-6 col-span-2">
                <h1 className="text-2xl mb-1">@Tecos.</h1>
                <CheckoutBreadCrumb path={pathname} />
                {pathname === "/cart/checkout/information" && <ContactInfos />}
                {pathname === "/cart/checkout/shipping" && <ShippingInfos />}
              </div>

              <div>
                <div>
                  {cartState &&
                    cartState.map(
                      (product: any, index: React.Key | null | undefined) => (
                        <div key={index}>
                          <ProductInfos
                            image={product.productId?.images[0].url}
                            quantity={product?.quantity}
                            title={product.productId?.title}
                            color={product.color?.title}
                            price={product.price}
                          />
                        </div>
                      ),
                    )}
                </div>

                <div className="border-b-gray/[.2] border-b pb-4 mb-4">
                  <div className="flex items-center justify-between mb-3">
                    <p className="text-gray/[.9] text-xs">Subtotal</p>
                    <p>${totalAmount ? totalAmount : 0}</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-gray/[.9] text-xs">Shipping</p>
                    <p>$19.65</p>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-3">
                    <p>Total</p>
                    <p className="text-lg">
                      <span className="text-xs text-gray/[.6] mr-2">USD</span>$
                      {totalAmount ? totalAmount + 19.65 : 0}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Checkout
