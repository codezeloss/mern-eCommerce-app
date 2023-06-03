import productPic from "../../public/images/watch.jpg"
import heart from "../../public/icons/heart-black.svg"
import { useState } from "react"
import Rating from "@mui/material/Rating"

function Product({ src, brand, title, price }: Props) {
  const [value, setValue] = useState(2)

  return (
    <div className="w-fit bg-white shadom-sm rounded-md p-4">
      <div className="flex items-center justify-between">
        <div></div>
        <button type="button">
          <img className="w-4 h-4 text-black" src={heart} alt="Like" />
        </button>
      </div>

      <div>
        <img
          className="w-[300px] h-[200px] object-cover"
          src={src}
          alt="FamousProduct"
        />
      </div>

      <div>
        <p className="text-red-600 mb-3 text-xs">{brand}</p>
        <h3 className="text-sm font-bold mb-2 leading-5">{title}</h3>
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

export default Product

interface Props {
  src: any
  brand: string
  title: string
  price: string
}
