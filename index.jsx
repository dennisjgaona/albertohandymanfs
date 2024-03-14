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
      <Route path="/book-a-handyman" element={<Contact />} />
      <Route path="projects" element={<Projects />} />
      <Route path="about" element={<About />} />
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
// git push -u origin main --> pushes local changes to github
// ***************NEED TO IMPLEMENT********************
// 1. Scroll Restoration XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
// 2. Add new photos for projects
// 3. refactor projects photos to be objects with date added, type of job completed, before/after tags
// 4. add ability to filter photos in projects tab
// 5. Update color scheme
// 6. Finish writing out all of Services Detail pages (REPLACE LOREM IMPSUM with actual text) XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
// 7.

//*********     STRETCH GOALS      ***************/
// SECOND TO LAST. Add SPANISH TRANSLATION(?)
// LAST. refactor project photos to be from a database (see if netlify has enough storage for our purposes)
