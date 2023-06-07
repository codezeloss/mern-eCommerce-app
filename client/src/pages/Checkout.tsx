import BreadCrumb from "../components/BreadCrumb"

function Checkout() {
  return (
    <>
      <div>
        <div className="flex items-center justify-center">
          <BreadCrumb path="/cart/checkout" title="Checkout" />
        </div>

        <div className="bg-lightGray h-full py-6">
          <div className="container mb-20">
            <div></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Checkout
