import * as React from "react";
import "./styles.scss";
import GlobalKeyboardPage from "./pages/global-keyboard";

export default function App() {
  return (
    <div className="App">
      <div>
        <input type="text" className="global-keyboard" />
      </div>
      <GlobalKeyboardPage />
    </div>
  );
}
