import "./index.css";
import { useFilter } from "../../contexts/filterContext";

const Categories = () => {
  const { dispatchFilter, checkNewRecipe, setNewRecipe } = useFilter();
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
          <label className="checkboxLabel">NCERT</label>
        </div>
        <p>(45)</p>
      </div>
      <div className="flex-H-space-bw filter">
        <div className="flex-H-center-V">
          <input
            type="checkbox"
            className="checkbox"
            checked={checkNewRecipe}
            onClick={(e) => {
              let checkboxStatus = e.target.checked;
              if (checkNewRecipe) {
                dispatchFilter({ type: "newRecipe", payload: false });
                setNewRecipe(false);
              } else {
                dispatchFilter({ type: "newRecipe", payload: true });
                setNewRecipe(true);
              }
            }}
          />
          <label className="checkboxLabel">Indian Polity</label>
        </div>
        <p>(5)</p>
      </div>
      {/* testing phase */}
      <div className="flex-H-space-bw filter">
        <div className="flex-H-center-V">
          <input
            type="checkbox"
            className="checkbox"
            checked={checkNewRecipe}
            onClick={(e) => {
              let checkboxStatus = e.target.checked;
              if (checkNewRecipe) {
                dispatchFilter({ type: "newRecipe", payload: false });
                setNewRecipe(false);
              } else {
                dispatchFilter({ type: "newRecipe", payload: true });
                setNewRecipe(true);
              }
            }}
          />
          <label className="checkboxLabel">World Geography</label>
        </div>
        <p>(5)</p>
      </div>
      <div className="flex-H-space-bw filter">
        <div className="flex-H-center-V">
          <input
            type="checkbox"
            className="checkbox"
            checked={checkNewRecipe}
            onClick={(e) => {
              let checkboxStatus = e.target.checked;
              if (checkNewRecipe) {
                dispatchFilter({ type: "newRecipe", payload: false });
                setNewRecipe(false);
              } else {
                dispatchFilter({ type: "newRecipe", payload: true });
                setNewRecipe(true);
              }
            }}
          />
          <label className="checkboxLabel">IR</label>
        </div>
        <p>(5)</p>
      </div>
      <div className="flex-H-space-bw filter">
        <div className="flex-H-center-V">
          <input
            type="checkbox"
            className="checkbox"
            checked={checkNewRecipe}
            onClick={(e) => {
              let checkboxStatus = e.target.checked;
              if (checkNewRecipe) {
                dispatchFilter({ type: "newRecipe", payload: false });
                setNewRecipe(false);
              } else {
                dispatchFilter({ type: "newRecipe", payload: true });
                setNewRecipe(true);
              }
            }}
          />
          <label className="checkboxLabel">Art&Culture</label>
        </div>
        <p>(5)</p>
      </div>
      <div className="flex-H-space-bw filter">
        <div className="flex-H-center-V">
          <input
            type="checkbox"
            className="checkbox"
            checked={checkNewRecipe}
            onClick={(e) => {
              let checkboxStatus = e.target.checked;
              if (checkNewRecipe) {
                dispatchFilter({ type: "newRecipe", payload: false });
                setNewRecipe(false);
              } else {
                dispatchFilter({ type: "newRecipe", payload: true });
                setNewRecipe(true);
              }
            }}
          />
          <label className="checkboxLabel">Economy</label>
        </div>
        <p>(5)</p>
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
          <label className="checkboxLabel">fastDelivery</label>
        </div>
        <p>(25)</p>
      </div>
    </>
  );
};

export { Categories };
