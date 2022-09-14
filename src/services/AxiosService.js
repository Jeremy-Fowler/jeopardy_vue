import Axios from 'axios'
import { baseURL } from '../env'
export const api = Axios.create({
  baseURL,
  timeout: 8000
})

export const jeopardyApi = new Axios.create({
  baseURL: 'https://jservice.io',
  timeout: 4000,
  params: { count: 16 }
})