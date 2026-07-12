import { createRoot } from "react-dom/client";
import App from "./App.jsx";

// const Greeting = ({ name }) => {
//     return <h1>Hello {name}</h1>;
// }

createRoot(document.getElementById("root")).render(
    <App name='C'/>
)