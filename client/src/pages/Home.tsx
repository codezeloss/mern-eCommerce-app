import Banners from "../components/Banner/Banners"
import Services from "../components/Services/Services"
import Categories from "../components/Categories/Categories"
import Marquees from "../components/Marquees/Marquees"
import Blogs from "../components/LatestBlogs/Blogs"
import FeaturedProducts from "../components/FeaturedCollection/FeaturedProducts"
import SpecialProducts from "../components/SpecialProducts/SpecialProducts"
import PopularProducts from "../components/PopularProucts/PopularProducts"
import FamousProducts from "../components/FamousProducts/FamousProducts"

function Home() {
  return (
    <>
      <Banners />
      <div className="bg-lightGray">
        <Services />
        <Categories />
        <FeaturedProducts />
        <FamousProducts />
        <SpecialProducts />
        <PopularProducts />
        <Marquees />
        <Blogs />
      </div>
    </>
  )
}

export default Home
