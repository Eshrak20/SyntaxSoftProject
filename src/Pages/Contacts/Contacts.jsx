import BigText from "../Componenet/BigText";
import DynamicBanner from "../Componenet/DynamicBanner";
import MidText from "../Componenet/MidText";
import Form from "./Form/Form";
import Visit from "./Visit/Visit";

const Contacts = () => {
  const baseUrl = import.meta.env.VITE_APP_BASE_URL;

  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
  return (
    <>
      <div className="max-w-full lg:max-w-screen-xl 2xl:max-w-screen-2xl mx-auto px-2 md:px-8 lg:px-12">
        <DynamicBanner
          title={`Lets \n work Together`}
          description={`Need a software ? Let us know or visit our office.`}
          imageUrl={`${baseUrl}/images/Contact us/img3.png`}
        />

        <div className="-my-16">
          <MidText
            title="Visit"
            subtitle="Us"
            description={`You can meet us & share your project idea!`}
          />
        </div>
        <Visit />
        <div className="-mt-20 md:-mt-40 -mb-16 md:-mb-20">
          <MidText
            title="Share your"
            subtitle="Idea"
            description={`Share Your Innovative Ideas with Us - Together,  Let's Collaborate and \n Turn Your Vision into Reality`}
          />
        </div>
        <Form />

        <BigText title="Need More" subtitle="Clarity" />
      </div>
    </>
  );
};

export default Contacts;
