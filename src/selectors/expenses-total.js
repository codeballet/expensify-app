export default (expenses) => {
  const amountsList = expenses.map((expense) => expense.amount)
  const reducer = (accumulator, currentValue) => accumulator + currentValue
  return amountsList.reduce(reducer, 0)
}