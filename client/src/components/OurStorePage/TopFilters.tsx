import gridIcon01 from "../../../public/images/gr.svg"
import gridIcon02 from "../../../public/images/gr2.svg"
import gridIcon03 from "../../../public/images/gr3.svg"
import gridIcon04 from "../../../public/images/gr4.svg"

interface Props {
  grid: number
  setGrid: any
}

function TopFilters({ grid, setGrid }: Props) {
  return (
    <div className="w-full bg-white rounded-md shadow-sm flex items-center justify-between p-3">
      <div className="flex items-center gap-3">
        <p className="text-sm font-semibold">Sort By:</p>
        <select
          className="w-[160px] text-xs text-gray/[.7] p-2 bg-gray/[.1] border-0"
          name=""
        >
          <option value="" className="p-2 mb-2">
            Best Selling
          </option>
          <option value="" className="p-2 mb-2">
            Best Selling
          </option>
          <option value="" className="p-2 mb-2">
            Best Selling
          </option>
          <option value="" className="p-2 mb-2">
            Best Selling
          </option>
        </select>
      </div>

      <div className="flex items-center gap-3">
        <p className="text-xs text-gray/[.5]">21 products</p>
        <div className="flex items-center gap-1">
          <button
            className="p-2 bg-gray/[.1] rounded-md"
            type="button"
            onClick={() => setGrid(4)}
          >
            <img className="w-3 h-3" src={gridIcon04} alt="Grid 4" />
          </button>
          <button
            className="p-2 bg-gray/[.1] rounded-md"
            type="button"
            onClick={() => setGrid(3)}
          >
            <img className="w-3 h-3" src={gridIcon03} alt="Grid 3" />
          </button>
          <button
            className="p-2 bg-gray/[.1] rounded-md"
            type="button"
            onClick={() => setGrid(2)}
          >
            <img className="w-3 h-3" src={gridIcon02} alt="Grid 2" />
          </button>
          <button
            className="p-2 bg-gray/[.1] rounded-md"
            type="button"
            onClick={() => setGrid(1)}
          >
            <img className="w-3 h-3" src={gridIcon01} alt="Grid 1" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default TopFilters
