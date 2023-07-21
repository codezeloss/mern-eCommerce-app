import gridIcon01 from "../../assets/icons/gr.svg"
import gridIcon02 from "../../assets/icons/gr2.svg"
import gridIcon03 from "../../assets/icons/gr3.svg"
import gridIcon04 from "../../assets/icons/gr4.svg"
import { useState } from "react"

interface Props {
  grid: number
  setGrid: any
  sort: string
  setSort: any
}

function TopFilters({ grid, setGrid, sort, setSort }: Props) {
  return (
    <div className="w-full bg-white rounded-md shadow-sm flex items-center justify-between p-3">
      <div className="flex items-center gap-3">
        <p className="text-sm font-semibold">Sort By:</p>
        <select
          className="w-[190px] text-sm text-gray p-2 bg-white border-[1px] rounded"
          name="sort-products"
          onChange={setSort}
        >
          <option value="none" className="p-2 mb-2">
            select
          </option>
          <option value="title" className="p-2 mb-2 font-semibold">
            Alphabetically, A-Z
          </option>
          <option value="-title" className="p-2 mb-2 font-semibold">
            Alphabetically, Z-A
          </option>
          <option value="price" className="p-2 mb-2 font-semibold">
            Price, low to high
          </option>
          <option value="-price" className="p-2 mb-2 font-semibold">
            Price, high to low
          </option>
          <option value="createdAt" className="p-2 mb-2 font-semibold">
            Date, old to new
          </option>
          <option value="-createdAt" className="p-2 mb-2 font-semibold">
            Date, new to old
          </option>
        </select>
      </div>

      <div className="flex items-center gap-3">
        <p className="text-xs text-gray/[.5]">21 products</p>
        <div className="flex items-center gap-1">
          <button
            className={`p-2 rounded-md ${
              grid === 4 ? "bg-gray/[.4]" : "bg-gray/[.1]"
            }`}
            type="button"
            onClick={() => setGrid(4)}
          >
            <img className="w-3 h-3" src={gridIcon04} alt="Grid 4" />
          </button>
          <button
            className={`p-2 rounded-md ${
              grid === 3 ? "bg-gray/[.4]" : "bg-gray/[.1]"
            }`}
            type="button"
            onClick={() => setGrid(3)}
          >
            <img className="w-3 h-3" src={gridIcon03} alt="Grid 3" />
          </button>
          <button
            className={`p-2 rounded-md ${
              grid === 2 ? "bg-gray/[.4]" : "bg-gray/[.1]"
            }`}
            type="button"
            onClick={() => setGrid(2)}
          >
            <img className="w-3 h-3" src={gridIcon02} alt="Grid 2" />
          </button>
          <button
            className={`p-2 rounded-md ${
              grid === 1 ? "bg-gray/[.4]" : "bg-gray/[.1]"
            }`}
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
