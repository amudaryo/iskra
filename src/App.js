import { CssVarsProvider } from "@mui/joy";
import "./App.css";
import DailyCard from "./DailyCard";
import DatePickerPage from "./components/DatePicker/DatePicker";
import { useStorage } from "./hooks/useLocalStorage";
import { theme } from "./theme";
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import TodaysCard from "./TodaysCard";

function App() {
  const [cards] = useStorage("dailyCards");
  const [today] = useStorage("today");
  const [activeDays, setActiveDays] = useState([]);
  useEffect(() => {
    setActiveDays(Object.keys(cards));
  }, [cards]);
  return (
    <CssVarsProvider theme={theme}>
      <div className="App">
        <DatePickerPage />

        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <Home activeDays={activeDays} cards={cards} today={today} />
              }
            >
              {" "}
              <Route key={today} index element={<TodaysCard day={today} />} />
              {activeDays &&
                activeDays.map(
                  (day) =>
                    day !== today && (
                      <Route
                        key={day}
                        path={day}
                        element={
                          <DailyCard day={day} today={today} cards={cards} />
                        }
                      />
                    )
                )}
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </CssVarsProvider>
  );
}

export default App;
