const axios = require('axios')
const cheerio = require('cheerio');
const dotenv = require('dotenv').config();

let allData

const headersOptions = {
    headers: {
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
        "Accept-Encoding": "gzip, deflate, br",
        "Accept-Language": "en-US,en;q=0.9",
        "Cache-Control": "max-age=0",
        "Connection": "keep-alive",
        "Host": "skymcx.in",
        "Referer": "https://www.google.com/",
        "sec-ch-ua-mobile": "?1",
        "Sec-Fetch-Dest": "document",
        "Sec-Fetch-Mode": "navigate",
        "Sec-Fetch-Site": "cross-site",
        "Sec-Fetch-User": "?1",
        "Upgrade-Insecure-Requests": "1",
        "User-Agent": "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Mobile Safari/537.36"
    }
};
 
const scrapeData = async () => {
        try {
            const response = await axios.get(process.env.URL, headersOptions)
            const loadedData = response.data;
            const $ = cheerio.load(loadedData)
                const gold = 
                    {
                        goldBid: $('#customers > tbody > tr:nth-child(2) > td:nth-child(2)').text(),
                        goldAsk: $('#customers > tbody > tr:nth-child(2) > td:nth-child(3)').text(),
                        goldHigh: $('#customers > tbody > tr:nth-child(2) > td:nth-child(4)').text(),
                        goldLow: $('#customers > tbody > tr:nth-child(2) > td:nth-child(5)').text(),
                        time: $('#customers > tbody > tr:nth-child(2) > td:nth-child(6)').text()
                    }
                
                const silver = 
                    {
                        silverBid: $('#customers > tbody > tr:nth-child(3) > td:nth-child(2)').text(),
                        silverAsk: $('#customers > tbody > tr:nth-child(3) > td:nth-child(3)').text(),
                        silverHigh: $('#customers > tbody > tr:nth-child(3) > td:nth-child(4)').text(),
                        silverLow: $('#customers > tbody > tr:nth-child(3) > td:nth-child(5)').text(),
                        time: $('#customers > tbody > tr:nth-child(3) > td:nth-child(6)').text()
                    }
                
                const silverSpot = 
                    {
                        silverSpotBid: $('#customers > tbody > tr:nth-child(4) > td:nth-child(2)').text(),
                        silverSpotAsk: $('#customers > tbody > tr:nth-child(4) > td:nth-child(3)').text(),
                        silverSpotHigh: $('#customers > tbody > tr:nth-child(4) > td:nth-child(4)').text(),
                        silverSpotLow: $('#customers > tbody > tr:nth-child(4) > td:nth-child(5)').text(),
                        time: $('#customers > tbody > tr:nth-child(4) > td:nth-child(6)').text()
                     }
                
                const goldSpot = 
                    {
                        goldSpotBid: $('#customers > tbody > tr:nth-child(5) > td:nth-child(2)').text(),
                        goldSpotAsk: $('#customers > tbody > tr:nth-child(5) > td:nth-child(3)').text(),
                        goldSpotHigh: $('#customers > tbody > tr:nth-child(5) > td:nth-child(4)').text(),
                        goldSpotLow: $('#customers > tbody > tr:nth-child(5) > td:nth-child(5)').text(),
                        time: $('#customers > tbody > tr:nth-child(5) > td:nth-child(6)').text()
                    }
                
                const INRSpot = 
                    {
                        INRSpotBid: $('#customers > tbody > tr:nth-child(6) > td:nth-child(2)').text(),
                        INRSpotAsk: $('#customers > tbody > tr:nth-child(6) > td:nth-child(3)').text(),
                        INRSpotHigh: $('#customers > tbody > tr:nth-child(6) > td:nth-child(4)').text(),
                        INRSpotLow: $('#customers > tbody > tr:nth-child(6) > td:nth-child(5)').text(),
                        time: $('#customers > tbody > tr:nth-child(6) > td:nth-child(6)').text()
                    }
                allData = {
                    gold,
                    silver,
                    silverSpot,
                    goldSpot,
                    INRSpot
                }
                return allData
        } catch (error) {
            const errorMessage = error
            return (`Site countered Error ${errorMessage}`)
        }
}


module.exports = scrapeData ;