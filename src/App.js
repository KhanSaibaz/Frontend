import "./App.css";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "./components/pages/Navbar";
import Login from "./components/pages/Login";
import Tasks from "./components/pages/Tasks";

function App() {
    const navigate = useNavigate();
    const location = useLocation(); // Get current location
    const [isAuth, setIsAuth] = useState(false);

    useEffect(() => {
        const authStatus = localStorage.getItem("authToken");  
        if (authStatus) {
            setIsAuth(true);
        } else {
            setIsAuth(false);
            navigate("/");
        }
    }, [navigate]);

    return (
        <>
            {location.pathname !== "/" && <Navbar />}
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/task" element={<Tasks />} />
            </Routes>
        </>
    );
}

export default App;
