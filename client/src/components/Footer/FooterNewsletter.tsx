import newsletter from "../../assets/icons/newspaper-icon.svg"

function FooterNewsletter() {
  return (
    <div className="bg-secondary py-5 border-b-[1px] border-b-white/[.2]">
      <div className="container flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img className="w-8 h-8" src={newsletter} alt="Newsletter" />
          <h1 className="text-2xl text-white">Sign Up for Newsletter</h1>
        </div>

        <div className="w-full max-w-[500px] flex items-center h-6">
          <input
            className="w-full h-full text-xs px-4 py-4 rounded-l-md outline-none text-black"
            id="search-product"
            name="search-product"
            type="text"
            placeholder="Your Email Address"
          />
          <button className="h-full flex items-center justify-center px-3 py-4 rounded-r-md text-xs border-white/[.4] border border-[0.5px] border-l-0">
            <p>Subscribe</p>
          </button>
        </div>
      </div>
    </div>
  )
}

export default FooterNewsletter
