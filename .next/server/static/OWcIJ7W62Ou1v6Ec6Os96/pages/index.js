module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 268);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ 1:
/***/ (function(module, exports) {

module.exports = {
  title: 'Ping 的技术博客',
  maxPostsInPage: 10,
  meta: {
    description: 'Ping 技术博客，开发日常，以及遇到的坑',
    keyword: 'ping, blog, JavaScript',
    theme_color: '#384f7c',
    favicon: 'https://i.imgur.com/JJryeCE.jpg'
  },
  name: 'Ping',
  email: 'leeping88901024@gmail.com',
  iconUrl: 'https://i.imgur.com/JJryeCE.jpg',
  License: 'by',
  url: 'http://www.macdull.top',
  about: '/profile',
  // also repository link blog/header
  jueJinPostLink: 'https://github.com/leeping88901024/next-ping-blog',
  jueJinLikeIconLink: 'https://img.shields.io/github/stars/leeping88901024/next-ping-blog.svg?style=social',
  // headers
  mtitle: '你好，昆明',
  msubTitle: 'Hello, Kun Ming',
  // mheaderImage: 'https://i.imgur.com/ebCJ61b.jpg',
  // https://i.imgur.com/sFZsiWe.jpg
  mheaderImage: 'https://rehasense.com/wp-content/uploads/2015/07/facility-slider.jpg',
  mtitleVisible: true,
  msubTitleVisible: true,
  // editor
  gitRepository: 'https://github.com/leeping88901024/next-ping-blog',
  gitHome: 'https://github.com/leeping88901024',
  tmpheaderBkgrdColor: '#ededed',
  // Sidebar
  wordings: ['这是一个简单的自我简绍'],
  zhihuUsername: 'li-ping-60-30',
  githubUsername: 'leeping88901024',
  friends: [{
    href: 'https://calpa.me',
    title: 'Calpa'
  }],
  // pagination size/page
  pageSize: 2,
  // Plugins - Google Analytics
  gaOptimizeId: 'GTM-WHP7SC5',
  gaTrackId: 'UA-130591707-1',
  // Navbar
  navbarList: [{
    href: '/translation/',
    title: '文档翻译'
  }, {
    href: '/test/',
    title: '留言'
  }, {
    href: '/a/',
    title: '测试Bug1'
  }],
  redirectors: [{
    fromPath: '/',
    toPath: '/page/1/'
  }],
  gitalk: {
    clientID: '106ab12fa69d9f235e1f',
    clientSecret: 'a1eda91e5225817427aab929917f87657b2192eb',
    repo: 'next-ping-blog',
    owner: 'leeping88901024',
    admin: ['leeping88901024'],
    distractionFreeMode: true
  },
  stats: {
    title: '過去三十日數據',
    description: '過去三十日數據',
    image: 'https://i.imgur.com/VjBWiSt.png'
  },
  // mongodb connect string
  dbstring: {
    uri: 'mongodb://test:test@cluster0-shard-00-00-avsto.azure.mongodb.net:27017,cluster0-shard-00-01-avsto.azure.mongodb.net:27017,cluster0-shard-00-02-avsto.azure.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true'
  }
};

/***/ }),

/***/ 10:
/***/ (function(module, exports) {

module.exports = require("@fortawesome/fontawesome-svg-core");

/***/ }),

/***/ 11:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/link"
var link_ = __webpack_require__(2);
var link_default = /*#__PURE__*/__webpack_require__.n(link_);

// EXTERNAL MODULE: external "@fortawesome/react-fontawesome"
var react_fontawesome_ = __webpack_require__(5);

// EXTERNAL MODULE: external "@fortawesome/free-solid-svg-icons"
var free_solid_svg_icons_ = __webpack_require__(6);

// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(4);

// EXTERNAL MODULE: ./components/Navbar/NavItem/index.scss
var Navbar_NavItem = __webpack_require__(15);

// CONCATENATED MODULE: ./components/Navbar/NavItem/index.js





var NavItem_NavItem = function NavItem(_ref) {
  var url = _ref.url,
      name = _ref.name,
      list = _ref.list;
  return external_react_default.a.createElement(link_default.a, {
    href: url
  }, external_react_default.a.createElement("a", {
    className: "nav-btn btn btn-link"
  }, name));
};

NavItem_NavItem.defaultProps = {
  list: []
};
/* harmony default export */ var components_Navbar_NavItem = (NavItem_NavItem);
// EXTERNAL MODULE: ./components/Navbar/index.scss
var components_Navbar = __webpack_require__(16);

// EXTERNAL MODULE: ./config.js
var config = __webpack_require__(1);

// EXTERNAL MODULE: ./components/GithubCorner/index.scss
var components_GithubCorner = __webpack_require__(17);

