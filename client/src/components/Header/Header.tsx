import { Link } from "react-router-dom"
import searchGlass from "../../../public/assets/icons/search-glass.svg"
import arrowPath from "../../../public/assets/icons/arrow-path.svg"
import heart from "../../../public/assets/icons/heart.svg"
import user from "../../../public/assets/icons/user.svg"
import cart from "../../../public/assets/icons/cart-icon.svg"
import ChevronDown from "../../../public/assets/icons/ChevronDown"

import HeaderLinks from "./HeaderLinks"
import HeaderOptions from "./HeaderOptions"
import HeaderCart from "./HeaderCart"

function Header() {
  return (
    <>
      <header className="bg-primary text-white">
        {/* */}
        <div className="border-b border-b-[1px] border-b-white/[.2]">
          <div
            className={
              "container flex items-center justify-between text-xs py-2"
            }
          >
            <p>Free Shipping Over $100 & Free Returns</p>

            <div className="flex items-center space-x-10">
              <p>Hotline: (212) 6 6666 6666</p>
              <div className="flex items-center gap-1">
                <p>English</p>
                <ChevronDown />
              </div>
              <div className="flex items-center gap-1">
                <p>USD $</p>
                <ChevronDown />
              </div>
            </div>
          </div>
        </div>

        {/* */}
        <div className="container">
          <div className="flex items-center justify-between">
            <Link to="/">
              <h1 className="text-2xl">@Tecos.</h1>
            </Link>

            <div className="w-full max-w-[600px] flex items-center h-6">
              <input
                className="w-full h-full text-xs px-4 py-4 rounded-l-md outline-none text-black"
                id="search-product"
                name="search-product"
                type="text"
                placeholder="Seacrh a product here..."
              />
              <div className="bg-[#ffa726] h-full flex items-center justify-center px-3 py-4 rounded-r-md">
                <img className="w-4 h-4" src={searchGlass} alt={""} />
              </div>
            </div>

            <div className="flex space-x-4 py-6">
              <HeaderLinks
                path="compare-products"
                src={arrowPath}
                text_t="Compare"
                text_b="Products"
              />
              <HeaderLinks
                path="wishlist"
                src={heart}
                text_t="Favourite"
                text_b="Wishlist"
              />
              <HeaderLinks
                path="account"
                src={user}
                text_t="Log in"
                text_b="My Account"
              />
              <HeaderCart
                path="cart"
                src={cart}
                quantity={"0"}
                total={"$0.00"}
              />
            </div>
          </div>
        </div>

        {/* */}
        <HeaderOptions />
      </header>
    </>
  )
}

export default Header
