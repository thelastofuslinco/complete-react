export interface FilterModel {
  startDate: string | null
  endDate: string | null
  text: string
  sortBy:
    | 'amount asc'
    | 'amount desc'
    | 'description asc'
    | 'description desc'
    | 'createdAt asc'
    | 'createdAt desc'
}
