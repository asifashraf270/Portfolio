import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
export default class Navbar extends Component {
    render() {
        return (
            <div>
    <header className="header_area">
    <div className="container ">
      <nav className="navbar navbar-default">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
          </button>
        </div>
        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul className="nav navbar-nav navbar-right">
          <li className="active"><NavLink to='/'>Home </NavLink></li>
            <li><NavLink activeStyle={{color:"white"}} to='/AboutMe'>ABOUT ME </NavLink></li>
            <li><NavLink activeStyle={{color:"white"}} to='/Skills'>Skills</NavLink></li>
            <li><NavLink activeStyle={{color:"white"}} to='/GitContribution'>Git Contribution</NavLink></li>
            <li><NavLink activeStyle={{color:"white"}} to='/Experience'>Experience</NavLink></li>
            <li><NavLink activeStyle={{color:"white"}} to='/Projects'>Projects</NavLink></li>
            <li><NavLink activeStyle={{color:"white"}} to='/Education'>Education</NavLink></li>
            <li><NavLink activeStyle={{color:"white"}} to='/Contact'>CONTACT</NavLink></li>
          </ul>
        </div>
      </nav>
    </div>
  </header>
            </div>
        )
    }
}
