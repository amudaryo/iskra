import { TextField } from "@mui/joy/";
import { useState } from "react";
import { useStorageByDay } from "../../hooks/useLocalStorage";
import { v4 as uuid } from "uuid";

const CreateGratitude = ({ day, ...props }) => {
  const [inputText, setInputText] = useState("");
  const [gratitudes, setGratitudes] = useStorageByDay("gratitudes", day);
  const textHandler = (e) => {
    setInputText(e.target.value);
  };
  const saveHandler = () => {
    const payload = { id: uuid(), text: inputText };
    setGratitudes([...gratitudes, payload]);
  };

  return (
    <form onSubmit={saveHandler}>
      <TextField
        autoFocus
        onChange={textHandler}
        placeholder="Today, I am grateful for..."
      />
    </form>
  );
};

export default CreateGratitude;
