import React from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";

function App() {
  return (
    <div className="App">
      <ProductList />
    </div>
  );
}

export default App;
