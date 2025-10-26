const Loader = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[200px]">
      <div className="flex items-end justify-center gap-1 h-16">
        <div className="w-3 bg-mainClr animate-[grow_1s_ease-in-out_infinite]" />
        <div className="w-3 bg-mainClr animate-[grow_1s_ease-in-out_infinite_0.2s]" />
        <div className="w-3 bg-mainClr animate-[grow_1s_ease-in-out_infinite_0.4s]" />
        <div className="w-3 bg-mainClr animate-[grow_1s_ease-in-out_infinite_0.6s]" />
      </div>
      <h2 className="text-lg lg:text-2xl font-semibold text-mainClr mt-4">
        جاري التحميل ...
      </h2>

      <style>
        {`
          @keyframes grow {
            0%, 100% { height: 20%; opacity: 0.4; }
            50% { height: 100%; opacity: 1; }
          }
        `}
      </style>
    </div>
  );
};

export default Loader;