// CONCATENATED MODULE: ./components/GithubCorner/index.js



var GithubCorner_GithubCorner = function GithubCorner(_ref) {
  var url = _ref.url;
  return external_react_default.a.createElement("a", {
    href: url,
    className: "github-corner",
    "aria-label": "View source on Github"
  }, external_react_default.a.createElement("svg", {
    width: "60",
    height: "60",
    viewBox: "0 0 250 250",
    "aria-hidden": "true",
    className: "github-corner-svg"
  }, external_react_default.a.createElement("path", {
    d: "M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"
  }), external_react_default.a.createElement("path", {
    d: "M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2",
    fill: "currentColor",
    className: "octo-arm"
  }), external_react_default.a.createElement("path", {
    d: "M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z",
    fill: "currentColor",
    className: "octo-body"
  })));
};

/* harmony default export */ var components_GithubCorner_0 = (GithubCorner_GithubCorner);
// CONCATENATED MODULE: ./components/Navbar/index.js








var NavbarClass = ['navbar', 'navbar-expand-md', 'sticky-top', 'custom-navbar'];

var Navbar_Navbar = function Navbar() {
  return external_react_default.a.createElement("nav", {
    id: "m-navbar",
    className: "".concat(NavbarClass.join(' '), " navbar-night")
  }, external_react_default.a.createElement("div", {
    className: "container"
  }, external_react_default.a.createElement(link_default.a, {
    href: "/"
  }, external_react_default.a.createElement("a", null, external_react_default.a.createElement("button", {
    type: "button",
    className: "navbar-brand btn btn-default",
    onClick: function onClick() {// Router.push('/')
    }
  }, external_react_default.a.createElement("span", {
    className: "brand-logo"
  }, "Ping"), "'s Blog"))), external_react_default.a.createElement("button", {
    className: "navbar-toggler",
    type: "button",
    "data-toggle": "collapse",
    "data-target": "#navbarSupportedContent"
  }, external_react_default.a.createElement(react_fontawesome_["FontAwesomeIcon"], {
    icon: free_solid_svg_icons_["faBars"]
  })), external_react_default.a.createElement(components_GithubCorner_0, {
    url: config["gitRepository"]
  }), external_react_default.a.createElement("div", {
    className: "collapse navbar-collapse flex-row-reverse",
    id: "navbarSupportedContent"
  }, external_react_default.a.createElement("ul", {
    className: "navbar-nav mr-2"
  }, config["navbarList"].map(function (item) {
    return external_react_default.a.createElement(components_Navbar_NavItem, {
      url: item.href,
      name: item.title,
      key: item.href
    });
  })))));
};

/* harmony default export */ var components_Navbar_0 = (Navbar_Navbar);
// EXTERNAL MODULE: ./components/ExternalLink/index.js
var ExternalLink = __webpack_require__(3);

// EXTERNAL MODULE: ./components/Footer/index.scss
var components_Footer = __webpack_require__(18);

// CONCATENATED MODULE: ./components/Footer/index.js





var Footer_Footer = function Footer() {
  return external_react_default.a.createElement("footer", {
    className: "footer"
  }, external_react_default.a.createElement("div", {
    className: "container"
  }, external_react_default.a.createElement("div", {
    className: "row"
  }, external_react_default.a.createElement("div", {
    className: "col-sm-12 text-center"
  }, external_react_default.a.createElement("p", {
    className: "architecture"
  }, "Build with\xA0", external_react_default.a.createElement(ExternalLink["a" /* default */], {
    href: "https://nextjs.org//",
    title: "Next"
  }), "\xA0and\xA0", external_react_default.a.createElement(ExternalLink["a" /* default */], {
    href: "https://reactjs.org/",
    title: "React ".concat(external_react_default.a.version)
  }), ".\xA0Hosted on\xA0", external_react_default.a.createElement(ExternalLink["a" /* default */], {
    href: "https://www.aliyun.com/",
    title: "Aliyun"
  }), external_react_default.a.createElement("br", null), "The code is reference on \xA0", external_react_default.a.createElement(ExternalLink["a" /* default */], {
    href: "https://github.com/calpa/gatsby-starter-calpa-blog",
    title: "calpa/gatsby-starter-calpa-blog"
  })), external_react_default.a.createElement("p", {
    className: "copyright"
  }, "Copyright\xA0", external_react_default.a.createElement(ExternalLink["a" /* default */], {
    href: "http://www.macdull.top",
    title: "\xA9Lee"
  }), "\xA0", config["title"], new Date().getFullYear(), "\xA0Theme by Lee Ping")))));
};

/* harmony default export */ var components_Footer_0 = (Footer_Footer);
// EXTERNAL MODULE: ./components/Layout/index.scss
var components_Layout = __webpack_require__(19);

