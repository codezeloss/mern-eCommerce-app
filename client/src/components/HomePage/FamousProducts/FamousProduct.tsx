import laptop from "../../../assets/images/tab3.jpg"

function FamousProduct() {
  return (
    <div className="bg-white rounded-md shadow-sm w-full px-6 py-8">
      <p className="uppercase text-gray/[.6] text-xs mb-2">Big Screen</p>
      <h2 className="text-2xl mb-2">Smart Watch Series 7</h2>
      <p className="text-sm text-gray font-normal mb-6">
        From $399 or $16.62/mo. for 24 mo.*
      </p>
      <div className="w-full h-fit">
        <img className="w-full h-fit" src={laptop} alt="FamousProduct" />
      </div>
    </div>
  )
}

export default FamousProduct
