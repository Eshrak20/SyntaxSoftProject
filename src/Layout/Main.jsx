import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar";
import Footer from "../Pages/Shared/Footer";
import { useEffect } from "react";
const Main = () => {
  useEffect(() => {
    // Ensure no horizontal scrolling
    document.documentElement.style.overflowX = "hidden";
    document.body.style.overflowX = "hidden";

    return () => {
      document.documentElement.style.overflowX = "";
      document.body.style.overflowX = "";
    };
  }, []);
  return (
    <div>
      {<Navbar></Navbar>}
        <Outlet></Outlet>
      {<Footer></Footer>}
    </div>
  );
};

export default Main;
