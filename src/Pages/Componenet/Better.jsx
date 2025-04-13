import better from '../../Json/Better.json'; // Adjust the path as needed

const Better = () => {
const baseUrl = import.meta.env.VITE_APP_BASE_URL;

  return (
    <div className="pt-16 md:pt-32 pb-20 md:pb-7  text-center">
      <h1 className="text-4xl font-bold text-teal-600 mb-12">What Makes It Better</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {better.map((feature, index) => (
          <div key={index} className="py-3 px-2 md:p-8 rounded">
            <img 
              src={`${baseUrl}/${feature.image}`}
              alt={feature.title} 
              className="w-full h-20 md:h-40 object-fill rounded-md mb-6"
            />
            <h3 className="text-2xl font-semibold text-teal-600 mb-4">{feature.title}</h3>
            <p className="text-gray-300 text-base">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Better;
