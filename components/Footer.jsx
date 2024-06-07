import React, { useState } from "react";
import { FaSquareFacebook } from "react-icons/fa6";

import Logo from "../src/assets/Logo";
import Button from "/components/Button";
import { IconContext } from "react-icons";
import CustomLink from "./CustomLink";
export default function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footer-col1">
          <div className="footer-col1-svg">
            <Logo />
          </div>
          <h3
            style={{
              fontSize: "xx-large",
              color: "#1c6b88",
              fontWeight: "700",
              lineHeight: "1",
              alignSelf: "start",
              marginTop: "40px",
            }}
          >
            Alberto's HandyMan Service
          </h3>
          <p>2749 Overcrest St</p>
          <p>Dallas, Texas 75211</p>
          <p>alberthandymancog@gmail.com</p>
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
            width="auto"
            height="60px"
            borderRadius="12px"
            marginRight="20px"
            marginTop="20px"
          >
            Book a handyman
          </Button>
          <Button
            linkTo="/book-a-handyman"
            border="3px solid coral"
            display="flex"
            color="black"
            flexDirection="column"
            justifyContent="center"
            fontSize="16px"
            textAlign="center"
            width="auto"
            height="60px"
            borderRadius="12px"
            marginRight="20px"
            marginTop="20px"
            marginBottom="20px"
          >{`(469)544-0932`}</Button>
        </div>
        <div className="footer-col2">
          <h3
            style={{
              fontSize: "xx-large",
              color: "#1c6b88",
              fontWeight: "700",
              lineHeight: "1",
              margin: "0",
              alignSelf: "start",
              paddingBottom: "30px",
            }}
          >
            Reviews
          </h3>
          <div style={{ marginBottom: "20px" }}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Google_Name.svg/804px-Google_Name.svg.png"
              alt="google review"
              width={100}
            />
          </div>
          <div style={{ marginBottom: "20px" }}>
            <img
              src="../public/webImages/nextdoor.png"
              alt="nextdoor review"
              width={100}
            />
          </div>
          <h5
            style={{
              fontSize: "x-large",
              color: "#black",
              fontWeight: "600",
              lineHeight: "1",
              margin: "0",
              height: "100%",
              alignSelf: "start",
              paddingBottom: "5px",
            }}
          >
            Follow Us
          </h5>
          <div style={{ display: "flex" }}>
            <IconContext.Provider
              value={{
                size: "30px",
                height: "auto",
                color: "#1877F2",
              }}
            >
              <div style={{ marginRight: "10px" }}>
                <FaSquareFacebook />
              </div>
            </IconContext.Provider>

            <img
              src="../public/webImages/nextdooricon.png"
              alt="nextdoor icon"
              style={{ width: "30px", height: "30px" }}
            />
          </div>
        </div>
        <div className="footer-col3">
          <h4
            style={{
              fontSize: "xx-large",
              color: "#1c6b88",
              fontWeight: "700",
              lineHeight: "1",
              margin: "0",
              alignSelf: "start",
              paddingBottom: "20px",
            }}
          >
            Explore
          </h4>
          <CustomLink color="#fc5130" locationTo="Home &#129122;" pathTo="/" />
          <CustomLink
            color="#fc5130"
            locationTo="Services &#129122;"
            pathTo="/services"
          />
          <CustomLink
            color="#fc5130"
            locationTo="Projects &#129122;"
            pathTo="/projects"
          />
          <CustomLink
            color="#fc5130"
            locationTo="About &#129122;"
            pathTo="/about"
          />
        </div>
        <div className="footer-col4">
          <h4
            style={{
              fontSize: "xx-large",
              color: "#1c6b88",
              fontWeight: "700",
              lineHeight: "1",
              margin: "0",
              alignSelf: "start",
              paddingBottom: "19px",
            }}
          >
            Services
          </h4>
          <CustomLink
            color="#fc5130"
            locationTo="Painting & Drywall &#129122;"
            pathTo="/services/painting-drywall"
          />

          <CustomLink
            color="#fc5130"
            locationTo="Caulking & Grout &#129122;"
            pathTo="/services/caulking-grout"
          />

          <CustomLink
            color="#fc5130"
            locationTo="Tile & Backsplashes &#129122;"
            pathTo="/services/tile-backsplash"
          />

          <CustomLink
            color="#fc5130"
            locationTo="Doors & Locks &#129122;"
            pathTo="/services/doors-locks"
          />
          <CustomLink
            color="#fc5130"
            locationTo="Plumbing &#129122;"
            pathTo="/services/plumbing"
          />
          <CustomLink
            color="#fc5130"
            locationTo="See All &#129122;"
            pathTo="/services"
          />
        </div>
      </div>
      <footer>
        Copyright &#169; 2023 Alberts HandyMan, All Rights Reserved
      </footer>
    </>
  );
}
