import axios from "axios"
import { base_url } from "../../utils/base_url"
import { config } from "../../utils/axios_config"

const getProducts = async () => {
  const response = await axios.get(`${base_url}product/`)
  return response.data
}

const addToWishList = async (productId: any) => {
  const response = await axios.put(
    `${base_url}product/wishlist`,
    { productId },
    config,
  )
  return response.data
}

const productService = {
  getProducts,
  addToWishList,
}
export default productService
