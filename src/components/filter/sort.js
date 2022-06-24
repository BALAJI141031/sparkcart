import { useFilter } from "../../contexts/filterContext";
import "./index.css";
const SortBy = () => {
  const { dispatchFilter } = useFilter();
  return (
    <>
      <div className="sort">
        <input
          type="radio"
          id="highToLow"
          name="sort"
          onChange={() =>
            dispatchFilter({ type: "sort", payload: "high_to_low" })
          }
        />
        <label className="label cursor-pointer" for="highToLow">Price-high_to_low</label>
      </div>
      <div className="sort">
        <input
          type="radio"
          id="LowToHigh"
          name="sort"
          onChange={() =>
            dispatchFilter({ type: "sort", payload: "low_to_high" })
          }
        />
        <label className="label cursor-pointer" for="LowToHigh">Price-low_to_high</label>
      </div>
    </>
  );
};

export { SortBy };
