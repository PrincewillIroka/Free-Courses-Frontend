import Layout from "../components/head";
import LeftSidebar from "../components/left-sidebar";
import SearchBar from "../components/searchbar";
import RightSidebar from "../components/right-sidebar";
import Controls from "../components/controls";
import Container from "../components/container";

function HomePage() {
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
          <Container/>
        </main>
        <aside className="w-1/5">
          <RightSidebar />
        </aside>
      </section>
    </div>
  );
}

export default HomePage;
