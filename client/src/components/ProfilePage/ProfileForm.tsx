import Box from "@mui/material/Box"
import TextField from "@mui/material/TextField"
import React, { useEffect, useState } from "react"
import { object, string } from "yup"
import { useFormik } from "formik"
import { useDispatch, useSelector } from "react-redux"
import { updateUserProfile } from "../../features/user/userSlice"
import { toast } from "react-toastify"
import { FiEdit } from "react-icons/fi"

// ** yup Validation
let profileSchema = object({
  firstname: string().required("First Name is required"),
  lastname: string().required("Last Name is required"),
  email: string().email("Email should be valid").required("Email is required"),
  mobile: string().required("Mobile is required"),
})

function ProfileForm() {
  const dispatch = useDispatch()
  const [edit, setEdit] = useState(true)

  // ** RTK - User state
  const userState = useSelector((state: any) => state.auth)
  const { isError, isSuccess, isLoading, user } = userState

  // ** Formik
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      firstname: "" || String(user?.firstname),
      lastname: "" || String(user?.lastname),
      email: "" || String(user?.email),
      mobile: "" || String(user?.mobile),
    },
    validationSchema: profileSchema,
    onSubmit: (values: any) => {
      // @ts-ignore
      dispatch(updateUserProfile(values))
      setEdit(true)
      // ** Toast Notification & Redirect user
      if (isSuccess && user) {
        toast.success("Profile Updated successfully!", {})
      }
    },
  })

  return (
    <>
      <div className="max-w-[500px] mx-auto my-16">
        <div className="flex items-center justify-between gap-4 mb-2">
          <h1 className="text-2xl text-left">
            {`${edit ? "My" : "Update"}`} Profile
          </h1>
          <div className="cursor-pointer" onClick={() => setEdit(!edit)}>
            <FiEdit />
          </div>
        </div>

        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { my: 1.5, width: "100%" },
          }}
          noValidate
          autoComplete="off"
          onSubmit={formik.handleSubmit}
        >
          <div>
            <TextField
              className="bg-white"
              id="firstname"
              label="Firstname"
              defaultValue={formik.values.firstname}
              onBlur={formik.handleBlur("firstname")}
              onChange={formik.handleChange("firstname")}
              value={formik.values.firstname}
              disabled={edit}
            />
            {formik.touched.firstname && formik.errors.firstname ? (
              <div className="error text-left mb-2 mt-0">
                <p>{formik.errors.firstname}</p>
              </div>
            ) : null}
          </div>
          <div>
            <TextField
              id="lastname"
              label="Lastname"
              defaultValue="Hello World"
              onBlur={formik.handleBlur("lastname")}
              onChange={formik.handleChange("lastname")}
              value={formik.values.lastname}
              disabled={edit}
            />
            {formik.touched.lastname && formik.errors.lastname ? (
              <div className="error text-left mb-2 mt-0">
                <p>{formik.errors.lastname}</p>
              </div>
            ) : null}
          </div>
          <div>
            <TextField
              id="email"
              label="Email"
              defaultValue="Hello World"
              onBlur={formik.handleBlur("email")}
              onChange={formik.handleChange("email")}
              value={formik.values.email}
              disabled={edit}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="error text-left mb-2 mt-0">
                <p>{formik.errors.email}</p>
              </div>
            ) : null}
          </div>
          <div>
            <TextField
              id="mobile"
              label="Mobile"
              defaultValue="Hello World"
              onBlur={formik.handleBlur("mobile")}
              onChange={formik.handleChange("mobile")}
              value={formik.values.mobile}
              disabled={edit}
            />
            {formik.touched.mobile && formik.errors.mobile ? (
              <div className="error text-left mb-2 mt-0">
                <p>{formik.errors.mobile}</p>
              </div>
            ) : null}
          </div>
          {!edit && (
            <button
              type="submit"
              className="primary-btn w-full py-4 rounded-md mt-2"
            >
              Save
            </button>
          )}
        </Box>
      </div>
    </>
  )
}

export default ProfileForm
