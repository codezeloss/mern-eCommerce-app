import speakerImg from "../../../public/assets/images/speaker.jpg"
import trashIcon from "../../../public/assets/icons/trash-icon.svg"
import { useDispatch } from "react-redux"
import {
  deleteProductFromCart,
  getUserCart,
  updateProductCartQuantity,
} from "../../features/user/userSlice"
import { useEffect, useState } from "react"

interface Props {
  itemId: string
  productId: string
  image: any
  title: string
  color: string
  price: number
  quantity: number
}

interface DataProps {
  cartItemId: string
  newQuantity: number
}

function ProductCart({
  itemId,
  productId,
  image,
  title,
  color,
  price,
  quantity,
}: Props) {
  const dispatch = useDispatch()
  const [productUpdateDetails, setProductUpdateDetails] =
    useState<DataProps | null>(null)

  // **
  useEffect(() => {
    // @ts-ignore
    dispatch(getUserCart())
  }, [])

  // **
  useEffect(() => {
    if (productUpdateDetails !== null) {
      const data: DataProps = {
        cartItemId: productUpdateDetails?.cartItemId,
        newQuantity: productUpdateDetails?.newQuantity,
      }
      // @ts-ignore
      dispatch(updateProductCartQuantity(data))
      setTimeout(() => {
        // @ts-ignore
        dispatch(getUserCart())
      }, 200)
    }
  }, [productUpdateDetails])

  return (
    <div className="grid grid-cols-5 items-center pb-8 border-b-gray/[.1] border-b-[1px] mb-8">
      <div className="col-span-2">
        <div className="flex items-center gap-6 mr-20">
          <div className="w-40 h-40">
            <img
              className="text-sm w-40 h-40"
              src={image}
              alt="Product image"
            />
          </div>
          <div className="text-xs text-gray/[.6] flex flex-col gap-2">
            <p>{title}</p>
            <p>Size: S</p>
            <div className="flex items-center gap-1">
              <p>Color: </p>
              <p
                className={`w-fit p-3 rounded-full`}
                style={{ backgroundColor: color.toLowerCase() }}
              />
            </div>
          </div>
        </div>
      </div>

      <div>
        <p className="font-semibold text-sm">${price}</p>
      </div>

      <div className="flex items-center gap-3">
        <input
          className="w-24 bg-white"
          type="number"
          placeholder="1"
          value={
            productUpdateDetails?.newQuantity
              ? productUpdateDetails?.newQuantity
              : quantity
          }
          onChange={(e: any) => {
            setProductUpdateDetails({
              cartItemId: itemId,
              newQuantity: e.target.value,
            })
          }}
        />
        <button
          className=""
          type="button"
          onClick={() => {
            // @ts-ignore
            dispatch(deleteProductFromCart(productId))
            setTimeout(() => {
              // @ts-ignore
              dispatch(getUserCart())
            }, 200)
          }}
        >
          <img
            className="bg-primary w-8 h-8 p-2 rounded-full"
            src={trashIcon}
            alt="Delete"
          />
        </button>
      </div>

      <div>
        <p className="font-semibold text-sm">${price * quantity}</p>
      </div>
    </div>
  )
}

export default ProductCart
