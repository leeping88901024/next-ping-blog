import React from 'react';

import Link from 'next/link';
import PropTypes from 'prop-types';
import { parseChineseDate } from '../../../api/date';
import { parseUrl } from '../../../api/url';

import './index.scss';

const getUrl = (createdDate, url) => parseUrl(parseChineseDate(createdDate), url);

const LatestPost = ({ posts }) => (
  <div className="latest-post">
    <p>最新文章</p>
    {posts.map(({ node }) => (
      <Link
        key={node.url}
        href={getUrl(node.createdDate, node.url)}
      >
        <a>{node.title}</a>
      </Link>
    ))}
  </div>
);

LatestPost.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default LatestPost;
