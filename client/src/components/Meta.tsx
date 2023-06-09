/*import { Helmet } from "react-helmet"*/
interface Props {
  title: string
}

function Meta({ title }: Props) {
  return (
    <div>
      <meta charSet="utf-8" />
      <title>{title}</title>
      <link rel="canonical" href="" />
    </div>
  )
}

export default Meta
