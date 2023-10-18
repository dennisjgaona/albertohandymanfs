import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import ServicesDetail from "./pages/ServicesDetail";
import ServicesMain from "./components/ServicesMain";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="services" element={<ServicesMain />} />
      <Route path="/services/:id" element={<ServicesDetail />} />

      <Route path="projects" element={<Projects />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
//npm run dev (open dev server)
//pallete https://coolors.co/30bced-303036-fffaff-fc5130-050401
// git add .
//git commit -m "message..."
