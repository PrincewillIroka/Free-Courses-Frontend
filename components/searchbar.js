import React, { useState, useEffect } from "react";

import SearchIcon from "mdi-react/SearchIcon";

export default function SearchBar() {
  return (
    <section className="flex items-center bg-white w-2/3 mt-6 ml-6 mr-16 mb-10 pl-4 pr-4 h-10 rounded-full shadow-md">
      <SearchIcon color="#ccc"/>
      <input
        type="text"
        placeholder="Search here to find free technical courses..."
        className="w-full py-1 px-2"
      />
    </section>
  );
}
