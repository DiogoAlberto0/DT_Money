// components
import { useContext } from 'react'
import { Header } from '../../components/Header'
import { Summary } from '../../components/Summary'
import { SearchTransitions } from './components/SearchTransitions'
import {
  TransactionValue,
  TransactionsContainer,
  TransactionsTable,
} from './styles'
import { TransactionsContext } from '../../TransactionContext'

import { dataFormat, priceFormat } from '../../utils/formatter'

export const Transition = () => {
  const { transactions } = useContext(TransactionsContext)

  return (
    <div>
      <Header />
      <Summary />

      <TransactionsContainer>
        <SearchTransitions />
        <TransactionsTable>
          <tbody>
            {transactions.map((transaction) => {
              return (
                <tr key={transaction.id}>
                  <td>{transaction.title}</td>
                  <td>
                    <TransactionValue variant={transaction.type}>
                      {transaction.type === 'outcome' && '- '}
                      {priceFormat.format(transaction.value)}
                    </TransactionValue>
                  </td>
                  <td>{transaction.category}</td>
                  <td>{dataFormat.format(new Date(transaction.createdAt))}</td>
                </tr>
              )
            })}
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  )
}
