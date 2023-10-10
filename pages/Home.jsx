import React from "react";
import Button from "../components/Button";
import ValidationComponent from "../components/ValidationComponent";
import ServiceTile from "../components/ServiceTile";
import { validationComp, serviceComp } from "../utils";

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
      <div className="validation">
        {validationComp.map((component) => {
          return (
            <ValidationComponent
              title={component.title}
              subTitle={component.subTitle}
              imgSrc={component.imgSrc}
            />
          );
        })}
      </div>
      <div className="services">
        <div className="services-intro">
          <h2>Alberto's Handyman Services </h2>
          <h3>Explore our full menu of Handyman Services</h3>
        </div>
        <div className="services-grid">
          {serviceComp.map((component) => {
            return (
              <ServiceTile
                title={component.title}
                description={component.description}
                iconName={component.iconName}
                btnPath={component.btnPath}
              />
            );
          })}
        </div>
      </div>
      <div className="whyUs">
        <h2> here are all the reasons why you should choose us! </h2>
      </div>
      <div className="reviews">
        <h2> Here is a list of reviews from nextdoor!</h2>
      </div>
      <div className="projects">
        <h2>here is a slideshow of all of our recent work! </h2>
      </div>
      <div className="calltoaction">
        <h2>Final call to action! </h2>
      </div>
    </>
  );
}
