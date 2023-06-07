import BreadCrumb from "../components/BreadCrumb"
import ComparedProduct from "../components/CompareProductsPage.tsx/ComparedProduct"

function CompareProducts() {
  return (
    <>
      <div>
        <div className="flex items-center justify-center">
          <BreadCrumb path="/compare-products" title="Compare Products" />
        </div>

        <div className="bg-lightGray h-full py-6">
          <div className="container mb-20">
            <div className="flex gap-x-3 gap-y-6 flex-wrap">
              <ComparedProduct />
              <ComparedProduct />
              <ComparedProduct />
              <ComparedProduct />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CompareProducts
