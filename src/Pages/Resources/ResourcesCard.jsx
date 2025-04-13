import resrc from "../../Json/Resource.json";

const ResourcesCard = () => {
  
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-8 md:px-12 ">
      {resrc.map((resource) => (
        <div
          key={resource._id}
          className="bg-gray-800 shadow-lg rounded-2xl p-4 w-full flex flex-col items-start text-start"
        >
          <img
            src={resource.img}
            alt={resource.name}
            className="w-14 h-14 object-contain mb-4"
          />
          <h2 className="text-lg font-semibold text-white">
            {resource.name}
          </h2>
          <p className="text-gray-300 mt-2 text-sm">
            {resource.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ResourcesCard;
