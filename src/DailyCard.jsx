import { Button, Card, CardOverflow } from "@mui/joy";
import Banner from "./components/Banner/Banner";
import Gratitudes from "./components/Gratitudes/Gratitudes";
import Thoughts from "./components/Thoughts/Thoughts";
// import { useStorageByDay } from "./hooks/useLocalStorage";

const DailyCard = ({ day, today, cards }) => {
  // const [dailyCard, setDailyCard] = useStorageByDay("dailyCards", day);
  // const saveHandler = () => {
  //   dailyCard.sparkly = !dailyCard.sparkly;
  //   setDailyCard({ ...dailyCard });
  // };

  return (
    <Card variant="outlined">
      <CardOverflow>
        <Banner day={day} today={today} cards={cards} />
      </CardOverflow>

      <Gratitudes day={day} today={today} cards={cards} />
      <Thoughts day={day} today={today} cards={cards} />
      {/* <Button onClick={saveHandler}>Sparkly</Button> */}
      <Button variant="soft">Add to favorites</Button>
    </Card>
  );
};

export default DailyCard;
