"use client";
import { useState } from "react";
// const data = [
//     { name: "Fried Chicker", calories: "250 cal", price: "100$" },
//     { name: "Vegetables", calories: "50 cal", price: "25$" },
//     { name: "Potato", calories: "150 cal", price: "75$" },
// ];
export default function ListRender() {
    const [data, setData] = useState([
        { id: 1, name: "Fried Chicker", calories: "250 cal", price: "100$" },
        { id: 2, name: "Vegetables", calories: "50 cal", price: "25$" },
        { id: 3, name: "Potato", calories: "150 cal", price: "75$" },
    ]);
    const listFoods = data.map((food) => (
        <li>
            {food.name} - {food.calories}
            <input type="text" />
        </li>
    ));

    const handleReverse = () => {
        setData([...data].reverse());
    };

    return (
        <div>
            <ul>
                {data.map((a, index) => (
                    <li key={index}>
                        {a.name} - {a.calories}
                        <input type="text" />- {a.price}
                    </li>
                ))}
            </ul>
            <button onClick={handleReverse}>Reverse List</button>
        </div>
    );
}
