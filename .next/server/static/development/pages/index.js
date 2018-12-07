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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./api/date.js":
/*!*********************!*\
  !*** ./api/date.js ***!
  \*********************/
/*! exports provided: parseChineseDate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseChineseDate", function() { return parseChineseDate; });
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ "dayjs");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);


var parseChineseDate = function parseChineseDate(date) {
  return dayjs__WEBPACK_IMPORTED_MODULE_0___default()(date).format('DD/MM/YYYY');
};



/***/ }),

/***/ "./api/images.js":
/*!***********************!*\
  !*** ./api/images.js ***!
  \***********************/
/*! no static exports found */
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

/***/ "./api/installFontAwesome.js":
/*!***********************************!*\
  !*** ./api/installFontAwesome.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ "@fortawesome/fontawesome-svg-core");
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "@fortawesome/free-solid-svg-icons");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-regular-svg-icons */ "@fortawesome/free-regular-svg-icons");
/* harmony import */ var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "@fortawesome/free-brands-svg-icons");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_3__);





var installFontAwesome = function installFontAwesome() {
  _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__["library"].add(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faCircle"], _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faComment"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faChevronUp"], _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faEnvelope"], _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faGithub"], _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faZhihu"], _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faFacebookF"]);
};

/* harmony default export */ __webpack_exports__["default"] = (installFontAwesome);

/***/ }),

/***/ "./api/parseMarkdown.js":
/*!******************************!*\
  !*** ./api/parseMarkdown.js ***!
  \******************************/
/*! exports provided: parseMark, getFirstParagraphy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseMark", function() { return parseMark; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFirstParagraphy", function() { return getFirstParagraphy; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! marked */ "marked");
/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(marked__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_html_parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-html-parser */ "react-html-parser");
/* harmony import */ var react_html_parser__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_html_parser__WEBPACK_IMPORTED_MODULE_2__);



marked__WEBPACK_IMPORTED_MODULE_1___default.a.setOptions({
  renderer: new marked__WEBPACK_IMPORTED_MODULE_1___default.a.Renderer(),
  highlight: function highlight(code) {
    return __webpack_require__(/*! highlight.js */ "highlight.js").highlightAuto(code).value;
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

var parseMark = function parseMark(content) {
  return marked__WEBPACK_IMPORTED_MODULE_1___default()(content);
};

var getFirstParagraphy = function getFirstParagraphy(content) {
  var html = parseMark(content);
  var newHtml = html.match(/<p(([\s\S])*?)<\/p>/g);

  if (newHtml === null) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\u4F60\u597D\u50CF\u5FD8\u8BB0\u4E86\u5199\u70B9\u4EC0\u4E48");
  }

  return react_html_parser__WEBPACK_IMPORTED_MODULE_2___default()(newHtml[0]);
};



/***/ }),

/***/ "./components/Card/index.js":
/*!**********************************!*\
  !*** ./components/Card/index.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Tag */ "./components/Tag/index.js");
/* harmony import */ var _api_images__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../api/images */ "./api/images.js");
/* harmony import */ var _api_images__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_api_images__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index.scss */ "./components/Card/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_5__);



 // api

 // styles



var imageStyle = function imageStyle(headerImage, color) {
  return {
    backgroundColor: "".concat(color),
    backgroundImage: " url(".concat(Object(_api_images__WEBPACK_IMPORTED_MODULE_4__["parseImgur"])(headerImage, 'large'), ")")
  };
};

var CardHeader = function CardHeader(_ref) {
  var url = _ref.url,
      image = _ref.image,
      backgroundColor = _ref.backgroundColor;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: url
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "wrapper",
    style: imageStyle(image, backgroundColor)
  })));
};

