import Rating from "@mui/material/Rating"
import { useState } from "react"

function ReviewForm() {
  const [value, setValue] = useState(0)

  return (
    <div className="py-5 border-t-gray/[.1] border-t mt-4">
      <form className="text-sm text-gray flex flex-col gap-3">
        {/*<div>
        <label htmlFor="name">Name</label>
        <input
          className="mt-1"
          name="name"
          type="text"
          placeholder="Enter your name"
        />
      </div>
        <div>
        <label htmlFor="name">Email</label>
        <input
        className="mt-1"
        name="email"
        type="text"
        placeholder="ali.ahmed@example.com"
        />
        </div>
        <div>
        <label htmlFor="name">Review Title</label>
        <input
        className="mt-1"
        name="title"
        type="text"
        placeholder="Give your review a title"
        />
        </div>*/}
        <div>
          <p>Rating</p>
          <Rating
            sx={{ fontSize: 18, mt: 0.5 }}
            name="rating"
            value={value}
            onChange={(e: any) => {
              setValue(e.target.value)
            }}
          />
        </div>
        <div>
          <label htmlFor="name">Comment</label>
          <textarea
            className="mt-1 w-full"
            name="review_body"
            cols={30}
            rows={10}
            placeholder="Write your comment here..."
          />
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
