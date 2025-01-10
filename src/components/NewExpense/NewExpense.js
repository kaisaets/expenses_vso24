import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import './NewExpense.css';

const NewExpense = (props) => {
 const[editForm, setEditForm] = useState(false); 

  const formOpenHandler = () =>{
    setEditForm (true)
  } 
  const formCloseHandler = () =>{
    setEditForm (false)
  } 

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    } 
      props.onAddExpense(expenseData)
  }
  return (
    <div>
     {!editForm && (
      <div className="new-expense">
      <button onClick={formOpenHandler}>Add new expense</button>
      </div>
     )} 
    {editForm && ( 
      <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel ={formCloseHandler} />
    </div>
    )}
    </div>
    
  );
};
export default NewExpense;
