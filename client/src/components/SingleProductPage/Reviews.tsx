import React, { useState } from "react"
import Rating from "@mui/material/Rating"
import UserReview from "./UserReview"
import ReviewForm from "./ReviewForm"
import { useDispatch, useSelector } from "react-redux"

function Reviews() {
  const dispatch = useDispatch()
  const [writeReview, setWriteReview] = useState(false)

  // ** RTK
  const productState = useSelector((state: any) => state.product.product)

  return (
    <div>
      <h1 className="text-lg mt-8 mb-2">Reviews</h1>
      <div className="bg-white rounded-md shadow-sm p-7">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-lg">Customer Reviews</p>
            <div className="flex items-center gap-2">
              <Rating
                sx={{ fontSize: 18 }}
                name="simple-controlled"
                value={5}
                readOnly
              />
              <p className="text-gray/[.7] text-xs my-2">Based on 2 reviews</p>
            </div>
          </div>
          <button
            type="button"
            className="text-gray/[.7] text-xs font-bold hover:underline"
            onClick={() => {
              setWriteReview(!writeReview)
            }}
          >
            Write a review
          </button>
        </div>

        {writeReview && <ReviewForm />}

        <div className="my-4">
          {productState &&
            productState.ratings.map((product: any, index: React.Key) => (
              <div key={index}>
                <UserReview
                  stars={product?.star}
                  customer={"Customer here"}
                  postedAt={"Date here"}
                  comment={product?.comment}
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default Reviews
