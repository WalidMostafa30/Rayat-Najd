import { useDispatch, useSelector } from "react-redux";
import Header from "./components/layouts/Header/Header";
import SideBar from "./components/layouts/SideBar/SideBar";
import Home from "./pages/Home/Home";
import ProjectsMap from "./pages/ProjectsMap/ProjectsMap";
import Project from "./pages/Project/Project";
import { useEffect } from "react";
import { fetchData, setupNetworkListener } from "./store/dataSlice";
import LoadingSection from "./components/Loading/LoadingSection";

function App() {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.data);
  const { page, id } = useSelector((state) => state.main);

  useEffect(() => {
    // أول تحميل
    dispatch(fetchData());

    // تشغيل مراقب حالة الإنترنت
    setupNetworkListener(dispatch);
  }, [dispatch]);

  const renderPage = () => {
    switch (page) {
      case "home":
        return <Home projects={data} />;
      case "map":
        return <ProjectsMap projects={data} />;
      case "project":
        return id !== null ? (
          <Project projects={data} />
        ) : (
          <Home projects={data} />
        );
      case "chat":
        return <Home projects={data} />;
      default:
        return null;
    }
  };

  return (
    <main className="container py-4 h-[100dvh] flex flex-col overflow-hidden">
      <Header />

      <section className="flex-1 flex gap-4 overflow-hidden pb-10 sm:pb-0">
        <SideBar />

        <article className="flex-1 h-full bg-white rounded-4xl px-2 py-4 lg:px-2 lg:py-6 shadow-lg border border-gray-200">
          <div className="h-full overflow-y-auto px-2">
            {loading ? (
              <LoadingSection />
            ) : error ? (
              <div className="flex items-center justify-center h-full">
                <h2 className="text-mainClr font-bold text-lg">{error}</h2>
              </div>
            ) : (
              renderPage()
            )}
          </div>
        </article>
      </section>
    </main>
  );
}

export default App;