// EXTERNAL MODULE: external "@fortawesome/fontawesome-svg-core"
var fontawesome_svg_core_ = __webpack_require__(10);

// EXTERNAL MODULE: external "@fortawesome/free-regular-svg-icons"
var free_regular_svg_icons_ = __webpack_require__(9);

// EXTERNAL MODULE: external "@fortawesome/free-brands-svg-icons"
var free_brands_svg_icons_ = __webpack_require__(7);

// CONCATENATED MODULE: ./api/installFontAwesome.js





var installFontAwesome_installFontAwesome = function installFontAwesome() {
  fontawesome_svg_core_["library"].add(free_solid_svg_icons_["faCircle"], free_regular_svg_icons_["faComment"], free_solid_svg_icons_["faChevronUp"], free_regular_svg_icons_["faEnvelope"], free_brands_svg_icons_["faGithub"], free_brands_svg_icons_["faZhihu"], free_brands_svg_icons_["faFacebookF"]);
};

/* harmony default export */ var api_installFontAwesome = (installFontAwesome_installFontAwesome);
// CONCATENATED MODULE: ./components/Layout/index.js





api_installFontAwesome();

if (typeof window !== 'undefined') {
  // Make scroll behavior of internal links smooth
  __webpack_require__(20)('a[href*="#"]', {
    offset: 60
  });
}

var Layout_Layout = function Layout(_ref) {
  var children = _ref.children,
      location = _ref.location;
  return external_react_default.a.createElement("div", null, external_react_default.a.createElement("div", {
    className: "layout"
  }, external_react_default.a.createElement(components_Navbar_0, {
    location: location
  }), external_react_default.a.createElement("div", {
    className: "container-fluid"
  }, children), external_react_default.a.createElement(components_Footer_0, null)));
};

/* harmony default export */ var components_Layout_0 = __webpack_exports__["a"] = (Layout_Layout);

/***/ }),

/***/ 12:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return parseChineseDate; });
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);


var parseChineseDate = function parseChineseDate(date) {
  return dayjs__WEBPACK_IMPORTED_MODULE_0___default()(date).format('DD/MM/YYYY');
};



/***/ }),

/***/ 13:
/***/ (function(module, exports) {

// s = Small Square (90×90)
// b = Big Square (160×160)
// t = Small Thumbnail (160×160)
// m = Medium Thumbnail (320×320)
// l = Large Thumbnail (640×640)
// h = Huge Thumbnail (1024×1024)
var getDefaultPicture = function getDefaultPicture() {
  return 'M795H8A.jpg';
};

var parseImgur = function parseImgur(rawImage) {
  var size = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'large';
  var subfix = '';
  var image = rawImage || getDefaultPicture();

  switch (size) {
    case 'small-square':
      subfix = 's';
      break;

    case 'big-square':
      subfix = 'b';
      break;

    case 'small':
      subfix = 't';
      break;

    case 'medium':
      subfix = 'm';
      break;

    case 'large':
      subfix = 'l';
      break;

    case 'huge':
      subfix = 'h';
      break;

    default:
      break;
  } // Don't resize the png image
  // as there is a transparent bug in imgur


  if (image.match('(png)|(gif)')) {
    // Prevent double http url
    if (image.match('http')) {
      return image;
    }

    return "https://i.imgur.com/".concat(image);
  }

  var resizedImage = image.replace(/(.*)\.(.*)/, "$1".concat(subfix, ".$2")); // Prevent double http url

  if (resizedImage.match('http')) {
    return resizedImage;
  }

  return "https://i.imgur.com/".concat(resizedImage);
};

var parseTitle = function parseTitle(title, text) {
  return "title=\"".concat(title || text, "\"");
};

var parseImageTag = function parseImageTag(_ref) {
  var href = _ref.href,
      title = _ref.title,
      text = _ref.text;
  return "<img class=\"lozad d-block mx-auto\" data-src=".concat(parseImgur(href, 'large'), " ").concat(parseTitle(title, text), " />");
};

var getGalleryImage = function getGalleryImage(_ref2) {
  var href = _ref2.href,
      title = _ref2.title,
      text = _ref2.text;
  return "<a data-fancybox=\"gallery\" href=\"".concat(parseImgur(href, 'huge'), "\">").concat(parseImageTag({
    href: href,
    title: title,
    text: text
  }), "</a>");
};

module.exports = {
  parseImgur: parseImgur,
  parseImageTag: parseImageTag,
  getGalleryImage: getGalleryImage
};

/***/ }),

/***/ 15:
/***/ (function(module, exports) {



/***/ }),

/***/ 16:
/***/ (function(module, exports) {



/***/ }),

/***/ 17:
/***/ (function(module, exports) {



/***/ }),

