const express = require('express');
const { bookController } = require('../controllers/bookController');
const bookRoutes = express.Router();



bookRoutes.get('/', bookController.getAll)
bookRoutes.get('/:id', bookController.getById)
bookRoutes.post('/', bookController.add)
bookRoutes.delete('/:id', bookController.delete)



module.exports = {
    bookRoutes
}