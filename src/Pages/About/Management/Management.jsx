import ManagementData from "../../../Json/Management.json";
const baseUrl = import.meta.env.VITE_APP_BASE_URL;
const Management = () => {
  return (
    <>
      <div className="my-20 md:my-60">
        <h1 className="text-5xl md:text-7xl font-extrabold text-center mb-10 md:mb-20 text-success ">
          Our Core Team
        </h1>
        <div className=" md:-ml-44 md:mr-5">
          <div className="flex justify-start items-start">
            <div>
              <img
                src={`${baseUrl}/logo2.png`}
                alt="logo"
                className="w-60 md:w-96 transform -rotate-90 mt-52 ml-20 hidden md:block"
              />
            </div>
            <div className="w-full grid grid-cols-1  md:grid-cols-2 md:gap-x-4">
              {ManagementData.map((team, index) => (
                <div
                  key={index}
                  className="p-4 grid-cols-2 items-start justify-start"
                >
                  <div className="text-4xl font-bold mb-3 text-success ">
                    {team.number}
                  </div>
                  <div className="text-sm text-gray-400">{team.name}</div>
                  <div className="text-xl text-gray-100">Team</div>
                  <hr className="my-4 w-full border-gray-300" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Management;
