import React, { useState } from "react";
import Container from "./container";

export default function Bookmarks({ bookmarks, handleBookmark }) {
  return (
    <>
      {bookmarks?.length ? (
        <Container courses={bookmarks} handleBookmark={handleBookmark} />
      ) : (
        <div className="h-px bg-green-300 w-full flex justify-center items-center">
          <span>None found</span>
        </div>
      )}
    </>
  );
}
