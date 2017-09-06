const request = require('request')
const cheerio = require('cheerio')
const URL = require('url-parse')

const pageToVisit = 'http://www.homedepot.com/'
console.log('Visiting page ' + pageToVisit)

request(pageToVisit, (err, res, body) => {
  if (err) {
    console.log('Error: ' + err)
  }
  console.log('Status Code: ' + res.statusCode)
  if (res.statusCode === 200) {
    const $ = cheerio.load(body)
    console.log('Page title: ' + $('title').text())
  }
})
