import { data } from "./data"
import Marquee from "react-fast-marquee"
import Brand from "./Brand"

function Marquees() {
  return (
    <div className="container bg-white rounded-md shadow-sm mb-20">
      <Marquee>
        {data.map((brand) => (
          <Brand src={brand.icon} />
        ))}
      </Marquee>
    </div>
  )
}

export default Marquees
