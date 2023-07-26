import Banners from "../components/HomePage/Banner/Banners"
import Services from "../components/HomePage/Services/Services"
import Categories from "../components/HomePage/Categories/Categories"
import Marquees from "../components/HomePage/Marquees/Marquees"
import Blogs from "../components/HomePage/LatestBlogs/Blogs"
import FeaturedProducts from "../components/HomePage/FeaturedProducts/FeaturedProducts"
import SpecialProducts from "../components/HomePage/SpecialProducts/SpecialProducts"
import PopularProducts from "../components/HomePage/PopularProucts/PopularProducts"
import FamousProducts from "../components/HomePage/FamousProducts/FamousProducts"
import { useDispatch } from "react-redux"
import { useEffect } from "react"
import { getUserCart, getUserOrders } from "../features/user/userSlice"

function Home() {
  const dispatch = useDispatch()

  // ** Axios Config
  // @ts-ignore
  let getTokenFromLocalStorage
  if (localStorage.getItem("user")) {
    // @ts-ignore
    getTokenFromLocalStorage = JSON.parse(localStorage.getItem("user"))
  } else {
    getTokenFromLocalStorage = ""
  }

  const config2 = {
    headers: {
      Authorization: `Bearer ${
        getTokenFromLocalStorage.token !== null
          ? getTokenFromLocalStorage.token
          : ""
      }`,
      Accept: "application/json",
    },
  }

  useEffect(() => {
    // @ts-ignore
    dispatch(getUserCart(config2))
    // @ts-ignore
    dispatch(getUserOrders(config2))
  }, [])

  return (
    <main>
      <Banners />
      <div className="bg-lightGray h-full">
        <Services />
        <Categories />
        <FeaturedProducts />
        <FamousProducts />
        <SpecialProducts />
        <PopularProducts />
        <Marquees />
        <Blogs />
      </div>
    </main>
  )
}

export default Home
