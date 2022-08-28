import { Box, Button, Card, Sheet, Typography } from "@mui/joy";
import { TextField } from "@mui/material";
import { useState } from "react";
import { useStorageByDay } from "../../hooks/useLocalStorage";

const EditThoughts = ({ day }) => {
  const [inputText, setInputText] = useState("");
  const [edit, setEdit] = useState(false);
  const [thoughts, setThoughts] = useStorageByDay("thoughts", day);
  const textHandler = (e) => {
    setInputText(e.target.value);
  };
  const editHandler = () => {
    setEdit(true);
  };
  const saveHandler = () => {
    setEdit(false);
    setThoughts(inputText);
  };
  return (
    <Sheet sx={{ mb: 2 }}>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Typography level="h4">My thoughts for today:</Typography>
      </Box>
      <Box sx={{ height: "150px" }}>
        {thoughts && thoughts.length && !edit ? (
          <Card variant="outlined">
            <Typography sx={{ minHeight: "90px" }}>{thoughts}</Typography>
            <Button
              variant="soft"
              color="neutral"
              fullWidth
              size="sm"
              onClick={editHandler}
            >
              Edit
            </Button>
          </Card>
        ) : (
          <form onSubmit={saveHandler}>
            <TextField fullWidth multiline rows={4} onChange={textHandler} />
            <Button
              fullWidth
              variant="soft"
              color="success"
              size="sm"
              onClick={saveHandler}
            >
              Save my thoughts
            </Button>
          </form>
        )}
      </Box>
    </Sheet>
  );
};

export default EditThoughts;
