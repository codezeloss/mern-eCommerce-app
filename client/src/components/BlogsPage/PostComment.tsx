import { useState } from "react"

function PostComment() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")

  return (
    <div className="bg-white p-6 rounded-md shadow-sm w-full">
      <h2 className="text-xl mb-4 text-gray/[.8]">Leave a Comment</h2>

      <form>
        <div className="w-full flex items-center gap-6 mb-4">
          <label className="w-full" htmlFor="name">
            <input
              className="mb-4 w-full"
              name="name"
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label className="w-full" htmlFor="email">
            <input
              className="mb-4 w-full"
              name="email"
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
        </div>

        <textarea
          className="min-h-[100px] mb-8"
          name=""
          id=""
          cols={20}
          rows={10}
          placeholder="Comment"
        />

        <button className="primary-btn" type="submit">
          Post Comment
        </button>
      </form>
    </div>
  )
}

export default PostComment
