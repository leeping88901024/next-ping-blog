import React, { Component } from 'react'
import fetch from 'isomorphic-unfetch'

import TableOfContent from '../components/TableOfContent'
import Layout from '../components/Layout'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import ShareBox from '../components/ShareBox'
import Content from '../components/Content'
import ExternalLink from '../components/ExternalLink'

// api
import { parseChineseDate } from '../api/date'
// import { parseMark } from '../api/parseMarkdown' // 这里不采用这种解析方式 - 不支持中文
import { getContent } from '../api/text'

// config data
import config from '../config'

// Styles
import '../styles/blog-post.scss'
const bgWhite = { padding: '10px 15px', background: 'white' }

const { name, gitRepository, gitHome, iconUrl, jueJinPostLink, jueJinLikeIconLink } = config

// componnet
class BlogPost extends Component {
    static async getInitialProps({req, query}) {
        // blog content
        const blogRes = await fetch(`http://localhost/blog/blog?_id=${query.url}`)
        const blogJson = await blogRes.json()
        // siderbar
        const postRes = await fetch('http://localhost/blog/blogs', {
            method: 'get' ,
            headers: {
                accept: 'application/json'
            }
        })
        const postJson = await postRes.json()

        return { blog: blogJson, postData: postJson}
    }
    
    render() {
        // blog
        const { blog, postData } = this.props
        const { html, toc } = getContent(blog.content)
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
                <div className="row post order-2">
                    <Header
                    img={blog.headerImageUri}
                    title={blog.title}
                    tags={blog.tags}
                    authorName={name}
                    authorImage={iconUrl}
                    // data
                    subTitle={parseChineseDate(blog.createdDate)}
                    jueJinLikeIconLink={jueJinLikeIconLink}
                    jueJinPostLink={jueJinPostLink}
                    />
                    <Sidebar post totalCount={totalCount} posts={posts} />
                    <div className="col-lg-6 col-md-12 col-sm-12 order-10 d-flex flex-column content">
                        {/** 文章内容 */}
                        <Content post={html} uuid={1} title='这是标题'  />
                        <div className="m-message" style={bgWhite}>
                            如果你觉得我的文章对你有帮助的话，希望可以推荐和交流一下。欢迎
                            <ExternalLink
                            href={gitRepository}
                            title="关注和 Star 本博客"
                            />
                            或者
                            <ExternalLink
                            href={gitHome}
                            title="关注我的 Github"
                            />
                            。
                        </div>
                        <div className="m-message" style={bgWhite}>
                        <p>更多文章：</p>
                        </div>
                    </div>
                    <ShareBox url='' />
                    <TableOfContent toc={toc}  />
                    <div id="gitalk-container" className="col-sm-8 col-12 order-12" />
                </div>
            </Layout>
        
        );
    }
}

export default BlogPost;