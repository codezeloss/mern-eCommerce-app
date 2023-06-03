import { Link } from "react-router-dom"

function BreadCrumb({ title, path }: Props) {
  return (
    <>
      <p className="text-sm font-light text-center mb-20">
        <meta charSet="utf-8" />
        <Link className="hover:underline" to="/">
          Home
        </Link>{" "}
        /{" "}
        <Link className="hover:underline" to={path}>
          {title}
        </Link>
      </p>
    </>
  )
}

export default BreadCrumb

interface Props {
  title: string
  path: string
}
