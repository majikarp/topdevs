import React, { Component } from "react";
import Button from "react-md/lib/Buttons";
import Link from "gatsby-link";
import UserLinks from "../UserLinks/UserLinks";
import config from "../../../data/SiteConfig";
import "./Footer.scss";

class Footer extends Component {
  render() {
    const url = config.siteRss;
    const { userLinks } = this.props;
    const { fixedFooter }  = config;
    return (
      <footer className={fixedFooter ? "footer footer-fixed" : "footer"}>
        /** Insert ads here */
        {userLinks ? <UserLinks config={config} labeled /> : null}
        <div className="notice-container">
          <div className="copyright">
            <h4>
              Made with &lt;3 by {" "}
              <a href="https://snipcart.com/">Snipcart</a>
            </h4>
          </div>

          <div className="based-on">
            <h4>
              Based on{" "}
              <a href="https://github.com/Vagr9K/gatsby-material-starter">
                Gatsby Material Starter
              </a>.
            </h4>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
