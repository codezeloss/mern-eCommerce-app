import SpecialProduct from "./SpecialProduct"
import { useDispatch, useSelector } from "react-redux"
import React, { useEffect } from "react"
import { getAllProducts } from "../../../features/product/productSlice"
import Product from "../../Product/Product"

interface Props {
  _id: string
  images: any
  brand: string
  title: string
  price: string
  totalRating: number
  tags: string
  quantity: number
}

function SpecialProducts() {
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
      <div className="container">
        <h2 className="font-bold text-2xl mb-4">Special Products</h2>
        <div className="grid gap-4 grid-cols-3 mb-20">
          {productsState &&
            productsState.map(
              (product: Props, index: React.Key | null | undefined) => {
                if (product?.tags === "special") {
                  return (
                    <div key={index}>
                      <SpecialProduct
                        productId={product?._id}
                        image={product?.images[0]?.url}
                        brand={product?.brand}
                        title={product?.title}
                        price={product?.price}
                        totalRating={product?.totalRating}
                        quantity={product?.quantity}
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

export default SpecialProducts
