import Note from "./components/Note";
import CreateNote from "./components/CreateNote";
import { useStorageByDay, useStorage } from "../../hooks/useLocalStorage";
import { useEffect } from "react";

const Notes = () => {
  //Logic goes here

  // const today = new Date().toLocaleDateString();
  const [today, setToday] = useStorage("today");
  const [notes] = useStorageByDay("notes", today);

  useEffect(() => {
    console.log(notes, today);
    const onChangeDay = () => {
      setToday(localStorage.getItem("today"));
    };
    window.addEventListener("storage", onChangeDay);
    return () => {
      window.removeEventListener("storage", onChangeDay);
    };
  }, [notes, today, setToday]);

  return (
    <div>
      <CreateNote day={today} />
      {notes &&
        notes.map((note) => <Note key={note.id} note={note} day={today} />)}
    </div>
  );
};

export default Notes;
