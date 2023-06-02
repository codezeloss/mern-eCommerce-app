interface Props {
  src: any
  text_t: string
  text_b: string
}

function HeaderLinks({ src, text_t, text_b }: Props) {
  return (
    <div className="flex items-center gap-2">
      <div>
        <img className="text-white w-9 h-9" src={src} alt="" />
      </div>

      <div className="text-xs flex-col gap-2">
        <p>{text_t}</p>
        <p>{text_b}</p>
      </div>
    </div>
  )
}

export default HeaderLinks
