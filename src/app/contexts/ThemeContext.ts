import { createContext, useContext } from "react";

const ThemeContext = createContext({ theme: "light", toggleTheme: () => {} });

export default ThemeContext;
export const useTheme = () => useContext(ThemeContext);
