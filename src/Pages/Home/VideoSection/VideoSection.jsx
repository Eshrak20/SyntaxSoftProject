import { Link } from "react-router-dom";

const VideoSection = ({ baseUrl }) => {

  return (
    <section className="relative min-h-screen  flex items-center justify-start overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <video className="w-full h-full object-cover" autoPlay loop muted>
          <source src={`${baseUrl}/videos/work2.mp4`} type="video/mp4" />
        </video>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent"></div>

      {/* Content Section */}
      <div className="relative z-10 text-white px-6 md:px-16 max-w-screen-lg w-full">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-semibold leading-tight">
          Grow your <span className="text-success">DevTeam</span> <br />
          with our Skilled & Talented <br />
          IT Professionals
        </h2>

        {/* Subtitle */}
        <p className="mt-6 text-lg md:text-xl font-medium">
          Save up to{" "}
          <span className="text-success text-3xl font-bold">70%</span> <br />
          of your development cost
        </p>

        {/* Button */}
        <Link to="/contacts">
          <button className="mt-8 px-8 py-3 bg-success text-white font-bold rounded-lg hover:bg-success/90 transition-all duration-300">
            Hire Now
          </button>
        </Link>
      </div>
    </section>
  );
};

export default VideoSection;