/***/ 18:
/***/ (function(module, exports) {



/***/ }),

/***/ 19:
/***/ (function(module, exports) {



/***/ }),

/***/ 2:
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ 20:
/***/ (function(module, exports) {

module.exports = require("smooth-scroll");

/***/ }),

/***/ 21:
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ 244:
/***/ (function(module, exports) {

module.exports = require("antd/lib/pagination");

/***/ }),

/***/ 245:
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ 246:
/***/ (function(module, exports) {

module.exports = require("react-html-parser");

/***/ }),

/***/ 26:
/***/ (function(module, exports) {

module.exports = require("dayjs");

/***/ }),

/***/ 268:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(283);


/***/ }),

/***/ 269:
/***/ (function(module, exports) {

module.exports = require("antd/lib/pagination/style");

/***/ }),

/***/ 27:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(43);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_3__);





var CommentButton = function CommentButton() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "share-button",
    style: {
      lineHeight: '1.7rem',
      color: '#337ab7',
      paddingLeft: '0.15rem'
    },
    href: "#gitalk-container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
    icon: ['far', 'comment']
  }));
};

var ShareBox = function ShareBox(_ref) {
  var url = _ref.url,
      hasCommentBox = _ref.hasCommentBox;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "m-share-box"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://www.facebook.com/sharer/sharer.php?u=".concat(url),
    title: "",
    className: "share-button"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
    icon: ['fab', 'facebook-f']
  })), hasCommentBox && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CommentButton, null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "share-button",
    href: "#header",
    style: {
      lineHeight: '1.7rem',
      paddingLeft: '0.1rem'
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
    icon: ['fas', 'chevron-up']
  })));
};

ShareBox.defaultProps = {
  hasCommentBox: true
};
/* harmony default export */ __webpack_exports__["a"] = (ShareBox);

/***/ }),

/***/ 270:
/***/ (function(module, exports) {



/***/ }),

/***/ 271:
/***/ (function(module, exports) {

module.exports = require("highlight.js");

/***/ }),

