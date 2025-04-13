const PortFolioCard = ({ baseUrl }) => {
  // Sample portfolio data
  const portfolio = [
    {
      id: 1,
      image: `${baseUrl}/images/Next-gen/Portfolio/img1.png`,
      caption: "Central Police Hospital (CPH), Bangladesh",
    },
    {
      id: 2,
      image: `${baseUrl}/images/Next-gen/Portfolio/img2.png`,
      caption: "Central Disease Investigation Laboratory",
    },
  ];

  return (
    <section className="py-20 px-6 ">
      <h1 className="text-5xl md:text-7xl font-bold text-center text-success mb-10 md:mb-20">
        Projects
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 ">
        {portfolio.map((project) => (
          <div key={project.id} className="rounded-lg p-4 transition-shadow">
            <img
              src={project.image}
              alt={project.caption}
              className="w-full h-auto object-cover rounded-lg mb-4"
            />
            <p className="text-center text-gray-100 font-medium text-2xl mt-10">
              {project.caption}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PortFolioCard;
