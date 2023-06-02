function HeaderCart({ src, quantity, total }: Props) {
  return (
    <div className="flex items-center gap-1">
      <div>
        <img className="w-9 h-9" src={src} alt="" />
      </div>

      <div className="text-xs flex-col gap-2 text-center flex items-center gap-[2px]">
        <p className="bg-white rounded-md text-black w-fit px-2">{quantity}</p>
        <p>{total}</p>
      </div>
    </div>
  )
}

export default HeaderCart

interface Props {
  src: any
  quantity: string
  total: string
}
