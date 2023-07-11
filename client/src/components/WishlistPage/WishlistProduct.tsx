import tabletImg from "../../../public/assets/images/tab.jpg"
import xMark from "../../../public/assets/icons/x-mark.svg"
import { useDispatch } from "react-redux"
import { useEffect } from "react"
import { getUserProductsWishlist } from "../../features/user/userSlice"
import { addProductToWishList } from "../../features/product/productSlice"

interface Props {
  productId: string
  image: string
  title: string
  price: number
}

function WishlistProduct({
  productId,
  image = tabletImg,
  title,
  price,
}: Props) {
  const dispatch = useDispatch()

  useEffect(() => {
    // @ts-ignore
    dispatch(getUserProductsWishlist())
  }, [])

  // Remove product from the wishlist
  const removeFromWishlist = () => {
    // @ts-ignore
    dispatch(addProductToWishList(productId))

    setTimeout(() => {
      getUserProductsWishlist()
    }, 300)
  }

  return (
    <div className="w-60 relative">
      <img className="w-60 h-60" src={image} alt="" />
      <div className="absolute top-0 right-0 flex items-center justify-between pt-2 px-2">
        <div />
        <button type="button" onClick={removeFromWishlist}>
          <img className="w-5 h-5" src={xMark} alt="Delete" />
        </button>
      </div>

      <div className="text-sm">
        <div className="py-1">
          <h3 className="text-sm hover:underline mb-4 font-bold cursor-pointer">
            {title}
          </h3>
          <p className="font-semibold">${price}</p>
        </div>
      </div>
    </div>
  )
}

export default WishlistProduct
