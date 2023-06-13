import speaker from "../../assets/images/speaker.jpg"

function ProductInfos() {
  return (
    <div className="text-sm">
      <div className="flex items-center justify-between gap-3 border-b-gray/[.2] border-b pb-4 mb-4">
        <div className="relative">
          <div>
            <img src={speaker} alt="" />
          </div>
          <p className="absolute top-0 right-0 text-xs bg-gray text-white rounded-full px-2 py-1">
            1
          </p>
        </div>
        <div>
          <p className="text-xs">
            Kids headphones bulk 10 pack multi colored for students
          </p>
          <p className="text-gray/[.9] text-xs">S / #A85A5A</p>
        </div>
        <div>
          <p>$100.00</p>
        </div>
      </div>

      <div className="border-b-gray/[.2] border-b pb-4 mb-4">
        <div className="flex items-center justify-between mb-3">
          <p className="text-gray/[.9] text-xs">Subtotal</p>
          <p>$100.00</p>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-gray/[.9] text-xs">Shipping</p>
          <p>$19.65</p>
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between mb-3">
          <p>Total</p>
          <p className="text-lg">
            <span className="text-xs text-gray/[.6] mr-2">USD</span>$119.65
          </p>
        </div>
      </div>
    </div>
  )
}

export default ProductInfos
