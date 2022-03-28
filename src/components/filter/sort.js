import { useFilter } from "../../contexts/filter-context"
import './filter.css'
const SortBy=()=>{
    const {dispatchFilter}=useFilter()
    return <>
    <div className="sort">
    <input type="radio" name="sort"  onChange={() =>
              dispatchFilter({ type: "sort", payload: "high_to_low" })
            } />
    <label>Price-low_to_high</label>
    </div>
    <div className="sort">
    <input type="radio" name="sort" onChange={() =>
              dispatchFilter({ type: "sort", payload: "low_to_high" })
            }/>
    <label>Price-low_to_high</label>
    </div>
    </>
}

export {SortBy}