import BreadCrumb from "../components/BreadCrumb"
import ForgotPasswordForm from "../components/ForgotPasswordPage/ForgotPasswordForm"

function ForgotPassword() {
  return (
    <>
      <div>
        <div className="flex items-center justify-center">
          <BreadCrumb path="/account/forgot-password" title="Forgot Password" />
        </div>

        <div className="bg-lightGray h-full py-6">
          <div className="container mb-20">
            <div className="flex gap-x-3 gap-y-6 flex-wrap">
              <ForgotPasswordForm />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ForgotPassword
