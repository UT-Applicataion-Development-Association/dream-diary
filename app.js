const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.use(express.static('dream-diary-client/build'))

app.get('/', (req, res) => {
    res.send('Hello World!')
})


function helper_service(num){
    return num * 3
}

function helper_controller(num) {
    if (typeof(num) === "number"){
        helper_service(num)
    } else {
        return "No"
    }
}

app.get('/route/:num', (req, res) => {
    const num = req.params.num
    const response = helper_controller(num)
    res.send(`${response}`)
})


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})