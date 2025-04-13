import clients from "../../../Json/Client.json";

const Client = () => {
  const baseUrl = import.meta.env.VITE_APP_BASE_URL;

  return (
    <div className="py-10">
      <h2 className="text-4xl font-bold mb-10 text-center text-gray-200">
        Our Clients
      </h2>

      <div className="flex flex-wrap justify-center gap-8 animate-marquee">
        {clients.map((client) => (
          <div
            key={client._id}
            className="w-72 sm:w-64 md:w-56 lg:w-80 h-72 rounded-lg shadow-lg"
          >
            <img
              src={`${baseUrl}/${client.img}`}
              alt={client.name}
              className="w-full h-44 object-fill rounded-t-lg bg-white"
            />
            <hr className="border-gray-300 my-1" />
            <div className="bg-green-700 py-4 md:px-6 text-center flex justify-center items-center rounded-b-lg h-20">
              <h3 className="text-lg text-white font-medium leading-tight tracking-wide">
                {client.name}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Client;