/***/ 28:
/***/ (function(module, exports) {

module.exports = require("antd/lib/locale-provider");

/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "@babel/runtime/regenerator"
var regenerator_ = __webpack_require__(8);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator_);

// EXTERNAL MODULE: external "antd/lib/locale-provider/style"
var style_ = __webpack_require__(44);

// EXTERNAL MODULE: external "antd/lib/locale-provider"
var locale_provider_ = __webpack_require__(28);
var locale_provider_default = /*#__PURE__*/__webpack_require__.n(locale_provider_);

// EXTERNAL MODULE: external "antd/lib/pagination/style"
var pagination_style_ = __webpack_require__(269);

// EXTERNAL MODULE: external "antd/lib/pagination"
var pagination_ = __webpack_require__(244);
var pagination_default = /*#__PURE__*/__webpack_require__.n(pagination_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__(245);
var external_lodash_default = /*#__PURE__*/__webpack_require__.n(external_lodash_);

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(21);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// EXTERNAL MODULE: external "antd/lib/locale-provider/zh_CN"
var zh_CN_ = __webpack_require__(29);
var zh_CN_default = /*#__PURE__*/__webpack_require__.n(zh_CN_);

// EXTERNAL MODULE: external "moment/locale/zh-cn"
var zh_cn_ = __webpack_require__(45);

// EXTERNAL MODULE: ./components/Layout/index.js + 5 modules
var Layout = __webpack_require__(11);

// EXTERNAL MODULE: ./components/Header/index.js + 1 modules
var Header = __webpack_require__(31);

// EXTERNAL MODULE: ./components/Sidebar/index.js + 4 modules
var Sidebar = __webpack_require__(30);

// EXTERNAL MODULE: external "next/link"
var link_ = __webpack_require__(2);
var link_default = /*#__PURE__*/__webpack_require__.n(link_);

// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(4);

// CONCATENATED MODULE: ./components/Tag/index.js



var Tag_Tag = function Tag(_ref) {
  var name = _ref.name,
      count = _ref.count;
  return external_react_default.a.createElement("a", {
    href: "/tags#".concat(name),
    key: name,
    className: "header-tag"
  }, name, " ", count || '');
};

Tag_Tag.defaultProps = {
  count: 0
};
/* harmony default export */ var components_Tag = (Tag_Tag);
// EXTERNAL MODULE: ./api/images.js
var api_images = __webpack_require__(13);

// EXTERNAL MODULE: ./components/Card/index.scss
var components_Card = __webpack_require__(270);

// CONCATENATED MODULE: ./components/Card/index.js



 // api

 // styles



var Card_imageStyle = function imageStyle(headerImage, color) {
  return {
    backgroundColor: "".concat(color),
    backgroundImage: " url(".concat(Object(api_images["parseImgur"])(headerImage, 'large'), ")")
  };
};

var Card_CardHeader = function CardHeader(_ref) {
  var url = _ref.url,
      image = _ref.image,
      backgroundColor = _ref.backgroundColor;
  return external_react_default.a.createElement(link_default.a, {
    href: url
  }, external_react_default.a.createElement("a", null, external_react_default.a.createElement("div", {
    className: "wrapper",
    style: Card_imageStyle(image, backgroundColor)
  })));
};

var Card_Card = function Card(_ref2) {
  var title = _ref2.title,
      date = _ref2.date,
      url = _ref2.url,
      headerImage = _ref2.headerImage,
      headerBackgroundColor = _ref2.headerBackgroundColor,
      content = _ref2.content,
      tags = _ref2.tags;
  // const postUrl = parseUrl(date, url);
  var finalTags = tags.split(', '); // const contentHtml = <div>{`${content}`}</div>

  var newUrl = "/blog?url=".concat(url);
  return external_react_default.a.createElement("div", {
    className: "col-sm-12 pb-4"
  }, external_react_default.a.createElement("div", {
    className: "custom-card"
  }, headerImage && external_react_default.a.createElement(Card_CardHeader, {
    url: newUrl,
    image: headerImage,
    backgroundColor: headerBackgroundColor
  }), external_react_default.a.createElement("div", {
    className: "data"
  }, external_react_default.a.createElement("div", {
    className: "content"
  }, external_react_default.a.createElement("div", {
    className: "stats"
  }, external_react_default.a.createElement("span", {
    className: "date"
  }, date), finalTags.map(function (tag) {
    return external_react_default.a.createElement(components_Tag, {
      name: tag,
      key: tag
    });
  })), external_react_default.a.createElement(link_default.a, {
    href: newUrl
  }, external_react_default.a.createElement("a", null, external_react_default.a.createElement("h4", {
    className: "title"
  }, title))), external_react_default.a.createElement("div", {
    className: "d-none d-md-block"
  }, content), external_react_default.a.createElement(link_default.a, {
    href: newUrl
  }, external_react_default.a.createElement("a", null, "....\u7EE7\u7EED\u9605\u8BFB\u5168\u6587\u5167\u5BB9"))))));
};

Card_Card.defaultProps = {
  headerImage: '',
  tags: ''
};
/* harmony default export */ var components_Card_0 = (Card_Card);
// EXTERNAL MODULE: ./components/ShareBox/index.js
var ShareBox = __webpack_require__(27);

// EXTERNAL MODULE: ./api/date.js
var api_date = __webpack_require__(12);

// EXTERNAL MODULE: external "marked"
var external_marked_ = __webpack_require__(36);
var external_marked_default = /*#__PURE__*/__webpack_require__.n(external_marked_);

// EXTERNAL MODULE: external "react-html-parser"
var external_react_html_parser_ = __webpack_require__(246);
var external_react_html_parser_default = /*#__PURE__*/__webpack_require__.n(external_react_html_parser_);

// CONCATENATED MODULE: ./api/parseMarkdown.js



external_marked_default.a.setOptions({
  renderer: new external_marked_default.a.Renderer(),
  highlight: function highlight(code) {
    return __webpack_require__(271).highlightAuto(code).value;
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

var parseMarkdown_parseMark = function parseMark(content) {
  return external_marked_default()(content);
};

var parseMarkdown_getFirstParagraphy = function getFirstParagraphy(content) {
  var html = parseMarkdown_parseMark(content);
  var newHtml = html.match(/<p(([\s\S])*?)<\/p>/g);

  if (newHtml === null) {
    return external_react_default.a.createElement("p", null, "\u4F60\u597D\u50CF\u5FD8\u8BB0\u4E86\u5199\u70B9\u4EC0\u4E48");
  }

  return external_react_html_parser_default()(newHtml[0]);
};


// EXTERNAL MODULE: ./config.js
var config = __webpack_require__(1);
var config_default = /*#__PURE__*/__webpack_require__.n(config);

// CONCATENATED MODULE: ./pages/index.js






function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










 // api


 // config data


var msubTitle = config_default.a.msubTitle,
    mtitle = config_default.a.mtitle,
    mtitleVisible = config_default.a.mtitleVisible,
    msubTitleVisible = config_default.a.msubTitleVisible,
    mheaderImage = config_default.a.mheaderImage,
    pageSize = config_default.a.pageSize;

var pages_Blog =
/*#__PURE__*/
function (_Component) {
  _inherits(Blog, _Component);

  function Blog(props) {
    var _this;

    _classCallCheck(this, Blog);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Blog).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onShowSizeChange", function (current, pageSize) {
      // 只有 每个页面的条数变换时才会执行这里
      console.log(current, pageSize);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handlePageChange", function (page, pageSize) {
      _this.setState({
        currentPage: page - 1
      });
    });

    _this.state = {
      pagedPosts: external_lodash_default.a.chunk(_this.props.postData, pageSize),
      currentPage: 0
    };
    return _this;
  }

  _createClass(Blog, [{
    key: "render",
    value: function render() {
      // blogs
      var postData = this.props.postData; // siderbar

      var totalCount = postData.length;
      var lastPost = postData.slice(0, 6); // 只取前5篇文章

      var posts = lastPost.map(function (x) {
        return {
          title: x.title,
          createDate: x.createDate,
          posturl: "/blog?url=".concat(x._id)
        };
      });
      return external_react_default.a.createElement(Layout["a" /* default */], null, external_react_default.a.createElement("div", {
        className: "row homepage"
      }, external_react_default.a.createElement(Header["a" /* default */], {
        img: mheaderImage,
        title: mtitle,
        titleVisible: mtitleVisible,
        subTitle: msubTitle,
        subTitleVisible: msubTitleVisible
      }), external_react_default.a.createElement(Sidebar["a" /* default */], {
        posts: posts,
        totalCount: totalCount
      }), external_react_default.a.createElement("div", {
        className: "col-xl-6 col-lg-7 col-md-12 col-xs-12 order-2"
      }, external_react_default.a.createElement("div", {
        className: "row"
      }, this.state.pagedPosts[this.state.currentPage].map(function (node) {
        return external_react_default.a.createElement(components_Card_0, {
          title: node.title,
          date: Object(api_date["a" /* parseChineseDate */])(node.createdDate),
          url: node._id,
          headerImage: node.headerImageUri,
          headerBackgroundColor: node.headerBackgroundColor || 'ededed',
          key: node._id,
          index: node._id,
          content: parseMarkdown_getFirstParagraphy(node.content),
          tags: node.tags
        });
      })), external_react_default.a.createElement(locale_provider_default.a, {
        locale: zh_CN_default.a
      }, external_react_default.a.createElement(pagination_default.a, {
        showQuickJumper: true,
        style: {
          marginBottom: 20
        },
        defaultPageSize: pageSize // 每页一篇文章
        ,
        onShowSizeChange: this.onShowSizeChange,
        onChange: this.handlePageChange,
        defaultCurrent: 1,
        total: totalCount
      }))), external_react_default.a.createElement("div", {
        className: "col-xl-2 col-lg-1 order-3"
      }), external_react_default.a.createElement(ShareBox["a" /* default */], {
        url: "location.href",
        hasCommentBox: false
      })));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee(_ref) {
        var req, postRes, data;
        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                req = _ref.req;
                _context.next = 3;
                return external_axios_default.a.get("/blog/blogs");

              case 3:
                postRes = _context.sent;
                data = postRes.data;
                return _context.abrupt("return", {
                  postData: data
                });

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      };
    }()
  }]);

  return Blog;
}(external_react_["Component"]);

/* harmony default export */ var pages = __webpack_exports__["default"] = (pages_Blog);

/***/ }),

