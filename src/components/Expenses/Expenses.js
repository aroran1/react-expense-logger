import { useState } from "react";
import Card from "../Common/Card/Card";
import ExpenseItem from "./ExpenseItem/ExpenseItem";
import ExpenseFilter from "./ExpenseFilter/ExpenseFilter";
import "./Expenses.css";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2021");
  const filteredChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpense =
    filteredYear === "All"
      ? props.expenses
      : props.expenses.filter(
          (expense) => expense.date.getFullYear().toString() === filteredYear
        );

  let expenseContent = <p>No expenses found.</p>;
  if (filteredExpense.length > 0) {
    expenseContent = filteredExpense.map((item) => (
      <ExpenseItem
        key={item.id}
        title={item.title}
        amount={item.amount}
        date={item.date}
      />
    ));
  }
  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={filteredYear}
        onChangeFilter={filteredChangeHandler}
      />
      {expenseContent}
      {/* {filteredExpense.length === 0 ? (
        <p>No expenses found.</p>
      ) : (
        filteredExpense.map((item) => (
          <ExpenseItem
            key={item.id}
            title={item.title}
            amount={item.amount}
            date={item.date}
          />
        ))
      )} */}
      {/* {filteredExpense.length === 0 && <p>No expenses found.</p>}
      {filteredExpense.length > 0 &&
        filteredExpense.map((item) => (
          <ExpenseItem
            key={item.id}
            title={item.title}
            amount={item.amount}
            date={item.date}
          />
        ))} */}
    </Card>
  );
};

export default Expenses;
