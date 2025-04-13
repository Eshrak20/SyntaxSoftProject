import { useParams } from "react-router-dom";
import card from "../../../Json/Services.json";
import MidText from "../../Componenet/MidText";
import TextImage from "../../Componenet/TextImage";
import BigText from "../../Componenet/BigText";
import PurchaseButton from "../../Componenet/PurchaseButton";

const ProvideDetails = () => {
  const baseUrl = import.meta.env.VITE_APP_BASE_URL;

  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
  const { id } = useParams();
  const service = card.find((item) => item.id === parseInt(id));

  if (!service) {
    return (
      <div className="text-center py-20 text-gray-100">
        <h1 className="text-4xl font-bold">Service Not Found</h1>
      </div>
    );
  }

  return (
    <>
      <div className="max-w-full lg:max-w-screen-xl 2xl:max-w-screen-2xl mx-auto px-4 md:px-8 lg:px-12">
        <div className="py-10 md:px-5">
          {/* Banner Section */}
          <div className="bg-[#1D232A]  rounded-xl text-center mt-32">
            <h1 className="text-4xl md:text-8xl text-success font-bold mb-4">
              {service.title}
            </h1>
            <p className="text-base md:text-xl text-gray-300">
              {service.description}
            </p>
            {service.purchase && (
              <div className="">
                <PurchaseButton />
              </div>
            )}
          </div>

          <div>
            <h1 className="text-3xl md:text-7xl font-bold text-gray-200 mb-10  text-center mt-10 md:mt-20">
              What We Offer
            </h1>
            {service.dropDown.map((item, index) => (
              <div
                key={item.id}
                className="collapse collapse-arrow w-full md:w-2/3 mx-auto pb-0"
              >
                <input
                  type="radio"
                  name="accordion"
                  id={`accordion-${index}`}
                />
                <div className="collapse-title text-xl md:text-3xl text-gray-100 font-medium flex items-center">
                  <span className="mr-4 text-success ">0{index + 1}.</span>{" "}
                  {/* Numbering system */}
                  {item.title}
                </div>
                <div className="collapse-content text-xl ml-10 p-0 md:p-4">
                  <p>{item.description}</p>
                </div>
                <hr className="my-4 border-gray-400" /> {/* Horizontal line */}
              </div>
            ))}
          </div>
        </div>
        <div className="md:-mb-28">
          <MidText
            title="How we"
            subtitle="work"
            description="Our full work process"
          />
        </div>
        <TextImage
          title="Consultation & Analysis"
          description={`We begin with a comprehensive assessment of your current IT environment. Our experts dive deep into your existing systems, processes, and business objectives to identify gaps, inefficiencies, and opportunities for growth.`}
          imageUrl={`${baseUrl}/images/work/work1.svg`}
          buttonText="Contact us"
          link="/contacts"
          reverse={true}
        />
        <TextImage
          title="Strategy Development"
          description={`Based on our analysis, we craft a customized IT strategy that aligns with your business goals. This roadmap includes short-term and long-term plans for infrastructure upgrades, software integration, and process optimization to ensure your technology investments deliver maximum ROI.`}
          imageUrl={`${baseUrl}/images/work/work2.svg`}
          buttonText="Contact us"
          link="/contacts"
        />
        <TextImage
          title="Implementation & Integration"
          description={`We guide you through the implementation of new technologies, ensuring seamless integration with your existing systems. Whether it’s cloud migration, network redesign, or software deployment, we manage the process end-to- end to minimize disruptions and maximize results.`}
          imageUrl={`${baseUrl}/images/work/work3.svg`}
          buttonText="Contact us"
          link="/contacts"
          reverse={true}
        />
        <TextImage
          title="Continuous Support & Improvement"
          description={`Technology doesn’t stand still, and neither do we. Post-implementation, we provide ongoing support and optimization services. We monitor your systems, provide updates, and refine your strategy to adapt to evolving business needs and emerging technologies.`}
          imageUrl={`${baseUrl}/images/work/work4.svg`}
          buttonText="Contact us"
          link="/contacts"
        />
        {service.purchase ? (
          <div className="mb-5 md:mb-20">
            <PurchaseButton />
          </div>
        ) : (
          <BigText
            title={service.purchase ? "Need " : "Need This"}
            subtitle={service.purchase ? "Domain?" : "Website?"}
          />
        )}
      </div>
    </>
  );
};

export default ProvideDetails;
