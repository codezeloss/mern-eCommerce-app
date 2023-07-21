import axios from "axios"
import { base_url } from "../../utils/base_url"
import { config } from "../../utils/axios_config"

const register = async (userData: any) => {
  const response = await axios.post(`${base_url}user/register`, userData)
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data))
  }
  return response.data
}

const login = async (userData: any) => {
  const response = await axios.post(`${base_url}user/login`, userData)
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data))
  }
  return response.data
}

const getUserWishlist = async () => {
  const response = await axios.get(`${base_url}user/wishlist`, config)
  return response.data
}

const addToCart = async (cartData: any) => {
  const response = await axios.post(`${base_url}user/cart`, cartData, config)
  return response.data
}

const getCart = async () => {
  const response = await axios.get(`${base_url}user/cart`, config)
  return response.data
}

const removeProductFromCart = async (cartItemId: any) => {
  const response = await axios.delete(
    `${base_url}user/delete-cart-product/${cartItemId}`,
    config,
  )
  return response.data
}

const updateProductQuantityFromCart = async (cartDetails: any) => {
  const response = await axios.delete(
    `${base_url}user/update-product-quantity/${cartDetails.cartItemId}/${cartDetails.newQuantity}`,
    config,
  )
  return response.data
}

const createOrder = async (orderDetails: any) => {
  const response = await axios.post(
    `${base_url}user/cart/create-order`,
    orderDetails,
    config,
  )
  return response.data
}

const userOrders = async () => {
  const response = await axios.get(`${base_url}user/get-my-orders`, config)
  return response.data
}

const updateUser = async (userData: any) => {
  const response = await axios.put(
    `${base_url}user/edit-user`,
    userData,
    config,
  )
  return response.data
}

const forgotPassToken = async (data: any) => {
  const response = await axios.post(
    `${base_url}user/forgot-password-token`,
    data,
  )
  return response.data
}

const resetPassword = async (data: any) => {
  const response = await axios.put(
    `${base_url}user/reset-password/${data.token}`,
    { password: data?.password },
  )
  return response.data
}

const authService = {
  register,
  login,
  getUserWishlist,
  addToCart,
  getCart,
  removeProductFromCart,
  updateProductQuantityFromCart,
  createOrder,
  userOrders,
  updateUser,
  forgotPassToken,
  resetPassword,
}
export default authService
