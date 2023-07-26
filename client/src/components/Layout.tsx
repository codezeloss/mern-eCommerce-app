import { Outlet } from "react-router-dom"
import Header from "./Header/Header"
import Footer from "./Footer/Footer"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

function Layout() {
  return (
    <div className="h-full flex flex-col justify-between">
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout
