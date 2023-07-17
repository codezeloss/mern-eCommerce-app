import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./components/Layout"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import OurStore from "./pages/OurStore"
import Blogs from "./pages/Blogs"
import CompareProducts from "./pages/CompareProducts"
import Wishlist from "./pages/Wishlist"
import Login from "./pages/Login"
import ForgotPassword from "./pages/ForgotPassword"
import SignUp from "./pages/SignUp"
import SingleBlog from "./pages/SingleBlog"
import SingleProduct from "./pages/SingleProduct"
import Cart from "./pages/Cart"
import Checkout from "./pages/Checkout"
import ResetPassword from "./pages/ResetPassword"
import { PrivateRoutes } from "./routing/privateRoutes"
import { OpenRoutes } from "./routing/openRoutes"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/store" element={<OurStore />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/compare-products" element={<CompareProducts />} />
            <Route
              path="/wishlist"
              element={
                <PrivateRoutes>
                  <Wishlist />
                </PrivateRoutes>
              }
            />
            <Route
              path="/account"
              element={
                <OpenRoutes>
                  <Login />
                </OpenRoutes>
              }
            />
            <Route
              path="/account/forgot-password"
              element={<ForgotPassword />}
            />
            <Route path="/account/reset-password" element={<ResetPassword />} />
            <Route
              path="/account/register"
              element={
                <OpenRoutes>
                  <SignUp />
                </OpenRoutes>
              }
            />
            <Route path="/blogs/blog/:id" element={<SingleBlog />} />
            <Route
              path="/cart"
              element={
                <PrivateRoutes>
                  <Cart />
                </PrivateRoutes>
              }
            />
            <Route path="/cart/checkout/information" element={<Checkout />} />
            <Route
              path="/cart/checkout/shipping"
              element={
                <PrivateRoutes>
                  <Checkout />
                </PrivateRoutes>
              }
            />
            <Route
              path="/cart/checkout/payment"
              element={
                <PrivateRoutes>
                  <Checkout />
                </PrivateRoutes>
              }
            />
            <Route path="/product/:id" element={<SingleProduct />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
