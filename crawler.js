const request = require('request')
const cheerio = require('cheerio')
const URL = require('url-parse')

const pageToVisit = 'http://www.homedepot.com/b/Tools-Power-Tools-Power-Tool-Combo-Kits/DEWALT/Cordless/2/N-5yc1vZc2ecZ4j2Z1z0w4czZ1z140i3'
console.log('Visiting page ' + pageToVisit)

request(pageToVisit, (err, res, body) => {
  if (err) {
    console.log('Error: ' + err)
  }
  console.log('Status Code: ' + res.statusCode)
  if (res.statusCode === 200) {
    const $ = cheerio.load(body)
    searchForWord($, 'Add to Cart to See Price')
    console.log('Page title: ' + $('title').text())
  }
})

function searchForWord($, word) {
  const bodyText = $('html > body').text()
  if (bodyText.toLowerCase().indexOf(word.toLowerCase()) !== -1) {
    console.log('true')
  }
  else {
    console.log('false')
  }
}
