import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
import {TinyButton as ScrollUpButton} from "react-scroll-up-button";
export default class Footer extends Component {
    render() {
        return (
            <div>
                <footer className="footer_area">
    <div className="footer_inner">
      <div className="container">
        <ul className="social_icon">
          <li><a href="https://github.com/Faisal700" target="_blank"><i className="fa fa-github" /></a></li>
          <li><a href="https://bitbucket.org/%7B7410d184-2d78-4ea6-97e8-5f726ded7b5b%7D/" target="_blank"><i className="fa fa-bitbucket" /></a></li>
          <li><a href="https://www.linkedin.com/in/faisal-sandhu-2a2254168/" target="_blank"><i className="fa fa-linkedin" /></a></li>
          <li><a href="https://join.skype.com/invite/oLsdDRytTeN5" target="_blank"><i className="fa fa-skype" /></a></li>
          <li><a href="https://web.whatsapp.com/send?phone=923024096006" target="_blank"><i className="fa fa-whatsapp" /></a></li>
          <li><a href="https://stackoverflow.com/users/11026941/faisal-sandhu" target="_blank"><i className="fa fa-stack-overflow" /></a></li>
          <li><a href="https://web.facebook.com/faisal.fabian.3" target="_blank"><i className="fa fa-facebook" /></a></li>
        </ul>
      </div>
    </div>
    <div className="footer_copyright">
      <div className="container">
        <div className="pull-left">
          <h5>
          </h5>
        </div>
        <div className="pull-right">
          <ul className="nav navbar-nav navbar-right">
          <li className="active"><NavLink to='/'>Home </NavLink></li>
            <li><NavLink activeStyle={{color:"#27a79a"}} to='/AboutMe'>ABOUT ME </NavLink></li>
            <li><NavLink activeStyle={{color:"#27a79a"}} to='/Skills'>Skills</NavLink></li>
            <li><NavLink activeStyle={{color:"#27a79a"}} to='/GitContribution'>Git Contribution</NavLink></li>
            <li><NavLink activeStyle={{color:"#27a79a"}} to='/Experience'>Experience</NavLink></li>
            <li><NavLink activeStyle={{color:"#27a79a"}} to='/Projects'>Projects</NavLink></li>
            <li><NavLink activeStyle={{color:"#27a79a"}} to='/Education'>Education</NavLink></li>
            <li><NavLink activeStyle={{color:"#27a79a"}} to='/Contact'>CONTACT</NavLink></li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
  <ScrollUpButton style={{ position: 'fixed',
  bottom: 120,
  right: 150,
  cursor: 'pointer',
  transitionDuration: '0.2s',
  transitionTimingFunction: 'linear',
  transitionDelay: '0s'}}/>
            </div>
        )
    }
}
