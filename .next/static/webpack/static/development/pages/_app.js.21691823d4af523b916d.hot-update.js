webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./node_modules/@dw/d-utils/lib/domUtils/index.js":
false,

/***/ "./node_modules/@dw/d-utils/lib/expUtils/index.js":
false,

/***/ "./node_modules/@dw/d-utils/lib/logUtils/index.js":
false,

/***/ "./node_modules/@dw/d-utils/lib/storeUtils/index.js":
false,

/***/ "./utils/utils.ts":
/*!************************!*\
  !*** ./utils/utils.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hasClass = hasClass;
exports.changePageMode = changePageMode;
exports.initPageMode = initPageMode;

function hasClass(el, className) {
  return el.classList.contains(className);
}
/**
 * 改版页面主题模式
 */


function changePageMode() {
  // document.documentElement.style.setProperty(`--primary-color`, GenericUtils.randomColor());
  var body = document.body;

  if (hasClass(body, 'light')) {
    document.body.className = 'dark';
    localStorage.setItem('mode', 'dark');
  } else {
    document.body.className = 'light';
    localStorage.setItem('mode', 'light');
  }
}
/**
 * 初始化页面主题模式
 */


function initPageMode() {
  var storageMode = localStorage.getItem('mode');
  var mode;

  if (!storageMode) {
    mode = 'light';
    localStorage.setItem('mode', mode);
  } else {
    mode = storageMode;
  }

  document.body.className = mode;
}

/***/ })

})
//# sourceMappingURL=_app.js.21691823d4af523b916d.hot-update.js.map