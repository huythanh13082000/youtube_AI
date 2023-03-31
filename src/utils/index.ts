export const numberWithCommas = (x: number): string => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

export const setTokens = (tokens: {
  accessToken: string
  expiresIn: number
  refreshToken: string
}) => {
  localStorage.setItem('accessToken', tokens.accessToken)
  localStorage.setItem('expiresIn', JSON.stringify(tokens.expiresIn))
  localStorage.setItem('refreshToken', tokens.refreshToken)
}
