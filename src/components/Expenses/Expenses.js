import ExpenseItem from "./ExpenseItem/ExpenseItem";
import ExpenseFilter from "./ExpenseFilter/ExpenseFilter";
import "./Expenses.css";

const Expenses = (props) => {
  console.log("Expenses", props);
  return (
    <div className="expenses">
      {/* <ExpenseFilter /> */}
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
