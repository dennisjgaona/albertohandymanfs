import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { servicesPagesInfo } from "../utils";
import { useForm } from "react-hook-form";

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
    </>
  );
}
