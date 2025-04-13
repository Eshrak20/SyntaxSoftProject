import BigText from "../Componenet/BigText";
import DynamicBanner from "../Componenet/DynamicBanner";
import Provide from "./Provide/Provide";

const ServicesPage = () => {
  const baseUrl = import.meta.env.VITE_APP_BASE_URL;

  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });

  return (
    <div className="max-w-full lg:max-w-screen-xl 2xl:max-w-screen-2xl mx-auto px-4 md:px-8 lg:px-12">
      <DynamicBanner
        title={`Our Expert\n Services`}
        description={`Unlocking your business's full potential with our expertise. Let us drive innovation and efficiency across your operations.`}
        imageUrl={`${baseUrl}/images/Service/ourservices.jpg`}
        // imageUrl={`/public/images/Service/ourservices.jpg`}
      />
      <Provide />
      <BigText title="Ready to Get" subtitle="Started" />
    </div>
  );
};

export default ServicesPage;
