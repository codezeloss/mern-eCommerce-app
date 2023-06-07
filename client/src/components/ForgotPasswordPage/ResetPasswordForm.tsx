import { Link } from "react-router-dom"
import { useState } from "react"

function ResetPasswordForm() {
  const [email, setEmail] = useState("")

  // **
  const onSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    setEmail("")
  }

  return (
    <div className="py-10 mx-auto">
      <form
        className="bg-white px-6 py-10 rounded-md shadow-sm w-[450px] mx-auto"
        onSubmit={onSubmitForm}
      >
        <h2 className="mb-2 text-center text-xl font-bold">
          Reset Your Password
        </h2>

        <p className="text-center text-xs text-gray/[.6] mb-4">
          We will send you an email to reset your password
        </p>

        <label htmlFor="Email">
          <input
            className="mb-8 w-full"
            name="email"
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>

        <div className="flex flex-col items-center justify-center gap-2">
          <button type="submit" className="primary-btn">
            Submit
          </button>
          <Link to="/account">
            <p className="block w-fit text-white uppercase rounded-full px-4 pt-2 text-primary text-xs">
              Cancel
            </p>
          </Link>
        </div>
      </form>
    </div>
  )
}

export default ResetPasswordForm
