interface Props {
  description: string
}

function ProductDescription({ description }: Props) {
  return (
    <div>
      <h1 className="text-lg mt-8 mb-2">Description</h1>
      <p
        className="bg-white p-7 text-xs text-gray/[.6] rounded-md shadow-sm"
        dangerouslySetInnerHTML={{ __html: description }}
      />
    </div>
  )
}

export default ProductDescription
