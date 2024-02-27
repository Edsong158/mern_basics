import axios from "axios"
import { useState } from "react"

function NoteForm({
    editNote,
    setEditNote,
    setShowNoteForm,
    setNotes }) {
    const [noteText, setNoteText] = useState(editNote ? editNote.text : '')

    const createOrEditNote = async (e) => {
        e.preventDefault()

        let res

        if (!editNote) {
            res = await axios.post('/api/notes', {
                text: noteText
            })

            setNotes((oldState) => {
                return [...oldState, res.data]
            })
        } else {
            res = await axios.put(`/api/notes/${editNote._id}`, {
                text: noteText
            })

            setNotes((oldState) => {
                const updatedNotes = oldState.map(note =>
                    note._id === editNote._id ? { ...note, text: noteText } : note
                )
                return updatedNotes
            })
        }

        setShowNoteForm(false)
        setEditNote(null)
    }

    const closeModal = () => setShowNoteForm(false)

    const handleInputChange = (e) => {
        setNoteText(e.target.value)
    }

    return (
        <div className="note-form">
            <h1 className="text-center">{editNote ? 'Edit' : 'Create'} Note</h1>

            <form onSubmit={createOrEditNote} className="column">
                <input
                    value={noteText}
                    onChange={handleInputChange}
                    type="text"
                    placeholder="Enter the note text" />

                <button>{editNote ? 'Save' : 'Create'}</button>
                <button onClick={closeModal} className="cancel-btn">Cancel</button>
            </form>
        </div>
    )
}

export default NoteForm
