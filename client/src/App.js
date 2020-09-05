import React from "react";
import Routes from "./routes";
import { Router } from "react-router-dom";
import history from './services/history'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router history={history}>
      <Routes />
    </Router>
  );
}

export default App;
