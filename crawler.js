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
  const products = $('div .js-pod')
  for (var i = 0; i < products.length; i++) {
    let product = $(products[i]).text()
    let productList = []
    productList.push(product)
    productList.map((model) => {
      if (model.toLowerCase().indexOf(word.toLowerCase()) !== -1) {
        const modelNumber = $('div .pod-plp__model').text()
        console.log(model)
      }
      else {
        console.log('false')
      }
    })
  }
}
