"use client";
import { useState } from "react";
import RadioGroup from "./radio-group";
import RadioOption from "./radio-option";

export default function LearnJSXDeepDive() {
    const handleChange = (e: any) => {
        setSelected(e.target.value);
        console.log(e.target.value);
    };
    const [selected, setSelected] = useState("");
    return (
        <div>
            <RadioGroup onChange={handleChange} selected={selected}>
                <RadioOption value="social_media">Social Media</RadioOption>
                <RadioOption value="friends">Friends</RadioOption>
                <RadioOption value="advertising">Advertising</RadioOption>
                <RadioOption value="other">Other</RadioOption>
            </RadioGroup>
            <div>{selected}</div>
        </div>
    );
}
