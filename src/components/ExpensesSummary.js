import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import numeral from 'numeral'
import 'numeral/locales/en-gb'
import selectExpenses from '../selectors/expenses'
import selectExpensesTotal from '../selectors/expenses-total'


export const ExpensesSummary = ({ expenseCount, expensesTotal }) => {
  const expenseWord = expenseCount === 1 ? 'expense' : 'expenses'
  numeral.locale('en-gb')
  const formattedExpensesTotal = numeral(expensesTotal / 100).format('$0,0.00')

  return (
    <div className="page-header">
      <div className="content-container">
        <h1 className="page-header__title">
          Viewing <span>{expenseCount}</span> {expenseWord} totalling <span>{formattedExpensesTotal}</span>
        </h1>
        <div className="page-header__actions">
          <Link className="button" to="/create">Add Expense</Link>
        </div>
      </div>
    </div>
  )
}


// export const ExpensesSummary = (props) => {
//   const total = numeral(selectExpensesTotal(props.expenses) / 100).format('$0,0.00')
  
//   return (
//     <div>
//       <p>{`Viewing ${props.expenses.length} expense${props.expenses.length === 1 ? '': 's'} totalling ${total}`}</p>
//     </div>
//   )
// }

const mapStateToProps = (state) => {
    const visibleExpenses = selectExpenses(state.expenses, state.filters)

    return {
      expenseCount: visibleExpenses.length,
      expensesTotal: selectExpensesTotal(visibleExpenses)
    }
}

export default connect(mapStateToProps)(ExpensesSummary)
