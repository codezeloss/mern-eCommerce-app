import BreadCrumb from "../components/BreadCrumb"
import { productData } from "../components/productData"
import Product from "../components/Product"
import TopFilters from "../components/OurStorePage/TopFilters"
import SideFilters from "../components/OurStorePage/SideFilters"

function OurStore() {
  return (
    <>
      <div className="flex items-center justify-center">
        <BreadCrumb title="Our Store" path="/store" />
      </div>

      <div className="bg-lightGray py-6">
        <div className="container">
          <div className=" flex gap-4">
            <div className="w-[400px] h-full">
              <SideFilters />
            </div>

            <div className="mb-20">
              <TopFilters />
              <div className="w-full h-full grid grid-cols-4 gap-4 py-4">
                {productData.map((product) => (
                  <Product
                    src={product.image}
                    brand={product.brand}
                    title={product.title}
                    price={product.price}
                  />
                ))}
                {productData.map((product) => (
                  <Product
                    src={product.image}
                    brand={product.brand}
                    title={product.title}
                    price={product.price}
                  />
                ))}
                {productData.map((product) => (
                  <Product
                    src={product.image}
                    brand={product.brand}
                    title={product.title}
                    price={product.price}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default OurStore