/***/ 29:
/***/ (function(module, exports) {

module.exports = require("antd/lib/locale-provider/zh_CN");

/***/ }),

/***/ 3:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);



var ExternalLink = function ExternalLink(_ref) {
  var href = _ref.href,
      title = _ref.title,
      target = _ref.target,
      className = _ref.className,
      rel = _ref.rel;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: href,
    rel: rel,
    target: target,
    className: className
  }, title);
};

ExternalLink.defaultProps = {
  target: '_blank',
  className: '',
  rel: 'external nofollow noopener'
};
/* harmony default export */ __webpack_exports__["a"] = (ExternalLink);

/***/ }),

/***/ 30:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/link"
var link_ = __webpack_require__(2);
var link_default = /*#__PURE__*/__webpack_require__.n(link_);

// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(4);

// EXTERNAL MODULE: external "@fortawesome/react-fontawesome"
var react_fontawesome_ = __webpack_require__(5);

// CONCATENATED MODULE: ./components/Sidebar/Subscription/index.js


var Subscription_Subscription = function Subscription() {
  return external_react_default.a.createElement("div", {
    className: "subscription"
  }, external_react_default.a.createElement("a", {
    href: "/feed.xml",
    className: "btn btn-warning",
    role: "button"
  }, "SUBSCRIBE"));
};

/* harmony default export */ var Sidebar_Subscription = (Subscription_Subscription);
// EXTERNAL MODULE: ./components/ExternalLink/index.js
var ExternalLink = __webpack_require__(3);

// EXTERNAL MODULE: ./config.js
var config = __webpack_require__(1);
var config_default = /*#__PURE__*/__webpack_require__.n(config);

