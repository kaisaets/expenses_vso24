import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate'

const ExpenseItem = (props) => {
    

    return (
    <div class='expense-item'>
        <ExpenseDate date={props.data.date} /> 
        <div className='expense-item_description'></div>
        <h2>{props.data.title}</h2>
        <div className = 'expense-item__price'>{props.data.price}</div>
    </div>
    )
}
export default ExpenseItem