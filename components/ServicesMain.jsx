import React from "react";
import { serviceCompLayout, tempGallery } from "../utils";
//import { Outlet } from "react-router-dom";
import ServicePageTile from "./ServicePageTile";
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
        <h1>HandyMan Services!</h1>
        <p>
          We find that most people can easily make a list of at least 10 items
          around their house that they would like to repair or update. Perhaps
          your “HoneyDew” list has managed to remain a “HoneyDidn't” list. The
          Chicago Handy team is happy to help complete even the smallest tasks
          for you. From tightening kitchen hardware and doorknobs, to
          rescreening your back door or installing a Wall-Mounted Flat Screen
          TV, we have you covered! We guarantee to provide you with a
          significant value for the cost of your service. Our handyman service
          menu can be found below. If you don't see your task listed below, give
          us a call anyways! Chances are we can help.
        </p>
        <ul>
          <li>
            <h4>10+ Years</h4>
            <p>In Business</p>
            <div>
              <p>image will go here! </p>
            </div>
          </li>
          <li>
            <h4>6000+</h4>
            <p>Jobs Completed</p>
            <div>
              <p>image will go here! </p>
            </div>
          </li>
          <li>
            <h4>100's of Reviews</h4>
            <p>From Satisfied Customers</p>
            <div>
              <p>image will go here! </p>
            </div>
          </li>
        </ul>
      </div>
      <div className="services-allServices">
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
      <div>
        <div>
          <h2>Our Commitment to You:</h2>
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
        <div>
          <img
            src="https://img.freepik.com/premium-vector/work-tools-poster-heart-symbol_8071-18308.jpg"
            alt="commitment image"
          ></img>
        </div>
      </div>
      <div>
        <div>
          <h3>Check out</h3>
          <h2>Our Latest Projects!</h2>
          <button> View More</button>
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
      </div>
    </>
  );
}
