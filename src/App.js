import React, { Component } from 'react';

import {
	BrowserRouter as Router,
	Route
} from 'react-router-dom';

import Header from './Header.js';
import Main from './Main.js';
import Navigation from './Navigation.js';
import Footer from './Footer.js';
import Blog1 from './Blog1.js';
import Blog2 from './Blog2.js';
import Blog3 from './Blog3.js';

import './App.css';

class App extends Component {

 
  render() {

    return (
      <Router>
      <div className="App">
        
      <Header />
      <div>

      <Route exact path='/' component={Main} />
      <Route path='/Blog1' component={Blog1} />
      <Route path='/Blog2' component={Blog2} />
      <Route path='/Blog3' component={Blog3} />
      <Navigation />
      </div>

      <div>
   		<Footer />
      </div>

      </div>
      </Router>
    );
  } 
}

export default App;
