import feedFixture from './fixtures/feed'
import { search } from '../src/index'

test('it responds with correct values', async () => {
  const results = search('Octavia E. Butler', 1)
  // console.log('results:')
  // console.log(results)
  expect(results).toEqual(feedFixture)
})
