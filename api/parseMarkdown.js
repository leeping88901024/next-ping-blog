import myMarked from 'marked'
import ReactHtmlParser from 'react-html-parser'

myMarked.setOptions({
    renderer: new myMarked.Renderer(),
    highlight: function(code) {
      return require('highlight.js').highlightAuto(code).value;
    },
    pedantic: false,
    gfm: true,
    tables: true,
    breaks: false,
    sanitize: false,
    smartLists: true,
    smartypants: false,
    xhtml: false
});

const parseMark = (content) => myMarked(content);

const getFirstParagraphy = (content) => {
    const html = parseMark(content);
    const newHtml = html.match(/<p(([\s\S])*?)<\/p>/g);
    if (newHtml === null) {
        return <p>你好像忘记了写点什么</p>
    }
    return ReactHtmlParser(newHtml[0]);
};

export {
    parseMark,
    getFirstParagraphy
}
