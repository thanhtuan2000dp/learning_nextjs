import Link from "next/link";

export default function Home() {
    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
            <Link href="/learning-routing">Learning routing</Link>
            <Link href="/pages">Pages</Link>
            <Link href="/pages/caculation">Caculation App</Link>
            <Link href="/pages/list-render-el">List render elements</Link>
            <Link href="/pages/learn-context-api">Learn Context API</Link>
            <Link href="/pages/learn-custom-hook">Learn Custom Hook</Link>
            <Link href="/pages/learn-HOC">
                Learn HOC (Higher order Component)
            </Link>
        </div>
    );
}
