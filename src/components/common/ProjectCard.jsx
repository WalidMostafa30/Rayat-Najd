import { IoLocationSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const ProjectCard = ({ project , map}) => {
  return (
    <div
      className={`${
        map ? "":"border"
      } border-gray-200 p-4 rounded-2xl flex flex-col items-center text-center gap-4`}
    >
      <div className="w-full h-[250px] rounded-xl overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
      </div>

      <h2 className="text-xl text-black font-bold line-clamp-1">
        {project.title}
      </h2>

      <p className="line-clamp-2 text-mainClr text-sm flex justify-center gap-1">
        <IoLocationSharp className="text-textClr text-lg" />
        {project.location}
      </p>

      <Link to={`project/${project.id}`} className="mainBtn">
        المزيد من التفاصيل
      </Link>
    </div>
  );
};

export default ProjectCard;
