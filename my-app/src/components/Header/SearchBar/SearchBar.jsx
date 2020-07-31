import React from "react";
import s from "./SearchBar.module.css";

const SearchBar = () => {
  return (
    <div className={s.searchBar}>
      <form action="">
        <input
          type="text"
          name="search"
          placeholder="Search..."
          title="Click and write text for search."
        />
        <button type="submit" title="Search">
          <i className="la la-search" />
        </button>
      </form>
    </div>
  );
};
export default SearchBar;
