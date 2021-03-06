import { useState, useEffect } from "react";
import Layout from "../components/head";
import LeftSidebar from "../components/left-sidebar";
import SearchBar from "../components/searchbar";
import RightSidebar from "../components/right-sidebar";
import Controls from "../components/controls";
import Container from "../components/container";
import MakeSuggestion from "../components/suggest-a-course";
import Bookmarks from "../components/bookmarks";
import { API_URL } from "../config";
import { searchCourses } from "../services/CourseService";

function HomePage({ API_URL, isFetching, courses, pageNumber, limit }) {
  const tabs = [
    { title: "All Courses", tag: "all_courses" },
    { title: "Bookmarks", tag: "bookmarks" },
    { title: "Suggest a Course", tag: "suggest_course" },
  ];

  const [state, setState] = useState({
    activeTab: { title: "All Courses", tag: "all_courses" },
    bookmarks: [],
    isFetching,
    courses,
    pageNumber,
    limit,
  });

  useEffect(() => {
    handleSetup();
  }, []);

  const handleSetup = () => {
    setState({
      ...state,
      bookmarks: JSON.parse(localStorage?.getItem("bookmarks")) || [],
    });
  };

  const handleBookmark = (course) => {
    let bookmarks = state?.bookmarks;
    const foundIndex = bookmarks?.findIndex((bookmark) => {
      return bookmark._id === course._id;
    });
    if (foundIndex === -1) {
      bookmarks.push(course);
    } else {
      bookmarks.splice(foundIndex, 1);
    }
    localStorage?.setItem("bookmarks", JSON.stringify(bookmarks));
    handleSetState({
      bookmarks,
    });
  };

  const handleSetState = (params) => {
    const obj = {};
    for (const property in params) {
      obj[property] = params[property];
    }
    setState({ ...state, ...obj });
  };

  const handleSearchRequest = async (value) => {
    let { pageNumber, limit } = state;
    handleSetState({ isFetching: true });
    await searchCourses({ API_URL, title: value, pageNumber, limit })
      .then((response) => {
        const courses = response?.payload || [];
        handleSetState({ isFetching: false, courses });
      })
      .catch((error) => {
        console.error(error);
        handleSetState({ isFetching: false, courses: [] });
      });
  };

  return (
    <div>
      <Layout />
      <section className="flex">
        <aside className="w-1/5">
          <LeftSidebar
            tabs={tabs}
            activeTab={state?.activeTab}
            setActiveTab={(tab) => handleSetState({ activeTab: tab })}
          />
        </aside>
        <main className="w-4/5 bg-spec flex-column h-screen overflow-hidden">
          <SearchBar searchCourses={handleSearchRequest} />
          <Controls activeTab={state?.activeTab} />
          {state.activeTab?.tag === "all_courses" ? (
            <Container
              courses={state?.courses}
              isFetching={state?.isFetching}
              handleBookmark={handleBookmark}
            />
          ) : state.activeTab?.tag === "bookmarks" ? (
            <Bookmarks
              bookmarks={state?.bookmarks}
              handleBookmark={handleBookmark}
              setActiveTab={(tab) => {
                handleSetState({ activeTab: tab });
              }}
            />
          ) : state.activeTab?.tag === "suggest_course" ? (
            <MakeSuggestion />
          ) : null}
        </main>
        <aside className="w-1/5 overflow-y-hidden">
          <RightSidebar API_URL={API_URL} />
        </aside>
      </section>
    </div>
  );
}

export async function getServerSideProps() {
  let pageNumber = 0;
  let limit = 10;
  const API_URL = "http://free-courses-backend.herokuapp.com/api";

  let res = await fetch(
    `${API_URL}/courses?pageNumber=${pageNumber}&limit=${limit}`
  );

  res = await res.json();
  const courses = res?.payload;
  pageNumber = courses?.length ? pageNumber + 1 : pageNumber;

  return {
    props: {
      courses,
      isFetching: false,
      API_URL,
      pageNumber,
      limit,
    },
  };
}

export default HomePage;
