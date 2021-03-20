import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Hero from './component/hero/';
import About from './component/about/';
import Header from './component/header/';
import Footer from './component/footer/';

import './App.css';

function App() {
  return(<div>
    <Router>
      <Header/>
        <Switch>
          <Route path='/' exact component={Hero}/>
          <Route path='/about'exact component={About}/>
        </Switch>
    </Router>
    <Footer/>
  </div>);
}

export default App;
