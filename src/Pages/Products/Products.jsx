import BigText from "../Componenet/BigText";
import DynamicBanner from "../Componenet/DynamicBanner";
import ProductCard from "./ProductCard/ProductCard";

const Products = () => {
  const baseUrl = import.meta.env.VITE_APP_BASE_URL;

  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
  return (
    <>
      <div className="max-w-full lg:max-w-screen-xl 2xl:max-w-screen-2xl mx-auto px-4 md:px-8 lg:px-12">
        <DynamicBanner
          title={`Discover Our\n Smart Products`}
          description={`Explore our cutting-edge solutions designed to elevate your\n organization.`}
          imageUrl={`${baseUrl}/images/product/Hcare.jpg`}

        />
      </div>
      <ProductCard />
      <BigText title="Need Something" subtitle="Else" />
    </>
  );
};

export default Products;
