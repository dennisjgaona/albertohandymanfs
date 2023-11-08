import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
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
      <div>
        <h1>This is the contact page!</h1>
      </div>
      <div className="services-detail-hero">
        <div>
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
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
