import axios from "axios"
import { base_url } from "../../utils/base_url"
import { config } from "../../utils/axios_config"

const getProducts = async (data: any) => {
  const sorts = `${data?.brand ? `brand=${data?.brand}&&` : ""}${
    data?.tags ? `tag=${data?.tag}&&` : ""
  }${data?.category ? `category=${data?.category}&&` : ""}${
    data?.minPrice ? `price[gte]=${data?.minPrice}&&` : ""
  }${data?.maxPrice ? `price[lte]=${data?.maxPrice}&&` : ""}${
    data?.sort ? `sort=${data?.sort}&&` : ""
  }`
  const response = await axios.get(`${base_url}product?${sorts}`)
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

const getProduct = async (id: string) => {
  const response = await axios.get(`${base_url}product/${id}`)
  return response.data
}

const rateProduct = async (productData: any) => {
  const response = await axios.put(
    `${base_url}product/rating`,
    productData,
    config,
  )
  return response.data
}

const productService = {
  getProducts,
  addToWishList,
  getProduct,
  rateProduct,
}
export default productService
