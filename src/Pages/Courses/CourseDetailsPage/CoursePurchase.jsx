import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

// Reusable Input Field Component
const ContactInputField = ({
  type,
  name,
  value,
  onChange,
  placeholder,
  required,
  disabled,
}) => (
  <input
    type={type}
    name={name}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-success bg-white"
    required={required}
    disabled={disabled}
  />
);

const CoursePurchase = () => {
  const [formData, setFormData] = useState({
    name: "",
    position: "",
    company: "",
    address: "",
    email: "",
    phone: "",
    lastEducation: "",
    courseName: "",
    message: "",
  });

  const location = useLocation();

  // Set course name from query parameters
  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const courseName = queryParams.get("courseName");
    if (courseName) {
      setFormData((prevState) => ({
        ...prevState,
        courseName: courseName,
      }));
    }
  }, [location]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form data:", formData);

    const apiUrl = import.meta.env.VITE_APP_EMAIL_URL;

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          subject: `Course Purchase Request - ${formData.courseName}`,
          message: `
            Name: ${formData.name}\n
            Position: ${formData.position}\n
            Company: ${formData.company}\n
            Address: ${formData.address}\n
            Email: ${formData.email}\n
            Phone: ${formData.phone}\n
            Education: ${formData.lastEducation}\n
            Course Name: ${formData.courseName}\n
            Message: ${formData.message}
          `,
        }),
      });

      if (!response.ok) throw new Error("Network response was not ok");

      alert("Form submitted successfully! Please check your email inbox.");
    } catch (error) {
      console.error("Error:", error);
      alert("There was an error submitting the form.");
    }
  };

  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });

  return (
    <>
      <div className="max-w-full lg:max-w-screen-xl 2xl:max-w-screen-2xl mx-auto mt-32">
        <h1 className="text-3xl  md:text-5xl font-bold text-center text-success">
          Please Fill Out the Form
        </h1>
        <div className="container md:px-8">
          <div className="p-6 md:p-8 rounded-lg max-w-4xl mx-auto">
            <form
              onSubmit={handleSubmit}
              className="flex flex-wrap text-gray-900"
            >
              <div className="mb-4 w-full md:w-1/2 md:pr-2">
                <ContactInputField
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="* Name"
                  required
                />
              </div>
              <div className="mb-4 w-full md:w-1/2 md:pl-2">
                <ContactInputField
                  type="text"
                  name="position"
                  value={formData.position}
                  onChange={handleInputChange}
                  placeholder="Position"
                />
              </div>
              <div className="mb-4 w-full md:w-1/2 md:pr-2">
                <ContactInputField
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  placeholder="Company/Institute"
                />
              </div>
              <div className="mb-4 w-full md:w-1/2 md:pl-2">
                <ContactInputField
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  placeholder="* Address"
                  required
                />
              </div>
              <div className="mb-4 w-full md:w-1/2 md:pr-2">
                <ContactInputField
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="* Email"
                  required
                />
              </div>
              <div className="mb-4 w-full md:w-1/2 md:pl-2">
                <ContactInputField
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="* Phone"
                  required
                />
              </div>
              <div className="mb-4 w-full md:w-1/2 md:pr-2">
                <ContactInputField
                  type="text"
                  name="lastEducation"
                  value={formData.lastEducation}
                  onChange={handleInputChange}
                  placeholder="* Last Education"
                  required
                />
              </div>
              <div className="mb-4 w-full md:w-1/2 md:pl-2">
                <ContactInputField
                  type="text"
                  name="courseName"
                  value={formData.courseName}
                  onChange={handleInputChange}
                  placeholder="* Course Name"
                  required
                  disabled
                />
              </div>
              <div className="mb-6 w-full">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Describe what you want!"
                  rows="8"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-success bg-white"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-success text-white py-3 rounded-lg font-semibold hover:bg-opacity-60 transition-colors duration-300"
              >
                Buy Course
              </button>
            </form>

            <p className="text-gray-600 text-sm mt-4 text-center">
              By clicking Buy Course, you agree to our{" "}
              <a href="#" className="text-success hover:underline">
                Terms and Conditions
              </a>{" "}
              and{" "}
              <a href="#" className="text-success hover:underline">
                Privacy Policy
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CoursePurchase;
