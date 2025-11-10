import { FaMap } from "react-icons/fa";
import { GoHomeFill } from "react-icons/go";
import { IoChatbubbles } from "react-icons/io5";
import { MdHomeWork } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { setPage } from "../../../store/mainSlice";

const SideBar = () => {
  const dispatch = useDispatch();
  const { page } = useSelector((state) => state.main);

  const navItems = [
    { slug: "home", icon: <GoHomeFill /> },
    { slug: "map", icon: <FaMap /> },
    { slug: "project", icon: <MdHomeWork /> },
    { slug: "chat", icon: <IoChatbubbles /> },
  ];

  return (
    <aside
      className="fixed z-50 bottom-0 left-0 w-screen flex sm:static sm:w-auto p-2 lg:p-4
    flex-row sm:flex-col justify-around sm:justify-start items-center gap-4
    sm:gap-8 shadow-[0_-2px_10px_rgba(0,0,0,0.2)] sm:shadow-none bg-gray-100"
    >
      {navItems.map((item, index) => (
        <button
          key={index}
          onClick={() => dispatch(setPage(item.slug))}
          className={`text-2xl xl:text-3xl transition cursor-pointer ${
            page === item.slug
              ? "text-mainClr"
              : "text-gray-500 hover:text-mainClr"
          }`}
        >
          {item.icon}
        </button>
      ))}
    </aside>
  );
};

export default SideBar;
