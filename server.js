const express = require("express")
const db = require('./db')
const productRoutes = require('./src/product/routes')


db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('MySql Connected')
});

const app = express();
const port = 3030;

app.use(express.json());

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.get("/", (req, res) => {
    res.send("Hello World!")
})

app.use('/routers', productRoutes)
app.use('/routers/:itemId', productRoutes)

app.listen(port, () => console.log(`app listening on port ${port}`))