import productPic from "../../../public/images/watch.jpg"
import heart from "../../../public/icons/heart-black.svg"
import { useState } from "react"
import Rating from "@mui/material/Rating"

function StoreProduct({ src, brand, title, price, grid }: Props) {
  const [value, setValue] = useState(2)

  return (
    <div
      className={`w-full bg-white shadow-sm rounded-md p-4 ${
        grid === 1 ? "flex items-center gap-4" : ""
      }`}
    >
      <div>
        <div className="flex items-center justify-between">
          <div></div>
          <button type="button">
            <img className="w-4 h-4 text-black" src={heart} alt="Like" />
          </button>
        </div>

        <div>
          <img
            className={`w-full h-[200px] object-cover ${
              grid === 1 ? "w-[500px] h-[100%]" : ""
            }`}
            src={src}
            alt="FamousProduct"
          />
        </div>
      </div>

      <div>
        <p className="text-red-600 mb-3 text-xs">{brand}</p>
        <h3 className="text-sm font-bold mb-2 leading-5">{title}</h3>
        {grid === 1 && (
          <p className="mb-3 text-xs text-gray/[.6]">
            Apple Watch can do what your other devices can’t because it’s on
            your wrist. When you wear it, you get a fitness partner that
            measures all the ways you move, meaningful health insights, and a
            connection to the people and things you care about most.
          </p>
        )}
        <Rating
          sx={{ fontSize: 18, mb: 1.5 }}
          name="simple-controlled"
          value={value}
          onChange={(e: any) => {
            setValue(e.target.value)
          }}
        />
        <p className="text-sm font-medium">${price}</p>
      </div>
    </div>
  )
}

export default StoreProduct

interface Props {
  src: any
  brand: string
  title: string
  price: string
  grid?: number
}
