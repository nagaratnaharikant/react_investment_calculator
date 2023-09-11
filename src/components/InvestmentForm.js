import React, { useState } from "react";
import "./InvestmentForm.css";

const initialUserInput = {
    currentSaving: 10000,
    yearlyContr: 1200,
    expInterest: 7,
    duration: 10,
}
export default function InvestmentForm(props) {
  const [userInput, setUserInput] = useState(initialUserInput);

  const resetHandler = () => {
    setUserInput(initialUserInput);
  };

  const inputHandler = (event) => {
    const { name, value } = event.target;
    setUserInput((prevInput) => {
      return {...prevInput, [name]:value}
    })
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onCalculate(userInput);
  }

  return (
    <>
      <form className="form" onSubmit={submitHandler}>
        <div className="input-group">
          <p>
            <label htmlFor="current-savings">Current Savings ($)</label>
            <input
              type="number"
              id="current-savings"
              name="currentSaving"
              value={userInput.currentSaving}
              onChange={inputHandler}
            />
          </p>
          <p>
            <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
            <input
              type="number"
              id="yearly-contribution"
              name="yearlyContr"
              value={userInput.yearlyContr}
              onChange={inputHandler}
            />
          </p>
        </div>
        <div className="input-group">
          <p>
            <label htmlFor="expected-return">
              Expected Interest (%, per year)
            </label>
            <input
              type="number"
              id="expected-return"
              name="expInterest"
              value={userInput.expInterest}
              onChange={inputHandler}
            />
          </p>
          <p>
            <label htmlFor="duration">Investment Duration (years)</label>
            <input
              type="number"
              id="duration"
              name="duration"
              value={userInput.duration}
              onChange={inputHandler}
            />
          </p>
        </div>
        <p className="actions">
          <button type="reset" className="buttonAlt" onClick={resetHandler}>
            Reset
          </button>
          <button type="submit" className="button">
            Calculate
          </button>
        </p>
      </form>
    </>
  );
}
