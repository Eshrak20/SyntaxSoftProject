import TextImage from "../Componenet/TextImage";
import About from "./About/About";
import Banner from "./Banner/Banner";
import Client from "./Client/Client";
import ImageDuo from "./ImageDuo/ImageDuo";
import Tech from "./Tech/Tech";
import VideoSection from "./VideoSection/VideoSection";
const baseUrl = import.meta.env.VITE_APP_BASE_URL;

const Home = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
  return (
    <>
      <Banner baseUrl={baseUrl} />
      <div className="max-w-full lg:max-w-screen-xl 2xl:max-w-screen-2xl mx-auto">
        <ImageDuo baseUrl={baseUrl} />
        <VideoSection baseUrl={baseUrl} />
        <div className="px-4">
          <TextImage
            title="Custom Software Development"
            description={`Custom Software Development focuses on creating tailored solutions designed specifically for your business needs. It enhances efficiency, streamlines processes, and offers flexibility to scale as your business grows. With personalized features and seamless integration, it ensures optimal performance and user satisfaction.`}
            buttonText="Explore More"
            imageUrl={`${baseUrl}/images/ChatgptImages/custom-software-development.jpg`}
            border={`border`}
            link={`/service/12`}
          />

          <TextImage
            title="Mobile Apps Development"
            description={`Crafting intuitive and feature-rich mobile applications that enhance user engagement and drive business growth. We focus on creating seamless, user-friendly experiences across iOS and Android platforms, tailored to meet your specific goals. From concept to deployment, our apps are designed for performance, scalability, and long-term success, helping your business stay ahead in the mobile-first world.`}
            buttonText="Exlpore More"
            imageUrl={`${baseUrl}/images/ChatgptImages/mobile-app-dev.jpg`}
            reverse={true}
            border={`border`}
            link={`/service/4`}
          />
          <TextImage
            title="Domain and Hosting"
            description={`Syntax Soft Systems offer a complete solution for all kinds of websites. We specialize in providing domain registration and hosting in Bangladesh. We also provide domain and hosting services to our clients across the globe. Our goal is to provide affordable domain and hosting prices in Bangladesh. We deliver domain and hosting package solutions that meet the needs of small businesses as well as large corporations. We understand that pride ourselves on being able to give each client what they need when it comes to their web presence.`}
            buttonText="Exlpore More"
            imageUrl={`${baseUrl}/images/ChatgptImages/domian&hosting.jpg`}
            border={`border`}
            link={`/service/11`}
          />
          <TextImage
            title="Web Application Dev"
            description={`Innovation and evolution drive the web application landscape, and we are at the cutting edge. Our web development team embraces change, continuously integrating new features and technologies as the web ecosystem expands. We understand how web platforms, browsers, and frameworks work together, and we know how to leverage their strengths to create robust, scalable solutions that span the full spectrum of modern web applications.`}
            buttonText="Exlpore More"
            imageUrl={`${baseUrl}/images/ChatgptImages/web-application-development.jpg`}
            reverse={true}
            border={`border`}
            link={`/service/1`}
          />
        </div>

        {/* <Success baseUrl={baseUrl} /> */}
        <Tech baseUrl={baseUrl} />
        <Client />
        <About baseUrl={baseUrl} />
      </div>
    </>
  );
};

export default Home;
