import { Link, useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { useFormik } from "formik"
import { loginUser } from "../../features/user/userSlice"
import { toast } from "react-toastify"
import { object, string } from "yup"

// ** yup Validation
let signupSchema = object({
  email: string().email("Email should be valid").required("Email is required"),
  password: string().required("Password is required"),
})

function LoginForm() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  // ** RTK
  const userState = useSelector((state: any) => state.auth)
  const { isLoading, isError, isSuccess, user } = userState

  // ** Formik
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: signupSchema,
    onSubmit: (values) => {
      // @ts-ignore
      dispatch(loginUser(values))
      setTimeout(() => {
        // ** Toast Notification & Redirect user
        if (isSuccess && user) {
          toast.success("Login successfully!", {})
          navigate("/")
        }
        if (isError) {
          toast.error("Something went wrong!!", {})
        }
      }, 300)
    },
  })

  return (
    <div className="py-10 mx-auto">
      <form
        className="bg-white px-6 py-10 rounded-md shadow-sm w-[450px] mx-auto"
        onSubmit={formik.handleSubmit}
      >
        <h2 className="mb-6 text-center text-xl font-bold">Login</h2>

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
        <label className="mb-3">
          <input
            className="mb-1 w-full"
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
        </label>
        <Link to="/account/forgot-password">
          <p className="text-xs font-semibold mb-6 hover:underline">
            Forgot your password?
          </p>
        </Link>

        <div className="flex items-center justify-center gap-4">
          <button type="submit" className="primary-btn">
            Login
          </button>
          <Link to="/account/register">
            <p className="block w-fit uppercase rounded-full px-4 py-2 bg-custom-orange text-secondary hover:bg-custom-orange/60 text-xs">
              Sign Up
            </p>
          </Link>
        </div>
      </form>
    </div>
  )
}

export default LoginForm
