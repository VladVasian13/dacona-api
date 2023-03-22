const express = require("express")
const productRoutes = require('./src/product/routes')

const app = express();
const port = 3030;

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello World!")
})

app.use('/api/v1/products', productRoutes)

app.listen(port, () => console.log(`app listening on port ${port}`))