import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import { useFormik } from "formik"
import { forgotPasswordToken, loginUser } from "../../features/user/userSlice"
import { toast } from "react-toastify"
import { useDispatch, useSelector } from "react-redux"
import { object, string } from "yup"

// ** yup Validation
let signupSchema = object({
  email: string().email("Email should be valid").required("Email is required"),
})

function ForgotPasswordForm() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  // ** RTK - User state
  const userState = useSelector((state: any) => state.auth)

  // ** Formik
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: signupSchema,
    onSubmit: (values) => {
      // @ts-ignore
      dispatch(forgotPasswordToken(values))

      // ** Toast Notification & Redirect user
      if (!!userState?.passwordToken) {
        const { isError, isSuccess, isLoading, passwordToken } = userState
        if (isSuccess && passwordToken) {
          toast.success("Email sent successfully!", {})
          navigate("/")
        }
        if (isError) {
          toast.error("Something went wrong!!", {})
        }
      }
    },
  })

  return (
    <div className="py-10 mx-auto">
      <form
        className="bg-white px-6 py-10 rounded-md shadow-sm w-[450px] mx-auto"
        onSubmit={formik.handleSubmit}
      >
        <h2 className="mb-2 text-center text-xl font-bold">
          Reset Your Password
        </h2>

        <p className="text-center text-xs text-gray/[.6] mb-4">
          We will send you an email to reset your password
        </p>

        <div className="mb-3">
          <input
            className="w-full"
            name="email"
            type="text"
            placeholder="Email"
            onBlur={formik.handleBlur("email")}
            onChange={formik.handleChange("email")}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="error">
              <p>{formik.errors.email}</p>
            </div>
          ) : null}
        </div>

        <div className="flex flex-col items-center justify-center gap-1">
          <button type="submit" className="primary-btn">
            Submit
          </button>
          <Link to="/account">
            <p className="block w-fit uppercase rounded-full px-4 pt-2 text-primary text-xs">
              Cancel
            </p>
          </Link>
        </div>
      </form>
    </div>
  )
}

export default ForgotPasswordForm
