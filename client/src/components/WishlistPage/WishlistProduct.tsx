import tabletImg from "../../../public/images/tab.jpg"
import xMark from "../../../public/icons/x-mark.svg"

function WishlistProduct() {
  return (
    <div className="w-60 relative">
      <img className="w-60 h-60" src={tabletImg} alt="" />
      <div className="absolute top-0 right-0 flex items-center justify-between pt-2 px-2">
        <div></div>
        <button type="button">
          <img className="w-5 h-5" src={xMark} alt="Delete" />
        </button>
      </div>

      <div className="text-sm">
        <div className="py-1">
          <h3 className="text-sm hover:underline mb-4 font-bold cursor-pointer">
            Honor T1 7.0.1 1GB RAM 8 GB ROM 7 Inch With Wi-Fi+3G Tablet
          </h3>
          <p className="font-semibold">$100.00</p>
        </div>
      </div>
    </div>
  )
}

export default WishlistProduct
