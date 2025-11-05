import ProjectCard from "./ProjectCard";

const ProjectList = ({ projects = [] }) => {
  return (
    <>
      {projects?.length === 0 ? (
        <div className="flex items-center justify-center p-4 text-mainClr font-bold text-xl">
          لا يوجد مشاريع
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {projects?.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      )}
    </>
  );
};

export default ProjectList;
