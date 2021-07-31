import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm/ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [isEdiing, setIsEdiing] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseDetails) => {
    const expenseData = {
      ...enteredExpenseDetails,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setIsEdiing(false);
  };

  const startEditingHandler = () => {
    setIsEdiing(true);
  };
  const stopEditingHandler = () => {
    setIsEdiing(false);
  };

  return (
    <div className="new-expense">
      {!isEdiing && (
        <button type="button" onClick={startEditingHandler}>
          Add New Expense
        </button>
      )}
      {isEdiing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
