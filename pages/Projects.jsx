import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { tempGallery, validationComp } from "../utils";
import ValidationComponent from "../components/ValidationComponent";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 3,
  },
};
export default function Projects() {
  return (
    <>
      <div>
        <h1>Our Work</h1>
      </div>
      <div>
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
      <div>
        <h1>Ready to get started on your project?</h1>
        <h3>Schedule your FREE consultation</h3>
        <button>Book Now!</button>
      </div>
    </>
  );
}
