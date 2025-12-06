import { useState } from "react";
import axios from "axios";

const ContactForm = () => {
  const [values, setValues] = useState({
    first_name: "",
    last_name: "",
    phone: "",
    unit_type: "apartment",
    suggested_budget: "",
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ type: "", message: "" }); // success or error
  const [loading, setLoading] = useState(false);

  const BASE_URL = import.meta.env.VITE_BASE_URL;

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};

    if (!values.first_name.trim()) newErrors.first_name = "هذا الحقل مطلوب";
    if (!values.last_name.trim()) newErrors.last_name = "هذا الحقل مطلوب";
    if (!values.phone.trim()) newErrors.phone = "هذا الحقل مطلوب";
    if (!values.suggested_budget.trim())
      newErrors.suggested_budget = "هذا الحقل مطلوب";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    setStatus({ type: "", message: "" });

    try {
      const res = await axios.post(`${BASE_URL}/contact-request`, values);

      setStatus({
        type: "success",
        message: "تم إرسال الطلب بنجاح. سنتواصل معك قريبًا.",
      });

      // تفريغ الفورم
      setValues({
        first_name: "",
        last_name: "",
        phone: "",
        unit_type: "apartment",
        suggested_budget: "",
      });
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error.response?.data?.message ||
          "حدث خطأ أثناء إرسال الطلب، حاول مرة أخرى.",
      });
    }

    setLoading(false);
  };

  return (
    <div className="bg-white p-6 border border-gray-200 rounded-2xl shadow-lg w-full max-w-md mx-auto">
      <h3 className="text-2xl font-bold text-black mb-6">للتواصل والاستعلام</h3>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* الاسم الأول + الأخير */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-3">
          <div>
            <label className="text-black font-semibold">الاسم الأول</label>
            <input
              type="text"
              name="first_name"
              placeholder="الاسم الأول"
              className="w-full bg-gray-100 border border-gray-300 rounded p-2 mt-1 text-black"
              value={values.first_name}
              onChange={handleChange}
            />
            {errors.first_name && (
              <p className="text-red-500 text-xs mt-1">{errors.first_name}</p>
            )}
          </div>

          <div>
            <label className="text-black font-semibold">الاسم الأخير</label>
            <input
              type="text"
              name="last_name"
              placeholder="الاسم الأخير"
              className="w-full bg-gray-100 border border-gray-300 rounded p-2 mt-1 text-black"
              value={values.last_name}
              onChange={handleChange}
            />
            {errors.last_name && (
              <p className="text-red-500 text-xs mt-1">{errors.last_name}</p>
            )}
          </div>
        </div>

        {/* رقم الواتساب */}
        <div>
          <label className="text-black font-semibold">رقم الواتساب</label>
          <input
            type="text"
            name="phone"
            placeholder="05xxxxxxxx"
            className="w-full bg-gray-100 border border-gray-300 rounded p-2 mt-1 text-black"
            value={values.phone}
            onChange={handleChange}
          />
          {errors.phone && (
            <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
          )}
        </div>

        {/* نوع الوحدة السكنية */}
        <div>
          <label className="text-black font-semibold mb-2 block">
            نوع الوحدة السكنية
          </label>

          <div className="flex items-center gap-4">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="unit_type"
                value="apartment"
                checked={values.unit_type === "apartment"}
                onChange={handleChange}
              />
              <span>شقق سكنية</span>
            </label>

            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="unit_type"
                value="full_floor"
                checked={values.unit_type === "full_floor"}
                onChange={handleChange}
              />
              <span>دور كامل</span>
            </label>
          </div>
        </div>

        {/* الميزانية */}
        <div>
          <label className="text-black font-semibold">الميزانية المقترحة</label>
          <input
            type="text"
            name="suggested_budget"
            placeholder="مثال: 1,500,000"
            className="w-full bg-gray-100 border border-gray-300 rounded p-2 mt-1 text-black"
            value={values.suggested_budget}
            onChange={handleChange}
          />
          {errors.suggested_budget && (
            <p className="text-red-500 text-xs mt-1">
              {errors.suggested_budget}
            </p>
          )}
        </div>

        {/* زر الإرسال */}
        <button
          type="submit"
          className="mainBtn w-full py-2 mt-2"
          disabled={loading}
        >
          {loading ? "جارٍ الإرسال..." : "إرسال الطلب"}
        </button>
      </form>

      {/* رسائل النجاح / الخطأ */}
      {status.message && (
        <p
          className={`mt-4 text-center p-3 rounded-lg ${
            status.type === "success"
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {status.message}
        </p>
      )}
    </div>
  );
};

export default ContactForm;
