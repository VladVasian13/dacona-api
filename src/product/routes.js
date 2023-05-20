const { Router } = require("express");
const controller = require('./controller');

const router = Router();

router.get('/', controller.getRouters)

router.get('/:itemId', controller.getSpecsById)


module.exports = router;