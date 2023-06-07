import { useState } from "react"

function ContactForm() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [comment, setComment] = useState("")

  const onSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    setName("")
    setEmail("")
    setPhone("")
    setComment("")
  }

  return (
    <div className="w-full">
      <h2 className="text-xl mb-4">Contact</h2>

      <form className="flex flex-col gap-4" onSubmit={onSubmitForm}>
        <label htmlFor="name">
          <input
            className="w-full"
            type="text"
            name="name"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label htmlFor="email">
          <input
            className="w-full"
            type="text"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label htmlFor="phone">
          <input
            className="w-full"
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </label>
        <label htmlFor="comment">
          <textarea
            className="w-full min-h-[100px] text-sm px-4 py-2 outline-none bg-lightGray"
            name="comment"
            cols={30}
            rows={10}
            placeholder="Comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
        </label>
        <button className="primary-btn" type="submit">
          Send
        </button>
      </form>
    </div>
  )
}

export default ContactForm
