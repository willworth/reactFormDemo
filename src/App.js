import React from "react";
import "./App.css";
import BoxList from "./BoxList";
import NewBoxForm from "./NewBoxForm";

function App() {
  return (
    <div className="App">
      <h1>this is the main app</h1>
      <NewBoxForm />
      <BoxList />
    </div>
  );
}

export default App;
