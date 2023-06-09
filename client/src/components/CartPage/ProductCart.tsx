import speakerImg from "../../../public/images/speaker.jpg"
import trashIcon from "../../../public/icons/trash-icon.svg"

function ProductCart() {
  return (
    <div className="grid grid-cols-5 items-center pb-8 border-b-gray/[.1] border-b-[1px] mb-8">
      <div className="col-span-2">
        <div className="flex items-center gap-6 mr-20">
          <img className="w-22 h-22" src={speakerImg} alt="" />
          <div className="text-xs text-gray/[.6] flex flex-col gap-2">
            <p>Kids headphones bulk 10 pack multi colored for students</p>
            <p>Size: S</p>
            <p>Color: #A85A5A</p>
          </div>
        </div>
      </div>

      <div>
        <p className="font-semibold text-sm">$100.00</p>
      </div>

      <div className="flex items-center gap-3">
        <input className="w-16 bg-white" type="number" placeholder="1" />
        <button className="" type="button">
          <img
            className="bg-primary w-8 h-8 p-2 rounded-full"
            src={trashIcon}
            alt="Delete"
          />
        </button>
      </div>

      <div>
        <p className="font-semibold text-sm">$100.00</p>
      </div>
    </div>
  )
}

export default ProductCart
