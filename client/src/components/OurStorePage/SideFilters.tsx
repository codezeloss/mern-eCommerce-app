import ProductTag from "../Product/ProductTag"
import RandomProduct from "../Product/RandomProduct"
import ShopByCategories from "../ShopByCategories"

function SideFilters() {
  return (
    <div className="w-[300px]">
      <ShopByCategories />

      <div className="bg-white rounded-md shadow-sm p-4 mb-3">
        <h2 className="text-base mb-3">Filter By</h2>

        <div className="mb-6">
          <p className="text-sm font-medium mb-2">Availability</p>
          <div className="flex items-center gap-2 mb-2">
            <input className="border-gray/[.6]" type="checkbox" name="" id="" />
            <p className="text-xs text-gray/[.6]">In stock (21)</p>
          </div>
          <div className="flex items-center gap-2">
            <input className="border-gray/[.6]" type="checkbox" name="" id="" />
            <p className="text-xs text-gray/[.6]">Out of stock (21)</p>
          </div>
        </div>

        <div className="mb-6">
          <p className="text-sm font-medium mb-2">Price</p>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              <p className="text-sm text-gray/[.6]">$</p>
              <input
                className="border border-0 bg-gray/[.1] text-xs p-2 w-full outline-none"
                type="text"
                name="from-price"
                placeholder="From"
              />
            </div>
            <div className="flex items-center gap-1">
              <p className="text-sm text-gray/[.6]">$</p>
              <input
                className="border border-0 bg-gray/[.1] text-xs p-2 w-full outline-none"
                type="text"
                name="price-to"
                placeholder="To"
              />
            </div>
          </div>
        </div>

        <div className="mb-6">
          <p className="text-sm font-medium mb-2">Color</p>
          <div className="grid grid-cols-7 gap-2">
            <div className="w-fit p-3 bg-yellow-900 rounded-full"></div>
            <div className="w-fit p-3 bg-yellow-900 rounded-full"></div>
            <div className="w-fit p-3 bg-yellow-900 rounded-full"></div>
            <div className="w-fit p-3 bg-yellow-900 rounded-full"></div>
          </div>
        </div>

        <div className="mb-6">
          <p className="text-sm font-medium mb-2">Size</p>
          <div className="flex items-center gap-2 mb-2">
            <input className="border-gray/[.6]" type="checkbox" name="" id="" />
            <p className="text-xs text-gray/[.6]">S (10)</p>
          </div>
          <div className="flex items-center gap-2 mb-2">
            <input className="border-gray/[.6]" type="checkbox" name="" id="" />
            <p className="text-xs text-gray/[.6]">M (10)</p>
          </div>
          <div className="flex items-center gap-2 mb-2">
            <input className="border-gray/[.6]" type="checkbox" name="" id="" />
            <p className="text-xs text-gray/[.6]">L (10)</p>
          </div>
          <div className="flex items-center gap-2 mb-2">
            <input className="border-gray/[.6]" type="checkbox" name="" id="" />
            <p className="text-xs text-gray/[.6]">XL (10)</p>
          </div>
          <div className="flex items-center gap-2 mb-2">
            <input className="border-gray/[.6]" type="checkbox" name="" id="" />
            <p className="text-xs text-gray/[.6]">XXL (10)</p>
          </div>
          <div className="flex items-center gap-2 mb-2">
            <input className="border-gray/[.6]" type="checkbox" name="" id="" />
            <p className="text-xs text-gray/[.6]">XXXL (10)</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-md shadow-sm p-4 mb-3">
        <h2 className="text-base mb-3">Product Tag</h2>
        <div className="flex flex-wrap gap-2">
          <ProductTag title="Headphones" />
          <ProductTag title="Tablet" />
          <ProductTag title="Speaker" />
          <ProductTag title="Laptop" />
          <ProductTag title="Laptop" />
          <ProductTag title="Laptop" />
          <ProductTag title="Speaker" />
        </div>
      </div>

      <div className="bg-white rounded-md shadow-sm p-4 mb-3">
        <h2 className="text-base mb-3">Random Products</h2>
        <div>
          <RandomProduct />
          <RandomProduct />
        </div>
      </div>
    </div>
  )
}

export default SideFilters
