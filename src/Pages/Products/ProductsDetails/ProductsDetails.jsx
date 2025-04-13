import { useParams } from "react-router-dom";
import card from "../../../Json/Products.json";
import Better from "../../Componenet/Better";
import BigText from "../../Componenet/BigText";

const ProductsDetails = () => {
  // Scroll to top on page load
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });

  const { id } = useParams();
  const product = card.find((item) => item.id === parseInt(id));

  if (!product) {
    return (
      <div className="text-center py-20 text-gray-100">
        <h1 className="text-4xl font-bold">Product Not Found</h1>
      </div>
    );
  }

  return (
    <>
      <div className="container mx-auto px-4  md:px-16">
        {/* Banner Section */}
        <div
          className="bg-gradient-to-r from-green-500 via-slate-400 to-orange-500
 rounded-xl p-4 md:p-14 text-center my-7 md:my-36 shadow-lg"
        >
          <h1 className="text-2xl md:text-8xl text-white font-bold mb-4">
            {product.title}
          </h1>
          <p className="text-sm md:text-xl text-gray-200 md:px-40">
            {product.bannerDescription}
          </p>
        </div>

        {/* Key Features Section */}
        <div className="text-center mb-7 md:mb-20">
          <h1 className="text-xl md:text-6xl font-bold text-gray-100">
            Key Modules & Features
          </h1>
          <p className="text-base md:text-xl px-4 md:px-64 text-gray-300">
            {product.keyFeaturesDes}
          </p>
        </div>

        {/* Dynamic Key Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-center">
          {product.keyFeatures.map((feature) => (
            <div
              key={feature.id}
              className="w-auto h-28 flex items-center justify-center text-gray-800 hover:text-white py-6 px-3 bg-white rounded-xl shadow-md text-center transition-transform duration-300 transform hover:scale-105 hover:shadow-lg hover:bg-gradient-to-r from-green-500 via-slate-400 to-orange-500"
            >
              <h3 className="text-xl md:text-2xl font-bold mb-2">
                {feature.title}
              </h3>
            </div>
          ))}
        </div>

        <Better />
        <BigText title="Need This" subtitle="Product?" />
      </div>
    </>
  );
};

export default ProductsDetails;
