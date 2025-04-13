import { useState } from "react";
import { Link } from "react-router-dom";
import cardData from "../../../Json/Services.json";

const Provide = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const baseUrl = import.meta.env.VITE_APP_BASE_URL;

  return (
    <div className="py-10 px-2 md:px-5">
      <h1 className="text-6xl font-bold text-center text-success mb-8">
        We Provide
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cardData.map((card) => (
          <Link to={`/service/${card.id}`} key={card.id}>
            <div
              className="transition-all duration-300 bg-white hover:bg-[#1D232A] rounded-xl px-3 md:px-7  h-72 flex flex-col items-center justify-center"
              onMouseEnter={() => setHoveredCard(card.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="text-xl mb-4 flex items-center">
                <img
                  className="w-28 h-auto"
                  src={`${baseUrl}/${card.logo}`}
                  alt="cardLogo"
                />
              </div>

              <h1
                className={`text-xl font-semibold ${
                  hoveredCard === card.id ? "text-white" : "text-[#1D232A]"
                }`}
              >
                {hoveredCard === card.id ? card.hoverTitle : card.title}
              </h1>
              <p
                className={`mt-2 text-xs 2xl:text-lg text-center ${
                  hoveredCard === card.id ? "text-gray-300" : "text-gray-600"
                }`}
              >
                {hoveredCard === card.id
                  ? card.hoverDescription
                  : card.description}
              </p>
              <button
                aria-label={`Learn more about ${card.title}`}
                className={`mt-1 text-xs 2xl:text-lg ${
                  hoveredCard === card.id ? "text-teal-300" : "text-teal-500"
                } hover:underline`}
              >
                Learn More
              </button>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Provide;
