import { useState, useEffect, useRef } from "react";
import { IoIosSearch } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { setPage, setProjectId } from "../../../store/mainSlice";

const Search = () => {
  const { data } = useSelector((state) => state.data);
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  const popupRef = useRef(null);
  const desktopRef = useRef(null);

  // 🔹 إغلاق البوب أب عند الضغط خارج العنصر في الموبايل
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (popupRef.current && !popupRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    if (isOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  // 🔹 إخفاء قائمة النتائج في الديسكتوب عند الضغط برا السيرش
  useEffect(() => {
    const handleClickOutsideDesktop = (e) => {
      if (desktopRef.current && !desktopRef.current.contains(e.target)) {
        setSearchTerm(""); // مسح البحث = إخفاء القائمة
      }
    };
    document.addEventListener("mousedown", handleClickOutsideDesktop);
    return () =>
      document.removeEventListener("mousedown", handleClickOutsideDesktop);
  }, []);

  // 🔹 فلترة البيانات
  const filteredData = data?.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSelectProject = (projectId) => {
    dispatch(setProjectId(projectId));
    dispatch(setPage("project"));
    setSearchTerm("");
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={desktopRef}>
      {/* --- Desktop Search Bar --- */}
      <div className="w-64 border border-mainClr bg-white rounded-full p-1 hidden sm:flex items-center">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border-none px-2 py-1 flex-1 outline-none text-sm"
        />
        <span className="bg-mainClr text-white w-7 h-7 rounded-full flex items-center justify-center cursor-pointer">
          <IoIosSearch size={20} />
        </span>
      </div>

      {/* ✅ نتائج البحث تظهر تحت السيرش في الشاشات الكبيرة */}
      {searchTerm && filteredData?.length > 0 && (
        <ul className="absolute bg-white border border-gray-200 rounded-lg shadow-md mt-2 w-64 hidden sm:block max-h-56 overflow-y-auto z-50 animate-slideFade">
          {filteredData.map((project) => (
            <li
              key={project.id}
              onClick={() => handleSelectProject(project.id)}
              className="px-3 py-2 hover:bg-gray-100 transition cursor-pointer flex items-center justify-between"
            >
              <p className="text-sm text-black line-clamp-2">{project.name}</p>
              <img
                src={project.image}
                alt={project.name}
                className="w-12 h-12 object-cover rounded-lg"
              />
            </li>
          ))}
        </ul>
      )}

      {/* --- Mobile Search Icon --- */}
      <span
        onClick={() => setIsOpen(true)}
        className="bg-mainClr text-white w-8 h-8 rounded-full flex items-center justify-center cursor-pointer sm:hidden"
      >
        <IoIosSearch size={20} />
      </span>

      {/* --- Popup Overlay (Mobile Search) --- */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-start pt-4 z-[1000]">
          <div
            ref={popupRef}
            className="bg-white w-[90%] max-w-sm rounded-2xl shadow-lg p-4 animate-fadeIn relative"
          >
            {/* Input */}
            <div className="flex items-center border border-mainClr rounded-full p-1">
              <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="border-none px-2 py-1 flex-1 outline-none text-sm"
                autoFocus
              />
              <span className="bg-mainClr text-white w-8 h-8 rounded-full flex items-center justify-center cursor-pointer">
                <IoIosSearch size={20} />
              </span>
            </div>

            {/* Filtered Results */}
            {searchTerm && (
              <ul className="mt-3 max-h-48 overflow-y-auto text-sm animate-slideFade">
                {filteredData.length > 0 ? (
                  filteredData.map((project) => (
                    <li
                      key={project.id}
                      onClick={() => handleSelectProject(project.id)}
                      className="px-3 py-2 hover:bg-gray-100 transition cursor-pointer flex items-center justify-between"
                    >
                      <p className="text-sm text-black line-clamp-2">
                        {project.name}
                      </p>
                      <img
                        src={project.image}
                        alt={project.name}
                        className="w-12 h-12 object-cover rounded-lg"
                      />
                    </li>
                  ))
                ) : (
                  <li className="text-gray-500 text-center py-2">No results</li>
                )}
              </ul>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;
