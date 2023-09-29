import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout() {
  const [lang, setLang] = useState(false);
  return (
    <div className="site-wrapper">
      <Header />
      <main>
        <Outlet context={[lang, setLang]} />
      </main>
      <Footer />
    </div>
  );
}
