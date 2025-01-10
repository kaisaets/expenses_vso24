import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpenseFilter";
import { useState } from "react";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2025");
  const yearChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.expenses.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear
  } )


  return (
    <Card className="expenses">
      <ExpensesFilter onChangeYear={yearChangeHandler} />
      {
        filteredExpenses.map((expense) => {
          return <ExpenseItem data={expense} key={expense.id} />;
        })
      }
    </Card>
  );
};
export default Expenses;
