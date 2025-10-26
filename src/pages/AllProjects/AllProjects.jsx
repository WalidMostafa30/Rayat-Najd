import ProjectList from "../../components/common/ProjectList";
import projectImg from "../../assets/images/project-img.jpg";

const products = Array.from({ length: 8 }, (_, i) => {
  return {
    id: i + 1,
    title: `مشروع رايات نجد  ${i + 1}`,
    location: "شرق الرياض، حي النرجس، بالقرب من بندة مول",
    image: projectImg,
  };
});

const AllProjects = () => {
  return (
    <section>
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 relative mb-4">
        <h1 className="text-2xl text-black font-bold relative z-10 bg-white lg:pe-4">
          مشاريع رايات نجد
        </h1>

        <div className="flex flex-wrap items-center lg:gap-4 relative z-10 bg-white lg:ps-4">
          <p className="titleLine">كافة المشاريع</p>
          <p className="titleLine">المشاريع المكتملة</p>
          <p className="titleLine">مشاريع قيد الإنشاء</p>
        </div>

        <span className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-0.5 bg-gray-200 hidden lg:block" />
      </div>

      <ProjectList products={products} />
    </section>
  );
};

export default AllProjects;
