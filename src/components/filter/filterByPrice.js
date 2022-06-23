import "./index.css";
import { useFilter } from "../../contexts/filterContext";

const FilterByPrice = () => {
  const { dispatchFilter,priceFilter } = useFilter();
  return (
    <div>
      <p>Price: {'\u20A8'} 100---{'\u20A8'} 1500</p>

      <input
        className="filter"
        type="range"
        min="100"
        max="1500"
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
