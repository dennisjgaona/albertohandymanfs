import React from "react";
import Carousel, { CarouselWithCustomDots } from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { tempGallery, validationComp } from "../utils";
import ValidationComponent from "../components/ValidationComponent";
import Button from "../components/Button";
//import { useSearchParams } from "react-router-dom";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const images = tempGallery.map((component) => {
  //const [searchParams, setSearchParams] = useSearchParams();

  //const category = searchParams.get("category");
  return (
    <div>
      <img src={component.filePath} alt="gallery-image" />
    </div>
  );
});

const CustomDot = ({ index, onClick, active }) => {
  return (
    <button
      onClick={(e) => {
        onClick();
        e.preventDefault();
      }}
      className={active ? "custom-dot--active" : "custom-dot"}
    >
      {React.Children.toArray(images)[index]}
    </button>
  );
};

export default function Projects() {
  return (
    <>
      <div className="projects-hero">
        <h1>Our Work</h1>
      </div>
      <div>
        <Carousel
          swipeable={false}
          slidesToSlide={1}
          draggable={true}
          showDots={true}
          responsive={responsive}
          ssr={false} // means to render carousel on server-side.
          infinite={true}
          autoPlay={false}
          autoPlaySpeed={3000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          renderButtonGroupOutside={true}
          renderDotsOutside={true}
          containerClass="projects-carousel"
          itemClass="projects-carousel-img"
          dotListClass="projects-carousel-dots"
          customDot={<CustomDot />}
        >
          {tempGallery.map((component) => {
            return (
              <div className="projects-image-container">
                <img
                  src={component.filePath}
                  alt="gallery-image"
                  style={{
                    boxShadow:
                      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                    height: "100%",
                    width: "auto",
                  }}
                />
              </div>
            );
          })}
        </Carousel>
      </div>

      <div className="validation-projects">
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
      <div className="calltoaction">
        <div className="calltoaction-bubble">
          <h2
            style={{
              fontSize: "xx-large",
              color: "#1c6b88",
              fontWeight: "700",
              lineHeight: "1",
            }}
          >
            Ready to get started?
          </h2>
          <h3
            style={{
              fontSize: "x-large",
              color: "##fc5130",
              fontWeight: "600",
              lineHeight: "1",
            }}
          >
            Schedule for your FREE consultation
          </h3>
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
            justifySelf="center"
          >
            Book A HandyMan
          </Button>
        </div>
      </div>
    </>
  );
}
