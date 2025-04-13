import { Link } from "react-router-dom";

const CourseDetailsCard = ({ course, baseUrl }) => {
  return (
    <>
      <div className="flex flex-col md:flex-row items-star md:px-20 2xl:px-5  md:py-12 gap-8 rounded-xl">
        {/* Left Side: Course Details */}
        <div className="w-full md:w-2/3 space-y-6 px- md:px-0">
          <h1 className="text-3xl md:text-4xl font-extrabold">
            {course.title}
          </h1>
          <p className=" md:block text-sm md:text-lg font-medium text-gray-300">
            {/* {course.description} */}
          </p>

          {/* Image on Mobile */}
          <div className="md:hidden w-full">
            <img
              src={`${baseUrl}/${course.image}`}
              alt={course.title}
              className="rounded-lg shadow-lg w-full object-cover"
            />
          </div>
          <div className="font-semibold mt-4">
            <div className="flex flex-col-reverse md:flex-row justify-start md:space-x-8 text-2xl">
              <div>
                <Link
                  to={`/coursePurchase/${
                    course.id
                  }?courseName=${encodeURIComponent(course.title)}`}
                >
                  <strong className="px-4 py-2 md:px-6 md:py-3 bg-green-600 text-white font-bold rounded-lg shadow-md hover:bg-green-700 transition duration-300 ease-in-out text-2xl">
                    Enroll Now
                  </strong>
                </Link>
              </div>

              <div className="mb-5">
                <span className="text-green-600 font-bold text-xl md:text-2xl">
                  Offer Price: ৳{course.offerPrice}
                </span>
                <span className="text-gray-400 line-through ml-2 text-base md:text-lg">
                  Regular Fee: ৳{course.regularPrice}
                </span>
              </div>
            </div>
            <p className="text-gray-300 text-base md:text-lg mt-20">
              {course.time}
            </p>
          </div>

          {/* Stats in Card Format */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
            {[
              { label: "Duration", value: course.duration },
              { label: "Total Live Classes", value: course.totalLiveClasses },
              {
                label: "Batch No",
                value: course.batchNo,
              },
              { label: "Seats Left", value: course.seatsLeft },
              { label: "Category", value: course.category },
              { label: "Contact", value: course.contact },
            ].map((item, index) => (
              <div
                key={index}
                className="p-4 border rounded-lg shadow-sm flex items-center"
              >
                <strong className="font-semibold text-gray-200">
                  {item.label}:
                </strong>
                <span className="ml-2 text-gray-300">{item.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Course Image */}
        <div className="hidden md:block w-full md:w-1/3">
          <img
            src={`${baseUrl}/${course.image}`}
            alt={course.title}
            className="rounded-lg shadow-lg w-full object-cover"
          />
        </div>
      </div>
    </>
  );
};

export default CourseDetailsCard;
