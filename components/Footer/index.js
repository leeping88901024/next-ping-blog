import React from 'react';

import ExternalLink from '../ExternalLink';
import { title } from '../../config';

import './index.scss';

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="row">
        <div className="col-sm-12 text-center">
          <p className="architecture">
            Build with&nbsp;
            <ExternalLink href="https://nextjs.org//" title="Next" />
            &nbsp;and&nbsp;
            <ExternalLink
              href="https://reactjs.org/"
              title={`React ${React.version}`}
            />
            .&nbsp;Hosted on&nbsp;
            <ExternalLink href="https://www.aliyun.com/" title="Aliyun" />
            <br />
          </p>
          <p className="copyright">
            Copyright&nbsp;
            <ExternalLink href="http://www.macdull.top" title="&copy;Lee" />
            &nbsp;
            {title}
            {new Date().getFullYear()}
            &nbsp;Theme by Lee Ping
          </p>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