var Card = function Card(_ref2) {
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
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-sm-12 pb-4"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "custom-card"
  }, headerImage && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CardHeader, {
    url: newUrl,
    image: headerImage,
    backgroundColor: headerBackgroundColor
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "data"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "content"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "stats"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "date"
  }, date), finalTags.map(function (tag) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Tag__WEBPACK_IMPORTED_MODULE_3__["default"], {
      name: tag,
      key: tag
    });
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: newUrl
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    className: "title"
  }, title))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "d-none d-md-block"
  }, content), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: newUrl
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", null, "....\u7EE7\u7EED\u9605\u8BFB\u5168\u6587\u5167\u5BB9"))))));
};

Card.propTypes = {
  title: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,
  date: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,
  url: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,
  headerImage: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  headerBackgroundColor: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,
  // content: PropTypes.string.isRequired,
  tags: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string
};
Card.defaultProps = {
  headerImage: '',
  tags: ''
};
/* harmony default export */ __webpack_exports__["default"] = (Card);

/***/ }),

/***/ "./components/Card/index.scss":
/*!************************************!*\
  !*** ./components/Card/index.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/ExternalLink/index.js":
/*!******************************************!*\
  !*** ./components/ExternalLink/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
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

ExternalLink.propTypes = {
  href: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  target: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  rel: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
ExternalLink.defaultProps = {
  target: '_blank',
  className: '',
  rel: 'external nofollow noopener'
};
/* harmony default export */ __webpack_exports__["default"] = (ExternalLink);

/***/ }),

/***/ "./components/Footer/index.js":
/*!************************************!*\
  !*** ./components/Footer/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ExternalLink__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ExternalLink */ "./components/ExternalLink/index.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config */ "./config.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_config__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.scss */ "./components/Footer/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_3__);





var Footer = function Footer() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("footer", {
    className: "footer"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-sm-12 text-center"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "architecture"
  }, "Build with\xA0", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ExternalLink__WEBPACK_IMPORTED_MODULE_1__["default"], {
    href: "https://nextjs.org//",
    title: "Next"
  }), "\xA0and\xA0", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ExternalLink__WEBPACK_IMPORTED_MODULE_1__["default"], {
    href: "https://reactjs.org/",
    title: "React ".concat(react__WEBPACK_IMPORTED_MODULE_0___default.a.version)
  }), ".\xA0Hosted on\xA0", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ExternalLink__WEBPACK_IMPORTED_MODULE_1__["default"], {
    href: "https://www.aliyun.com/",
    title: "Aliyun"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "The code is reference on \xA0", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ExternalLink__WEBPACK_IMPORTED_MODULE_1__["default"], {
    href: "https://github.com/calpa/gatsby-starter-calpa-blog",
    title: "calpa/gatsby-starter-calpa-blog"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "copyright"
  }, "Copyright\xA0", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ExternalLink__WEBPACK_IMPORTED_MODULE_1__["default"], {
    href: "http://www.macdull.top",
    title: "\xA9Lee"
  }), "\xA0", _config__WEBPACK_IMPORTED_MODULE_2__["title"], new Date().getFullYear(), "\xA0Theme by Lee Ping")))));
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./components/Footer/index.scss":
/*!**************************************!*\
  !*** ./components/Footer/index.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/GithubCorner/index.js":
/*!******************************************!*\
  !*** ./components/GithubCorner/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.scss */ "./components/GithubCorner/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_1__);



var GithubCorner = function GithubCorner(_ref) {
  var url = _ref.url;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: url,
    className: "github-corner",
    "aria-label": "View source on Github"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    width: "60",
    height: "60",
    viewBox: "0 0 250 250",
    "aria-hidden": "true",
    className: "github-corner-svg"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2",
    fill: "currentColor",
    className: "octo-arm"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z",
    fill: "currentColor",
    className: "octo-body"
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (GithubCorner);

/***/ }),

/***/ "./components/GithubCorner/index.scss":
/*!********************************************!*\
  !*** ./components/GithubCorner/index.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/Header/index.js":
/*!************************************!*\
  !*** ./components/Header/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.scss */ "./components/Header/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _JueJin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../JueJin */ "./components/JueJin/index.js");
/* harmony import */ var _api_images__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../api/images */ "./api/images.js");
/* harmony import */ var _api_images__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_api_images__WEBPACK_IMPORTED_MODULE_4__);






