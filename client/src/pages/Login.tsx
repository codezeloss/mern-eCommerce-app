import BreadCrumb from "../components/BreadCrumb"
import LoginForm from "../components/LoginPage/LoginForm"

function Login() {
  return (
    <>
      <div className="h-full">
        <div className="flex items-center justify-center">
          <BreadCrumb path="/account" title="Login" />
        </div>

        <div className="bg-lightGray h-full py-6">
          <div className="container mb-20">
            <div className="flex gap-x-3 gap-y-6 flex-wrap">
              <LoginForm />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
