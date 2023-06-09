import BreadCrumb from "../components/BreadCrumb"
import ContactInfos from "../components/CheckoutPage/ContactInfos"
import ProductInfos from "../components/CheckoutPage/ProductInfos"
import ShippingInfos from "../components/CheckoutPage/ShippingInfos"
import PaymentInfos from "../components/CheckoutPage/PaymentInfos"
import { useLocation } from "react-router-dom"
import CheckoutBreadCrumb from "../components/CheckoutPage/CheckoutBreadCrumb"

function Checkout() {
  const { pathname } = useLocation()

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

              <ProductInfos />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Checkout
