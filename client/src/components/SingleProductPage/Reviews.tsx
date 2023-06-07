import Rating from "@mui/material/Rating"
import { useState } from "react"
import UserReview from "./UserReview"
import ReviewForm from "./ReviewForm"

function Reviews() {
  const [value, setValue] = useState(0)
  const [writeReview, setWriteReview] = useState(false)

  return (
    <div>
      <h1 className="text-lg mt-8 mb-2">Reviews</h1>
      <div className="bg-white rounded-md shadow-sm p-7">
        <div className="flex items-center justify-between">
          <div>
            <p>Customer Reviews</p>
            <div className="flex items-center gap-2">
              <Rating
                sx={{ fontSize: 18 }}
                name="simple-controlled"
                value={value}
                onChange={(e: any) => {
                  setValue(e.target.value)
                }}
              />
              <p className="text-gray/[.7] text-xs my-2">Based on 2 reviews</p>
            </div>
          </div>
          <button
            type="button"
            className="text-gray/[.7] text-xs font-bold hover:underline"
            onClick={() => {
              console.log(writeReview)
              setWriteReview(!writeReview)
            }}
          >
            Write a review
          </button>
        </div>

        {writeReview && <ReviewForm />}

        <div className="my-4">
          <UserReview />
          <UserReview />
          <UserReview />
        </div>
      </div>
    </div>
  )
}

export default Reviews
