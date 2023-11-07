import { ExpenseModel } from '../../models/ExpenseModel'

export const expenses: Array<ExpenseModel> = [
  {
    id: '1',
    description: 'any_description',
    note: 'any_description',
    createdAt: new Date('11/05/2023').toISOString(),
    amount: 822
  },
  {
    id: '2',
    description: 'any_description',
    note: 'any_description',
    createdAt: new Date('11/04/2023').toISOString(),
    amount: 98
  },
  {
    id: '3',
    description: 'any_description',
    note: 'any_description',
    createdAt: new Date('11/03/2023').toISOString(),
    amount: 55
  }
]
