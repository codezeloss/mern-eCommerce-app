import { useState } from "react"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useFormik } from "formik"
import { toast } from "react-toastify"
import { object, string } from "yup"
import { createQuery } from "../../features/contact/contactSlice"

// ** yup Validation
let contactSchema = object({
  name: string().required("Name is required"),
  email: string().email("Email should be valid").required("Email is required"),
  mobile: string().required("Mobile is required"),
  comment: string().required("Comment is required"),
})

function ContactForm() {
  const dispatch = useDispatch()

  // ** RTK
  const contactState = useSelector((state: any) => state.contact)
  const { isError, isLoading, isSuccess, contact } = contactState

  // ** Formik
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      mobile: "",
      comment: "",
    },
    validationSchema: contactSchema,
    onSubmit: (values) => {
      // @ts-ignore
      dispatch(createQuery(values))
      formik.resetForm()
    },
  })

  // ** Toast Notification
  useEffect(() => {
    if (isSuccess && contact) {
      toast.success("Contact Form Submitted successfully!", {})
    }
    if (isError) {
      toast.error("Something went wrong!!", {})
    }
  }, [isSuccess, isError, isLoading, contact])

  return (
    <div className="w-full">
      <h2 className="text-xl mb-4">Contact</h2>

      <form className="flex flex-col gap-4" onSubmit={formik.handleSubmit}>
        <div>
          <input
            className="w-full"
            type="text"
            name="name"
            placeholder="Name"
            onBlur={formik.handleBlur("name")}
            onChange={formik.handleChange("name")}
            value={formik.values.name}
          />
          {formik.touched.name && formik.errors.name ? (
            <div className="error">
              <p>{formik.errors.name}</p>
            </div>
          ) : null}
        </div>

        <div>
          <input
            className="w-full"
            type="text"
            name="email"
            placeholder="Email address"
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

        <div>
          <input
            className="w-full"
            type="text"
            name="mobile"
            placeholder="Phone Number"
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

        <div>
          <textarea
            className="w-full min-h-[100px] text-sm px-4 py-2 outline-none bg-lightGray"
            name="comment"
            cols={30}
            rows={10}
            placeholder="Comment"
            onBlur={formik.handleBlur("comment")}
            onChange={formik.handleChange("comment")}
            value={formik.values.comment}
          />
          {formik.touched.comment && formik.errors.comment ? (
            <div className="error">
              <p>{formik.errors.comment}</p>
            </div>
          ) : null}
        </div>
        <button className="primary-btn" type="submit">
          Send
        </button>
      </form>
    </div>
  )
}

export default ContactForm
