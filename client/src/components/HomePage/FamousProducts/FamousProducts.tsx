import FamousProduct from "./FamousProduct"

function FamousProducts() {
  return (
    <>
      <div className="container mb-20 grid grid-cols-4 gap-4">
        <FamousProduct />
        <FamousProduct />
        <FamousProduct />
        <FamousProduct />
      </div>
    </>
  )
}

export default FamousProducts
