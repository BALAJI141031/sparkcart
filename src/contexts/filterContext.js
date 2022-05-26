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
      case "newArrival":
        return { ...filterState, newArrival: filterAction.payload };
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

  const [
    {
      sortBy,
      productsList,
      categoryFilters,
      delivery,
      ratings,
      newArrival,
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
    newArrival: false,
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
    const { categoryFilters, delivery, ratings, priceFilter, newArrival } =
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

    if (newArrival) {
      filteredProducts = filteredProducts.filter((product) =>
        product.newArrival ? true : false
      );
    }

    return filteredProducts;
  };

  const sortedProducts = sortProducts(productsList, sortBy);

  const filteredProducts = applyFilters(sortedProducts, {
    delivery,
    ratings,
    categoryFilters,
    priceFilter,
    newArrival,
  });

  let filteredList = [...filteredProducts];

  return (
    <filterContext.Provider
      value={{
        dispatchFilter,
        filteredList,
        categoryFilters,
        newArrival,
      }}
    >
      {children}
    </filterContext.Provider>
  );
};
const useFilter = () => useContext(filterContext);

export { FilterProvider, useFilter };
