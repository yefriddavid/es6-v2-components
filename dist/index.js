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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./styles/app.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./styles/app.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"*,\\n*:before,\\n*:after {\\n\\tbox-sizing: border-box;\\n}\\n\\n/**\\n * Layout\\n */\\nbody {\\n\\tfont-family: -apple-system, BlinkMacSystemFont, \\\"Segoe UI\\\", \\\"Roboto\\\", \\\"Oxygen\\\", \\\"Ubuntu\\\", \\\"Cantarell\\\", \\\"Fira Sans\\\", \\\"Droid Sans\\\", \\\"Helvetica Neue\\\", sans-serif;\\n\\tfont-size: 112.5%;\\n\\tmargin-left: auto;\\n\\tmargin-right: auto;\\n\\tmax-width: 40em;\\n\\twidth: 88%;\\n}\\n\\n#app {\\n  border: 1px solid whitesmoke;\\n}\\n\\n#navbar .nav {\\n  width: 100%;\\n  background: whitesmoke;\\n  height: auto;\\n  text-align: center;\\n  padding: 20px;\\n}\\n\\n.timer {\\n  text-align: center;\\n  padding: 20px;\\n}\\n\\n#stopwatch {\\n\\tfont-size: 2em;\\n\\tfont-weight: bold;\\n}\\n\\n.stopwatch_content button {\\n  padding: 5px 15px;\\n  border-radius: 10%;\\n  cursor: pointer;\\n}\\n\\n.footer-wrapper {\\n  width: 100%;\\n  background: whitesmoke;\\n  height: auto;\\n  text-align: center;\\n  padding: 20px;\\n}\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./styles/app.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/component-helper/Component.js":
/*!*******************************************!*\
  !*** ./src/component-helper/Component.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/**\n* A vanilla JS helper for creating state-based components\n* @param {String|Node} elem    The element to make into a component\n* @param {Object}      options The component options\n*/\n\n/**\n * Create the Component object\n * @param {String|Node} elem    The element to make into a component\n * @param {Object}      options The component options\n */\n\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; };\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\ndocument.componentRegistry = {};\ndocument.nextId = 0;\n\nvar Component = function () {\n  function Component(props) {\n    var _this = this;\n\n    _classCallCheck(this, Component);\n\n    console.log(props);\n    if (!props.elem) throw 'Component: You did not provide an element to make into a component.';\n\n    this._id = ++document.nextId;\n    document.componentRegistry[this._id] = this;\n\n    this.state = {\n      elem: props.elem,\n      data: props.data || null\n      // template: props.template || null\n    };\n    this.componentDidMount = this.componentDidMount.bind(this);\n    this.componentWillUnmount = this.componentWillUnmount.bind(this);\n\n    document.addEventListener('DOMContentLoaded', function () {\n      return _this.componentDidMount();\n    });\n    window.onbeforeunload = function () {\n      return _this.componentWillUnmount();\n    };\n  }\n\n  // Add the `setState()` method\n\n\n  _createClass(Component, [{\n    key: 'setState',\n    value: function setState(props) {\n      // Shallow merge new properties into state object\n      for (var key in props) {\n        if (props.hasOwnProperty(key)) {\n          this.state.data[key] = props[key];\n        }\n      }\n      // re-render\n      this.render();\n    }\n    /**\n     * Sanitize and encode all HTML in a user-submitted string\n     * @param  {String} str  The user-submitted string\n     * @return {String}      The sanitized string\n     */\n\n  }, {\n    key: 'sanitize',\n    value: function sanitize(str) {\n      var temp = document.createElement('div');\n      temp.textContent = str;\n      return temp.innerHTML;\n    }\n  }, {\n    key: 'template',\n    value: function template(props) {\n      var template = '\\n      <div>Hello</div>\\n    ';\n      return template ? template : null;\n    }\n    /**\n     * Render a template into the DOM\n     * @return {[type]}                   The element\n     */\n\n  }, {\n    key: 'render',\n    value: function render() {\n      var _state = this.state,\n          elem = _state.elem,\n          data = _state.data;\n\n      // Make sure there's a template\n\n      if (!this.template) throw 'ComponentJS: No template was provided.';\n\n      // If elem is an element, use it.\n      // If it's a selector, get it.\n      var _elem = typeof elem === 'string' ? document.querySelector(elem) : elem;\n\n      if (!elem) return;\n\n      // Get the template, data will be passed as props to the template.\n      var _template = typeof this.template === 'function' ? this.template(data) : this.template;\n\n      // array indexOf === -1 true if index value is not found.\n      if (['string', 'number'].indexOf(typeof _template === 'undefined' ? 'undefined' : _typeof(_template)) === -1) return;\n\n      // Render the template into the element\n      if (_elem.innerHTML === _template) return; // if they're the same, do nothing\n      _elem.innerHTML = _template; // else update with new template\n\n      // Dispatch a render event -> https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent\n      if (typeof window.CustomEvent === 'function') {\n        var event = new window.CustomEvent('render', {\n          bubbles: true\n        });\n        _elem.dispatchEvent(event);\n      }\n      // Return the _elem for use elsewhere\n      return _elem;\n    } // render\n\n    // lifecycle methods\n\n  }, {\n    key: 'componentDidMount',\n    value: function componentDidMount() {}\n  }, {\n    key: 'componentWillUnmount',\n    value: function componentWillUnmount() {}\n  }]);\n\n  return Component;\n}(); // class Component\n\n\n// return Component;\n\nexports.default = Component;\n\n//# sourceURL=webpack:///./src/component-helper/Component.js?");

/***/ }),

/***/ "./src/components/navbar.js":
/*!**********************************!*\
  !*** ./src/components/navbar.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _Component2 = __webpack_require__(/*! ../component-helper/Component.js */ \"./src/component-helper/Component.js\");\n\nvar _Component3 = _interopRequireDefault(_Component2);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar setup_navbar = function setup_navbar() {\n  'use strict';\n  // Create the stopwatch\n\n  var Navbar = function (_Component) {\n    _inherits(Navbar, _Component);\n\n    function Navbar(props) {\n      _classCallCheck(this, Navbar);\n\n      var _this = _possibleConstructorReturn(this, (Navbar.__proto__ || Object.getPrototypeOf(Navbar)).call(this, props));\n\n      _this.state = _extends({}, props);\n      return _this;\n    }\n\n    _createClass(Navbar, [{\n      key: 'template',\n      value: function template(props) {\n        var heading = props.heading;\n\n        var template = '\\n        <div class=\"nav\">\\n          ' + heading + '\\n        </div>\\n      ';\n        return template;\n      }\n    }, {\n      key: 'componentDidMount',\n      value: function componentDidMount() {\n        console.log('navbar mounted', this);\n      }\n    }]);\n\n    return Navbar;\n  }(_Component3.default);\n\n  var INITIAL_STATE = {\n    elem: '#navbar',\n    data: {\n      heading: 'Traze Software Item Control Component'\n    }\n  };\n\n  // Define the new element\n  var navbar = new Navbar(INITIAL_STATE);\n  navbar.render();\n};\n\nexports.default = setup_navbar;\n\n//# sourceURL=webpack:///./src/components/navbar.js?");

