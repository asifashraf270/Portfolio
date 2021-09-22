import React, { Component } from 'react'

export default class Contact extends Component {
    render() {
        return (
            
            <div className="container main_container newone_container">
              <div className="content_inner_bg row m0">
              <section className="contact_area pad" id="contact">
        <div className="main_title">
          <h2>Contact Me</h2>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="left_contact_details wow fadeInUp animated">
              <p>Feel free to get in touch with me. I am always open to discussing new projects, creative idea or opportunities to be part of your vision.</p>
              <div className="media">
                <div className="media-left">
                  <i className="fa fa-map-marker" />
                </div>
                <div className="media-body">
                  <h4>Location</h4>
                  <p>Lahore, Pakistan</p>
                </div>
              </div>
              <div className="media">
                <div className="media-left">
                  <i className="fa fa-phone" />
                </div>
                <div className="media-body">
                  <h4>Skype</h4>
                  <p><a href="https://join.skype.com/invite/oLsdDRytTeN5" target="_blank">live:faisalsandhu166</a></p>
                </div>
              </div>
              <div className="media">
                <div className="media-left">
                  <i className="fa fa-envelope-o" />
                </div>
                <div className="media-body">
                  <h4>Email</h4>
                  <p><a href="mailto:faisalabbas.bscs@gmail.com"><span>faisalabbas.bscs@gmail.com</span></a></p>
                </div>
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
