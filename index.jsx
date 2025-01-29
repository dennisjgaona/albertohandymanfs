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
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { AuthProvider } from "./src/hooks/useAuth";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="services" element={<ServicesMain />} />
      <Route path="/services/:id" element={<ServicesDetail />} />
      <Route path="/book-a-handyman" element={<Contact />} />
      <Route path="projects" element={<Projects />} />
      <Route path="about" element={<About />} />
      <Route path="login" element={<Login />} />
      <Route
        path="admin"
        element={
          <ProtectedRoute>
            <Admin />
          </ProtectedRoute>
        }
      />
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

//
// 4. add ability to filter photos in projects tab
// 5. Update color scheme

//*********     STRETCH GOALS      ***************/
// SECOND TO LAST. Add SPANISH TRANSLATION(?)
// LAST. refactor project photos to be from a database (see if netlify has enough storage for our purposes)
