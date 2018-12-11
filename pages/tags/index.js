import React, { Component } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import dayjs from 'dayjs'
import Link from 'next/link'
import Tag from '../../components/Tag'
import ShareBox from '../../components/ShareBox'
import { Button } from 'antd'
import Layout from '../../components/Layout'
import Header from '../../components/Header'

// config data
import config from '../../config'

const splitTag = (raw = '') => raw.split(', ')

const parseDate = date => dayjs(date).format('YYYY/MM/DD')
const tagCenter = 'col-12 col-md-10 col-lg-8 m-auto'

const { msubTitle, mtitle, mtitleVisible, msubTitleVisible, mheaderImage } = config

const getTag = (item) => {
  const { tags, createDate, title,_id } = item;

  if (tags) {
    return {
      tags: splitTag(tags),
      title: title,
      posturl: `/blog?url=${_id}`,
      createDate,
    };
  }
  return item;
};

const lenOf = (array = []) => array.length;

const Item = ({ url = '', title = '', createdDate = '' }) => (
  <li key={title}>
    <Link href={url}>
      <a>
        {`${title} (${parseDate(createdDate)})`}
      </a>
    </Link>
  </li>
);

Item.propTypes = {
  url: PropTypes.string,
  title: PropTypes.string,
  createdDate: PropTypes.string,
};

Item.defaultProps = {
  url: '',
  title: '',
  createdDate: '',
};

const TagSession = ({ tag = 'tag', articles = [], isActive = false }) => (
  <div className={tagCenter} id={tag}>
    <h3
      style={{
        color: isActive ? 'red' : 'black',
      }}
    >
      {tag}
    </h3>
    <ol>
      {articles.map(article => (
        <Item
          url={article.posturl}
          title={article.title}
          createdDate={article.createDate}
          key={article.title}
        />
      ))}
    </ol>
  </div>
);

TagSession.propTypes = {
  tag: PropTypes.string,
  articles: PropTypes.arrayOf(PropTypes.object),
  isActive: PropTypes.bool,
};

TagSession.defaultProps = {
  tag: '',
  articles: [],
  isActive: false,
};

const style = {
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'row',
};

class TagPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tags: {},
      showAllTags: false,
    };
  }

  static async getInitialProps() {
    const postRes = await axios.get(`/blog/blogs`)
    const { data } = postRes

    return { postData: data }
}

  componentWillMount() {
    const tags = {}
    const { postData } = this.props
    const temp = postData.map(item => getTag(item));

    temp.forEach((x) => {
      const { title, posturl, createDate } = x;

      for (let i = 0, n = x.tags.length; i < n; i += 1) {
        const item = { title, posturl, createDate };
        if (tags[x.tags[i]]) {
          tags[x.tags[i]].push(item);
        } else {
          tags[x.tags[i]] = [item];
        }
      }
    });
    this.setState({ tags });
  }

  compareTag(a, b) {
    const { tags } = this.state;
    return lenOf(tags[b]) - lenOf(tags[a]);
  }

  toggleAllTags() {
    this.setState(state => ({
      showAllTags: !state.showAllTags,
    }));
  }

  render() {
    const { showAllTags, tags } = this.state;
    const { location } = this.props;
    // const { header } = data;

    const rawTags = Object.keys(tags);
    const sortedTags = rawTags.sort((a, b) => this.compareTag(a, b));

    const hotTags = !showAllTags ? rawTags.slice(0, 5) : rawTags;

    return (
      <Layout>
        <div className="row">
          <Header
            img={mheaderImage}
            title='文章分类'
            titleVisible={mtitleVisible}
            subTitle='（按标签分类）'
            subTitleVisible={msubTitleVisible}
          />
          <div className={tagCenter}>
            <h2 style={{ ...style, justifyContent: 'space-between' }}>
              最热门标签
              <Button
                type="primary"
                onClick={() => this.toggleAllTags()}
              >
                所有标签
              </Button>
            </h2>
            <hr/>
            <div
              style={{
                ...style,
                justifyContent: 'space-evenly',
                flexWrap: 'wrap',
              }}
            >
              {hotTags.map(item => (
                <Tag name={item} count={tags[item].length} key={item} />
              ))}
            </div>
            <hr/>
          </div>
  
          {sortedTags.map(tag => (
            <TagSession
              tag={tag}
              articles={tags[tag].filter((v, i, a) => a.indexOf(v) === i)}
              isActive={false}
              key={tag}
            />
          ))}

          <ShareBox url={''} hasCommentBox={false} />
        </div>
      </Layout>
    );
  }
}

export default TagPage;
