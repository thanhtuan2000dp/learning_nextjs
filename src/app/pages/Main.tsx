"use client";
function handleClick() {
    console.log("Hello");
}

export default function Main(props: { title: string }) {
    return (
        <div>
            Hello From {props.title}
            <button onClick={handleClick}>Click me</button>
        </div>
    );
}
