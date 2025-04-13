import DynamicBanner from "../Componenet/DynamicBanner";
import CourseList from "./CourseList/CourseList";

const Courses = ({ type }) => {
  const baseUrl = import.meta.env.VITE_APP_BASE_URL;

  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });

  return (
    <>
      <div className="max-w-full lg:max-w-screen-xl 2xl:max-w-screen-2xl mx-auto px-4 md:px-8 lg:px-12">
        <div className="my-10">
          <DynamicBanner
            title={`Our Training\n `}
            description={`Unlocking your business's full potential with our expertise. Let us drive innovation and efficiency across your operations.`}
            imageUrl={`${baseUrl}/images/Training/training.jpeg`}
          />
        </div>
        <CourseList type={type} />
      </div>
    </>
  );
};

export default Courses;
