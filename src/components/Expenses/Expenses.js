import ExpenseItem from "./ExpenseItem/ExpenseItem";
import "./Expenses.css";

const Expenses = (props) => {
  return (
    <div className="expenses">
      {props.expenses.map((item) => (
        <ExpenseItem
          key={item.id}
          title={item.title}
          amount={item.amount}
          date={item.date}
        />
      ))}
    </div>
  );
};

export default Expenses;
