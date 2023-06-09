import { useState } from "react"
import Rating from "@mui/material/Rating"
import heartIcon from "../../../public/icons/heart-black.svg"
import compareIcon from "../../../public/icons/arrow-right-left.svg"

function ProductDetails() {
  const [value, setValue] = useState(2)

  return (
    <div>
      <h3 className="text-lg py-2 mb-1 border-b border-b-gray/[.1]">
        Kids Headphones Bulk 10 Pack Multi Colored for Students
      </h3>

      <div className="pb-1 mb-1 border-b border-b-gray/[.1]">
        <p className="font-bold my-2">$100.00</p>
        <div className="flex items-center gap-2 mb-3">
          <Rating
            sx={{ fontSize: 18 }}
            name="simple-controlled"
            value={value}
            onChange={(e: any) => {
              setValue(e.target.value)
            }}
          />
          <p className="text-gray/[.7] text-xs">(2 reviews)</p>
        </div>
        <button className="text-gray/[.7] text-xs mb-2">Write a review</button>
      </div>

      <div className="flex items-center gap-1 mb-3">
        <p className="font-bold text-sm">Type:</p>
        <p className="text-xs text-gray/[.7]">Headsets</p>
      </div>

      <div className="flex items-center gap-1 mb-3">
        <p className="font-bold text-sm">Brand:</p>
        <p className="text-xs text-gray/[.7]">Havells</p>
      </div>

      <div className="flex items-center gap-1 mb-3">
        <p className="font-bold text-sm">Category:</p>
        <p className="text-xs text-gray/[.7]">airpods</p>
      </div>

      <div className="flex items-center gap-1 mb-3">
        <p className="font-bold text-sm">Tags:</p>
        <p className="text-xs text-gray/[.7]">
          headphones, laptop, mobile, oppo, speaker
        </p>
      </div>

      <div className="flex items-center gap-2 mb-3">
        <p className="font-bold text-sm">Availability:</p>
        <p className="text-xs text-gray/[.7]">In Stock</p>
      </div>

      <div className="mb-3">
        <p className="font-bold text-sm">Size:</p>
        <div className="flex items-center gap-2">
          <p className="text-xs px-3 py-1 border-[1px] border-gray/[.3]">S</p>
          <p className="text-xs px-3 py-1 border-[1px] border-gray/[.3]">M</p>
          <p className="text-xs px-3 py-1 border-[1px] border-gray/[.3]">XL</p>
          <p className="text-xs px-3 py-1 border-[1px] border-gray/[.3]">XXL</p>
        </div>
      </div>

      <div className="mb-6">
        <p className="font-bold text-sm">Color:</p>
        <div className="text-xs text-gray/[.7] flex items-center gap-2">
          <div className="w-fit p-3 bg-yellow-900 rounded-full"></div>
          <div className="w-fit p-3 bg-yellow-900 rounded-full"></div>
          <div className="w-fit p-3 bg-yellow-900 rounded-full"></div>
          <div className="w-fit p-3 bg-yellow-900 rounded-full"></div>
        </div>
      </div>

      <div className="flex items-center gap-6 mb-8">
        <p className="font-bold text-sm">Quantity:</p>
        <div className="w-full flex items-center gap-2">
          <input className="w-20" type="number" placeholder="1" />
          <button className="block primary-btn">Add to Cart</button>
          <button className="block secondary-btn">Buy It Now</button>
        </div>
      </div>

      <div className="flex items-center gap-2 mt-4 mb-2">
        <button type="button" className="flex px-4 items-center gap-1">
          <img className="w-5 h-5" src={heartIcon} alt="Like" />
          <p className="text-gray text-xs">Add to wishlist</p>
        </button>
        <button type="button" className="flex items-center gap-1">
          <img className="w-5 h-5" src={compareIcon} alt="Compare" />
          <p className="text-gray text-xs">Add to compare</p>
        </button>
      </div>
    </div>
  )
}

export default ProductDetails
