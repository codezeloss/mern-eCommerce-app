import speaker from "../../assets/images/speaker.jpg"
import Rating from "@mui/material/Rating"

function RandomProduct() {
  return (
    <div className="flex items-center gap-2 py-4 border-b border-b-gray/[.1]">
      <div>
        <img className="w-[140px] h-full" src={speaker} alt="StoreProduct" />
      </div>

      <div>
        <p className="font-semibold mb-1 text-sm">
          Kids Headphones Bulk 10 Pack Multi Colored for...
        </p>
        <Rating
          sx={{ fontSize: 18, mb: 1 }}
          name="simple-controlled"
          value={3}
          readOnly
        />
        <p className="font-semibold text-sm">$100.00</p>
      </div>
    </div>
  )
}

export default RandomProduct
