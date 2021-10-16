import React from "react";
import { Link } from "react-router-dom";

export default function About() {
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
                        <h1 class="heading-section">About Us</h1>
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

        <div id="fh5co-about">
          <div class="container">
            <div class="col-md-6 animate-box">
              <span>About Our University</span>
              <h2>Welcome to Education Website</h2>
              <p>
                Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non
                mauris vitae erat cauctor eu in elit. Class aptent taciti
                sociosqu ad litora torquent per conubia nostra, per Mauris in
                erat justo.
              </p>
              <p>
                Nullam ac urna eu felis dapibus condimentum sit amet a augue.
                Sed non neque elit. Sed ut imperdiet nisi. Proin condimentum
                fermentum nunc. Etiam pharetra, erat sed.
              </p>
              <p>
                Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non
                mauris vitae erat cauctor eu in elit. Class aptent taciti
                sociosqu ad litora torquent per conubia nostra, per Mauris in
                erat justo.
              </p>
            </div>
            <div class="col-md-6">
              <img
                class="img-responsive"
                src="images/img_bg_2.jpg"
                alt="Free HTML5 Bootstrap Template"
              />
            </div>
          </div>
        </div>

        <div
          id="fh5co-counter"
          class="fh5co-counters"
          style={{ backgroundImage: "url(images/img_bg_4.jpg);" }}
          data-stellar-background-ratio="0.5"
        >
          <div class="overlay"></div>
          <div class="container">
            <div class="row">
              <div class="col-md-10 col-md-offset-1">
                <div class="row">
                  <div class="col-md-3 col-sm-6 text-center animate-box">
                    <span class="icon">
                      <i class="icon-world"></i>
                    </span>
                    <span
                      class="fh5co-counter js-counter"
                      data-from="0"
                      data-to="3297"
                      data-speed="5000"
                      data-refresh-interval="50"
                    ></span>
                    <span class="fh5co-counter-label">Foreign Followers</span>
                  </div>
                  <div class="col-md-3 col-sm-6 text-center animate-box">
                    <span class="icon">
                      <i class="icon-study"></i>
                    </span>
                    <span
                      class="fh5co-counter js-counter"
                      data-from="0"
                      data-to="3700"
                      data-speed="5000"
                      data-refresh-interval="50"
                    ></span>
                    <span class="fh5co-counter-label">Students Enrolled</span>
                  </div>
                  <div class="col-md-3 col-sm-6 text-center animate-box">
                    <span class="icon">
                      <i class="icon-bulb"></i>
                    </span>
                    <span
                      class="fh5co-counter js-counter"
                      data-from="0"
                      data-to="5034"
                      data-speed="5000"
                      data-refresh-interval="50"
                    ></span>
                    <span class="fh5co-counter-label">Classes Complete</span>
                  </div>
                  <div class="col-md-3 col-sm-6 text-center animate-box">
                    <span class="icon">
                      <i class="icon-head"></i>
                    </span>
                    <span
                      class="fh5co-counter js-counter"
                      data-from="0"
                      data-to="1080"
                      data-speed="5000"
                      data-refresh-interval="50"
                    ></span>
                    <span class="fh5co-counter-label">Certified Teachers</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="fh5co-course-categories">
          <div class="container">
            <div class="row animate-box">
              <div class="col-md-6 col-md-offset-3 text-center fh5co-heading">
                <h2>Course categories</h2>
                <p>
                  Dignissimos asperiores vitae velit veniam totam fuga molestias
                  accusamus alias autem provident. Odit ab aliquam dolor eius.
                </p>
              </div>
            </div>
            <div class="row">
              <div class="col-md-3 col-sm-6 text-center animate-box">
                <div class="services">
                  <span class="icon">
                    <i class="icon-shop"></i>
                  </span>
                  <div class="desc">
                    <h3>
                      <a href="#">Business</a>
                    </h3>
                    <p>
                      Dignissimos asperiores vitae velit veniam totam fuga
                      molestias accusamus alias autem provident. Odit ab aliquam
                      dolor eius.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-md-3 col-sm-6 text-center animate-box">
                <div class="services">
                  <span class="icon">
                    <i class="icon-heart4"></i>
                  </span>
                  <div class="desc">
                    <h3>
                      <a href="#">Health &amp; Psychology</a>
                    </h3>
                    <p>
                      Dignissimos asperiores vitae velit veniam totam fuga
                      molestias accusamus alias autem provident. Odit ab aliquam
                      dolor eius.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-md-3 col-sm-6 text-center animate-box">
                <div class="services">
                  <span class="icon">
                    <i class="icon-banknote"></i>
                  </span>
                  <div class="desc">
                    <h3>
                      <a href="#">Accounting</a>
                    </h3>
                    <p>
                      Dignissimos asperiores vitae velit veniam totam fuga
                      molestias accusamus alias autem provident. Odit ab aliquam
                      dolor eius.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-md-3 col-sm-6 text-center animate-box">
                <div class="services">
                  <span class="icon">
                    <i class="icon-lab2"></i>
                  </span>
                  <div class="desc">
                    <h3>
                      <a href="#">Science &amp; Technology</a>
                    </h3>
                    <p>
                      Dignissimos asperiores vitae velit veniam totam fuga
                      molestias accusamus alias autem provident. Odit ab aliquam
                      dolor eius.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-md-3 col-sm-6 text-center animate-box">
                <div class="services">
                  <span class="icon">
                    <i class="icon-photo"></i>
                  </span>
                  <div class="desc">
                    <h3>
                      <a href="#">Art &amp; Media</a>
                    </h3>
                    <p>
                      Dignissimos asperiores vitae velit veniam totam fuga
                      molestias accusamus alias autem provident. Odit ab aliquam
                      dolor eius.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-md-3 col-sm-6 text-center animate-box">
                <div class="services">
                  <span class="icon">
                    <i class="icon-home-outline"></i>
                  </span>
                  <div class="desc">
                    <h3>
                      <a href="#">Real Estate</a>
                    </h3>
                    <p>
                      Dignissimos asperiores vitae velit veniam totam fuga
                      molestias accusamus alias autem provident. Odit ab aliquam
                      dolor eius.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-md-3 col-sm-6 text-center animate-box">
                <div class="services">
                  <span class="icon">
                    <i class="icon-bubble3"></i>
                  </span>
                  <div class="desc">
                    <h3>
                      <a href="#">Language</a>
                    </h3>
                    <p>
                      Dignissimos asperiores vitae velit veniam totam fuga
                      molestias accusamus alias autem provident. Odit ab aliquam
                      dolor eius.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-md-3 col-sm-6 text-center animate-box">
                <div class="services">
                  <span class="icon">
                    <i class="icon-world"></i>
                  </span>
                  <div class="desc">
                    <h3>
                      <a href="#">Web &amp; Programming</a>
                    </h3>
                    <p>
                      Dignissimos asperiores vitae velit veniam totam fuga
                      molestias accusamus alias autem provident. Odit ab aliquam
                      dolor eius.
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

        <div id="fh5co-gallery" class="fh5co-bg-section">
          <div class="row text-center">
            <h2>
              <span>Instagram Gallery</span>
            </h2>
          </div>
          <div class="row">
            <div class="col-md-3 col-padded">
              <a
                href="#"
                class="gallery"
                style={{ backgroundImage: "url(images/project-5.jpg);" }}
              ></a>
            </div>
            <div class="col-md-3 col-padded">
              <a
                href="#"
                class="gallery"
                style={{ backgroundImage: "url(images/project-2.jpg);" }}
              ></a>
            </div>
            <div class="col-md-3 col-padded">
              <a
                href="#"
                class="gallery"
                style={{ backgroundImage: "url(images/project-3.jpg);" }}
              ></a>
            </div>
            <div class="col-md-3 col-padded">
              <a
                href="#"
                class="gallery"
                style={{ backgroundImage: "url(images/project-4.jpg);" }}
              ></a>
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
