import { useState } from 'react';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import NavBar from '../../components/NavBar/NavBar';
import NoteList from '../../components/NoteList/NoteList'
import NewNoteForm from '../../components/NewNoteForm/NewNoteForm'

export default function App() {
  const [user, setUser] = useState(getUser());
  const [notes, setNotes] = useState([]);
  const [showNotes, setShowNotes] = useState(true);
  function addNote(note) {
    setNotes([...notes, note])
  };
  return (
    <main className="App">
      { user ?
          <>
            <NavBar user={user} setUser={setUser} />
            <div>
            <h1>Notes</h1>
            {showNotes && <NoteList notes={notes} user={user} />}
            <hr />
            <NewNoteForm addNote={addNote} />
            </div>
          </>
          :
          <AuthPage setUser={setUser} />
      }
    </main>
  );
}
