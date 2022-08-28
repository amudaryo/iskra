import Card from "@mui/joy/Card";
import { Typography } from "@mui/joy/";

const Gratitude = ({ gratitude }) => {
  return (
    <Card
      row
      variant="outlined"
      color="primary"
      sx={{
        height: "30px",
        justifyContent: "center",
        alignItems: "center",
        p: "4px",
        m: "4px",
      }}
    >
      <Typography>✨ {gratitude.text}</Typography>
    </Card>
  );
};

export default Gratitude;
