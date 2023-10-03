import { useContext } from 'react'
import { TransactionsContext } from '../TransactionContext'

export const useSummary = () => {
  const { transactions } = useContext(TransactionsContext)

  const summary = transactions.reduce(
    (acc, transation) => {
      if (transation.type === 'income') {
        acc.income += transation.value
        acc.total += transation.value
      } else {
        acc.outcome += transation.value
        acc.total -= transation.value
      }

      return acc
    },
    {
      income: 0,
      outcome: 0,
      total: 0,
    },
  )

  return { summary }
}
