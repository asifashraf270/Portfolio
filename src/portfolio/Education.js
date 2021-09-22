import React, { Component } from 'react'

export default class Education extends Component {
    render() {
        return (
            
             <div className="container main_container newone_container">
               <div className="content_inner_bg row m0">
               <section className="education_area pad" id="education">
        <div className="main_title">
          <h2>Education</h2>
        </div>
        <div className="education_inner_area">
          <div className="education_item wow fadeInUp animated" data-line="D">
          <h6>2019</h6>
            <a target="_blank" href="https://www.erozgaar.pitb.gov.pk">
              <h4>PHP Tech Domain(PITB)</h4>
            </a>
            <h5>PITB Punjab University Lahore</h5>
          </div>
          <div className="education_item wow fadeInUp animated" data-line="C">
          <h6>2014-2018</h6>
            <a target="_blank" href="http://www.lgu.edu.pk/">
              <h4>Bachelor of Computer Science (BSCS)</h4>
            </a>
            <h5>Lahore Garrison University, Main Campus</h5>
          </div>
          <div className="education_item wow fadeInUp animated b_section" data-line="B">
          <h6>2012-2014</h6>
            <a target="_blank" href="https://superiorcolleges.edu.pk/superior-college-hafizabad/">
              <h4>Higher Secondary School</h4>
            </a>
            <h5>Superior College Hafizabad</h5>
          </div>
          <div className="education_item wow fadeInUp animated a_section" data-line="A">
          <h6>2010-2012</h6>
            <a target="_blank" href="http://www.schoolinglog.com/school/MISALI-PUBLIC-SCHOOL-HAFIZABAD_181347.html">
              <h4>Secondary School</h4>
            </a>
            <h5>Misali Public School</h5>
          </div>
        </div>
      </section>
           </div>
          </div>
        )
    }
}
