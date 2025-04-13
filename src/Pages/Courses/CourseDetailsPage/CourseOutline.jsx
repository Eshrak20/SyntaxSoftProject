import { useParams } from "react-router-dom";
import courseData from "../../../Json/Courses.json";
import { jsPDF } from "jspdf";

const CourseOutline = () => {
  const { id } = useParams();

  const selectedCourse = courseData.find((course) => course.id === id);

  if (!selectedCourse) {
    // return <div className="p-6 text-red-600 font-bold">Course not found!</div>;
    return;
  }

  const generatePDF = () => {
    const doc = new jsPDF();

    // Add course title
    doc.setFontSize(20);
    doc.text(`${selectedCourse.title} - Course Outline`, 20, 20);

    let yPosition = 30; // Start Y position for the content

    // Loop through the course outline sections and topics
    selectedCourse.courseOutline.forEach((section) => {
      doc.setFontSize(16);
      doc.text(section.title, 20, yPosition);
      yPosition += 10;

      section.topics.forEach((topic) => {
        doc.setFontSize(12);
        doc.text(`- ${topic}`, 30, yPosition);
        yPosition += 8;
      });

      yPosition += 10; // Space between sections
    });

    // Save the PDF
    doc.save(`${selectedCourse.title}_Course_Outline.pdf`);
  };

  return (
    <div className="md:p-8 text-gray-100 my-12">
      <div className="text-center">
        <h1 className="text-xl md:text-4xl font-bold text-green-600 hover:text-orange-600 mb-10 border-b-2 border-gradient-to-r from-green-500 via-slate-400 to-orange-500 pb-5 inline-block">
          {selectedCourse.title} - Course Outline
        </h1>
      </div>

      <div className="grid gap-x-4 gap-y-8 md:grid-cols-2">
        {selectedCourse?.courseOutline?.map((section, index) => (
          <div
            key={index}
            className="group p-6 rounded-2xl border border-green-600 hover:shadow-2xl hover:bg-green-600 hover:text-white transition-all duration-300 ease-in-out"
          >
            <h2 className="text-lg md:text-3xl font-semibold text-green-500 mb-5 group-hover:text-white">
              {section.title}
            </h2>
            <ul className="list-disc pl-5 space-y-1">
              {section.topics?.map((topic, idx) => (
                <li
                  key={idx}
                  className="text-gray-300 group-hover:text-white text-base md:text-xl"
                >
                  {topic}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="text-center mt-6 md:mt-8">
        <button
          onClick={generatePDF}
          className="p-3 bg-green-600 text-white rounded-xl hover:bg-green-500 transition-all duration-300"
        >
          Download PDF
        </button>
      </div>
    </div>
  );
};

export default CourseOutline;
