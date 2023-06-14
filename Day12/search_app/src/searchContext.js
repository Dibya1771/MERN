import React, { createContext, useState } from "react";
const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [search, setSearch] = useState("");
  const updateSearch = (value) => {
    setSearch(value);
  };
  return (
    <SearchContext.Provider value={{ search, updateSearch }}>
      {children}
    </SearchContext.Provider>
  );
};
export default SearchContext;