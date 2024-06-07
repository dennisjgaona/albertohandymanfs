import React from "react";
import { validationComp } from "../utils";
import ValidationComponent from "../components/ValidationComponent";
import Button from "../components/Button";
import Logo from "../src/assets/Logo";

export default function About() {
  return (
    <>
      <div className="about">
        <div className="about-title">
          <div className="about-title-logo">
            <Logo />
          </div>

          <h1>About Alberto's HandyMan Co.</h1>
        </div>
        <div className="about-description-main">
          <div className="about-description-letters">
            <h2 style={{ fontSize: "1.5rem", margin: "0" }}>My Name is</h2>
            <h3
              style={{ fontSize: "2.5rem", fontWeight: "bolder", margin: "0" }}
            >
              Alberto Martinez
            </h3>
            <h4 style={{ fontSize: "1rem", fontWeight: "bold", margin: "0" }}>
              I am the founder of Alberto's Handyman Co.
            </h4>
            <br></br>
            <p>
              We aren't a mega shop with locations in 100 cities. We're a local
              company that only hires locally. Founding Alberto's Handyman Co.
              is a personal dream I have aspired to achieve for nearly a decade.
              To make it here, I had to study, improve, and master my craft
              before I could establish myself in Dallas. We've been in business
              for almost 3 years now.
            </p>
            <br></br>
            <p>
              I am a hard-working tradesman originally from Mexico. I started my
              handyman career early, learning the basics working at my father's
              development company. He taught me everything from how to read a
              tape measure to professionally painting, installing drywall and
              doing kitchen and bathroom remodeling. I picked up skills from him
              passed down through several generations. Using that foundation, I
              have continued to develop my skills by using more modern
              techniques, familiarizing myself with new materials, and using
              more advanced tools. After a 10 year stint in the construction
              industry I decided to use all of my learned knowledge to start
              Alberto's Handyman Co.
            </p>
            <br></br>
            <p>
              I'm a family man with roots in the community. I live in south
              Dallas in the OakCliff area with my wife and new-born daughter. We
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
          <div className="about-description-image">
            <img
              src="/gallery/gallery_light_lampReplace_before_1.jpeg"
              alt="Alberto's Image Goes Here"
            ></img>
          </div>
        </div>
      </div>
      <div className="validation-about">
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
      <div className="calltoaction-about">
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
