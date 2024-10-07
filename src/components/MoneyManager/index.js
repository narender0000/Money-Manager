import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'
import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here

class MoneyManager extends Component {
  state = {
    transactionsList: [],
    title: '',
    amount: null,
    type: 'INCOME',
  }

  deleteTransaction = id => {
    this.setState(prevState => ({
      transactionsList: prevState.transactionsList.filter(
        each => each.id !== id,
      ),
    }))
  }

  onAddTransaction = event => {
    event.preventDefault()
    const {title, amount, type} = this.state
    const transaction = {
      id: uuidv4(),
      title,
      amount,
      type,
    }
    this.setState(prevState => ({
      transactionsList: [...prevState.transactionsList, transaction],
      type: 'INCOME',
      amount: '',
      title: '',
    }))
  }

  onChangeTitle = event => {
    this.setState({title: event.target.value})
  }

  onChangeAmount = event => {
    this.setState({amount: parseInt(event.target.value)})
  }

  onChangeType = event => {
    this.setState({type: event.target.value})
  }

  render() {
    const {title, type, amount, transactionsList} = this.state
    let totalIncome = 0
    let totalExpenses = 0
    let list = transactionsList
    list.filter(each => {
      if (each.type === 'INCOME') {
        totalIncome += each.amount
      } else {
        totalExpenses += each.amount
      }
      return true
    })
    const totalBalance = totalIncome - totalExpenses
    return (
      <div className="bg-container">
        <div className="card-container">
          <div className="card">
            <div className="top-box">
              <h1 className="main-head">Hi, Richard</h1>
              <p className="wel-para">
                welcome back to your <span>Money Manger</span>
              </p>
            </div>
            <div className="money-details-container">
              <MoneyDetails
                totalBalance={totalBalance}
                totalExpenses={totalExpenses}
                totalIncome={totalIncome}
              />
            </div>
            <div className="bottom-section">
              <div className="form-container">
                <h1 className="form-head">Add Transaction</h1>
                <form
                  className="transaction-form"
                  onSubmit={this.onAddTransaction}
                >
                  <label htmlFor="title">TITLE</label>
                  <input
                    type="text"
                    id="title"
                    placeholder="TITLE"
                    className="input"
                    value={title}
                    onChange={this.onChangeTitle}
                  />
                  <label htmlFor="amount">AMOUNT</label>
                  <input
                    type="text"
                    id="amount"
                    className="input"
                    value={amount}
                    placeholder="AMOUNT"
                    onChange={this.onChangeAmount}
                  />
                  <label htmlFor="type">TYPE</label>
                  <select
                    id="type"
                    className="input"
                    name="type"
                    value={type}
                    onInput={this.onChangeType}
                  >
                    <option value="INCOME" selected>
                      Income
                    </option>
                    <option value="EXPENSES">Expenses</option>
                  </select>
                  <button type="submit" className="submit-btn">
                    Add
                  </button>
                </form>
              </div>
              <div className="transactions-list-container">
                <h1 className="transaction-head">History</h1>
                <div className="top-bar">
                  <p className="para-title">Title</p>
                  <p className="para-title">Amount</p>
                  <p className="para-title">Type</p>
                </div>
                <ul className="transactions-list">
                  {transactionsList.map(each => (
                    <TransactionItem
                      key={each.id}
                      details={each}
                      deleteTransaction={this.deleteTransaction}
                    />
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
