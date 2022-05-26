import "./index.css";
import { Button } from "../index";
import { useFilter } from "../../contexts/filterContext";

const FilterByPrice = () => {
  const { dispatchFilter } = useFilter();
  return (
    <div>
      <p>Price:$1000---$15000</p>

      <input
        className="filter"
        type="range"
        min="1000"
        max="15000"
        step="100"
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
