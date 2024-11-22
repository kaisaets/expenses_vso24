import './ExpenseItem.css'
const ExpenseItem = (props) => {


    return (<div class='expense-item'>
        <div>{props.data.date.toString()}</div>
        <div className = 'expense-item__description'>
        <h2>{props.data.title}</h2>
        </div>
        <div className = 'expense-item__price'>{props.data.price}</div>
    </div>)
}
export default ExpenseItem