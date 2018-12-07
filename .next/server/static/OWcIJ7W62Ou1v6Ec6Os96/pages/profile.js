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
/******/ 	return __webpack_require__(__webpack_require__.s = 276);
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

/***/ 276:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(277);


/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

 // self-defined component



var Profile =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Profile, _React$Component);

  function Profile() {
    _classCallCheck(this, Profile);

    return _possibleConstructorReturn(this, _getPrototypeOf(Profile).apply(this, arguments));
  }

  _createClass(Profile, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], null, "\u8FD9\u662FProfile");
    }
  }]);

  return Profile;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Profile);

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

/***/ 4:
/***/ (function(module, exports) {

module.exports = require("prop-types");

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

/***/ 9:
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-regular-svg-icons");

/***/ })

/******/ });