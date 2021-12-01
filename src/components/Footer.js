import React, { Component } from "react";
import ".././App.css";
import twiter from ".././img/twiter.png";
import facebook from ".././img/facebook.png";
import instargram from ".././img/instargram.png";


class Footer extends Component {
  render() {
    return (
  <footer id="footer">
  <div class="container">
    <div class="row">
        <div class="col-sm-6 col-sm-push-6 footer-social-icons">
        <span>SNS :
        <a href="https://www.facebook.com/"><img class="snslogo" src={ facebook }/>
          <i class="fa fa-facebook"></i>
        </a>
        <a href="https://twitter.com/"><img class="snslogo" src={ twiter }/>
          <i class="fa fa-twitter"></i>
        </a>
        <a href="https://www.instagram.com/"><img class="snslogo" src={ instargram }/>
          <i class="fa fa-instagram"></i>
        </a>
        </span>
      </div>

      {/* <!-- /SOCIAL ICONS --> */}
      <div class="col-sm-6 col-sm-pull-6 copyright">
        <p>
          Copyright 2021.team5.All rights reserved.
        </p>
      </div>
    </div>
  </div>
</footer>
 );
}
}

export default Footer;
