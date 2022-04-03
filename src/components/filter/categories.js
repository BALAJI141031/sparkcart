import "./index.css";
import { useFilter } from "../../contexts/filterContext";

const Categories = () => {
  const { dispatchFilter } = useFilter();
  return (
    <>
      <div className="flex-H-space-bw filter">
        <div className="flex-H-center-V">
          <input
            type="checkbox"
            className="checkbox"
            onClick={(e) =>
              e.target.checked
                ? dispatchFilter({ type: "vegetarian", payload: false })
                : dispatchFilter({ type: "vegetarian", payload: true })
            }
          />
          <p className="checkboxLabel">Show Pure Nonveg</p>
        </div>
        <p>(45)</p>
      </div>
      <div className="flex-H-space-bw filter">
        <div className="flex-H-center-V">
          <input
            type="checkbox"
            className="checkbox"
            onClick={(e) =>
              e.target.checked
                ? dispatchFilter({ type: "delivery", payload: true })
                : dispatchFilter({ type: "delivery", payload: false })
            }
          />
          <p className="checkboxLabel">Fast Delivery</p>
        </div>
        <p>(20)</p>
      </div>
      <div className="flex-H-space-bw filter">
        <div className="flex-H-center-V">
          <input
            type="checkbox"
            className="checkbox"
            onClick={(e) =>
              e.target.checked
                ? dispatchFilter({ type: "newRecipe", payload: true })
                : dispatchFilter({ type: "newRecipe", payload: false })
            }
          />
          <p className="checkboxLabel">Trending Recipes</p>
        </div>
        <p>(5)</p>
      </div>
    </>
  );
};

export { Categories };
