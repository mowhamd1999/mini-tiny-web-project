import React from "react";
import "./App.css";

import "bootstrap/dist/css/bootstrap.css";

import { useRoutes } from "react-router-dom";

import Header from "./Proje1/Header";
import routes from "./routes";

export default function App() {
  let router = useRoutes(routes);
  return (
    <div>
      <div className="App">
        <Header></Header>
        {router}
      </div>
    </div>
  );
}