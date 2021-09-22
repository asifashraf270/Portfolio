import React, { Component } from 'react'
import SkillBar from 'react-skillbars';
import Skillbars from './Skillbars'
export const SKILLS = [
  {type: "REACTJS", level: 70},
  {type: "REDUX", level: 60},
  {type: "JAVASCRIPT", level: 50},
  {type: "JQUERY", level: 50},
  {type: "BOOTSTRAP", level: 50},
  
];
const COLORS = {
  "bar": "#27a79a",
  "title": {
    "text": {
      "hue": 170,
      "saturation": {
        "minimum": 30,
        "maximum": 70
      },
      "level": 90
    },
    "background": {
      "hue": 170,
      "saturation": {
        "minimum": 30,
        "maximum": 70
      },
      "level": {
        "minimum": 20,
        "maximum": 20
      }
    }
  }
}
export default class Skills extends Component {
    render() {
        return (
       
         <div className="container main_container newone_container">
           <div className="content_inner_bg row m0">
           <section className="myskill_area pad" id="skill">
            <div className="main_title">
              <h2>My Skills</h2>
            </div>
            <div className="row ">
              <div className="col-md-6 wow fadeInUp">
                <div className="skill_text">
                  <h4>Web development Skills</h4>                 
                </div>
                <div >
                  <SkillBar  skills={SKILLS} colors={COLORS} />
                </div>
              </div>
              {/* paste skills here  */}
              <div className="row" style={{marginTop: '25px'}}>
                <div className="col-md-6 wow fadeInUp">
                  <div className="skill_text ">
                    <h4>{/* Web development Skills */}</h4>
                    
                  </div>
                  <div className="skill_item_inner">
                    {/*  */}
                  <Skillbars />
                  </div>
                </div>
              </div>
            </div>
      </section> 
        </div>
       </div>
      
        )
    }
}
