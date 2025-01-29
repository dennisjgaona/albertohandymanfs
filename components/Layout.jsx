import React, { useState, createContext } from "react";
import { Outlet, ScrollRestoration, useOutlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { AuthProvider } from "../src/hooks/useAuth";
export const ContextLang = createContext({});

export default function Layout() {
  //const [lang, setLang] = useState(true);
  //const langContext = createContext()
  const outlet = useOutlet();
  return (
    <div className="site-wrapper">
      <AuthProvider>
        <Header />
        <main>
          <ScrollRestoration />
          {outlet}
        </main>
        <Footer />
      </AuthProvider>
    </div>
  );
}
