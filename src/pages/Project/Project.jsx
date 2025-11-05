import ProjectImgsSlider from "./sections/ProjectImgsSlider/ProjectImgsSlider";
import { IoLocationSharp } from "react-icons/io5";
import { useState } from "react";
import GoogleMapView from "../../components/layouts/GoogleMapView/GoogleMapView";
import { FaRegFileAlt } from "react-icons/fa";
import { RxTable } from "react-icons/rx";
import Plans from "./sections/Plans";
import FloorPlans from "./sections/FloorPlans";
import { useSelector } from "react-redux";

const Project = ({ projects }) => {
  const { id } = useSelector((state) => state.main);

  const projectItem = projects.find((project) => project.id === id);

  const sections = [
    { value: "about", title: "عن المشروع" },
    { value: "details", title: "تفاصيل المشروع" },
    { value: "plans", title: "مخطط الأدوار" },
    { value: "floorPlans", title: "نماذج الشقق" },
  ];

  const [currentSection, setCurrentSection] = useState("about");

  return (
    <section className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-6 gap-4">
      <aside className="md:col-span-2 space-y-2">
        <h2 className="text-xl text-black font-bold relative z-10 bg-white lg:pe-4">
          {projectItem?.name}
        </h2>
        <p className="text-mainClr text-sm flex gap-1">
          <IoLocationSharp className="text-textClr mt-1" />
          {projectItem?.address}
        </p>

        <ProjectImgsSlider images={projectItem?.images} />

        <nav className="flex items-center justify-between gap-2 py-2 border-t border-gray-300">
          {sections.map((section) => (
            <button
              key={section.value}
              onClick={() => setCurrentSection(section.value)}
              className={`${
                currentSection === section.value ? "active" : ""
              } titleLine text-[10px]!`}
            >
              {section.title}
            </button>
          ))}
        </nav>

        {currentSection === "details" ? (
          <div className="p-1 border border-gray-300 rounded-lg flex flex-wrap">
            {projectItem?.project_details.map((detail, index) => (
              <div
                key={index}
                className="flex-1 min-w-max flex flex-col items-center justify-between gap-1 p-1 text-mainClr"
              >
                <img src={detail.icon} alt={detail.label} className="w-6 h-6 object-contain" />
                <p className="text-[10px] text-gray-400">{detail.title}</p>
                <p className="text-[10px]">{detail.description}</p>
              </div>
            ))}
          </div>
        ) : currentSection === "about" ? (
          <p className="text-xs">{projectItem.about_text}</p>
        ) : currentSection === "plans" ? (
          <p className="text-xs">{projectItem.apartment_models_text}</p>
        ) : (
          <p className="text-xs">{projectItem.floor_text}</p>
        )}

        <div className="flex items-center gap-2">
          <a
            href={projectItem.units_table}
            target="_blank"
            className="text-xs px-2 py-1 rounded-lg border flex items-center gap-2 cursor-pointer"
          >
            <RxTable size={16} />
            جدول الوحدات
          </a>
          <a
            href={projectItem.project_brochure}
            target="_blank"
            className="text-xs px-2 py-1 rounded-lg border flex items-center gap-2 cursor-pointer"
          >
            <FaRegFileAlt size={16} />
            بروشور المشروع
          </a>
        </div>
      </aside>

      <div className="md:col-span-3 lg:col-span-4 border border-gray-300 rounded-2xl overflow-hidden bg-white h-full">
        {(currentSection === "about" || currentSection === "details") && (
          <div className="min-h-[500px] h-full">
            <GoogleMapView />
          </div>
        )}
        {currentSection === "plans" && (
          <Plans data={projectItem.project_apartment_models} />
        )}
        {currentSection === "floorPlans" && (
          <FloorPlans data={projectItem.project_floors} />
        )}
      </div>
    </section>
  );
};

export default Project;
