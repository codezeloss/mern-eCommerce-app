import { Link, useNavigate } from "react-router-dom"
import PostComment from "./PostComment"
import blogImg from "../../assets/images/blog-1.jpg"
import arrowLeft from "../../assets/icons/arrow-left.svg"
import FacebookIcon from "@mui/icons-material/Facebook"
import TwitterIcon from "@mui/icons-material/Twitter"
import PinterestIcon from "@mui/icons-material/Pinterest"

interface Props {
  image: any
  createdAt: string
  title: string
  description: string
  author: string
}

function BlogPageDetails({
  image,
  createdAt,
  title,
  description,
  author,
}: Props) {
  const navigate = useNavigate()

  return (
    <div>
      <h1 className="text-2xl mb-4">{title}</h1>

      <img
        className="w-full h-[350px] object-cover mb-3"
        src={image}
        alt="Blog Image"
      />

      <div className="text-xs text-gray/[.6] border-b border-b-gray/[.2] border-b-[1px] pb-6">
        <p className="mb-4">{description}</p>

        <div className="flex items-center gap-8">
          <p>{createdAt}</p>
          <p>{author}</p>
        </div>
      </div>

      <div className="flex items-center justify-between py-8 text-gray/[.9]">
        <div
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => navigate(-1)}
        >
          <img className="w-6 h-5" src={arrowLeft} alt="Back to blog" />
          <p className="text-sm">Back to blog</p>
        </div>

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
