import BreadCrumb from "../components/BreadCrumb"
import WishlistProduct from "../components/WishlistPage/WishlistProduct"

function Wishlist() {
  return (
    <>
      <div>
        <div className="flex items-center justify-center">
          <BreadCrumb path="/wishlist" title="Wishlist" />
        </div>

        <div className="bg-lightGray h-full py-6">
          <div className="container mb-20">
            <div className="flex gap-x-3 gap-y-6 flex-wrap">
              <WishlistProduct />
              <WishlistProduct />
              <WishlistProduct />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Wishlist
