const db = require('../../db');

const getProducts = (req, res) => {
    db.query("SELECT * FROM PRODUCTS", (error, results) => {
        if (error) throw error;
        res.status(200).json(results)
    })
}

module.exports = {
    getProducts,
}