import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import DatePicker from "react-datepicker";
import Logo from "../src/assets/Logo";
import "react-datepicker/dist/react-datepicker.css";

import Button from "../components/Button";

export default function Contact() {
  const [successMsg, setSuccessMsg] = useState("");
  const [date, setDate] = useState(new Date(Date.now()));
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
    setValue,
    control,
  } = useForm();

  const handleChange = (dateChange) => {
    setValue("dateOfBirth", dateChange, {
      shouldDirty: true,
    });
    setDate(dateChange);
  };

  const onSubmit = (data) => {
    console.log(data);
    setSuccessMsg("Email was successfully sent!");
    reset();
  };
  console.log(errors);
  return (
    <>
      <div className="contact-title">
        <div className="contact-title-logo">
          <Logo />
        </div>

        <h1>Book a HandyMan!</h1>
      </div>

      <div className="contact-form-container">
        <div className="contact-form">
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
              <label>Description</label>
              <textarea
                name="description"
                placeholder="Tell us about your project"
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

            <div>
              <label>How urgent do you need us?</label>
              <select {...register("category", { required: false })}>
                <option value="">Select...</option>
                <option value="A">Within 24 Hours</option>
                <option value="B">Within 24-72 Hours</option>
                <option value="B">Within the next week</option>
                <option value="B">1 week or later</option>
              </select>
            </div>
            <div>
              <label>What works best for your schedule? </label>
              <Controller
                name="dateOfBirth"
                control={control}
                defaultValue={date}
                render={() => (
                  <DatePicker
                    selected={date}
                    placeholderText="Select date"
                    onChange={handleChange}
                  />
                )}
              />
            </div>
            <div className="form-control">
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
                type="submit"
              >
                Submit
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

// <div className="services-detail-heroForm">
//   <form onSubmit={handleSubmit(onSubmit)}>
//     {successMsg && <p className="success-msg">{successMsg}</p>}

//     <div className="form-control">
//       <label></label>
//       <button type="submit">Send Email</button>
//     </div>
//   </form>
// </div>;
