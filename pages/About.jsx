import React from "react";
import { validationComp } from "../utils";
import ValidationComponent from "../components/ValidationComponent";

export default function About() {
  return (
    <>
      <div>
        <div>
          <h1>About Alberto's HandyMan Co.</h1>
        </div>
        <div>
          <div>
            <h2>My Name is</h2>
            <h3>Alberto LastName</h3>
            <h4>I am the founder of Alberto's Handyman Co.</h4>
            <br></br>
            <p>
              We aren't a mega shop with locations in 100 cities. We're a local
              company that only hires locally. Founding Chicago Handy is a
              personal dream I have aspired to achieve for nearly a decade. To
              make it here, I had to study, improve, and master my craft before
              I could establish myself in Chicago. We've been in business for
              almost 10 years now.
            </p>
            <br></br>
            <p>
              I am a hard-working tradesman originally from Suwalki, Poland. I
              started my handyman career early, learning the basics working at
              my uncle's development company. He taught me everything from how
              to read a tape measure to professionally painting, installing
              drywall and doing kitchen and bathroom remodeling. I picked up
              skills from him passed down through several generations. Using
              that foundation, I have continued to develop my skills by using
              more modern techniques, familiarizing myself with new materials,
              and using more advanced tools.
            </p>
            <br></br>
            <p>
              I'm a family man with roots in the community. I live in the
              Bucktown neighborhood of Chicago with my wife and new-born son. We
              believe in having a strong community, moral values, good ethics,
              and safety. We won't jeopardize our integrity by performing
              sub-standard work for our customers. We provide personalized and
              professional services by people you can trust.
            </p>
            <br></br>
            <p>
              My technicians and I have skills and capabilities that meet or
              exceed compliance requirements of local and state regulations,
              trade certifications, apprenticeships, and permits.
            </p>
          </div>
          <div>
            <img
              src="https://schaferbr.com/wp-content/uploads/2016/09/shutterstock_54654790.jpg"
              alt="Alberto's Image Goes Here"
            ></img>
          </div>
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
      <div>
        <h1>Ready to get started on your project?</h1>
        <h3>Schedule your FREE consultation</h3>
        <button>Book Now!</button>
      </div>
    </>
  );
}
