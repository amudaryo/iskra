import { useState } from "react";
import { useStorageByDay } from "../../../hooks/useLocalStorage";
import { v4 as uuid } from "uuid";

export default function CreateNote({ day, ...props }) {
  const [inputText, setInputText] = useState("");
  const [notes, setNotes] = useStorageByDay("notes", day);
  const textHandler = (e) => {
    setInputText(e.target.value);
  };
  const saveHandler = () => {
    const payload = { id: uuid(), text: inputText };
    setNotes([...notes, payload]);
  };

  return (
    <div>
      <form onSubmit={saveHandler}>
        <input
          autoFocus
          onChange={textHandler}
          placeholder="Today, I am grateful for..."
        />
      </form>
    </div>
  );
}
