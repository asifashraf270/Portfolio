import React, { Component } from 'react'
import GitHubCalendar from 'react-github-calendar';
export default class GitContribution extends Component {
    render() {
        return (
            
             <div className="container main_container newone_container">
              <div className="content_inner_bg row m0">
              <section className="about_person_area pad" id="contirbutions">
       
        <div className="row">
          <div className="col-md-12">
            <a style={{textTransform: 'none'}} href="https://github.com/Faisal700" target="_blank">
              <div className="row person_details">
                <div className="calendar">
                <GitHubCalendar username="Faisal700" fullYear={false} blockSize={10} blockMargin={10}/> 
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>
           </div>
          </div>
         
        )
    }
}
