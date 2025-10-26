import Loader from "./Loader";

const LoadingSection = () => {
  return (
    <article className="h-[400px] flex items-center justify-center bg-gray-100">
      <Loader />
    </article>
  );
};

export default LoadingSection;
