import { FaExclamationTriangle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <article className="min-h-screen flex justify-center items-center p-4">
      <div className="flex flex-col items-center gap-4">
        <FaExclamationTriangle className="text-6xl text-yellow-500" />
        <h1 className="text-3xl font-bold">404 - الصفحة غير موجودة</h1>
        <p className="text-center max-w-md">
          عذرًا، الصفحة التي تحاول الوصول إليها غير موجودة. قد تكون قد تم نقلها
          أو حذفها.
        </p>
        <button
          onClick={() => navigate("/", { replace: true })}
          className="px-4 py-2 bg-mainClr text-white rounded-md hover:brightness-90 transition"
        >
          العودة إلى الصفحة الرئيسية
        </button>
      </div>
    </article>
  );
};

export default NotFound;
