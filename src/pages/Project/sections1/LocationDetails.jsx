const LocationDetails = ({ data }) => {
  return (
    <div>
      {data.map((item) => (
        <div
          key={item.id}
          className="flex gap-1 not-last:mb-1 rounded-md overflow-hidden"
        >
          <div className="w-8 h-8 overflow-hidden bg-gray-100 py-1 px-2">
            <img
              src={item.icon}
              alt={item.name}
              className="w-full h-full object-contain"
            />
          </div>

          <div className="flex items-center justify-between bg-gray-100 py-1 px-2 flex-1">
            <p className="text-mainClr flex-1">{item.name}</p>
            <p className="">{item.label}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LocationDetails;