var Header = function Header(_ref) {
  var img = _ref.img,
      title = _ref.title,
      subTitle = _ref.subTitle,
      authorImage = _ref.authorImage,
      authorName = _ref.authorName,
      jueJinPostLink = _ref.jueJinPostLink,
      jueJinLikeIconLink = _ref.jueJinLikeIconLink;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 header",
    style: {
      padding: 0
    },
    id: "header"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "img-container",
    style: {
      backgroundImage: "linear-gradient( rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2) ), url(".concat(img, ")"),
      marginTop: -58
    }
  }, title && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "u-title"
  }, title), subTitle && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "u-subtitle"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "m-left"
  }, authorImage && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: Object(_api_images__WEBPACK_IMPORTED_MODULE_4__["parseImgur"])(authorImage, 'small-square'),
    className: "author-image",
    alt: authorName
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "author-name"
  }, authorName)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "text"
  }, subTitle), jueJinPostLink && jueJinLikeIconLink && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_JueJin__WEBPACK_IMPORTED_MODULE_3__["default"], {
    jueJinPostLink: jueJinPostLink,
    jueJinLikeIconLink: jueJinLikeIconLink
  }))));
};

Header.propTypes = {
  img: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  subTitle: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  authorName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  authorImage: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  jueJinPostLink: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  jueJinLikeIconLink: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
Header.defaultProps = {
  title: '',
  subTitle: '',
  authorName: '',
  authorImage: '',
  jueJinPostLink: '',
  jueJinLikeIconLink: ''
};
/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/Header/index.scss":
/*!**************************************!*\
  !*** ./components/Header/index.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/JueJin/index.js":
/*!************************************!*\
  !*** ./components/JueJin/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);



var JueJin = function JueJin(_ref) {
  var jueJinPostLink = _ref.jueJinPostLink,
      jueJinLikeIconLink = _ref.jueJinLikeIconLink;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: jueJinPostLink,
    rel: "external nofollow noopener noreferrer"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: jueJinLikeIconLink,
    alt: "JueJin Link",
    style: {
      cursor: 'pointer',
      height: '1.2rem',
      marginBottom: '0.25rem'
    }
  }));
};

JueJin.propTypes = {
  jueJinPostLink: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  jueJinLikeIconLink: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
JueJin.defaultProps = {
  jueJinPostLink: '',
  jueJinLikeIconLink: ''
};
/* harmony default export */ __webpack_exports__["default"] = (JueJin);

/***/ }),

/***/ "./components/Layout/index.js":
/*!************************************!*\
  !*** ./components/Layout/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Navbar */ "./components/Navbar/index.js");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Footer */ "./components/Footer/index.js");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.scss */ "./components/Layout/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _api_installFontAwesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../api/installFontAwesome */ "./api/installFontAwesome.js");





Object(_api_installFontAwesome__WEBPACK_IMPORTED_MODULE_4__["default"])();

if (typeof window !== 'undefined') {
  // Make scroll behavior of internal links smooth
  __webpack_require__(/*! smooth-scroll */ "smooth-scroll")('a[href*="#"]', {
    offset: 60
  });
}

var Layout = function Layout(_ref) {
  var children = _ref.children,
      location = _ref.location;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "layout"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Navbar__WEBPACK_IMPORTED_MODULE_1__["default"], {
    location: location
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container-fluid"
  }, children), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Footer__WEBPACK_IMPORTED_MODULE_2__["default"], null)));
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./components/Layout/index.scss":
/*!**************************************!*\
  !*** ./components/Layout/index.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/Navbar/NavItem/index.js":
/*!********************************************!*\
  !*** ./components/Navbar/NavItem/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.scss */ "./components/Navbar/NavItem/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);





var NavItem = function NavItem(_ref) {
  var url = _ref.url,
      name = _ref.name,
      list = _ref.list;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: url
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "nav-btn btn btn-link"
  }, name));
};

