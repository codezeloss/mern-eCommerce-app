import { productData } from "../Product/productData"
import Product from "../Product/Product"

function PopularProducts() {
  return (
    <>
      <div className="container px-0">
        <h2 className="text-lg mt-8 mb-2">Popular Products</h2>
        <div className="grid grid-cols-5 gap-2">
          {productData.map((product) => (
            <Product
              productId={""}
              src={product.image}
              brand={product.brand}
              title={product.title}
              price={product.price}
              totalRating={5}
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default PopularProducts
