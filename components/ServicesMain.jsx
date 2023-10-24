import React from "react";
import { serviceCompLayout } from "../utils";
//import { Outlet } from "react-router-dom";
import ServicePageTile from "./ServicePageTile";
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
    </>
  );
}