NavItem.propTypes = {
  url: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
};
NavItem.defaultProps = {
  list: []
};
/* harmony default export */ __webpack_exports__["default"] = (NavItem);

/***/ }),

/***/ "./components/Navbar/NavItem/index.scss":
/*!**********************************************!*\
  !*** ./components/Navbar/NavItem/index.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/Navbar/index.js":
/*!************************************!*\
  !*** ./components/Navbar/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "@fortawesome/free-solid-svg-icons");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _NavItem___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./NavItem/ */ "./components/Navbar/NavItem/index.js");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index.scss */ "./components/Navbar/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../config */ "./config.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_config__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _GithubCorner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../GithubCorner */ "./components/GithubCorner/index.js");








var NavbarClass = ['navbar', 'navbar-expand-md', 'sticky-top', 'custom-navbar'];

var Navbar = function Navbar() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
    id: "m-navbar",
    className: "".concat(NavbarClass.join(' '), " navbar-night")
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "button",
    className: "navbar-brand btn btn-default",
    onClick: function onClick() {// Router.push('/')
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "brand-logo"
  }, "Ping"), "'s Blog"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "navbar-toggler",
    type: "button",
    "data-toggle": "collapse",
    "data-target": "#navbarSupportedContent"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faBars"]
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_GithubCorner__WEBPACK_IMPORTED_MODULE_7__["default"], {
    url: _config__WEBPACK_IMPORTED_MODULE_6__["gitRepository"]
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "collapse navbar-collapse flex-row-reverse",
    id: "navbarSupportedContent"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "navbar-nav mr-2"
  }, _config__WEBPACK_IMPORTED_MODULE_6__["navbarList"].map(function (item) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_NavItem___WEBPACK_IMPORTED_MODULE_4__["default"], {
      url: item.href,
      name: item.title,
      key: item.href
    });
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (Navbar);

/***/ }),

/***/ "./components/Navbar/index.scss":
/*!**************************************!*\
  !*** ./components/Navbar/index.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/ShareBox/index.js":
/*!**************************************!*\
  !*** ./components/ShareBox/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.scss */ "./components/ShareBox/index.scss");
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

ShareBox.propTypes = {
  url: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  hasCommentBox: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};
ShareBox.defaultProps = {
  hasCommentBox: true
};
/* harmony default export */ __webpack_exports__["default"] = (ShareBox);

/***/ }),

/***/ "./components/ShareBox/index.scss":
/*!****************************************!*\
  !*** ./components/ShareBox/index.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/Sidebar/Friend/index.js":
/*!********************************************!*\
  !*** ./components/Sidebar/Friend/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ExternalLink__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ExternalLink */ "./components/ExternalLink/index.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../config */ "./config.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_config__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.scss */ "./components/Sidebar/Friend/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_3__);





var Friend = function Friend() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "friend"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\u53CB\u60C5\u94FE\u63A5"), _config__WEBPACK_IMPORTED_MODULE_2__["friends"].map(function (friend) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ExternalLink__WEBPACK_IMPORTED_MODULE_1__["default"], {
      href: friend.href,
      title: friend.title,
      key: friend.title,
      rel: "noopener"
    });
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Friend);

/***/ }),

/***/ "./components/Sidebar/Friend/index.scss":
/*!**********************************************!*\
  !*** ./components/Sidebar/Friend/index.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/Sidebar/Information/index.js":
/*!*************************************************!*\
  !*** ./components/Sidebar/Information/index.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Friend__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Friend */ "./components/Sidebar/Friend/index.js");
/* harmony import */ var _LatestPost__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../LatestPost */ "./components/Sidebar/LatestPost/index.js");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index.scss */ "./components/Sidebar/Information/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_4__);






var Information = function Information(_ref) {
  var totalCount = _ref.totalCount,
      posts = _ref.posts;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "d-none d-lg-block information my-2"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\u5171", totalCount, "\u7BC7\u6587\u7AE0"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_LatestPost__WEBPACK_IMPORTED_MODULE_3__["default"], {
    posts: posts
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Friend__WEBPACK_IMPORTED_MODULE_2__["default"], null));
};

