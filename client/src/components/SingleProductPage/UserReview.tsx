import { useState } from "react"
import Rating from "@mui/material/Rating"

interface Props {
  stars: number
  customer: string
  postedAt: string
  comment: string
}

function UserReview({ stars, customer, postedAt, comment }: Props) {
  const [value, setValue] = useState(3)

  return (
    <div className="flex items-center justify-between border-t-[1px] border-t-gray/[.1] py-5">
      <div>
        <p className="text-sm font-bold mb-0.5 italic">
          {customer} <span className="font-light not-italic"> on </span>
          {postedAt}
        </p>
        <Rating
          sx={{ fontSize: 14 }}
          name="simple-controlled"
          value={stars}
          readOnly
        />
        <p className="text-xs text-gray/[.6]">{comment}</p>
      </div>

      <div className="flex flex-col gap-14">
        <div></div>
        <div>
          <button
            type="button"
            className="text-[10px] hover:underline text-gray/[.4] mb-2"
          >
            Report as Inappropriate
          </button>
        </div>
      </div>
    </div>
  )
}

export default UserReview
