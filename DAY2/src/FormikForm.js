import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./index.css";
export default function FormikForm() {
  const professions = ["Developer", "Designer", "DevOps", "Project Manager"];

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      profession: "",
      age: "",
      password:"",
      confirmPassword: ""
    },

    onSubmit: function (values) {
      console.log(values);
      formik.resetForm();
    },

    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string()
        .email("Email is not in proper format")
        .required("Email is required"),
      age: Yup.number()
        .required("Age is required")
        .min(15, "Minimun age should be 15 years"),
      profession: Yup.string().required("Profession is needed").oneOf(professions, "The profession you choose does not exists"),
      password: Yup.string()
        .required("Enter a secure password")
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
          "Must Contain 8 Characters, One UpperCase, One LowerCase, One Number and One Special Case Character"
        ),
        confirmPassword: Yup.string().required().oneOf([Yup.ref('password'),null],'Passwords Does not match')
    }),
    validateOnChange:true
  });

  return (
    <div className="bg-gray-100 min-h-screen w-full pt-16">
      <form
        className="max-w-md bg-white mx-auto shadow-md rounded-md p-6"
        onSubmit={formik.handleSubmit}
      >
        <div className="mb-4 flex flex-col">
          <label className="text-sm">Full Name</label>
          <input
            className="border h-8 rounded-md mt-1 focus:outline-none px-3"
            type="text"
            name="name"
            id="name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
          />
          {formik.touched.name && formik.errors.name && (
            <span className="text-red-500 text-sm">{formik.errors.name}</span>
          )}
        </div>
        <div className="mb-4 flex flex-col">
          <label className="text-sm">Email</label>
          <input
            className="border h-8 rounded-md mt-1 focus:outline-none px-3"
            type="email"
            name="email"
            id="email"
            onChange={(e)=>{formik.handleChange(e);formik.handleBlur(e)}}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email && (
            <span className="text-red-500 text-sm">{formik.errors.email}</span>
          )}
        </div>
        <div className="mb-4 flex flex-col">
          <label className="text-sm">Age</label>
          <input
            className="border h-8 rounded-md mt-1 focus:outline-none px-3"
            type="number"
            name="age"
            id="age"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.age}
          />
          {formik.touched.age && formik.errors.age && (
            <span className="text-red-500 text-sm">{formik.errors.age}</span>
          )}
        </div>
        <div className="mb-4 flex flex-col">
        <label className="text-sm">Password:</label>
        <input
        className="border h-8 rounded-md mt-1 focus:outline-none px-3"
          type="password"
          name="password"
          id="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
        />
        {formik.touched.password && formik.errors.password && (
          <span className="text-red-500 text-sm">{formik.errors.password}</span>
        )}
      </div>
        <div className="mb-4 flex flex-col">
        <label className="text-sm">Confirm Password:</label>
        <input
        className="border h-8 rounded-md mt-1 focus:outline-none px-3"
          type="password"
          name="confirmPassword"
          id="confirmPassword"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.confirmPassword}
        />
        {formik.touched.confirmPassword && formik.errors.confirmPassword && (
          <span className="text-red-500 text-sm">{formik.errors.confirmPassword}</span>
        )}
      </div>
        <div className="mb-4 flex flex-col">
          <label className="text-sm">Profession</label>
          <select
            className="border h-8 rounded-md mt-1 focus:outline-none px-3"
            name="profession"
            id="profession"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.profession}
          >
            <option value="">Please select a option</option>
            {professions.map((profession, index) => {
              return (
                <option key={index} value={profession}>
                  {profession}
                </option>
              );
            })}
          </select>
          {formik.touched.profession && formik.errors.profession && (
            <span className="text-red-500">{formik.errors.profession}</span>
          )}
        </div>

        <div className="text-center">
          <button
            className="bg-green-500 px-6 text-white py-1 rounded-md shadow-md hover:shadow-xl hover:bg-green-600 hover:-translate-y-1 focus:translate-y-1 transition-all"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
