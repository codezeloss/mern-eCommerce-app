import { useFormik } from "formik"
import { object, string } from "yup"
import { useDispatch, useSelector } from "react-redux"
import { registerUser } from "../../features/user/userSlice"
import { toast } from "react-toastify"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

// ** yup Validation
let signupSchema = object({
  firstname: string().required("First name is required"),
  lastname: string().required("Last name is required"),
  email: string().required("Email is required"),
  mobile: string().required("Mobile is required"),
  password: string().required("Password is required"),
})

function RegisterForm() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  // RTK
  const userState = useSelector((state: any) => state.auth)
  const { isLoading, isError, isSuccess, createdUser } = userState

  // Formik
  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      mobile: "",
      password: "",
    },
    validationSchema: signupSchema,
    onSubmit: (values) => {
      // @ts-ignore
      dispatch(registerUser(values))
    },
  })

  // Toast Notification
  useEffect(() => {
    if (isSuccess && createdUser) {
      toast.success("User created successfully!", {})
      navigate("/account")
    }
    if (isError) {
      toast.error("Something went wrong!!", {})
    }
  }, [isSuccess, isError, isLoading, createdUser])

  return (
    <div className="py-10 mx-auto">
      <form
        className="bg-white px-6 py-10 rounded-md shadow-sm w-[450px] mx-auto"
        onSubmit={formik.handleSubmit}
      >
        <h2 className="mb-4 text-center text-xl font-bold">Sign Up</h2>

        <div className="mb-4">
          <input
            className=""
            name="firstname"
            type="text"
            placeholder="Firstname"
            onBlur={formik.handleBlur("firstname")}
            onChange={formik.handleChange("firstname")}
            value={formik.values.firstname}
          />
          {formik.touched.firstname && formik.errors.firstname ? (
            <div className="error">
              <p>{formik.errors.firstname}</p>
            </div>
          ) : null}
        </div>

        <div className="mb-4">
          <input
            className=""
            name="lastname"
            type="text"
            placeholder="Lastname"
            onBlur={formik.handleBlur("lastname")}
            onChange={formik.handleChange("lastname")}
            value={formik.values.lastname}
          />
          {formik.touched.lastname && formik.errors.lastname ? (
            <div className="error">
              <p>{formik.errors.lastname}</p>
            </div>
          ) : null}
        </div>

        <div className="mb-4">
          <input
            className=""
            name="email"
            type="email"
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

        <div className="mb-4">
          <input
            className=""
            name="mobile"
            type="phone"
            placeholder="Mobile Number"
            onBlur={formik.handleBlur("mobile")}
            onChange={formik.handleChange("mobile")}
            value={formik.values.mobile}
          />
          {formik.touched.mobile && formik.errors.mobile ? (
            <div className="error">
              <p>{formik.errors.mobile}</p>
            </div>
          ) : null}
        </div>

        <div className="mb-4">
          <input
            className=""
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

        <div className="flex items-center justify-center">
          <button type="submit" className="primary-btn">
            Sign up
          </button>
        </div>
      </form>
    </div>
  )
}

export default RegisterForm
