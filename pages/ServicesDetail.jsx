import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { servicesPagesInfo, faqData, tempGallery } from "../utils";
import { useForm } from "react-hook-form";
import FAQTile from "../components/FAQTile";
import ValidationComponent from "../components/ValidationComponent";
import { validationComp } from "../utils";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Button from "../components/Button";
import Logo from "../src/assets/Logo";
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
        <div className="services-detail-heroLeft">
          <div className="services-detail-heroLeftInner">
            <div className="services-detail-heroFormContainer">
              <div className="services-detail-heroFormTitle">
                <h1>{data && data.heroName}</h1>
              </div>
              <div className="services-detail-heroForm">
                <form onSubmit={handleSubmit(onSubmit)}>
                  {successMsg && <p className="success-msg">{successMsg}</p>}

                  <div className="form-control">
                    <label>First Name*</label>
                    <input
                      type="text"
                      name="firstName"
                      placeholder="Your First Name"
                      {...register("firstName", {
                        required: "First Name is required.",
                      })}
                    />
                    {errors.firstName && (
                      <p className="errorMsg">{errors.firstName.message}</p>
                    )}
                  </div>

                  <div className="form-control">
                    <label>Last Name*</label>
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Your Last Name"
                      {...register("lastName", {
                        required: "Last  Name is required.",
                      })}
                    />
                    {errors.lastName && (
                      <p className="errorMsg">{errors.lastName.message}</p>
                    )}
                  </div>

                  <div className="form-control">
                    <label>Email*</label>
                    <input
                      type="text"
                      name="email"
                      placeholder="Your Email Address"
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
                    <label>Mobile Number*</label>
                    <input
                      type="tel"
                      name="phoneNumber"
                      placeholder="Your Phone Number"
                      {...register("phoneNumber", {
                        required: "Phone Number is required.",

                        pattern: {
                          value:
                            /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/,
                          message: "Phone number is not valid.",
                        },
                      })}
                    />
                    {errors.phoneNumber && (
                      <p className="errorMsg">{errors.phoneNumber.message}</p>
                    )}
                  </div>
                  <div className="form-control">
                    <label>Address*</label>
                    <input
                      type="text"
                      name="address"
                      placeholder="Your Address"
                      {...register("address", {
                        required: "Zip code is required.",
                      })}
                    />
                    {errors.address && (
                      <p className="errorMsg">{errors.address.message}</p>
                    )}
                  </div>
                  <div className="form-control">
                    <label>Unit #</label>
                    <input
                      name="UnitNumb"
                      placeholder="Unit #"
                      {...register("unitNumber", {})}
                    />
                    {errors.UnitNumb && (
                      <p className="errorMsg">{errors.UnitNumb.message}</p>
                    )}
                  </div>

                  <div className="form-control">
                    <label></label>
                    <button type="submit">Send Email</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="services-detail-heroRight">
          <img></img>
        </div>
      </div>
      <div className="services-detail-validation ">
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
      <div className="services-detail-clipPath"></div>

      <div className="services-detail-main">
        <div className="services-detail-mainLeft">
          <h2>{data ? data.mainTitle : ""}</h2>
          <p className="services-detail-paragraph">
            {data ? data.mainDescription : ""}
          </p>
        </div>
        <div className="services-detail-mainRight">
          <img src={data && data.imgSrc} alt={data && data.heroName}></img>
        </div>
      </div>

      <div className="services-detail-single-impress">
        <div className="services-detail-single-impress-qualifier">
          <h1>What it's like working with us!</h1>
          <p>
            On top of our premium craftsmanship and superior customer service,
            if anything goes wrong with what we fix within 1 year, we'll repair
            it, free of charge.
          </p>
          <Button
            linkTo="/book-a-handyman"
            background-color="blue  "
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
            marginRight="20px"
            marginTop="20px"
          >
            (214) 214-2142
          </Button>
        </div>
        <div className="services-detail-single-impress-list">
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

      <div className="services-detail-calltoaction">
        <div className="services-detail-calltoaction-logo">
          <Logo />
        </div>
        <h1>
          Ready to get started on your {data.heroName?.toLowerCase()} project?
        </h1>
        <Button
          linkTo="/book-a-handyman"
          background-color="blue  "
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
          marginRight="20px"
          marginTop="20px"
        >
          Book Now!
        </Button>
      </div>

      <div className="services-detail-faq">
        <div className="services-detail-faqHeader">
          <h1>Frequently Asked Questions</h1>
        </div>
        <div className="services-detail-faqGrid">
          {faqData.map((data) => {
            return <FAQTile question={data.question} answer={data.answer} />;
          })}
        </div>
      </div>

      <div className="services-detail-latest">
        <div className="services-detail-latestLeft">
          <h3>Check out</h3>
          <h2>Our Latest Projects!</h2>
          <button> View More</button>
        </div>
        <div className="services-detail-latestRight">
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
            containerClass="services-detail-latestRight"
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
