import React from 'react'
import ReactMde from 'react-mde'
import * as Showdown from "showdown"
import classNames from 'classnames'
import fetch from 'isomorphic-unfetch'

import { GithubPicker } from 'react-color'

import { Modal, Button ,LocaleProvider } from 'antd'
import zh_CN from 'antd/lib/locale-provider/zh_CN'
import 'moment/locale/zh-cn'

// material design
import TextField from '@material-ui/core/TextField'
import { withStyles } from '@material-ui/core/styles'

// self-defined component
import Layout from '../components/Layout'

// styles
import 'draft-js/dist/Draft.css'
import 'react-mde/lib/styles/scss/react-mde-all.scss'
// config data
import config from '../config';

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        marginTop: 4,
    },
    textField: {
        mafginLeft: theme.spacing.unit,
        marginRight: 50,
        width: 250,
    },
    dense: {
        marginTop: 19,
    },
    button: {
        marginTop: 20,
    },
    popover: {
        position: 'absolute',
        zIndex: '2',
    },
    cover: {
        position: 'fixed',
        top: '0px',
        right: '0px',
        bottom: '0px',
        left: '0px',
    },
});

const { tmpblogimage2, tmpheaderBkgrdColor } = config

class Editor extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            ModalText: '你确定好要发布文章了吗？',
            visible: false,
            confirmLoading: false,
            displayColorPicker: false,
            title: '第一篇博文',
            content: '', // markdown content
            tags: '随笔',
            headerBackgroundColor: tmpheaderBkgrdColor,
            headerImageUri: tmpblogimage2
        };
        this.converter = new Showdown.Converter({
        tables: true,
        simplifiedAutoLink: true,
        strikethrough: true,
        tasklists: true
        });
    }

    showModal = () => {
        this.setState({
        visible: true,
        });
    }
    
    handleOk = () => {
        this.setState({
        ModalText: '正在发布文章，请稍等......',
        confirmLoading: true,
        });
        // post blog here
        var post = {
            title: this.state.title,
            headerImageUri: this.state.headerImageUri,
            tags: this.state.tags,
            headerBackgroundColor: this.state.headerBackgroundColor,
            content: this.state.content
        }

        fetch('/blog/create', {
            method: 'post',
            credentials: 'include',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(post),
        }).then(res => res.json())
          .then(json => {
              console.log(json)
              if (json.insertedCount > 0) {
                  this.setState({ ModalText: '你的文章已经发布成功，即将关闭对话框' })
                  setTimeout(() => {
                    this.setState({
                        visible: false,
                        confirmLoading: false,
                    });
                    }, 1000);
              }
          });
        
    }
    
    handleCancel = () => {
        console.log('Clicked cancel button');
        this.setState({
        visible: false,
        });
    }
    
    handleClick = () => {
        this.setState({ displayColorPicker: !this.state.displayColorPicker })
    }
    
    handleClose = () => {
        this.setState({ displayColorPicker: false })
    }

    // handle color change
    handleChange = (color) => {
        this.setState({ headerBackgroundColor: color.hex })
        console.log(`the current color is ${this.state.headerBackgroundColor}`)
    }

    // handle markdown content change
    handleValueChange = (value) => {
        this.setState({ content:  value });
    };

    // handle textfield change
    handleTextChange = (e) => {
        var id = e.target.id
        var value = e.target.value
        switch (id) {
            case 'title':
                this.setState({ title:  value})
                break;
            case 'headerImageUri':
                this.setState({ headerImageUri:  value})
                break;
            case 'tags':
                this.setState({ tags:  value})
                break; 
            default:
                break;
        }
    }

    render() {
        const { visible, confirmLoading, ModalText } = this.state;
        const { classes } = this.props;
        return (
            <Layout>
                <div className="container" >
                    <form className={classes.container} noValidate autoComplete="off" style={{background: this.state.headerBackgroundColor}}>
                        <div>
                            <TextField
                                id="title"
                                label="文章标题"
                                className={classNames(classes.textField, classes.dense)}
                                margin="dense"
                                value={this.state.title}
                                onChange={this.handleTextChange}
                            />
                            <TextField
                                id="headerImageUri"
                                label="文章头图像地址"
                                placeholder="https://i.imgur.com/gf1pKau.png"
                                className={classes.textField}
                                value={this.state.headerImageUri}
                                margin="normal"
                                onChange={this.handleTextChange}
                            />
                        </div>
                        <TextField
                                id="tags"
                                label="标签"
                                placeholder="JavaScript, C++, NodeJS, ReactJS"
                                className={classes.textField}
                                margin="normal"
                                value={this.state.tags}
                                onChange={this.handleTextChange}
                        />
                        <div className={classes.container}>
                            <Button
                                type="primary"
                                onClick={this.handleClick}
                                className={classes.button}
                            >
                                选择卡片背景色
                            </Button>
                            {this.state.displayColorPicker ?
                            <div className={classes.popover}>
                                <div className={classes.cover} onClick={this.handleClose}></div>
                                <GithubPicker  onChange={this.handleChange} />
                            </div> 
                            : null}
                        </div>  
                    </form>
                    
                    <ReactMde
                        className={classes.dense}
                        onChange={this.handleValueChange}
                        value={this.state.content}
                        minEditorHeight={410}
                        generateMarkdownPreview={markdown =>
                            Promise.resolve(this.converter.makeHtml(markdown))
                        }
                    />
                    <LocaleProvider locale={zh_CN}>
                        <div>
                            <Button type="primary" onClick={this.showModal} className={classes.button}>
                            发布文章
                            </Button>
                            <Modal title="提示"
                                visible={visible}
                                onOk={this.handleOk}
                                confirmLoading={confirmLoading}
                                onCancel={this.handleCancel}
                            >
                            <p>{ModalText}</p>
                            </Modal>
                        </div>
                    </LocaleProvider>
                </div> 
            </Layout>
        )
    }
}

export default withStyles(styles)(Editor);