import Rating from "@mui/material/Rating"
import { useState } from "react"

function UserReview() {
  const [value, setValue] = useState(2)

  return (
    <div className="flex items-center justify-between border-t-[1px] border-t-gray/[.1] py-5">
      <div>
        <Rating
          sx={{ fontSize: 14 }}
          name="simple-controlled"
          value={value}
          onChange={(e: any) => {
            setValue(e.target.value)
          }}
        />
        <p className="text-sm font-bold">Good</p>
        <p className="text-sm font-bold mb-2 italic">
          Anas Ali <span className="font-light not-italic">on</span> Aug 29,
          2022
        </p>
        <p className="text-xs text-gray/[.6] mb-3">
          Description ergher regh ergh erhg ethytj tyjyuk tuj rhe gergeg
        </p>
      </div>

      <div className="flex flex-col gap-14">
        <div></div>
        <div>
          <button
            type="button"
            className="text-[10px] hover:underline text-gray/[.4]"
          >
            Report as Inappropriate
          </button>
        </div>
      </div>
    </div>
  )
}

export default UserReview
