import Loader from "./Loader";

const LoadingPage = () => {
  return (
    <article className="h-screen w-screen flex items-center justify-center bg-gray-100">
      <Loader />
    </article>
  );
};

export default LoadingPage;
