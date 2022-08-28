import { Container, CssVarsProvider } from "@mui/joy";
import "./App.css";
import DailyCard from "./DailyCard";
import DatePickerPage from "./components/DatePicker/DatePicker";
import Logo from "./components/Logo/Logo";
import { useStorage } from "./hooks/useLocalStorage";
import { theme } from "./theme";

function App() {
  const [dailyCards] = useStorage("dailyCards");
  return (
    <CssVarsProvider theme={theme}>
      <div className="App">
        <DatePickerPage />
        <Container maxWidth="sm">
          <Logo />
          <DailyCard cards={dailyCards} />
        </Container>
      </div>
    </CssVarsProvider>
  );
}

export default App;
