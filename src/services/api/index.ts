/* eslint-disable @typescript-eslint/no-unused-vars */
// External Libraries
import axios from 'axios'
import * as dotenv from 'dotenv'
dotenv.config()

export const API_STEAM = axios.create({
  baseURL: process.env.BASE_URL_STEAM
})

API_STEAM.interceptors.request.use(async function (config) {
  try {
    return config
  } catch (e) {
    return config
  }
})
