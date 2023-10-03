import { ReactNode, createContext, useEffect, useState } from 'react'

import { api } from '../lib/axios'

interface TransactionType {
  id: number
  title: string
  type: 'income' | 'outcome'
  value: number
  category: string
  createdAt: string
}
interface CreateTransactionInput {
  title: string
  category: string
  type: 'income' | 'outcome'
  value: number
}
interface TransactionsContextType {
  transactions: TransactionType[]
  loadTransactions: (query?: string) => Promise<void>
  createTransaction: (data: CreateTransactionInput) => Promise<void>
}

interface TransactionsProviderProps {
  children: ReactNode
}

export const TransactionsContext = createContext({} as TransactionsContextType)

export const TransactrionsProvider = ({
  children,
}: TransactionsProviderProps) => {
  const [transactions, setTransactions] = useState<TransactionType[]>([])

  const loadTransactions = async (query?: string) => {
    const response = await api.get('transactions', {
      params: {
        _sort: 'createdAt',
        order: 'desc',
        q: query,
      },
    })

    setTransactions(response.data)
  }

  const createTransaction = async (data: CreateTransactionInput) => {
    const { title, category, type, value } = data
    const response = await api.post('transactions', {
      title,
      category,
      type,
      value,
      createdAt: new Date(),
    })

    setTransactions((state) => [response.data, ...state])
  }
  useEffect(() => {
    loadTransactions()
  }, [])

  return (
    <TransactionsContext.Provider
      value={{
        transactions,
        loadTransactions,
        createTransaction,
      }}
    >
      {children}
    </TransactionsContext.Provider>
  )
}
