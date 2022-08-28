import { Card } from "@mui/joy";
import { Container } from "@mui/system";
import { Link, Outlet } from "react-router-dom";
import Logo from "./components/Logo/Logo";
import MiniDailyCard from "./components/MiniDailyCards/MiniDailyCard";
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
