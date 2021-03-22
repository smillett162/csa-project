import './App.css';

import {BrowserRouter} from "react-router-dom";

import Page from "./components/Page";

import React from "react";

const App = () => {


  return (
    <BrowserRouter>
      <Page/>
    </BrowserRouter>
  )
};

export default App;
