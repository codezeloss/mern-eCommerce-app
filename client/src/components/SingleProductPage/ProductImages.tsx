import speakerImg from "../../../public/assets/images/watch.jpg"

function ProductImages() {
  return (
    <div className="flex flex-col gap-4">
      <img
        className="w-full h-[530px] object-cover border-[1px] border-gray/[.1]"
        src={speakerImg}
        alt=""
      />
      <div className="flex items-center gap-4">
        <img
          className="w-full border-[1px] border-gray/[.1]"
          src={speakerImg}
          alt=""
        />
        <img
          className="w-full border-[1px] border-gray/[.1]"
          src={speakerImg}
          alt=""
        />
      </div>
    </div>
  )
}

export default ProductImages
