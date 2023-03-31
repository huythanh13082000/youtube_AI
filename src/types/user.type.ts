export interface UserType {
  username: string
  firstName: string
  lastName: string
  mobileNumber?: string
  email: string
  role: string
  password: string
  isActive: boolean
  inactiveDate?: Date
  socialPhoto?: String
}
