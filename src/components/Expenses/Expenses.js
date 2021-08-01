import { useState } from "react";
import Card from "../Common/Card/Card";
import ExpenseList from "./ExpenseList/ExpenseList";
import ExpenseFilter from "./ExpenseFilter/ExpenseFilter";
import ExpensesChart from "./ExpensesChart/ExpensesChart";
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

  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={filteredYear}
        onChangeFilter={filteredChangeHandler}
      />
      <ExpensesChart expenses={filteredExpense} />
      <ExpenseList items={filteredExpense} />
    </Card>
  );
};

export default Expenses;
