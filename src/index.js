import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Coindata from "./Coindata";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<App/>}/>
    <Route path="/Coindata/:id" element={<Coindata/>}/>
    </Routes>
    </BrowserRouter>
);
