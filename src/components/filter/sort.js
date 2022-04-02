import { useFilter } from "../../contexts/filter-context"
import './index.css'
const SortBy=()=>{
    const {dispatchFilter}=useFilter()
    return <>
    <div className="sort">
    <input type="radio" name="sort"  onChange={() =>
              dispatchFilter({ type: "sort", payload: "high_to_low" })
            } />
    <label className="label">Price-high_to_low</label>
    </div>
    <div className="sort">
    <input type="radio" name="sort" onChange={() =>
              dispatchFilter({ type: "sort", payload: "low_to_high" })
            }/>
    <label className="label">Price-low_to_high</label>
    </div>
    </>
}

export {SortBy}