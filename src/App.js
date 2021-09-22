import React, { Component } from 'react';
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom';
import Navbar from './portfolio/Navbar';
import Home from './portfolio/Home';
import Aboutme from './portfolio/Aboutme';
import Skills from './portfolio/Skills';
import GitContribution from './portfolio/GitContribution';
import Experience from './portfolio/Experience';
import Projects from './portfolio/Projects';
import Education from './portfolio/Education';
import Contact from './portfolio/Contact';
import Footer from './portfolio/Footer';
import Error from './portfolio/Error'
export default class App extends Component {
  render() {
    return (
      <div>
        
         <Router>
         <Navbar />
         <Switch>
           <Route exact path='/' component={Home}/>
           <Route path='/AboutMe' component={Aboutme} />
           <Route path='/Skills' component={Skills} />
           <Route path='/GitContribution' component={GitContribution} />
           <Route path='/Experience' component={Experience}/>
           <Route path='/Projects' component={Projects} />
           <Route path='/Education' component={Education} />
           <Route path='/Contact' component={Contact} />
           <Route path='/*' component={Error} />
           </Switch>
           <Footer />
         </Router>
      </div>
    )
  }
}
