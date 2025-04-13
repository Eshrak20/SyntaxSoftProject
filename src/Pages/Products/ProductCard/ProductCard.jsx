import { Link } from "react-router-dom";
import card from "../../../Json/Products.json";

const Products = () => {
  const baseUrl = import.meta.env.VITE_APP_BASE_URL;

  return (
    <div className="px-4 lg:px-20 md:px-40 py-5 md:py-10">
      <h1 className="text-4xl  md:text-7xl font-bold text-center text-success mb-5 md:mb-10">
        Our Products
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {card.map((product) => (
          <Link to={`/products/${product.id}`} key={product.id}>
            <div className="rounded-xl p-4 md:p-6 transition-transform duration-300 ease-in-out ">
              <img
                src={`${baseUrl}/${product.img}`}
                alt={product.title}
                className="w-auto h-auto md:w-full md:h-full object-cover object-center rounded-lg mb-3 md:mb-4  hover:scale-105 transition-transform duration-300 ease-in-out"
              />
             
              <p className="text-center text-gray-100 font-semibold text-base">
                {product.title}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Products;
