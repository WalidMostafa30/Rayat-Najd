import { useState } from "react";

const Plans = ({ data }) => {
  const [currentPlan, setCurrentPlan] = useState(0);

  return (
    <div className="p-4 flex flex-col items-center justify-center gap-4 h-full">
      <div className="relative w-full aspect-4/3 overflow-hidden rounded-lg">
        <img
          src={data[currentPlan].src}
          alt={`Floor Plan ${currentPlan + 1}`}
          className="absolute inset-0 w-full h-full object-contain"
        />
      </div>

      <div className="flex flex-wrap items-center justify-center gap-2">
        {data.map((plan, index) => (
          <span
            key={index}
            onClick={() => setCurrentPlan(index)}
            className={`titleLine ${
              currentPlan === index
                ? "active"
                : ""
            }`}
          >
            {plan.title}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Plans;
