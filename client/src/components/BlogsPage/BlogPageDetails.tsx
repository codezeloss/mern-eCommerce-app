import blogImg from "/images/blog-1.jpg"
import { Link } from "react-router-dom"
import arrowLeft from "/icons/arrow-left.svg"
import FacebookIcon from "@mui/icons-material/Facebook"
import TwitterIcon from "@mui/icons-material/Twitter"
import PinterestIcon from "@mui/icons-material/Pinterest"
import PostComment from "./PostComment"

function BlogPageDetails() {
  return (
    <div>
      <h1 className="text-2xl mb-4">A Beautiful Sunday Morning Renaissance</h1>

      <img
        className="w-full h-[350px] object-cover mb-3"
        src={blogImg}
        alt="Blog Image"
      />

      <div className="text-xs text-gray/[.6] border-b border-b-gray/[.2] border-b-[1px] pb-6">
        <p className="mb-4">
          Notably, Meta is saying Quest 3 is coming with what the “highest
          resolution display yet” along with the inclusion of pancake optics,
          the latter of which is used to slim down any headset’s profile by a
          considerable amount over traditional Fresnel lenses, like those seen
          in Quest 2. Quest 3 packs in dual 4MP RGB color cameras, a depth
          sensor for a more accurate representation of your play space, and “10x
          more pixels in Passthrough compared to Quest 2,” Meta says.
        </p>

        <div className="flex items-center gap-8">
          <p>11 Jun, 2022</p>
          <p>Kajar Korat</p>
        </div>
      </div>

      <div className="flex items-center justify-between py-8 text-gray/[.9]">
        <Link className="flex items-center gap-3" to="/blogs">
          <img className="w-6 h-5" src={arrowLeft} alt="Back to blog" />
          <p className="text-sm">Back to blog</p>
        </Link>

        <div className="flex items-center gap-5">
          <Link to="/">
            <FacebookIcon sx={{ color: "#020617", fontSize: 20 }} />
          </Link>
          <Link to="/">
            <TwitterIcon sx={{ color: "#020617", fontSize: 20 }} />
          </Link>
          <Link to="/">
            <PinterestIcon sx={{ color: "#020617", fontSize: 20 }} />
          </Link>
        </div>
      </div>

      <PostComment />
    </div>
  )
}

export default BlogPageDetails