Information.propTypes = {
  totalCount: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Information);

/***/ }),

/***/ "./components/Sidebar/Information/index.scss":
/*!***************************************************!*\
  !*** ./components/Sidebar/Information/index.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/Sidebar/LatestPost/index.js":
/*!************************************************!*\
  !*** ./components/Sidebar/LatestPost/index.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.scss */ "./components/Sidebar/LatestPost/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _api_date__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../api/date */ "./api/date.js");






var LatestPost = function LatestPost(_ref) {
  var posts = _ref.posts;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "latest-post"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\u6700\u65B0\u6587\u7AE0"), posts.map(function (post) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      key: post.posturl,
      href: post.posturl
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", null, post.title, " - ", Object(_api_date__WEBPACK_IMPORTED_MODULE_4__["parseChineseDate"])(post.createDate)));
  }));
};

LatestPost.propTypes = {
  posts: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object).isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (LatestPost);

/***/ }),

/***/ "./components/Sidebar/LatestPost/index.scss":
/*!**************************************************!*\
  !*** ./components/Sidebar/LatestPost/index.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/Sidebar/Subscription/index.js":
/*!**************************************************!*\
  !*** ./components/Sidebar/Subscription/index.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var Subscription = function Subscription() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "subscription"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "/feed.xml",
    className: "btn btn-warning",
    role: "button"
  }, "SUBSCRIBE"));
};

/* harmony default export */ __webpack_exports__["default"] = (Subscription);

/***/ }),

/***/ "./components/Sidebar/index.js":
/*!*************************************!*\
  !*** ./components/Sidebar/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Subscription */ "./components/Sidebar/Subscription/index.js");
/* harmony import */ var _Information__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Information */ "./components/Sidebar/Information/index.js");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./index.scss */ "./components/Sidebar/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../config */ "./config.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_config__WEBPACK_IMPORTED_MODULE_7__);








var wordings = _config__WEBPACK_IMPORTED_MODULE_7___default.a.wordings,
    githubUsername = _config__WEBPACK_IMPORTED_MODULE_7___default.a.githubUsername,
    zhihuUsername = _config__WEBPACK_IMPORTED_MODULE_7___default.a.zhihuUsername,
    email = _config__WEBPACK_IMPORTED_MODULE_7___default.a.email,
    iconUrl = _config__WEBPACK_IMPORTED_MODULE_7___default.a.iconUrl,
    about = _config__WEBPACK_IMPORTED_MODULE_7___default.a.about;

var Icon = function Icon(_ref) {
  var href = _ref.href,
      icon = _ref.icon;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    target: "_blank",
    href: href,
    rel: "external nofollow noopener noreferrer",
    className: "custom-icon"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "fa-layers fa-fw fa-2x"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: icon
  })));
};

var Sidebar = function Sidebar(_ref2) {
  var post = _ref2.post,
      totalCount = _ref2.totalCount,
      posts = _ref2.posts;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "intro-header site-heading text-center col-xl-2 col-lg-3 col-xs-12 order-lg-1 ".concat(post === true ? 'order-11' : 'order-1')
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "about-me"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: about
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "name"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "avatar",
    src: iconUrl,
    alt: "Calpa"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null, "Ping"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "mb-1"
  }, wordings[0]), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "mb-3"
  }, wordings[1]), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
    href: "https://www.zhihu.com/people/".concat(zhihuUsername),
    icon: ['fab', 'zhihu']
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
    href: "https://github.com/".concat(githubUsername),
    icon: ['fab', 'github']
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
    href: "mailto:".concat(email),
    icon: ['far', 'envelope']
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Subscription__WEBPACK_IMPORTED_MODULE_4__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Information__WEBPACK_IMPORTED_MODULE_5__["default"], {
    totalCount: totalCount,
    posts: posts
  })));
};

