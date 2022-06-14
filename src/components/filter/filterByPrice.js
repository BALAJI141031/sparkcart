import "./index.css";
import { useFilter } from "../../contexts/filterContext";

const FilterByPrice = () => {
  const { dispatchFilter,priceFilter } = useFilter();
  return (
    <div>
      <p>Price:$1000---$15000</p>

      <input
        className="filter"
        type="range"
        min="1000"
        max="15000"
        step="100"
        value={priceFilter}
        onChange={(e) => {
          dispatchFilter({
            type: "priceFilter",
            payload: e.target.value,
          });
        }}
      />
    </div>
  );
};

export { FilterByPrice };
