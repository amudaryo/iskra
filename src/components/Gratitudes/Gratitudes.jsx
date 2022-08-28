import { Box, Typography } from "@mui/joy";
import Gratitude from "./Gratitude";

const Gratitudes = ({ day, cards }) => {
  const gratitudes = cards[day].gratitudes;

  return (
    <Box sx={{ height: "200px" }}>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Typography level="h4">On the {day}, I was grateful for:</Typography>
      </Box>
      {gratitudes &&
        gratitudes.map((gratitude) => (
          <Gratitude key={gratitude.id} gratitude={gratitude} />
        ))}
    </Box>
  );
};

export default Gratitudes;
