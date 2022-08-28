import { AspectRatio, TextField } from "@mui/joy";
import { useState } from "react";
import { useStorageByDay } from "../../hooks/useLocalStorage";

const Banner = ({ day }) => {
  const [inputText, setInputText] = useState("");
  const [picture, setPicture] = useStorageByDay("picture", day);
  const textHandler = (e) => {
    setInputText(e.target.value);
  };
  const handleSetPicture = () => {
    setPicture(inputText);
  };
  return (
    <AspectRatio ratio="3">
      {picture.length ? (
        <img src={picture} alt="banner" />
      ) : (
        <form onSubmit={handleSetPicture}>
          <TextField onChange={textHandler} placeholder="Paste picture url" />
        </form>
      )}
    </AspectRatio>
  );
};

export default Banner;
