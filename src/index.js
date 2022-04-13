import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import {BrowserRouter as Router} from 'react-router-dom';
import { ProductProvider } from "./context/ProductsContext";
import {PrivateProductsProvider} from "./context/PrivateProductsContext"

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router> 
      <ProductProvider>
      <PrivateProductsProvider>
    <App />
      </PrivateProductsProvider>
        </ProductProvider> 
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
