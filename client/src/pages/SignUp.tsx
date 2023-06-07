import BreadCrumb from "../components/BreadCrumb"
import RegisterForm from "../components/SignUpPage/RegisterForm"

function SignUp() {
  return (
    <>
      <div>
        <div className="flex items-center justify-center">
          <BreadCrumb path="/account/register" title="Create Account" />
        </div>

        <div className="bg-lightGray h-full py-6">
          <div className="container mb-20">
            <div className="flex gap-x-3 gap-y-6 flex-wrap">
              <RegisterForm />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SignUp
