import React from 'react';
import './App.css';
import Navbar from "./components/Navbar"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Home from "./components/pages/Home"
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import Contact from "./components/pages/Contact";

function App() {
  return (
    <Router>
 <Navbar/>
 <Switch>
   <Route path="/" exact component={Home}></Route>
   <Route path="/services" component={Services}></Route>
   <Route path="/products" component={Products}></Route>
   <Route path="/contact" component={Contact}></Route>
 </Switch>
    </Router>
  ); 
}


export default App;
 