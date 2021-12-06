const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.use(express.static('dream-diary-client/build'))

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/route/:num', (req, res) => {
    const num = req.params.num
    const response = helper_controller(num)
    res.send(`${response}`)
})


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})