// ✅ FIRST LINE
if (!(Object as any).hasOwn) {
  (Object as any).hasOwn = function (obj: any, prop: any) {
    return Object.prototype.hasOwnProperty.call(obj, prop);
  };
}

import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { HelmetProvider } from "react-helmet-async";


const root = document.getElementById("root");

if (!root) throw new Error("Root container missing");

// ✅ Use hydrate if pre-rendered HTML exists (react-snap)
// ✅ Otherwise use normal render
if (root.hasChildNodes()) {
  ReactDOM.hydrateRoot(
    root,
    <HelmetProvider>
      <App />
    </HelmetProvider>
  );
} else {
  ReactDOM.createRoot(root).render(
    <HelmetProvider>
      <App />
    </HelmetProvider>
  );
}