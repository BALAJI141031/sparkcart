import "./index.css";

import { useFilter } from "../../contexts/filterContext";

const Arrivals = () => {
  const { dispatchFilter } = useFilter();
  return (
    <div className="flex-H-center-V filter">
      <input
        type="checkbox"
        className="checkbox"
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
