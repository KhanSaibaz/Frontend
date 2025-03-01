import "./App.css";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import Navbar from "./components/pages/Navbar";
import Login from "./components/pages/Login";
import Tasks from "./components/pages/Tasks";

function App() {
    const navigate = useNavigate();
    const [isAuth, setIsAuth] = useState(false);

    useEffect(() => {
        const authStatus = Cookies.get("isAuth");
        if (authStatus) {
            setIsAuth(true);
        } else {
            setIsAuth(false);
            navigate("/");
        }
    }, [navigate]);

    return (
        <>
            {isAuth && <Navbar />}
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/task" element={<Tasks /> }/>
            </Routes>
        </>
    );
}

export default App;
