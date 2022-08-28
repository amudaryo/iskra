import Card from "@mui/joy/Card";
import { AspectRatio, CardOverflow, Typography } from "@mui/joy/";

const MiniDailyCard = ({ day, card }) => {
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
          <img alt={day} src={card.banner} />
        </AspectRatio>
      </CardOverflow>
      <Typography>{day}</Typography>
    </Card>
  );
};

export default MiniDailyCard;
