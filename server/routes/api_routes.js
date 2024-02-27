const router = require('express').Router()
const api_controller = require('../controllers/api.controller')

// Create Note
router.post('/notes', api_controller.createNote)
// Get All Notes
router.get('/notes', api_controller.getNotes)
// Get one Note by ID
router.get('/note/:id', api_controller.getNote)
// Update Note
// Put route that gets passed a note id and a json body that contains a text property with the new text value
router.put('/note', api_controller.updateNote)
//Delete Note
router.delete('/note/:id', api_controller.updateNote)

module.exports = router