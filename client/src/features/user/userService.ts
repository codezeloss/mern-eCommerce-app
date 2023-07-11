import axios from "axios"
import { base_url } from "../../utils/base_url"
import { config } from "../../utils/axios_config"

const register = async (userData: any) => {
  const response = await axios.post(`${base_url}user/register`, userData)
  if (response.data) {
    localStorage.setItem("customer", JSON.stringify(response.data))
  }
  return response.data
}

const login = async (userData: any) => {
  const response = await axios.post(`${base_url}user/login`, userData)
  return response.data
}

const getUserWishlist = async () => {
  const response = await axios.get(`${base_url}user/wishlist`, config)
  return response.data
}

const authService = {
  register,
  login,
  getUserWishlist,
}
export default authService
