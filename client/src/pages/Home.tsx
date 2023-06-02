import Banners from "../components/Banner/Banners"
import Services from "../components/Services/Services"
import Categories from "../components/Categories/Categories"
import Marquees from "../components/Marquees/Marquees"
import Blogs from "../components/Blogs/Blogs"
import FeaturedProducts from "../components/Featured/FeaturedProducts"

function Home() {
  return (
    <>
      <Banners />
      <div className="bg-lightGray">
        <Services />
        <Categories />
        <Marquees />
        <FeaturedProducts />
        <Blogs />
      </div>
    </>
  )
}

export default Home
