const stats = [
  { value: "3+", label: "Years" },
  { value: "3+", label: "Countries" },
  { value: "20+", label: "Professionals" },
  { value: "30+", label: "Projects" },
];

const About = ({ baseUrl }) => {
  return (
    <>
      <div className="flex flex-col md:flex-row gap-10 md:gap-20 mt-10 mb-20 lg:p-20 p-2 items-center">
        {/* Text Section */}
        <div className="w-full md:w-1/2 px-4 md:px-0">
          <h1 className="text-2xl md:text-5xl font-medium leading-tight mb-6 md:mb-10">
            <span className="text-success">Insights</span> About <br /> Our
            Company
          </h1>
          <p className="text-sm 2xl:text-lg font-medium leading-relaxed">
            Syntax Soft Systems is now exporting software to 3+ countries
            including Bangladesh. In Bangladesh, it is working with Bangladeshi
            Govt organizations,  Multinational Companies, Group of Companies,
            Private Companies, and other organizations.<br/> Syntax Soft Systems is
            committed to providing its clients with the highest level of
            service. The company offers a 100% satisfaction guarantee on all
            services, and its team is always available to answer questions and
            provide support. However, Syntax Soft Systems serves clients all
            over the world. Syntax Soft Systems is the perfect choice if you are
            looking for a reliable and experienced IT partner.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-10 mt-8 md:mt-10">
            {stats.map((stat, index) => (
              <div key={index} className="text-start">
                <p className="text-xs md:text-lg">{stat.label}</p>
                <h2 className="text-lg font-bold md:text-2xl text-success">
                  {stat.value}
                </h2>
              </div>
            ))}
          </div>
        </div>

        {/* Image Section */}
        <div className="relative flex justify-center md:block px-4 md:px-0">
          <div className="aspect-[636/748] w-full">
            <img
              className="rounded-[8%] max-w-sm md:max-w-xl h-full object-cover px-3 md:px-0"
              src={`${baseUrl}/images/About us /0.jpg`}
              alt="about3.jpg"
            />
          </div>
          <img
            className="object-cover rounded-[20%] w-[150px] h-[150px] md:w-[200px] md:h-[240px] absolute -bottom-20 left-10 md:-bottom-10 md:-left-10 border-black  border-r-[10px] border-t-[10px] -mt-10 border-l-[10px] md:border-l-[10px]"
            src={`${baseUrl}/images/About us /00.jpg`}
            alt="about1.jpg"
          />
        </div>
      </div>
    </>
  );
};

export default About;
