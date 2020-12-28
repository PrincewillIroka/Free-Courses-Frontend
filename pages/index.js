import Layout from "../components/head";
import LeftSidebar from "../components/left-sidebar";
import SearchBar from "../components/searchbar";
import RightSidebar from "../components/right-sidebar";
import Controls from "../components/controls";
import Container from "../components/container";

function HomePage({ courses }) {
  return (
    <div>
      <Layout />
      <section className="flex">
        <aside className="w-1/5">
          <LeftSidebar />
        </aside>
        <main className="w-4/5 bg-spec flex-column h-screen overflow-hidden">
          <SearchBar />
          <Controls />
          <Container courses={courses} />
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
