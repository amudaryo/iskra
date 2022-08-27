import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import Logo from "./pages/Logo/Logo";

import DatePickerPage from "./pages/DatePicker/DatePicker";
import Notes from "./pages/Notes/Notes";
import Seals from "./pages/Seals/Seals";

function App() {
    return (
        <div className="App">
            <Logo />
            <DatePickerPage />

            {/* <Home /> */}

            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />}>
                        <Route path="/notes" element={<Notes />} />
                        <Route path="/seals" element={<Seals />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
