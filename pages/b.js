import React from 'react'
import TableOfContent from '../components/TableOfContent'

const toc = [
  
]

export default class extends React.Component {
  static async getInitialProps({ req }) {
    const userAgent = req ? req.headers['user-agent'] : navigator.userAgent
    return { userAgent }
  }

  render() {
    return (
      <div>
        Hello World {this.props.userAgent}
        <TableOfContent toc={['ttttt','www.baidu.com']}  />
      </div>
    )
  }
}