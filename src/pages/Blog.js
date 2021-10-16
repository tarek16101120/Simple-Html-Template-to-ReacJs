import React from "react";
import { Link } from "react-router-dom";
export default function Blog() {
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
                    <li>
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
                    <li class="active">
                      <Link to="/pricing">Pricing</Link>
                    </li>
                    <li class="has-dropdown active">
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
                    <li>
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
                        <h1 class="heading-section">Blog &amp; Events</h1>
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

        <div id="fh5co-blog">
          <div class="container">
            <div class="row animate-box">
              <div class="col-md-8 col-md-offset-2 text-center fh5co-heading">
                <h2>Blog &amp; Events</h2>
                <p>
                  Dignissimos asperiores vitae velit veniam totam fuga molestias
                  accusamus alias autem provident. Odit ab aliquam dolor eius.
                </p>
              </div>
            </div>
            <div class="row row-padded-mb">
              <div class="col-md-4 animate-box">
                <div class="fh5co-event">
                  <div class="date text-center">
                    <span>
                      15<br></br>Mar.
                    </span>
                  </div>
                  <h3>
                    <a href="#">USA, International Triathlon Event</a>
                  </h3>
                  <p>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts.
                  </p>
                  <p>
                    <a href="#">Read More</a>
                  </p>
                </div>
              </div>
              <div class="col-md-4 animate-box">
                <div class="fh5co-event">
                  <div class="date text-center">
                    <span>
                      15<br></br>Mar.
                    </span>
                  </div>
                  <h3>
                    <a href="#">USA, International Triathlon Event</a>
                  </h3>
                  <p>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts.
                  </p>
                  <p>
                    <a href="#">Read More</a>
                  </p>
                </div>
              </div>
              <div class="col-md-4 animate-box">
                <div class="fh5co-event">
                  <div class="date text-center">
                    <span>
                      15<br></br>Mar.
                    </span>
                  </div>
                  <h3>
                    <a href="#">New Device Develope by Microsoft</a>
                  </h3>
                  <p>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts.
                  </p>
                  <p>
                    <a href="#">Read More</a>
                  </p>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-4 col-md-4">
                <div class="fh5co-blog animate-box">
                  <a
                    href="#"
                    class="blog-img-holder"
                    style={{ backgroundImage: "url(images/project-1.jpg);" }}
                  ></a>
                  <div class="blog-text">
                    <h3>
                      <a href="#">Healty Lifestyle &amp; Living</a>
                    </h3>
                    <span class="posted_on">March. 15th</span>
                    <span class="comment">
                      <a href="">
                        21<i class="icon-speech-bubble"></i>
                      </a>
                    </span>
                    <p>
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-4">
                <div class="fh5co-blog animate-box">
                  <a
                    href="#"
                    class="blog-img-holder"
                    style={{ backgroundImage: "url(images/project-2.jpg);" }}
                  ></a>
                  <div class="blog-text">
                    <h3>
                      <a href="#">Healty Lifestyle &amp; Living</a>
                    </h3>
                    <span class="posted_on">March. 15th</span>
                    <span class="comment">
                      <a href="">
                        21<i class="icon-speech-bubble"></i>
                      </a>
                    </span>
                    <p>
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-4">
                <div class="fh5co-blog animate-box">
                  <a
                    href="#"
                    class="blog-img-holder"
                    style={{ backgroundImage: "url(images/project-3.jpg);" }}
                  ></a>
                  <div class="blog-text">
                    <h3>
                      <a href="#">Healty Lifestyle &amp; Living</a>
                    </h3>
                    <span class="posted_on">March. 15th</span>
                    <span class="comment">
                      <a href="">
                        21<i class="icon-speech-bubble"></i>
                      </a>
                    </span>
                    <p>
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

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