import { useFilter } from "../../contexts/filterContext";
import "./index.css";

const Rating = ({ rating }) => {
  const { dispatchFilter } = useFilter();
  return (
    <div class="static-rating-container filter">
      <div className="flex-H-center-V">
        <input
          type="checkbox"
          className="checkbox "
          onClick={(e) =>
            e.target.checked
              ? dispatchFilter({
                  type: "ratingFilters",
                  payload: rating,
                  status: true,
                })
              : dispatchFilter({
                  type: "ratingFilters",
                  payload: rating,
                  status: false,
                })
          }
        />
        <label className="checkboxLabel">
          {rating} <span class="fa fa-star fa-1x checked"></span>
        </label>
      </div>
    </div>
  );
};

export { Rating };
