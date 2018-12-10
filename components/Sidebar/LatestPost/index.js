import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';

import './index.scss';

import { parseChineseDate } from '../../../api/date'

const LatestPost = ({ posts }) => (
  <div className="latest-post">
    <p>最新文章</p>
    {posts.map((post) => (
      <Link
        key={post.posturl}
        prefetch
        href={post.posturl}
      >
        <a>{post.title} - {parseChineseDate(post.createDate)}</a>
      </Link>
    ))}
  </div>
);

LatestPost.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default LatestPost;
