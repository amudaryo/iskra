import { Box } from "@mui/joy/";
import MiniDailyCard from "./MiniDailyCard";

const MiniDailyCards = ({ activeDays, cards }) => {
  return (
    <Box sx={{ display: "flex", mt: 2 }}>
      {activeDays.map((day) => (
        <MiniDailyCard key={day} day={day} card={cards[day]} />
      ))}
    </Box>
  );
};

export default MiniDailyCards;
