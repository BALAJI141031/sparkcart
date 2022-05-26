import "./index.css";

import { useFilter } from "../../contexts/filterContext";

const Arrivals = () => {
  const { dispatchFilter, newArrival } = useFilter();
  return (
    <div className="flex-H-center-V filter">
      <input
        type="checkbox"
        className="checkbox"
        checked={newArrival ? true : false}
        onClick={(e) =>
          e.target.checked
            ? dispatchFilter({
                type: "newArrival",
                payload: true,
              })
            : dispatchFilter({
                type: "newArrival",
                payload: false,
              })
        }
      />
      <label className="checkboxLabel">New Arrivals</label>
    </div>
  );
};

export { Arrivals };
