import Service from "./Service"
import { data } from "./data"

function Services() {
  return (
    <div className="container py-14 flex items-center justify-between">
      {data.map((service) => (
        <Service src={service.icon} title={service.title} desc={service.desc} />
      ))}
    </div>
  )
}

export default Services
