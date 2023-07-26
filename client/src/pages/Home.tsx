import Banners from "../components/HomePage/Banner/Banners";
import Services from "../components/HomePage/Services/Services";
import Categories from "../components/HomePage/Categories/Categories";
import Marquees from "../components/HomePage/Marquees/Marquees";
import Blogs from "../components/HomePage/LatestBlogs/Blogs";
import FeaturedProducts from "../components/HomePage/FeaturedProducts/FeaturedProducts";
import SpecialProducts from "../components/HomePage/SpecialProducts/SpecialProducts";
import PopularProducts from "../components/HomePage/PopularProucts/PopularProducts";
import FamousProducts from "../components/HomePage/FamousProducts/FamousProducts";

function Home() {
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
  );
}

export default Home;