/***/ }),

/***/ "./src/containers/itemcontrol.js":
/*!***************************************!*\
  !*** ./src/containers/itemcontrol.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _Component2 = __webpack_require__(/*! ../component-helper/Component.js */ \"./src/component-helper/Component.js\");\n\nvar _Component3 = _interopRequireDefault(_Component2);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar items_control = function items_control() {\n  'use strict';\n  //let timer;\n\n  var ItemsControl = function (_Component) {\n    _inherits(ItemsControl, _Component);\n\n    function ItemsControl(props) {\n      _classCallCheck(this, ItemsControl);\n\n      var _this = _possibleConstructorReturn(this, (ItemsControl.__proto__ || Object.getPrototypeOf(ItemsControl)).call(this, props));\n\n      _this.state = _extends({}, props);\n      _this.increment = _this.increment.bind(_this);\n      _this.decrement = _this.decrement.bind(_this);\n      _this.clickHandler = _this.clickHandler.bind(_this);\n\n      var app = document.getElementById('app');\n      app.addEventListener('click', _this.clickHandler, false);\n      return _this;\n    }\n\n    _createClass(ItemsControl, [{\n      key: 'componentDidMount',\n      value: function componentDidMount() {\n        console.log('stopwatch mounted', this);\n      }\n    }, {\n      key: 'decrement',\n      value: function decrement() {\n        var value = this.state.data.value;\n\n        this.setState({ value: --value });\n      }\n    }, {\n      key: 'increment',\n      value: function increment() {\n        var value = this.state.data.value;\n\n        this.setState({ value: ++value });\n      }\n    }, {\n      key: 'reset',\n      value: function reset() {\n        this.setState({ value: 0, running: false });\n        clearInterval(timer);\n      }\n    }, {\n      key: 'clickHandler',\n      value: function clickHandler(event) {\n        event.preventDefault();\n        var action = event.target.getAttribute('data-stopwatch');\n        console.warn('click action: ' + action);\n\n        switch (action) {\n          case 'increment':\n            this.increment();\n            break;\n          case 'decrement':\n            this.decrement();\n            break;\n          default:\n            return;\n        }\n      }\n    }, {\n      key: 'template',\n      value: function template(props) {\n        var value = props.value,\n            running = props.running;\n\n        console.warn(props);\n        var template = '\\n        <div class=\"timer\">\\n          <div id=\"stopwatch\">\\n\\t\\t\\t\\t\\t\\t' + value + '\\n          </div>\\n          <div class=\"stopwatch_content\">\\n            <button\\n              data-stopwatch=\"increment\"\\n            >\\n              increment\\n            </button>\\n            <button data-stopwatch=\"decrement\">\\n              Decrement\\n            </button>\\n          </div>\\n        </div>\\n      ';\n        return template;\n      }\n    }]);\n\n    return ItemsControl;\n  }(_Component3.default);\n\n  var INITIAL_STATE = {\n    elem: '#app',\n    data: {\n      value: 0,\n      running: false\n    }\n  };\n\n  var itemsControl = new ItemsControl(INITIAL_STATE);\n  itemsControl.render();\n};\n\nexports.default = items_control;\n\n//# sourceURL=webpack:///./src/containers/itemcontrol.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _navbar = __webpack_require__(/*! ./components/navbar.js */ \"./src/components/navbar.js\");\n\nvar _navbar2 = _interopRequireDefault(_navbar);\n\nvar _itemcontrol = __webpack_require__(/*! ./containers/itemcontrol.js */ \"./src/containers/itemcontrol.js\");\n\nvar _itemcontrol2 = _interopRequireDefault(_itemcontrol);\n\n__webpack_require__(/*! ../styles/app.css */ \"./styles/app.css\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// import setup_footer from './components/footer.js';\n\n(function (win, doc, log, si, ci, sto, loc) {\n  // Setup the app\n  (0, _navbar2.default)();\n  (0, _itemcontrol2.default)();\n  // console.log(win.customElements.get('foo-ter'));\n  // setup_footer();\n})(window, document, console, setInterval, clearInterval, setTimeout, window.location);\n\n// References:\n// es6 version of http://jsfiddle.net/cferdinandi/nb40j6rf/6/?mc_cid=1d481e891a&mc_eid=a3f6fd745a\n// https://css-tricks.com/reactive-uis-vanillajs-part-2-class-based-components/\n\n//import traze_dropdown from './containers/traze-dropdown.js';\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./styles/app.css":
/*!************************!*\
  !*** ./styles/app.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./app.css */ \"./node_modules/css-loader/dist/cjs.js!./styles/app.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./styles/app.css?");

/***/ })

/******/ });