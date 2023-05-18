import "./NoteList.css";
import NoteListItem from '../NoteListItem/NoteListItem'

export default function NoteList({ notes }) {
  let noteitems;
  if (notes.length) {
  noteitems = notes.map((n, idx) => (
    <NoteListItem n={n} key={idx} />
  ))}
  else noteitems = <h1>No Notes</h1>
  ;
  return <ul className="NoteListul">{noteitems}</ul>;
}