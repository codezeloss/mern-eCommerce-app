import FooterNewsletter from "./FooterNewsletter"
import { Link } from "react-router-dom" // ** MUI imports
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import InstagramIcon from "@mui/icons-material/Instagram"
import GitHubIcon from "@mui/icons-material/GitHub"
import YouTubeIcon from "@mui/icons-material/YouTube"

function Footer() {
  return (
    <div className="bg-secondary text-white">
      <FooterNewsletter />

      <div className="container py-6 grid grid-cols-4">
        {/* Contact Us */}
        <div>
          <h2 className="text-xl mb-4">Contact Us</h2>
          <div className="text-sm font-light mb-3">
            <div className="mb-3">
              <p>Hno: 277 Near Vill chopal,</p>
              <p>Sonipat, Haryana</p>
              <p>PinCode: 134879</p>
            </div>
            <div>
              <p>+212 68989898989</p>
              <p>tecosteam101@gmail.com</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/">
              <LinkedInIcon sx={{ color: "#ffffff", fontSize: 25 }} />
            </Link>
            <Link to="/">
              <InstagramIcon sx={{ color: "#ffffff", fontSize: 25 }} />
            </Link>
            <Link to="/">
              <GitHubIcon sx={{ color: "#ffffff", fontSize: 23 }} />
            </Link>
            <Link to="/">
              <YouTubeIcon sx={{ color: "#ffffff", fontSize: 25 }} />
            </Link>
          </div>
        </div>

        {/* Information */}
        <div>
          <h2 className="text-xl mb-4">Information</h2>
          <div className="flex flex-col gap-3 font-light text-xs">
            <Link to="/">Privacy Policy</Link>
            <Link to="/">Refund Policy</Link>
            <Link to="/">Shipping Policy</Link>
            <Link to="/">Terms & Conditions</Link>
            <Link to="/">Blogs</Link>
          </div>
        </div>

        {/* Account */}
        <div>
          <h2 className="text-xl mb-4">Account</h2>
          <div className="flex flex-col gap-3 font-light text-sm">
            <Link to="/">About Us</Link>
            <Link to="/">FAQ</Link>
            <Link to="/">Contact</Link>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl mb-4">Quick Links</h2>
          <div className="flex flex-col gap-3 font-light text-sm">
            <Link to="/">Laptops</Link>
            <Link to="/">Headphones</Link>
            <Link to="/">Tablets</Link>
            <Link to="/">Watch</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
