import { useTheme } from "../contexts/ThemeContext";

export default function ChangeThemeBody() {
    const { theme } = useTheme();
    console.log(theme);
    return (
        <div className={theme === "light" ? "body--light" : "body--dark"}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
            omnis reprehenderit qui exercitationem odio natus esse praesentium
            mollitia explicabo, doloribus deleniti vero commodi saepe ipsa
            consequuntur minima porro tempore maiores?
        </div>
    );
}
