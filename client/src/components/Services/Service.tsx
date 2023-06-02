function Service({ src, title, desc }: Props) {
  return (
    <div className="flex items-center gap-6">
      <div>
        <img className="" src={src} alt="" />
      </div>

      <div>
        <p className="text-base font-semibold">{title}</p>
        <p className="text-xs text-gray font-light">{desc}</p>
      </div>
    </div>
  )
}

export default Service

interface Props {
  src: string
  title: string
  desc: string
}
