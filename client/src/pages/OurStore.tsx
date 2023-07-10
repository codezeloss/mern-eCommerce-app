import BreadCrumb from "../components/BreadCrumb"
import { productData } from "../components/Product/productData"
import StoreProduct from "../components/OurStorePage/StoreProduct"
import TopFilters from "../components/OurStorePage/TopFilters"
import SideFilters from "../components/OurStorePage/SideFilters"
import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAllProducts } from "../features/product/productSlice"

interface Props {
  _id: string
  images: any
  description: string
  totalRating: number
  brand: string
  title: string
  price: string
}

function OurStore() {
  const [grid, setGrid] = useState(4)
  const dispatch = useDispatch()

  const productState = useSelector((state: any) => state.product)
  const { isError, isLoading, isSuccess, products } = productState

  useEffect(() => {
    // @ts-ignore
    dispatch(getAllProducts())
  }, [])

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
                {products &&
                  products.map(
                    (product: Props, index: React.Key | null | undefined) => (
                      <div key={index}>
                        <StoreProduct
                          id={product._id}
                          src={product.images[0]?.url}
                          description={product.description}
                          rating={product.totalRating}
                          brand={product.brand}
                          title={product.title}
                          price={product.price}
                          grid={grid}
                        />
                      </div>
                    ),
                  )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default OurStore
