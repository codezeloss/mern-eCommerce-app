import { Link, useNavigate } from "react-router-dom"
import Box from "@mui/material/Box"
import TextField from "@mui/material/TextField"
import Autocomplete from "@mui/material/Autocomplete"
import infoIcon from "../../assets/icons/info-icon.svg"
import arrowLeft from "../../assets/icons/arrow-left.svg"
import { number, object, string } from "yup"
import { useFormik } from "formik"
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import axios from "axios"
import { config } from "../../utils/axios_config"
import { createNewOrder } from "../../features/user/userSlice"

// ** yup Validation
let shippingSchema = object({
  country: string().required("Country is required"),
  firstName: string().required("First Name is required"),
  lastName: string().required("Last Name is required"),
  address: string().required("Address details are required"),
  city: string().required("City is required"),
  state: string().required("State is required"),
  zipCode: number().required("Zip Code is required"),
  other: string(),
})

function ContactInfos() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [totalAmount, setTotalAmount] = useState(null)
  const [shippingInfos, setShippingInfos] = useState(null)
  const [paymentInfos, setPaymentInfos] = useState({
    razorpayPaymentId: "",
    razorpayOrderId: "",
  })
  const [cartProductState, setCartProductState] = useState([])

  // ** RTK - Cart State
  const cartState = useSelector((state: any) => state.auth.userCart)

  // ** Load script
  const loadScript = (src: any) => {
    return new Promise((resolve) => {
      const script = document.createElement("script")
      script.src = src
      script.onload = () => {
        resolve(true)
      }
      script.onerror = () => {
        resolve(false)
      }
      document.body.appendChild(script)
    })
  }

  // **
  useEffect(() => {
    let items: any[] = []
    for (let i = 0; i < cartState.length; i++) {
      items.push({
        product: cartState[i].product_id,
        quantity: cartState[i].quantity,
        color: cartState[i].color._id,
        price: cartState[i].price,
      })
      // @ts-ignore
      setCartProductState(items)
    }
  }, [])

  // ** Checkout handler
  const checkoutHandler = async () => {
    const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js")
    if (!res) {
      alert("Razorpay SDK failed to load!")
      return
    }

    const result = await axios.post(
      "http://localhost:4000/api/user/order/checkout",
      { amount: totalAmount },
      config,
    )
    if (!result) {
      alert("Something went wrong!")
      return
    }

    const { amount, id: order_id, currency } = result.data.order
    const options = {
      key: "rzp_test_ekpGjQU242wyfA",
      amount: amount,
      currency: currency,
      name: "codezeloss Corp.",
      description: "Test Transaction",
      order_id: order_id,
      handler: async function (response: any) {
        const data = {
          orderCreationId: order_id,
          razorpayPaymentId: response.razorpay_payment_id,
          razorpayOrderId: response.razorpay_order_id,
        }

        const result = await axios.post(
          "http://localhost:4000/api/user/order/paymentVerification",
          data,
          config,
        )

        setPaymentInfos({
          razorpayPaymentId: response.razorpay_payment_id,
          razorpayOrderId: response.razorpay_order_id,
        })

        const orderData = {
          totalPrice: totalAmount,
          totalPriceAfterDiscount: totalAmount,
          orderItems: cartProductState,
          paymentInfos,
          shippingInfos,
        }
        // @ts-ignore
        dispatch(createNewOrder(orderData))
      },
      prefill: {
        name: "codezeloss",
        email: "codezeloss@example.com",
        contact: "9999999999",
      },
      notes: {
        address: "codezeloss Corporate Office",
      },
      theme: {
        color: "#61dafb",
      },
    }
  }

  // ** Formik
  const formik = useFormik({
    initialValues: {
      country: "",
      firstName: "",
      lastName: "",
      address: "",
      city: "",
      state: "",
      zipCode: "",
      other: "",
    },
    validationSchema: shippingSchema,
    onSubmit: (values: any) => {
      setShippingInfos(values)
      navigate("/cart/checkout/shipping")
      formik.resetForm()
    },
  })

  return (
    <div className="text-xs text-gray/[.6]">
      <div>
        <h2 className="text-lg mb-4 mt-6 text-primary">Contact information</h2>
        <div className="flex flex-col gap-2 mb-6">
          <p>Navdeep Dahiya (momo1223@gmail.com)</p>
          <button className="block w-fit">Log out</button>
          <div className="flex items-center gap-2">
            <input className="w-fit" type="checkbox" />
            <p>Email me with news and offers</p>
          </div>
        </div>
      </div>

      <form onSubmit={formik.handleSubmit}>
        <h2 className="text-lg mb-4 text-primary">Shipping address</h2>

        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { width: "100%", fontSize: 12, my: 1 },
          }}
          noValidate
          autoComplete="off"
        >
          <div>
            <div className="w-full">
              <TextField
                sx={{ fontSize: 12, width: "100%" }}
                id="outlined-password-input"
                label="Country"
                type="text"
                onBlur={formik.handleBlur("country")}
                onChange={formik.handleChange("country")}
                value={formik.values.country}
              />
              {formik.touched.country && formik.errors.country ? (
                <div className="error">
                  <p>{formik.errors.country}</p>
                </div>
              ) : null}
            </div>

            <div className="w-full flex gap-4">
              <div className="w-full">
                <TextField
                  sx={{ fontSize: 12, width: "100%" }}
                  id="outlined-password-input"
                  label="First name"
                  type="text"
                  onBlur={formik.handleBlur("firstName")}
                  onChange={formik.handleChange("firstName")}
                  value={formik.values.firstName}
                />
                {formik.touched.firstName && formik.errors.firstName ? (
                  <div className="error">
                    <p>{formik.errors.firstName}</p>
                  </div>
                ) : null}
              </div>
              <div className="w-full">
                <TextField
                  sx={{ fontSize: 12, width: "100%" }}
                  id="outlined-password-input"
                  label="Last name"
                  type="text"
                  onBlur={formik.handleBlur("lastName")}
                  onChange={formik.handleChange("lastName")}
                  value={formik.values.lastName}
                />
                {formik.touched.lastName && formik.errors.lastName ? (
                  <div className="error">
                    <p>{formik.errors.lastName}</p>
                  </div>
                ) : null}
              </div>
            </div>

            <div>
              <div>
                <TextField
                  sx={{ fontSize: 12 }}
                  id="outlined-password-input"
                  label="Address"
                  type="text"
                  onBlur={formik.handleBlur("address")}
                  onChange={formik.handleChange("address")}
                  value={formik.values.address}
                />
                {formik.touched.address && formik.errors.address ? (
                  <div className="error mb-2">
                    <p>{formik.errors.address}</p>
                  </div>
                ) : null}
              </div>
              <div className="flex items-center gap-2">
                <img className="w-5 h-5" src={infoIcon} alt="" />
                <p>Add a house number if you have one</p>
              </div>
            </div>

            <div>
              <TextField
                sx={{ fontSize: 12 }}
                id="outlined-password-input"
                label="Apartement, suite, etc. (optional)"
                type="text"
                onBlur={formik.handleBlur("other")}
                onChange={formik.handleChange("other")}
                value={formik.values.other}
              />
              {formik.touched.other && formik.errors.other ? (
                <div className="error">
                  <p>{formik.errors.other}</p>
                </div>
              ) : null}
            </div>

            <div className="flex items-center gap-4">
              <div className="w-full">
                <TextField
                  sx={{ fontSize: 12 }}
                  id="outlined-password-input"
                  label="City"
                  type="text"
                  onBlur={formik.handleBlur("city")}
                  onChange={formik.handleChange("city")}
                  value={formik.values.city}
                />
                {formik.touched.city && formik.errors.city ? (
                  <div className="error">
                    <p>{formik.errors.city}</p>
                  </div>
                ) : null}
              </div>
              <div className="w-full">
                <TextField
                  sx={{ fontSize: 12 }}
                  id="outlined-password-input"
                  label="State"
                  type="text"
                  onBlur={formik.handleBlur("state")}
                  onChange={formik.handleChange("state")}
                  value={formik.values.state}
                />
                {formik.touched.state && formik.errors.state ? (
                  <div className="error">
                    <p>{formik.errors.state}</p>
                  </div>
                ) : null}
              </div>
              <div className="w-full">
                <TextField
                  sx={{ fontSize: 12 }}
                  id="outlined-password-input"
                  label="ZIP code"
                  type="number"
                  onBlur={formik.handleBlur("zipCode")}
                  onChange={formik.handleChange("zipCode")}
                  value={formik.values.zipCode}
                />
                {formik.touched.zipCode && formik.errors.zipCode ? (
                  <div className="error">
                    <p>{formik.errors.zipCode}</p>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </Box>

        <div className="flex items-center justify-between my-4">
          <Link to={`/cart`} className="flex items-center gap-2">
            <img
              className="w-4 h-4"
              src={arrowLeft}
              alt="Return to information"
            />
            <p className="text-sm text-gray/[.8]">Return to Cart</p>
          </Link>

          <button
            type="submit"
            className="p-4 text-white bg-red-600 rounded-md text-sm"
          >
            Continue to shipping
          </button>
        </div>
      </form>
    </div>
  )
}

