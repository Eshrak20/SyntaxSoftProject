import courses from "../../../Json/Courses.json";
import { Link } from "react-router-dom";

const CourseCard = ({ course }) => {
  const baseUrl = import.meta.env.VITE_APP_BASE_URL;

  return (
    <Link to={`/course/${course.id}`}>
    <div className="border border-gray-200 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 transform cursor-pointer h-96 flex flex-col justify-between">
      <div className="relative group h-64">
        <img
          src={`${baseUrl}/${course.image}`}
          alt={course.title}
          className="w-full h-full object-fill transition-opacity duration-300 group-hover:opacity-50"
        />
        {/* Enroll button on hover */}
        <button className="absolute inset-0 bg-opacity-20 text-white text-xl font-semibold flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-300">
          Enroll Now
        </button>
      </div>
  
      <div className="p-4 flex flex-col justify-between">
        <h1 className="text-2xl font-semibold mb-2 line-clamp-2">{course.title}</h1>
  
        <div className="flex items-center space-x-2 text-xl">
          <span className="text-gray-500 line-through">৳{course.regularPrice}</span>
          <span className="text-green-600 font-bold">৳{course.offerPrice}</span>
        </div>
      </div>
    </div>
  </Link>
  
  );
};

const CourseList = ({ type }) => {
  // Filter courses based on 'type' prop
  const filteredCourses = type
    ? courses.filter((course) => course.type === type)
    : courses;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:p-20 md:p-7 2xl:p-5 my-">
      {filteredCourses.length > 0 ? (
        filteredCourses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))
      ) : (
        <p className="text-center text-2xl col-span-3">No courses found.</p>
      )}
    </div>
  );
};

export default CourseList;
