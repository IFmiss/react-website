webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./utils/utils.ts":
/*!************************!*\
  !*** ./utils/utils.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isBrowser = isBrowser;
exports.changePageMode = changePageMode;
exports.initPageMode = initPageMode;
var Dutils = isBrowser() ? __webpack_require__(/*! ./d-utils.js */ "./utils/d-utils.js") : undefined;

function isBrowser() {
  var p = process;
  return p && true;
}
/**
 * 改版页面主题模式
 */


function changePageMode() {
  // document.documentElement.style.setProperty(`--primary-color`, GenericUtils.randomColor());
  var container = document.getElementById('dw-theme-container');

  if (Dutils && Dutils.DomUtils.hasClass(container, 'light')) {
    container.className = 'dark';
    localStorage.setItem('mode', 'dark');
  } else {
    container.className = 'light';
    localStorage.setItem('mode', 'light');
  }
}
/**
 * 初始化页面主题模式
 */


function initPageMode() {
  if (!isBrowser()) return 'dark';
  var storageMode = localStorage.getItem('mode');
  var mode;

  if (!storageMode) {
    mode = 'light';
    localStorage.setItem('mode', mode);
  } else {
    mode = storageMode;
  }

  return mode;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/process/browser.js */ "./node_modules/process/browser.js")))

/***/ })

})
//# sourceMappingURL=_app.js.82809bacf19fb4541ce8.hot-update.js.map