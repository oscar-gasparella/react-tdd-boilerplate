import React from "react";
import "./App.css";

const App: React.FC = () => {
  const message = "Hello, world!";

  return <h1 className="hello">{message}</h1>;
};

export default App;
