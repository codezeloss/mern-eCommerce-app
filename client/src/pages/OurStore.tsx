import BreadCrumb from "../components/BreadCrumb"
import { productData } from "../components/productData"
import Product from "../components/OurStorePage/Product"
import TopFilters from "../components/OurStorePage/TopFilters"
import SideFilters from "../components/OurStorePage/SideFilters"
import { useState } from "react"

function OurStore() {
  const [grid, setGrid] = useState(4)

  return (
    <>
      <div className="flex items-center justify-center">
        <BreadCrumb title="Our Store" path="/store" />
      </div>

      <div className="bg-lightGray py-6">
        <div className="container">
          <div className="w-full flex gap-4">
            <div className="w-[300px] h-full">
              <SideFilters />
            </div>

            <div className="w-full mb-20">
              <TopFilters grid={grid} setGrid={setGrid} />
              <div className={`w-full grid grid-cols-${grid} gap-4 py-4`}>
                {productData.map((product) => (
                  <Product
                    src={product.image}
                    brand={product.brand}
                    title={product.title}
                    price={product.price}
                    grid={grid}
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
