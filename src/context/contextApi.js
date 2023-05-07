import React, { createContext, useState, useEffect } from "react";

import { fetchDataFromApi } from "../utils/api";

export const Context = createContext();

export const AppContext = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [searchResults, setsearchResults] = useState(false);
  const [selectCategory, setselectCategory] = useState("New");
  const [mobileView, setmobileView] = useState(false);

  useEffect(() => {
    fetchSelectedCategoryData(selectCategory);
  }, [selectCategory]);

  const fetchSelectedCategoryData = (query) => {
    setLoading(true);
    fetchDataFromApi(`search/?q=${query}`).then(({ contents }) => {
      // console.log(contents);
      setsearchResults(contents);
      setLoading(false);
    });
  };

  return (
    <Context.Provider
      value={{
        loading,
        setLoading,
        searchResults,
        setsearchResults,
        selectCategory,
        setselectCategory,
        mobileView,
        setmobileView,
      }}
    >
      {children}
    </Context.Provider>
  );
};
