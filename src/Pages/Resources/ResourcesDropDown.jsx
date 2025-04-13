import resrc from "../../Json/Resource.json";

const ResourcesDropDown = () => {
  return (
    <div className="mx-auto px-4 sm:px-8 md:px-12 mb-10">
      <div className="grid grid-cols-1 gap-5">
        {resrc.map((resource) => (
          <div
            key={resource._id}
            className="bg-gray-800 shadow-lg rounded-xl px-6 sm:px-10 py-5 flex flex-col"
          >
            <div className="flex  sm:flex-row justify-between items-center sm:items-center gap-4">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white">
                {resource.name}
              </h2>
              <img
                src={resource.img}
                alt={resource.name}
                className="w-12 h-12 sm:w-14 sm:h-14 object-contain"
              />
            </div>
            <hr className="my-3 border-gray-600" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResourcesDropDown;
