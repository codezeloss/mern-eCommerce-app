import BreadCrumb from "../components/BreadCrumb.js"
import ContactForm from "../components/ContactPage/ContactForm"
import GetInTouch from "../components/ContactPage/GetInTouch"
import GoogleMap from "../components/ContactPage/GoogleMap"

function Contact() {
  return (
    <>
      <div>
        <div className="flex items-center justify-center">
          <BreadCrumb path="/contact" title="Contact" />
        </div>

        <div className="bg-lightGray h-full py-6">
          <div className="container mb-20">
            {/* MAP */}
            <div>
              <GoogleMap />
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-md shadow-sm p-6 flex gap-16">
              <ContactForm />
              <GetInTouch />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
