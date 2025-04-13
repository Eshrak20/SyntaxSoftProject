const Success = ({baseUrl}) => {
  const textContent = [
    {
      position: "absolute -top-[25px] left-[430px] ",
      title: "2008",
      text: `Syntax Soft Systems started its journey by 
      developing powerful and 
      flexible apps, games, and 
      other prominent IT products 
      that created an impact on the 
      software industry.`,
    },
    {
      position: "absolute top-[75px] left-[975px]",
      title: "2014 -International Market",
      text: `We are entering the 
      international market for the 
      first time and strategically 
      adapting our offerings to local 
      cultures while building 
      partnerships. As we establish 
      our presence, we aim for 
      continuous growth and 
      expansion into new countries.`,
    },
    {
      position: "absolute top-[450px] left-[550px]",
      title: "2016 - UNDP Partnership",
      text: `We have proudly partnered with 
      UNDP Bangladesh, joining 
      forces with UNDP Turkey, East 
      Timor, and Colombia. This 
      collaboration highlights our 
      deep commitment to driving 
      sustainable development and
      making a positive impact on 
      communities worldwide.`,
    },
    {
      position: "absolute top-[650px] left-[0px]",
      title: "2020 - Government Projects",
      text: `We started our journey
      with the Bangladesh government
      through Biman Bangladesh Airlines.
      Today, we are proudly
      managing over 37
      government projects.`,
    },
    {
      position: "absolute top-[480px] left-[1150px]",
      title: "2021 - AI and Blockchain",
      text: `We embarked on our journey
      with AI and blockchain
      solutions across various industries.
      Our initial efforts involved
      partnerships with Ministry of Land
      for Smart Bhumipedia using
      Artificial Intelligence.
      Later on we have
      developed Blockchain-based
      distribution management system
      for PKSF.`,
    },
  ];

  return (
    <>
      <div className="relative p-4">
        <div>
          <h1 className="text-4xl md:text-5xl font-medium leading-tight mb-44">
            Our Evolution from
            <br />
            <span className=" text-success">Startup to Global Success</span>
          </h1>
        </div>
        {/* Image and Overlay Container */}
        <div className="relative">
          <img
            src={`${baseUrl}/images/Drem71/success.png`}
            alt=""
            className="w-full"
          />
          {/* Dynamic Content */}
          {textContent.map((item, index) => (
            <p
              key={index}
              className={`${item.position} p-4 text-white text-sm font-medium bg-opacity-50 w-1/4 hidden md:inline`}
            >
              {item.text}
            </p>
          ))}

          {textContent.map((item, index) => (
            <>
              <div className="md:p-4">
                <h1 className=" mb-1 text-success text-xl font-medium bg-opacity-50  md:hidden">
                  {item.title}
                </h1>
                <p
                  key={index}
                  className={`mb-5 text-white text-sm font-medium bg-opacity-50  md:hidden`}
                >
                  {item.text}
                </p>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default Success;
