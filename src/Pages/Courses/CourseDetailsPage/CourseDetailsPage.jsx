import { Link, useParams } from "react-router-dom";
import courses from "../../../Json/Courses.json";
import CourseDetailsCard from "./CourseDetailsCard";
import CourseDetailsTeacher from "./CourseDetailsTeacher";
import MidText from "../../Componenet/MidText";
import CourseOutline from "./CourseOutline";

const CourseDetailsPage = () => {
  const baseUrl = import.meta.env.VITE_APP_BASE_URL;

  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
  const { id } = useParams();

  const course = courses.find((course) => course.id.toString() === id);

  if (!course) {
    return <div>Course not found</div>;
  }

  return (
    <div className="max-w-full lg:max-w-screen-xl 2xl:max-w-screen-2xl mx-auto px-4 md:px-8 lg:px-12 mt-20">
      <CourseDetailsCard course={course} baseUrl={baseUrl} />
      <CourseOutline />

      <div className="flex flex-col lg:flex-row my-20 md:border border-gray-200">
        {/* Instructor Section */}
        <div className="flex flex-col items-center justify-center w-full lg:w-2/3 md:p-6 md:bg-gray-900 text-white">
          <MidText
            title="Meet Our"
            subtitle="Instructor"
            description={`Learn from the best with years of experience and expertise.`}
          />
          <button className="hidden md:flex items-center mt-6">
            <Link
              to={`/coursePurchase/${course.id}?courseName=${encodeURIComponent(
                course.title
              )}`}
            >
              <strong className="px-4 py-2 md:px-8 md:py-4 text-lg md:text-2xl bg-green-600 text-white font-bold rounded-lg shadow-md hover:bg-green-700 transition duration-300">
                Enroll Today
              </strong>
            </Link>
          </button>
        </div>
        {/* Course Details Section */}
        <div className="w-full lg:w-2/3">
          <CourseDetailsTeacher course={course} baseUrl={baseUrl} />
        </div>
      </div>
    </div>
  );
};

export default CourseDetailsPage;
