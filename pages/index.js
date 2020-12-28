import { useState } from "react";
import Layout from "../components/head";
import LeftSidebar from "../components/left-sidebar";
import SearchBar from "../components/searchbar";
import RightSidebar from "../components/right-sidebar";
import Controls from "../components/controls";
import Container from "../components/container";
import MakeSuggestion from "../components/suggest-a-course";

function HomePage({ courses }) {
  const tabs = [
    { title: "All Courses", tag: "all_courses" },
    { title: "Bookmarks", tag: "bookmarks" },
    { title: "Suggest a Course", tag: "suggest_course" },
  ];

  const [activeTab, setActiveTab] = useState({
    title: "All Courses",
    tag: "all_courses",
  });

  return (
    <div>
      <Layout />
      <section className="flex">
        <aside className="w-1/5">
          <LeftSidebar
            tabs={tabs}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        </aside>
        <main className="w-4/5 bg-spec flex-column h-screen overflow-hidden">
          <SearchBar />
          <Controls activeTab={activeTab} />

          {activeTab.tag === "all_courses" ? (
            <Container courses={courses} />
          ) : activeTab.tag === "bookmarks" ? (
            <Container courses={courses} />
          ) : activeTab.tag === "suggest_course" ? (
            <MakeSuggestion />
          ) : null}
        </main>
        <aside className="w-1/5">
          <RightSidebar />
        </aside>
      </section>
    </div>
  );
}

export async function getStaticProps() {
  let res = await fetch(
    `http://free-courses-backend.herokuapp.com/api/courses?pageNumber=0&limit=10`
  );

  res = await res.json();
  const courses = res?.payload;

  if (!courses) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      courses,
    },
  };
}

export default HomePage;
