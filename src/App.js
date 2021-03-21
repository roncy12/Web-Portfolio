
import './App.css';
import Particles from 'react-particles-js';
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import profile from './assets/profile.jpg';
import Robofriends from './assets/Robofriends.png';
import FaceDetect from './assets/Face-detect.png';
import github from './assets/github.png';
import email from './assets/email.png';
import linkedin from './assets/linkedin.png';
import Tilt from 'react-tilt';
import button from 'react-bootstrap/button';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import NavDropdown from 'react-bootstrap/NavDropdown';
import NavItem from 'react-bootstrap/NavItem';
import Link from 'react-router-dom/Link';




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
                            <img src={github} class="icon-account" />
                          </Nav.Link>
                          <Nav.Link eventKey={2} href="#memes" className="text-light">
                            <img src={email} class="icon-account" />
                          </Nav.Link>

                        </Nav>
                      </Navbar.Collapse>
                    </Navbar>

                    <div id="hero" class="jumbotron">
                       <div class="container">
                       <h1 class="hero-title" class="load-hidden">
                        Hi, my name is <span class="text-info">John Roncy Nava</span>
                       <br />
                       I'm the Developer you need.
                       </h1>
                       <p class="hero-cta" class="load-hidden">
                        <a class="cta-btn cta-btn--hero" href="#about">Hire me</a>
                       </p>
                       </div>
                    </div>

               
                      <div class="container"><br />
                        <h2 class="section-title text-uppercase text-light">
                          About me
                        </h2>
                        <div class="row about-wrapper">
                          <div class="col-md-6 col-sm-12">
                            <div class="about-wrapper__image">
                             <Tilt className="Tilt" options={{ max : 25 }}  >
                              <img
                                class="img-fluid rounded shadow-lg"
                                height="auto"
                                width="300px"
                                src={profile}
                                alt=""
                              />
                              </Tilt>
                            </div>
                          </div>
                          <div class="col-md-6 col-sm-12">                          
                              <div class="about-wrapper__info">
                                <p class="about-wrapper__info-text text-justify text-white">
                                        Personal Skills  <br />
                                        • Skilled in designing user interfaces and websites <br />
                                        • Skilled in logical, analytical and computational skills. <br />
                                        • Have taken the Web Zero to Mastery on Udemy to expand my knowledge. <br />
                                        • Always willing to learn from colleagues. <br />
                                        • I used Drupal 8 on my website Project in our Thesis.

                                  </p>
                                 <p class="about-wrapper__info-text text-justify text-white">
                                      Technical <br />
                                            • Programming: Java, C++, Vb.net<br />
                                            • Database: Microsoft SQL<br />
                                            • Web Development: HTML5, CSS3, Java Script, React, Bootstrap 4, PHP, MySQL.<br />
                                            • Operating System: Windows

                                    </p>
                                        <span class="d-flex mt-3">
                                          <a target="_blank" class="cta-btn cta-btn--resume" href="#!">
                                            View Resume
                                          </a>
                                        </span>
                              </div>
                            </div>
                        </div>
                      </div>
              
     
    //!-- **** Projects Section **** -->
                    <div class="container">
                      <div class="project-wrapper">
                        <h2 class="section-title dark-blue-text text-light">
                          Projects
                        </h2>
          // !-- Each .row is a project -->
                        <div class="row">
                          <div class="col-lg-4 col-sm-12">
                            <div class="project-wrapper__text">
                              <h3 class="project-wrapper__text-title text-light">Robofriends</h3>
                              <div>
                                <p class="mb-4 text-light">
                                      First project created using React JS and Redux, 
                                      helps to understand a "search by name of robot" technique (project created for Udemy Web zero to mastery course)
                                  </p>
                              </div>
                              
                              <a target="_blank" class="cta-btn cta-btn--hero" href="https://roncy12.github.io/Updated-Robofriends/">
                                See Live
                              </a>
                              <a target="_blank" class="cta-btn text-color-main" href="https://github.com/roncy12/Updated-Robofriends">
                                Source Code
                              </a>
                            </div>
                          </div>
                          <div class="col-lg-8 col-sm-12">
                            <div class="project-wrapper__image">
                            <a href="https://roncy12.github.io/Updated-Robofriends/" target="_blank">
                                <div data-tilt class="thumbnail rounded">
                                <Tilt className="Tilt" options={{ max : 25 }}  >
                                 <img class="img-fluid" src={Robofriends} />
                                </Tilt>
                                </div>
                            </a>
                            </div>


                          </div>
                        </div>
              
                    <div class="row">
                      <div class="col-lg-4 col-sm-12">
                        <div class="project-wrapper__text">
                          <h3 class="project-wrapper__text-title text-light">Face Recognition Web App in TypeScript with React, Express, Node, PostgreSQL</h3>
                          <div>
                            <p class="mb-4 text-light">
                                 The full stack face recognition app I built with React, Express, Node and PostgreSQL in TypeScript. This app was inspired by the excellent Udemy course The Complete Web Developer in 2020: Zero to Mastery by Andrei Neagoie.
                            </p>
                          </div>
                          <a target="_blank" class="cta-btn cta-btn--hero" href="https://detect-smart-brain.herokuapp.com/">
                            See Live
                          </a>
                          <a target="_blank" class="cta-btn text-color-main" href="https://github.com/roncy12/facerecognitionbrain/tree/master">
                            Source Code
                          </a>
                        </div>
                      </div>
                      <div class="col-lg-8 col-sm-12">
                        <div class="project-wrapper__image">
                          <a href="https://detect-smart-brain.herokuapp.com/" target="_blank">
                            <div data-tilt class="thumbnail rounded">
                             <Tilt className="Tilt" options={{ max : 25 }}  >
                              <img class="img-fluid" src={FaceDetect} />
                              </Tilt>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                
                     <footer class="footer navbar-static-bottom">

                      <div class="container">
                        <a href="#top" class="back-to-top">
                          <i class="fa fa-angle-up fa-2x" aria-hidden="true"></i>
                        </a>
                        <div class="social-links">
                          <a href="#!" target="_blank">
                            <i class="fa fa-twitter fa-inverse"></i>
                          </a>
                          <a href="#!" target="_blank">
                            <i class="fa fa-codepen fa-inverse"></i>
                          </a>
                          <a href="#!" target="_blank">
                            <i class="fa fa-linkedin fa-inverse"></i>
                          </a>
                          <a href="#!" target="_blank">
                            <i class="fa fa-github fa-inverse"></i>
                          </a>
                        </div>

                        <hr />

                  
                        <p class="footer__text text-light">
                           <h2 class="section-title text-light">
                            Contact
                          </h2>
                         <div class="contact-wrapper">
                            <p class="contact-wrapper__text text-light">
                             jroncynavs12@gmail.com<br />
                             +63-935-853-4264
                            </p>
                            <a
                              target="_blank"
                              class="cta-btn cta-btn--resume"
                              href="jroncynavs12@gmail.com"
                              >Call to Action</a>
                          </div>
                          © 2021- Template developed by <a href="https://github.com/cobidev" className="text-light" target="_blank">John Roncy Nava</a>
                     
                        </p>

      
                      </div>
                    </footer>


                    </div>
                        </div>                      
          

                
                <Particles className='particles'
                  params={particlesOptions}            /> 
                 
            </div>      


        );
    }

 }



export default App;
