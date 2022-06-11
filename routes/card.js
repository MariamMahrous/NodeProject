let express = require('express');
let router = express.Router();
let cardController = require('../controllers/cardController');
router.get('/', cardController.getAllcard)
router.post('/', cardController.createcard)
router.delete('/:id', cardController.deletecard)
router.put('/:id', cardController.editcard)
module.exports = router;