// EXTERNAL MODULE: ./components/Sidebar/Friend/index.scss
var Sidebar_Friend = __webpack_require__(39);

// CONCATENATED MODULE: ./components/Sidebar/Friend/index.js





var Friend_Friend = function Friend() {
  return external_react_default.a.createElement("div", {
    className: "friend"
  }, external_react_default.a.createElement("p", null, "\u53CB\u60C5\u94FE\u63A5"), config["friends"].map(function (friend) {
    return external_react_default.a.createElement(ExternalLink["a" /* default */], {
      href: friend.href,
      title: friend.title,
      key: friend.title,
      rel: "noopener"
    });
  }));
};

/* harmony default export */ var components_Sidebar_Friend = (Friend_Friend);
// EXTERNAL MODULE: ./components/Sidebar/LatestPost/index.scss
var Sidebar_LatestPost = __webpack_require__(40);

// EXTERNAL MODULE: ./api/date.js
var date = __webpack_require__(12);

// CONCATENATED MODULE: ./components/Sidebar/LatestPost/index.js






var LatestPost_LatestPost = function LatestPost(_ref) {
  var posts = _ref.posts;
  return external_react_default.a.createElement("div", {
    className: "latest-post"
  }, external_react_default.a.createElement("p", null, "\u6700\u65B0\u6587\u7AE0"), posts.map(function (post) {
    return external_react_default.a.createElement(link_default.a, {
      key: post.posturl,
      href: post.posturl
    }, external_react_default.a.createElement("a", null, post.title, " - ", Object(date["a" /* parseChineseDate */])(post.createDate)));
  }));
};

/* harmony default export */ var components_Sidebar_LatestPost = (LatestPost_LatestPost);
// EXTERNAL MODULE: ./components/Sidebar/Information/index.scss
var Sidebar_Information = __webpack_require__(41);

// CONCATENATED MODULE: ./components/Sidebar/Information/index.js






var Information_Information = function Information(_ref) {
  var totalCount = _ref.totalCount,
      posts = _ref.posts;
  return external_react_default.a.createElement("div", {
    className: "d-none d-lg-block information my-2"
  }, external_react_default.a.createElement("hr", null), external_react_default.a.createElement("p", null, "\u5171", totalCount, "\u7BC7\u6587\u7AE0"), external_react_default.a.createElement("hr", null), external_react_default.a.createElement(components_Sidebar_LatestPost, {
    posts: posts
  }), external_react_default.a.createElement("hr", null), external_react_default.a.createElement(components_Sidebar_Friend, null));
};

/* harmony default export */ var components_Sidebar_Information = (Information_Information);
// EXTERNAL MODULE: ./components/Sidebar/index.scss
var components_Sidebar = __webpack_require__(42);

// CONCATENATED MODULE: ./components/Sidebar/index.js








var wordings = config_default.a.wordings,
    githubUsername = config_default.a.githubUsername,
    zhihuUsername = config_default.a.zhihuUsername,
    email = config_default.a.email,
    iconUrl = config_default.a.iconUrl,
    about = config_default.a.about;

var Sidebar_Icon = function Icon(_ref) {
  var href = _ref.href,
      icon = _ref.icon;
  return external_react_default.a.createElement("a", {
    target: "_blank",
    href: href,
    rel: "external nofollow noopener noreferrer",
    className: "custom-icon"
  }, external_react_default.a.createElement("span", {
    className: "fa-layers fa-fw fa-2x"
  }, external_react_default.a.createElement(react_fontawesome_["FontAwesomeIcon"], {
    icon: icon
  })));
};

var Sidebar_Sidebar = function Sidebar(_ref2) {
  var post = _ref2.post,
      totalCount = _ref2.totalCount,
      posts = _ref2.posts;
  return external_react_default.a.createElement("div", {
    className: "intro-header site-heading text-center col-xl-2 col-lg-3 col-xs-12 order-lg-1 ".concat(post === true ? 'order-11' : 'order-1')
  }, external_react_default.a.createElement("div", {
    className: "about-me"
  }, external_react_default.a.createElement(link_default.a, {
    href: about
  }, external_react_default.a.createElement("a", {
    className: "name"
  }, external_react_default.a.createElement("img", {
    className: "avatar",
    src: iconUrl,
    alt: "Calpa"
  }), external_react_default.a.createElement("h4", null, "Ping"))), external_react_default.a.createElement("p", {
    className: "mb-1"
  }, wordings[0]), external_react_default.a.createElement("p", {
    className: "mb-3"
  }, wordings[1]), external_react_default.a.createElement(Sidebar_Icon, {
    href: "https://www.zhihu.com/people/".concat(zhihuUsername),
    icon: ['fab', 'zhihu']
  }), external_react_default.a.createElement(Sidebar_Icon, {
    href: "https://github.com/".concat(githubUsername),
    icon: ['fab', 'github']
  }), external_react_default.a.createElement(Sidebar_Icon, {
    href: "mailto:".concat(email),
    icon: ['far', 'envelope']
  }), external_react_default.a.createElement(Sidebar_Subscription, null), external_react_default.a.createElement(components_Sidebar_Information, {
    totalCount: totalCount,
    posts: posts
  })));
};

