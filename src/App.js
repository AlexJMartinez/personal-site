import './App.css';
import About from './Components/About';
import Contact from './Components/Contact';
import Home from './Components/Home';
import Portfolio from './Components/Portfolio';
import Art from './Components/Art';
import {BrowserRouter, Route, Switch} from 'react-router-dom'; 
import Nav from './Components/Navbar/Nav'
import React from 'react'

function App() {

  return (
    <div className="app">
      <BrowserRouter>
          <Nav/>
        <Switch>
          <Route path="/art" component={Art}/>
          <Route path="/portfolio" component={Portfolio}/>
          <Route path="/contact" component={Contact}/>
          <Route path="/about" component={About}/>
          <Route path="/" component={Home}/>
        </Switch>
      </BrowserRouter>
    </div>  
  );
  
}

export default App;
