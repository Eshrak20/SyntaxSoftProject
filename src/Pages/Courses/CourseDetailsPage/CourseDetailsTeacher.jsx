import { FaLinkedin,FaFacebook } from "react-icons/fa";

const CourseDetailsTeacher = ({ course, baseUrl }) => {
  if (!course?.instructor) return null;

  const {
    name,
    age,
    occupation,
    experience,
    skills,
    certifications,
    achievements,
    image,
    socialLinks,
  } = course.instructor;

  return (
    <div className="max-w-3xl mx-auto p-2 md:p-6 md:bg-gray-800">
      <div className="flex items-center gap-6">
        <img
          src={`${baseUrl}/${image}`}
          alt={name}
          className="w-32 h-32 rounded-full border-4 border-gray-400"
        />
        <div>
          <h2 className="text-2xl font-bold text-gray-300">{name}</h2>
          <p className="text-gray-100">{occupation}</p>
          <p className="text-sm text-gray-500">{experience}</p>
        </div>
      </div>

      <div className="mt-6">
        <h3 className="text-xl font-semibold text-gray-200">Skills</h3>
        <ul className="flex flex-wrap gap-2 mt-2">
          {skills.map((skill, index) => (
            <li
              key={index}
              className="px-3 py-1 bg-blue-100 text-blue-700 rounded-md text-sm"
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-wrap">
        <div className="mt-6">
          <h3 className="text-xl font-semibold text-gray-200">
            Certifications
          </h3>
          <ul className="list-disc list-inside text-gray-100 mt-2">
            {certifications.map((cert, index) => (
              <li key={index}>{cert}</li>
            ))}
          </ul>
        </div>

        <div className="mt-6">
          <h3 className="text-xl font-semibold text-gray-200">Achievements</h3>
          <ul className="list-disc list-inside text-gray-100 mt-2">
            {achievements.map((achieve, index) => (
              <li key={index}>{achieve}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-6 flex gap-4 text-gray-200">
        <a
          href={socialLinks.facebook}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook size={24} className="hover:text-success transition" />
        </a>
        <a
          href={socialLinks.linkedin}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={24} className="hover:text-success transition" />
        </a>
      </div>
    </div>
  );
};

export default CourseDetailsTeacher;
