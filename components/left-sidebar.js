import React, { useState } from "react";

import CourseIcon from "mdi-react/BookOpenPageVariantIcon";
import BookmarkIcon from "mdi-react/BookmarkMultipleOutlineIcon";

export default function LeftSidebar() {
  const tabs = ["all courses", "bookmarks"];

  const [activeTab, setActiveTab] = useState("all courses");

  return (
    <div className="flex-column px-2">
      <div className="flex items-center justify-center mt-4">
        <img
          src="/static/app_logo.png"
          alt="App Logo"
          className="rounded h-12 w-8 mr-2"
        />
        <h3 className="font-bold text-lg">Free Courses</h3>
      </div>
      <div className="mt-24">
        {tabs.map((tab, index) => {
          return (
            <div
              key={index}
              className={`flex items-center py-2 px-4 mb-4 ${
                activeTab === tab ? "active-tab" : "inactive-tab"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab === "all courses" ? (
                <CourseIcon color="#cf1717" className="mr-4" />
              ) : (
                <BookmarkIcon color="#cf1717" className="mr-4" />
              )}
              <span className="font-medium cursor-default capitalize">
                {tab}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
