# goodreads-api-client

📚 JavaScript Client for accessing goodreads data

## Documentation

[goodreads API Documentation](https://www.goodreads.com/api)

## Search

Provides book information and pagination info

```javascript
search('Octavia E. Butler')

Request: GET /search/index.xml
Response: [
  {
    title: 'Kindred',
    author: 'Octavia E. Butler',
    image_url:
      'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1339423248l/60931._SX98_.jpg',
    publication_year: '1979',
    avg_rating: '4.26',
  }
  ...
]
```
