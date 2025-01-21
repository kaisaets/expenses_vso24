import "./ExpenseForm.css";
import { Fragment, useRef, useState } from "react";
import Error from '../UI/Error';

const ExpenseForm = (props) => {
  const [error, setError] = useState(null);
  console.log(error)

  const titleInputRef = useRef();
  const priceInputRef = useRef();
  const dateInputRef = useRef();

  const errorHandler = () =>{
    setError(null)
  } 

  const submitHandler = (event) => {
    const enteredTitle = titleInputRef.current.value;
    const enteredPrice = priceInputRef.current.value;
    const enteredDate = dateInputRef.current.value;


    event.preventDefault(); 
    
    if(enteredTitle.trim().length == 0 || enteredPrice.trim().length == 0 || enteredDate.trim().length == 0){
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid title or price or date'
      })
      return
    } 
    
    const expenseData = {
      title: enteredTitle,
      price: enteredPrice,
      date: new Date(enteredDate),
    };

    setError({ title: "input error" });

    props.onSaveExpenseData(expenseData);
    props.onCancel();

    titleInputRef.current.value = "";
    priceInputRef.current.value = "";
    dateInputRef.current.value = "";
  };

  return (
    <>
      {error &&
      (<Error 
        title={error.title} 
        message={error.message}
        onConfirm={errorHandler}  
         />
        )}
      <div>
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
          <button type="cancel" onClick={props.onCancel}>Cancel</button>
        </div>
      </form>
      </div>
    </>
  );
};
export default ExpenseForm;
