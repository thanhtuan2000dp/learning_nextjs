import { createContext, useContext } from "react";

const UserContext = createContext({ name: "", email: "" });

export default UserContext;

export const useUser = () => useContext(UserContext);
