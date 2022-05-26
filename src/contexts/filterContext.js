import {
  createContext,
  useContext,
  useReducer,
  useEffect,
  useState,
} from "react";

const filterContext = createContext();
const FilterProvider = ({ children }) => {
  const reducerFn = (filterState, filterAction) => {
    console.log(filterAction.type, "fromswitch", filterAction.payload);
    switch (filterAction.type) {
      case "products":
        return { ...filterState, productsList: [...filterAction.payload] };
      case "sort":
        return { ...filterState, sortBy: filterAction.payload };
      case "categoryFilter":
        let updatedCategoryFilters = [...filterState.categoryFilters];
        if (filterAction.status) {
          updatedCategoryFilters.push(filterAction.payload);
        } else {
          const categoryIndex = updatedCategoryFilters.indexOf(
            filterAction.payload
          );
          updatedCategoryFilters.pop(categoryIndex);
        }
        return { ...filterState, categoryFilters: [...updatedCategoryFilters] };
      case "newRecipe":
        return { ...filterState, newRecipe: filterAction.payload };
      case "ratingFilters":
        let updatedRatingsFilter = [...filterState.ratings];
        if (filterAction.status) {
          updatedRatingsFilter.push(filterAction.payload);
        } else {
          const ratingIndex = updatedRatingsFilter.indexOf(
            filterAction.payload
          );
          updatedRatingsFilter.pop(ratingIndex);
        }
        return { ...filterState, ratings: [...updatedRatingsFilter] };
      case "priceFilter":
        return { ...filterState, priceFilter: filterAction.payload };
      default:
        return { ...filterState };
    }
  };

  const [checkNewRecipe, setNewRecipe] = useState(false);

  const [
    {
      sortBy,
      productsList,
      categoryFilters,
      delivery,
      ratings,
      newRecipe,
      priceFilter,
    },
    dispatchFilter,
  ] = useReducer(reducerFn, {
    allProducts: true,
    sortBy: null,
    productsList: [],
    categoryFilters: [],
    delivery: false,
    ratings: [],
    newRecipe: false,
    priceFilter: 1000,
  });

  // filter functions
  const sortProducts = (products, sortBy) => {
    console.log(sortBy, "check1", products);
    if (sortBy === "low_to_high") {
      return products.sort((a, b) => a.price - b.price);
    } else if (sortBy === "high_to_low") {
      return products.sort((a, b) => b.price - a.price);
    } else {
      return products;
    }
  };

  const applyFilters = (sortedProducts, filterObj) => {
    const { categoryFilters, delivery, ratings, newRecipe, priceFilter } =
      filterObj;
    console.log(ratings);
    let filteredProducts = [...sortedProducts];
    if (categoryFilters.length !== 0) {
      filteredProducts = sortedProducts.filter((product) =>
        categoryFilters.includes(product.category)
      );
    }

    if (ratings.length !== 0) {
      filteredProducts = filteredProducts.filter((product) =>
        ratings.includes(product.productRating)
      );
    }

    // price filter
    filteredProducts = filteredProducts.filter(
      (product) => product.price >= priceFilter
    );

    return filteredProducts;
  };

  const sortedProducts = sortProducts(productsList, sortBy);

  const filteredProducts = applyFilters(sortedProducts, {
    delivery,
    ratings,
    newRecipe,
    categoryFilters,
    priceFilter,
  });

  let filteredList = [...filteredProducts];

  return (
    <filterContext.Provider
      value={{ dispatchFilter, filteredList, checkNewRecipe, setNewRecipe }}
    >
      {children}
    </filterContext.Provider>
  );
};;
const useFilter = () => useContext(filterContext);

export { FilterProvider, useFilter };