Icon.propTypes = {
  href: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,
  icon: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string).isRequired
};
Sidebar.propTypes = {
  post: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  totalCount: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  posts: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array // eslint-disable-line

};
Sidebar.defaultProps = {
  post: false,
  totalCount: 0
};
/* harmony default export */ __webpack_exports__["default"] = (Sidebar);

/***/ }),

/***/ "./components/Sidebar/index.scss":
/*!***************************************!*\
  !*** ./components/Sidebar/index.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/Tag/index.js":
/*!*********************************!*\
  !*** ./components/Tag/index.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);



var Tag = function Tag(_ref) {
  var name = _ref.name,
      count = _ref.count;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "/tags#".concat(name),
    key: name,
    className: "header-tag"
  }, name, " ", count || '');
};

Tag.propTypes = {
  name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  count: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number
};
Tag.defaultProps = {
  count: 0
};
/* harmony default export */ __webpack_exports__["default"] = (Tag);

/***/ }),

/***/ "./config.js":
/*!*******************!*\
  !*** ./config.js ***!
  \*******************/
/*! no static exports found */
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
  gaTrackId: 'UA-84737574-3',
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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_locale_provider_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/locale-provider/style */ "antd/lib/locale-provider/style");
/* harmony import */ var antd_lib_locale_provider_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_locale_provider_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_locale_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/locale-provider */ "antd/lib/locale-provider");
/* harmony import */ var antd_lib_locale_provider__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_locale_provider__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_pagination_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/pagination/style */ "antd/lib/pagination/style");
/* harmony import */ var antd_lib_pagination_style__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_pagination_style__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_pagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/pagination */ "antd/lib/pagination");
/* harmony import */ var antd_lib_pagination__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_pagination__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var antd_lib_locale_provider_zh_CN__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd/lib/locale-provider/zh_CN */ "antd/lib/locale-provider/zh_CN");
/* harmony import */ var antd_lib_locale_provider_zh_CN__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(antd_lib_locale_provider_zh_CN__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var moment_locale_zh_cn__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! moment/locale/zh-cn */ "moment/locale/zh-cn");
/* harmony import */ var moment_locale_zh_cn__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(moment_locale_zh_cn__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout/index.js");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Header */ "./components/Header/index.js");
/* harmony import */ var _components_Sidebar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/Sidebar */ "./components/Sidebar/index.js");
/* harmony import */ var _components_Card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/Card */ "./components/Card/index.js");
/* harmony import */ var _components_ShareBox__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/ShareBox */ "./components/ShareBox/index.js");
/* harmony import */ var _api_date__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../api/date */ "./api/date.js");
/* harmony import */ var _api_parseMarkdown__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../api/parseMarkdown */ "./api/parseMarkdown.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../config */ "./config.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_config__WEBPACK_IMPORTED_MODULE_17__);






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


var msubTitle = _config__WEBPACK_IMPORTED_MODULE_17___default.a.msubTitle,
    mtitle = _config__WEBPACK_IMPORTED_MODULE_17___default.a.mtitle,
    mtitleVisible = _config__WEBPACK_IMPORTED_MODULE_17___default.a.mtitleVisible,
    msubTitleVisible = _config__WEBPACK_IMPORTED_MODULE_17___default.a.msubTitleVisible,
    mheaderImage = _config__WEBPACK_IMPORTED_MODULE_17___default.a.mheaderImage,
    pageSize = _config__WEBPACK_IMPORTED_MODULE_17___default.a.pageSize;

