import { useState } from "react"

function RegisterForm() {
  const [firstname, setFirstname] = useState("")
  const [lastname, setLastname] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const onSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    setFirstname("")
    setLastname("")
    setEmail("")
    setPassword("")
  }

  return (
    <div className="py-10 mx-auto">
      <form
        className="bg-white px-6 py-10 rounded-md shadow-sm w-[450px] mx-auto"
        onSubmit={onSubmitForm}
      >
        <h2 className="mb-4 text-center text-xl font-bold">Sign Up</h2>

        <label htmlFor="firstname">
          <input
            className="mb-4"
            name="firstname"
            type="text"
            placeholder="First name"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
          />
        </label>

        <label htmlFor="lastname">
          <input
            className="mb-4"
            name="lastname"
            type="text"
            placeholder="Last name"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
          />
        </label>

        <label htmlFor="Email">
          <input
            className="mb-4"
            name="email"
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>

        <label htmlFor="Email">
          <input
            className="mb-4"
            name=""
            type="text"
            placeholder="Email"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>

        <div className="flex items-center justify-center">
          <button type="submit" className="primary-btn">
            Create
          </button>
        </div>
      </form>
    </div>
  )
}

export default RegisterForm
