import React from "react";
import Button from "../components/Button";
import ValidationComponent from "../components/ValidationComponent";

export default function Home() {
  const validationComp = [
    {
      title: "Lifelong Career Professional",
      subTitle: "In Construction Business",
      imgSrc:
        "https://img.icons8.com/external-wanicon-lineal-color-wanicon/256/external-construction-construction-wanicon-lineal-color-wanicon-1.png",
    },
    {
      title: "Certified NextDoor Neighbor",
      subTitle: "from Excellent Customer Service",
      imgSrc:
        "https://img.icons8.com/external-thin-kawalan-studio/96/external-nextdoor-social-media-thin-kawalan-studio.png",
    },
    {
      title: "100+",
      subTitle: "Jobs Completed",
      imgSrc:
        "https://img.icons8.com/external-flaticons-lineal-color-flat-icons/256/external-construction-emergency-service-flaticons-lineal-color-flat-icons.png",
    },
  ];

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
        <div>
          <h2>all services go here! </h2>
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
