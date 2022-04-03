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
  Navbar,
  SideNavbar,
} from "../components";

const Products = () => {
  const { dispatchFilter, filteredList } = useFilter();
  const { snackbar } = useSnackbar();
  useEffect(() => {
    axios.get("/api/products").then((response) => {
      dispatchFilter({ type: "products", payload: response.data.products });
    });
  }, []);

  return (
    <div className="products-section">
      <Navbar />
      <div className="products">
        <div>
          <h2>Sort By Price</h2>
          <SortBy />
          <h2>CATEGORIES</h2>
          <hr />
          <Categories />
          <h2>RATINGS</h2>
          <hr />
          <Rating />
          <h2>Filter By Price</h2>
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
