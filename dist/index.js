!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();document.componentRegistry={},document.nextId=0;var i=function(){function e(t){var n=this;if(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),console.log(t),!t.elem)throw"Component: You did not provide an element to make into a component.";this._id=++document.nextId,document.componentRegistry[this._id]=this,this.state={elem:t.elem,data:t.data||null},this.componentDidMount=this.componentDidMount.bind(this),this.componentWillUnmount=this.componentWillUnmount.bind(this),document.addEventListener("DOMContentLoaded",(function(){return n.componentDidMount()})),window.onbeforeunload=function(){return n.componentWillUnmount()}}return r(e,[{key:"setState",value:function(e){for(var t in e)e.hasOwnProperty(t)&&(this.state.data[t]=e[t]);this.render()}},{key:"sanitize",value:function(e){var t=document.createElement("div");return t.textContent=e,t.innerHTML}},{key:"template",value:function(e){var t="\n      <div>Hello</div>\n    ";return t}},{key:"render",value:function(){var e=this.state,t=e.elem,n=e.data;if(!this.template)throw"ComponentJS: No template was provided.";var r="string"==typeof t?document.querySelector(t):t;if(t){var i="function"==typeof this.template?this.template(n):this.template;if(-1!==["string","number"].indexOf(void 0===i?"undefined":o(i))&&r.innerHTML!==i){if(r.innerHTML=i,"function"==typeof window.CustomEvent){var a=new window.CustomEvent("render",{bubbles:!0});r.dispatchEvent(a)}return r}}}},{key:"componentDidMount",value:function(){}},{key:"componentWillUnmount",value:function(){}}]),e}();t.default=i},function(e,t,n){"use strict";var o=i(n(2)),r=i(n(3));function i(e){return e&&e.__esModule?e:{default:e}}n(4),window,document,console,setInterval,clearInterval,setTimeout,window.location,(0,o.default)(),(0,r.default)()},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),a=n(0),u=(o=a)&&o.__esModule?o:{default:o};t.default=function(){new(function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state=r({},e),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),i(t,[{key:"template",value:function(e){var t='\n        <div class="nav">\n          '+e.heading+"\n        </div>\n      ";return t}},{key:"componentDidMount",value:function(){console.log("navbar mounted",this)}}]),t}(u.default))({elem:"#navbar",data:{heading:"Traze Software Item Control Component"}}).render()}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),a=n(0),u=(o=a)&&o.__esModule?o:{default:o};t.default=function(){new(function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state=r({},e),n.increment=n.increment.bind(n),n.decrement=n.decrement.bind(n),n.clickHandler=n.clickHandler.bind(n),document.getElementById("app").addEventListener("click",n.clickHandler,!1),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),i(t,[{key:"componentDidMount",value:function(){console.log("stopwatch mounted",this)}},{key:"decrement",value:function(){var e=this.state.data.value;this.setState({value:--e})}},{key:"increment",value:function(){var e=this.state.data.value;this.setState({value:++e})}},{key:"reset",value:function(){this.setState({value:0,running:!1}),clearInterval(timer)}},{key:"clickHandler",value:function(e){e.preventDefault();var t=e.target.getAttribute("data-stopwatch");switch(console.warn("click action: "+t),t){case"increment":this.increment();break;case"decrement":this.decrement();break;default:return}}},{key:"template",value:function(e){var t=e.value;e.running;console.warn(e);var n='\n        <div class="timer">\n          <div id="stopwatch">\n\t\t\t\t\t\t'+t+'\n          </div>\n          <div class="stopwatch_content">\n            <button\n              data-stopwatch="increment"\n            >\n              increment\n            </button>\n            <button data-stopwatch="decrement">\n              Decrement\n            </button>\n          </div>\n        </div>\n      ';return n}}]),t}(u.default))({elem:"#app",data:{value:0,running:!1}}).render()}},function(e,t,n){var o=n(5),r=n(6);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var i={insert:"head",singleton:!1};o(r,i);e.exports=r.locals||{}},function(e,t,n){"use strict";var o,r=function(){return void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o},i=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),a=[];function u(e){for(var t=-1,n=0;n<a.length;n++)if(a[n].identifier===e){t=n;break}return t}function c(e,t){for(var n={},o=[],r=0;r<e.length;r++){var i=e[r],c=t.base?i[0]+t.base:i[0],l=n[c]||0,s="".concat(c," ").concat(l);n[c]=l+1;var f=u(s),d={css:i[1],media:i[2],sourceMap:i[3]};-1!==f?(a[f].references++,a[f].updater(d)):a.push({identifier:s,updater:h(d,t),references:1}),o.push(s)}return o}function l(e){var t=document.createElement("style"),o=e.attributes||{};if(void 0===o.nonce){var r=n.nc;r&&(o.nonce=r)}if(Object.keys(o).forEach((function(e){t.setAttribute(e,o[e])})),"function"==typeof e.insert)e.insert(t);else{var a=i(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var s,f=(s=[],function(e,t){return s[e]=t,s.filter(Boolean).join("\n")});function d(e,t,n,o){var r=n?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(e.styleSheet)e.styleSheet.cssText=f(t,r);else{var i=document.createTextNode(r),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function p(e,t,n){var o=n.css,r=n.media,i=n.sourceMap;if(r?e.setAttribute("media",r):e.removeAttribute("media"),i&&btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}var v=null,m=0;function h(e,t){var n,o,r;if(t.singleton){var i=m++;n=v||(v=l(t)),o=d.bind(null,n,i,!1),r=d.bind(null,n,i,!0)}else n=l(t),o=p.bind(null,n,t),r=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o(e=t)}else r()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=r());var n=c(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var o=0;o<n.length;o++){var r=u(n[o]);a[r].references--}for(var i=c(e,t),l=0;l<n.length;l++){var s=u(n[l]);0===a[s].references&&(a[s].updater(),a.splice(s,1))}n=i}}}},function(e,t,n){(t=n(7)(!1)).push([e.i,'*,\n*:before,\n*:after {\n\tbox-sizing: border-box;\n}\n\n/**\n * Layout\n */\nbody {\n\tfont-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;\n\tfont-size: 112.5%;\n\tmargin-left: auto;\n\tmargin-right: auto;\n\tmax-width: 40em;\n\twidth: 88%;\n}\n\n#app {\n  border: 1px solid whitesmoke;\n}\n\n#navbar .nav {\n  width: 100%;\n  background: whitesmoke;\n  height: auto;\n  text-align: center;\n  padding: 20px;\n}\n\n.timer {\n  text-align: center;\n  padding: 20px;\n}\n\n#stopwatch {\n\tfont-size: 2em;\n\tfont-weight: bold;\n}\n\n.stopwatch_content button {\n  padding: 5px 15px;\n  border-radius: 10%;\n  cursor: pointer;\n}\n\n.footer-wrapper {\n  width: 100%;\n  background: whitesmoke;\n  height: auto;\n  text-align: center;\n  padding: 20px;\n}',""]),e.exports=t},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",o=e[3];if(!o)return n;if(t&&"function"==typeof btoa){var r=(a=o,u=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(u),"/*# ".concat(c," */")),i=o.sources.map((function(e){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(e," */")}));return[n].concat(i).concat([r]).join("\n")}var a,u,c;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,o){"string"==typeof e&&(e=[[null,e,""]]);var r={};if(o)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(r[a]=!0)}for(var u=0;u<e.length;u++){var c=[].concat(e[u]);o&&r[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),t.push(c))}},t}}]);