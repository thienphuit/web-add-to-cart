import React from 'react';
import './App.css';


import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import TopMenu from './components/TopMenu';
import Products from './pages/Products';


function App() {
  return (
    <Router>
    <div className="App">
     <TopMenu />
     <Route  path="/products" component={Products}/>
    </div>
    </Router>
  );
}


export default App;
