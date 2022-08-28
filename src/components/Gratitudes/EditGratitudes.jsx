import { Box, Typography } from "@mui/joy";
import Gratitude from "./Gratitude";
import CreateGratitude from "./CreateGratitude";
import { useStorageByDay } from "../../hooks/useLocalStorage";

const EditGratitudes = ({ day }) => {
  // const today = new Date().toLocaleDateString();
  const [gratitudes] = useStorageByDay("gratitudes", day);

  return (
    <Box sx={{ height: "200px" }}>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Typography level="h4">Today, I am grateful for:</Typography>
      </Box>
      {gratitudes.length < 3 && <CreateGratitude day={day} />}
      {gratitudes &&
        gratitudes.map((gratitude) => (
          <Gratitude key={gratitude.id} gratitude={gratitude} />
        ))}
    </Box>
  );
};

export default EditGratitudes;
