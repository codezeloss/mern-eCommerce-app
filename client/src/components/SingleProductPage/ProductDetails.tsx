import Rating from "@mui/material/Rating"
import heartIcon from "/public/assets/icons/heart-black.svg"
import copyIcon from "/public/assets/icons/copy-icon.svg"
import compareIcon from "/public/assets/icons/arrow-right-left.svg"
import React, { useEffect, useState } from "react"
import { toast } from "react-toastify"

interface Props {
  productTitle: string
  price: string
  totalRating: number
  brand: string
  category: string
  quantity: string
  addProductToCart: any
  colors: any
  enteredColor: any
  enteredQuantity: any
  setEnteredColor: any
  setEnteredQuantity: any
}

function ProductDetails({
  productTitle,
  price,
  totalRating,
  brand,
  category,
  quantity,
  addProductToCart,
  colors,
  enteredColor,
  enteredQuantity,
  setEnteredColor,
  setEnteredQuantity,
}: Props) {
  return (
    <div>
      <h3 className="text-lg py-2 mb-1 border-b border-b-gray/[.1]">
        {productTitle}
      </h3>

      <div className="pb-1 mb-1 border-b border-b-gray/[.1]">
        <p className="font-bold my-2">${price}</p>
        <div className="flex items-center gap-2 mb-3">
          <Rating
            sx={{ fontSize: 18 }}
            name="simple-controlled"
            value={totalRating}
            readOnly
          />
          <p className="text-gray/[.7] text-xs">(2 reviews)</p>
        </div>
        <button className="text-gray/[.7] text-xs mb-2">Write a review</button>
      </div>

      {/*
        <div className="flex items-center gap-1 mb-3">
          <p className="font-bold text-sm">Type:</p>
          <p className="text-xs text-gray/[.7]">Headsets</p>
        </div>
        */}

      <div className="flex items-center gap-1 mb-3">
        <p className="font-bold text-sm">Brand:</p>
        <p className="text-xs text-gray/[.7]">{brand}</p>
      </div>

      <div className="flex items-center gap-1 mb-3">
        <p className="font-bold text-sm">Category:</p>
        <p className="text-xs text-gray/[.7]">{category}</p>
      </div>

      <div className="flex items-center gap-1 mb-3">
        <p className="font-bold text-sm">Tags:</p>
        <p className="text-xs text-gray/[.7]">
          headphones, laptop, mobile, oppo, speaker
        </p>
      </div>

      <div className="flex items-center gap-2 mb-3">
        <p className="font-bold text-sm">Availability:</p>
        <p className="text-xs text-gray/[.7]">
          <span>{quantity}</span> In Stock
        </p>
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
          {colors &&
            colors.map((color: any, index: React.Key | null | undefined) => {
              return (
                <div
                  style={{ backgroundColor: color.title.toLowerCase() }}
                  key={index}
                  className={`w-fit p-3 rounded-full cursor-pointer`}
                  onClick={() => setEnteredColor(color._id)}
                />
              )
            })}
        </div>
      </div>

      <div className="flex items-center gap-6 mb-8">
        <p className="font-bold text-sm">Quantity:</p>
        <input
          className="w-20"
          type="number"
          placeholder="1"
          value={enteredQuantity}
          onChange={(e) => setEnteredQuantity(e.target.value)}
        />
        <div className="w-full flex items-center gap-2">
          <button className="block primary-btn" onClick={addProductToCart}>
            Add to Cart
          </button>
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
        <button
          type="button"
          className="flex items-center gap-1"
          onClick={() => {}}
        >
          <img className="w-5 h-5" src={copyIcon} alt="Like" />
          <p className="text-gray text-xs">Product Link</p>
        </button>
      </div>
    </div>
  )
}

export default ProductDetails
