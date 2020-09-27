import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./pages/HomePage";
import About from "./pages/AboutPage";
import Products from "./pages/ProductsPage";
import Contact from "./pages/ContactPage";
import SingleProduct from "./pages/SingleProductPage";
import Default from "./pages/DefaultPage";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import SideCart from "./components/SideCart";

import "./App.css";

function App() {
  return (
    <div className="App">
      {/* navbar, sidebar, cart, footer */}
      <Navbar />
      <Sidebar />
      <SideCart />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/Products" component={Products} />
        <Route path="/Contact" component={Contact} />
        <Route path="/Product/:id" exact component={SingleProduct} />
        <Route path="/Default" component={Default} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
