import Product from "../../Product"
import { productData } from "../../productData"

function PopularProducts() {
  return (
    <>
      <div className="container mb-20">
        <h2 className="font-bold text-2xl mb-4">Popular Products</h2>
        <div className="grid grid-cols-5 gap-2">
          {productData.map((product) => (
            <Product
              src={product.image}
              brand={product.brand}
              title={product.title}
              price={product.price}
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default PopularProducts
