const express = require('express')
const app = express()
const port = 3001

app.get('/', (req, res) => {
    // to send line
    // res.send('<h1> Hello World! </h1>')
    res.sendFile('./views/home.html', { root: __dirname });

})

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
})
