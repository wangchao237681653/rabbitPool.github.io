webpackHotUpdate("static/development/pages/hosting.js",{

/***/ "./components/titleComp.js":
/*!*********************************!*\
  !*** ./components/titleComp.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/leon/work/rabbitpool/components/titleComp.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var TitleComp = function TitleComp(props) {
  var leftCoin = props.leftCoin,
      rightCoin = props.rightCoin,
      titleCol = props.titleCol,
      title = props.title;
  return __jsx("div", {
    className: "t-reg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, __jsx("img", {
    className: "t-leftCoin",
    src: leftCoin,
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }), __jsx("span", {
    className: "t-title",
    style: titleCol,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, title), __jsx("img", {
    className: "t-leftCoin",
    src: rightCoin,
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }), __jsx("div", {
    className: 't-summary',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, props.summary), __jsx("style", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, "\n        body {\n          margin: 0;\n        }\n        .t-reg {\n           width:500px;\n           height:82px;\n           display: block;\n           margin:0 auto;\n        }\n        .t-title {\n          height:50px;\n          font-size:36px;\n          font-family:PingFangSC-Medium,PingFang SC;\n          font-weight:500;\n          line-height:50px;\n          letter-spacing:1px;\n        }\n        .t-summary {\n            height:22px;\n            font-size:16px;\n            font-family:PingFangSC-Regular,PingFang SC;\n            font-weight:400;\n            color:rgba(153,153,153,1);\n            line-height:22px;\n        }\n      "));
};

/* harmony default export */ __webpack_exports__["default"] = (TitleComp);

/***/ })

})
//# sourceMappingURL=hosting.js.6658f5aff18ad6f551ae.hot-update.js.map