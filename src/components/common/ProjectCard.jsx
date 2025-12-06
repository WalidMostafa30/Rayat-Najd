import { IoLocationSharp } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { setProjectId, setPage } from "../../store/mainSlice";

const ProjectCard = ({ project, map }) => {
  const dispatch = useDispatch();
  return (
    <div
      className={`${
        map ? "" : "border"
      } border-gray-200 bg-white p-2 rounded-2xl flex flex-col items-center justify-between text-center`}
    >
      <div className="space-y-2">
        <div className="w-full h-[150px] md:h-[120px] lg:h-[150px]  rounded-xl overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>

        <h2 className="text-black font-bold line-clamp-1">{project.name}</h2>

        <div className="line-clamp-2 text-mainClr text-xs flex justify-center gap-1">
          <IoLocationSharp className="text-textClr text-lg" />
          <p className="flex-1 line-clamp-2"> {project.address}</p>
        </div>
      </div>

      <button
        onClick={() => {
          dispatch(setProjectId(project.id));
          dispatch(setPage("project"));
        }}
        className="mainBtn mt-4"
      >
        المزيد من التفاصيل
      </button>
    </div>
  );
};

export default ProjectCard;
