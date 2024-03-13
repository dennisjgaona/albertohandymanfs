import React, { useState, createContext } from "react";
import { Outlet, ScrollRestoration } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export const ContextLang = createContext({});

export default function Layout() {
  const [lang, setLang] = useState(true);
  //const langContext = createContext()
  return (
    <div className="site-wrapper">
      <ContextLang.Provider value={{ lang, setLang }}>
        <Header />
        <main>
          <ScrollRestoration />
          <Outlet context={[lang, setLang]} />
        </main>
        <Footer />
      </ContextLang.Provider>
    </div>
  );
}
