import React from "react";
import ReactDOM from "react-dom/client";
//import App from './App.tsx'
import "./index.css";
import { Application } from "./components/application/Application.tsx";
import { Counter } from "./components/counter/Counter.tsx";
import { DummyProvider } from "./providers/DummyProvider.tsx";
import ThemeMode from "./components/themeMode/ThemeMode.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <DummyProvider>
      <ThemeMode />
    </DummyProvider>
  </React.StrictMode>
);
