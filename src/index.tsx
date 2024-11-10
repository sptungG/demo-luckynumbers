import { createRoot } from "react-dom/client";
import "./index.css";
import Routers from "./router";

const container = document.querySelector("#root");
const root = createRoot(container!);

root.render(
  <>
    <Routers />
  </>
);
