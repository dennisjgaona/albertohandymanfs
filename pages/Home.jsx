import React from "react";
import Button from "../components/Button";
import ValidationComponent from "../components/ValidationComponent";
import ServiceTile from "../components/ServiceTile";
import WhyUsTile from "../components/WhyUsTile";
import ReviewTile from "../components/ReviewTile";
import { CiCircleCheck } from "react-icons/ci";
import Logo from "../src/assets/Logo";
import { IconContext } from "react-icons";

import {
  validationComp,
  serviceComp,
  whyUsComp,
  reviewComp,
  tempGallery,
} from "../utils";

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
        <div className="hero-logo">
          <Logo />
        </div>
        <div className="hero-text">
          <h1>At Your Service!</h1>
          <span>
            <IconContext.Provider
              value={{
                verticalAlign: "middle",
                size: "30px",
                color: "green",
              }}
            >
              <div style={{ marginRight: "20px" }}>
                <CiCircleCheck />
              </div>
            </IconContext.Provider>

            <h2>Quality Service.</h2>
          </span>
          <span>
            <IconContext.Provider
              value={{
                verticalAlign: "middle",
                size: "30px",
                color: "green",
              }}
            >
              <div style={{ marginRight: "20px" }}>
                <CiCircleCheck />
              </div>
            </IconContext.Provider>
            <h2>Reliable Repairs.</h2>
          </span>
          <span>
            <IconContext.Provider
              value={{
                verticalAlign: "middle",
                size: "30px",
                color: "green",
              }}
            >
              <div style={{ marginRight: "20px" }}>
                <CiCircleCheck />
              </div>
            </IconContext.Provider>
            <h2>Exceptional Craftsmanship.</h2>
          </span>
        </div>
        <div className="hero-button">
          <Button
            linkTo="/book-a-handyman"
            background-color="orange"
            display="flex"
            color="white"
            flexDirection="column"
            justifyContent="center"
            fontSize="16px"
            textAlign="center"
            border="none"
            width="125px"
            height="60px"
            borderRadius="12px"
            marginRight="20px"
            marginTop="20px"
          >
            Book Today!
          </Button>
          <Button
            linkTo="/book-a-handyman"
            background-color="#30bced"
            display="flex"
            color="white"
            flexDirection="column"
            justifyContent="center"
            fontSize="16px"
            textAlign="center"
            border="none"
            width="125px"
            height="60px"
            borderRadius="12px"
            marginTop="20px"
          >
            4693503919
          </Button>
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
      </div>

      <div className="services">
        <div className="services-intro">
          <h1>Alberto's Handyman Services </h1>
          <h2>Explore our full menu of Handyman Services</h2>
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
        <div
          style={{
            display: "flex",
            alignContent: "center",
            justifyContent: "center",
            marginBottom: "5%",
          }}
        >
          <Button
            linkTo="/book-a-handyman"
            background-color="#30bced"
            display="flex"
            color="white"
            flexDirection="column"
            justifyContent="center"
            fontSize="16px"
            textAlign="center"
            border="none"
            width="125px"
            height="60px"
            borderRadius="12px"
            marginTop="20px"
          >
            See All Services
          </Button>
        </div>
      </div>
      <div className="whyUs">
        <div className="whyUs-left">
          <h1> Alberto's HandyMan Difference</h1>
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
            autoPlaySpeed={3000}
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
        <div className="projects-left">
          <h2>here is a slideshow of all of our recent work! </h2>
        </div>
        <div className="projects-right">
          <Carousel
            swipeable={false}
            draggable={false}
            showDots={true}
            responsive={responsive}
            ssr={false} // means to render carousel on server-side.
            infinite={true}
            autoPlay={false}
            autoPlaySpeed={3000}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            containerClass="projects-right"
            dotListClass="custom-dot-list-style"
            itemClass="projects-carousel-item"
          >
            {tempGallery.map((component) => {
              return (
                <img
                  src={component.imgSrc}
                  style={{ width: "200px" }}
                  alt="gallery-image"
                />
              );
            })}
          </Carousel>
        </div>
      </div>
      <div className="calltoaction">
        <h2>Ready to start your project? </h2>
        <h3>Give Alberto's HandyMan a call for a free consultation</h3>
        <Button>Book A HandyMan</Button>
      </div>
    </>
  );
}

//Carousel docs;
//https://www.npmjs.com/package/react-multi-carousel

//handyman nextdoor direct link
//https://nextdoor.com/pages/albertos-handyman-co-dallas-tx/?init_source=search&query=alberto%20handy%20man
