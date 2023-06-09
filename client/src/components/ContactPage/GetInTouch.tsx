import homeIcon from "../../../public/icons/home-icon.svg"
import phoneIcon from "../../../public/icons/phone-icon.svg"
import mailIcon from "../../../public/icons/mail-icon.svg"
import infoIcon from "../../../public/icons/info-icon.svg"

function GetInTouch() {
  return (
    <div className="w-full">
      <h2 className="text-xl mb-4">Get In Touch With Us</h2>

      <div className="flex flex-col gap-6 text-xs text-gray/[.7]">
        <div className="flex items-center gap-2">
          <img className="w-5 h-5" src={homeIcon} alt="" />
          <p>33 New Montgomery St.Ste 750 San Francisco. CA, USA 9410S</p>
        </div>
        <div className="flex items-center gap-2">
          <img className="w-5 h-5" src={phoneIcon} alt="" />
          <p>(+212) 66 6666 6666</p>
        </div>
        <div className="flex items-center gap-2">
          <img className="w-5 h-5" src={mailIcon} alt="" />
          <p>@tecos@gmail.com</p>
        </div>
        <div className="flex items-center gap-2">
          <img className="w-5 h-5" src={infoIcon} alt="" />
          <p>Monday - Friday 10 AM - 8 PM</p>
        </div>
      </div>
    </div>
  )
}

export default GetInTouch
