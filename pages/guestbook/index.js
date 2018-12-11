import React, { Component } from 'react';
import axios from 'axios'
import 'gitalk/dist/gitalk.css';

import Sidebar from '../../components/Sidebar';
import ShareBox from '../../components/ShareBox';
import Layout from '../../components/Layout'

import { gitalk, url } from '../../config';

import './index.scss';


// Prevent webpack window problem
const isBrowser = typeof window !== 'undefined';
const Gitalk = isBrowser ? require('gitalk') : undefined;

class Guestbook extends Component {
  static async getInitialProps() {
    const postRes = await axios.get(`/blog/blogs`)
    const postData = postRes.data

    return { postData: postData }
  }
  componentDidMount() {
    // Gitalk
    const GitTalkInstance = new Gitalk({
      ...gitalk,
      id: `${url}/guestbook/`,
    });
    GitTalkInstance.render('gitalk-container');
  }

  render() {
    const { postData } = this.props
    // siderbar
    const totalCount = postData.length
    const lastPost = postData.slice(0,6)
    const posts = lastPost.map( x => {
        return {
            title: x.title,
            createDate: x.createDate,
            posturl: `/blog?url=${x._id}`
        }
    })
    return (
      <Layout>
        <div className="row order-2 guestbook">
          <Sidebar totalCount={totalCount} posts={posts} post />
          <div className="col-lg-6 col-md-12 col-sm-12 order-10 d-flex flex-column content">
            <h2>
              留言板
              <ShareBox url={''} />
            </h2>
            <div id="gitalk-container" className="col-sm-8 col-12 order-12" />
          </div>
        </div>
      </Layout>
    );
  }
}

export default Guestbook