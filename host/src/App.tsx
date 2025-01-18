import React from "react";
import ReactDOM from "react-dom/client";
import { RemoteContent } from "remote/RemoteContent";

import "./index.css";

const App = () => (
  <div className="container">
    <nav className="sidebar">
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/contact">Help</a>
        </li>
        <li>
          <a href="/login">Exit</a>
        </li>
      </ul>
    </nav>
    <section className="content">
      <RemoteContent />
    </section>
  </div>
);
const rootElement = document.getElementById("app");
if (!rootElement) throw new Error("Failed to find the root element");

const root = ReactDOM.createRoot(rootElement as HTMLElement);

root.render(<App />);

