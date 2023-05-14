import Header from "./pages/Header";
import Main from "./pages/Main";
import Footer from "./pages/Footer";

export default function Home() {
    return (
        <div>
            <Header title="Header">
                <h3>abc</h3>
            </Header>
            <Main title="Main" />
            <Footer title="Footer" />
        </div>
    );
}
