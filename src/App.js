import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/navbar.js";
import Footer from "./components/footer.js";
import Home  from "./pages/home.js";
// import Contact from "./pages/contact.js";
import Projects from "./pages/projects.js";
// import Funstuff from "./pages/funStuff.js";

class App extends Component {
  render(){
    return( 
      <Router>
        <div>
          <div className="main">
            <Navbar />
            <Route exact path="/" component={Home} />
            {/* <Route exact path="/contact" component={Contact} /> */}
            <Route exact path="/Projects" component={Projects} />
            {/* <Route exact path="/funstuff" component={Funstuff} /> */}
          </div>
          <Footer />
        </div>
      </Router>
    )//return
  }//render
}//App

export default App;