import { Link } from "react-router-dom"

interface Props {
  path: string
  src: any
  text_t: string
  text_b: string
}

function HeaderLinks({ path, src, text_t, text_b }: Props) {
  return (
    <Link to={`/${path}`}>
      <div className="flex items-center gap-2">
        <div>
          <img className="text-white w-9 h-9" src={src} alt="" />
        </div>

        <div className="text-xs flex-col gap-2">
          <p>{text_t}</p>
          <p>{text_b}</p>
        </div>
      </div>
    </Link>
  )
}

export default HeaderLinks
