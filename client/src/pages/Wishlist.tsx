import BreadCrumb from "../components/BreadCrumb"
import WishlistProduct from "../components/WishlistPage/WishlistProduct"
import { useDispatch, useSelector } from "react-redux"
import React, { useEffect } from "react"
import { getUserProductsWishlist } from "../features/user/userSlice"

interface Props {
  _id: string
  title: string
  price: number
  images: any
}

function Wishlist() {
  const dispatch = useDispatch()

  const wishlistState = useSelector(
    (state: any) => state.auth?.wishlist?.wishlist,
  )

  useEffect(() => {
    // @ts-ignore
    dispatch(getUserProductsWishlist())
  }, [])

  return (
    <>
      <div className="h-full">
        <div className="flex items-center justify-center">
          <BreadCrumb path="/wishlist" title="Wishlist" />
        </div>

        <div className="bg-lightGray min-h-full h-full py-6">
          <div className="container mb-20">
            {!wishlistState && (
              <h1 className="text-xl text-center font-semibold text-secondary">
                Your wishlist is empty
              </h1>
            )}
            <div className="flex gap-x-3 gap-y-6 flex-wrap">
              {wishlistState &&
                wishlistState?.map(
                  (product: Props, index: React.Key | null | undefined) => (
                    <div key={index}>
                      <WishlistProduct
                        productId={product?._id}
                        image={product?.images[0]?.url}
                        title={product?.title}
                        price={product?.price}
                      />
                    </div>
                  ),
                )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Wishlist
