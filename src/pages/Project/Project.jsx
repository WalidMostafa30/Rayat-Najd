import { useParams } from "react-router-dom";
import projectImg from "../../assets/images/project-img.jpg";
import ProjectImgsSlider from "./sections/ProjectImgsSlider/ProjectImgsSlider";
import { IoLocationSharp } from "react-icons/io5";
import { useState } from "react";
import { CiRuler } from "react-icons/ci";
import { TbBuildings } from "react-icons/tb";
import { FcIdea } from "react-icons/fc";
import GoogleMapView from "../../components/layouts/GoogleMapView/GoogleMapView";
import { FaRegFileAlt } from "react-icons/fa";
import { RxTable } from "react-icons/rx";
import Plans from "./sections/Plans";
import FloorPlans from "./sections/FloorPlans";

const Project = () => {
  const { id } = useParams();
  const projectItem = {
    id,
    title: `مشروع رايات نجد ${id}`,
    location: "شرق الرياض، حي النرجس",
    images: Array.from({ length: 10 }, (_, i) => ({
      id: i + 1,
      src: projectImg,
    })),
    details: {
      area: "5023",
      units_type: "سكنية",
      units_number: 120,
      units_area: "190 - 250",
      status: "قيد الإنشاء",
    },
    plans: Array.from({ length: 10 }, (_, i) => ({
      id: i + 1,
      title: `الدور ${i + 1}`,
      src: projectImg,
    })),
    floor_plans: Array.from({ length: 20 }, (_, i) => ({
      id: i + 1,
      title: `شقة نموذج ${i + 1}`,
      src: projectImg,
    })),
    description:
      "مشروع رايات نجد 8 مصمم بأسلوب عصري مميز يوفر لك المزيد من الأمان والرفاهية. يقع المشروع في مكان حيوي شمال الرياض بالقرب من كل المرافق الأساسية والترفيهية، مدارس، مراكز رعاية صحية، شاليهات، مطاعم ومقاهي.",
  };

  const projectDetails = [
    {
      label: "مساحة الأرض",
      icon: <CiRuler />,
      value: projectItem.details.area,
    },
    {
      label: "نوع الوحدات",
      icon: <TbBuildings />,
      value: projectItem.details.units_type,
    },
    {
      label: "عدد الوحدات",
      icon: <TbBuildings />,
      value: projectItem.details.units_number,
    },
    {
      label: "مساحة الوحدات",
      icon: <CiRuler />,
      value: projectItem.details.units_area,
    },
    {
      label: "حالة المشروع",
      icon: <FcIdea />,
      value: projectItem.details.status,
    },
  ];

  const sections = [
    { value: "about", title: "عن المشروع" },
    { value: "details", title: "تفاصيل المشروع" },
    { value: "plans", title: "مخطط الأدوار" },
    { value: "floorPlans", title: "نماذج الشقق" },
  ];

  const [currentSection, setCurrentSection] = useState("about");

  return (
    <section className="grid grid-cols-1 xl:grid-cols-5 gap-8">
      <aside className="xl:col-span-2 space-y-4">
        <h2 className="text-2xl text-black font-bold relative z-10 bg-white xl:pe-4">
          {projectItem.title}
        </h2>
        <p className="text-mainClr text-lg flex gap-1">
          <IoLocationSharp className="text-textClr text-xl mt-1" />
          {projectItem.location}
        </p>

        <ProjectImgsSlider images={projectItem.images} />

        <nav className="flex items-center justify-between gap-2 py-2 border-t border-gray-300">
          {sections.map((section) => (
            <button
              key={section.value}
              onClick={() => setCurrentSection(section.value)}
              className={`${
                currentSection === section.value ? "active" : ""
              } titleLine`}
            >
              {section.title}
            </button>
          ))}
        </nav>

        {currentSection === "details" ? (
          <div className="p-2 border border-gray-300 rounded-lg flex flex-wrap">
            {projectDetails.map((detail, index) => (
              <div
                key={index}
                className="flex-1 min-w-max flex flex-col items-center justify-between gap-1 p-2 text-mainClr"
              >
                <span className="text-xl">{detail.icon}</span>
                <p className="text-xs text-gray-400">{detail.label}</p>
                <p>{detail.value}</p>
              </div>
            ))}
          </div>
        ) : (
          <p>{projectItem.description}</p>
        )}

        <div className="flex items-center gap-4">
          <button className="px-4 py-1 rounded-lg border flex items-center gap-2 cursor-pointer">
            <RxTable size={20} />
            جدول الوحدات
          </button>
          <button className="px-4 py-1 rounded-lg border flex items-center gap-2 cursor-pointer">
            <FaRegFileAlt size={20} />
            بروشور المشروع
          </button>
        </div>
      </aside>

      <div className="xl:col-span-3 border border-gray-300 rounded-2xl overflow-hidden bg-white h-full">
        {(currentSection === "about" || currentSection === "details") && (
          <div className="min-h-[500px] h-full">
            <GoogleMapView />
          </div>
        )}
        {currentSection === "plans" && <Plans data={projectItem.plans} />}
        {currentSection === "floorPlans" && (
          <FloorPlans data={projectItem.floor_plans} />
        )}
      </div>
    </section>
  );
};

export default Project;
