import productPic from "../../../public/images/tab.jpg"
import heart from "../../../public/icons/heart-black.svg"

function Product() {
  return (
    <div className="bg-white shadom-sm rounded-md p-4">
      <div className="flex items-center justify-between">
        <div></div>
        <div>
          <img className="w-4 h-4 text-black" src={heart} alt="Like" />
        </div>
      </div>

      <div>
        <img
          className="w-[300px] h-[200px] object-cover"
          src={productPic}
          alt="Product"
        />
      </div>

      <div>
        <p className="text-red-600 mb-4 text-xs">Havells</p>
        <h3 className="text-sm font-bold mb-2 leading-5">
          Honor T1 7.0.1 GB RAM 8 GB ROM...
        </h3>
        <p>******</p>
        <p className="text-sm font-medium">$100.00</p>
      </div>
    </div>
  )
}

export default Product
