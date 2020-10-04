/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios'
import dotenv from 'dotenv'
dotenv.config()

const HTTPClient = axios.create({
  method: 'GET',
  baseURL: 'https://www.goodreads.com/',
})

const search = (name: string) => {
  HTTPClient({
    url: '/search/index.xml',
    params: {
      key: process.env.API_KEY,
      q: `${name}`,
    },
  })
    .then((response: any) =>
      console.log({
        // xml_response: response.data,
        full_data: response,
      })
    )
    .catch((error: any) => {
      return error.response
    })
}

console.log(search('game of thrones'))
