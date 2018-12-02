import React from 'react'
import Link from 'next/link'
import Router from 'next/router'

export default () => (
  <ul>
    <li><Link href='/a'><a>a</a></Link></li>
    <li><Link href='/b'><a>b</a></Link></li>
    <hr/>
    <li>
      <p>仅支持前段？</p>
      <div>
      Click <button onClick={() => Router.push('/blog/')}>here</button> to blog
      </div>
    </li>
    <hr/>
    <li>
      <Link prefetch href='/blog/'>
        <a>blog</a>
      </Link>
    </li>
    <hr/>
    <li>
      <Link
        prefetch 
        href={{pathname: '/posts', query: { id: '2' }}}
      >
        <a>post #2</a>
      </Link>
    </li>
  </ul>
)