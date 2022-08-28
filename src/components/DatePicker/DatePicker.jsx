import { Box, Typography } from "@mui/joy";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useStorage } from "../../hooks/useLocalStorage";

export default function DatePickerPage() {
  const [date, setDate] = useState(new Date());
  const [today, setToday] = useStorage("today");
  const onSelected = (selection) => {
    console.log(selection);
    const trunc = selection.toLocaleDateString();
    setDate(selection);
    setToday(trunc);
  };
  return (
    <Box sx={{ position: "absolute" }}>
      <DatePicker
        selected={date}
        onChange={(selection) => onSelected(selection)}
      />
      <Typography>{JSON.stringify(today)}</Typography>
    </Box>
  );
}
