import { Link } from "react-router-dom"
import { useState } from "react"

function LoginForm() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  return (
    <div className="py-10 mx-auto">
      <form className="bg-white px-6 py-10 rounded-md shadow-sm w-[450px] mx-auto">
        <h2 className="mb-6 text-center text-xl font-bold">Login</h2>

        <label htmlFor="Email">
          <input
            className="mb-4 w-full"
            name="email"
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label htmlFor="Password">
          <input
            className="mb-1 w-full"
            name="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <Link to="/account/forgot-password">
          <p className="text-xs font-semibold mb-6">Forgot your password?</p>
        </Link>

        <div className="flex items-center justify-center gap-4">
          <button type="submit" className="primary-btn">
            Login
          </button>
          <Link to="/">
            <p className="block w-fit text-white uppercase rounded-full px-4 py-2 bg-custom-orange text-secondary text-xs">
              Sign Up
            </p>
          </Link>
        </div>
      </form>
    </div>
  )
}

export default LoginForm
