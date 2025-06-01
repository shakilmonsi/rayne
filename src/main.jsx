import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { ScaleLoader } from "react-spinners";
import App from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Suspense fallback={<ScaleLoader />}>
      <App />
    </Suspense>
  </StrictMode>
);
