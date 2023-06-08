import { Link } from "react-router-dom"
import { useState } from "react"

function ResetPasswordForm() {
  const [password, setPassword] = useState("")
  const [confirmedPassword, setConfirmedPassword] = useState("")

  // **
  const onSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    setPassword("")
    setConfirmedPassword("")
  }

  return (
    <div className="py-10 mx-auto">
      <form
        className="bg-white px-6 py-10 rounded-md shadow-sm w-[450px] mx-auto"
        onSubmit={onSubmitForm}
      >
        <h2 className="mb-6 text-center text-xl font-bold">
          Reset Your Password
        </h2>

        <label htmlFor="Password">
          <input
            className="mb-3 w-full"
            name="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <label htmlFor="Confirm Password">
          <input
            className="mb-6 w-full"
            name="email"
            type="password"
            placeholder="Confirm Password"
            value={confirmedPassword}
            onChange={(e) => setConfirmedPassword(e.target.value)}
          />
        </label>

        <div className="flex justify-center">
          <button type="submit" className="primary-btn text-center">
            Ok
          </button>
        </div>
      </form>
    </div>
  )
}

export default ResetPasswordForm
