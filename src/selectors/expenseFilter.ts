import { ExpenseModel } from '../models/ExpenseModel'
import { FilterModel } from '../models/FilterModel'

export const expenseFilter = (expense: ExpenseModel, filters: FilterModel) => {
  const createdDate = new Date(expense.createdAt).setHours(0, 0, 0, 0)
  const textMatch = expense.description.includes(filters.text)
  const startDateMatch = filters.startDate
    ? createdDate >= new Date(filters.startDate).setHours(0, 0, 0, 0)
    : true

  const endDateMatch = filters.endDate
    ? createdDate <= new Date(filters.endDate).setHours(0, 0, 0, 0)
    : true

  return textMatch && startDateMatch && endDateMatch
}
