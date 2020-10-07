/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios'
import dotenv from 'dotenv'
import xml2js from 'xml2js'

import { Book } from './types'

dotenv.config()

const HTTPClient = axios.create({
  method: 'GET',
  baseURL: 'https://www.goodreads.com/',
})

const search = (name: string, page = 1) => {
  HTTPClient({
    url: '/search/index.xml',
    params: {
      key: process.env.API_KEY,
      q: `${name}`,
      page: page,
    },
  })
    .then((response: any) => transformXml(response.data))
    .catch((error) => {
      error.response
    })
}

// Parses XML response and transforms it into JSON
const transformXml = (xml: any) => {
  xml2js.parseString(xml, (err, output) => {
    return console.log(
      JSON.stringify(output.GoodreadsResponse.search[0].results, null, 1)
    )
  })
}

console.log(search('Harry Potter', 1))
export { search }
