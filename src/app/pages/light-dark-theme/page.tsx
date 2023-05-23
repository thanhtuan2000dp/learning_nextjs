"use client";
import ChangeThemeBody from "@/app/components/ChangeThemeBody";
import ChangeThemeHeader from "@/app/components/ChangeThemeHeader";
import ThemeContext from "@/app/contexts/ThemeContext";
import { useState } from "react";
import "./theme.scss";

export default function LightDarkTheme() {
    const [theme, setTheme] = useState("light");
    return (
        <div>
            <ThemeContext.Provider
                value={{
                    theme,
                    toggleTheme: () => {
                        setTheme(theme === "light" ? "dark" : "light");
                    },
                }}
            >
                <ChangeThemeHeader></ChangeThemeHeader>
                <ChangeThemeBody />
            </ThemeContext.Provider>
        </div>
    );
}
