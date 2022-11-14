import React from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";

function App() {
  return (
    <div className="App">
      <Product />
    </div>
  );
}

export default App;
