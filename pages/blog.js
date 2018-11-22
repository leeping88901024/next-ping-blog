import React, { Component } from 'react'
import wrapLayout from '../api/wraplayout'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import Card from '../components/Card'

import { parseChineseDate } from '../api/date'

import installFontAwesome from '../api/installFontAwesome'
installFontAwesome();

// 临时数据
const header = {
    headerImage: 'https://i.imgur.com/ebCJ61b.jpg',
    createdDate: `${new Date()}`,
    title: 'Hello, World!',
    titleVisible: true,
    subTitle: "Calpa's Blog Starter",
    subTitleVisible: true,
}

const postData = [
    {
        title: 'Blog Title',
        tags: 'JavaScript',
        url: 'your-awesome-blog-post-url',
        createdDate: `${new Date()}`,
        jueJinLikeIconLink: '',
        jueJinPostLink: '',
        content: '## 前言\n\nContent\n\n## abcd\n\ncontent1123123',
        headerImgur: 'https://i.imgur.com/gf1pKau.png',
        headerBackgroundColor: 'a2c9ea',
    },
    {
        title: 'Blog Title2',
        tags: 'JavaScript',
        url: 'your-awesome-blog-post-url',
        createdDate: `${new Date()}`,
        jueJinLikeIconLink: '',
        jueJinPostLink: '',
        content: '## 前言\n\nContent\n\n## abcd\n\ncontent1123123',
        headerImgur: 'https://i.imgur.com/ebCJ61b.jpg',
        headerBackgroundColor: 'a2c9ea',
    }
]


class Blog extends Component {
    render() {
        return (
            <div className="row homepage" >
                <Header
                img={header.headerImage}
                title={header.title}
                titleVisible={header.titleVisible}
                subTitle={header.subTitle}
                subTitleVisible={header.subTitleVisible}
                />
                <Sidebar
                totalCount={ 100 }
                posts={[]}
                />
                <div className="col-xl-6 col-lg-7 col-md-12 col-xs-12 order-2">
                <div className="row">
                {postData.map(node => (
                    <Card
                        title={node.title}
                        date={parseChineseDate(node.createdDate)}
                        url={node.url}
                        headerSize={node.headerSize}
                        headerImage={node.headerImgur}
                        headerBackgroundColor={node.headerBackgroundColor || 'ededed'}
                        key={node.title}
                        index={node.title}
                        content={node.content}
                        tags={node.tags}
                    />
                    ))}
                </div>
                </div>
                <div className="col-xl-2 col-lg-1 order-3" />
            </div>
        )
    }
}

export default wrapLayout(Blog)