import Footer from "../components/Footer";
import Header from "../components/Header";

export default function LearningRoutingLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <section>
            <Header title="Learning routing Header">
                <h1>tesst</h1>
            </Header>
            <nav>{children}</nav>
            <Footer title="Learning routing Footer" />
        </section>
    );
}
