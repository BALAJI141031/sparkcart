import { useFilter } from "../../contexts/filterContext";
import "./index.css";

const Rating = (props) => {
  const { dispatchFilter } = useFilter();
  return (
    <div class="static-rating-container filter">
      <div className="flex-H-center-V">
        <input
          type="checkbox"
          className="checkbox "
          onClick={(e) =>
            e.target.checked
              ? dispatchFilter({ type: "rating", payload: true })
              : dispatchFilter({ type: "rating", payload: false })
          }
        />
        <label className="checkboxLabel">
          Above 3 <span class="fa fa-star fa-1x checked"></span>
        </label>
      </div>
    </div>
  );
};

export { Rating };
