const express = require('express')
const app = express()
const port = process.env.PORT || 3000

// URL = https://domain.com/

app.get('/', (req, res) => {
    res.send('Hello World!')
})


function helper(num){
    return num * 3
}

app.get('/route/:num', (req, res) => {
    const num = req.params.num
    const response = helper(num)
    res.send(`${response}`)
})


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})