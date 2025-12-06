const Details = ({ projectItem }) => {
  return (
    <div className="p-1 border border-gray-300 rounded-lg flex flex-wrap">
      {projectItem?.project_details.map((detail, index) => (
        <div
          key={index}
          className="flex-1 min-w-max flex flex-col items-center gap-1 p-1 text-mainClr"
        >
          <img
            src={detail.icon}
            alt={detail.label}
            className="w-6 h-6 xl:w-8 xl:h-8 object-contain"
          />
          <p className="text-[10px] xl:text-sm text-gray-400">{detail.title}</p>
          <p className="text-[10px] xl:text-sm">{detail.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Details;
