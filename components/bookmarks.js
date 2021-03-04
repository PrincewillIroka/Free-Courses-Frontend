import React, { useState } from "react";
import { useRouter } from "next/router";
import Container from "./container";

export default function Bookmarks({ bookmarks, handleBookmark, setActiveTab }) {
  return (
    <>
      {bookmarks?.length ? (
        <Container courses={bookmarks} handleBookmark={handleBookmark} />
      ) : (
        <div className="h-full w-full flex flex-col items-center pt-16">
          <div className="bg-white shadow-md mb-6">
            <img
              alt="Bookmark Illustration"
              className="h-56 w-56"
              src="/assets/bookmark_illustration.svg"
            />
          </div>
          <button
            className="px-4 py-2 bg-red-150 text-white rounded-full cursor-pointer shadow-md text-sm"
            onClick={() =>
              setActiveTab({ title: "All Courses", tag: "all_courses" })
            }
          >
            Add a Bookmark
          </button>
        </div>
      )}
    </>
  );
}
