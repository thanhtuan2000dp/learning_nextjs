"use client";
import UserContext from "@/app/contexts/UserContext";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import { useState } from "react";

export default function LearnContextApi() {
    const [user] = useState({ name: "Tuấn", email: "thanhtuan@gmail.com" });
    return (
        <div>
            <UserContext.Provider value={user}>
                <Header title="Header of Learn Context API">
                    <h1></h1>
                </Header>
                <Footer title="Footer of Learning Context API" />
            </UserContext.Provider>
        </div>
    );
}
