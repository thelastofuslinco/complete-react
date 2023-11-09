import { ExpenseModel } from '../models/ExpenseModel'
import { FilterModel } from '../models/FilterModel'

export const expenseOrder = (
  a: ExpenseModel,
  b: ExpenseModel,
  filters: FilterModel
) => {
  if (filters.sortBy === 'amount asc') {
    return a.amount - b.amount
  } else if (filters.sortBy === 'amount desc') {
    return b.amount - a.amount
  } else if (filters.sortBy === 'description asc') {
    if (a.description < b.description) return -1
    else if (a.description > b.description) return 1
  } else if (filters.sortBy === 'description desc') {
    if (a.description < b.description) return 1
    else if (a.description > b.description) return -1
  } else if (filters.sortBy === 'createdAt asc') {
    return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
  } else if (filters.sortBy === 'createdAt desc') {
    return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  }

  return 0
}
