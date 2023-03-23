import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";

export default function App() {
    const [theme, setTheme] = useState(false);
    const [font, setFont] = useState("");

    const toggleTheme = () => {
        setTheme((state) => !state);
    };

    const chooseFont = () => {
        const select = document.querySelector("select");
        setFont(select.value);
    };

    return (
        <div
            className={["global", theme ? "dark" : "", font ? font : ""].join(
                " "
            )}
        >
            <div className="container">
                <Header
                    toggle={toggleTheme}
                    chooseFont={chooseFont}
                    theme={theme}
                />
                <Main />
            </div>
        </div>
    );
}
