import { useLocation, useNavigate } from "react-router-dom"
import { object, string } from "yup"
import { useFormik } from "formik"
import { resetUserPassword } from "../../features/user/userSlice"
import { useDispatch, useSelector } from "react-redux"
import { toast } from "react-toastify"

// ** yup Validation
let resetPasswordSchema = object({
  password: string().required("Password is required"),
  confirmPassword: string().required("Confirmed Password is required"),
})

function ResetPasswordForm() {
  const dispatch = useDispatch()
  const location = useLocation()
  const navigate = useNavigate()
  const getToken = location.pathname.split("/")[3]

  // ** RTK
  const userState = useSelector((state: any) => state.auth)

  // ** Formik
  const formik = useFormik({
    initialValues: {
      password: "",
      confirmPassword: "",
    },
    validationSchema: resetPasswordSchema,
    onSubmit: (values) => {
      const data = { token: getToken, password: values.password }
      // @ts-ignore
      dispatch(resetUserPassword(data))

      // ** Toast Notification & Redirect user
      if (!!userState?.newPassword) {
        const { isError, isSuccess, isLoading, newPassword } = userState

        if (isSuccess && newPassword) {
          toast.success("Password updated successfully!", {})
          navigate("/account")
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
        <h2 className="mb-6 text-center text-xl font-bold">
          Reset Your Password
        </h2>

        <div className="mb-3">
          <input
            className="w-full"
            name="password"
            type="password"
            placeholder="Password"
            onBlur={formik.handleBlur("password")}
            onChange={formik.handleChange("password")}
            value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password ? (
            <div className="error">
              <p>{formik.errors.password}</p>
            </div>
          ) : null}
        </div>
        <div className="mb-3">
          <input
            className="w-full"
            name="email"
            type="password"
            placeholder="Confirm Password"
            onBlur={formik.handleBlur("confirmPassword")}
            onChange={formik.handleChange("confirmPassword")}
            value={formik.values.confirmPassword}
          />
          {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
            <div className="error">
              <p>{formik.errors.confirmPassword}</p>
            </div>
          ) : null}
        </div>

        <div className="flex justify-center">
          <button type="submit" className="primary-btn text-center">
            Ok
          </button>
        </div>
      </form>
    </div>
  )
}

export default ResetPasswordForm
