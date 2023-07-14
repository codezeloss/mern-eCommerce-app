import speakerImg from "../../../public/assets/images/speaker.jpg"
import trashIcon from "../../../public/assets/icons/trash-icon.svg"

interface Props {
  image: any
  title: string
  color: string
  price: number
  quantity: number
}

function ProductCart({ image, title, color, price, quantity }: Props) {
  return (
    <div className="grid grid-cols-5 items-center pb-8 border-b-gray/[.1] border-b-[1px] mb-8">
      <div className="col-span-2">
        <div className="flex items-center gap-6 mr-20">
          <div className="w-40 h-40">
            <img
              className="text-sm w-40 h-40"
              src={image}
              alt="Product image"
            />
          </div>
          <div className="text-xs text-gray/[.6] flex flex-col gap-2">
            <p>{title}</p>
            <p>Size: S</p>
            <p>
              Color:{" "}
              <p
                className={`w-fit p-3 rounded-full`}
                style={{ backgroundColor: color.toLowerCase() }}
              />
            </p>
          </div>
        </div>
      </div>

      <div>
        <p className="font-semibold text-sm">${price}</p>
      </div>

      <div className="flex items-center gap-3">
        <input
          className="w-24 bg-white"
          type="number"
          placeholder="1"
          value={quantity}
        />
        <button className="" type="button">
          <img
            className="bg-primary w-8 h-8 p-2 rounded-full"
            src={trashIcon}
            alt="Delete"
          />
        </button>
      </div>

      <div>
        <p className="font-semibold text-sm">${price}</p>
      </div>
    </div>
  )
}

export default ProductCart
