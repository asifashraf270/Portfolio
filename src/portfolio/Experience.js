import React, { Component } from 'react'

export default class Experience extends Component {
    render() {
        return (
     
         <div className="container main_container newone_container">
           <div className="content_inner_bg row m0">
           <section className="education_area pad" id="experience">
        <div className="main_title">
          <h2>Experience</h2>
        </div>
        <div className="education_inner_area">
          <div className="education_item wow fadeInUp animated" data-line="B">
          <h6>Oct 2019-Feb-2019</h6>
            <a target="_blank" href="https://wgroup.tech">
              <h4>Reactjs dev</h4>
            </a>
            <h5>W Group</h5>
          </div>
  
          <div className="education_item wow fadeInUp animated b_section" data-line="A">
            
            <h6>Jan 2019-Mar 2019</h6>
            <a target="_blank" href="https://www.technerds.com">
              <h4>Laravel Intern</h4>
            </a>
            <h5>TechNerds</h5>
          </div>
        </div>
        </section>
        </div>
       </div>
      
        )
    }
}
