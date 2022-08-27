// import Notes from "./pages/Notes/Notes";
import { Link, Outlet } from "react-router-dom";

export default function Home() {
    return (
        <div className="home">
            <Link to={"/notes"}>Notes</Link>
            <Link to={"/seals"}>Seals</Link>
            <Outlet />
        </div>
    );
}
