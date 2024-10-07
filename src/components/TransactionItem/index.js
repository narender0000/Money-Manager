// Write your code here
import './index.css'

const TransactionItem = props => {
  const {details, deleteTransaction} = props
  const {id, type, title, amount} = details
  const typetext = type.charAt(0) + type.substring(1).toLowerCase()

  const onDelete = () => {
    deleteTransaction(id)
  }

  return (
    <li className="transaction-item">
      <p className="title-item">{title}</p>
      <p className="amount-item">{amount}</p>
      <p className="type-item">{typetext}</p>
      <button data-testid="delete" onClick={onDelete} className="delete-btn">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
          className="delete-icon"
        />
      </button>
    </li>
  )
}

export default TransactionItem
