import React from 'react'
import Link from 'next/link'

export default () => (
  <ul>
    <li><Link href='/a'><a>a</a></Link></li>
    <li><Link href='/b'><a>b</a></Link></li>
    <li><Link href='/blog'><a>blog</a></Link></li>
    <li>
      <Link
        href={{pathname: '/posts', query: { id: '2' }}}
      >
        <a>post #2</a>
      </Link>
    </li>
  </ul>
)