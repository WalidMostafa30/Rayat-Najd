import { useMemo, useState } from "react";
import GoogleMapView from "../../components/layouts/GoogleMapView/GoogleMapView";

const ProjectsMap = ({ projects = [] }) => {
  const [filter, setFilter] = useState("all");

  const filteredProjects = useMemo(() => {
    if (!projects) return [];
    if (filter === "completed")
      return projects.filter((p) => p.classification === "completed");
    if (filter === "under_construction")
      return projects.filter((p) => p.classification === "under_construction");
    return projects;
  }, [filter, projects]);

  return (
    <section className="flex flex-col h-full overflow-hidden">
      {/* 🔹 العنوان والفلاتر */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-2 relative mb-4">
        <h1 className="text-xl text-black font-bold relative z-10 bg-white md:pe-4">
          خارطة مشاريع رايات نجد
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

      {/* 🔹 الخريطة تاخد المساحة الباقية */}
      <div className="flex-1 overflow-hidden rounded-xl">
        <GoogleMapView projects={filteredProjects} />
      </div>
    </section>
  );
};

export default ProjectsMap;
