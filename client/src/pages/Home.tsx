import Banners from "../components/Banner/Banners"
import Services from "../components/Services/Services"
import Categories from "../components/Categories/Categories"

function Home() {
  return (
    <>
      <Banners />
      <div className="bg-lightGray">
        <Services />
        <Categories />
      </div>
    </>
  )
}

export default Home
