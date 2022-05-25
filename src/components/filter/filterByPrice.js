import "./index.css";
import { Button } from "../index";

const FilterByPrice = () => {
  const sortByPrice = (e) => {};
  return (
    <div>
      <p>Price:$10---$50</p>
      <input
        type="range"
        min="10"
        max="250"
        //   value="50"
        class="slider"
        id="myRange"
        onInput={sortByPrice}
        className="filter"
      />
    </div>
  );
};

export { FilterByPrice };
