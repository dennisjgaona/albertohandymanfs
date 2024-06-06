import React from "react";
import { serviceCompLayout, tempGallery, validationComp } from "../utils";
import ValidationServicesComponent from "../components/ValidationComponent";
//import { Outlet } from "react-router-dom";
import ServicePageTile from "./ServicePageTile";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Logo from "../src/assets/Logo";
import Button from "../components/Button";
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

export default function ServicesMain() {
  return (
    <>
      <div className="servicesPage-hero">
        <div className="servicesPage-heroLeft">
          <h1>HandyMan Services!</h1>
          <p>
            We find that most people can easily make a list of at least 10 items
            around their house that they would like to repair or update. Perhaps
            your “HoneyDo” list has managed to remain a “HoneyDidn't” list. Our
            team is happy to help complete even the smallest tasks for you. From
            tightening kitchen hardware and doorknobs, to rescreening your back
            door or installing a Wall-Mounted Flat Screen TV, we have you
            covered!
          </p>
          <p>
            We guarantee to provide you with a significant value for the cost of
            your service.
          </p>
          <p>
            Our handyman service menu can be found below. If you don't see your
            task listed below, give us a call anyways! Chances are we can help.
          </p>

          <div className="validationServices">
            {validationComp.map((component) => {
              return (
                <ValidationServicesComponent
                  title={component.title}
                  subTitle={component.subTitle}
                  imgSrc={component.imgSrc}
                />
              );
            })}
          </div>
        </div>
        <div className="servicesPage-heroRight">
          <img src="../src/assets/handymanServicesHero.jpg"></img>
        </div>
      </div>
      <div className="services-allServices">
        <div>
          <h1>Full HandyMan Service Menu</h1>
          <h3>MOST POPULAR</h3>
        </div>
        <div className="services-allServicesList">
          {serviceCompLayout.map((component) => {
            return (
              <ServicePageTile
                key={component.title}
                title={component.title}
                iconName={component.iconName}
                btnPath={component.btnPath}
              />
            );
          })}
        </div>
      </div>
      <div className="services-commitment">
        <div className="services-commitmentLeft">
          <h1>Our Commitment to You:</h1>
          <h3>Values, Ethics, and Safety</h3>
          <p>
            We are a locally owned and operated company that supports our
            community. Here at Chicago Handy, our friendly, professionally
            skilled craftsmen are able to provide personalized end-to-end
            services, no matter how small the task. We provide exceptional
            workmanship and site clean-up on a complete range of Whole Home
            Services and Specialty Services.
          </p>
          <br></br>
          <p>
            Chicago Handy has your family's safety in mind during all phases of
            work being completed. We minimize our workspace to keep out of your
            way, and clean up once we're finished. The only thing left behind is
            a high quality completed project.
          </p>
          <br />
          <p>
            You could likely go through your home or office and find at least 10
            things you'd like to repair or have avoided completion long enough.
            These are just some of the things we can assist you with. We'll have
            your items crossed off in no time, giving you the freedom to get
            back to life uninterrupted by nuisances.
          </p>
        </div>
        <div className="services-commitmentRight">
          <img
            src="https://img.freepik.com/premium-vector/work-tools-poster-heart-symbol_8071-18308.jpg"
            alt="commitment image"
          ></img>
        </div>
      </div>
      <div className="projects">
        <div className="projects-left">
          <Logo />
          <pre>{`Recent Home\nRepair Work`}</pre>
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
          >
            View More!
          </Button>
        </div>
        <div className="projects-right">
          <Carousel
            swipeable={true}
            draggable={true}
            showDots={false}
            responsive={responsive}
            ssr={false} // means to render carousel on server-side.
            infinite={true}
            centerMode={false}
            autoPlay={true}
            autoPlaySpeed={3000}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container-projects"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            dotListClass="custom-dot-list-style-projects"
            itemClass="carousel-item-projects"
            partialVisible={true}
          >
            {tempGallery.map((component) => {
              return (
                <img
                  src={component.filePath}
                  style={{ maxWidth: "100%", objectFit: "cover" }}
                  alt="gallery-image"
                />
              );
            })}
          </Carousel>
        </div>
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
