import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/navbar.js";
import Footer from "./components/footer.js";
import Home  from "./pages/home.js";
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

// import Contact from "./pages/contact.js";
import Projects from "./pages/projects.js";
// import Funstuff from "./pages/funStuff.js";

const theme = createMuiTheme();

class App extends Component {
  render(){
    return( 
      <MuiThemeProvider theme={theme}>
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
      </MuiThemeProvider>
    )//return
  }//render
}//App

export default App;