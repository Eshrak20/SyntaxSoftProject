import BigText from "../Componenet/BigText";
import DynamicBanner from "../Componenet/DynamicBanner";
import PortFolioCard from "./PortFolioCard/PortFoilioCard";

const Portfolio = () => {
  const baseUrl = import.meta.env.VITE_APP_BASE_URL;

  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
  return (
    <>
      <div className="max-w-full lg:max-w-screen-xl 2xl:max-w-screen-2xl mx-auto">
        <DynamicBanner
          title={`Our\n Portfolio`}
          description={`Discover our success stories through a diverse range of projects that\n reflect our passion for innovation and excellence.`}
          imageUrl={`${baseUrl}/images/DynamicBanner/portfolio-n2MrqDd9.png`}
        />
        <PortFolioCard
        baseUrl={baseUrl}
        />
      </div>
      <BigText title="Want to do a Project" subtitle="with us" />
    </>
  );
};

export default Portfolio;
