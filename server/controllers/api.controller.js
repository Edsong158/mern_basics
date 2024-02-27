const Note = require('../models/Notes')

module.exports = {
    async createNote(req, res) {
        const note = await Note.create(req.body)

        res.json(note)
    },

    async getNotes(req, res) {
        const notes = await Note.find()

        res.json(notes)
    },

    async getNote(req, res) {
        const note_id = req.params.id

        const notes = await Note.findById(note_id)

        res.json(note)
    },

    // finds a note by id and updates that note
    async updateNote(req, res) {
        const updateNote = await Note.findOneAndUpdate({
            _id: req.body.note_id
        }, {
            text: req.body.text
        }, { new: true })

        res.json(updateNote)
    },

    async deleteNote(req, res) {
        await Note.deleteOne({
            _id: req.params.id
        })

        res.json({
            message: "Note delete"
        })
    }
}