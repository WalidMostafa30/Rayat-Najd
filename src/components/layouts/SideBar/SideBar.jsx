import { FaMap } from "react-icons/fa";
import { GoHomeFill } from "react-icons/go";
import { IoChatbubbles } from "react-icons/io5";
import { MdHomeWork } from "react-icons/md";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <aside
      className="fixed bottom-0 left-0 w-screen flex lg:static lg:w-auto p-4
    flex-row lg:flex-col justify-around lg:justify-start items-center gap-4
    lg:gap-8 shadow-[0_-2px_10px_rgba(0,0,0,0.2)] lg:shadow-none bg-gray-100"
    >
      <Link className="text-3xl hover:text-mainClr transition">
        <GoHomeFill />
      </Link>
      <Link className="text-3xl hover:text-mainClr transition">
        <FaMap />
      </Link>
      <Link className="text-3xl hover:text-mainClr transition">
        <MdHomeWork />
      </Link>
      <Link className="text-3xl hover:text-mainClr transition">
        <IoChatbubbles />
      </Link>
    </aside>
  );
};

export default SideBar;
