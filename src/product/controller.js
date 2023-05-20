const db = require('../../db');

const getRouters = (req, res) => {
    db.query("SELECT * FROM products WHERE productType = 1", (error, results) => {
        if (error) throw error;
        res.status(200).json(results)
    })
}

const getSpecsById = (req, res) => {
    let id = req.params.itemId;
    db.query(`SELECT * FROM SPECS WHERE itemId = ${id}`, (error, results) => {
        if (error) throw error;
        res.status(200).json(results)
    })
}

module.exports = {
    getRouters,
    getSpecsById
}