import { useState, useMemo } from "react";
import ProjectList from "../../components/common/ProjectList";

const AllProjects = ({ projects = [] }) => {
  const [filter, setFilter] = useState("all");

  // 🧠 فلترة المشاريع حسب النوع
  const filteredProjects = useMemo(() => {
    if (!projects) return [];

    if (filter === "completed") {
      return projects.filter((p) => p.classification === "completed");
    } else if (filter === "under_construction") {
      return projects.filter((p) => p.classification === "under_construction");
    }
    return projects; // all
  }, [filter, projects]);

  return (
    <section>
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-2 relative mb-4">
        <h1 className="text-xl text-black font-bold relative z-10 bg-white md:pe-4">
          مشاريع رايات نجد
        </h1>

        <div className="flex flex-wrap items-center gap-4 relative z-10 bg-white md:ps-4">
          <p
            className={`titleLine ${filter === "all" ? "active" : ""}`}
            onClick={() => setFilter("all")}
          >
            كافة المشاريع
          </p>
          <p
            className={`titleLine ${filter === "completed" ? "active" : ""}`}
            onClick={() => setFilter("completed")}
          >
            المشاريع المكتملة
          </p>
          <p
            className={`titleLine ${
              filter === "under_construction" ? "active" : ""
            }`}
            onClick={() => setFilter("under_construction")}
          >
            مشاريع قيد الإنشاء
          </p>
        </div>

        <span className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-0.5 bg-gray-200 hidden md:block" />
      </div>

      <ProjectList projects={filteredProjects} />
    </section>
  );
};

export default AllProjects;
