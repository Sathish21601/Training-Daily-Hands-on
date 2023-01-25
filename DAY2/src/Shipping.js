import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import './index.css';
import FormikForm from "./FormikForm";

export default function Shipping() {
  const state = ["Tamil Nadu", "Kerala", "Hyderabad", "Mumbai", "Delhi"];
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      addressLine1: "",
      addressLine2: "",
      zipCode: "",
      state: "",
      city: "",
      phoneNumber: "",
    },
    onSubmit: function (values) {
      console.log(values);
      console.log(FormikForm.initialValues);
      formik.resetForm();
    },
    validationSchema: yup.object({
      firstName: yup.string().required("Please enter a first name"),
      lastName: yup.string().required("Please enter a last name"),
      addressLine1: yup.string().required("Please enter address"),
      addressLine2: yup.string(),
      zipCode: yup.string().required("Please enter zipCode"),
      state: yup.string().required("Please choose 1 state"),
      city: yup.string().required("Please enter a city"),
      phoneNumber: yup.string().required("Please enter a phone number"),
    }),
  });
  return (
    <div>
      <h1 className="text-2xl">Shipping</h1>
      <h2 className="text-xl border-b-[3px]">Shipping Address</h2>
      <form
        className={`shadow-md rounded px-8 pt-6 pb-8 mb-4 ${
          formik.errors.firstName && formik.touched.firstName
            ? "border-red-400"
            : "border-blue-400"
        }`}
        onSubmit={formik.handleSubmit}
      >
        <div className="mb-4">
          <label>First Name</label>
          <input
            onChange={formik.handleChange}
            value={formik.values.firstName}
            onBlur={formik.handleBlur}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="firstName"
            id="firstName"
          />
          <span className="text-red-500 text-sm">
            {formik.errors.firstName &&
              formik.touched.firstName &&
              formik.errors.firstName}
          </span>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Last Name
          </label>
          <input
            onChange={formik.handleChange}
            value={formik.values.lastName}
            onBlur={formik.handleBlur}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="lastName"
            id="lastName"
          />
          <span className="text-red-500 text-sm">
            {formik.errors.lastName &&
              formik.touched.lastName &&
              formik.errors.lastName}
          </span>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Address Line 1
          </label>
          <input
            onChange={formik.handleChange}
            value={formik.values.address1}
            onBlur={formik.handleBlur}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="address1"
            id="address1"
          />
          <span className="text-red-500 text-sm">
            {formik.errors.address1 &&
              formik.touched.address1 &&
              formik.errors.address1}
          </span>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Address Line 2(optional)
          </label>
          <input
            onChange={formik.handleChange}
            value={formik.values.address2}
            onBlur={formik.handleBlur}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="address2"
            id="address2"
          />
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div className="mb-2">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Zip code
            </label>
            <input
              onChange={formik.handleChange}
              value={formik.values.zipCode}
              onBlur={formik.handleBlur}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="number"
              name="zipCode"
              id="zipCode"
            />
            <span className="text-red-500 text-sm">
              {formik.errors.zipCode &&
                formik.touched.zipCode &&
                formik.errors.zipCode}
            </span>
          </div>
          <div className="mb-2">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              State
            </label>
            <select
              onChange={formik.handleChange}
              value={formik.values.state}
              onBlur={formik.handleBlur}
              className="shadow border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
              name="state"
              id="state"
            >
              {state.map((e, i) => {
                return (
                  <option key={i} value={e}>
                    {e}
                  </option>
                );
              })}
            </select>
            <input
              onChange={formik.handleChange}
              value={formik.values.state}
              onBlur={formik.handleBlur}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="state"
              id="state"
            />
            <span className="text-red-500 text-sm">
              {formik.errors.state &&
                formik.touched.state &&
                formik.errors.state}
            </span>
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            City
          </label>
          <input
            onChange={formik.handleChange}
            value={formik.values.city}
            onBlur={formik.handleBlur}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="city"
            id="city"
          />
          <span className="text-red-500 text-sm">
            {formik.errors.city && formik.touched.city && formik.errors.city}
          </span>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Phone Number
          </label>
          <input
            onChange={formik.handleChange}
            value={formik.values.phoneNumber}
            onBlur={formik.handleBlur}
            id="phoneNumber"
            name="phoneNumber"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="number"
          />
          <span className="text-red-500 text-sm">
            {formik.errors.phoneNumber &&
              formik.touched.phoneNumber &&
              formik.errors.phoneNumber}
          </span>
        </div>
        <div className="mb-4">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
