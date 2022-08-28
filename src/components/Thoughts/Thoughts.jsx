import { Box, Card, Sheet, Typography } from "@mui/joy";

const Thoughts = ({ day, cards }) => {
  console.log(cards);
  const thoughts = cards[day].thoughts;

  return (
    <Sheet sx={{ mb: 2 }}>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Typography level="h4">My thoughts on the {day}:</Typography>
      </Box>
      <Box sx={{ height: "150px" }}>
        <Card variant="outlined">
          <Typography sx={{ minHeight: "90px" }}>
            {thoughts && thoughts.length
              ? thoughts
              : "I did not write anything this day."}
          </Typography>
        </Card>
      </Box>
    </Sheet>
  );
};

export default Thoughts;
