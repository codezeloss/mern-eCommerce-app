import { Link } from "react-router-dom"
import heart from "../../../public/assets/icons/heart-black.svg"
import Rating from "@mui/material/Rating"
import { addProductToWishList } from "../../features/product/productSlice"
import { useDispatch } from "react-redux"
import Checkbox from "@mui/material/Checkbox"
import FavoriteBorder from "@mui/icons-material/FavoriteBorder"
import Favorite from "@mui/icons-material/Favorite"

interface Props {
  id: string
  src: any
  description: string
  rating: number
  brand: string
  title: string
  price: string
  grid?: number
}

function StoreProduct({
  id,
  src,
  description,
  rating,
  brand,
  title,
  price,
  grid,
}: Props) {
  const dispatch = useDispatch()

  const addToWishlist = () => {
    // @ts-ignore
    dispatch(addProductToWishList(id))
  }

  return (
    <div
      className={`w-full bg-white shadow-sm rounded-md  ${
        grid === 1 ? "flex items-center gap-4 p-4" : "px-4 pb-6 pt-2.5"
      }`}
    >
      <div className={`${grid === 1 ? "w-[250px]" : ""}`}>
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
            className={`w-full h-[250px] object-cover text-sm ${
              grid === 1 ? "w-[250px] h-[100%]" : ""
            }`}
            src={src}
            alt="FamousProduct"
          />
        </div>
      </div>

      <div>
        <p className="text-red-600 mb-3 text-xs">{brand}</p>
        <Link to="/products/:id">
          <h3 className="text-sm font-bold mb-2 leading-5 hover:underline">
            {title}
          </h3>
        </Link>
        {grid === 1 && (
          <p
            className="mb-3 text-xs text-gray/[.6]"
            dangerouslySetInnerHTML={{ __html: description }}
          />
        )}
        <div>
          <Rating
            sx={{ fontSize: 18, mb: 1.5 }}
            name="simple-controlled"
            value={rating}
            readOnly
          />
        </div>
        <p className="text-sm font-medium">${price}</p>
      </div>
    </div>
  )
}

export default StoreProduct
