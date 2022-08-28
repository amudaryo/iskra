import Card from "@mui/joy/Card";
import { AspectRatio, CardOverflow, Typography } from "@mui/joy/";

const MiniDailyCard = ({ day, card }) => {
  const placeholder =
    "https://images.unsplash.com/photo-1519751138087-5bf79df62d5b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Z2xpdHRlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60";
  return (
    <Card
      sx={{
        display: "flex",
        justifyContent: "center",
        height: "75px",
        width: "75px",
      }}
      variant="outlined"
    >
      <CardOverflow>
        <AspectRatio ratio={4 / 3}>
          <img
            alt={day}
            src={
              card && card.banner && card.banner.length
                ? card.banner
                : placeholder
            }
          />
        </AspectRatio>
      </CardOverflow>
      <Typography>{day}</Typography>
    </Card>
  );
};

export default MiniDailyCard;
