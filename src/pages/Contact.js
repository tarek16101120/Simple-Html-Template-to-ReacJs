import React from "react";
import { Link } from "react-router-dom";
import Blog from "./Blog";
export default function Contact() {
  return (
    <React.Fragment>
      <div class="fh5co-loader"></div>

      <div id="page">
        <nav class="fh5co-nav" role="navigation">
          <div class="top">
            <div class="container">
              <div class="row">
                <div class="col-xs-12 text-right">
                  <p class="site">www.yourdomainname.com</p>
                  <p class="num">Call: +01 123 456 7890</p>
                  <ul class="fh5co-social">
                    <li>
                      <a href="#">
                        <i class="icon-facebook2"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="icon-twitter2"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="icon-dribbble2"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="icon-github"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="top-menu">
            <div class="container">
              <div class="row">
                <div class="col-xs-2">
                  <div id="fh5co-logo">
                    <a href="index.html">
                      <i class="icon-study"></i>Educ<span>.</span>
                    </a>
                  </div>
                </div>
                <div class="col-xs-10 text-right menu-1">
                  <ul>
                    <li class="active">
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="/courses">Courses</Link>
                    </li>
                    <li>
                      <Link to="/teacher">Teacher</Link>
                    </li>
                    <li>
                      <Link to="/about">About</Link>
                    </li>
                    <li>
                      <Link to="/pricing">Pricing</Link>
                    </li>
                    <li class="has-dropdown">
                      <Link to="/blog">Blog</Link>
                      <ul class="dropdown">
                        <li>
                          <a href="#">Web Design</a>
                        </li>
                        <li>
                          <a href="#">eCommerce</a>
                        </li>
                        <li>
                          <a href="#">Branding</a>
                        </li>
                        <li>
                          <a href="#">API</a>
                        </li>
                      </ul>
                    </li>
                    <li class="active">
                      <Link to="/contact">Contact</Link>
                    </li>
                    <li class="btn-cta">
                      <a href="#">
                        <span>Login</span>
                      </a>
                    </li>
                    <li class="btn-cta">
                      <a href="#">
                        <span>Create a Course</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </nav>

        <aside id="fh5co-hero">
          <div class="flexslider">
            <ul class="slides">
              <li style={{ backgroundImage: "url(images/img_bg_4.jpg);" }}>
                <div class="overlay-gradient"></div>
                <div class="container">
                  <div class="row">
                    <div class="col-md-8 col-md-offset-2 text-center slider-text">
                      <div class="slider-text-inner">
                        <h1 class="heading-section">Contact us</h1>
                        <h2>
                          Free html5 templates Made by{" "}
                          <a href="http://freehtml5.co/" target="_blank">
                            freehtml5.co
                          </a>
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </aside>

        <div id="fh5co-contact">
          <div class="container">
            <div class="row">
              <div class="col-md-5 col-md-push-1 animate-box">
                <div class="fh5co-contact-info">
                  <h3>Contact Information</h3>
                  <ul>
                    <li class="address">
                      198 West 21th Street, <br></br> Suite 721 New York NY
                      10016
                    </li>
                    <li class="phone">
                      <a href="tel://1234567920">+ 1235 2355 98</a>
                    </li>
                    <li class="email">
                      <a href="mailto:info@yoursite.com">info@yoursite.com</a>
                    </li>
                    <li class="url">
                      <a href="http://freehtml5.co">freeHTML5.co</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-md-6 animate-box">
                <h3>Get In Touch</h3>
                <form action="#">
                  <div class="row form-group">
                    <div class="col-md-6">
                      <input
                        type="text"
                        id="fname"
                        class="form-control"
                        placeholder="Your firstname"
                      />
                    </div>
                    <div class="col-md-6">
                      <input
                        type="text"
                        id="lname"
                        class="form-control"
                        placeholder="Your lastname"
                      />
                    </div>
                  </div>

                  <div class="row form-group">
                    <div class="col-md-12">
                      <input
                        type="text"
                        id="email"
                        class="form-control"
                        placeholder="Your email address"
                      />
                    </div>
                  </div>

                  <div class="row form-group">
                    <div class="col-md-12">
                      <input
                        type="text"
                        id="subject"
                        class="form-control"
                        placeholder="Your subject of this message"
                      />
                    </div>
                  </div>

                  <div class="row form-group">
                    <div class="col-md-12">
                      <textarea
                        name="message"
                        id="message"
                        cols="30"
                        rows="10"
                        class="form-control"
                        placeholder="Say something about us"
                      ></textarea>
                    </div>
                  </div>
                  <div class="form-group">
                    <input
                      type="submit"
                      value="Send Message"
                      class="btn btn-primary"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div id="map" class="fh5co-map"></div>

        <div
          id="fh5co-register"
          style={{ backgroundImage: "url(images/img_bg_2.jpg);" }}
        >
          <div class="overlay"></div>
          <div class="row">
            <div class="col-md-8 col-md-offset-2 animate-box">
              <div class="date-counter text-center">
                <h2>Get 400 of Online Courses for Free</h2>
                <h3>By Mike Smith</h3>
                <div class="simply-countdown simply-countdown-one"></div>
                <p>
                  <strong>Limited Offer, Hurry Up!</strong>
                </p>
                <p>
                  <a href="#" class="btn btn-primary btn-lg btn-reg">
                    Register Now!
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        <footer
          id="fh5co-footer"
          role="contentinfo"
          style={{ backgroundImage: "url(images/img_bg_4.jpg);" }}
        >
          <div class="overlay"></div>
          <div class="container">
            <div class="row row-pb-md">
              <div class="col-md-3 fh5co-widget">
                <h3>About Education</h3>
                <p>
                  Facilis ipsum reprehenderit nemo molestias. Aut cum mollitia
                  reprehenderit. Eos cumque dicta adipisci architecto culpa
                  amet.
                </p>
              </div>
              <div class="col-md-2 col-sm-4 col-xs-6 col-md-push-1 fh5co-widget">
                <h3>Learning</h3>
                <ul class="fh5co-footer-links">
                  <li>
                    <a href="#">Course</a>
                  </li>
                  <li>
                    <a href="#">Blog</a>
                  </li>
                  <li>
                    <a href="#">Contact</a>
                  </li>
                  <li>
                    <a href="#">Terms</a>
                  </li>
                  <li>
                    <a href="#">Meetups</a>
                  </li>
                </ul>
              </div>

              <div class="col-md-2 col-sm-4 col-xs-6 col-md-push-1 fh5co-widget">
                <h3>Learn &amp; Grow</h3>
                <ul class="fh5co-footer-links">
                  <li>
                    <a href="#">Blog</a>
                  </li>
                  <li>
                    <a href="#">Privacy</a>
                  </li>
                  <li>
                    <a href="#">Testimonials</a>
                  </li>
                  <li>
                    <a href="#">Handbook</a>
                  </li>
                  <li>
                    <a href="#">Held Desk</a>
                  </li>
                </ul>
              </div>

              <div class="col-md-2 col-sm-4 col-xs-6 col-md-push-1 fh5co-widget">
                <h3>Engage us</h3>
                <ul class="fh5co-footer-links">
                  <li>
                    <a href="#">Marketing</a>
                  </li>
                  <li>
                    <a href="#">Visual Assistant</a>
                  </li>
                  <li>
                    <a href="#">System Analysis</a>
                  </li>
                  <li>
                    <a href="#">Advertise</a>
                  </li>
                </ul>
              </div>

              <div class="col-md-2 col-sm-4 col-xs-6 col-md-push-1 fh5co-widget">
                <h3>Legal</h3>
                <ul class="fh5co-footer-links">
                  <li>
                    <a href="#">Find Designers</a>
                  </li>
                  <li>
                    <a href="#">Find Developers</a>
                  </li>
                  <li>
                    <a href="#">Teams</a>
                  </li>
                  <li>
                    <a href="#">Advertise</a>
                  </li>
                  <li>
                    <a href="#">API</a>
                  </li>
                </ul>
              </div>
            </div>

            <div class="row copyright">
              <div class="col-md-12 text-center">
                <p>
                  <small class="block">
                    &copy; 2016 Free HTML5. All Rights Reserved.
                  </small>
                  <small class="block">
                    Designed by{" "}
                    <a href="http://freehtml5.co/" target="_blank">
                      FreeHTML5.co
                    </a>{" "}
                    Demo Images:{" "}
                    <a href="http://unsplash.co/" target="_blank">
                      Unsplash
                    </a>{" "}
                    &amp;{" "}
                    <a href="https://www.pexels.com/" target="_blank">
                      Pexels
                    </a>
                  </small>
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </React.Fragment>
  );
}
