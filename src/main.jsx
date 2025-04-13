import { StrictMode, useEffect } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { HelmetProvider } from "react-helmet-async";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Routes";
// document.addEventListener('contextmenu', (e) => e.preventDefault());
// document.onkeydown = function (e) {
//   if (
//     e.key === "F12" || 
//     (e.ctrlKey && e.shiftKey && e.key === "I") || 
//     (e.ctrlKey && e.key === "U")
//   ) {
//     e.preventDefault();
//   }
// };


createRoot(document.getElementById("root")).render(
  // <StrictMode>
    <HelmetProvider>
      <div className="mx-auto">
      <RouterProvider router={router} />
      </div>
    </HelmetProvider>
  // </StrictMode> 
);
