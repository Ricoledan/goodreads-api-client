/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
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
    .then((response) => transformXml(response.data))
    .catch((error) => {
      error.response
    })
}

const transformXml = (xml: any) => {
  xml2js.parseString(xml, (err, output) => {
    const jsonOutput = output.GoodreadsResponse.search[0].results[0].work

    function getValues(json: any): Book {
      let i: number
      const obj: any = []
      for (i = 0; i < json.length; i++) {
        obj.push({
          title: jsonOutput[i].best_book[0].title[0],
          author: jsonOutput[i].best_book[0].author[0].name[0],
          image_url: jsonOutput[i].best_book[0].image_url[0],
          publication_year: jsonOutput[i].original_publication_year[0]['_'],
          avg_rating: jsonOutput[i].average_rating[0],
        })
      }
      return obj
    }
    return getValues(jsonOutput)
  })
}

export { search }
