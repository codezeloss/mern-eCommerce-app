import axios from "axios"
import { base_url } from "../../utils/base_url"
import { config } from "../../utils/axios_config"

const getBlogs = async () => {
  const response = await axios.get(`${base_url}blog/`)
  return response.data
}

const getBlog = async (id: string) => {
  const response = await axios.get(`${base_url}blog/${id}`)
  return response.data
}

const blogService = {
  getBlogs,
  getBlog,
}
export default blogService
