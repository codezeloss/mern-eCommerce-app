import Rating from "@mui/material/Rating"
import { useEffect, useState } from "react"
import { number, object, string } from "yup"
import { useFormik } from "formik"
import { toast } from "react-toastify"
import { useDispatch, useSelector } from "react-redux"
import { addProductReview } from "../../features/product/productSlice"
import { useLocation } from "react-router-dom"

// ** yup Validation
let reviewSchema = object({
  star: number().required("Rating stars are required"),
  comment: string().required("Comment is required"),
})

function ReviewForm() {
  const dispatch = useDispatch()
  const location = useLocation()

  // ** Get current product ID
  const productId = location.pathname.split("/")[2]

  // ** RTK
  const productState = useSelector((state: any) => state.product)
  const { isSuccess, isError, isLoading, product } = productState

  // ** Formik
  const formik = useFormik({
    initialValues: {
      star: 0,
      comment: "",
      productId: productId,
    },
    validationSchema: reviewSchema,
    onSubmit: (values) => {
      // @ts-ignore
      dispatch(addProductReview(values))
      formik.resetForm()
      setTimeout(() => {
        // ** Toast Pop-up Notification
        if (isSuccess && product) {
          toast.success("Review added successfully!", {})
        }
        if (isError) {
          toast.error("Something went wrong!!", {})
        }
      }, 300)
    },
  })

  return (
    <div className="py-5 border-t-gray/[.1] border-t mt-4">
      <form
        className="text-sm text-gray flex flex-col gap-3"
        onSubmit={formik.handleSubmit}
      >
        <div>
          <p>Rating</p>
          <Rating
            sx={{ fontSize: 18, mt: 0.5 }}
            name="rating"
            onBlur={formik.handleBlur("star")}
            onChange={formik.handleChange("star")}
            value={formik.values.star}
          />
          {formik.touched.star && formik.errors.star ? (
            <div className="error">
              <p>{formik.errors.star}</p>
            </div>
          ) : null}
        </div>
        <div>
          <label htmlFor="name">Comment</label>
          <textarea
            className="mt-1 w-full"
            name="review_body"
            cols={30}
            rows={10}
            placeholder="Write your comment here..."
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

        <div className="w-full flex items-center justify-between">
          <div />
          <button className="primary-btn" type="submit">
            Submit Review
          </button>
        </div>
      </form>
    </div>
  )
}

export default ReviewForm
