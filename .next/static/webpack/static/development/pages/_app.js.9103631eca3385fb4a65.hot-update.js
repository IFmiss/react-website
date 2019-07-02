webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/asyncToGenerator.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js"));

var _mobxReact = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/index.module.js");

var _app = _interopRequireWildcard(__webpack_require__(/*! next/app */ "./node_modules/next/app.js"));

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _Nav = _interopRequireDefault(__webpack_require__(/*! ./../components/Nav */ "./components/Nav/index.tsx"));

var _index = _interopRequireDefault(__webpack_require__(/*! ./../store/index */ "./store/index.ts"));

var _utils = __webpack_require__(/*! ./../utils/utils */ "./utils/utils.ts");

var _class,
    _temp,
    _jsxFileName = "F:\\mine\\react-website\\pages\\_app.tsx";

var MyApp = (0, _mobxReact.observer)(_class = (_temp =
/*#__PURE__*/
function (_App) {
  (0, _inherits2["default"])(MyApp, _App);
  (0, _createClass2["default"])(MyApp, null, [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee(appContext) {
        var pageProps, mode;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                pageProps = {};
                mode = {};

                if (!appContext.Component.getInitialProps) {
                  _context.next = 6;
                  break;
                }

                _context.next = 5;
                return appContext.Component.getInitialProps(appContext.ctx);

              case 5:
                pageProps = _context.sent;

              case 6:
                return _context.abrupt("return", {
                  pageProps: pageProps,
                  mode: mode
                });

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  function MyApp(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, MyApp);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(MyApp).call(this, props));
    _this.mode = void 0;
    _this.mode = (0, _utils.isBrowser)() && (0, _utils.initPageMode)();
    return _this;
  }

  (0, _createClass2["default"])(MyApp, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          Component = _this$props.Component,
          pageProps = _this$props.pageProps; // const { mode } = this.state

      console.log('_app.props', this.mode);
      return React.createElement(_app.Container, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, React.createElement("div", {
        id: "dw-theme-container",
        className: this.mode,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, React.createElement(_Nav["default"], (0, _extends2["default"])({}, _index["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      })), React.createElement(_mobxReact.Provider, (0, _extends2["default"])({}, _index["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }), React.createElement(Component, (0, _extends2["default"])({}, pageProps, _index["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      })))));
    }
  }]);
  return MyApp;
}(_app["default"]), _temp)) || _class;

exports["default"] = MyApp;

/***/ })

})
//# sourceMappingURL=_app.js.9103631eca3385fb4a65.hot-update.js.map