import React, { useState } from "react";
import Container from "./container";

export default function Bookmarks({ bookmarks, handleBookmark }) {

  return (
    <div>
      <Container courses={bookmarks} handleBookmark={handleBookmark} />
    </div>
  );
}
