import { useRef, useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = (props) => {
 
  const titleInputRef = useRef();
  const priceInputRef = useRef();
  const dateInputRef = useRef();

  console.log(titleInputRef)

    const submitHandler = (event) => {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value
    const enteredPrice = priceInputRef.current.value
    const enteredDate = dateInputRef.current.value

    const expenseData = {
      title: enteredTitle,
      price: enteredPrice,
      date: new Date(enteredDate),
    };
    props.onSaveExpenseData(expenseData);
    props.onCancel();

    titleInputRef.current.value = ''
    priceInputRef.current.value = ''
    dateInputRef.current.value = ''

    };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" ref={titleInputRef} />
        </div>
        <div className="new-expense__control">
          <label>Price</label>
          <input type="number" ref={priceInputRef} min="0.01" step="0.01" />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            ref={dateInputRef}
            min="2024-11-12"
            max="2026-01-09"
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add expense</button>
        <button type="cancel" onClick={props.onCancel}>
          Cancel
        </button>
      </div>
    </form>
  );
};
export default ExpenseForm;
