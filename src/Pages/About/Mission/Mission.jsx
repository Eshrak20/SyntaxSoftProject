const Mission = () => {
    const visions = [
      "To provide the most advanced and affordable IT Solutions.",
      "Establish the Foundation That Empowers Clients to Succeed.",
      "Enhance collaboration with innovative technology solutions.",
      "Build lasting partnerships based on trust and transparency.",
      "Deliver tailored solutions to meet the unique needs of each client.",
      "Create a culture of continuous improvement and innovation."
    ];
  
    return (
      <div className=" bg-[#1D232A] text-white rounded-lg shadow-md px-5 md:px-10">
        {/* Section Title */}
        <h1 className="text-3xl md:text-7xl font-extrabold text-start mb-12 text-success ">
          Our Mission
        </h1>
  
        {/* Vision List */}
        <div className="space-y-10">
          {visions.map((vision, index) => (
            <div
              key={index}
              className="flex flex-col space-y-4 transition-transform transform hover:scale-105"
            >
              {/* Vision Text */}
              <p className="text-lg font-medium text-gray-300">
                <span className="text-success font-bold">{`0${index + 1}. `}</span>
                {vision}
              </p>
              {/* Divider */}
              <div className="border-b border-gray-600 w-full"></div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Mission;
  