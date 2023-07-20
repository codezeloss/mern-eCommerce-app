import { productData } from "../Product/productData"
import Product from "../Product/Product"
import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAllProducts } from "../../features/product/productSlice"

interface Props {
  _id: string
  image: any
  images: any
  brand: string
  title: string
  price: string
  totalRating?: number
  tags: string
}

function PopularProducts() {
  const dispatch = useDispatch()

  // RTK - blogs state
  const productsState = useSelector((state: any) => state.product.products)

  //
  useEffect(() => {
    // @ts-ignore
    dispatch(getAllProducts())
  }, [])

  return (
    <>
      <div className="container px-0">
        <h2 className="text-lg mt-8 mb-2">Popular Products</h2>
        <div className="grid grid-cols-5 gap-2">
          {productsState &&
            productsState.map(
              (product: Props, index: React.Key | null | undefined) => {
                if (product?.tags === "popular") {
                  return (
                    <div key={index}>
                      <Product
                        productId={product?._id}
                        src={product?.images[0]?.url}
                        brand={product?.brand}
                        title={product?.title}
                        price={product?.price}
                        totalRating={5}
                      />
                    </div>
                  )
                }
              },
            )}
        </div>
      </div>
    </>
  )
}

export default PopularProducts
