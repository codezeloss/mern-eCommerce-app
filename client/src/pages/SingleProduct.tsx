import BreadCrumb from "../components/BreadCrumb"
import ProductImages from "../components/SingleProductPage/ProductImages"
import ProductDetails from "../components/SingleProductPage/ProductDetails"
import Accordions from "../components/SingleProductPage/Accordions"
import ProductDescription from "../components/SingleProductPage/ProductDescription"
import Reviews from "../components/SingleProductPage/Reviews"
import PopularProducts from "../components/SingleProductPage/PopularProducts"
import { useDispatch, useSelector } from "react-redux"
import { useLocation, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { getSingleProduct } from "../features/product/productSlice"
import { addProductToUserCart, getUserCart } from "../features/user/userSlice"
import { toast } from "react-toastify"

function SingleProduct() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const location = useLocation()
  const [enteredColor, setEnteredColor] = useState(null)
  const [enteredQuantity, setEnteredQuantity] = useState("")
  const [alreadyAdded, setAlreadyAdded] = useState(false)

  // ** Get product ID
  const productId = location.pathname.split("/")[2]

  // ** RTK - Product state
  const productState = useSelector((state: any) => state.product.product)
  const cartState = useSelector((state: any) => state.auth.userCart)

  // **
  useEffect(() => {
    // @ts-ignore
    dispatch(getSingleProduct(productId))
    // @ts-ignore
    dispatch(getUserCart())
  }, [productId])

  // ** Check if the current Product is already added to the cart
  useEffect(() => {
    if (cartState) {
      for (let i = 0; i < cartState.length; i++) {
        if (productId === cartState[i]?.productId?._id) {
          setAlreadyAdded(true)
        }
      }
    }
  }, [])

  // ** Add Product to user Cart
  const addProductToCart = () => {
    if (enteredColor === null) {
      toast.error("Please choose a Color")
      return false
    } else if (enteredQuantity === "") {
      toast.error("Please choose a Quantity")
      return false
    } else {
      const data = {
        productId: productState?._id,
        color: enteredColor,
        price: productState?.price,
        quantity: enteredQuantity,
      }
      // @ts-ignore
      dispatch(addProductToUserCart(data))
      if (cartState) {
        toast.success("Product added to your Cart!")
        navigate("/cart")
      } else {
        navigate("/account")
      }
    }
  }

  return (
    <>
      <div>
        <div className="flex items-center justify-center">
          <BreadCrumb path="/products/:id" title={`${productState?.title}`} />
        </div>

        <div className="bg-lightGray h-full py-6">
          <div className="container mb-20">
            <div className="flex gap-x-3 gap-y-6 flex-wrap">
              <div>
                <div className="bg-white w-full h-fit rounded-md shadow-sm p-6 grid gap-4 grid-cols-2">
                  <ProductImages
                    img1={productState?.images[0]?.url}
                    img2={productState?.images[0]?.url}
                    img3={productState?.images[0]?.url}
                  />
                  <div>
                    <ProductDetails
                      productTitle={productState?.title}
                      price={productState?.price}
                      totalRating={productState?.totalRating}
                      brand={productState?.brand}
                      category={productState?.category}
                      quantity={productState?.quantity}
                      addProductToCart={addProductToCart}
                      colors={productState?.color}
                      enteredColor={enteredColor}
                      enteredQuantity={enteredQuantity}
                      setEnteredColor={setEnteredColor}
                      setEnteredQuantity={setEnteredQuantity}
                      alreadyAdded={alreadyAdded}
                    />
                    <Accordions />
                  </div>
                </div>

                <ProductDescription description={productState?.description} />
                <Reviews />
                <PopularProducts />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SingleProduct
