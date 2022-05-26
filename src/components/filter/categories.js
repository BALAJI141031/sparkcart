import "./index.css";
import { useFilter } from "../../contexts/filterContext";

const Categories = ({ eachCategory }) => {
  const { category } = eachCategory;
  const { dispatchFilter, categoryFilters } = useFilter();
  return (
    <>
      <div className="flex-H-center-V filter">
        <input
          type="checkbox"
          className="checkbox"
          checked={categoryFilters.includes(category) ? true : false}
          onClick={(e) =>
            e.target.checked
              ? dispatchFilter({
                  type: "categoryFilter",
                  status: true,
                  payload: category,
                })
              : dispatchFilter({
                  type: "categoryFilter",
                  status: false,
                  payload: category,
                })
          }
        />
        <label className="checkboxLabel">{category}</label>
      </div>
    </>
  );
};

export { Categories };
