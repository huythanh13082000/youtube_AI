export interface PortfolioType {
  logo?: any
  title: string
  programming_language: string
  description?: string
  images?: any[] | FormData
  portfolio_id?: number
  options: {
    type: string
    nameOption: string
    price: number
  }[]
}
