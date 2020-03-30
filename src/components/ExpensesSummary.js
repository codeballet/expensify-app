import React from 'react'
import selectExpenses from '../selectors/expenses'
import selectExpensesTotal from '../selectors/expenses-total'
import { connect } from 'react-redux'
import numeral from 'numeral'
import 'numeral/locales/en-gb'

numeral.locale('en-gb')

export const ExpensesSummary = (props) => {
  const total = numeral(selectExpensesTotal(props.expenses) / 100).format('$0,0.00')
  
  return (
    <div>
      <p>{`Viewing ${props.expenses.length} expense${props.expenses.length === 1 ? '': 's'} totalling ${total}`}</p>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    expenses: selectExpenses(state.expenses, state.filters)
  }
}

export default connect(mapStateToProps)(ExpensesSummary)
