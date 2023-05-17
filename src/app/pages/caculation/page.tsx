"use client";
import { useRef, useState } from "react";
import "./index.css";

export default function Caculation() {
    const inputRef = useRef<HTMLInputElement>(null);
    const resultRef = useRef<HTMLInputElement>(null);
    const [result, setResult] = useState(0);

    const plus = (e: any) => {
        e.preventDefault();
        setResult(result + Number(inputRef.current?.value));
    };
    const minus = (e: any) => {
        e.preventDefault();
        setResult(result - Number(inputRef.current?.value));
    };
    const times = (e: any) => {
        e.preventDefault();
        setResult(result * Number(inputRef.current?.value));
    };
    const devide = (e: any) => {
        e.preventDefault();
        setResult(result / Number(inputRef.current?.value));
    };

    const resetInput = (e: any) => {
        e.preventDefault();
        inputRef.current!.value = "0";
    };

    const resetResult = (e: any) => {
        e.preventDefault();
        setResult(0);
    };

    return (
        <div className="calculation-container">
            <h1>Caculation Page</h1>
            <h3 ref={resultRef}>{result}</h3>
            <input placeholder="Nhập phép toán" ref={inputRef}></input>
            <div className="list-btn">
                <button onClick={plus}>Add</button>
                <button onClick={minus}>Minus</button>
                <button onClick={times}>Times</button>
                <button onClick={devide}>Devide</button>
                <button className="reset-input-btn" onClick={resetInput}>
                    Reset Input
                </button>
                <button className="reset-result-btn" onClick={resetResult}>
                    Reset Result
                </button>
            </div>
        </div>
    );
}
