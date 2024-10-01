import { render } from "solid-js/web";
import { Page } from "./components/Page";

function App() {
    return(
        <Page />
    );
}

render(App, document.querySelector("main"));
