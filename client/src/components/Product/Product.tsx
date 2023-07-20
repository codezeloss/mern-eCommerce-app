import { Link, useNavigate } from "react-router-dom"
import heart from "/public/assets/icons/heart-black.svg"
import Rating from "@mui/material/Rating"
import Checkbox from "@mui/material/Checkbox"
import FavoriteBorder from "@mui/icons-material/FavoriteBorder"
import Favorite from "@mui/icons-material/Favorite"
import { useDispatch } from "react-redux"
import { addProductToWishList } from "../../features/product/productSlice"

interface Props {
  productId: string
  src: any
  brand: string
  title: string
  price: string
  totalRating: number
}

function Product({ productId, src, brand, title, price, totalRating }: Props) {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const addToWishlist = () => {
    // @ts-ignore
    dispatch(addProductToWishList(productId))
  }

  return (
    <div className="w-full bg-white shadom-sm rounded-md p-4">
      <div>
        <div className="flex items-center justify-between">
          <div />
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

        <div>
          <img
            className="w-full h-[200px] object-cover cursor-pointer"
            src={src}
            alt="FamousProduct"
            onClick={() => navigate(`/product/${productId}`)}
          />
        </div>
      </div>

      <div>
        <p className="text-red-600 mb-3 text-xs">{brand}</p>
        <Link to={`/product/${productId}`}>
          <h3 className="text-sm font-bold mb-2 leading-5 hover:underline">
            {title}
          </h3>
        </Link>
        <div>
          <Rating
            sx={{ fontSize: 18, mb: 1.5 }}
            name="simple-controlled"
            value={totalRating}
          />
        </div>
        <p className="text-sm font-medium">${price}</p>
      </div>
    </div>
  )
}

export default Product
