import React, { Component } from 'react'
import GitHubCalendar from 'react-github-calendar';
export default class Calander extends Component {
    render() {
        return (
            <div>
               <GitHubCalendar username="asifashraf270" fullYear={false} blockSize={10} blockMargin={4}/> 
            </div>
        )
    }
}
