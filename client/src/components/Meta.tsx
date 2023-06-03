/*import { Helmet } from "react-helmet"*/

function Meta({ title }: Props) {
  return (
    <div>
      <meta charSet="utf-8" />
      <title>{title}</title>
      <link rel="canonical" href="http://mysite.com/example" />
    </div>
  )
}

export default Meta

interface Props {
  title: string
}
