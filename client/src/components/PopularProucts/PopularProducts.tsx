import Product from "./Product"

function PopularProducts() {
  return (
    <>
      <div className="container mb-20">
        <h2 className="font-bold text-2xl mb-4">Popular Products</h2>
        <div className="grid grid-cols-5 gap-2">
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

export default PopularProducts
