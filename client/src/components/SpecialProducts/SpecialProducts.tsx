import Product from "./Product"

function SpecialProducts() {
  return (
    <>
      <div className="container">
        <h2 className="font-bold text-2xl mb-4">Special Products</h2>
        <div className="grid gap-4 grid-cols-3 mb-20">
          <Product />
          <Product />
          <Product />
        </div>
      </div>
    </>
  )
}

export default SpecialProducts
