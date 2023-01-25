import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import closeIcon from "./images/close.svg";
import * as Yup from "yup";

export default function ExpenseTracker() {
  let [expense, setExpense] = useState();
  let [expenseList, setExpenseList] = useState([]);
  let catagoryValues = ["General", "Home", "Business", "Others"];
  let [total, setTotal] = useState(0);
  let id = Math.random();

  let formik = useFormik({
    initialValues: {
      id: "",
      title: "",
      catagory: "",
      amount: "",
    },
    onSubmit: (values) => {
      setExpense({
        id: id,
        title: values.title,
        catagory: values.catagory,
        amount: values.amount,
      });
      console.log("on submit called");
    },
    validationSchema: Yup.object({
      title: Yup.string().required("Title is Required"),
      catagory: Yup.string().required("Catagory is Required"),
      amount: Yup.number().required("Amount is Required"),
    }),
  });

  useEffect(() => {
    console.log("UseEffect called on expense change");
    if (expense) {
      let tempArr = expenseList;
      tempArr.push(expense);
      setExpenseList(tempArr);
      console.log("use Effect 1", expenseList);
      let tempTotal = 0;
      if (expenseList.length > 0) {
        expenseList.map((element) => {
          tempTotal = tempTotal + element.amount;
        });
        console.log("temp variable value", tempTotal);
        setTotal(tempTotal);
      }
    }
  }, [expense]);

  useEffect(() => {
    let tempTotal = 0;
    if (expenseList.length > 0) {
      expenseList.map((element) => {
        tempTotal = tempTotal + element.amount;
      });
      console.log("temp variable value", tempTotal);
      setTotal(tempTotal);
    } else {
      setTotal(0);
    }
  }, [expenseList]);

  function handleDelete(event) {
    setExpenseList(expenseList.filter((element) => element.id !== event.id));
  }
  return (
    <div className="mt-10 mx-auto max-w-md shadow-md">
      <form onSubmit={formik.handleSubmit} className="border max-w-md p-10">
        <h1 className="text-center text-3xl mb-5">Expense Tracker</h1>
        <div>
          <label>Expense Title :</label>
          <input
            type="text"
            id="title"
            value={formik.title}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            name="title"
            className="border ml-2"
          />
          {formik.touched.title && formik.errors.title && (
            <span className="text-red-500 block text-center">
              {formik.errors.title}
            </span>
          )}
        </div>
        <div className="mt-2">
          <label>Expense Catagory : </label>
          <select
            className="border"
            name="catagory"
            id="catagory"
            value={formik.catagory}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          >
            <option value="">Please select catagory</option>
            {catagoryValues.map((catagory, index) => (
              <option key={index} value={catagory}>
                {catagory}
              </option>
            ))}
          </select>
          {formik.touched.catagory && formik.errors.catagory && (
            <span className="text-red-500 block text-center">
              {formik.errors.catagory}
            </span>
          )}
        </div>
        <div className="mt-2">
          <label>Amount : </label>
          <input
            type="number"
            id="amount"
            value={formik.amount}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            name="amount"
            className="border ml-2"
          />
          {formik.touched.amount && formik.errors.amount && (
            <span className="text-red-500 block text-center">
              {formik.errors.amount}
            </span>
          )}
        </div>
        <div className="text-center">
          <button type="submit" className="border bg-blue-500 mt-5  px-4">
            Submit
          </button>
        </div>
      </form>
      <div className="border max-w-md p-10">
        {expenseList.map((item) => {
          return (
            <div key={item.id} className="flex flex-col">
              <span className="flex">
                <div className="flex text-2xl">
                  <span>
                    {item.title} ( {item.catagory}) {item.amount}
                  </span>
                  <button
                    onClick={() => {
                      handleDelete(item);
                    }}
                  >
                    <img src={closeIcon} width="20px" className="ml-3" />
                  </button>
                </div>
              </span>
            </div>
          );
        })}
      </div>
      <div className="text-3xl text-center">{<span>Total: {total}</span>}</div>
    </div>
  );
}
