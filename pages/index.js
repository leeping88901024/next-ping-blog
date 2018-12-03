import React, { Component } from 'react'
import fetch from 'isomorphic-unfetch'
import chunk from 'lodash'
import { Pagination } from 'antd'
import axios from 'axios'

import Layout from '../components/Layout'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import Card from '../components/Card'
import ShareBox from '../components/ShareBox'

// api
import { parseChineseDate } from '../api/date'
import { getFirstParagraphy } from '../api/parseMarkdown'

// config data
import config from '../config'

const { msubTitle, mtitle, mtitleVisible, msubTitleVisible, mheaderImage, pageSize } = config

class Blog extends Component {
    constructor(props) {
        super(props)
        this.state = {
            pagedPosts: chunk.chunk(this.props.postData, pageSize),
            currentPage: 0
        }
    }
    static async getInitialProps({ req }) {
        /* const postRes = await fetch(`${process.env.BACKEND_URL}/blog/blogs`, {
            method: 'get' ,
            mode: 'no-cors',
            headers: {
                accept: 'application/json'
            }
        }) */
        const postRes = await axios.get(`${process.env.BACKEND_URL}/blog/blogs`)
        const { data } = postRes

        return { postData: data }
    }

    onShowSizeChange = (current, pageSize) => {
        // 只有 每个页面的条数变换时才会执行这里
        console.log(current, pageSize)
    }

    handlePageChange = (page, pageSize) => {
        this.setState({ currentPage: page-1 })
    }


    render() {
        // blogs
        const postData = this.props.postData
        // siderbar
        const totalCount = postData.length
        const lastPost = postData.slice(0,6) // 只取前5篇文章
        const posts = lastPost.map( x => {
            return {
                title: x.title,
                createDate: x.createDate,
                posturl: `/blog?url=${x._id}`
            }
        })
        return (
            <Layout>
                <div className="row homepage" >
                    <Header
                    img={mheaderImage}
                    title={mtitle}
                    titleVisible={mtitleVisible}
                    subTitle={msubTitle}
                    subTitleVisible={msubTitleVisible}
                    />
                    <Sidebar posts={posts} totalCount={totalCount} />
                    <div className="col-xl-6 col-lg-7 col-md-12 col-xs-12 order-2">
                    <div className="row">
                        {this.state.pagedPosts[this.state.currentPage].map(node => (
                            <Card
                                title={node.title}
                                date={parseChineseDate(node.createdDate)}
                                url={node._id}
                                headerImage={node.headerImageUri}
                                headerBackgroundColor={node.headerBackgroundColor || 'ededed'}
                                key={node._id}
                                index={node._id}
                                content={getFirstParagraphy(node.content)}
                                tags={node.tags}
                            />
                            ))}
                    </div>
                    {/* pagenation */}
                    <Pagination 
                      showQuickJumper 
                      defaultPageSize={pageSize} // 每页一篇文章
                      onShowSizeChange={this.onShowSizeChange} 
                      onChange={this.handlePageChange}
                      defaultCurrent={1} total={totalCount} />
                    </div>
                    <div className="col-xl-2 col-lg-1 order-3" />
                    <ShareBox url='location.href' hasCommentBox={false} />
                </div>
            </Layout>
        )
    }
}

export default Blog