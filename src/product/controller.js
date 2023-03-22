const pool = require('../../db');

const getProducts = (req, res) => {
    pool.query("SELECT * FROM PRODUCTS", (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows)
    })
}

module.exports = {
    getProducts,
}