import { Component } from 'react'
import ExpenseForm from '../ExpenseForm'
import { ExpenseModel } from '../../../../models/ExpenseModel'

interface State {
  isEdit: boolean
}

interface Props extends ExpenseModel {}

class ExpenseItem extends Component<Props, State> {
  state = {
    isEdit: false
  }

  handleClick = () => {
    this.setState((prevState) => ({ isEdit: !prevState.isEdit }))
  }

  render() {
    return this.state.isEdit ? (
      <li className="expenseContainer">
        <ExpenseForm {...this.props} onClick={this.handleClick} />
      </li>
    ) : (
      <li className="expenseContainer">
        <span>Description: {this.props.description}</span>
        <span>Amount: {this.props.amount}</span>
        <span>Note: {this.props.note}</span>
        <span>
          CreatedAt: {new Date(this.props.createdAt).toLocaleString('en-us')}
        </span>
        <button onClick={this.handleClick}>Edit</button>
      </li>
    )
  }
}

export default ExpenseItem
