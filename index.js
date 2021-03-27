const express = require('express')
const scrapeData = require('./scrapper/scrape')
const headerChecker = require('./middleware/middleware')
const app = express()
const dotenv = require('dotenv')
app.use(express.json())
const PORT = 3000 ;


app.get('/', headerChecker, async (req,res,next) => {
    const showData = await scrapeData ()
         res.json({
             showData,
             Message: "Created by @spraveenofficial"
         })
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`Server started running at ${PORT}`)
})