import "./NoteListItem.css"

export default function NoteListItem({ n }) {
  let date = new Date(n.createdAt).toLocaleDateString();
  return (
    <li className="Notelistitem">
      <div>At {date}:
      <p>{n.text}</p>
      </div>
    </li>
  );
}