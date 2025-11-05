import { IoLocationSharp } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { setProjectId, setPage } from "../../store/mainSlice";

const MapProjectCard = ({ project = {} }) => {
  const dispatch = useDispatch();
  return (
    <div
      className={`border-gray-200 bg-white p-2 rounded-2xl flex flex-col items-center text-center gap-1`}
    >
      <div className="w-full h-20 rounded-xl overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
      </div>

      <h2 className="text-sm text-black font-bold line-clamp-1">
        {project.name}
      </h2>

      <p className="line-clamp-2 text-mainClr text-xs flex justify-center gap-1">
        <IoLocationSharp className="text-textClr" />
        {project.address}
      </p>

      <button
        onClick={() => {
          dispatch(setProjectId(project.id));
          dispatch(setPage("project"));
        }}
        className="mainBtn py-1! px-2!"
      >
        المزيد من التفاصيل
      </button>
    </div>
  );
};
export default MapProjectCard;
