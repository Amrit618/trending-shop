import React from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";

function App() {
  return (
    <div className="App">
      <Cart />
    </div>
  );
}

export default App;
