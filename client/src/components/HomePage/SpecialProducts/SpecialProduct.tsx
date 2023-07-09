import pic from "../../../../public/assets/images/tab1.jpg"
import { useState } from "react"
import heart from "../../../../public/assets/icons/heart-black.svg"

// ** MUI Imports
import { styled } from "@mui/material/styles"
import Box from "@mui/material/Box"
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress"
import Rating from "@mui/material/Rating"

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#22c55e" : "#4ade80",
  },
}))

function FamousProduct() {
  const [value, setValue] = useState(2)

  return (
    <div className="w-full bg-white shadom-sm rounded-md p-4 grid grid-cols-2 items-center">
      <div className="flex flex-col pr-4">
        <div className="flex items-center justify-between">
          <div></div>
          <button type="button">
            <img className="w-4 h-4 text-black" src={heart} alt="Like" />
          </button>
        </div>

        <div className="flex flex-col items-center">
          <div>
            <img src={pic} alt="FamousProduct" />
          </div>

          <div className="flex items-center gap-2">
            <img
              className="w-20 h-20 border border-gray/[.1] border-[1px]"
              src={pic}
              alt="FamousProduct"
            />
            <img
              className="w-20 h-20 border border-gray/[.1] border-[1px]"
              src={pic}
              alt="FamousProduct"
            />
          </div>
        </div>
      </div>

      <div className="pt-2 pb-6">
        <p className="text-red-600 mb-3 text-xs">Havells</p>
        <h3 className="text-sm font-bold mb-2 leading-5">
          Samsung Galaxy Tab A SM-T295, 4G...
        </h3>
        <Rating
          sx={{ fontSize: 18, mb: 1.5 }}
          name="simple-controlled"
          value={value}
          onChange={(e: any) => {
            setValue(e.target.value)
          }}
        />
        <div className="flex items-center gap-3 mb-3 text-sm">
          <p className="text-red-500">$11.00</p>
          <p className="line-through text-gray/[.6]">$25.00</p>
        </div>
        <div className="flex items-center gap-3 mb-3 ml-2">
          <p className="text-xs text-gray/[.8]">
            <span className="font-bold pr-1 text-black">271</span> Days
          </p>
          <div className="flex items-center text-xs">
            <p className="text-white bg-red-500 rounded-full p-2">08</p>
            <p> : </p>
            <p className="text-white bg-red-500 rounded-full p-2">26</p>
            <p> : </p>
            <p className="text-white bg-red-500 rounded-full p-2">02</p>
          </div>
        </div>
        <div>
          <p className="text-xs text-gray/[.5] mb-2">Products: 200</p>
          <Box sx={{ flexGrow: 1, mb: 4 }}>
            <BorderLinearProgress variant="determinate" value={50} />
          </Box>
        </div>
        <button className="primary-btn" type="button">
          Add to Cart
        </button>
      </div>
    </div>
  )
}

export default FamousProduct
