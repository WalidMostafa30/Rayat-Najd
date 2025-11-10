import { useState } from "react";

const FloorPlans = ({ data }) => {
  const [currentPlan, setCurrentPlan] = useState(0);

  return (
    <div className="p-4 flex flex-col items-center justify-center gap-4 h-full">
      <div className="relative w-full h-[250px] md:h-[300px] xl:h-[500px] overflow-hidden rounded-lg">
        <img
          src={data[currentPlan].image}
          alt={`Floor Plan ${currentPlan + 1}`}
          className="w-full h-full object-contain"
        />
      </div>

      <div className="flex flex-wrap items-center justify-center gap-2">
        {data.map((_, index) => (
          <span
            key={index}
            onClick={() => setCurrentPlan(index)}
            className={`w-6 h-6 text-xs flex items-center justify-center rounded-lg cursor-pointer transition ${
              currentPlan === index
                ? "bg-mainClr text-white"
                : "bg-gray-100 hover:bg-gray-200"
            }`}
          >
            {index + 1}
          </span>
        ))}
      </div>
    </div>
  );
};

export default FloorPlans;
