import { useState } from "react";

const Plans = ({ data }) => {
  const [currentPlan, setCurrentPlan] = useState(0);

  return (
    <div className="p-2 flex flex-col items-center justify-center gap-4 h-full">
      <div className="relative w-full h-[250px] md:[300px] overflow-hidden rounded-lg">
        <img
          src={data[currentPlan].image}
          alt={`Floor Plan ${currentPlan + 1}`}
          className="absolute inset-0 w-full max-w-[70%] mx-auto h-full object-contain"
        />
      </div>

      <div className="flex flex-wrap items-center justify-center gap-2">
        {data.map((plan, index) => (
          <span
            key={index}
            onClick={() => setCurrentPlan(index)}
            className={`titleLine ${currentPlan === index ? "active" : ""}`}
          >
            {plan.name}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Plans;
