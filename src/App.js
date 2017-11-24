import React from 'react';
import { Route } from 'react-router-dom';
import HomePage from "./components/pages/HomePage";
import AboutPage from "./components/pages/AboutPage";


const App = () => (

<div>
  <Route path="/" exact component = {HomePage} />
  <Route path="/about" exact component = {AboutPage} />

</div>
)

export default App;
