import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useStorage } from "../../hooks/useLocalStorage";

export default function DatePickerPage() {
  const [date, setDate] = useState(new Date());
  const [today, setToday] = useStorage("today");

  const onSelected = (selection) => {
    console.log(selection);
    const formatedDate = selection.toLocaleDateString();
    setDate(selection);
    setToday(formatedDate);
  };

  return (
    <div>
      <div style={{ position: "absolute", right: 0 }}>
        <DatePicker
          selected={date}
          onChange={(selection) => onSelected(selection)}
        />
        <p>Today is the {today}</p>
      </div>
    </div>
  );
}
