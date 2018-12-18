import React, { Component } from 'react'
import { Grid, Row, Col, FormControl, Button} from 'react-bootstrap'
import './App.css'
import Logo from "./assets/logo.png"
import HandPhone from "./assets/hand-phone.png"
import GooglePlay from "./assets/google-play-badge.png"
import AppStore from "./assets/app-store-badge.png"
import Mac from "./assets/mac.png"
import Phone from "./assets/phone.png"
import Download from "./assets/download.png"
import Book from "./assets/book.png"
import Home from "./assets/home.png"

class App extends Component {
  
  render() {
    return (
      <div>
      <Grid className="header">
        <Row>
          <Col md={6} lg={6} sm={12} xs={12} className="logo--wrapper">
          <img src={Logo} title="HealthCare" alt="HealthCare" />
          </Col>
          <Col md={6} lg={6} sm={12} xs={12} className="contact-us-button--wrapper hidden-xs hidden-sm">
            <a className="contact-btn" href="#contact">CONTACT US</a>
          </Col>
          <Col md={7} lg={7} sm={12} xs={12}>
          <div className="heading">
            Get the <health>Health</health><care>Care</care> you need
          </div>
          <div className="heading--info">
          Quality medical care at the comfort of your own home. 
          </div>
          </Col>
          <Col md={5} lg={5} className="hidden-sm hidden-xs hand-phone-wrapper">
          <img src={HandPhone} title="HealthCare" alt="HealthCare" />
          </Col>
          <Col md={12} lg={12} className="download-apps">
            <div className="download--label">
              Available on:
            </div>
            <div className="hidden-sm hidden-xs">
            <img src={GooglePlay} title="HealthCare" alt="HealthCare" />
            <img src={AppStore} title="HealthCare" alt="HealthCare" />
            </div>
            <div className="hidden-lg hidden-md text-center">
            <img src={GooglePlay} title="HealthCare" alt="HealthCare" />
            <img src={AppStore} title="HealthCare" alt="HealthCare" />
            </div>
          </Col>
        </Row>
      </Grid>
      <Grid className="partner">
        <Row>
          <Col md={6} lg={6} sm={12} xs={12} className="partner-images">
          <img src={Mac} title="HealthCare" alt="HealthCare" />
          <img src={Phone} className="partner-images--phone" title="HealthCare" alt="HealthCare" />
          </Col>
          <Col md={6} lg={6} sm={12} xs={12} className="partner-info">
            <div className="heading">Be a <health>Health</health><care>Care</care> Partner</div>
            <div>Be easily accessible to those who need your services.</div>

          </Col>
        </Row>
      </Grid>
      <Grid className="how">
        <Row>
          <Col md={12} lg={12} className="heading">How <health>Health</health><care>Care</care> app works</Col>
          <Col md={4} lg={4} className="text-center">
            <img src={Download} title="HealthCare" alt="HealthCare" />
            <Col md={12} lg={12} className="heading-two">Download the app on your phone</Col>
            <Col md={12} lg={12} className="info"></Col>
          </Col>
          <Col md={4} lg={4} className="text-center">
            <img src={Book} title="HealthCare" alt="HealthCare" />
            <Col md={12} lg={12} className="heading-two">Schedule an appointment</Col>
            <Col md={12} lg={12} className="info"></Col>
          </Col>
          <Col md={4} lg={4} className="text-center">
            <img src={Home} title="HealthCare" alt="HealthCare" />
            <Col md={12} lg={12} className="heading-two">Get medical care without the long wait</Col>
            <Col md={12} lg={12} className="info"></Col>
          </Col>
        </Row>
      </Grid>
      <Grid className="download text-center">
        <Row>
        <Col md={12} lg={12} className="heading">Download the App</Col>
        <div className="clearfix" />
        <hr />
        <Col md={12} lg={12} className="info">HealthCare gives you access to expert medical care without the long wait, whether at home or at a clinic of your choice.</Col>
        <div className="clearfix" />
        <a className="download-btn" href="">DOWNLOAD</a>
        </Row>
      </Grid>
      <Grid className="contact" id="contact">
        <Row>
          <Col md={6} lg={6} sm={12} xs={12}>
            <Col md={12} lg={12} className="heading">Questions? Let Us Know!</Col>
            <Col md={12} lg={12} className="info">We’d love to hear from you!</Col>
            <Col md={6} lg={6} sm={12} xs={12}>
              <FormControl type="text" placeholder="First Name" />
            </Col>
            <Col md={6} lg={6} sm={12} xs={12}>
              <FormControl type="email" placeholder="Email Address" />
            </Col>
            <Col md={6} lg={6} sm={12} xs={12}>
              <FormControl type="text" placeholder="Last Name" />
            </Col>
            <Col md={6} lg={6} sm={12} xs={12}>
              <FormControl type="text" placeholder="Mobile Number" />
            </Col>
            <Col md={12} lg={12}>
            <FormControl componentClass="textarea" placeholder="Type your message here..." />
            </Col>
            <Col md={12} lg={12}><Button bsStyle="primary">SUBMIT</Button></Col>
          </Col>
          <Col md={6} lg={6} sm={12} xs={12} className="map">
            <Col lg={12} md={12} className="rp">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.4557755527057!2d121.0579043147034!3d14.573085781657591!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c86962dc81a3%3A0x578b2cb6cdb5e8a6!2sHealthCare+Training+Advantage+Institute!5e0!3m2!1sen!2sph!4v1524481447299" width="100%" height="430" frameBorder="0" allowFullScreen></iframe>
            </Col>
            <Col md={12} lg={12} className="info">HealthCareApp Copyright 2018 | Terms of Service | Privacy Policy</Col>
          </Col>
        </Row>
      </Grid>
      </div>
    );
  }
}

export default App;
