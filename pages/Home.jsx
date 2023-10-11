import React from "react";
import Button from "../components/Button";
import ValidationComponent from "../components/ValidationComponent";
import ServiceTile from "../components/ServiceTile";
import WhyUsTile from "../components/WhyUsTile";
import ReviewTile from "../components/ReviewTile";
import { validationComp, serviceComp, whyUsComp, reviewComp } from "../utils";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

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
        <Button>See All Services</Button>
      </div>
      <div className="whyUs">
        <div className="whyUs-left">
          <h2> Alberto's HandyMan Difference</h2>
          <Button>About Us</Button>
        </div>
        <div className="whyUs-right">
          {whyUsComp.map((component) => {
            return (
              <WhyUsTile
                description={component.description}
                iconName={component.iconName}
              />
            );
          })}
        </div>
      </div>
      <div className="reviews">
        <h2> Reviews from Happy Customers!</h2>
        <div className="reviews-carousel">
          <Carousel
            swipeable={false}
            draggable={false}
            showDots={true}
            responsive={responsive}
            ssr={false} // means to render carousel on server-side.
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={1000}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
          >
            {reviewComp.map((component) => {
              return (
                <ReviewTile
                  description={component.description}
                  imgSrc={component.imgSrc}
                  name={component.name}
                />
              );
            })}
          </Carousel>
        </div>
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

//Carousel docs;
//https://www.npmjs.com/package/react-multi-carousel
