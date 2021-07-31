import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  // managing states individually
  // const [enteredTitie, setEnteredTitie] = useState("");
  // const [enteredAmount, setEnteredAmount] = useState("");
  // const [enteredDate, setEnteredDate] = useState("");

  const [userInput, setUserInput] = useState({
    enteredTitie: "",
    enteredAmount: "",
    enteredDate: "",
  });

  // document.getElementById("").addEventListener("click", (event) => {});
  const titleChangeHandler = (event) => {
    // managing states individually
    // setEnteredTitie(event.target.value);
    // managing states together
    // setUserInput({
    //   ...userInput,
    //   enteredTitie: event.target.value,
    // });
    // managing states together with previous for gauranteed latest update
    setUserInput((prevState) => {
      return {
        ...prevState,
        enteredTitie: event.target.value,
      };
    });
  };

  const amountChangeHandler = (event) => {
    // managing states individually
    // setEnteredAmount(event.target.value);
    // managing states together
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value,
    // });
    setUserInput((prevState) => {
      return {
        ...prevState,
        enteredAmount: event.target.value,
      };
    });
  };
  const dateChangeHandler = (event) => {
    // managing states individually
    // setEnteredDate(event.target.value);
    // managing states together
    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value,
    // });
    setUserInput((prevState) => {
      return {
        ...prevState,
        enteredDate: event.target.value,
      };
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseDate = userInput;
    setUserInput({
      enteredTitie: "",
      enteredAmount: "",
      enteredDate: "",
    });
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={userInput.enteredTitie}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={userInput.enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={userInput.enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
