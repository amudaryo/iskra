import { Button, Card, CardOverflow } from "@mui/joy";
import { useEffect, useState } from "react";
import Banner from "./components/Banner/Banner";
import Gratitudes from "./components/Gratitudes/Gratitudes";
import MiniDailyCards from "./components/MiniDailyCards/MiniDailyCards.jsx";
import Thoughts from "./components/Thoughts/Thoughts";
import { useStorage, useStorageByDay } from "./hooks/useLocalStorage";
import { v4 as uuid } from "uuid";

const DailyCard = ({ cards }) => {
  const [today] = useStorage("today");
  const [activeDays, setActiveDays] = useState([]);
  const [dailyCard, setDailyCard] = useStorageByDay("dailyCards", today);
  const [dailyGratitudes] = useStorageByDay("gratitudes", today);
  const [thoughts] = useStorageByDay("thoughts", today);
  const [banner] = useStorageByDay("picture", today);

  const saveHandler = () => {
    const payload = {
      id: uuid(),
      banner: banner,
      gratitudes: dailyGratitudes,
      thoughts: thoughts,
    };
    setDailyCard(payload);
  };

  useEffect(() => {
    setActiveDays(Object.keys(cards));
  }, [cards]);

  return (
    <Card variant="outlined">
      <CardOverflow>
        <Banner day={today} />
      </CardOverflow>

      <Gratitudes />
      <Thoughts day={today} />
      <Button variant="soft" onClick={saveHandler}>
        Save today's card
      </Button>
      {activeDays && <MiniDailyCards activeDays={activeDays} cards={cards} />}
    </Card>
  );
};

export default DailyCard;
