import { data } from "./data"
import Marquee from "react-fast-marquee"
import Brand from "./Brand"

function Marquees() {
  return (
    <div className="container flex items-center justify-between gap-6 bg-white rounded-md shadow-sm px-0 mb-20">
      <Marquee>
        {data.map((brand) => (
          <Brand src={brand.icon} />
        ))}
      </Marquee>
    </div>
  )
}

export default Marquees
