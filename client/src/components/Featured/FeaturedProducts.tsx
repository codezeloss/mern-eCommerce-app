import Product from "./Product"

function FeaturedProducts() {
  return (
    <>
      <div className="container mb-20">
        <h2 className="font-bold text-2xl mb-4">Featured Products</h2>
        <div className="flex items-center gap-2">
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
        </div>
      </div>
    </>
  )
}

export default FeaturedProducts
