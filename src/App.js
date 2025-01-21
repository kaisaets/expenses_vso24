import { useEffect, useState } from "react";
import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DYMMY_EXPENSES = [
  {
    id: Math.random().toString(),
    date: new Date(2025, 10, 22),
    title: "New book",
    price: 39.99,
  },
  {
    id: Math.random().toString(),
    date: new Date(2024, 10, 22),
    title: "New bag",
    price: 99.99,
  },
  {
    id: Math.random().toString(),
    date: new Date(2025, 10, 22),
    title: "New jeans",
    price: 99.99,
  },  
];

const App = () => {
  const[expenses, setExpenses] = useState(() => {
    const expenseFromLS = JSON.parse(localStorage.getItem('expenses'))
    return expenseFromLS||[]  
  } )


  useEffect (() =>{
    localStorage.setItem('expenses', JSON.stringify(expenses))
} ,[expenses])

  const addExpenseHandler = (expense) => {
    console.log(expense);
    setExpenses((previousExpenses) => {
      return [expense, ...previousExpenses] 
    } )
  };
  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
};

export default App;
