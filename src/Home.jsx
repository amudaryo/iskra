import { Container } from "@mui/system";
import { Outlet } from "react-router-dom";
import Logo from "./components/Logo/Logo";
import MiniDailyCards from "./components/MiniDailyCards/MiniDailyCards";

const Home = ({ activeDays, cards, today }) => {
  return (
    <Container maxWidth="sm">
      <Logo />
      <Outlet />
      {activeDays && (
        <MiniDailyCards activeDays={activeDays} cards={cards} today={today} />
      )}
    </Container>
  );
};

export default Home;
