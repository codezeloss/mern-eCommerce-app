import tabletImg from "/images/tab.jpg"
import xMark from "/icons/x-mark.svg"

function ComparedProduct() {
  return (
    <div className="w-60">
      <div className="relative">
        <img className="w-60 h-60" src={tabletImg} alt="" />
        <div className="absolute top-0 right-0 flex items-center justify-between pt-2 px-2">
          <div></div>
          <button type="button">
            <img className="w-5 h-5" src={xMark} alt="Delete" />
          </button>
        </div>
      </div>

      <div className="text-sm">
        <div className="py-1">
          <h3 className="text-sm hover:underline mb-3 font-bold cursor-pointer">
            Honor T1 7.0.1 1GB RAM 8 GB ROM 7 Inch With Wi-Fi+3G Tablet
          </h3>
          <p className="font-semibold">$100.00</p>
        </div>

        <div className="flex items-center justify-between border-t border-t-gray/[.2] py-2">
          <p className="font-semibold">Brand:</p>
          <p className="text-gray/[.5] text-xs">Havells</p>
        </div>

        <div className="flex items-center justify-between border-t border-t-gray/[.2] py-2">
          <p className="font-semibold">Type:</p>
          <p className="text-gray/[.5] text-xs">Tablet Computers</p>
        </div>

        <div className="flex items-center justify-between border-t border-t-gray/[.2] py-2">
          <p className="font-semibold">SKU</p>
          <p className="text-gray/[.5] text-xs">SKUG33</p>
        </div>

        <div className="flex items-center justify-between border-t border-t-gray/[.2] py-2">
          <p className="font-semibold">Availability:</p>
          <p className="text-gray/[.5] text-xs">In Stock</p>
        </div>

        <div className="flex items-center justify-between border-t border-t-gray/[.2] py-2">
          <p className="font-semibold">Color</p>
          <div className="flex items-center gap-1">
            <div className="w-fit p-2 bg-yellow-900 rounded-full"></div>
            <div className="w-fit p-2 bg-yellow-900 rounded-full"></div>
            <div className="w-fit p-2 bg-yellow-900 rounded-full"></div>
          </div>
        </div>

        <div className="flex items-center justify-between border-t border-t-gray/[.2] py-2">
          <p className="font-semibold">Size</p>
          <p className="text-gray/[.5] text-xs">S M L</p>
        </div>
      </div>
    </div>
  )
}

export default ComparedProduct
