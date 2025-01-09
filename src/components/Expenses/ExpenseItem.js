import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import { useState } from "react";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState (props.data.title);
  const clickHandler = () => {
    console.log("Clicked!");
    setTitle(`Updated ${title} by click `)
    console.log(title)
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.data.date} />
      <div className="expense-item_description">
        <h2>{props.data.title}</h2>
        <div className="expense-item__price">{props.data.price}</div>
      </div>
      <button onClick={clickHandler}>Click me</button>
    </Card>
  );
};
export default ExpenseItem;
