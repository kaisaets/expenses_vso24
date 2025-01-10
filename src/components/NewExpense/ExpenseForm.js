import { useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredPrice, setEnteredPrice] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value)
  };
  const priceChangeHandler = (event) => {
    setEnteredPrice(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };
  const submitHandler = (event) =>{
    event.preventDefault()
    const expenseData = {
      title: enteredTitle,
      price: enteredPrice,
      date: new Date (enteredDate)
    } 
    props.onSaveExpenseData(expenseData)
    props.onCancel()
    setEnteredTitle('')
    setEnteredPrice('')
    setEnteredDate('')
  } 
  
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} value = {enteredTitle}  />
        </div>
        <div className="new-expense__control">
          <label>Price</label>
          <input
            type="number"
            onChange={priceChangeHandler}
            value={enteredPrice}
            min="0.01"
            step="0.01"
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            onChange={dateChangeHandler}
            value={enteredDate}
            min="2024-11-12"
            max="2026-01-09"
          />
        </div>
      </div>
        <div className="new-expense__actions">
        <button type="submit">Add expense</button>
        <button type="cancel" onClick={props.onCancel}>Cancel</button>
      </div>
    </form>
  );
};
export default ExpenseForm;
