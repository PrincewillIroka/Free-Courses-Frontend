import React, { useState } from "react";
import CourseIcon from "mdi-react/BookOpenPageVariantIcon";
import BookmarkIcon from "mdi-react/BookmarkMultipleOutlineIcon";
import HandOkayIcon from "mdi-react/HandOkayIcon";

export default function LeftSidebar({ tabs, activeTab, setActiveTab }) {
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
        {tabs?.map((tab, index) => {
          return (
            <div
              key={index}
              className={`flex items-center py-2 px-4 mb-4 select-none cursor-pointer ${
                activeTab?.tag === tab.tag ? "active-tab" : "inactive-tab"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab.tag === "all_courses" ? (
                <CourseIcon color="#cf1717" className="mr-4" />
              ) : tab.tag === "bookmarks" ? (
                <BookmarkIcon color="#cf1717" className="mr-4" />
              ) : tab.tag === "suggest_course" ? (
                <HandOkayIcon color="#cf1717" className="mr-4" />
              ) : null}
              <span className="font-medium cursor-default capitalize cursor-pointer">
                {tab.title}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
