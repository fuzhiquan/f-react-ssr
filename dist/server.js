/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./server/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./component/header/index.js":
/*!***********************************!*\
  !*** ./component/header/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.scss */ \"./component/header/index.scss\");\n/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (props) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"header-container\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n    to: \"/\"\n  }, \"home\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n    to: \"/login\"\n  }, \"login\"));\n});\n\n//# sourceURL=webpack:///./component/header/index.js?");

/***/ }),

/***/ "./component/header/index.scss":
/*!*************************************!*\
  !*** ./component/header/index.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./component/header/index.scss?");

/***/ }),

/***/ "./page/home/index.js":
/*!****************************!*\
  !*** ./page/home/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _store_actions_home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/actions/home */ \"./store/actions/home.js\");\n\n\n\n\nfunction Home(props) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", null, props.num), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    onClick: function onClick() {\n      props.add();\n    }\n  }, \"+\"));\n}\n\nvar wrapperHome = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])(function (state) {\n  return state.home;\n}, _store_actions_home__WEBPACK_IMPORTED_MODULE_2__)(Home);\n/* harmony default export */ __webpack_exports__[\"default\"] = (wrapperHome);\n\n//# sourceURL=webpack:///./page/home/index.js?");

/***/ }),

/***/ "./page/login/index.js":
/*!*****************************!*\
  !*** ./page/login/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _store_actions_login__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/actions/login */ \"./store/actions/login.js\");\n\n\n\n\nfunction Login(props) {\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    if (props.userList.length === 0) {\n      props.getUsers();\n    }\n  }, []);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", null, \"\\u5F53\\u524D\\u5728\\u7EBF\\u4EBA\\u6570\\uFF1A\".concat(props.num)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", null, props.userList.map(function (user) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", {\n      key: user.id\n    }, user.name);\n  })));\n}\n\nvar warpperLogin = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])(function (state) {\n  return state.login;\n}, _store_actions_login__WEBPACK_IMPORTED_MODULE_2__)(Login);\n\nwarpperLogin.loadData = function (store) {\n  return store.dispatch(_store_actions_login__WEBPACK_IMPORTED_MODULE_2__[\"getUsers\"]());\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (warpperLogin);\n\n//# sourceURL=webpack:///./page/login/index.js?");

/***/ }),

/***/ "./router/index.js":
/*!*************************!*\
  !*** ./router/index.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _page_home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../page/home */ \"./page/home/index.js\");\n/* harmony import */ var _page_login__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../page/login */ \"./page/login/index.js\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ([{\n  path: '/',\n  key: '/',\n  exact: true,\n  component: _page_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n}, {\n  path: '/login',\n  key: '/login',\n  exact: true,\n  component: _page_login__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  loadData: _page_login__WEBPACK_IMPORTED_MODULE_1__[\"default\"].loadData //用来服务端加载数据，如果有loadData的属性那么就需要在服务端请求并渲染完成后反给客户端\n\n}]);\n\n//# sourceURL=webpack:///./router/index.js?");

/***/ }),

/***/ "./server/index.js":
/*!*************************!*\
  !*** ./server/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../router */ \"./router/index.js\");\n/* harmony import */ var _component_header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../component/header */ \"./component/header/index.js\");\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../store */ \"./store/index.js\");\n\n\n\n\n\n\n\n\nvar express = __webpack_require__(/*! express */ \"express\");\n\nvar app = express();\napp.use(express[\"static\"]('public'));\napp.get('*', function (req, res) {\n  var store = Object(_store__WEBPACK_IMPORTED_MODULE_6__[\"getServerStore\"])(); //1.获取与url匹配的路由\n\n  var mathRouters = _router__WEBPACK_IMPORTED_MODULE_4__[\"default\"].filter(function (route) {\n    return Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"matchPath\"])(req.path, route);\n  }); //2.获取有loadData属性的路由，也就是需要加载数据的路由，并且执行请求\n\n  var promises = [];\n  mathRouters.forEach(function (route) {\n    if (route.loadData) {\n      promises.push(route.loadData(store));\n    }\n  });\n  Promise.all(promises).then(function () {\n    var domStr = Object(react_dom_server__WEBPACK_IMPORTED_MODULE_2__[\"renderToString\"])( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_3__[\"Provider\"], {\n      store: store\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"StaticRouter\"], {\n      context: {},\n      location: req.path\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_component_header__WEBPACK_IMPORTED_MODULE_5__[\"default\"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, _router__WEBPACK_IMPORTED_MODULE_4__[\"default\"].map(function (route) {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], route);\n    }))))));\n    res.setHeader('Content-Type', 'text/html;charset=utf-8');\n    res.end(\"\\n            <html>\\n                <head>\\n                    <title>react-ssr</title>\\n                    <link rel='stylesheet' href='/css/index.css'/>\\n                </head>\\n                <body>\\n                    <div id='root'>\".concat(domStr, \"</div>\\n                    <script>\\n                        window.context = {\\n                            state:\").concat(JSON.stringify(store.getState()), \"\\n                        }\\n                    </script>\\n                    <script src='/client.js'></script>\\n                </body>\\n            </html>\\n        \"));\n  });\n});\napp.listen(3000, function () {\n  console.log('serving http://localhost port 3000');\n});\n\n//# sourceURL=webpack:///./server/index.js?");

/***/ }),

