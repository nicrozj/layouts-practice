import { render } from "solid-js/web";
import "./tailwind/output.css"
import { AboutUsSection } from "./components/AboutUsSection";
import { ProcessingSection } from "./components/ProcessingSection";

function App() {
    return(
        <main>
            <AboutUsSection />
            <ProcessingSection />
        </main>
    );
}

render(App, document.querySelector("main"));
