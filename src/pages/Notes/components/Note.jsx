export default function Note({ note, day }) {
  return (
    <div>
      <h4>Note on the {day}:</h4>
      <p>{note.text}</p>
    </div>
  );
}