export default ContactInfos

const countries = [
  { code: "AD", label: "Andorra", phone: "376" },
  {
    code: "AE",
    label: "United Arab Emirates",
    phone: "971",
  },
  { code: "AF", label: "Afghanistan", phone: "93" },
  {
    code: "AG",
    label: "Antigua and Barbuda",
    phone: "1-268",
  },
  { code: "AI", label: "Anguilla", phone: "1-264" },
  { code: "AL", label: "Albania", phone: "355" },
  { code: "AM", label: "Armenia", phone: "374" },
  { code: "AO", label: "Angola", phone: "244" },
  { code: "AQ", label: "Antarctica", phone: "672" },
  { code: "AR", label: "Argentina", phone: "54" },
  { code: "AS", label: "American Samoa", phone: "1-684" },
  { code: "AT", label: "Austria", phone: "43" },
  {
    code: "AU",
    label: "Australia",
    phone: "61",
    suggested: true,
  },
  { code: "AW", label: "Aruba", phone: "297" },
  { code: "AX", label: "Alland Islands", phone: "358" },
  { code: "AZ", label: "Azerbaijan", phone: "994" },
  {
    code: "BA",
    label: "Bosnia and Herzegovina",
    phone: "387",
  },
  { code: "BB", label: "Barbados", phone: "1-246" },
  { code: "BD", label: "Bangladesh", phone: "880" },
  { code: "BE", label: "Belgium", phone: "32" },
  { code: "BF", label: "Burkina Faso", phone: "226" },
  { code: "BG", label: "Bulgaria", phone: "359" },
  { code: "BH", label: "Bahrain", phone: "973" },
  { code: "BI", label: "Burundi", phone: "257" },
  { code: "BJ", label: "Benin", phone: "229" },
  { code: "BL", label: "Saint Barthelemy", phone: "590" },
  { code: "BM", label: "Bermuda", phone: "1-441" },
  { code: "BN", label: "Brunei Darussalam", phone: "673" },
  { code: "BO", label: "Bolivia", phone: "591" },
  { code: "BR", label: "Brazil", phone: "55" },
  { code: "BS", label: "Bahamas", phone: "1-242" },
  { code: "BT", label: "Bhutan", phone: "975" },
  { code: "BV", label: "Bouvet Island", phone: "47" },
  { code: "BW", label: "Botswana", phone: "267" },
  { code: "BY", label: "Belarus", phone: "375" },
  { code: "BZ", label: "Belize", phone: "501" },
  {
    code: "CA",
    label: "Canada",
    phone: "1",
    suggested: true,
  },
  {
    code: "CC",
    label: "Cocos (Keeling) Islands",
    phone: "61",
  },
  {
    code: "CD",
    label: "Congo, Democratic Republic of the",
    phone: "243",
  },
  {
    code: "CF",
    label: "Central African Republic",
    phone: "236",
  },
  {
    code: "CG",
    label: "Congo, Republic of the",
    phone: "242",
  },
  { code: "CH", label: "Switzerland", phone: "41" },
  { code: "CI", label: "Cote d'Ivoire", phone: "225" },
  { code: "CK", label: "Cook Islands", phone: "682" },
  { code: "CL", label: "Chile", phone: "56" },
  { code: "CM", label: "Cameroon", phone: "237" },
  { code: "CN", label: "China", phone: "86" },
  { code: "CO", label: "Colombia", phone: "57" },
  { code: "CR", label: "Costa Rica", phone: "506" },
  { code: "CU", label: "Cuba", phone: "53" },
  { code: "CV", label: "Cape Verde", phone: "238" },
  { code: "CW", label: "Curacao", phone: "599" },
  { code: "CX", label: "Christmas Island", phone: "61" },
  { code: "CY", label: "Cyprus", phone: "357" },
  { code: "CZ", label: "Czech Republic", phone: "420" },
  {
    code: "DE",
    label: "Germany",
    phone: "49",
    suggested: true,
  },
  { code: "DJ", label: "Djibouti", phone: "253" },
  { code: "DK", label: "Denmark", phone: "45" },
  { code: "DM", label: "Dominica", phone: "1-767" },
  {
    code: "DO",
    label: "Dominican Republic",
    phone: "1-809",
  },
  { code: "DZ", label: "Algeria", phone: "213" },
  { code: "EC", label: "Ecuador", phone: "593" },
  { code: "EE", label: "Estonia", phone: "372" },
  { code: "EG", label: "Egypt", phone: "20" },
  { code: "EH", label: "Western Sahara", phone: "212" },
  { code: "ER", label: "Eritrea", phone: "291" },
  { code: "ES", label: "Spain", phone: "34" },
  { code: "ET", label: "Ethiopia", phone: "251" },
  { code: "FI", label: "Finland", phone: "358" },
  { code: "FJ", label: "Fiji", phone: "679" },
  {
    code: "FK",
    label: "Falkland Islands (Malvinas)",
    phone: "500",
  },
  {
    code: "FM",
    label: "Micronesia, Federated States of",
    phone: "691",
  },
  { code: "FO", label: "Faroe Islands", phone: "298" },
  {
    code: "FR",
    label: "France",
    phone: "33",
    suggested: true,
  },
  { code: "GA", label: "Gabon", phone: "241" },
  { code: "GB", label: "United Kingdom", phone: "44" },
  { code: "GD", label: "Grenada", phone: "1-473" },
  { code: "GE", label: "Georgia", phone: "995" },
  { code: "GF", label: "French Guiana", phone: "594" },
  { code: "GG", label: "Guernsey", phone: "44" },
  { code: "GH", label: "Ghana", phone: "233" },
  { code: "GI", label: "Gibraltar", phone: "350" },
  { code: "GL", label: "Greenland", phone: "299" },
  { code: "GM", label: "Gambia", phone: "220" },
  { code: "GN", label: "Guinea", phone: "224" },
  { code: "GP", label: "Guadeloupe", phone: "590" },
  { code: "GQ", label: "Equatorial Guinea", phone: "240" },
  { code: "GR", label: "Greece", phone: "30" },
  {
    code: "GS",
    label: "South Georgia and the South Sandwich Islands",
    phone: "500",
  },
  { code: "GT", label: "Guatemala", phone: "502" },
  { code: "GU", label: "Guam", phone: "1-671" },
  { code: "GW", label: "Guinea-Bissau", phone: "245" },
  { code: "GY", label: "Guyana", phone: "592" },
  { code: "HK", label: "Hong Kong", phone: "852" },
  {
    code: "HM",
    label: "Heard Island and McDonald Islands",
    phone: "672",
  },
  { code: "HN", label: "Honduras", phone: "504" },
  { code: "HR", label: "Croatia", phone: "385" },
  { code: "HT", label: "Haiti", phone: "509" },
  { code: "HU", label: "Hungary", phone: "36" },
  { code: "ID", label: "Indonesia", phone: "62" },
  { code: "IE", label: "Ireland", phone: "353" },
  { code: "IL", label: "Israel", phone: "972" },
  { code: "IM", label: "Isle of Man", phone: "44" },
  { code: "IN", label: "India", phone: "91" },
  {
    code: "IO",
    label: "British Indian Ocean Territory",
    phone: "246",
  },
  { code: "IQ", label: "Iraq", phone: "964" },
  {
    code: "IR",
    label: "Iran, Islamic Republic of",
    phone: "98",
  },
  { code: "IS", label: "Iceland", phone: "354" },
  { code: "IT", label: "Italy", phone: "39" },
  { code: "JE", label: "Jersey", phone: "44" },
  { code: "JM", label: "Jamaica", phone: "1-876" },
  { code: "JO", label: "Jordan", phone: "962" },
  {
    code: "JP",
    label: "Japan",
    phone: "81",
    suggested: true,
  },
  { code: "KE", label: "Kenya", phone: "254" },
  { code: "KG", label: "Kyrgyzstan", phone: "996" },
  { code: "KH", label: "Cambodia", phone: "855" },
  { code: "KI", label: "Kiribati", phone: "686" },
  { code: "KM", label: "Comoros", phone: "269" },
  {
    code: "KN",
    label: "Saint Kitts and Nevis",
    phone: "1-869",
  },
  {
    code: "KP",
    label: "Korea, Democratic People's Republic of",
    phone: "850",
  },
  { code: "KR", label: "Korea, Republic of", phone: "82" },
  { code: "KW", label: "Kuwait", phone: "965" },
  { code: "KY", label: "Cayman Islands", phone: "1-345" },
  { code: "KZ", label: "Kazakhstan", phone: "7" },
  {
    code: "LA",
    label: "Lao People's Democratic Republic",
    phone: "856",
  },
  { code: "LB", label: "Lebanon", phone: "961" },
  { code: "LC", label: "Saint Lucia", phone: "1-758" },
  { code: "LI", label: "Liechtenstein", phone: "423" },
  { code: "LK", label: "Sri Lanka", phone: "94" },
  { code: "LR", label: "Liberia", phone: "231" },
  { code: "LS", label: "Lesotho", phone: "266" },
  { code: "LT", label: "Lithuania", phone: "370" },
  { code: "LU", label: "Luxembourg", phone: "352" },
  { code: "LV", label: "Latvia", phone: "371" },
  { code: "LY", label: "Libya", phone: "218" },
  { code: "MA", label: "Morocco", phone: "212" },
  { code: "MC", label: "Monaco", phone: "377" },
  {
    code: "MD",
    label: "Moldova, Republic of",
    phone: "373",
  },
  { code: "ME", label: "Montenegro", phone: "382" },
  {
    code: "MF",
    label: "Saint Martin (French part)",
    phone: "590",
  },
  { code: "MG", label: "Madagascar", phone: "261" },
  { code: "MH", label: "Marshall Islands", phone: "692" },
  {
    code: "MK",
    label: "Macedonia, the Former Yugoslav Republic of",
    phone: "389",
  },
  { code: "ML", label: "Mali", phone: "223" },
  { code: "MM", label: "Myanmar", phone: "95" },
  { code: "MN", label: "Mongolia", phone: "976" },
  { code: "MO", label: "Macao", phone: "853" },
  {
    code: "MP",
    label: "Northern Mariana Islands",
    phone: "1-670",
  },
  { code: "MQ", label: "Martinique", phone: "596" },
  { code: "MR", label: "Mauritania", phone: "222" },
  { code: "MS", label: "Montserrat", phone: "1-664" },
  { code: "MT", label: "Malta", phone: "356" },
  { code: "MU", label: "Mauritius", phone: "230" },
  { code: "MV", label: "Maldives", phone: "960" },
  { code: "MW", label: "Malawi", phone: "265" },
  { code: "MX", label: "Mexico", phone: "52" },
  { code: "MY", label: "Malaysia", phone: "60" },
  { code: "MZ", label: "Mozambique", phone: "258" },
  { code: "NA", label: "Namibia", phone: "264" },
  { code: "NC", label: "New Caledonia", phone: "687" },
  { code: "NE", label: "Niger", phone: "227" },
  { code: "NF", label: "Norfolk Island", phone: "672" },
  { code: "NG", label: "Nigeria", phone: "234" },
  { code: "NI", label: "Nicaragua", phone: "505" },
  { code: "NL", label: "Netherlands", phone: "31" },
  { code: "NO", label: "Norway", phone: "47" },
  { code: "NP", label: "Nepal", phone: "977" },
  { code: "NR", label: "Nauru", phone: "674" },
  { code: "NU", label: "Niue", phone: "683" },
  { code: "NZ", label: "New Zealand", phone: "64" },
  { code: "OM", label: "Oman", phone: "968" },
  { code: "PA", label: "Panama", phone: "507" },
  { code: "PE", label: "Peru", phone: "51" },
  { code: "PF", label: "French Polynesia", phone: "689" },
  { code: "PG", label: "Papua New Guinea", phone: "675" },
  { code: "PH", label: "Philippines", phone: "63" },
  { code: "PK", label: "Pakistan", phone: "92" },
  { code: "PL", label: "Poland", phone: "48" },
  {
    code: "PM",
    label: "Saint Pierre and Miquelon",
    phone: "508",
  },
  { code: "PN", label: "Pitcairn", phone: "870" },
  { code: "PR", label: "Puerto Rico", phone: "1" },
  {
    code: "PS",
    label: "Palestine, State of",
    phone: "970",
  },
  { code: "PT", label: "Portugal", phone: "351" },
  { code: "PW", label: "Palau", phone: "680" },
  { code: "PY", label: "Paraguay", phone: "595" },
  { code: "QA", label: "Qatar", phone: "974" },
  { code: "RE", label: "Reunion", phone: "262" },
  { code: "RO", label: "Romania", phone: "40" },
  { code: "RS", label: "Serbia", phone: "381" },
  { code: "RU", label: "Russian Federation", phone: "7" },
  { code: "RW", label: "Rwanda", phone: "250" },
  { code: "SA", label: "Saudi Arabia", phone: "966" },
  { code: "SB", label: "Solomon Islands", phone: "677" },
  { code: "SC", label: "Seychelles", phone: "248" },
  { code: "SD", label: "Sudan", phone: "249" },
  { code: "SE", label: "Sweden", phone: "46" },
  { code: "SG", label: "Singapore", phone: "65" },
  { code: "SH", label: "Saint Helena", phone: "290" },
  { code: "SI", label: "Slovenia", phone: "386" },
  {
    code: "SJ",
    label: "Svalbard and Jan Mayen",
    phone: "47",
  },
  { code: "SK", label: "Slovakia", phone: "421" },
  { code: "SL", label: "Sierra Leone", phone: "232" },
  { code: "SM", label: "San Marino", phone: "378" },
  { code: "SN", label: "Senegal", phone: "221" },
  { code: "SO", label: "Somalia", phone: "252" },
  { code: "SR", label: "Suriname", phone: "597" },
  { code: "SS", label: "South Sudan", phone: "211" },
  {
    code: "ST",
    label: "Sao Tome and Principe",
    phone: "239",
  },
  { code: "SV", label: "El Salvador", phone: "503" },
  {
    code: "SX",
    label: "Sint Maarten (Dutch part)",
    phone: "1-721",
  },
  {
    code: "SY",
    label: "Syrian Arab Republic",
    phone: "963",
  },
  { code: "SZ", label: "Swaziland", phone: "268" },
  {
    code: "TC",
    label: "Turks and Caicos Islands",
    phone: "1-649",
  },
  { code: "TD", label: "Chad", phone: "235" },
  {
    code: "TF",
    label: "French Southern Territories",
    phone: "262",
  },
  { code: "TG", label: "Togo", phone: "228" },
  { code: "TH", label: "Thailand", phone: "66" },
  { code: "TJ", label: "Tajikistan", phone: "992" },
  { code: "TK", label: "Tokelau", phone: "690" },
  { code: "TL", label: "Timor-Leste", phone: "670" },
  { code: "TM", label: "Turkmenistan", phone: "993" },
  { code: "TN", label: "Tunisia", phone: "216" },
  { code: "TO", label: "Tonga", phone: "676" },
  { code: "TR", label: "Turkey", phone: "90" },
  {
    code: "TT",
    label: "Trinidad and Tobago",
    phone: "1-868",
  },
  { code: "TV", label: "Tuvalu", phone: "688" },
  {
    code: "TW",
    label: "Taiwan, Republic of China",
    phone: "886",
  },
  {
    code: "TZ",
    label: "United Republic of Tanzania",
    phone: "255",
  },
  { code: "UA", label: "Ukraine", phone: "380" },
  { code: "UG", label: "Uganda", phone: "256" },
  {
    code: "US",
    label: "United States",
    phone: "1",
    suggested: true,
  },
  { code: "UY", label: "Uruguay", phone: "598" },
  { code: "UZ", label: "Uzbekistan", phone: "998" },
  {
    code: "VA",
    label: "Holy See (Vatican City State)",
    phone: "379",
  },
  {
    code: "VC",
    label: "Saint Vincent and the Grenadines",
    phone: "1-784",
  },
  { code: "VE", label: "Venezuela", phone: "58" },
  {
    code: "VG",
    label: "British Virgin Islands",
    phone: "1-284",
  },
  {
    code: "VI",
    label: "US Virgin Islands",
    phone: "1-340",
  },
  { code: "VN", label: "Vietnam", phone: "84" },
  { code: "VU", label: "Vanuatu", phone: "678" },
  { code: "WF", label: "Wallis and Futuna", phone: "681" },
  { code: "WS", label: "Samoa", phone: "685" },
  { code: "XK", label: "Kosovo", phone: "383" },
  { code: "YE", label: "Yemen", phone: "967" },
  { code: "YT", label: "Mayotte", phone: "262" },
  { code: "ZA", label: "South Africa", phone: "27" },
  { code: "ZM", label: "Zambia", phone: "260" },
  { code: "ZW", label: "Zimbabwe", phone: "263" },
]
