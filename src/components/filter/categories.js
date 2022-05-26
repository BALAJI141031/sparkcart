import "./index.css";
import { useFilter } from "../../contexts/filterContext";

const Categories = ({ eachCategory }) => {
  const { category } = eachCategory;
  const { dispatchFilter, checkNewRecipe, setNewRecipe } = useFilter();
  return (
    <>
      <div className="flex-H-center-V filter">
        <input
          type="checkbox"
          className="checkbox"
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
