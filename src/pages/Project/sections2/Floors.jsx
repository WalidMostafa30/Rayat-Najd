const Floors = ({ data }) => {
  return (
    <div className="p-4 flex flex-col items-center justify-center gap-4 h-full">
      <div className="relative w-full h-[250px] md:h-[300px] xl:h-[500px] overflow-hidden rounded-lg">
        <img
          src={data.image}
          alt={`Floor img`}
          className="w-full h-full object-contain"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-2 gap-x-8 w-full">
        {data.details.map((floor) => (
          <div key={floor.id} className="flex gap-2">
            <p className="flex-1 py-2 px-4 rounded-lg bg-gray-100 text-black content-center text-xs xl:text-base">
              {floor.name}
            </p>
            <span className="flex-1 py-2 px-4 rounded-lg bg-mainClr text-white text-center content-center text-xs xl:text-base">
              {floor.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Floors;
