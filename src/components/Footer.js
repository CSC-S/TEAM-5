import React, { Component } from "react";
import ".././App.css";


class Footer extends Component {
  render() {
    return (
  <footer id="footer">
  <div class="container">
    <div class="row">
        <div class="col-sm-6 col-sm-push-6 footer-social-icons">
        <span>SNS :</span>
        <a href="https://www.facebook.com/">
          <i class="fa fa-facebook"></i>
        </a>
        <a href="https://twitter.com/">
          <i class="fa fa-twitter"></i>
        </a>
        <a href="https://www.instagram.com/">
          <i class="fa fa-instagram"></i>
        </a>
      </div>
      {/* <!-- /SOCIAL ICONS --> */}
      <div class="col-sm-6 col-sm-pull-6 copyright">
        <p>
          소재지 : <i class="fa fa-love"></i>서울 탈부착구 관장로 123
          댕댕님네집
        </p>
      </div>
    </div>
  </div>
</footer>
 );
}
}

export default Footer;
