import React from 'react';

import ExternalLink from '../ExternalLink';
import config from '../../config';

import './index.scss';

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="row">
        <div className="col-sm-12 text-center">
          <p className="architecture">
            Build with&nbsp;
            <ExternalLink href="https://www.gatsbyjs.org/" title="GatsbyJS" />
            &nbsp;and&nbsp;
            <ExternalLink
              href="https://reactjs.org/"
              title={`React ${React.version}`}
            />
            .&nbsp;Hosted on&nbsp;
            <ExternalLink href="https://www.netlify.com/" title="Netlify" />
            <br />
            The code is reference on &nbsp;
            <ExternalLink
              href="https://github.com/calpa/gatsby-starter-calpa-blog"
              title="calpa/gatsby-starter-calpa-blog"
            />
          </p>
          <p className="copyright">
            Copyright&nbsp;
            <ExternalLink href="https://calpa.me/" title="&copy;Lee" />
            &nbsp;
            {config.title}
            {new Date().getFullYear()}
            &nbsp;Theme by Lee Ping
          </p>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
