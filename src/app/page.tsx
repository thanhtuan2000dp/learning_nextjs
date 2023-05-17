import Link from "next/link";

export default function Home() {
    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
            <Link href="/learning-routing">Learning routing</Link>
            <Link href="/pages">Pages</Link>
            <Link href="/pages/caculation">Caculation App</Link>
        </div>
    );
}
