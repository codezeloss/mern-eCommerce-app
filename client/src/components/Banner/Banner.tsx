import bannerPic01 from "../../../public/images/catbanner-01.jpg"

function Banner({
  subtitle,
  title,
  price_desc,
  duration_desc,
  img_src = bannerPic01,
}: Props) {
  return (
    <div className="">
      <div className="w-[455px] h-[320px] rounded-sm flex relative">
        <div className="px-10 flex flex-col justify-center gap-6">
          <p className="uppercase text-orange-600 text-sm">{subtitle}</p>

          <h1 className="text-3xl text-black">{title}.</h1>

          <div className="text-sm text-black font-light">
            <p>{price_desc}</p>
            <p>{duration_desc}</p>
          </div>

          <button
            className="block w-fit text-white uppercase rounded-full px-5 py-2 bg-secondary text-xs"
            type="button"
          >
            Buy Now
          </button>
        </div>

        <div className="w-[455px] h-[320px] absolute r-0 t-0 -z-10">
          <img
            className="w-[455px] h-[320px] rounded-md"
            src={img_src}
            alt="Product"
          />
        </div>
      </div>
    </div>
  )
}

export default Banner

interface Props {
  subtitle: string
  title: string
  price_desc: string
  duration_desc: string
  img_src: string
}
