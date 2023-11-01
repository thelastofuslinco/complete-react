export interface FilterModel {
  startDate: string
  endDate: string
  text: string
  sortBy:
    | 'amount asc'
    | 'amount desc'
    | 'description asc'
    | 'description desc'
    | 'createdAt asc'
    | 'createdAt desc'
}
