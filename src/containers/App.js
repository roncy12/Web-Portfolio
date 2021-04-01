
import './App.css';
import Particles from 'react-particles-js';
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import profile from '../assets/profile.jpg';
import Robofriends from '../assets/Robofriends.png';
import FaceDetect from '../assets/Face-detect.png';
import github from '../assets/github.png';
import email from '../assets/email.png';
import Tilt from 'react-tilt';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';





const particlesOptions = {
  particles: {
    number: {
      value: 30,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
}





  class App extends Component {
    render(){
        return (
          
           <div className="App">
  
          
           <Navbar collapseOnSelect expand="lg" bg="dark" className="sticky-top navbar-background">
                      <Navbar.Brand href="#home" className="text-light">Web Developer</Navbar.Brand>
                      <Navbar.Toggle aria-controls="responsive-navbar-nav" className="text-light" bg="light" variant="light" />
                      <Navbar.Collapse id="responsive-navbar-nav" >
                        <Nav className="mr-auto">
                          <Nav.Link href="#Home" className="text-light">Home</Nav.Link>
                          <Nav.Link href="#About Me" className="text-light">About Me</Nav.Link>
                          <Nav.Link href="#Projects" className="text-light">Projects</Nav.Link>
                          <Nav.Link href="#Contacts" className="text-light">Contacts</Nav.Link>
                        </Nav>
                        <Nav>
                          <Nav.Link href="#deets" className="text-light">
                            <img src={github} alt="" className="icon-account" />
                          </Nav.Link>
                          <Nav.Link eventKey={2} href="#memes" className="text-light">
                            <img src={email} alt="" className="icon-account" />
                          </Nav.Link>

                        </Nav>
                      </Navbar.Collapse>
                    </Navbar>

                    <div id="hero" className="jumbotron">
                       <div className="container">
                       <h1 className="hero-title load-hidden" >
                        Hi, my name is <span className="text-info">John Roncy Nava</span>
                       <br />
                       I'm the Developer you need.
                       </h1>
                       <p className="hero-cta load-hidden" >
                        <a className="cta-btn cta-btn--hero" href="#about">Hire me</a>
                       </p>
                       </div>
                    </div>

               
                      <div className="container"><br />
                        <h2 className="section-title text-uppercase text-light">
                          About me
                        </h2>
                        <div className="row about-wrapper">
                          <div className="col-md-6 col-sm-12">
                            <div className="about-wrapper__image">
                               <Tilt className="Tilt" options={{ max : 25 }}  >
                                <img
                                  className="img-fluid rounded shadow-lg"
                                  height="auto"
                                  width="300px"
                                  src={profile}
                                  alt=""
                                />
                                </Tilt>
                            </div>
                          </div>
                          <div className="col-md-6 col-sm-12">                          
                              <div className="about-wrapper__info">
                                <p className="about-wrapper__info-text text-justify text-white">
                                        Personal Skills  <br />
                                        • Skilled in designing user interfaces and websites <br />
                                        • Skilled in logical, analytical and computational skills. <br />
                                        • Have taken the Web Zero to Mastery on Udemy to expand my knowledge. <br />
                                        • Always willing to learn from colleagues. <br />
                                        • I used Drupal 8 on my website Project in our Thesis.

                                  </p>
                                 <p className="about-wrapper__info-text text-justify text-white">
                                      Technical <br />
                                            • Programming: Java, C++, Vb.net<br />
                                            • Database: Microsoft SQL<br />
                                            • Web Development: HTML5, CSS3, Java Script, React, Bootstrap 4, PHP, MySQL.<br />
                                            • Operating System: Windows

                                    </p>
                                        <span className="d-flex mt-3">
                                          <a target="_blank" className="cta-btn cta-btn--resume" href="#!">
                                            View Resume
                                          </a>
                                        </span>
                              </div>
                            </div>
                        </div>
                      </div>
              
     
    
                    <div className="container">
                      <div className="project-wrapper">
                        <h2 className="section-title dark-blue-text text-light">
                          Projects
                        </h2>
          
                        <div className="row">
                          <div className="col-lg-4 col-sm-12">
                            <div className="project-wrapper__text">
                              <h3 className="project-wrapper__text-title text-light">Robofriends</h3>
                              <div>
                                <p className="mb-4 text-light">
                                      First project created using React JS and Redux, 
                                      helps to understand a "search by name of robot" technique (project created for Udemy Web zero to mastery course)
                                  </p>
                              </div>                    
                              <a target="_blank" rel="noreferrer"  className="cta-btn cta-btn--hero" href="https://roncy12.github.io/Updated-Robofriends/">
                                See Live
                              </a>
                              <a target="_blank" rel="noreferrer" className="cta-btn text-color-main" href="https://github.com/roncy12/Updated-Robofriends">
                                Source Code
                              </a>
                            </div>
                          </div>
                          <div className="col-lg-8 col-sm-12">
                            <div className="project-wrapper__image">
                            <a href="https://roncy12.github.io/Updated-Robofriends/" rel="noreferrer" target="_blank">
                                <div data-tilt className="thumbnail rounded">
                                <Tilt className="Tilt" options={{ max : 25 }}  >
                                 <img className="img-fluid" alt="" src={Robofriends} />
                                </Tilt>
                                </div>
                            </a>
                            </div>


                          </div>
                        </div>
              
                    <div className="row">
                        <div className="col-lg-4 col-sm-12">
                          <div className="project-wrapper__text">
                            <h3 className="project-wrapper__text-title text-light">Face Recognition Web App in TypeScript with React, Express, Node, PostgreSQL</h3>
                            <div>
                              <p className="mb-4 text-light">
                                   The full stack face recognition app I built with React, Express, Node and PostgreSQL in TypeScript. This app was inspired by the excellent Udemy course The Complete Web Developer in 2020: Zero to Mastery by Andrei Neagoie.
                              </p>
                            </div>
                            <a target="_blank" rel="noreferrer" className="cta-btn cta-btn--hero" href="https://detect-smart-brain.herokuapp.com/">
                              See Live
                            </a>
                            <a target="_blank" rel="noreferrer" className="cta-btn text-color-main" href="https://github.com/roncy12/facerecognitionbrain/tree/master">
                              Source Code
                            </a>
                          </div>
                        </div>

                        <div className="col-lg-8 col-sm-12">
                          <div className="project-wrapper__image">
                            <a href="https://detect-smart-brain.herokuapp.com/" rel="noreferrer" target="_blank">
                              <div data-tilt className="thumbnail rounded">
                               <Tilt className="Tilt" options={{ max : 25 }}  >
                                <img className="img-fluid" alt="" src={FaceDetect} />
                                </Tilt>
                              </div>
                            </a>
                          </div>
                        </div>
                    </div>
                    </div>
                    </div>
       

                    <footer className="footer navbar-static-bottom">

                      <div className="container">

                          <a href="#top" className="back-to-top">
                            <i className="fa fa-angle-up fa-2x" aria-hidden="true"></i>
                          </a>

                          <div className="social-links">
                              <a href="#!" target="_blank">
                                <i className="fa fa-twitter fa-inverse"></i>
                              </a>
                              <a href="#!" target="_blank">
                                <i className="fa fa-codepen fa-inverse"></i>
                              </a>
                              <a href="#!" target="_blank">
                                <i className="fa fa-linkedin fa-inverse"></i>
                              </a>
                              <a href="#!" target="_blank">
                                <i className="fa fa-github fa-inverse"></i>
                              </a>
                          </div>

                        <hr />

                  
      
                           <h2 className="section-title text-light">
                            Contact
                          </h2>
                         <div className="contact-wrapper">
                            <p className="contact-wrapper__text text-light">
                             jroncynavs12@gmail.com<br />
                             +63-935-853-4264
                            </p>
                            <a
                              target="_blank"
                              className="cta-btn cta-btn--resume"
                              href="jroncynavs12@gmail.com"
                              >Call to Action</a>
                          </div>
                          <a href="https://github.com/cobidev" rel="noreferrer" className="text-light" target="_blank"> © 2021- Template developed by John Roncy Nava</a>
                     
             

      
                      </div>
                    </footer>


                           
          
                <Particles className='particles'
                  params={particlesOptions}            /> 
                 
            </div>      


        );
    }

 }



export default App;
