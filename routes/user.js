let express = require('express');
let router = express.Router();

let UserController = require('../controllers/UserController');

router.get('/', UserController.getAllUser)
router.post('/', UserController.createUser)
router.delete('/:id', UserController.deleteUser)
router.put('/:id', UserController.editUser)
module.exports = router;