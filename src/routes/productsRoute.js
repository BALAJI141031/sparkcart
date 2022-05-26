// import {useFilter} from '../contexts/filter-context'
import { useEffect } from "react";
import axios from "axios";
import { useFilter } from "../contexts/filterContext";
import { showSnackbar } from "../dryProviders";
import { useSnackbar } from "../customHooks";
import {
  Categories,
  Rating,
  ProductCard,
  SortBy,
  FilterByPrice,
  SideNavbar,
  Arrivals,
} from "../components";
import "./index.css";
const categoryList = [
  { category: "Polity", count: 10 },
  { category: "IR", count: 10 },
  { category: "ArtAndCulture", count: 10 },
  { category: "Economy", count: 10 },
  { category: "Geography", count: 10 },
  { category: "History", count: 10 },
  { category: "NCERT", count: 10 },
];
const ratings = [2, 3, 4];

const Products = () => {
  const { dispatchFilter, filteredList } = useFilter();
  const { snackbar } = useSnackbar();
  useEffect(() => {
    axios.get("/api/products").then((response) => {
      dispatchFilter({ type: "products", payload: response.data.products });
    });
  }, []);
  console.log(filteredList, "empty it iss");
  return (
    <div className="products-section">
      <div className="products">
        <div>
          <div className="flex-H-space-bw filter">
            <p>Filters</p>
            <p className="clear-All">Clear All</p>
          </div>
          <p>Sort By Price</p>
          <SortBy />
          <p>CATEGORIES</p>
          <hr />
          {categoryList.map((eachCategory) => (
            <Categories eachCategory={eachCategory} />
          ))}
          <hr />
          <p>Arrivals</p>
          <Arrivals />
          <p>RATINGS</p>
          <hr />
          {ratings.map((rating) => (
            <Rating rating={rating} />
          ))}
          <p>Filter By Price</p>
          <hr />
          <FilterByPrice />
          <hr />
        </div>
        <div>
          <h2>Products</h2>
          <div className="flex-wrap">
            {filteredList.map((item) => (
              <ProductCard productObj={item} />
            ))}
          </div>
        </div>
      </div>
      <SideNavbar />
      {snackbar.status && showSnackbar(snackbar.payload)}
    </div>
  );
};
export { Products };
