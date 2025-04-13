import BigBanner from "../Componenet/BigBanner";
import Gallery from "./Gallery/Gallery";
import Leader from "./Leader/Leader";
import Management from "./Management/Management";
import Mission from "./Mission/Mission";
import Vision from "./Vision/Vision";

const About = () => {
  const baseUrl = import.meta.env.VITE_APP_BASE_URL;

  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
  return (
    <>
      <div className="max-w-full lg:max-w-screen-xl 2xl:max-w-screen-2xl mx-auto px-4 md:px-8 lg:px-12">
        <BigBanner
          title="Syntax  Soft Systems One of the Best Software
Companies in Bangladesh"
          description=" 
Which provides Secure, Scalable, bridging your IT needs. 100 % quality ensure, honesty, responsibility, and dedicated make us different from others.  Our are 24×7 hours available for clients.  We give same importance for every project."
        />
        <Mission />
        <Vision
          title="Become the most preferred technology"
          description={`Become the most preferred technology integrator and service provider with \n multiplatform, vendor independent information and communication \n technology solutions for both local and global market.`}
          // imageUrl="/images/vision /images/img1.webp"
          imageUrl={`${baseUrl}/images/vision/img1.webp`}
        />
        <Vision
          title="To develop a sustainable information Technology"
          description={`To develop a sustainable information Technology infra. & design the most \n Scalable IT solutions enabling Clients to reach their business goals.`}
          imageUrl={`${baseUrl}/images/vision/img2.jpg`}
          reverse={true}
        />
        <Leader />
        <Gallery />
        <Management />
      </div>
    </>
  );
};

export default About;
