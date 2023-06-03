import { Link } from "react-router-dom"

function HeaderCart({ path, src, quantity, total }: Props) {
  return (
    <Link to={`/${path}`}>
      <div className="flex items-center gap-1">
        <div>
          <img className="w-9 h-9" src={src} alt="" />
        </div>

        <div className="text-xs flex-col gap-2 text-center flex items-center gap-[2px]">
          <p className="bg-white rounded-md text-black w-fit px-2">
            {quantity}
          </p>
          <p>{total}</p>
        </div>
      </div>
    </Link>
  )
}

export default HeaderCart

interface Props {
  path: string
  src: any
  quantity: string
  total: string
}
