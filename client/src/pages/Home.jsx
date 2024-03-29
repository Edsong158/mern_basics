import { useEffect, useState } from 'react'
import axios from 'axios'
import dayjs from 'dayjs'

function Home({
   setShowNoteForm,
   setEditNote,
    notes,
     setNotes }) {
  
  useEffect(() => {
    axios.get('/api/notes')
      .then((res) => {
        setNotes(res.data)
      })
  }, [])

  const handleEditNote = (note) => {
    setEditNote(note)
    setShowNoteForm(true)
  }

  return (
    <div>
      <h1>Welcome to the Note App</h1>

      <main className="notes-output">
        {notes.map((note) => (
          <div key={note._id} className="note">
            <h3>{note.text}</h3>
            <p>Created On: {dayjs(note.createdAt).format('MM/DD/YYYY hh:mm a')}</p>
            <div className="row">
              <button onClick={() => handleEditNote(note)} className="edit-btn">Edit Note</button>
              <button className="delete-btn">Delete Note</button>
            </div>
          </div>
        ))}
      </main>
    </div>
  )
}

export default Home