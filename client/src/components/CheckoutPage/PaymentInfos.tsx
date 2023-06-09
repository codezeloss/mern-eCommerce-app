import { Link } from "react-router-dom"

import TextField from "@mui/material/TextField"
import Box from "@mui/material/Box"

import infoIcon from "../../../public/icons/info-icon.svg"
import arrowLeft from "../../../public/icons/arrow-left.svg"

function PaymentInfos() {
  return (
    <div>
      {/* PAYMENT */}
      <div>
        <h2 className="text-lg mb-2 text-primary">Payment</h2>
        <p className="text-sm text-gray">
          All transactions are secure and encrypted.
        </p>

        <div className="border-[1px] border-gray/[.1] rounded-md text-sm text-gray/[.8] my-4">
          <div className="flex items-center justify-between p-4">
            <p className="font-bold">Credit card</p>
            <p>B</p>
          </div>
          <div className="bg-gray/[.1] p-4">
            <Box
              component="form"
              sx={{
                "& .MuiTextField-root": { width: "100%", fontSize: 12, my: 1 },
              }}
              noValidate
              autoComplete="off"
            >
              <div className="relative">
                <TextField
                  sx={{ fontSize: 12, backgroundColor: "#ffffff" }}
                  id="outlined-password-input"
                  label="Card number"
                  type="text"
                />
                <img
                  className="absolute right-3 top-6 w-6 h-6"
                  src={infoIcon}
                  alt=""
                />
              </div>
              <TextField
                sx={{ fontSize: 12, backgroundColor: "#ffffff" }}
                id="outlined-password-input"
                label="Cardholder name"
                type="text"
              />
              <div className="grid grid-cols-2 gap-4">
                <TextField
                  sx={{
                    fontSize: 12,
                    width: "100%",
                    backgroundColor: "#ffffff",
                  }}
                  id="outlined-password-input"
                  label="Expiration date (MM/YY)"
                  type="text"
                />
                <div className="relative">
                  <TextField
                    sx={{
                      fontSize: 12,
                      width: "100%",
                      backgroundColor: "#ffffff",
                    }}
                    id="outlined-password-input"
                    label="Security code"
                    type="text"
                  />
                  <img
                    className="absolute right-3 top-6 w-6 h-6"
                    src={infoIcon}
                    alt=""
                  />
                </div>
              </div>
            </Box>
          </div>
        </div>
      </div>

      {/* BILLING ADDRESS */}
      <div>
        <h2 className="text-lg mb-2 text-primary mt-10">Billing address</h2>
        <p className="text-sm text-gray">
          Select the address that matches your card or payment method.
        </p>

        <div className="flex w-full flex-col border-[1px] border-gray/[.1] rounded-md text-sm text-gray/[.8] my-4">
          <div className="flex items-center gap-3 pb-4 border-b border-b-gray/[.1] p-4">
            <input
              className="bg-primary text-primary"
              type="checkbox"
              name=""
              id=""
            />
            <p>Same as shipping address</p>
          </div>

          <div className="flex items-center gap-3 p-4">
            <input
              className="bg-primary text-primary"
              type="checkbox"
              name=""
              id=""
            />
            <p>Use a different billing address</p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between my-4">
        <Link
          to="/cart/checkout/information"
          className="flex items-center gap-2"
        >
          <img
            className="w-4 h-4"
            src={arrowLeft}
            alt="Return to information"
          />
          <p className="text-sm text-gray/[.8]">Return to Information</p>
        </Link>

        <button className="p-4 text-white bg-red-600 rounded-md text-sm">
          Continue
        </button>
      </div>
    </div>
  )
}

export default PaymentInfos
