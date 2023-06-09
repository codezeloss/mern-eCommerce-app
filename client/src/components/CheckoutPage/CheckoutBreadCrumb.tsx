interface Props {
  path: string
}

function CheckoutBreadCrumb({ path }: Props) {
  return (
    <div className="flex items-center gap-2 text-xs text-gray/[.7]">
      <p>Cart</p>

      <div
        className={`${
          path === "/cart/checkout/information" ? "text-primary" : ""
        } flex items-center gap-2`}
      >
        <p>/</p>
        <p>Information</p>
      </div>

      <div
        className={`${
          path === "/cart/checkout/shipping" ? "text-primary" : ""
        } flex items-center gap-2`}
      >
        <p>/</p>
        <p>Shipping</p>
      </div>

      <div
        className={`${
          path === "/cart/checkout/shipping" ? "text-primary" : ""
        } flex items-center gap-2`}
      >
        <p>/</p>
        <p>Payment</p>
      </div>
    </div>
  )
}

export default CheckoutBreadCrumb