var Blog =
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
      pagedPosts: lodash__WEBPACK_IMPORTED_MODULE_6___default.a.chunk(_this.props.postData, pageSize),
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
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_10__["default"], null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "row homepage"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Header__WEBPACK_IMPORTED_MODULE_11__["default"], {
        img: mheaderImage,
        title: mtitle,
        titleVisible: mtitleVisible,
        subTitle: msubTitle,
        subTitleVisible: msubTitleVisible
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Sidebar__WEBPACK_IMPORTED_MODULE_12__["default"], {
        posts: posts,
        totalCount: totalCount
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-xl-6 col-lg-7 col-md-12 col-xs-12 order-2"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "row"
      }, this.state.pagedPosts[this.state.currentPage].map(function (node) {
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Card__WEBPACK_IMPORTED_MODULE_13__["default"], {
          title: node.title,
          date: Object(_api_date__WEBPACK_IMPORTED_MODULE_15__["parseChineseDate"])(node.createdDate),
          url: node._id,
          headerImage: node.headerImageUri,
          headerBackgroundColor: node.headerBackgroundColor || 'ededed',
          key: node._id,
          index: node._id,
          content: Object(_api_parseMarkdown__WEBPACK_IMPORTED_MODULE_16__["getFirstParagraphy"])(node.content),
          tags: node.tags
        });
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd_lib_locale_provider__WEBPACK_IMPORTED_MODULE_2___default.a, {
        locale: antd_lib_locale_provider_zh_CN__WEBPACK_IMPORTED_MODULE_8___default.a
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd_lib_pagination__WEBPACK_IMPORTED_MODULE_4___default.a, {
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
      }))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-xl-2 col-lg-1 order-3"
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_ShareBox__WEBPACK_IMPORTED_MODULE_14__["default"], {
        url: "location.href",
        hasCommentBox: false
      })));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
        var req, postRes, data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                req = _ref.req;
                _context.next = 3;
                return axios__WEBPACK_IMPORTED_MODULE_7___default.a.get("/blog/blogs");

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
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Blog);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/index.js */"./pages/index.js");


/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "@fortawesome/fontawesome-svg-core":
/*!****************************************************!*\
  !*** external "@fortawesome/fontawesome-svg-core" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/fontawesome-svg-core");

/***/ }),

/***/ "@fortawesome/free-brands-svg-icons":
/*!*****************************************************!*\
  !*** external "@fortawesome/free-brands-svg-icons" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-brands-svg-icons");

/***/ }),

/***/ "@fortawesome/free-regular-svg-icons":
/*!******************************************************!*\
  !*** external "@fortawesome/free-regular-svg-icons" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-regular-svg-icons");

/***/ }),

/***/ "@fortawesome/free-solid-svg-icons":
/*!****************************************************!*\
  !*** external "@fortawesome/free-solid-svg-icons" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-solid-svg-icons");

/***/ }),

/***/ "@fortawesome/react-fontawesome":
/*!*************************************************!*\
  !*** external "@fortawesome/react-fontawesome" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/react-fontawesome");

/***/ }),

/***/ "antd/lib/locale-provider":
/*!*******************************************!*\
  !*** external "antd/lib/locale-provider" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/locale-provider");

/***/ }),

/***/ "antd/lib/locale-provider/style":
/*!*************************************************!*\
  !*** external "antd/lib/locale-provider/style" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/locale-provider/style");

/***/ }),

/***/ "antd/lib/locale-provider/zh_CN":
/*!*************************************************!*\
  !*** external "antd/lib/locale-provider/zh_CN" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/locale-provider/zh_CN");

/***/ }),

/***/ "antd/lib/pagination":
/*!**************************************!*\
  !*** external "antd/lib/pagination" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/pagination");

/***/ }),

/***/ "antd/lib/pagination/style":
/*!********************************************!*\
  !*** external "antd/lib/pagination/style" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/pagination/style");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "dayjs":
/*!************************!*\
  !*** external "dayjs" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("dayjs");

/***/ }),

/***/ "highlight.js":
/*!*******************************!*\
  !*** external "highlight.js" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("highlight.js");

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ "marked":
/*!*************************!*\
  !*** external "marked" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("marked");

/***/ }),

/***/ "moment/locale/zh-cn":
/*!**************************************!*\
  !*** external "moment/locale/zh-cn" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("moment/locale/zh-cn");

/***/ }),

/***/ "next/link":
/*!****************************!*\
  !*** external "next/link" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-html-parser":
/*!************************************!*\
  !*** external "react-html-parser" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-html-parser");

/***/ }),

/***/ "smooth-scroll":
/*!********************************!*\
  !*** external "smooth-scroll" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("smooth-scroll");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map