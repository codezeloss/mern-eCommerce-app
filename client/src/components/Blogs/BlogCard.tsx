import picture from "../../../public/images/blog-1.jpg"

function BlogCard() {
  return (
    <div className="bg-white shadow-sm rounded-b-md">
      <div>
        <img
          className="rounded-t-md object-cover w-full h-[200px]"
          src={picture}
          alt="Blog"
        />
      </div>

      <div className="bg-white py-6 px-4 rounded-b-md">
        <p className="text-xs text-gray/[.6] mb-3 uppercase">11 June, 2022</p>
        <h3 className="text-base font-bold mb-2">
          A Beautiful Sunday Morning Renaissance
        </h3>
        <p className="text-xs text-gray/[.6] mb-4 text-justify">
          You are only as good as your last collection, which is an enormous
          pressure. I think there is something about...
        </p>
        <button className="primary-btn">Read More</button>
      </div>
    </div>
  )
}

export default BlogCard
