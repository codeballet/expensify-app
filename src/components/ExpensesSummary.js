import React from 'react'
import selectExpenses from '../selectors/expenses'
import selectExpensesTotal from '../selectors/expenses-total'
import { connect } from 'react-redux'
import numeral from 'numeral'
import 'numeral/locales/en-gb'


export const ExpensesSummary = ({ expenseCount, expensesTotal }) => {
  const expenseWord = expenseCount === 1 ? 'expense' : 'expenses'
  numeral.locale('en-gb')
  const formattedExpensesTotal = numeral(expensesTotal / 100).format('$0,0.00')

  return (
    <div>
      <h1>Viewing {expenseCount} {expenseWord} totalling {formattedExpensesTotal}</h1>
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
