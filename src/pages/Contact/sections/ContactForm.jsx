import { useState } from "react";

const ContactForm = () => {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    unitType: "شقة سكنية",
    budget: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};

    if (!values.firstName.trim()) newErrors.firstName = "هذا الحقل مطلوب";
    if (!values.lastName.trim()) newErrors.lastName = "هذا الحقل مطلوب";

    if (!values.phone.trim()) {
      newErrors.phone = "هذا الحقل مطلوب";
    } 

    if (!values.budget.trim()) newErrors.budget = "هذا الحقل مطلوب";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    alert("تم إرسال الطلب بنجاح");
    console.log(values);
  };

  return (
    <div className="bg-white p-6 border border-gray-200 rounded-2xl shadow-lg w-full max-w-md mx-auto">
      <h3 className="text-2xl font-bold text-black mb-6">
        للتواصل والاستعلام
      </h3>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* الاسم الأول + الأخير */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-3">
          <div>
            <label className="text-black font-semibold">الاسم الأول</label>
            <input
              type="text"
              name="firstName"
              placeholder="محمد"
              className="w-full bg-gray-100 border border-gray-300 rounded p-2 mt-1 outline-0 ring-0 ring-mainClr focus:ring-2"
              value={values.firstName}
              onChange={handleChange}
            />
            {errors.firstName && (
              <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>
            )}
          </div>

          <div>
            <label className="text-black font-semibold">الاسم الأخير</label>
            <input
              type="text"
              name="lastName"
              placeholder="أحمد"
              className="w-full bg-gray-100 border border-gray-300 rounded p-2 mt-1 outline-0 ring-0 ring-mainClr focus:ring-2"
              value={values.lastName}
              onChange={handleChange}
            />
            {errors.lastName && (
              <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>
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
            className="w-full bg-gray-100 border border-gray-300 rounded p-2 mt-1 outline-0 ring-0 ring-mainClr focus:ring-2"
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
                name="unitType"
                value="شقة سكنية"
                checked={values.unitType === "شقة سكنية"}
                onChange={handleChange}
              />
              <span>شقة سكنية</span>
            </label>

            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="unitType"
                value="دور كامل"
                checked={values.unitType === "دور كامل"}
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
            name="budget"
            placeholder="مثال: 1,500,000"
            className="w-full bg-gray-100 border border-gray-300 rounded p-2 mt-1 outline-0 ring-0 ring-mainClr focus:ring-2"
            value={values.budget}
            onChange={handleChange}
          />
          {errors.budget && (
            <p className="text-red-500 text-xs mt-1">{errors.budget}</p>
          )}
        </div>

        {/* زر الإرسال */}
        <button type="submit" className="mainBtn w-full py-2 mt-2 text-base!">
          إرسال الطلب
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
