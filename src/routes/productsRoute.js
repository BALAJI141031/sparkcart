// import {useFilter} from '../contexts/filter-context'
import { useEffect, Fragment } from "react";
import axios from "axios";
import { useFilter } from "../contexts/filterContext";

import {
  Categories,
  Rating,
  ProductCard,
  SortBy,
  FilterByPrice,
  Navbar,
  SideNavbar,
  Footer,
} from "../components";

const Products = () => {
  const { dispatchFilter, filteredList } = useFilter();
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
    </div>
  );
};
export { Products };
