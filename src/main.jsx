import "./index.css";
import React from "react";
import App from "./App.jsx";
// import store from "./redux/store.js";
// import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import { ClerkProvider } from "@clerk/clerk-react";

const clerk_key = import.meta.env.VITE_CLERK_KEY;

console.log(clerk_key);

if(!clerk_key) {
  throw new Error("Missing clerk key");
}

ReactDOM.createRoot(document.getElementById("root")).render(
  // <Provider store={store}>
  <ClerkProvider publishableKey={clerk_key}>
  <App />
  </ClerkProvider>
);
