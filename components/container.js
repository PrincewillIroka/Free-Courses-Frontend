import { useState, useEffect } from "react";
import CardsHeartIcon from "mdi-react/CardsHeartIcon";
import HeartOutlineIcon from "mdi-react/HeartOutlineIcon";
import shortid from "shortid";

function Container({ courses, handleBookmark }) {
  const [state, setState] = useState({
    dummyStars: new Array(5).fill(),
    bookmarks: [],
  });

  useEffect(() => {
    setState({
      bookmarks: JSON.parse(localStorage?.getItem("bookmarks")) || [],
    });
  }, []);

  const fillArray = (num) => {
    return new Array(num).fill();
  };

  const isBookmark = (course) => {
    const isValid = state?.bookmarks?.find((bookmark) => {
      return bookmark._id === course._id;
    });
    return isValid;
  };

  const computeBookmarks = (course) => {
    handleBookmark(course);
    const bookmarks = JSON.parse(localStorage?.getItem("bookmarks")) || [];
    setState({ bookmarks });
  };

  return (
    <section className="px-6 h-container sleek-scrollbar">
      <div className="grid gap-8 row-gap-10 grid-cols-3">
        {courses?.length
          ? courses.map((course, index) => (
              <div key={shortid.generate()} className="h-64 bg-white shadow-lg">
                <img className="h-40 w-full object-cover" src={course.banner} />
                <div className="h-16 w-full px-2 mt-1">
                  <div className="font-bold text-base truncate h-6">
                    {course.title}
                  </div>
                  <div className="text-sm text-gray-600 truncate h-6">
                    {course.description}
                  </div>
                  <div className="flex w-full justify-between h-6">
                    <div className="flex h-6 w-full">
                      {fillArray(course.stars)?.length ? (
                        <>
                          {fillArray(course.stars)?.map((star, index) => (
                            <span
                              key={index}
                              className="fa fa-star checked"
                            ></span>
                          ))}
                          {fillArray(course.stars)?.length < 5
                            ? fillArray(
                                5 - course.stars
                              )?.map((star, index) => (
                                <span key={index} className="fa fa-star"></span>
                              ))
                            : null}
                        </>
                      ) : (
                        state.dummyStars.map((star, index) => (
                          <span key={index} className="fa fa-star"></span>
                        ))
                      )}
                    </div>
                    {isBookmark(course) ? (
                      <CardsHeartIcon
                        className="bookmark"
                        onClick={() => computeBookmarks(course)}
                      />
                    ) : (
                      <HeartOutlineIcon
                        className="bookmark"
                        onClick={() => computeBookmarks(course)}
                      />
                    )}
                  </div>
                  <div className="text-xs">
                    <span className="text-gray-600">Source:</span>{" "}
                    <span className="truncate">{course.source}</span>
                  </div>
                </div>
              </div>
            ))
          : null}
      </div>
    </section>
  );
}

export default Container;
