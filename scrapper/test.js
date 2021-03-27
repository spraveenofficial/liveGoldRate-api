const axios = require('axios')
const cheerio = require('cheerio');
const dotenv = require('dotenv').config()
let showData = []

const scrapeData = async () => {
        try {
            const response = await axios.get(process.env.URL)
            const loadedData = response.data;
            const $ = cheerio.load(loadedData)
            const elemSelector = '#customers > tbody > tr'
            let keys = [
                'Name',
                'Bid',
                'Ask',
                'High',
                'Low',
                'Time'
            ]
            $(elemSelector).each((parentIndex, parentElement) => {
                let keyIdx = 0
                const coinObj = {}
                if (parentIndex > 0) {
                    $(parentElement).children().each((childIdx, childElm) => {
                        const tdValue = $(childElm).text()
                        const postingData = coinObj[keys[keyIdx]] = tdValue
                        keyIdx++
                    })
                    showData.push({
                        coinObj
                    })
                }
            })
            return showData
        } catch (error) {
            const errorMessage = error
            return (`Site countered Error ${errorMessage}`)
        }
}

module.exports = scrapeData