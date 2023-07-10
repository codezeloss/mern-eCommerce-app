import axios from "axios"
import { base_url } from "../../utils/base_url"

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

const authService = {
  register,
  login,
}
export default authService