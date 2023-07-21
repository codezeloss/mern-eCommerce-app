import ProductTag from "../Product/ProductTag"
import RandomProduct from "./RandomProduct"
import ShopByCategories from "../ShopByCategories"
import { useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

function SideFilters({
  brand,
  setBrand,
  category,
  setCategory,
  tag,
  setTag,
  minPrice,
  setMinPrice,
  maxPrice,
  setMaxPrice,
}: any) {
  const [brands, setBrands] = useState<any[]>([])
  const [categories, setCategories] = useState<any[]>([])
  const [tags, setTags] = useState<any[]>([])

  // ** RTK - Single Product state
  const productsState = useSelector((state: any) => state.product.products)

  // ** Filters
  useEffect(() => {
    let newBrands = []
    let category = []
    let newTags = []

    for (let i = 0; i < productsState.length; i++) {
      const element = productsState[i]

      newBrands.push(element.brand)
      category.push(element.category)
      newTags.push(element.tags)
    }

    setBrands(newBrands)
    setCategories(category)
    setTags(newTags)
  }, [productsState])

  return (
    <div className="w-[300px]">
      <div className="bg-white rounded-md shadow-sm p-4 mb-3">
        <h2 className="text-base mb-3">Shop By Categories</h2>
        <div className="flex flex-col items-start text-xs text-gray/[.6] gap-2">
          {categories &&
            [...new Set(categories)].map((item, index) => (
              <div key={index}>
                <p
                  className="hover:underline cursor-pointer"
                  onClick={() => setCategory(item)}
                >
                  {item}
                </p>
              </div>
            ))}
        </div>
      </div>

      <div className="bg-white rounded-md shadow-sm p-4 mb-3">
        <h2 className="text-base mb-3">Filter By</h2>

        {/*
          <div className="mb-6">
            <p className="text-sm font-medium mb-2">Availability</p>

            <div className="flex items-center gap-2 mb-2">
              <input
                className="border-gray/[.6] w-fit"
                type="checkbox"
                name=""
                id=""
              />
              <p className="text-xs text-gray/[.6]">In stock (21)</p>
            </div>
            <div className="flex items-center gap-2">
              <input
                className="border-gray/[.6] w-fit"
                type="checkbox"
                name=""
                id=""
              />
              <p className="text-xs text-gray/[.6]">Out of stock (21)</p>
            </div>
          </div>
        */}

        <div className="mb-6">
          <p className="text-sm font-medium mb-2">Price</p>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              <p className="text-sm text-gray/[.6]">$</p>
              <input
                className="border-0 bg-gray/[.1] text-xs p-2 w-full outline-none"
                type="text"
                name="from-price"
                placeholder="From"
                onChange={(e: any) => setMinPrice(e.target.value)}
              />
            </div>
            <div className="flex items-center gap-1">
              <p className="text-sm text-gray/[.6]">$</p>
              <input
                className="border-0 bg-gray/[.1] text-xs p-2 w-full outline-none"
                type="text"
                name="price-to"
                placeholder="To"
                onChange={(e: any) => setMaxPrice(e.target.value)}
              />
            </div>
          </div>
        </div>

        {/*
          <div className="mb-6">
            <p className="text-sm font-medium mb-2">Color</p>

            <div className="grid grid-cols-7 gap-2">
              <div className="w-fit p-3 bg-yellow-900 rounded-full"></div>
              <div className="w-fit p-3 bg-yellow-900 rounded-full"></div>
              <div className="w-fit p-3 bg-yellow-900 rounded-full"></div>
              <div className="w-fit p-3 bg-yellow-900 rounded-full"></div>
            </div>
          </div>
        */}

        {/*
          <div className="mb-6 w-fit">
            <p className="text-sm font-medium mb-2">Size</p>

            <div className="flex items-center gap-2 mb-2">
              <input
                className="border-gray/[.6] w-fit"
                type="checkbox"
                name=""
                id=""
              />
              <p className="text-xs text-gray/[.6]">S (10)</p>
            </div>
            <div className="flex items-center gap-2 mb-2">
              <input
                className="border-gray/[.6] w-fit"
                type="checkbox"
                name=""
                id=""
              />
              <p className="text-xs text-gray/[.6]">M (10)</p>
            </div>
            <div className="flex items-center gap-2 mb-2">
              <input
                className="border-gray/[.6] w-fit"
                type="checkbox"
                name=""
                id=""
              />
              <p className="text-xs text-gray/[.6]">L (10)</p>
            </div>
            <div className="flex items-center gap-2 mb-2">
              <input
                className="border-gray/[.6] w-fit"
                type="checkbox"
                name=""
                id=""
              />
              <p className="text-xs text-gray/[.6]">XL (10)</p>
            </div>
            <div className="flex items-center gap-2 mb-2">
              <input
                className="border-gray/[.6] w-fit"
                type="checkbox"
                name=""
                id=""
              />
              <p className="text-xs text-gray/[.6]">XXL (10)</p>
            </div>
            <div className="flex items-center gap-2 mb-2">
              <input
                className="border-gray/[.6] w-fit"
                type="checkbox"
                name=""
                id=""
              />
              <p className="text-xs text-gray/[.6]">XXXL (10)</p>
            </div>
          </div>
        */}
      </div>

      <div className="bg-white rounded-md shadow-sm p-4 mb-3">
        <h2 className="text-base mb-3">Products Brands</h2>
        <div className="flex flex-wrap gap-2">
          {brands &&
            [...new Set(brands)].map((item, index) => (
              <div
                className="cursor-pointer"
                key={index}
                onClick={() => setBrand(item)}
              >
                <ProductTag title={item} />
              </div>
            ))}
        </div>
      </div>

      <div className="bg-white rounded-md shadow-sm p-4 mb-3">
        <h2 className="text-base mb-3">Products Tags</h2>
        <div className="flex flex-wrap gap-2">
          {tags &&
            [...new Set(tags)].map((item, index) => (
              <div
                className="cursor-pointer"
                key={index}
                onClick={() => setTag(item)}
              >
                <ProductTag title={item} />
              </div>
            ))}
        </div>
      </div>

      {/*
        <div className="bg-white rounded-md shadow-sm p-4 mb-3">
          <h2 className="text-base mb-3">Random Products</h2>
          <div>
            <RandomProduct />
            <RandomProduct />
          </div>
        </div>
      */}
    </div>
  )
}

export default SideFilters