/***/ "./store/actions/action-types.js":
/*!***************************************!*\
  !*** ./store/actions/action-types.js ***!
  \***************************************/
/*! exports provided: HOME_ADD, LOGIN_REQUEST_SUCCESS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"HOME_ADD\", function() { return HOME_ADD; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOGIN_REQUEST_SUCCESS\", function() { return LOGIN_REQUEST_SUCCESS; });\nvar HOME_ADD = 'HOME_ADD';\nvar LOGIN_REQUEST_SUCCESS = 'LOGIN_REQUEST_SUCCESS';\n\n//# sourceURL=webpack:///./store/actions/action-types.js?");

/***/ }),

/***/ "./store/actions/home.js":
/*!*******************************!*\
  !*** ./store/actions/home.js ***!
  \*******************************/
/*! exports provided: add */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"add\", function() { return add; });\n/* harmony import */ var _action_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./action-types */ \"./store/actions/action-types.js\");\n\nfunction add() {\n  return {\n    type: _action_types__WEBPACK_IMPORTED_MODULE_0__[\"HOME_ADD\"]\n  };\n}\n\n//# sourceURL=webpack:///./store/actions/home.js?");

/***/ }),

/***/ "./store/actions/login.js":
/*!********************************!*\
  !*** ./store/actions/login.js ***!
  \********************************/
/*! exports provided: minus, getUsers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"minus\", function() { return minus; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getUsers\", function() { return getUsers; });\n/* harmony import */ var _action_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./action-types */ \"./store/actions/action-types.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction minus() {\n  return {\n    type: _action_types__WEBPACK_IMPORTED_MODULE_0__[\"LOGIN_MINUS\"]\n  };\n}\nfunction getUsers() {\n  return function (dispatch, getState) {\n    return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('http://localhost:4000/api/users').then(function (response) {\n      console.log(response);\n      var datalist = response.data;\n      dispatch({\n        type: _action_types__WEBPACK_IMPORTED_MODULE_0__[\"LOGIN_REQUEST_SUCCESS\"],\n        payload: datalist\n      });\n    });\n  };\n}\n\n//# sourceURL=webpack:///./store/actions/login.js?");

/***/ }),

/***/ "./store/index.js":
/*!************************!*\
  !*** ./store/index.js ***!
  \************************/
/*! exports provided: getClientStore, getServerStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getClientStore\", function() { return getClientStore; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getServerStore\", function() { return getServerStore; });\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reducers */ \"./store/reducers/index.js\");\n/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-logger */ \"redux-logger\");\n/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_logger__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-thunk */ \"redux-thunk\");\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nfunction getClientStore() {\n  var initialState = window.context.state;\n  return Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"createStore\"])(_reducers__WEBPACK_IMPORTED_MODULE_1__[\"default\"], initialState, Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"applyMiddleware\"])(redux_thunk__WEBPACK_IMPORTED_MODULE_3___default.a, redux_logger__WEBPACK_IMPORTED_MODULE_2___default.a));\n}\nfunction getServerStore() {\n  return Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"createStore\"])(_reducers__WEBPACK_IMPORTED_MODULE_1__[\"default\"], Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"applyMiddleware\"])(redux_thunk__WEBPACK_IMPORTED_MODULE_3___default.a, redux_logger__WEBPACK_IMPORTED_MODULE_2___default.a));\n}\n\n//# sourceURL=webpack:///./store/index.js?");

/***/ }),

/***/ "./store/reducers/home.js":
/*!********************************!*\
  !*** ./store/reducers/home.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _actions_action_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/action-types */ \"./store/actions/action-types.js\");\n\nvar initialState = {\n  num: 0\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case _actions_action_types__WEBPACK_IMPORTED_MODULE_0__[\"HOME_ADD\"]:\n      return {\n        num: state.num + 1\n      };\n\n    default:\n      return state;\n  }\n});\n\n//# sourceURL=webpack:///./store/reducers/home.js?");

/***/ }),

/***/ "./store/reducers/index.js":
/*!*********************************!*\
  !*** ./store/reducers/index.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ \"./store/reducers/home.js\");\n/* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login */ \"./store/reducers/login.js\");\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"combineReducers\"])({\n  home: _home__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  login: _login__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n}));\n\n//# sourceURL=webpack:///./store/reducers/index.js?");

/***/ }),

/***/ "./store/reducers/login.js":
/*!*********************************!*\
  !*** ./store/reducers/login.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _actions_action_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/action-types */ \"./store/actions/action-types.js\");\n\nvar initialState = {\n  num: 0,\n  userList: []\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case _actions_action_types__WEBPACK_IMPORTED_MODULE_0__[\"LOGIN_REQUEST_SUCCESS\"]:\n      return {\n        num: action.payload.length,\n        userList: action.payload\n      };\n\n    default:\n      return state;\n  }\n});\n\n//# sourceURL=webpack:///./store/reducers/login.js?");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");\n\n//# sourceURL=webpack:///external_%22axios%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");\n\n//# sourceURL=webpack:///external_%22react-redux%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");\n\n//# sourceURL=webpack:///external_%22redux%22?");

/***/ }),

/***/ "redux-logger":
/*!*******************************!*\
  !*** external "redux-logger" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-logger\");\n\n//# sourceURL=webpack:///external_%22redux-logger%22?");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-thunk\");\n\n//# sourceURL=webpack:///external_%22redux-thunk%22?");

/***/ })

/******/ });