Sidebar_Sidebar.defaultProps = {
  post: false,
  totalCount: 0
};
/* harmony default export */ var components_Sidebar_0 = __webpack_exports__["a"] = (Sidebar_Sidebar);

/***/ }),

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(4);

// EXTERNAL MODULE: ./components/Header/index.scss
var components_Header = __webpack_require__(38);

// CONCATENATED MODULE: ./components/JueJin/index.js



var JueJin_JueJin = function JueJin(_ref) {
  var jueJinPostLink = _ref.jueJinPostLink,
      jueJinLikeIconLink = _ref.jueJinLikeIconLink;
  return external_react_default.a.createElement("a", {
    href: jueJinPostLink,
    rel: "external nofollow noopener noreferrer"
  }, external_react_default.a.createElement("img", {
    src: jueJinLikeIconLink,
    alt: "JueJin Link",
    style: {
      cursor: 'pointer',
      height: '1.2rem',
      marginBottom: '0.25rem'
    }
  }));
};

JueJin_JueJin.defaultProps = {
  jueJinPostLink: '',
  jueJinLikeIconLink: ''
};
/* harmony default export */ var components_JueJin = (JueJin_JueJin);
// EXTERNAL MODULE: ./api/images.js
var api_images = __webpack_require__(13);

// CONCATENATED MODULE: ./components/Header/index.js






var Header_Header = function Header(_ref) {
  var img = _ref.img,
      title = _ref.title,
      subTitle = _ref.subTitle,
      authorImage = _ref.authorImage,
      authorName = _ref.authorName,
      jueJinPostLink = _ref.jueJinPostLink,
      jueJinLikeIconLink = _ref.jueJinLikeIconLink;
  return external_react_default.a.createElement("div", {
    className: "col-12 header",
    style: {
      padding: 0
    },
    id: "header"
  }, external_react_default.a.createElement("div", {
    className: "img-container",
    style: {
      backgroundImage: "linear-gradient( rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2) ), url(".concat(img, ")"),
      marginTop: -58
    }
  }, title && external_react_default.a.createElement("h1", {
    className: "u-title"
  }, title), subTitle && external_react_default.a.createElement("div", {
    className: "u-subtitle"
  }, external_react_default.a.createElement("div", {
    className: "m-left"
  }, authorImage && external_react_default.a.createElement("img", {
    src: Object(api_images["parseImgur"])(authorImage, 'small-square'),
    className: "author-image",
    alt: authorName
  }), external_react_default.a.createElement("span", {
    className: "author-name"
  }, authorName)), external_react_default.a.createElement("span", {
    className: "text"
  }, subTitle), jueJinPostLink && jueJinLikeIconLink && external_react_default.a.createElement(components_JueJin, {
    jueJinPostLink: jueJinPostLink,
    jueJinLikeIconLink: jueJinLikeIconLink
  }))));
};

Header_Header.defaultProps = {
  title: '',
  subTitle: '',
  authorName: '',
  authorImage: '',
  jueJinPostLink: '',
  jueJinLikeIconLink: ''
};
/* harmony default export */ var components_Header_0 = __webpack_exports__["a"] = (Header_Header);

/***/ }),

/***/ 36:
/***/ (function(module, exports) {

module.exports = require("marked");

/***/ }),

/***/ 38:
/***/ (function(module, exports) {



/***/ }),

/***/ 39:
/***/ (function(module, exports) {



/***/ }),

/***/ 4:
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ 40:
/***/ (function(module, exports) {



/***/ }),

/***/ 41:
/***/ (function(module, exports) {



/***/ }),

/***/ 42:
/***/ (function(module, exports) {



/***/ }),

/***/ 43:
/***/ (function(module, exports) {



/***/ }),

/***/ 44:
/***/ (function(module, exports) {

module.exports = require("antd/lib/locale-provider/style");

/***/ }),

/***/ 45:
/***/ (function(module, exports) {

module.exports = require("moment/locale/zh-cn");

/***/ }),

/***/ 5:
/***/ (function(module, exports) {

module.exports = require("@fortawesome/react-fontawesome");

/***/ }),

/***/ 6:
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-solid-svg-icons");

/***/ }),

/***/ 7:
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-brands-svg-icons");

/***/ }),

/***/ 8:
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ 9:
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-regular-svg-icons");

/***/ })

/******/ });