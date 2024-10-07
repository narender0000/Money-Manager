// Write your code here
import './index.css'

const MoneyDetails = props => {
  const {totalBalance, totalExpenses, totalIncome} = props

  return (
    <ul className="money-deails-list">
      <li key="0001" className="money-card balance-item">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
          className="list-img"
        />
        <div className="info-container">
          <p className="item-name">Your Balance</p>
          <p className="cash" data-testid="balanceAmount">
            Rs {totalBalance}
          </p>
        </div>
      </li>
      <li key="0002" className="money-card income-item">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png "
          alt="income"
          className="list-img"
        />
        <div className="info-container">
          <p className="item-name">Your Income</p>
          <p className="cash" data-testid="incomeAmount">
            Rs {totalIncome}
          </p>
        </div>
      </li>
      <li key="0003" className="money-card expenses-item">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png "
          alt="expenses"
          className="list-img"
        />
        <div className="info-container">
          <p className="item-name">Your Expenses</p>
          <p className="cash" data-testid="expensesAmount">
            Rs {totalExpenses}
          </p>
        </div>
      </li>
    </ul>
  )
}

export default MoneyDetails
