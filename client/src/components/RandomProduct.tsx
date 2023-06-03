import speaker from "../../public/images/speaker.jpg"
import { useState } from "react"
import Rating from "@mui/material/Rating"

function RandomProduct() {
  const [value, setValue] = useState(2)

  return (
    <div className="flex items-center gap-2 py-4 border-b border-b-gray/[.1]">
      <div>
        <img className="w-[140px] h-full" src={speaker} alt="Product" />
      </div>

      <div>
        <p className="font-semibold mb-1 text-sm">
          Kids Headphones Bulk 10 Pack Multi Colored for...
        </p>
        <Rating
          sx={{ fontSize: 18, mb: 1 }}
          name="simple-controlled"
          value={value}
          onChange={(e: any) => {
            setValue(e.target.value)
          }}
        />
        <p className="font-semibold text-sm">$100.00</p>
      </div>
    </div>
  )
}

export default RandomProduct
