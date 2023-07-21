import speaker from "../../assets/images/speaker.jpg"

interface Props {
  image: any
  quantity: number
  title: string
  color: string
  price: number
}

function ProductInfos({ image, quantity, title, color, price }: Props) {
  return (
    <div className="text-sm">
      <div className="flex items-center justify-between gap-3 border-b-gray/[.2] border-b pb-4 mb-4">
        <div className="flex items-center gap-6">
          <div className="relative">
            <div>
              <img
                className="text-sm w-32 h-32"
                src={image}
                alt="Product image"
              />
            </div>
            <p className="absolute top-0 right-0 text-xs bg-gray text-white rounded-full px-2 py-1">
              {quantity}
            </p>
          </div>
          <div>
            <p className="text-xs">{title}</p>
            <p className="text-gray/[.9] text-xs">{color}</p>
          </div>
        </div>

        <div>
          <p>${price}</p>
        </div>
      </div>
    </div>
  )
}

export default ProductInfos
