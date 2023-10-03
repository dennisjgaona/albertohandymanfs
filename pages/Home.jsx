import React from "react";
import Button from "../components/Button";

export default function Home() {
  return (
    <>
      <div className="hero">
        <div className="hero-text">
          <h2>Quality Service. Reliable Repairs. Exceptional Craftsmanship.</h2>
          <h1>Alberto the HandyMan at Your Service</h1>
        </div>
        <div className="hero-button">
          <Button>Book Today!</Button>
          <Button>4693503919</Button>
        </div>
      </div>
    </>
  );
}
