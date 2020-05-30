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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/containers/traze-dropdown.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/containers/traze-dropdown.js":
/*!******************************************!*\
  !*** ./src/containers/traze-dropdown.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar template = document.createElement('template');\ntemplate.innerHTML = '\\n<style>\\n/*tag styles*/\\n:host {\\n    border-radius: 8px;\\n    border: 3px solid #ff584f;\\n    padding: 8px 16px;\\n}\\n:host(.blue) {\\n    border: 3px solid #3d6fb4;\\n}\\n:host-context(main) {\\n    border: 3px solid #e3e3e3;\\n    border-radius: 8px;\\n    padding: 8px 16px;\\n}\\ndiv {\\n    display: flex;\\n    justify-content: center;\\n    flex-direction: row-reverse;\\n}\\nimg {\\n    width: 60px;\\n    height: 60px;\\n    margin: 10px;\\n}\\np, ::slotted(p) {\\n    text-align: center;\\n    font-size: 32px;\\n    margin: 0;\\n    padding: 0;\\n}\\n/*  This slot will be disabled because it\\xB4s only used as a template for the rating stars\\n    and have no functionality */\\nslot[name=\"rating-star\"] {\\n   display: none;\\n}\\n/*class styles*/\\n.rating-item {\\n    filter: grayscale(100%);\\n    cursor: pointer;\\n}\\n.rating-item.selected {\\n    filter: none;\\n}\\n.rating-item:hover, .rating-item:hover ~ .rating-item {\\n    filter: none;\\n}\\n.rating-star {\\n    display: block;\\n    -webkit-mask-image: url(\\'data:image/svg+xml;charset=UTF-8,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 166 166\"><polygon fill=\"rgb(165,255,214)\" points=\"83 26.8 65.7 61.8 27.1 67.4 55 94.7 48.5 133.2 83 115 117.5 133.2 111 94.7 138.9 67.4 100.3 61.8 83 26.8 83 26.8\"/></svg>\\');\\n    background-color: #3d6fb4;\\n    -webkit-mask-repeat: no-repeat;\\n    -webkit-mask-position: center center;\\n    width: 80px;\\n    height: 80px;\\n}\\n</style>\\n<slot>\\n      <p part=\"title\">Rating Web Component</p>\\n</slot>\\n<div>\\n    <slot name=\"rating-star\">\\n        <div part=\"icon\" class=\"rating-star\"></div>\\n    </slot>\\n</div>\\n';\n\nvar Rating = exports.Rating = function (_HTMLElement) {\n    _inherits(Rating, _HTMLElement);\n\n    _createClass(Rating, null, [{\n        key: 'observedAttributes',\n        get: function get() {\n            return ['rating', 'max-rating'];\n        }\n    }]);\n\n    function Rating() {\n        _classCallCheck(this, Rating);\n\n        // attach to the Shadow DOM\n        var _this = _possibleConstructorReturn(this, (Rating.__proto__ || Object.getPrototypeOf(Rating)).call(this));\n\n        var root = _this.attachShadow({ mode: 'closed' });\n        root.appendChild(template.content.cloneNode(true));\n        _this.element = root.querySelector('div');\n        var slot = _this.element.querySelector('slot');\n        _this.slotNode = slot.querySelector('div');\n        slot.addEventListener('slotchange', function (event) {\n            // Take first element of the slot and assign it as new rating star template\n            var node = slot.assignedNodes()[0];\n            if (node) {\n                _this.slotNode = node;\n                _this.render();\n            }\n        });\n        return _this;\n    }\n\n    _createClass(Rating, [{\n        key: 'connectedCallback',\n        value: function connectedCallback() {\n            // set default value for maximal rating value\n            if (!this.maxRating) {\n                this.maxRating = 5;\n            } else if (this.maxRating < 0) {\n                throw new Error('The rating must be higher than zero.');\n            }\n            // set default value for rating\n            if (!this.rating) {\n                this.rating = 0;\n            } else if (this.rating < 0 || this.rating > this.maxRating) {\n                throw new Error('The rating must be higher than zero and lower than the maximum.');\n            }\n            this.dispatchEvent(new CustomEvent('ratingChanged', { detail: this.rating }));\n            this.render();\n        }\n    }, {\n        key: 'attributeChangedCallback',\n        value: function attributeChangedCallback(name, oldVal, newVal) {\n            if (oldVal === newVal) {\n                return;\n            }\n\n            switch (name) {\n                case 'rating':\n                    this.rating = newVal;\n                    this.updateRating();\n                    break;\n                case 'max-rating':\n                    this.maxRating = newVal;\n                    this.render();\n                    break;\n            }\n        }\n    }, {\n        key: 'render',\n        value: function render() {\n            this.clearRatingElements();\n            for (var i = this.maxRating; i > 0; i--) {\n                i = parseInt(i);\n                var selected = this.rating ? this.rating >= i : false;\n                this.createRatingStar(selected, i);\n            }\n        }\n    }, {\n        key: 'clearRatingElements',\n        value: function clearRatingElements() {\n            var nodes = this.element.getElementsByClassName('rating-item');\n            if (nodes) {\n                while (nodes.length > 0) {\n                    nodes[0].parentNode.removeChild(nodes[0]);\n                }\n            }\n        }\n    }, {\n        key: 'createRatingStar',\n        value: function createRatingStar(selected, itemId) {\n            var _this2 = this;\n\n            var ratingTemplate = document.createElement('div');\n            ratingTemplate.setAttribute('class', selected ? 'rating-item item-' + itemId + ' selected' : 'rating-item item-' + itemId);\n            ratingTemplate.appendChild(this.slotNode.cloneNode(true));\n            ratingTemplate.addEventListener('click', function (value) {\n                _this2.changeRating(itemId);\n            });\n            this.element.appendChild(ratingTemplate);\n        }\n    }, {\n        key: 'changeRating',\n        value: function changeRating(event) {\n            this.rating = event;\n            this.updateRating();\n            this.dispatchEvent(new CustomEvent('ratingChanged', { detail: this.rating }));\n        }\n    }, {\n        key: 'updateRating',\n        value: function updateRating() {\n            for (var currentRating = 1; currentRating <= this.maxRating; currentRating++) {\n                var ratingItem = this.element.getElementsByClassName('item-' + currentRating)[0];\n                if (ratingItem) {\n                    if (currentRating <= this.rating) {\n                        if (ratingItem.className.indexOf('selected') < 0) {\n                            ratingItem.className = ratingItem.className + ' selected';\n                        }\n                    } else {\n                        ratingItem.className = ratingItem.className.replace('selected', '');\n                    }\n                }\n            }\n        }\n    }, {\n        key: 'ratingName',\n        get: function get() {\n            return this.getAttribute('rating-name');\n        },\n        set: function set(value) {\n            this.setAttribute('rating-name', value);\n        }\n    }, {\n        key: 'maxRating',\n        get: function get() {\n            return +this.getAttribute('max-rating');\n        },\n        set: function set(value) {\n            this.setAttribute('max-rating', value);\n        }\n    }, {\n        key: 'rating',\n        get: function get() {\n            return +this.getAttribute('rating');\n        },\n        set: function set(value) {\n            if (value < 0) {\n                throw new Error('The rating must be higher than zero.');\n            }\n            var currentRating = +value;\n            if (currentRating > this.maxRating) {\n                throw new Error('The rating must be lower than the maximum.');\n            }\n            this.setAttribute('rating', value);\n        }\n    }]);\n\n    return Rating;\n}(HTMLElement);\n\nwindow.customElements.define('my-rating', Rating);\n\n//# sourceURL=webpack:///./src/containers/traze-dropdown.js?");

/***/ })

/******/ });