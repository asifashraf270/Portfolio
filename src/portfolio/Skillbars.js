import React, { Component } from 'react'
import SkillBars from 'react-skillbars';
export const NEWSKILLS = [
    {type: "PHP", level: 70},
    {type: "MYSQL", level: 70},
    {type: "LARAVEL", level: 50},
    {type: "CSS", level: 60},
    {type: "HTML", level: 60},
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
export default class Skillbars extends Component {
    render() {
        
        return (
            <div>
            <SkillBars  skills={NEWSKILLS} colors={COLORS} />
            </div>
          )
    }
}
