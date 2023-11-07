import React from "react";
import { FaSquareFacebook } from "react-icons/fa6";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <>
      <div>
        <img src="" alt="logo" />
        <h3>Alberto's HandyMan Service</h3>
        <p>2749 Overcrest St</p>
        <p>Dallas, Texas 75211</p>
        <p>albertog@gmail.com</p>
        <button>Book a handyman</button>
        <button>{`(214)214-2142`}</button>
      </div>
      <div>
        <h3>Reviews</h3>
        <div>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Google_Name.svg/804px-Google_Name.svg.png"
            alt="google review"
          />
        </div>
        <div>
          <img
            src="https://assets.stickpng.com/images/602e68427b5b5700048a4ab2.png"
            alt="nextdoor review"
          />
        </div>
        <h5>Follow Us</h5>
        <ul style={{ listStyleType: "none" }}>
          <li>
            <FaSquareFacebook />
          </li>
          .
          <li>
            <img
              src="https://cdn.osxdaily.com/wp-content/uploads/2023/03/nextdoor-icon-610x610.png"
              alt="nextdoor icon"
              width={50}
            />
          </li>
        </ul>
      </div>
      <div>
        <h4>Explore</h4>
        <Link to={"/"}>Home</Link>
        <Link to={"/services"}>Home</Link>
        <Link to={"/projects"}>Projects</Link>
        <Link to={"/about"}>About</Link>
      </div>
      <div>
        <h4>HandyMan Services</h4>
        <Link to={"/services/painting-drywall"}>Painting & Drywall</Link>
        <Link to={"/services/caulking-grout"}>Caulking & Grout</Link>
        <Link to={"/services/tile-backsplash"}>Tile & Backsplashes</Link>
        <Link to={"/services/doors-locks"}>Doors & Locks</Link>
        <Link to={"/services/plumbing"}>Plumbing</Link>
        <Link to={"/services"}>See All</Link>
      </div>
      <footer>
        Copyright &#169; 2023 Alberts HandyMan, All Rights Reserved
      </footer>
    </>
  );
}
