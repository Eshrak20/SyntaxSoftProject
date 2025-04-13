import BigBanner from "../Componenet/BigBanner";
import BigText from "../Componenet/BigText";
import BigText2 from "../Componenet/BigText2";
import TextImage from "../Componenet/TextImage";
import Tech from "../Home/Tech/Tech";
import ResourcesCard from "./ResourcesCard";
import ResourcesDropDown from "./ResourcesDropDown";
const baseUrl = import.meta.env.VITE_APP_BASE_URL;

const Resources = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
  return (
    <>
      <div className="max-w-full lg:max-w-screen-xl 2xl:max-w-screen-2xl mx-auto px-2 md:px-8 lg:px-12">
        <BigBanner
          title="Empower Your Business with Expert IT Professionals"
          description="We specialize in providing highly skilled IT professionals who can seamlessly integrate with your team, bringing expertise and flexibility to your business operations."
        />
        <div className="">
          <BigText2
            title="How IT Out sourcing line Benefits Your Business"
          />
          <ResourcesCard />
        </div>
        <div className="mt-20 mx-4">
          <BigText2 title="Our Outsourcing Services" />
        </div>
        <ResourcesDropDown />
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
          description={`Based on our analysis, we craft a customized IT strategy that aligns with your  business goals. This roadmap includes short-term and long-term plans for  infrastructure upgrades, software integration, and process optimization to  ensure your technology investments deliver maximum ROI.`}
          imageUrl={`${baseUrl}/images/work/work2.svg`}
          buttonText="Contact us"
          link="/contacts"
        />
        <TextImage
          title="Implementation & Integration"
          description={`We guide you through the implementation of new technologies, ensuring  seamless integration with your existing systems. Whether it’s cloud migration,  network redesign, or software deployment, we manage the process end-to-  end to minimize disruptions and maximize results.`}
          imageUrl={`${baseUrl}/images/work/work3.svg`}
          buttonText="Contact us"
          link="/contacts"
          reverse={true}
        />
        <TextImage
          title="Continuous Support & Improvement"
          description={`Technology doesn’t stand still, and neither do we. Post-implementation, we  provide ongoing support and optimization services. We monitor your systems,  provide updates, and refine your strategy to adapt to evolving business needs  and emerging technologies.`}
          imageUrl={`${baseUrl}/images/work/work4.svg`}
          buttonText="Contact us"
          link="/contacts"
        />
        <Tech baseUrl={baseUrl} />
        <BigText title="Ready to Get" subtitle="Started" />
      </div>
    </>
  );
};

export default Resources;
