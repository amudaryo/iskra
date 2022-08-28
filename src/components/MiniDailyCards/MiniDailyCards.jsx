import { Box, Button, Card } from "@mui/joy/";
import { useState } from "react";
import { Link } from "react-router-dom";
import MiniDailyCard from "./MiniDailyCard";

const MiniDailyCards = ({ activeDays, cards, today }) => {
  const [offset, setOffset] = useState(0);
  const handlePlus = () => {
    setOffset(offset + 1);
  };
  const handleMinus = () => {
    setOffset(offset - 1);
  };
  return (
    <Card variant="outlined" row sx={{ flexDirection: "row-reverse", mt: 2 }}>
      <Link to="/" style={{ textDecoration: "none", marginLeft: "10px" }}>
        <MiniDailyCard day={today} card={cards[today]} />
      </Link>
      <Button variant="plain" size="sm" onClick={handleMinus}>
        {">"}
      </Button>
      <Box
        sx={{
          display: "flex",
          width: "350px",
          justifyContent: "space-around",
        }}
      >
        {activeDays.map(
          (day, index) =>
            day !== today &&
            index < offset + 3 &&
            index >= offset && (
              <Link to={day} key={day} style={{ textDecoration: "none" }}>
                <MiniDailyCard day={day} card={cards[day]} />
              </Link>
            )
        )}
      </Box>
      <Button variant="plain" size="sm" onClick={handlePlus}>
        {"<"}
      </Button>
    </Card>
  );
};

export default MiniDailyCards;
