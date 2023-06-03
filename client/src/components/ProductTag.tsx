function ProductTag({ title }: Props) {
  return (
    <div className="w-fit text-xs p-2 text-gray/[.6] bg-gray/[.1]">{title}</div>
  )
}

export default ProductTag

interface Props {
  title: string
}
