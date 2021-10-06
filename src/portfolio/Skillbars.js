import React, { Component } from 'react'
import SkillBars from 'react-skillbars';
export const NEWSKILLS = [
    {type: "XMPP(Client)", level: 70},
    {type: "WebRtc", level: 60},
    {type: "Linephone", level: 60},
    {type: "Amazon S3 ", level: 60},
    {type: "Retrofit", level: 85},
    {type:"Data ",level:80},
    {type:"Rx Java",level:70}

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
        "level": 100
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
export default class Skillbars extends Component {
    render() {
        
        return (
            <div>
            <SkillBars  skills={NEWSKILLS} colors={COLORS} />
            </div>
          )
    }
}
