import Banner from "./Banner"
import { data } from "./data"

function Banners() {
  return (
    <div className="container">
      <div className="grid grid-cols-3 gap-4 my-12">
        {data.map((banner, index) => (
          <div key={index}>
            <Banner
              title={banner.title}
              subtitle={banner.subtitle}
              price_desc={banner.price_desc}
              duration_desc={banner.duration_desc}
              img_src={banner.img_src}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Banners
