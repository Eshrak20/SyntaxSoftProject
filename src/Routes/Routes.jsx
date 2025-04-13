import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import ServicesPage from "../Pages/ServicesPage/ServicesPage";
import Portfolio from "../Pages/Portfolio/Portfolio";
import Products from "../Pages/Products/Products";
import About from "../Pages/About/About";
import Contacts from "../Pages/Contacts/Contacts";
import Courses from "../Pages/Courses/Courses";
import ProvideDetails from "../Pages/ServicesPage/ProvideDetails/ProvideDetails";
import ProductsDetails from "../Pages/Products/ProductsDetails/ProductsDetails";
import CourseDetailsPage from "../Pages/Courses/CourseDetailsPage/CourseDetailsPage";
import Resources from "../Pages/Resources/Resources";
import CoursePurchase from "../Pages/Courses/CourseDetailsPage/CoursePurchase";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/services",
        element: <ServicesPage />,
      },
      {
        path: "/service/:id",
        element: <ProvideDetails/>,
      },
      {
        path: "/portfolio",
        element: <Portfolio />,
      },
      {
        path: "/products",
        element: <Products/>,
      },
      {
        path: "/products/:id",
        element: <ProductsDetails/>,
      },
      {
        path: "/about",
        element: <About/>,
      },
      {
        path: "/resources",
        element: <Resources/>,
      },
      {
        path: "/contacts",
        element: <Contacts/>,
      },
      {
        path: "/courses",
        element: <Courses />,
      },
      {
        path: "/courses/technical",
        element: <Courses type="technical" />,
      },
      {
        path: "/courses/english",
        element: <Courses type="english" />,
      },
      {
        path: "/course/:id",
        element: <CourseDetailsPage/>,
      },
      {
        path: "/coursePurchase/:id",
        element: <CoursePurchase/>,
      },
    ],
    
  },
], {
  basename: '/',
});
