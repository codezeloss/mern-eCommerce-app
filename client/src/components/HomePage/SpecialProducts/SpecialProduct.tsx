import pic from "../../../../public/assets/images/tab1.jpg"
import heart from "../../../../public/assets/icons/heart-black.svg"
import { styled } from "@mui/material/styles"
import Box from "@mui/material/Box"
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress"
import Rating from "@mui/material/Rating"
import Checkbox from "@mui/material/Checkbox"
import FavoriteBorder from "@mui/icons-material/FavoriteBorder"
import Favorite from "@mui/icons-material/Favorite"
import { useDispatch } from "react-redux"
import { addProductToWishList } from "../../../features/product/productSlice"

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#22c55e" : "#4ade80",
  },
}))

interface Props {
  productId: string
  image: any
  title: string
  brand: string
  price: string
  totalRating: number
  quantity: number
}

function FamousProduct({
  productId,
  image,
  title,
  brand,
  price,
  totalRating,
  quantity,
}: Props) {
  const dispatch = useDispatch()

  const addToWishlist = () => {
    // @ts-ignore
    dispatch(addProductToWishList(productId))
  }

  return (
    <div className="w-full bg-white shadom-sm rounded-md p-4 grid grid-cols-2 items-center">
      <div className="flex flex-col pr-4">
        <div className="flex items-center justify-between">
          <div></div>
          <button className="text-xs" type="button" onClick={addToWishlist}>
            <Checkbox
              sx={{
                color: "#ff3d47",
                p: 0,
                fontSize: "12px",
              }}
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite />}
            />
          </button>
        </div>

        <div className="flex flex-col items-center">
          <div>
            <img src={image} alt="FamousProduct" />
          </div>

          <div className="flex items-center gap-2">
            <img
              className="w-20 h-20 border-gray/[.1] border-[1px]"
              src={image}
              alt="FamousProduct"
            />
            <img
              className="w-20 h-20 border-gray/[.1] border-[1px]"
              src={image}
              alt="FamousProduct"
            />
          </div>
        </div>
      </div>

      <div className="pt-2 pb-6">
        <p className="text-red-600 mb-3 text-xs">{brand}</p>
        <h3 className="text-sm font-bold mb-2 leading-5">{title}</h3>
        <div>
          <Rating
            sx={{ fontSize: 18, mb: 1.5 }}
            name="simple-controlled"
            value={totalRating}
            readOnly
          />
        </div>
        <div className="mb-3 text-sm">
          <p className="text-red-500">${price}</p>
        </div>
        <div className="flex items-center gap-3 mb-3 ml-2">
          <p className="text-xs text-gray/[.8]">
            <span className="font-bold pr-1 text-black">271</span> Days
          </p>
          <div className="flex items-center text-xs">
            <p className="text-white bg-red-500 rounded-full p-2">08</p>
            <p> : </p>
            <p className="text-white bg-red-500 rounded-full p-2">26</p>
            <p> : </p>
            <p className="text-white bg-red-500 rounded-full p-2">02</p>
          </div>
        </div>
        <div>
          <p className="text-xs text-gray/[.5] mb-2">Products: {quantity}</p>
          <Box sx={{ flexGrow: 1, mb: 4 }}>
            <BorderLinearProgress variant="determinate" value={quantity} />
          </Box>
        </div>
        <button className="primary-btn" type="button">
          Add to Cart
        </button>
      </div>
    </div>
  )
}

export default FamousProduct
