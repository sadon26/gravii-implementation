import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import {Route, BrowserRouter, Switch} from 'react-router-dom' 
import Product from './components/Product'
import AboutUs from './components/AboutUs'
import Contact from './components/Contact'

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <NavBar />
      <Switch>
      <Route exact path="/product" component={Product} />
      <Route exact path="/aboutus" component={AboutUs} />
      <Route exact path="/contact" component={Contact} />
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
