import { Button, Card, CardOverflow } from "@mui/joy";
import { useStorageByDay } from "./hooks/useLocalStorage";
import { v4 as uuid } from "uuid";
import EditThoughts from "./components/Thoughts/EditThoughts";
import EditGratitudes from "./components/Gratitudes/EditGratitudes";
import EditBanner from "./components/Banner/EditBanner";

const TodaysCard = ({ day }) => {
  const [dailyCard, setDailyCard] = useStorageByDay("dailyCards", day);
  const [dailyGratitudes] = useStorageByDay("gratitudes", day);
  const [thoughts] = useStorageByDay("thoughts", day);
  const [banner] = useStorageByDay("picture", day);

  const saveHandler = () => {
    const payload = {
      id: uuid(),
      banner: banner,
      gratitudes: dailyGratitudes,
      thoughts: thoughts,
      sparkly: false,
    };
    setDailyCard(payload);
  };

  return (
    <Card variant="outlined">
      <CardOverflow>
        <EditBanner day={day} />
      </CardOverflow>

      <EditGratitudes day={day} />
      <EditThoughts day={day} />
      <Button variant="soft" onClick={saveHandler}>
        Save today's card
      </Button>
    </Card>
  );
};

export default TodaysCard;
