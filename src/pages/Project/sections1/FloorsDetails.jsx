const FloorsDetails = ({ data, currentFloor, setCurrentFloor }) => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2">
      {data.map((item, index) => (
        <span
          key={index}
          onClick={() => setCurrentFloor(index)}
          className={`w-8 h-8 text-sm flex items-center justify-center rounded-lg cursor-pointer transition ${
            currentFloor === index
              ? "bg-mainClr text-white"
              : "bg-gray-100 hover:bg-gray-200"
          }`}
        >
          {item.name}
        </span>
      ))}
    </div>
  );
};
export default FloorsDetails;
