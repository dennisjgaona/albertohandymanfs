import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { servicesPagesInfo, faqData, tempGallery } from "../utils";
import { useForm } from "react-hook-form";
import FAQTile from "../components/FAQTile";

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

export default function ServicesDetail() {
  const [data, setData] = useState({});
  const [successMsg, setSuccessMsg] = useState("");

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    setSuccessMsg("Email was successfully sent!");
    reset();
  };

  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    setData(servicesPagesInfo.find((obj) => obj.id === id));
  }, []);

  return (
    <>
      <div className="services-detail-hero">
        <div>
          <h1>{data && data.heroName}</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            {successMsg && <p className="success-msg">{successMsg}</p>}

            <div className="form-control">
              <label>First Name</label>
              <input
                type="text"
                name="firstName"
                {...register("firstName", {
                  required: "First Name is required.",
                })}
              />
              {errors.firstName && (
                <p className="errorMsg">{errors.firstName.message}</p>
              )}
            </div>

            <div className="form-control">
              <label>Last Name</label>
              <input
                type="text"
                name="lastName"
                {...register("lastName", {
                  required: "Last  Name is required.",
                })}
              />
              {errors.lastName && (
                <p className="errorMsg">{errors.lastName.message}</p>
              )}
            </div>

            <div className="form-control">
              <label>City</label>
              <input
                type="text"
                name="city"
                {...register("city", {
                  required: "City is required.",
                })}
              />
              {errors.city && <p className="errorMsg">{errors.city.message}</p>}
            </div>

            <div className="form-control">
              <label>Zip</label>
              <input
                type="text"
                name="zip"
                {...register("zip", {
                  required: "Zip code is required.",
                })}
              />
              {errors.zip && <p className="errorMsg">{errors.zip.message}</p>}
            </div>

            <div className="form-control">
              <label>Address</label>
              <input
                type="text"
                name="address"
                {...register("address", {
                  required: "Zip code is required.",
                })}
              />
              {errors.address && (
                <p className="errorMsg">{errors.address.message}</p>
              )}
            </div>

            <div className="form-control">
              <label>Email</label>
              <input
                type="text"
                name="email"
                {...register("email", {
                  required: "Email is required.",
                  pattern: {
                    value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                    message: "Email is not valid.",
                  },
                })}
              />
              {errors.email && (
                <p className="errorMsg">{errors.email.message}</p>
              )}
            </div>

            <div className="form-control">
              <label>Mobile Number</label>
              <input
                type="tel"
                name="phoneNumber"
                {...register("phoneNumber", {
                  required: "Phone Number is required.",

                  pattern: {
                    value: /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/,
                    message: "Phone number is not valid.",
                  },
                })}
              />
              {errors.phoneNumber && (
                <p className="errorMsg">{errors.phoneNumber.message}</p>
              )}
            </div>

            <div className="form-control">
              <label>Description</label>
              <textarea
                name="description"
                placeholder="Enter any details about the required job..."
                rows={10}
                {...register("description", {
                  maxLength: {
                    value: 100,
                    message: "Description cannot be longer than 100 characters",
                  },
                })}
              />
              {errors.description && (
                <p className="errorMsg">{errors.description.message}</p>
              )}
            </div>

            <div className="form-control">
              <label></label>
              <button type="submit">Login</button>
            </div>
          </form>
        </div>
      </div>
      <div>
        <h2>{data ? data.mainTitle : ""}</h2>
        <p className="services-detail-paragraph">
          {data ? data.mainDescription : ""}
        </p>
        <img src={data && data.imgSrc} alt={data && data.heroName}></img>
      </div>

      <div className="services-detail-impress">
        <div className="services-detail-impress-qualifier">
          <h1>What it's like working with us!</h1>
          <p>
            On top of our premium craftsmanship and superior customer service,
            if anything goes wrong with what we fix within 1 year, we'll repair
            it, free of charge.
          </p>
        </div>
        <div className="services-detail-impress-list">
          <ul>
            <li>
              <h3>High Quality</h3>
              <p>
                We don't just slap some paint on the wall and call it done.
                We've got our painting down to a science, leaving you with an
                even, high quality coat.
              </p>
            </li>
            <li>
              <h3>Thorough</h3>
              <p>
                We want to make sure you love the results. That's why we'll go
                the extra mile to repair any minor damage, and find the root of
                your damage problem, BEFORE we start painting, giving your
                project a smooth finish.
              </p>
            </li>
            <li>
              <h3>Reliable</h3>
              <p>
                Ever set up a project with a handyman or other contractor and
                have them cancel or not show up? At Alberto's HandyMan Co., we
                stick to our word, show up, and get the job done right.
              </p>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <img src="" alt="logo" />
        <h1>
          Ready to get started on your {data.heroName?.toLowerCase()} project?
        </h1>
        <button>Book Now!</button>
      </div>

      <div>
        <h1>Frequently Asked Questions</h1>
        {faqData.map((data) => {
          return <FAQTile question={data.question} answer={data.answer} />;
        })}
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
