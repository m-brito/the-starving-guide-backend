export interface PaginatedResult<T> {
  data: T[]
  total: number
  page: number
  lastPage: number
}
