import axiosClient from "./axiosClient"
import { USER_INFO } from "./urlConfig"

export const userApi = {
  getInfo: () => {
    return axiosClient.get(USER_INFO)
  },
}
