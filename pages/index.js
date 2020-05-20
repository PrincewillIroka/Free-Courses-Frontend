import Head from "next/head";
import Layout from "../components/head";
import LeftSidebar from "../components/left-sidebar";

function HomePage() {
  return (
    <div>
      <Layout />
      <section className="flex">
        <aside className="w-1/6 h-screen">
          <LeftSidebar />
        </aside>
        <div className="w-5/6 bg-spec h-screen"></div>
        <aside className="w-1/6 h-screen"></aside>
      </section>
    </div>
  );
}

export default HomePage;
