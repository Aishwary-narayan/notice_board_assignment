import React from 'react';
import './App.css';
import Nav from './Nav';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

//components
import InputNotice from "./components/inputNotice";
import ShowNotices from "./components/showNotices";


function App() {
  return (
    <Router>
    <div className="App">

      <Nav />
      <Route path='/showNotices' component={ShowNotices}/>

      <Route path='/' exact component={InputNotice}/>
      </div>
    </Router>
  )
}

export default App;
