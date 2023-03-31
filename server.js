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

app.get("/", (req, res) => {
    res.send("Hello World!")
})

app.use('/products', productRoutes)


app.listen(port, () => console.log(`app listening on port ${port}`))