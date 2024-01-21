// Root Rendering:
// - Uses ReactDOM to render the main App component into the root element.
import React from "react";
import ReactDOM from "react-dom";

// Importing the main App component
import App from "./App";

// Rendering the App component inside React.StrictMode
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  // Rendering inside the element with id "root" in the HTML document
  document.getElementById("root")
);
