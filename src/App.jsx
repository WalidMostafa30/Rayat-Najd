import { Outlet } from "react-router-dom";
import Header from "./components/layouts/Header/Header";
import SideBar from "./components/layouts/SideBar/SideBar";

function App() {
  return (
    <main className="container py-4 lg:py-10 min-h-screen flex flex-col">
      <Header />

      <section className="flex-1 flex gap-4">
        <SideBar />

        <article className="flex-1 bg-white rounded-4xl p-6 lg:p-8 shadow-lg border border-gray-200 mb-16 lg:mb-0">
          <Outlet />
        </article>
      </section>
    </main>
  );
}

export default App;
