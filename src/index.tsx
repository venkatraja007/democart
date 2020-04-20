import * as React from "react";
import {render} from "react-dom";
import App from "./components/App";
import '../src/index.scss'
const rootElement = document.getElementById("root");

render(
    <App/>,
    rootElement,
);
