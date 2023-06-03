function Brand({ src }: Props) {
  return (
    <div>
      <img className="mr-20 w-auto h-auto" src={src} alt="Brand" />
    </div>
  )
}

export default Brand

interface Props {
  src: string
}
