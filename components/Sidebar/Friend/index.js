import React from 'react';

import ExternalLink from '../../ExternalLink';

import { friends } from '../../../config';

import './index.scss';


const Friend = () => (
  <div className="friend">
    <p>友情链接</p>
    {friends.map(friend => (
      <ExternalLink
        href={friend.href}
        title={friend.title}
        key={friend.title}
        rel="noopener"
      />
    ))}
  </div>
);

export default Friend;
