import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./component/Login.jsx";
import './App.css';


class App extends React.Component {
  render() {
  return (
    <div className="App">
      <Login />
    </div>
  );
}
}


export default App;
