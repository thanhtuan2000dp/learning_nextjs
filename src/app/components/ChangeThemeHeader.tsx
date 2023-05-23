import { useTheme } from "../contexts/ThemeContext";

export default function ChangeThemeHeader() {
    const { theme, toggleTheme } = useTheme();
    return (
        <div
            style={{
                display: "flex",
                position: "relative",
                justifyContent: "center",
            }}
            className={theme==='light' ? "body--light" : "body--dark"}
        >
            <h1>Little Lemon</h1>
            <input
                type="checkbox"
                style={{ position: "absolute", right: "2rem", top: "0" }}
                checked={theme === "light"}
                onChange={toggleTheme}
            ></input>
        </div>
    );
}
