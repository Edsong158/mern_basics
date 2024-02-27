const {Schema, model} = require('mongoose')

const noteSchema = new Schema({
    text: {
        type: String,
        require: true,
        minLength: [4, 'Your note must be at least 4 characters in Length']
    }
}, {
    timestamps: true
})

const Note = model('Note', noteSchema)

module.exports = Note