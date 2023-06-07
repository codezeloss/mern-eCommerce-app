import BreadCrumb from "../components/BreadCrumb"
import ProductImages from "../components/SingleProductPage/ProductImages"
import ProductDetails from "../components/SingleProductPage/ProductDetails"
import Accordions from "../components/SingleProductPage/Accordions"
import ProductDescription from "../components/SingleProductPage/ProductDescription"
import Reviews from "../components/SingleProductPage/Reviews"
import PopularProducts from "../components/SingleProductPage/PopularProducts"

function SingleProduct() {
  return (
    <>
      <div>
        <div className="flex items-center justify-center">
          <BreadCrumb path="/products/:id" title="Single Product Page" />
        </div>

        <div className="bg-lightGray h-full py-6">
          <div className="container mb-20">
            <div className="flex gap-x-3 gap-y-6 flex-wrap">
              <div>
                <div className="bg-white w-full h-fit rounded-md shadow-sm p-6 grid gap-4 grid-cols-2">
                  <ProductImages />
                  <div>
                    <ProductDetails />
                    <Accordions />
                  </div>
                </div>

                <ProductDescription />
                <Reviews />
                <PopularProducts />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SingleProduct
