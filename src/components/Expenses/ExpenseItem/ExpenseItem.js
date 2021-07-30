import React, { useState } from "react";
import Card from "../../Common/Card/Card";
import ExpenseDate from "../ExpenseDate/ExpenseDate";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  // let title = props.title;

  const [title, setTitle] = useState(props.title);
  // we don't excute this function but only point to this button
  // otherwise this code will be executed as soon as this JSX is returned
  const clickHandler = () => {
    setTitle("Updated!");
    console.log("Clicked!!!");
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      {/* <div>{props.date.toISOString()}</div> */}
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">£{props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
};

export default ExpenseItem;
