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
  const dispatch = useDispatch()
  const [grid, setGrid] = useState(3)
  const [sort, setSort] = useState("")
  const [brand, setBrand] = useState("")
  const [category, setCategory] = useState("")
  const [tag, setTag] = useState("")
  const [minPrice, setMinPrice] = useState(null)
  const [maxPrice, setMaxPrice] = useState(null)

  // ** RTK - Products state
  const productsState = useSelector((state: any) => state.product.products)
  const { isError, isLoading, isSuccess } = productsState
  const productState = useSelector((state: any) => state.product.product)

  // ** Get All Products
  useEffect(() => {
    const sortBy = {
      sort,
      brand,
      category,
      tag,
      minPrice,
      maxPrice,
    }
    // @ts-ignore
    dispatch(getAllProducts(sortBy))
  }, [sort, brand, category, tag, minPrice, maxPrice])

  return (
    <div className="h-full">
      <div className="flex items-center justify-center">
        <BreadCrumb title="Our Store" path="/store" />
      </div>

      <div className="bg-lightGray py-6">
        <div className="container">
          <div className="w-full flex gap-4">
            <div className="w-[300px] h-full">
              <SideFilters
                brand={brand}
                setBrand={setBrand}
                category={category}
                setCategory={setCategory}
                tag={tag}
                setTag={setTag}
                minPrice={minPrice}
                setMinPrice={setMinPrice}
                maxPrice={maxPrice}
                setMaxPrice={setMaxPrice}
              />
            </div>

            <div className="w-full mb-20">
              <TopFilters
                grid={grid}
                setGrid={setGrid}
                sort={sort}
                setSort={(e: any) => setSort(e.target.value)}
              />

              <div className={`w-full grid grid-cols-${grid} gap-4 py-4`}>
                {productsState &&
                  productsState.map(
                    (product: Props, index: React.Key | null | undefined) => (
                      <div key={index}>
                        <StoreProduct
                          productId={product._id}
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
    </div>
  )
}

export default OurStore
