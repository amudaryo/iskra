import { Box, Typography } from "@mui/joy";
// import { useState } from "react";
import Gratitude from "./Gratitude";
import CreateGratitude from "./CreateGratitude";
import { useStorage, useStorageByDay } from "../../hooks/useLocalStorage";

const Gratitudes = () => {
  // const today = new Date().toLocaleDateString();
  const [today] = useStorage("today");
  const [gratitudes] = useStorageByDay("gratitudes", today);

  return (
    <Box sx={{ height: "200px" }}>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Typography level="h4">Today, I am grateful for:</Typography>
      </Box>
      {gratitudes.length < 3 && <CreateGratitude day={today} />}
      {gratitudes &&
        gratitudes.map((gratitude) => (
          <Gratitude key={gratitude.id} gratitude={gratitude} />
        ))}
    </Box>
  );
};

export default Gratitudes;
