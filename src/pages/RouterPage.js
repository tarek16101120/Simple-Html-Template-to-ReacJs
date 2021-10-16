import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Courses from "./Courses";
import Teacher from "./Teacher";
import Pricing from "./Pricing";
import Blog from "./Blog";
import Contact from "./Contact";

export default function RouterPage() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/courses" component={Courses}></Route>
          <Route path="/teacher" component={Teacher}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/pricing" component={Pricing}></Route>
          <Route path="/blog" component={Blog}></Route>
          <Route path="/contact" component={Contact}></Route>
        </Switch>
      </Router>
    </div>
  );
}

// {{backgroundImage:"
