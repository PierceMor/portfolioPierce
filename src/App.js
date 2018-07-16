import React, { Component } from 'react';
import { Browser as Router, Route } from "react-router-dom";
import Navbar from "./components/navbar.js";
import Footer from "./components/footer.js";
import Home  from "./pages/home.js";
import Contact from "./pages/contact.js";
import Portfolio from "./pages/portfolio.js";
import Funstuff from "./pages/funStuff.js";

class App extends Component {
  render(){
    return( 
      <Router>
        <div>
          <div className="main">
            <Navbar />
            <Route exact path="/" component={Home} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/portfolio" component={Portfolio} />
            <Route exact path="/funstuff" component={Funstuff} />
          </div>
          <Footer />
        </div>
      </Router>
    )//return
  }//render
}//App

export default App;