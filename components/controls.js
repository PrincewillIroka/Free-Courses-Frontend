import React, { useState } from "react";

import AscendingSortIcon from "mdi-react/SortAlphabeticalAscendingIcon";
import DescendingSortIcon from "mdi-react/SortAlphabeticalDescendingIcon";


export default function Controls() {
  const [sortedBy, setSorted] = useState("ascending");
  return (
    <section className="pl-6 pr-8 mb-8 flex items-center justify-between bg-gray-300 h-8">
      <div className="font-bold">
        <span>Courses</span>
        <span className="mx-2">/</span>
        <span>New</span>
      </div>
      {sortedBy === "ascending" ? (
        <AscendingSortIcon className="sort-icon" onClick={() => setSorted('descending')}/>
      ) : (
        <DescendingSortIcon className="sort-icon" onClick={() => setSorted('ascending')}/>
      )}
    </section>
  );
}
