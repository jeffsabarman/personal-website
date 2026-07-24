import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react"

interface ThemeToggleProps {

}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ }) => {
    // const [mode, setMode] = useState("")
    const [theme, setTheme] = useState<string>("dark");

    // const theme = window.localStorage.getItem("theme")

    useEffect(() => {
        setTheme(localStorage.getItem("theme") ?? "dark");
    }, []);

    const toogleTheme = () => {
        const nextTheme = theme === "dark" ? "light" : "dark";
        document.documentElement.classList.toggle("dark", nextTheme === "dark");
        localStorage.setItem("theme", nextTheme);
        setTheme(nextTheme);
    }

    return theme ? <button onClick={toogleTheme}>
        {
            theme === "dark" ?
                <Sun className="hover:text-dark-blue" size="1.4rem" /> :
                <Moon className="hover:text-dark-blue" size="1.4rem" />
        }
    </button> : <div style={{ width: "1.4rem", height: "1.4rem" }}></div>
}

export default ThemeToggle