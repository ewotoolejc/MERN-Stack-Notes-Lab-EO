import { useState } from "react";

export default function NewSkillForm({ addNote }) {
  const [newNote, setNewNote] = useState({
    text: "",
  });
  function handleAddNote(e) {
    e.preventDefault();
    addNote({ text: e.target.text.value, createdAt: Date.now(), });
    setNewNote({
      text: " ",
    });
  }
  return (
    <div className="formdiv">
      <form onSubmit={handleAddNote} className="noteform">
          <label>Note:</label>
          <input
            name="text"
            value={newNote.text}
            onChange={(e) => setNewNote(e.target.value)}
            required
          />
        <button type="submit">ADD NOTE</button>
      </form>
    </div>
  );
}
