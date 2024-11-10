import React, { useState } from "react";
import SearchIcon from "mdi-react/SearchIcon";
import { debounce } from "../utils";

export default function SearchBar({ searchCourses }) {
  const handleSearch = (value) => {
    debounce(searchCourses(value), 500);
  };
  return (
    <section className="flex items-center bg-white w-2/3 mt-6 ml-6 mr-16 mb-10 pl-4 pr-4 h-10 rounded-full shadow-md">
      <SearchIcon color="#ccc" />
      <input
        type="text"
        placeholder="Search here to find free technical courses..."
        className="w-full py-1 px-2 focus:outline-none"
        onChange={(e) => handleSearch(e.target.value)}
      />
    </section>
  );
}
