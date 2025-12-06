import { IoLocationSharp } from "react-icons/io5";
import { useState } from "react";
import GoogleMapView from "../../components/layouts/GoogleMapView/GoogleMapView";
import { FaRegFileAlt } from "react-icons/fa";
import { RxTable } from "react-icons/rx";
import { useSelector } from "react-redux";
import ProjectImgsSlider from "./sections2/ProjectImgsSlider/ProjectImgsSlider";
import Plans from "./sections2/Plans";
import FloorPlans from "./sections2/FloorPlans";
import Floors from "./sections2/Floors";
import Details from "./sections1/Details";
import FloorsDetails from "./sections1/FloorsDetails";
import LocationDetails from "./sections1/LocationDetails";

const Project = ({ projects }) => {
  const { id } = useSelector((state) => state.main);

  const projectItem = projects.find((project) => project.id === id);

  const sections = [
    { value: "about", title: "عن المشروع" },
    { value: "details", title: "تفاصيل المشروع" },
    // { value: "plans", title: "مخطط الأدوار" },
    // { value: "floorPlans", title: "نماذج الشقق" },
    { value: "location", title: "أقرب المواقع" },
    { value: "floors", title: "الشقق" },
  ];

  const [currentSection, setCurrentSection] = useState("about");
  const [currentFloor, setCurrentFloor] = useState(0);

  return (
    <section className="grid grid-cols-1 lg:grid-cols-5 gap-4">
      <aside className="lg:col-span-2 space-y-2">
        <h2 className="text-xl xl:text-2xl text-black font-bold relative z-10 bg-white lg:pe-4">
          {projectItem?.name}
        </h2>
        <div className="text-mainClr text-sm xl:text-base flex gap-1">
          <IoLocationSharp className="text-textClr mt-1" />
          <p className="flex-1">{projectItem?.address}</p>
        </div>

        <ProjectImgsSlider images={projectItem?.images} />

        <nav className="flex items-center justify-around lg:justify-between gap-2 py-2 border-t border-gray-300">
          {sections.map((section) => (
            <button
              key={section.value}
              onClick={() => setCurrentSection(section.value)}
              className={`${
                currentSection === section.value ? "active" : ""
              } titleLine text-[10px] xl:text-sm`}
            >
              {section.title}
            </button>
          ))}
        </nav>

        {currentSection === "details" ? (
          <Details projectItem={projectItem} />
        ) : currentSection === "about" ? (
          <p className="text-xs xl:text-base">{projectItem.about_text}</p>
        ) : currentSection === "plans" ? (
          <p className="text-xs xl:text-base">
            {projectItem.apartment_models_text}
          </p>
        ) : currentSection === "floorPlans" ? (
          <p className="text-xs xl:text-base">{projectItem.floor_text}</p>
        ) : currentSection === "location" ? (
          <LocationDetails data={projectItem.project_nearest} />
        ) : (
          <FloorsDetails
            data={projectItem.project_apartment_models}
            currentFloor={currentFloor}
            setCurrentFloor={setCurrentFloor}
          />
        )}

        <div className="flex items-center gap-2 mt-4">
          {projectItem.units_table && (
            <a
              href={projectItem.units_table}
              target="_blank"
              className="text-xs xl:text-base px-2 py-1 rounded-lg border flex items-center gap-2 cursor-pointer"
            >
              <RxTable size={16} />
              جدول الوحدات
            </a>
          )}
          {projectItem.project_brochure && (
            <a
              href={projectItem.project_brochure}
              target="_blank"
              className="text-xs xl:text-base px-2 py-1 rounded-lg border flex items-center gap-2 cursor-pointer"
            >
              <FaRegFileAlt size={16} />
              بروشور المشروع
            </a>
          )}
        </div>
      </aside>

      <div className="lg:col-span-3 border border-gray-300 rounded-2xl overflow-hidden bg-white h-full">
        {(currentSection === "about" ||
          currentSection === "location" ||
          currentSection === "details") && (
          <div className="min-h-[500px] h-full">
            <GoogleMapView />
          </div>
        )}
        {currentSection === "plans" && (
          <Plans data={projectItem?.project_apartment_models} />
        )}
        {currentSection === "floorPlans" && (
          <FloorPlans data={projectItem?.project_floors} />
        )}

        {currentSection === "floors" && (
          <Floors data={projectItem?.project_apartment_models[currentFloor]} />
        )}
      </div>
    </section>
  );
};

export default Project;
