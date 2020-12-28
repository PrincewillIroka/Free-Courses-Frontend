import { useEffect, useState } from "react";

function Container({ courses }) {
  const [state, setState] = useState({
    // courses: [],
    dummyStars: new Array(5).fill(),
  });

  // useEffect(() => {
  //   getCourses();
  // }, []);

  // const getCourses = async (id) => {
  //   let res = await fetch(
  //     `http://free-courses-backend.herokuapp.com/api/courses?pageNumber=0&limit=10`
  //   );

  //   res = await res.json();
  //   const courses = res?.payload;
  //   handleSetState({ courses });
  // };

  const handleSetState = (params) => {
    const obj = {};
    for (const property in params) {
      obj[property] = params[property];
    }
    setState({ ...state, ...obj });
  };

  const fillArray = (num) => {
    return new Array(num).fill();
  };

  return (
    <section className="px-6 h-container sleek-scrollbar">
      <div className="grid gap-8 row-gap-10 grid-cols-3">
        {courses?.length
          ? courses.map((course, index) => (
              <div key={index} className="h-64 bg-white shadow-lg">
                <img className="h-40 w-full object-cover" src={course.banner} />
                <div className="h-16 w-full px-2 mt-1">
                  <div className="font-bold text-base truncate h-6">
                    {course.title}
                  </div>
                  <div className="text-sm text-gray-600 truncate h-6">
                    {course.description}
                  </div>
                  <div className="flex w-full justify-between h-6">
                    <div>
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
                    <img src="/assets/cards-heart-outline.svg" />
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
