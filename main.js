/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\r\n    font-family: monospace;\r\n}\r\n\r\n\r\n* {\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n\r\nbody {\r\n    display: flex;\r\n    flex-direction: column;\r\n    overflow: hidden;\r\n    box-sizing: border-box;\r\n\r\n}\r\n\r\n#overlay {\r\n    position: absolute;\r\n    width: 100vw;\r\n    height: 100vh;\r\n    z-index: 2;\r\n    display: none;\r\n}\r\n\r\n#titleBar {\r\n    padding: 1rem;\r\n}\r\n\r\n.buttonContainer {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n}\r\n\r\n.icon {\r\n    height: 2rem;\r\n    cursor: pointer;\r\n}\r\n\r\n.sml {\r\n    height: 1rem;\r\n}\r\n\r\n#content {\r\n    width: 100vw;\r\n}\r\n\r\n#sidebar {\r\n    position: absolute;\r\n    top: 0;\r\n    left: -100%;\r\n    display: block;\r\n    background-color: white;\r\n    width: 100%;\r\n    text-align: center;\r\n    transition: transform .5s;\r\n    z-index: 3;\r\n}\r\n\r\n#sidebar > * {\r\n    margin: 1rem;\r\n    \r\n}\r\n\r\n#projectDiv > * {\r\n    padding: .5rem 0;\r\n    border-radius: 0.25rem;\r\n    cursor: pointer;\r\n}\r\n\r\n#projectDiv > *:hover {\r\n    background-color: lightblue;\r\n}\r\n\r\n\r\n.projectContent {\r\n    display: flex;\r\n    flex-wrap: nowrap;\r\n    overflow-x: auto;\r\n\r\n    -ms-overflow-style: none;\r\n    scrollbar-width: none;\r\n    height: 100%;\r\n}\r\n\r\n.projectContent::-webkit-scrollbar {\r\n    display: none;\r\n}\r\n\r\n.dots {\r\n    height: 2.5rem;\r\n    cursor: pointer;\r\n}\r\n\r\n.project {\r\n    background-image: url(\"https://images.unsplash.com/photo-1620207418302-439b387441b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=967&q=80\");\r\n    background-position: center;\r\n    background-size: cover;\r\n    width: 100%;\r\n    height: 100vh;\r\n    overflow: hidden;\r\n}\r\n\r\n.todo, .projectTitle, .addTodo {\r\n    background-color: white;\r\n}\r\n\r\n.todo {\r\n    flex: 0 0 auto;\r\n    display: flex;\r\n    flex-wrap: nowrap;\r\n    flex-direction: column;\r\n    justify-content: space-between;\r\n    box-shadow: 5px 5px 20px rgba(0,0,0,0.25);\r\n    border-radius: .5rem;\r\n    width: 20rem;\r\n    max-height: 80%;\r\n    padding: 1rem;\r\n    margin: 1rem;\r\n    align-self: self-start;\r\n    overflow-y: auto;\r\n\r\n    -ms-overflow-style: none;\r\n    scrollbar-width: 2px;\r\n}\r\n\r\n.todo::-webkit-scrollbar {\r\n    width: 10px;\r\n}\r\n\r\n.todo::-webkit-scrollbar-track {\r\n    background-color: #121212;\r\n    border-radius: .5rem;\r\n}\r\n\r\n.todo::-webkit-scrollbar-thumb {\r\n    background-color: #eee;\r\n    border-radius: .5rem;\r\n}\r\n\r\n.addTodo {\r\n    display: inline-block;\r\n    min-width: 10rem;\r\n    height: 10rem;\r\n    border: 2px solid gainsboro;\r\n    border-radius: .5rem;\r\n    padding: .5rem 1rem;\r\n    margin: 1rem;\r\n    cursor: pointer;\r\n}\r\n\r\n.task {\r\n    display: flex;\r\n    justify-content: space-evenly;\r\n    flex-direction: column;\r\n    border: 2px solid gainsboro;\r\n    border-radius: .5rem;\r\n    padding: .5rem 1rem;\r\n    margin: 1rem auto;\r\n    transition: background-color 0.25s, border-color 0.25s;\r\n}\r\n\r\n.taskDate {\r\n    font-size: .75rem;\r\n    color: grey;\r\n}\r\n\r\n.btn {\r\n    margin-top: 1rem;\r\n    border: 2px solid gainsboro;\r\n    background-color: inherit;\r\n    border-radius: .5rem;\r\n    padding: .5rem 1rem;\r\n    cursor: pointer;\r\n    font-weight: bolder;\r\n}\r\n\r\n.popup {\r\n    position: absolute;\r\n    top: 10%;\r\n    left: 50%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    width: 10rem;\r\n    padding: 1rem;\r\n    box-shadow: 5px 5px 20px rgba(0,0,0, 0.25);\r\n    border-radius: .5rem;\r\n    background-color: white;\r\n    transform: translate(-7rem, 0);\r\n    z-index: 3;\r\n}\r\n\r\n.popup > input, .popup > h2 {\r\n    margin-bottom: .5rem;\r\n}\r\n\r\n.btnDiv {\r\n    display: flex;\r\n    width: 100%;\r\n}\r\n\r\n.btnDiv button {\r\n    width: 50%;\r\n    padding: .5rem;\r\n}\r\n\r\n.projectTitle {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    margin: 1rem;\r\n    box-shadow: 5px 5px 20px rgba(0,0,0,0.25);\r\n    padding: 1rem 2rem;\r\n    border-radius: 2rem;\r\n}\r\n\r\n.todoDiv {\r\n    display: flex;\r\n}\r\n\r\n.done {\r\n    background-color: lightgreen;\r\n    border-color: mediumseagreen;\r\n}\r\n\r\n.red {\r\n    background-color: lightcoral;\r\n    border-color: maroon;\r\n}\r\n\r\n#prodjEdit {\r\n    position: absolute;\r\n    right: 2rem;\r\n    top: 6rem;\r\n    background-color: white;\r\n    padding: .5rem 1rem;\r\n    border-radius: .5rem;\r\n    text-align: center;\r\n    z-index: 3;\r\n}\r\n#prodjEdit > * {\r\n    padding: 1rem .5rem;\r\n    cursor: pointer;\r\n    border-radius: .5rem;\r\n}\r\n\r\n#prodjEdit > *:hover {\r\n    background-color: lightblue;\r\n}\r\n\r\n.show {\r\n    transform: translate(100%, 0);\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":[":root {\r\n    font-family: monospace;\r\n}\r\n\r\n\r\n* {\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n\r\nbody {\r\n    display: flex;\r\n    flex-direction: column;\r\n    overflow: hidden;\r\n    box-sizing: border-box;\r\n\r\n}\r\n\r\n#overlay {\r\n    position: absolute;\r\n    width: 100vw;\r\n    height: 100vh;\r\n    z-index: 2;\r\n    display: none;\r\n}\r\n\r\n#titleBar {\r\n    padding: 1rem;\r\n}\r\n\r\n.buttonContainer {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n}\r\n\r\n.icon {\r\n    height: 2rem;\r\n    cursor: pointer;\r\n}\r\n\r\n.sml {\r\n    height: 1rem;\r\n}\r\n\r\n#content {\r\n    width: 100vw;\r\n}\r\n\r\n#sidebar {\r\n    position: absolute;\r\n    top: 0;\r\n    left: -100%;\r\n    display: block;\r\n    background-color: white;\r\n    width: 100%;\r\n    text-align: center;\r\n    transition: transform .5s;\r\n    z-index: 3;\r\n}\r\n\r\n#sidebar > * {\r\n    margin: 1rem;\r\n    \r\n}\r\n\r\n#projectDiv > * {\r\n    padding: .5rem 0;\r\n    border-radius: 0.25rem;\r\n    cursor: pointer;\r\n}\r\n\r\n#projectDiv > *:hover {\r\n    background-color: lightblue;\r\n}\r\n\r\n\r\n.projectContent {\r\n    display: flex;\r\n    flex-wrap: nowrap;\r\n    overflow-x: auto;\r\n\r\n    -ms-overflow-style: none;\r\n    scrollbar-width: none;\r\n    height: 100%;\r\n}\r\n\r\n.projectContent::-webkit-scrollbar {\r\n    display: none;\r\n}\r\n\r\n.dots {\r\n    height: 2.5rem;\r\n    cursor: pointer;\r\n}\r\n\r\n.project {\r\n    background-image: url(\"https://images.unsplash.com/photo-1620207418302-439b387441b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=967&q=80\");\r\n    background-position: center;\r\n    background-size: cover;\r\n    width: 100%;\r\n    height: 100vh;\r\n    overflow: hidden;\r\n}\r\n\r\n.todo, .projectTitle, .addTodo {\r\n    background-color: white;\r\n}\r\n\r\n.todo {\r\n    flex: 0 0 auto;\r\n    display: flex;\r\n    flex-wrap: nowrap;\r\n    flex-direction: column;\r\n    justify-content: space-between;\r\n    box-shadow: 5px 5px 20px rgba(0,0,0,0.25);\r\n    border-radius: .5rem;\r\n    width: 20rem;\r\n    max-height: 80%;\r\n    padding: 1rem;\r\n    margin: 1rem;\r\n    align-self: self-start;\r\n    overflow-y: auto;\r\n\r\n    -ms-overflow-style: none;\r\n    scrollbar-width: 2px;\r\n}\r\n\r\n.todo::-webkit-scrollbar {\r\n    width: 10px;\r\n}\r\n\r\n.todo::-webkit-scrollbar-track {\r\n    background-color: #121212;\r\n    border-radius: .5rem;\r\n}\r\n\r\n.todo::-webkit-scrollbar-thumb {\r\n    background-color: #eee;\r\n    border-radius: .5rem;\r\n}\r\n\r\n.addTodo {\r\n    display: inline-block;\r\n    min-width: 10rem;\r\n    height: 10rem;\r\n    border: 2px solid gainsboro;\r\n    border-radius: .5rem;\r\n    padding: .5rem 1rem;\r\n    margin: 1rem;\r\n    cursor: pointer;\r\n}\r\n\r\n.task {\r\n    display: flex;\r\n    justify-content: space-evenly;\r\n    flex-direction: column;\r\n    border: 2px solid gainsboro;\r\n    border-radius: .5rem;\r\n    padding: .5rem 1rem;\r\n    margin: 1rem auto;\r\n    transition: background-color 0.25s, border-color 0.25s;\r\n}\r\n\r\n.taskDate {\r\n    font-size: .75rem;\r\n    color: grey;\r\n}\r\n\r\n.btn {\r\n    margin-top: 1rem;\r\n    border: 2px solid gainsboro;\r\n    background-color: inherit;\r\n    border-radius: .5rem;\r\n    padding: .5rem 1rem;\r\n    cursor: pointer;\r\n    font-weight: bolder;\r\n}\r\n\r\n.popup {\r\n    position: absolute;\r\n    top: 10%;\r\n    left: 50%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    width: 10rem;\r\n    padding: 1rem;\r\n    box-shadow: 5px 5px 20px rgba(0,0,0, 0.25);\r\n    border-radius: .5rem;\r\n    background-color: white;\r\n    transform: translate(-7rem, 0);\r\n    z-index: 3;\r\n}\r\n\r\n.popup > input, .popup > h2 {\r\n    margin-bottom: .5rem;\r\n}\r\n\r\n.btnDiv {\r\n    display: flex;\r\n    width: 100%;\r\n}\r\n\r\n.btnDiv button {\r\n    width: 50%;\r\n    padding: .5rem;\r\n}\r\n\r\n.projectTitle {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    margin: 1rem;\r\n    box-shadow: 5px 5px 20px rgba(0,0,0,0.25);\r\n    padding: 1rem 2rem;\r\n    border-radius: 2rem;\r\n}\r\n\r\n.todoDiv {\r\n    display: flex;\r\n}\r\n\r\n.done {\r\n    background-color: lightgreen;\r\n    border-color: mediumseagreen;\r\n}\r\n\r\n.red {\r\n    background-color: lightcoral;\r\n    border-color: maroon;\r\n}\r\n\r\n#prodjEdit {\r\n    position: absolute;\r\n    right: 2rem;\r\n    top: 6rem;\r\n    background-color: white;\r\n    padding: .5rem 1rem;\r\n    border-radius: .5rem;\r\n    text-align: center;\r\n    z-index: 3;\r\n}\r\n#prodjEdit > * {\r\n    padding: 1rem .5rem;\r\n    cursor: pointer;\r\n    border-radius: .5rem;\r\n}\r\n\r\n#prodjEdit > *:hover {\r\n    background-color: lightblue;\r\n}\r\n\r\n.show {\r\n    transform: translate(100%, 0);\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/logic/app.js":
/*!**************************!*\
  !*** ./src/logic/app.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class App {
    constructor() {
        this.projects = []
    }

    addProject(newProject) {
        if(this.projects.find((project) => project.getTitle() === newProject.getTitle())) {
            return
        }
        this.projects.push(newProject)
    }

    getProject(projectName) {
        return this.projects.find((project) => project.getTitle() === projectName)
    }

    getProjects() {
        return this.projects
    }

    setProjects(projects) {
        this.projects = projects
    }

    deleteProject(projectName) {
        const projectToDelete = this.getProject(projectName)

        this.projects.splice(this.projects.indexOf(projectToDelete), 1)
    }

    deleteTodo(projectName, todoName) {
        const project = this.getProject(projectName)

        project.deleteTodo(todoName)
    }

    deleteTasks(projectName, todoName) {
        const todo = this.getProject(projectName).getTodo(todoName)

        todo.deleteTasks()
    }


}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);

/***/ }),

/***/ "./src/logic/project.js":
/*!******************************!*\
  !*** ./src/logic/project.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Project {
    constructor(title) {
        this.title = title;
        this.todos = []
    }

    getTitle() {
        return this.title
    }

    setTitle(title) {
        this.title = title
    }


    addTodo(newTodo) {
        if(this.todos.find((todo) => todo.getTitle() === newTodo.getTitle())) {
            return
        }

        this.todos.push(newTodo)
    }

    getTodo(todoName) {
        return this.todos.find((todo) => todo.getTitle() === todoName)
    }

    getTodos() {
        return this.todos
    }

    setTodos(todos) {
        this.todos = todos
    }

    deleteTodo(todoName) {
        const todoToDelete = this.todos.find((todo) => todo.getTitle() === todoName)

        this.todos.splice(this.todos.indexOf(todoToDelete), 1)
    }

    delete
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Project);

/***/ }),

/***/ "./src/logic/storage.js":
/*!******************************!*\
  !*** ./src/logic/storage.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app */ "./src/logic/app.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ "./src/logic/project.js");
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./task */ "./src/logic/task.js");
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todo */ "./src/logic/todo.js");





class Storage {
    static saveApp(data) {
        localStorage.setItem('app', JSON.stringify(data))
    }

    static getApp() {
        const app = Object.assign(new _app__WEBPACK_IMPORTED_MODULE_0__["default"](), JSON.parse(localStorage.getItem('app')))

        app.setProjects(
            app.getProjects().map((project) => Object.assign(new _project__WEBPACK_IMPORTED_MODULE_1__["default"](), project))
        )

        app.getProjects().forEach((project) => 
            project.setTodos(project.getTodos().map((todo) => Object.assign(new _todo__WEBPACK_IMPORTED_MODULE_3__["default"](), todo))))

        app.getProjects().forEach((project) => 
            project.getTodos().forEach((todo) => 
                todo.setTasks(todo.getTasks().map((task) => Object.assign(new _task__WEBPACK_IMPORTED_MODULE_2__["default"], task)))))

        return app;
    }

    static addProject(project) {
        const app = Storage.getApp()
        app.addProject(project)
        Storage.saveApp(app)
    }

    static addTodo(projectName, todo) {
        const app = Storage.getApp()
        app.getProject(projectName).addTodo(todo)
        Storage.saveApp(app)
    }

    static addTask(projectName, todoName, task) {
        const app = Storage.getApp()
        app.getProject(projectName).getTodo(todoName).addTask(task)
        Storage.saveApp(app)
    }

    static renameProject(projectName, newProjectName) {
        const app = Storage.getApp()
        app.getProject(projectName).setTitle(newProjectName)
        Storage.saveApp(app)
    }

    static renameTodo(projectName, todoName, newTodoName) {
        const app = Storage.getApp()
        app.getProject(projectName).getTodo(todoName).setTitle(newTodoName)
        Storage.saveApp(app)
    }

    static renameTask(projectName, todoName, taskName, newTaskName) {
        const app = Storage.getApp()
        app.getProject(projectName).getTodo(todoName).getTask(taskName).setTitle(newTaskName)
        Storage.saveApp(app)
    }

    static changeDone(projectName, todoName, taskName) {
        const app = Storage.getApp()
        app.getProject(projectName).getTodo(todoName).getTask(taskName).changeDone()
        Storage.saveApp(app)
    }

    static deleteProject(projectName) {
        const app = Storage.getApp()
        app.deleteProject(projectName)
        Storage.saveApp(app)
    }
    

    static deleteTodo(projectName, todoName) {
        const app = Storage.getApp()
        app.deleteTodo(projectName, todoName)
        Storage.saveApp(app)
    }

    static deleteTask(projectName, todoName) {
        const app = Storage.getApp()
        app.deleteTasks(projectName, todoName)
        Storage.saveApp(app)
    }


}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Storage);

/***/ }),

/***/ "./src/logic/task.js":
/*!***************************!*\
  !*** ./src/logic/task.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Task {
    constructor(title, desc = '', duedate = '') {
        this.title = title;
        this.desc = desc;
        this.duedate = duedate
        this.done = false;
    }

    getTitle() {
        return this.title;
    }

    setTitle(value) {
        this.title = value
    }

    getDesc() {
        return this.desc;
    }

    setDesc(value) {
        this.desc = value
    }

    getDueDate() {
        return this.duedate
    }

    setDueDate(value) {
        this.duedate = value
    }

    

    changeDone() {
        this.done = !this.done
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Task);

/***/ }),

/***/ "./src/logic/todo.js":
/*!***************************!*\
  !*** ./src/logic/todo.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });


class Todo {
    constructor(title) {
        this.title = title
        this.tasks = []
    }
    
    getTitle() {
        return this.title;
    }

    setTitle(value) {
        this.title = value
    }

    addTask(task) {
        this.tasks.push(task)
    }

    getTask(taskTitle) {
       return this.tasks.find((task) => task.getTitle() === taskTitle)

    }

    getTasks() {
        return this.tasks
    }
    setTasks(tasks) {
        this.tasks = tasks
    }

    deleteTasks() {
        this.tasks.forEach((task) => {
            if(task.done) {
                this.tasks.splice(this.tasks.indexOf(task), 1)
            }
        })
    }
}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Todo);

/***/ }),

/***/ "./src/ui.js":
/*!*******************!*\
  !*** ./src/ui.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _logic_task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logic/task */ "./src/logic/task.js");
/* harmony import */ var _logic_todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logic/todo */ "./src/logic/todo.js");
/* harmony import */ var _logic_project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./logic/project */ "./src/logic/project.js");
/* harmony import */ var _logic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./logic/storage */ "./src/logic/storage.js");





class UI {
    constructor() {
        this.content = document.getElementById('content')
        this.sidebar = document.getElementById('sidebar')
        this.menu = document.getElementById('menu')
        this.menu.onclick = () => {
            this.sidebar.classList.add('show')
            const overlay = document.getElementById('overlay')
            overlay.style.display = "block"
            overlay.addEventListener('click', () => {
                this.sidebar.classList.remove('show')
                overlay.style.display = "none"
            })
        }
    }

    renderTodo(projectTitle, todo) {
        const todoDiv = document.createElement('div')
        todoDiv.classList.add('todo')
        const todoTitleDiv = document.createElement("div")
        todoTitleDiv.classList.add('buttonContainer')
        const todoTitle = document.createElement('h2')
        todoTitle.textContent  = todo.title;
        todoTitleDiv.appendChild(todoTitle)
        const todoDelete = document.createElement('img')
        todoDelete.classList.add('icon')
        todoDelete.classList.add('sml')
        todoDelete.src = '../images/close.png'
        todoTitleDiv.appendChild(todoDelete)
        todoDiv.appendChild(todoTitleDiv)
        const taskHolderDiv = document.createElement('div')
        this.renderTasks(projectTitle, todo.getTitle(), todo.tasks, taskHolderDiv)
        todoDiv.appendChild(taskHolderDiv)
        const addTaskBtn = document.createElement('button')
        addTaskBtn.innerHTML = "Add Task"
        addTaskBtn.classList.add('btn')
        addTaskBtn.addEventListener('click', () => {
            this.addTaskPop(projectTitle, todo.getTitle(), taskHolderDiv)
        })


        todoDiv.appendChild(addTaskBtn)

        const removeBtn = document.createElement('button')
        removeBtn.innerHTML = 'Remove Done Tasks'
        removeBtn.classList.add('btn')
        removeBtn.classList.add('red')
        removeBtn.addEventListener('click', () => {
            _logic_storage__WEBPACK_IMPORTED_MODULE_3__["default"].deleteTask(projectTitle, todo.getTitle())
            this.renderProject(_logic_storage__WEBPACK_IMPORTED_MODULE_3__["default"].getApp().getProject(projectTitle))
        })

        todoDiv.appendChild(removeBtn)

        return todoDiv
    }

    renderTask(projectTitle, todoTitle, task) {
        const taskDiv = document.createElement('div')
        taskDiv.classList.add('task')
        const taskTitle = document.createElement('p')
        taskTitle.textContent = task.title
        taskDiv.appendChild(taskTitle)
        taskDiv.addEventListener('click', () => {
            _logic_storage__WEBPACK_IMPORTED_MODULE_3__["default"].changeDone(projectTitle, todoTitle, task.getTitle())
            this.renderProject(_logic_storage__WEBPACK_IMPORTED_MODULE_3__["default"].getApp().getProject(projectTitle))
        })

        if(task.done) {
            taskDiv.classList.add('done')
        }

        if(task.desc !== "") {
            const taskDesc = document.createElement("p")
            taskDesc.textContent = task.desc
            taskDiv.appendChild(taskDesc)
        }

        if(task.duedate !== "") {
            const splitDate = task.duedate.split('-')
            const taskDate = document.createElement('p')
            taskDate.classList.add('taskDate')
            taskDate.textContent = `${splitDate[1]}-${splitDate[2]}-${splitDate[0]}`
            taskDiv.appendChild(taskDate)
        } else {
            
        }

        return taskDiv
    }

    renderTasks(projectTitle, todoTitle, tasks, parent) {
        parent.textContent = ""
        for(let task of tasks) {
            parent.appendChild(this.renderTask(projectTitle, todoTitle, task))
        }
    }

    renderProject(project) {
        this.content.innerHTML = ""
        const projectDiv = document.createElement('div')
        projectDiv.classList.add('project')
        const projectTitleDiv = document.createElement('div')
        projectTitleDiv.classList.add('projectTitle')
        const projectTitle = document.createElement('h1')
        projectTitle.textContent = project.title
        projectTitleDiv.appendChild(projectTitle)
        const threedot = document.createElement('img')
        threedot.classList.add('dots')
        threedot.src = "../images/dots.png"
        threedot.addEventListener('click', () => {
            this.projectEditPop(project)
        })
        projectTitleDiv.appendChild(threedot)
        projectDiv.appendChild(projectTitleDiv)
        const projectContent = document.createElement('div')
        projectContent.classList.add('projectContent')
        const todoDiv = document.createElement('div')
        todoDiv.classList.add('todoDiv')
        project.getTodos().forEach((todo) => todoDiv.appendChild(this.renderTodo(project.getTitle(),todo)))
        projectContent.appendChild(todoDiv)
        const addTodoBtn = document.createElement('button')
        addTodoBtn.classList.add('addTodo')
        addTodoBtn.innerHTML = 'Add Todo'
        addTodoBtn.addEventListener('click', () => {
            this.addTodoPop(project.getTitle(), todoDiv)
        })
        projectContent.addEventListener('wheel', (e) => {
            e.preventDefault()
            projectContent.scrollLeft += e.deltaY
        })
        projectContent.appendChild(addTodoBtn)
        projectDiv.appendChild(projectContent)
        this.content.appendChild(projectDiv)

    }

    renderSidebarProjects(parent) {
        parent.textContent = ""
        _logic_storage__WEBPACK_IMPORTED_MODULE_3__["default"].getApp().getProjects().forEach((project) =>  {
            const projectTitle = document.createElement('h2')
            projectTitle.textContent = project.title
            projectTitle.addEventListener('click', () => {
                this.content.innerHTML = ''
                this.renderProject(_logic_storage__WEBPACK_IMPORTED_MODULE_3__["default"].getApp().getProject(project.getTitle()))
            })
            parent.appendChild(projectTitle)
        })
        return parent
    }

    renderSidebar() {
        const overlay = document.getElementById('overlay')
        this.sidebar.innerHTML = ''
        const titleDiv = document.createElement("div")
        titleDiv.classList.add('buttonContainer')
        const sidebarTitle = document.createElement('h1')
        sidebarTitle.textContent = 'Your Projects'
        titleDiv.appendChild(sidebarTitle)
        const closeBtn = document.createElement('img')
        closeBtn.src = "../images/close.png"
        closeBtn.classList.add('icon')
        closeBtn.addEventListener('click', () => {
            this.sidebar.classList.remove('show')
            overlay.style.display = 'none'
        })
        titleDiv.appendChild(closeBtn)
        this.sidebar.appendChild(titleDiv)
        const projectDiv = document.createElement('div')
        projectDiv.id = 'projectDiv'
        this.sidebar.appendChild(this.renderSidebarProjects(projectDiv))

        const addProject = document.createElement('button')
        addProject.innerHTML = "Add Project"
        addProject.addEventListener('click', () => {
            this.addProjPop(this.app)
        })

        this.sidebar.appendChild(addProject)

        
    }

    addProjPop() {
        const overlay = document.getElementById('overlay')
        overlay.style.display = "block"
        overlay.addEventListener('click', () => {
            popup.remove()
            overlay.style.display = "none"
        })
        const popup = document.createElement('form')
        popup.classList.add('popup')
        popup.id = 'addProjectPopup'
        const popupTitle = document.createElement('h2')
        popupTitle.textContent = 'Add Project'
        popup.appendChild(popupTitle)
        const projTitleInput = document.createElement('input')
        projTitleInput.type = 'text'
        popup.appendChild(projTitleInput)
        const submitBtn = document.createElement('button')
        submitBtn.type = 'submit'
        submitBtn.innerHTML = 'Submit'
        submitBtn.addEventListener('click', (e) => {
            e.preventDefault()
            if(projTitleInput.value !== "") {
                const newProj = new _logic_project__WEBPACK_IMPORTED_MODULE_2__["default"](projTitleInput.value)
                _logic_storage__WEBPACK_IMPORTED_MODULE_3__["default"].addProject(newProj)
                this.renderSidebar()
                this.renderProject(newProj)

            }
            overlay.style.display = "none"
            popup.remove()
        })

        popup.appendChild(submitBtn)

        this.content.appendChild(popup)
    }

    addTaskPop(projectTitle, todoTitle, taskDiv) {
        const overlay = document.getElementById('overlay')
        overlay.style.display = "block"
        overlay.addEventListener('click', () => {
            popup.remove()
            overlay.style.display = "none"
        })
        const popup = document.createElement('form')
        popup.classList.add('popup')
        popup.id = "addTaskPopup"
        const popupTitle = document.createElement('h2')
        popupTitle.textContent = "Add Task"
        popup.appendChild(popupTitle)
        const titleLabel = document.createElement('label')
        titleLabel.htmlFor = "titleInput"
        titleLabel.textContent = "Title"
        popup.appendChild(titleLabel)
        const titleInput = document.createElement('input')
        titleInput.type = "text"
        titleInput.required = "true"
        popup.appendChild(titleInput)
        const descLabel = document.createElement('label')
        descLabel.htmlFor = 'descInput'
        descLabel.textContent = "Description"
        popup.appendChild(descLabel)
        const descInput = document.createElement('input')
        descInput.type = 'text'
        popup.appendChild(descInput)
        const dateLabel = document.createElement('label')
        dateLabel.htmlFor = 'dateInput'
        dateLabel.textContent = 'Due Date'
        popup.appendChild(dateLabel)
        const dateInput = document.createElement('input')
        dateInput.type = 'date'
        popup.appendChild(dateInput)

        const buttonDiv = document.createElement('div')
        buttonDiv.classList.add('btnDiv')
        const addBtn = document.createElement('button')
        addBtn.type = 'submit'
        addBtn.innerHTML = 'Add Task'
        addBtn.addEventListener('click', (e) => {
            e.preventDefault()
            if(titleInput.value !== "") {
                _logic_storage__WEBPACK_IMPORTED_MODULE_3__["default"].addTask(projectTitle, todoTitle, new _logic_task__WEBPACK_IMPORTED_MODULE_0__["default"](titleInput.value, descInput.value, dateInput.value))
                this.renderProject(_logic_storage__WEBPACK_IMPORTED_MODULE_3__["default"].getApp().getProject(projectTitle))

            }
            overlay.style.display = 'none'
            popup.remove()
        })
        buttonDiv.appendChild(addBtn)
        const canBtn = document.createElement('button')
        canBtn.innerHTML = 'Cancel'
        canBtn.addEventListener('click', () => {
            popup.remove()
            overlay.style.display = 'none'
        })
        buttonDiv.appendChild(canBtn)
        popup.appendChild(buttonDiv)



        this.content.appendChild(popup)

    }

    addTodoPop(projectTitle, todoDiv) {
        const overlay = document.getElementById('overlay')
        overlay.style.display = "block"
        overlay.addEventListener('click', () => {
            popup.remove()
            overlay.style.display = "none"
        })
        const popup = document.createElement('form')
        popup.classList.add('popup')
        popup.id = 'addTodoPop'

        const popupTitle = document.createElement('h2')
        popupTitle.textContent = 'Add Todo'
        popup.appendChild(popupTitle)

        const titleLabel = document.createElement('label')
        titleLabel.textContent = 'Title'
        titleLabel.htmlFor = 'titleInput'
        popup.appendChild(titleLabel)

        const titleInput = document.createElement('input')
        titleInput.type = 'text'
        titleInput.id = 'todoTitleinput'
        titleInput.required = "true"
        popup.appendChild(titleInput)

        const buttonDiv = document.createElement('div')
        buttonDiv.classList.add('btnDiv')
        const addBtn = document.createElement('button')
        addBtn.innerHTML = 'Add Todo'
        addBtn.type = 'submit'
        addBtn.addEventListener('click', (e) => {
            e.preventDefault()
            if(titleInput.value !== "")
            {
                _logic_storage__WEBPACK_IMPORTED_MODULE_3__["default"].addTodo(projectTitle, new _logic_todo__WEBPACK_IMPORTED_MODULE_1__["default"](titleInput.value))
                this.renderProject(_logic_storage__WEBPACK_IMPORTED_MODULE_3__["default"].getApp().getProject(projectTitle))
                
            }
            overlay.style.display = 'none'
            popup.remove()
        })
        buttonDiv.appendChild(addBtn)
        const canBtn = document.createElement('button')
        canBtn.innerHTML = 'Cancel'
        canBtn.addEventListener('click', () =>  {
            overlay.style.display = 'none'
            popup.remove()
        })

        buttonDiv.appendChild(canBtn)
        popup.appendChild(buttonDiv)

        this.content.appendChild(popup)

    }   

    projectEditPop(project) {
        const overlay = document.getElementById('overlay')
        overlay.style.display = "block"
        overlay.addEventListener('click', () => {
            popup.remove()
            overlay.style.display = "none"
        })
        const popup = document.createElement('div')
        popup.id = 'prodjEdit'
        const rename = document.createElement("h2")
        rename.textContent = "Rename Project"
        rename.addEventListener('click', () => {
            this.renameProject(project)
            popup.remove()
        })
        popup.appendChild(rename)
        const deleteProject = document.createElement('h2')
        deleteProject.textContent = "Delete Project"
        deleteProject.addEventListener('click', () => {
            overlay.style.display = 'none'
            popup.remove()
        })
        popup.appendChild(deleteProject)

        const canBtn = document.createElement('h2')
        canBtn.textContent = "Cancel"
        canBtn.addEventListener('click', () => {
            overlay.style.display = 'none'
            popup.remove()
        })

        popup.appendChild(canBtn)


        this.content.appendChild(popup)
    }s

    renameProject(project) {
        const overlay = document.getElementById('overlay')
        overlay.style.display = "block"
        overlay.addEventListener('click', () => {
            popup.remove()
            overlay.style.display = "none"
        })
        const popup = document.createElement('form')
        popup.classList.add('popup')
        const title = document.createElement('h2')
        title.textContent = "Rename Project"
        popup.appendChild(title)
        const titleInput = document.createElement('input')
        titleInput.type = 'text'

        popup.appendChild(titleInput)
        const submitBtn = document.createElement('button')
        submitBtn.type = 'submit'
        submitBtn.innerHTML = "Submit"
        submitBtn.addEventListener('click', (e) => {
            e.preventDefault()
            if(titleInput.value !== "") {
                this.content.innerHTML = ""
                _logic_storage__WEBPACK_IMPORTED_MODULE_3__["default"].renameProject(project.getTitle(), titleInput.value)
                this.renderProject(_logic_storage__WEBPACK_IMPORTED_MODULE_3__["default"].getApp().getProject(titleInput.value))
                this.renderSidebar()
            }
            overlay.style.display = 'none'
            popup.remove()
        })

        popup.appendChild(submitBtn)

        this.content.appendChild(popup)
    }


}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UI);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _logic_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logic/storage */ "./src/logic/storage.js");
/* harmony import */ var _logic_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./logic/app */ "./src/logic/app.js");
/* harmony import */ var _logic_task__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./logic/task */ "./src/logic/task.js");
/* harmony import */ var _logic_todo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./logic/todo */ "./src/logic/todo.js");
/* harmony import */ var _logic_project__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./logic/project */ "./src/logic/project.js");
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ui */ "./src/ui.js");










const ui = new _ui__WEBPACK_IMPORTED_MODULE_6__["default"]()


ui.renderSidebar()


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZTs7Ozs7Ozs7Ozs7Ozs7QUM1RmY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWU7Ozs7Ozs7Ozs7Ozs7O0FDdkNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWU7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFDZ0I7QUFDQTtBQUNNO0FBQ0E7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxpRUFBa0I7QUFDOUIsK0JBQStCLDZEQUFjO0FB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLG9FQUFxQjtBQUNyQyxtQ0FBbUMsNkRBQWM7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWU7Ozs7OztVQ3phZjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDb0I7QUFDcEI7QUFDc0M7QUFDVDtBQUNHO0FBQ0E7QUFDTTtBQUNoQjtBQUN0QjtBQUNBLGVBQWUsMkNBQUU7QUFDakI7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvbG9naWMvYXBwLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvbG9naWMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2xvZ2ljL3N0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9sb2dpYy90YXNrLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvbG9naWMvdG9kby5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL3VpLmpzIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XFxyXFxufVxcclxcblxcclxcblxcclxcbioge1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG4jb3ZlcmxheSB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgICB6LWluZGV4OiAyO1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4jdGl0bGVCYXIge1xcclxcbiAgICBwYWRkaW5nOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uYnV0dG9uQ29udGFpbmVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbn1cXHJcXG5cXHJcXG4uaWNvbiB7XFxyXFxuICAgIGhlaWdodDogMnJlbTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uc21sIHtcXHJcXG4gICAgaGVpZ2h0OiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jY29udGVudCB7XFxyXFxuICAgIHdpZHRoOiAxMDB2dztcXHJcXG59XFxyXFxuXFxyXFxuI3NpZGViYXIge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgbGVmdDogLTEwMCU7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC41cztcXHJcXG4gICAgei1pbmRleDogMztcXHJcXG59XFxyXFxuXFxyXFxuI3NpZGViYXIgPiAqIHtcXHJcXG4gICAgbWFyZ2luOiAxcmVtO1xcclxcbiAgICBcXHJcXG59XFxyXFxuXFxyXFxuI3Byb2plY3REaXYgPiAqIHtcXHJcXG4gICAgcGFkZGluZzogLjVyZW0gMDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4jcHJvamVjdERpdiA+ICo6aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGJsdWU7XFxyXFxufVxcclxcblxcclxcblxcclxcbi5wcm9qZWN0Q29udGVudCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtd3JhcDogbm93cmFwO1xcclxcbiAgICBvdmVyZmxvdy14OiBhdXRvO1xcclxcblxcclxcbiAgICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7XFxyXFxuICAgIHNjcm9sbGJhci13aWR0aDogbm9uZTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdENvbnRlbnQ6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmRvdHMge1xcclxcbiAgICBoZWlnaHQ6IDIuNXJlbTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdCB7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE2MjAyMDc0MTgzMDItNDM5YjM4NzQ0MWIwP2l4bGliPXJiLTQuMC4zJml4aWQ9TW53eE1qQTNmREI4TUh4d2FHOTBieTF3WVdkbGZIeDhmR1Z1ZkRCOGZIeDgmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz05NjcmcT04MFxcXCIpO1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kbywgLnByb2plY3RUaXRsZSwgLmFkZFRvZG8ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8ge1xcclxcbiAgICBmbGV4OiAwIDAgYXV0bztcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC13cmFwOiBub3dyYXA7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgYm94LXNoYWRvdzogNXB4IDVweCAyMHB4IHJnYmEoMCwwLDAsMC4yNSk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IC41cmVtO1xcclxcbiAgICB3aWR0aDogMjByZW07XFxyXFxuICAgIG1heC1oZWlnaHQ6IDgwJTtcXHJcXG4gICAgcGFkZGluZzogMXJlbTtcXHJcXG4gICAgbWFyZ2luOiAxcmVtO1xcclxcbiAgICBhbGlnbi1zZWxmOiBzZWxmLXN0YXJ0O1xcclxcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcclxcblxcclxcbiAgICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7XFxyXFxuICAgIHNjcm9sbGJhci13aWR0aDogMnB4O1xcclxcbn1cXHJcXG5cXHJcXG4udG9kbzo6LXdlYmtpdC1zY3JvbGxiYXIge1xcclxcbiAgICB3aWR0aDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG86Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzEyMTIxMjtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogLjVyZW07XFxyXFxufVxcclxcblxcclxcbi50b2RvOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IC41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkVG9kbyB7XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gICAgbWluLXdpZHRoOiAxMHJlbTtcXHJcXG4gICAgaGVpZ2h0OiAxMHJlbTtcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQgZ2FpbnNib3JvO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAuNXJlbTtcXHJcXG4gICAgcGFkZGluZzogLjVyZW0gMXJlbTtcXHJcXG4gICAgbWFyZ2luOiAxcmVtO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi50YXNrIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGdhaW5zYm9ybztcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogLjVyZW07XFxyXFxuICAgIHBhZGRpbmc6IC41cmVtIDFyZW07XFxyXFxuICAgIG1hcmdpbjogMXJlbSBhdXRvO1xcclxcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMjVzLCBib3JkZXItY29sb3IgMC4yNXM7XFxyXFxufVxcclxcblxcclxcbi50YXNrRGF0ZSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogLjc1cmVtO1xcclxcbiAgICBjb2xvcjogZ3JleTtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0biB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDFyZW07XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGdhaW5zYm9ybztcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogLjVyZW07XFxyXFxuICAgIHBhZGRpbmc6IC41cmVtIDFyZW07XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0b3A6IDEwJTtcXHJcXG4gICAgbGVmdDogNTAlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICB3aWR0aDogMTByZW07XFxyXFxuICAgIHBhZGRpbmc6IDFyZW07XFxyXFxuICAgIGJveC1zaGFkb3c6IDVweCA1cHggMjBweCByZ2JhKDAsMCwwLCAwLjI1KTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogLjVyZW07XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtN3JlbSwgMCk7XFxyXFxuICAgIHotaW5kZXg6IDM7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cCA+IGlucHV0LCAucG9wdXAgPiBoMiB7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IC41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuRGl2IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5idG5EaXYgYnV0dG9uIHtcXHJcXG4gICAgd2lkdGg6IDUwJTtcXHJcXG4gICAgcGFkZGluZzogLjVyZW07XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0VGl0bGUge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIG1hcmdpbjogMXJlbTtcXHJcXG4gICAgYm94LXNoYWRvdzogNXB4IDVweCAyMHB4IHJnYmEoMCwwLDAsMC4yNSk7XFxyXFxuICAgIHBhZGRpbmc6IDFyZW0gMnJlbTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG9EaXYge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbn1cXHJcXG5cXHJcXG4uZG9uZSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JlZW47XFxyXFxuICAgIGJvcmRlci1jb2xvcjogbWVkaXVtc2VhZ3JlZW47XFxyXFxufVxcclxcblxcclxcbi5yZWQge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGNvcmFsO1xcclxcbiAgICBib3JkZXItY29sb3I6IG1hcm9vbjtcXHJcXG59XFxyXFxuXFxyXFxuI3Byb2RqRWRpdCB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgcmlnaHQ6IDJyZW07XFxyXFxuICAgIHRvcDogNnJlbTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICAgIHBhZGRpbmc6IC41cmVtIDFyZW07XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IC41cmVtO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIHotaW5kZXg6IDM7XFxyXFxufVxcclxcbiNwcm9kakVkaXQgPiAqIHtcXHJcXG4gICAgcGFkZGluZzogMXJlbSAuNXJlbTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI3Byb2RqRWRpdCA+ICo6aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGJsdWU7XFxyXFxufVxcclxcblxcclxcbi5zaG93IHtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTAwJSwgMCk7XFxyXFxufVxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxzQkFBc0I7QUFDMUI7OztBQUdBO0lBQ0ksVUFBVTtJQUNWLFNBQVM7QUFDYjs7QUFFQTtJ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O0lBQ2xCLFdBQVc7SUFDWCxTQUFTO0lBQ1QsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLFVBQVU7QUFDZDtBQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSw2QkFBNkI7QUFDakNcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcclxcbiAgICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4qIHtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuI292ZXJsYXkge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHdpZHRoOiAxMDB2dztcXHJcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gICAgei1pbmRleDogMjtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuI3RpdGxlQmFyIHtcXHJcXG4gICAgcGFkZGluZzogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmJ1dHRvbkNvbnRhaW5lciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG59XFxyXFxuXFxyXFxuLmljb24ge1xcclxcbiAgICBoZWlnaHQ6IDJyZW07XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnNtbCB7XFxyXFxuICAgIGhlaWdodDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI2NvbnRlbnQge1xcclxcbiAgICB3aWR0aDogMTAwdnc7XFxyXFxufVxcclxcblxcclxcbiNzaWRlYmFyIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIGxlZnQ6IC0xMDAlO1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuNXM7XFxyXFxuICAgIHotaW5kZXg6IDM7XFxyXFxufVxcclxcblxcclxcbiNzaWRlYmFyID4gKiB7XFxyXFxuICAgIG1hcmdpbjogMXJlbTtcXHJcXG4gICAgXFxyXFxufVxcclxcblxcclxcbiNwcm9qZWN0RGl2ID4gKiB7XFxyXFxuICAgIHBhZGRpbmc6IC41cmVtIDA7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI3Byb2plY3REaXYgPiAqOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRibHVlO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4ucHJvamVjdENvbnRlbnQge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcXHJcXG4gICAgb3ZlcmZsb3cteDogYXV0bztcXHJcXG5cXHJcXG4gICAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lO1xcclxcbiAgICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3RDb250ZW50Ojotd2Via2l0LXNjcm9sbGJhciB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5kb3RzIHtcXHJcXG4gICAgaGVpZ2h0OiAyLjVyZW07XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3Qge1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNjIwMjA3NDE4MzAyLTQzOWIzODc0NDFiMD9peGxpYj1yYi00LjAuMyZpeGlkPU1ud3hNakEzZkRCOE1IeHdhRzkwYnkxd1lXZGxmSHg4ZkdWdWZEQjhmSHg4JmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9OTY3JnE9ODBcXFwiKTtcXHJcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8sIC5wcm9qZWN0VGl0bGUsIC5hZGRUb2RvIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi50b2RvIHtcXHJcXG4gICAgZmxleDogMCAwIGF1dG87XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtd3JhcDogbm93cmFwO1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIGJveC1zaGFkb3c6IDVweCA1cHggMjBweCByZ2JhKDAsMCwwLDAuMjUpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAuNXJlbTtcXHJcXG4gICAgd2lkdGg6IDIwcmVtO1xcclxcbiAgICBtYXgtaGVpZ2h0OiA4MCU7XFxyXFxuICAgIHBhZGRpbmc6IDFyZW07XFxyXFxuICAgIG1hcmdpbjogMXJlbTtcXHJcXG4gICAgYWxpZ24tc2VsZjogc2VsZi1zdGFydDtcXHJcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXHJcXG5cXHJcXG4gICAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lO1xcclxcbiAgICBzY3JvbGxiYXItd2lkdGg6IDJweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG86Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXHJcXG4gICAgd2lkdGg6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi50b2RvOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMjEyMTI7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IC41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kbzo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZFRvZG8ge1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICAgIG1pbi13aWR0aDogMTByZW07XFxyXFxuICAgIGhlaWdodDogMTByZW07XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGdhaW5zYm9ybztcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogLjVyZW07XFxyXFxuICAgIHBhZGRpbmc6IC41cmVtIDFyZW07XFxyXFxuICAgIG1hcmdpbjogMXJlbTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4udGFzayB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZCBnYWluc2Jvcm87XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IC41cmVtO1xcclxcbiAgICBwYWRkaW5nOiAuNXJlbSAxcmVtO1xcclxcbiAgICBtYXJnaW46IDFyZW0gYXV0bztcXHJcXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjI1cywgYm9yZGVyLWNvbG9yIDAuMjVzO1xcclxcbn1cXHJcXG5cXHJcXG4udGFza0RhdGUge1xcclxcbiAgICBmb250LXNpemU6IC43NXJlbTtcXHJcXG4gICAgY29sb3I6IGdyZXk7XFxyXFxufVxcclxcblxcclxcbi5idG4ge1xcclxcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZCBnYWluc2Jvcm87XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IC41cmVtO1xcclxcbiAgICBwYWRkaW5nOiAuNXJlbSAxcmVtO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cCB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOiAxMCU7XFxyXFxuICAgIGxlZnQ6IDUwJTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgd2lkdGg6IDEwcmVtO1xcclxcbiAgICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgICBib3gtc2hhZG93OiA1cHggNXB4IDIwcHggcmdiYSgwLDAsMCwgMC4yNSk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IC41cmVtO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTdyZW0sIDApO1xcclxcbiAgICB6LWluZGV4OiAzO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXAgPiBpbnB1dCwgLnBvcHVwID4gaDIge1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bkRpdiB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuRGl2IGJ1dHRvbiB7XFxyXFxuICAgIHdpZHRoOiA1MCU7XFxyXFxuICAgIHBhZGRpbmc6IC41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdFRpdGxlIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBtYXJnaW46IDFyZW07XFxyXFxuICAgIGJveC1zaGFkb3c6IDVweCA1cHggMjBweCByZ2JhKDAsMCwwLDAuMjUpO1xcclxcbiAgICBwYWRkaW5nOiAxcmVtIDJyZW07XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDJyZW07XFxyXFxufVxcclxcblxcclxcbi50b2RvRGl2IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG59XFxyXFxuXFxyXFxuLmRvbmUge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZWVuO1xcclxcbiAgICBib3JkZXItY29sb3I6IG1lZGl1bXNlYWdyZWVuO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVkIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRjb3JhbDtcXHJcXG4gICAgYm9yZGVyLWNvbG9yOiBtYXJvb247XFxyXFxufVxcclxcblxcclxcbiNwcm9kakVkaXQge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHJpZ2h0OiAycmVtO1xcclxcbiAgICB0b3A6IDZyZW07XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgICBwYWRkaW5nOiAuNXJlbSAxcmVtO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAuNXJlbTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICB6LWluZGV4OiAzO1xcclxcbn1cXHJcXG4jcHJvZGpFZGl0ID4gKiB7XFxyXFxuICAgIHBhZGRpbmc6IDFyZW0gLjVyZW07XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogLjVyZW07XFxyXFxufVxcclxcblxcclxcbiNwcm9kakVkaXQgPiAqOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRibHVlO1xcclxcbn1cXHJcXG5cXHJcXG4uc2hvdyB7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDEwMCUsIDApO1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjbGFzcyBBcHAge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5wcm9qZWN0cyA9IFtdXHJcbiAgICB9XHJcblxyXG4gICAgYWRkUHJvamVjdChuZXdQcm9qZWN0KSB7XHJcbiAgICAgICAgaWYodGhpcy5wcm9qZWN0cy5maW5kKChwcm9qZWN0KSA9PiBwcm9qZWN0LmdldFRpdGxlKCkgPT09IG5ld1Byb2plY3QuZ2V0VGl0bGUoKSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMucHJvamVjdHMucHVzaChuZXdQcm9qZWN0KVxyXG4gICAgfVxyXG5cclxuICAgIGdldFByb2plY3QocHJvamVjdE5hbWUpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wcm9qZWN0cy5maW5kKChwcm9qZWN0KSA9PiBwcm9qZWN0LmdldFRpdGxlKCkgPT09IHByb2plY3ROYW1lKVxyXG4gICAgfVxyXG5cclxuICAgIGdldFByb2plY3RzKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnByb2plY3RzXHJcbiAgICB9XHJcblxyXG4gICAgc2V0UHJvamVjdHMocHJvamVjdHMpIHtcclxuICAgICAgICB0aGlzLnByb2plY3RzID0gcHJvamVjdHNcclxuICAgIH1cclxuXHJcbiAgICBkZWxldGVQcm9qZWN0KHByb2plY3ROYW1lKSB7XHJcbiAgICAgICAgY29uc3QgcHJvamVjdFRvRGVsZXRlID0gdGhpcy5nZXRQcm9qZWN0KHByb2plY3ROYW1lKVxyXG5cclxuICAgICAgICB0aGlzLnByb2plY3RzLnNwbGljZSh0aGlzLnByb2plY3RzLmluZGV4T2YocHJvamVjdFRvRGVsZXRlKSwgMSlcclxuICAgIH1cclxuXHJcbiAgICBkZWxldGVUb2RvKHByb2plY3ROYW1lLCB0b2RvTmFtZSkge1xyXG4gICAgICAgIGNvbnN0IHByb2plY3QgPSB0aGlzLmdldFByb2plY3QocHJvamVjdE5hbWUpXHJcblxyXG4gICAgICAgIHByb2plY3QuZGVsZXRlVG9kbyh0b2RvTmFtZSlcclxuICAgIH1cclxuXHJcbiAgICBkZWxldGVUYXNrcyhwcm9qZWN0TmFtZSwgdG9kb05hbWUpIHtcclxuICAgICAgICBjb25zdCB0b2RvID0gdGhpcy5nZXRQcm9qZWN0KHByb2plY3ROYW1lKS5nZXRUb2RvKHRvZG9OYW1lKVxyXG5cclxuICAgICAgICB0b2RvLmRlbGV0ZVRhc2tzKClcclxuICAgIH1cclxuXHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcHAiLCJjbGFzcyBQcm9qZWN0IHtcclxuICAgIGNvbnN0cnVjdG9yKHRpdGxlKSB7XHJcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xyXG4gICAgICAgIHRoaXMudG9kb3MgPSBbXVxyXG4gICAgfVxyXG5cclxuICAgIGdldFRpdGxlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRpdGxlXHJcbiAgICB9XHJcblxyXG4gICAgc2V0VGl0bGUodGl0bGUpIHtcclxuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGVcclxuICAgIH1cclxuXHJcblxyXG4gICAgYWRkVG9kbyhuZXdUb2RvKSB7XHJcbiAgICAgICAgaWYodGhpcy50b2Rvcy5maW5kKCh0b2RvKSA9PiB0b2RvLmdldFRpdGxlKCkgPT09IG5ld1RvZG8uZ2V0VGl0bGUoKSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnRvZG9zLnB1c2gobmV3VG9kbylcclxuICAgIH1cclxuXHJcbiAgICBnZXRUb2RvKHRvZG9OYW1lKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudG9kb3MuZmluZCgodG9kbykgPT4gdG9kby5nZXRUaXRsZSgpID09PSB0b2RvTmFtZSlcclxuICAgIH1cclxuXHJcbiAgICBnZXRUb2RvcygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50b2Rvc1xyXG4gICAgfVxyXG5cclxuICAgIHNldFRvZG9zKHRvZG9zKSB7XHJcbiAgICAgICAgdGhpcy50b2RvcyA9IHRvZG9zXHJcbiAgICB9XHJcblxyXG4gICAgZGVsZXRlVG9kbyh0b2RvTmFtZSkge1xyXG4gICAgICAgIGNvbnN0IHRvZG9Ub0RlbGV0ZSA9IHRoaXMudG9kb3MuZmluZCgodG9kbykgPT4gdG9kby5nZXRUaXRsZSgpID09PSB0b2RvTmFtZSlcclxuXHJcbiAgICAgICAgdGhpcy50b2Rvcy5zcGxpY2UodGhpcy50b2Rvcy5pbmRleE9mKHRvZG9Ub0RlbGV0ZSksIDEpXHJcbiAgICB9XHJcblxyXG4gICAgZGVsZXRlXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2plY3QiLCJpbXBvcnQgQXBwIGZyb20gXCIuL2FwcFwiO1xyXG5pbXBvcnQgUHJvamVjdCBmcm9tIFwiLi9wcm9qZWN0XCI7XHJcbmltcG9ydCBUYXNrIGZyb20gXCIuL3Rhc2tcIjtcclxuaW1wb3J0IFRvZG8gZnJvbSBcIi4vdG9kb1wiO1xyXG5cclxuY2xhc3MgU3RvcmFnZSB7XHJcbiAgICBzdGF0aWMgc2F2ZUFwcChkYXRhKSB7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2FwcCcsIEpTT04uc3RyaW5naWZ5KGRhdGEpKVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXRBcHAoKSB7XHJcbiAgICAgICAgY29uc3QgYXBwID0gT2JqZWN0LmFzc2lnbihuZXcgQXBwKCksIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FwcCcpKSlcclxuXHJcbiAgICAgICAgYXBwLnNldFByb2plY3RzKFxyXG4gICAgICAgICAgICBhcHAuZ2V0UHJvamVjdHMoKS5tYXAoKHByb2plY3QpID0+IE9iamVjdC5hc3NpZ24obmV3IFByb2plY3QoKSwgcHJvamVjdCkpXHJcbiAgICAgICAgKVxyXG5cclxuICAgICAgICBhcHAuZ2V0UHJvamVjdHMoKS5mb3JFYWNoKChwcm9qZWN0KSA9PiBcclxuICAgICAgICAgICAgcHJvamVjdC5zZXRUb2Rvcyhwcm9qZWN0LmdldFRvZG9zKCkubWFwKCh0b2RvKSA9PiBPYmplY3QuYXNzaWduKG5ldyBUb2RvKCksIHRvZG8pKSkpXHJcblxyXG4gICAgICAgIGFwcC5nZXRQcm9qZWN0cygpLmZvckVhY2goKHByb2plY3QpID0+IFxyXG4gICAgICAgICAgICBwcm9qZWN0LmdldFRvZG9zKCkuZm9yRWFjaCgodG9kbykgPT4gXHJcbiAgICAgICAgICAgICAgICB0b2RvLnNldFRhc2tzKHRvZG8uZ2V0VGFza3MoKS5tYXAoKHRhc2spID0+IE9iamVjdC5hc3NpZ24obmV3IFRhc2ssIHRhc2spKSkpKVxyXG5cclxuICAgICAgICByZXR1cm4gYXBwO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBhZGRQcm9qZWN0KHByb2plY3QpIHtcclxuICAgICAgICBjb25zdCBhcHAgPSBTdG9yYWdlLmdldEFwcCgpXHJcbiAgICAgICAgYXBwLmFkZFByb2plY3QocHJvamVjdClcclxuICAgICAgICBTdG9yYWdlLnNhdmVBcHAoYXBwKVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBhZGRUb2RvKHByb2plY3ROYW1lLCB0b2RvKSB7XHJcbiAgICAgICAgY29uc3QgYXBwID0gU3RvcmFnZS5nZXRBcHAoKVxyXG4gICAgICAgIGFwcC5nZXRQcm9qZWN0KHByb2plY3ROYW1lKS5hZGRUb2RvKHRvZG8pXHJcbiAgICAgICAgU3RvcmFnZS5zYXZlQXBwKGFwcClcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgYWRkVGFzayhwcm9qZWN0TmFtZSwgdG9kb05hbWUsIHRhc2spIHtcclxuICAgICAgICBjb25zdCBhcHAgPSBTdG9yYWdlLmdldEFwcCgpXHJcbiAgICAgICAgYXBwLmdldFByb2plY3QocHJvamVjdE5hbWUpLmdldFRvZG8odG9kb05hbWUpLmFkZFRhc2sodGFzaylcclxuICAgICAgICBTdG9yYWdlLnNhdmVBcHAoYXBwKVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyByZW5hbWVQcm9qZWN0KHByb2plY3ROYW1lLCBuZXdQcm9qZWN0TmFtZSkge1xyXG4gICAgICAgIGNvbnN0IGFwcCA9IFN0b3JhZ2UuZ2V0QXBwKClcclxuICAgICAgICBhcHAuZ2V0UHJvamVjdChwcm9qZWN0TmFtZSkuc2V0VGl0bGUobmV3UHJvamVjdE5hbWUpXHJcbiAgICAgICAgU3RvcmFnZS5zYXZlQXBwKGFwcClcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgcmVuYW1lVG9kbyhwcm9qZWN0TmFtZSwgdG9kb05hbWUsIG5ld1RvZG9OYW1lKSB7XHJcbiAgICAgICAgY29uc3QgYXBwID0gU3RvcmFnZS5nZXRBcHAoKVxyXG4gICAgICAgIGFwcC5nZXRQcm9qZWN0KHByb2plY3ROYW1lKS5nZXRUb2RvKHRvZG9OYW1lKS5zZXRUaXRsZShuZXdUb2RvTmFtZSlcclxuICAgICAgICBTdG9yYWdlLnNhdmVBcHAoYXBwKVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyByZW5hbWVUYXNrKHByb2plY3ROYW1lLCB0b2RvTmFtZSwgdGFza05hbWUsIG5ld1Rhc2tOYW1lKSB7XHJcbiAgICAgICAgY29uc3QgYXBwID0gU3RvcmFnZS5nZXRBcHAoKVxyXG4gICAgICAgIGFwcC5nZXRQcm9qZWN0KHByb2plY3ROYW1lKS5nZXRUb2RvKHRvZG9OYW1lKS5nZXRUYXNrKHRhc2tOYW1lKS5zZXRUaXRsZShuZXdUYXNrTmFtZSlcclxuICAgICAgICBTdG9yYWdlLnNhdmVBcHAoYXBwKVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBjaGFuZ2VEb25lKHByb2plY3ROYW1lLCB0b2RvTmFtZSwgdGFza05hbWUpIHtcclxuICAgICAgICBjb25zdCBhcHAgPSBTdG9yYWdlLmdldEFwcCgpXHJcbiAgICAgICAgYXBwLmdldFByb2plY3QocHJvamVjdE5hbWUpLmdldFRvZG8odG9kb05hbWUpLmdldFRhc2sodGFza05hbWUpLmNoYW5nZURvbmUoKVxyXG4gICAgICAgIFN0b3JhZ2Uuc2F2ZUFwcChhcHApXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGRlbGV0ZVByb2plY3QocHJvamVjdE5hbWUpIHtcclxuICAgICAgICBjb25zdCBhcHAgPSBTdG9yYWdlLmdldEFwcCgpXHJcbiAgICAgICAgYXBwLmRlbGV0ZVByb2plY3QocHJvamVjdE5hbWUpXHJcbiAgICAgICAgU3RvcmFnZS5zYXZlQXBwKGFwcClcclxuICAgIH1cclxuICAgIFxyXG5cclxuICAgIHN0YXRpYyBkZWxldGVUb2RvKHByb2plY3ROYW1lLCB0b2RvTmFtZSkge1xyXG4gICAgICAgIGNvbnN0IGFwcCA9IFN0b3JhZ2UuZ2V0QXBwKClcclxuICAgICAgICBhcHAuZGVsZXRlVG9kbyhwcm9qZWN0TmFtZSwgdG9kb05hbWUpXHJcbiAgICAgICAgU3RvcmFnZS5zYXZlQXBwKGFwcClcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZGVsZXRlVGFzayhwcm9qZWN0TmFtZSwgdG9kb05hbWUpIHtcclxuICAgICAgICBjb25zdCBhcHAgPSBTdG9yYWdlLmdldEFwcCgpXHJcbiAgICAgICAgYXBwLmRlbGV0ZVRhc2tzKHByb2plY3ROYW1lLCB0b2RvTmFtZSlcclxuICAgICAgICBTdG9yYWdlLnNhdmVBcHAoYXBwKVxyXG4gICAgfVxyXG5cclxuXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBTdG9yYWdlIiwiY2xhc3MgVGFzayB7XHJcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzYyA9ICcnLCBkdWVkYXRlID0gJycpIHtcclxuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XHJcbiAgICAgICAgdGhpcy5kZXNjID0gZGVzYztcclxuICAgICAgICB0aGlzLmR1ZWRhdGUgPSBkdWVkYXRlXHJcbiAgICAgICAgdGhpcy5kb25lID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VGl0bGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudGl0bGU7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0VGl0bGUodmFsdWUpIHtcclxuICAgICAgICB0aGlzLnRpdGxlID0gdmFsdWVcclxuICAgIH1cclxuXHJcbiAgICBnZXREZXNjKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmRlc2M7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0RGVzYyh2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuZGVzYyA9IHZhbHVlXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0RHVlRGF0ZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5kdWVkYXRlXHJcbiAgICB9XHJcblxyXG4gICAgc2V0RHVlRGF0ZSh2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuZHVlZGF0ZSA9IHZhbHVlXHJcbiAgICB9XHJcblxyXG4gICAgXHJcblxyXG4gICAgY2hhbmdlRG9uZSgpIHtcclxuICAgICAgICB0aGlzLmRvbmUgPSAhdGhpcy5kb25lXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRhc2siLCJcclxuXHJcbmNsYXNzIFRvZG8ge1xyXG4gICAgY29uc3RydWN0b3IodGl0bGUpIHtcclxuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGVcclxuICAgICAgICB0aGlzLnRhc2tzID0gW11cclxuICAgIH1cclxuICAgIFxyXG4gICAgZ2V0VGl0bGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudGl0bGU7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0VGl0bGUodmFsdWUpIHtcclxuICAgICAgICB0aGlzLnRpdGxlID0gdmFsdWVcclxuICAgIH1cclxuXHJcbiAgICBhZGRUYXNrKHRhc2spIHtcclxuICAgICAgICB0aGlzLnRhc2tzLnB1c2godGFzaylcclxuICAgIH1cclxuXHJcbiAgICBnZXRUYXNrKHRhc2tUaXRsZSkge1xyXG4gICAgICAgcmV0dXJuIHRoaXMudGFza3MuZmluZCgodGFzaykgPT4gdGFzay5nZXRUaXRsZSgpID09PSB0YXNrVGl0bGUpXHJcblxyXG4gICAgfVxyXG5cclxuICAgIGdldFRhc2tzKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRhc2tzXHJcbiAgICB9XHJcbiAgICBzZXRUYXNrcyh0YXNrcykge1xyXG4gICAgICAgIHRoaXMudGFza3MgPSB0YXNrc1xyXG4gICAgfVxyXG5cclxuICAgIGRlbGV0ZVRhc2tzKCkge1xyXG4gICAgICAgIHRoaXMudGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xyXG4gICAgICAgICAgICBpZih0YXNrLmRvbmUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudGFza3Muc3BsaWNlKHRoaXMudGFza3MuaW5kZXhPZih0YXNrKSwgMSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBUb2RvIiwiaW1wb3J0IFRhc2sgZnJvbSBcIi4vbG9naWMvdGFza1wiXHJcbmltcG9ydCBUb2RvIGZyb20gXCIuL2xvZ2ljL3RvZG9cIlxyXG5pbXBvcnQgUHJvamVjdCBmcm9tIFwiLi9sb2dpYy9wcm9qZWN0XCJcclxuaW1wb3J0IFN0b3JhZ2UgZnJvbSBcIi4vbG9naWMvc3RvcmFnZVwiXHJcblxyXG5jbGFzcyBVSSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpXHJcbiAgICAgICAgdGhpcy5zaWRlYmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NpZGViYXInKVxyXG4gICAgICAgIHRoaXMubWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZW51JylcclxuICAgICAgICB0aGlzLm1lbnUub25jbGljayA9ICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zaWRlYmFyLmNsYXNzTGlzdC5hZGQoJ3Nob3cnKVxyXG4gICAgICAgICAgICBjb25zdCBvdmVybGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ292ZXJsYXknKVxyXG4gICAgICAgICAgICBvdmVybGF5LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCJcclxuICAgICAgICAgICAgb3ZlcmxheS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2lkZWJhci5jbGFzc0xpc3QucmVtb3ZlKCdzaG93JylcclxuICAgICAgICAgICAgICAgIG92ZXJsYXkuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlclRvZG8ocHJvamVjdFRpdGxlLCB0b2RvKSB7XHJcbiAgICAgICAgY29uc3QgdG9kb0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgdG9kb0Rpdi5jbGFzc0xpc3QuYWRkKCd0b2RvJylcclxuICAgICAgICBjb25zdCB0b2RvVGl0bGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXHJcbiAgICAgICAgdG9kb1RpdGxlRGl2LmNsYXNzTGlzdC5hZGQoJ2J1dHRvbkNvbnRhaW5lcicpXHJcbiAgICAgICAgY29uc3QgdG9kb1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKVxyXG4gICAgICAgIHRvZG9UaXRsZS50ZXh0Q29udGVudCAgPSB0b2RvLnRpdGxlO1xyXG4gICAgICAgIHRvZG9UaXRsZURpdi5hcHBlbmRDaGlsZCh0b2RvVGl0bGUpXHJcbiAgICAgICAgY29uc3QgdG9kb0RlbGV0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXHJcbiAgICAgICAgdG9kb0RlbGV0ZS5jbGFzc0xpc3QuYWRkKCdpY29uJylcclxuICAgICAgICB0b2RvRGVsZXRlLmNsYXNzTGlzdC5hZGQoJ3NtbCcpXHJcbiAgICAgICAgdG9kb0RlbGV0ZS5zcmMgPSAnLi4vaW1hZ2VzL2Nsb3NlLnBuZydcclxuICAgICAgICB0b2RvVGl0bGVEaXYuYXBwZW5kQ2hpbGQodG9kb0RlbGV0ZSlcclxuICAgICAgICB0b2RvRGl2LmFwcGVuZENoaWxkKHRvZG9UaXRsZURpdilcclxuICAgICAgICBjb25zdCB0YXNrSG9sZGVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgICB0aGlzLnJlbmRlclRhc2tzKHByb2plY3RUaXRsZSwgdG9kby5nZXRUaXRsZSgpLCB0b2RvLnRhc2tzLCB0YXNrSG9sZGVyRGl2KVxyXG4gICAgICAgIHRvZG9EaXYuYXBwZW5kQ2hpbGQodGFza0hvbGRlckRpdilcclxuICAgICAgICBjb25zdCBhZGRUYXNrQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcclxuICAgICAgICBhZGRUYXNrQnRuLmlubmVySFRNTCA9IFwiQWRkIFRhc2tcIlxyXG4gICAgICAgIGFkZFRhc2tCdG4uY2xhc3NMaXN0LmFkZCgnYnRuJylcclxuICAgICAgICBhZGRUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmFkZFRhc2tQb3AocHJvamVjdFRpdGxlLCB0b2RvLmdldFRpdGxlKCksIHRhc2tIb2xkZXJEaXYpXHJcbiAgICAgICAgfSlcclxuXHJcblxyXG4gICAgICAgIHRvZG9EaXYuYXBwZW5kQ2hpbGQoYWRkVGFza0J0bilcclxuXHJcbiAgICAgICAgY29uc3QgcmVtb3ZlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcclxuICAgICAgICByZW1vdmVCdG4uaW5uZXJIVE1MID0gJ1JlbW92ZSBEb25lIFRhc2tzJ1xyXG4gICAgICAgIHJlbW92ZUJ0bi5jbGFzc0xpc3QuYWRkKCdidG4nKVxyXG4gICAgICAgIHJlbW92ZUJ0bi5jbGFzc0xpc3QuYWRkKCdyZWQnKVxyXG4gICAgICAgIHJlbW92ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgU3RvcmFnZS5kZWxldGVUYXNrKHByb2plY3RUaXRsZSwgdG9kby5nZXRUaXRsZSgpKVxyXG4gICAgICAgICAgICB0aGlzLnJlbmRlclByb2plY3QoU3RvcmFnZS5nZXRBcHAoKS5nZXRQcm9qZWN0KHByb2plY3RUaXRsZSkpXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgdG9kb0Rpdi5hcHBlbmRDaGlsZChyZW1vdmVCdG4pXHJcblxyXG4gICAgICAgIHJldHVybiB0b2RvRGl2XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyVGFzayhwcm9qZWN0VGl0bGUsIHRvZG9UaXRsZSwgdGFzaykge1xyXG4gICAgICAgIGNvbnN0IHRhc2tEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICAgIHRhc2tEaXYuY2xhc3NMaXN0LmFkZCgndGFzaycpXHJcbiAgICAgICAgY29uc3QgdGFza1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXHJcbiAgICAgICAgdGFza1RpdGxlLnRleHRDb250ZW50ID0gdGFzay50aXRsZVxyXG4gICAgICAgIHRhc2tEaXYuYXBwZW5kQ2hpbGQodGFza1RpdGxlKVxyXG4gICAgICAgIHRhc2tEaXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIFN0b3JhZ2UuY2hhbmdlRG9uZShwcm9qZWN0VGl0bGUsIHRvZG9UaXRsZSwgdGFzay5nZXRUaXRsZSgpKVxyXG4gICAgICAgICAgICB0aGlzLnJlbmRlclByb2plY3QoU3RvcmFnZS5nZXRBcHAoKS5nZXRQcm9qZWN0KHByb2plY3RUaXRsZSkpXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgaWYodGFzay5kb25lKSB7XHJcbiAgICAgICAgICAgIHRhc2tEaXYuY2xhc3NMaXN0LmFkZCgnZG9uZScpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZih0YXNrLmRlc2MgIT09IFwiXCIpIHtcclxuICAgICAgICAgICAgY29uc3QgdGFza0Rlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKVxyXG4gICAgICAgICAgICB0YXNrRGVzYy50ZXh0Q29udGVudCA9IHRhc2suZGVzY1xyXG4gICAgICAgICAgICB0YXNrRGl2LmFwcGVuZENoaWxkKHRhc2tEZXNjKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYodGFzay5kdWVkYXRlICE9PSBcIlwiKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNwbGl0RGF0ZSA9IHRhc2suZHVlZGF0ZS5zcGxpdCgnLScpXHJcbiAgICAgICAgICAgIGNvbnN0IHRhc2tEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXHJcbiAgICAgICAgICAgIHRhc2tEYXRlLmNsYXNzTGlzdC5hZGQoJ3Rhc2tEYXRlJylcclxuICAgICAgICAgICAgdGFza0RhdGUudGV4dENvbnRlbnQgPSBgJHtzcGxpdERhdGVbMV19LSR7c3BsaXREYXRlWzJdfS0ke3NwbGl0RGF0ZVswXX1gXHJcbiAgICAgICAgICAgIHRhc2tEaXYuYXBwZW5kQ2hpbGQodGFza0RhdGUpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGFza0RpdlxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlclRhc2tzKHByb2plY3RUaXRsZSwgdG9kb1RpdGxlLCB0YXNrcywgcGFyZW50KSB7XHJcbiAgICAgICAgcGFyZW50LnRleHRDb250ZW50ID0gXCJcIlxyXG4gICAgICAgIGZvcihsZXQgdGFzayBvZiB0YXNrcykge1xyXG4gICAgICAgICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQodGhpcy5yZW5kZXJUYXNrKHByb2plY3RUaXRsZSwgdG9kb1RpdGxlLCB0YXNrKSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyUHJvamVjdChwcm9qZWN0KSB7XHJcbiAgICAgICAgdGhpcy5jb250ZW50LmlubmVySFRNTCA9IFwiXCJcclxuICAgICAgICBjb25zdCBwcm9qZWN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgICBwcm9qZWN0RGl2LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QnKVxyXG4gICAgICAgIGNvbnN0IHByb2plY3RUaXRsZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgcHJvamVjdFRpdGxlRGl2LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RUaXRsZScpXHJcbiAgICAgICAgY29uc3QgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKVxyXG4gICAgICAgIHByb2plY3RUaXRsZS50ZXh0Q29udGVudCA9IHByb2plY3QudGl0bGVcclxuICAgICAgICBwcm9qZWN0VGl0bGVEaXYuYXBwZW5kQ2hpbGQocHJvamVjdFRpdGxlKVxyXG4gICAgICAgIGNvbnN0IHRocmVlZG90ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcclxuICAgICAgICB0aHJlZWRvdC5jbGFzc0xpc3QuYWRkKCdkb3RzJylcclxuICAgICAgICB0aHJlZWRvdC5zcmMgPSBcIi4uL2ltYWdlcy9kb3RzLnBuZ1wiXHJcbiAgICAgICAgdGhyZWVkb3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMucHJvamVjdEVkaXRQb3AocHJvamVjdClcclxuICAgICAgICB9KVxyXG4gICAgICAgIHByb2plY3RUaXRsZURpdi5hcHBlbmRDaGlsZCh0aHJlZWRvdClcclxuICAgICAgICBwcm9qZWN0RGl2LmFwcGVuZENoaWxkKHByb2plY3RUaXRsZURpdilcclxuICAgICAgICBjb25zdCBwcm9qZWN0Q29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgcHJvamVjdENvbnRlbnQuY2xhc3NMaXN0LmFkZCgncHJvamVjdENvbnRlbnQnKVxyXG4gICAgICAgIGNvbnN0IHRvZG9EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICAgIHRvZG9EaXYuY2xhc3NMaXN0LmFkZCgndG9kb0RpdicpXHJcbiAgICAgICAgcHJvamVjdC5nZXRUb2RvcygpLmZvckVhY2goKHRvZG8pID0+IHRvZG9EaXYuYXBwZW5kQ2hpbGQodGhpcy5yZW5kZXJUb2RvKHByb2plY3QuZ2V0VGl0bGUoKSx0b2RvKSkpXHJcbiAgICAgICAgcHJvamVjdENvbnRlbnQuYXBwZW5kQ2hpbGQodG9kb0RpdilcclxuICAgICAgICBjb25zdCBhZGRUb2RvQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcclxuICAgICAgICBhZGRUb2RvQnRuLmNsYXNzTGlzdC5hZGQoJ2FkZFRvZG8nKVxyXG4gICAgICAgIGFkZFRvZG9CdG4uaW5uZXJIVE1MID0gJ0FkZCBUb2RvJ1xyXG4gICAgICAgIGFkZFRvZG9CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuYWRkVG9kb1BvcChwcm9qZWN0LmdldFRpdGxlKCksIHRvZG9EaXYpXHJcbiAgICAgICAgfSlcclxuICAgICAgICBwcm9qZWN0Q29udGVudC5hZGRFdmVudExpc3RlbmVyKCd3aGVlbCcsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgICAgICBwcm9qZWN0Q29udGVudC5zY3JvbGxMZWZ0ICs9IGUuZGVsdGFZXHJcbiAgICAgICAgfSlcclxuICAgICAgICBwcm9qZWN0Q29udGVudC5hcHBlbmRDaGlsZChhZGRUb2RvQnRuKVxyXG4gICAgICAgIHByb2plY3REaXYuYXBwZW5kQ2hpbGQocHJvamVjdENvbnRlbnQpXHJcbiAgICAgICAgdGhpcy5jb250ZW50LmFwcGVuZENoaWxkKHByb2plY3REaXYpXHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlclNpZGViYXJQcm9qZWN0cyhwYXJlbnQpIHtcclxuICAgICAgICBwYXJlbnQudGV4dENvbnRlbnQgPSBcIlwiXHJcbiAgICAgICAgU3RvcmFnZS5nZXRBcHAoKS5nZXRQcm9qZWN0cygpLmZvckVhY2goKHByb2plY3QpID0+ICB7XHJcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJylcclxuICAgICAgICAgICAgcHJvamVjdFRpdGxlLnRleHRDb250ZW50ID0gcHJvamVjdC50aXRsZVxyXG4gICAgICAgICAgICBwcm9qZWN0VGl0bGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRlbnQuaW5uZXJIVE1MID0gJydcclxuICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyUHJvamVjdChTdG9yYWdlLmdldEFwcCgpLmdldFByb2plY3QocHJvamVjdC5nZXRUaXRsZSgpKSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgcGFyZW50LmFwcGVuZENoaWxkKHByb2plY3RUaXRsZSlcclxuICAgICAgICB9KVxyXG4gICAgICAgIHJldHVybiBwYXJlbnRcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJTaWRlYmFyKCkge1xyXG4gICAgICAgIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb3ZlcmxheScpXHJcbiAgICAgICAgdGhpcy5zaWRlYmFyLmlubmVySFRNTCA9ICcnXHJcbiAgICAgICAgY29uc3QgdGl0bGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXHJcbiAgICAgICAgdGl0bGVEaXYuY2xhc3NMaXN0LmFkZCgnYnV0dG9uQ29udGFpbmVyJylcclxuICAgICAgICBjb25zdCBzaWRlYmFyVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpXHJcbiAgICAgICAgc2lkZWJhclRpdGxlLnRleHRDb250ZW50ID0gJ1lvdXIgUHJvamVjdHMnXHJcbiAgICAgICAgdGl0bGVEaXYuYXBwZW5kQ2hpbGQoc2lkZWJhclRpdGxlKVxyXG4gICAgICAgIGNvbnN0IGNsb3NlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcclxuICAgICAgICBjbG9zZUJ0bi5zcmMgPSBcIi4uL2ltYWdlcy9jbG9zZS5wbmdcIlxyXG4gICAgICAgIGNsb3NlQnRuLmNsYXNzTGlzdC5hZGQoJ2ljb24nKVxyXG4gICAgICAgIGNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNpZGViYXIuY2xhc3NMaXN0LnJlbW92ZSgnc2hvdycpXHJcbiAgICAgICAgICAgIG92ZXJsYXkuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdGl0bGVEaXYuYXBwZW5kQ2hpbGQoY2xvc2VCdG4pXHJcbiAgICAgICAgdGhpcy5zaWRlYmFyLmFwcGVuZENoaWxkKHRpdGxlRGl2KVxyXG4gICAgICAgIGNvbnN0IHByb2plY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICAgIHByb2plY3REaXYuaWQgPSAncHJvamVjdERpdidcclxuICAgICAgICB0aGlzLnNpZGViYXIuYXBwZW5kQ2hpbGQodGhpcy5yZW5kZXJTaWRlYmFyUHJvamVjdHMocHJvamVjdERpdikpXHJcblxyXG4gICAgICAgIGNvbnN0IGFkZFByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxyXG4gICAgICAgIGFkZFByb2plY3QuaW5uZXJIVE1MID0gXCJBZGQgUHJvamVjdFwiXHJcbiAgICAgICAgYWRkUHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5hZGRQcm9qUG9wKHRoaXMuYXBwKVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIHRoaXMuc2lkZWJhci5hcHBlbmRDaGlsZChhZGRQcm9qZWN0KVxyXG5cclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBhZGRQcm9qUG9wKCkge1xyXG4gICAgICAgIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb3ZlcmxheScpXHJcbiAgICAgICAgb3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiXHJcbiAgICAgICAgb3ZlcmxheS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgcG9wdXAucmVtb3ZlKClcclxuICAgICAgICAgICAgb3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCJcclxuICAgICAgICB9KVxyXG4gICAgICAgIGNvbnN0IHBvcHVwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpXHJcbiAgICAgICAgcG9wdXAuY2xhc3NMaXN0LmFkZCgncG9wdXAnKVxyXG4gICAgICAgIHBvcHVwLmlkID0gJ2FkZFByb2plY3RQb3B1cCdcclxuICAgICAgICBjb25zdCBwb3B1cFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKVxyXG4gICAgICAgIHBvcHVwVGl0bGUudGV4dENvbnRlbnQgPSAnQWRkIFByb2plY3QnXHJcbiAgICAgICAgcG9wdXAuYXBwZW5kQ2hpbGQocG9wdXBUaXRsZSlcclxuICAgICAgICBjb25zdCBwcm9qVGl0bGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcclxuICAgICAgICBwcm9qVGl0bGVJbnB1dC50eXBlID0gJ3RleHQnXHJcbiAgICAgICAgcG9wdXAuYXBwZW5kQ2hpbGQocHJvalRpdGxlSW5wdXQpXHJcbiAgICAgICAgY29uc3Qgc3VibWl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcclxuICAgICAgICBzdWJtaXRCdG4udHlwZSA9ICdzdWJtaXQnXHJcbiAgICAgICAgc3VibWl0QnRuLmlubmVySFRNTCA9ICdTdWJtaXQnXHJcbiAgICAgICAgc3VibWl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgICAgIGlmKHByb2pUaXRsZUlucHV0LnZhbHVlICE9PSBcIlwiKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdQcm9qID0gbmV3IFByb2plY3QocHJvalRpdGxlSW5wdXQudmFsdWUpXHJcbiAgICAgICAgICAgICAgICBTdG9yYWdlLmFkZFByb2plY3QobmV3UHJvailcclxuICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyU2lkZWJhcigpXHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlbmRlclByb2plY3QobmV3UHJvailcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCJcclxuICAgICAgICAgICAgcG9wdXAucmVtb3ZlKClcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBwb3B1cC5hcHBlbmRDaGlsZChzdWJtaXRCdG4pXHJcblxyXG4gICAgICAgIHRoaXMuY29udGVudC5hcHBlbmRDaGlsZChwb3B1cClcclxuICAgIH1cclxuXHJcbiAgICBhZGRUYXNrUG9wKHByb2plY3RUaXRsZSwgdG9kb1RpdGxlLCB0YXNrRGl2KSB7XHJcbiAgICAgICAgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvdmVybGF5JylcclxuICAgICAgICBvdmVybGF5LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCJcclxuICAgICAgICBvdmVybGF5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBwb3B1cC5yZW1vdmUoKVxyXG4gICAgICAgICAgICBvdmVybGF5LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIlxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgY29uc3QgcG9wdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJylcclxuICAgICAgICBwb3B1cC5jbGFzc0xpc3QuYWRkKCdwb3B1cCcpXHJcbiAgICAgICAgcG9wdXAuaWQgPSBcImFkZFRhc2tQb3B1cFwiXHJcbiAgICAgICAgY29uc3QgcG9wdXBUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJylcclxuICAgICAgICBwb3B1cFRpdGxlLnRleHRDb250ZW50ID0gXCJBZGQgVGFza1wiXHJcbiAgICAgICAgcG9wdXAuYXBwZW5kQ2hpbGQocG9wdXBUaXRsZSlcclxuICAgICAgICBjb25zdCB0aXRsZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxyXG4gICAgICAgIHRpdGxlTGFiZWwuaHRtbEZvciA9IFwidGl0bGVJbnB1dFwiXHJcbiAgICAgICAgdGl0bGVMYWJlbC50ZXh0Q29udGVudCA9IFwiVGl0bGVcIlxyXG4gICAgICAgIHBvcHVwLmFwcGVuZENoaWxkKHRpdGxlTGFiZWwpXHJcbiAgICAgICAgY29uc3QgdGl0bGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcclxuICAgICAgICB0aXRsZUlucHV0LnR5cGUgPSBcInRleHRcIlxyXG4gICAgICAgIHRpdGxlSW5wdXQucmVxdWlyZWQgPSBcInRydWVcIlxyXG4gICAgICAgIHBvcHVwLmFwcGVuZENoaWxkKHRpdGxlSW5wdXQpXHJcbiAgICAgICAgY29uc3QgZGVzY0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxyXG4gICAgICAgIGRlc2NMYWJlbC5odG1sRm9yID0gJ2Rlc2NJbnB1dCdcclxuICAgICAgICBkZXNjTGFiZWwudGV4dENvbnRlbnQgPSBcIkRlc2NyaXB0aW9uXCJcclxuICAgICAgICBwb3B1cC5hcHBlbmRDaGlsZChkZXNjTGFiZWwpXHJcbiAgICAgICAgY29uc3QgZGVzY0lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxyXG4gICAgICAgIGRlc2NJbnB1dC50eXBlID0gJ3RleHQnXHJcbiAgICAgICAgcG9wdXAuYXBwZW5kQ2hpbGQoZGVzY0lucHV0KVxyXG4gICAgICAgIGNvbnN0IGRhdGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcclxuICAgICAgICBkYXRlTGFiZWwuaHRtbEZvciA9ICdkYXRlSW5wdXQnXHJcbiAgICAgICAgZGF0ZUxhYmVsLnRleHRDb250ZW50ID0gJ0R1ZSBEYXRlJ1xyXG4gICAgICAgIHBvcHVwLmFwcGVuZENoaWxkKGRhdGVMYWJlbClcclxuICAgICAgICBjb25zdCBkYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXHJcbiAgICAgICAgZGF0ZUlucHV0LnR5cGUgPSAnZGF0ZSdcclxuICAgICAgICBwb3B1cC5hcHBlbmRDaGlsZChkYXRlSW5wdXQpXHJcblxyXG4gICAgICAgIGNvbnN0IGJ1dHRvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgYnV0dG9uRGl2LmNsYXNzTGlzdC5hZGQoJ2J0bkRpdicpXHJcbiAgICAgICAgY29uc3QgYWRkQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcclxuICAgICAgICBhZGRCdG4udHlwZSA9ICdzdWJtaXQnXHJcbiAgICAgICAgYWRkQnRuLmlubmVySFRNTCA9ICdBZGQgVGFzaydcclxuICAgICAgICBhZGRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICAgICAgaWYodGl0bGVJbnB1dC52YWx1ZSAhPT0gXCJcIikge1xyXG4gICAgICAgICAgICAgICAgU3RvcmFnZS5hZGRUYXNrKHByb2plY3RUaXRsZSwgdG9kb1RpdGxlLCBuZXcgVGFzayh0aXRsZUlucHV0LnZhbHVlLCBkZXNjSW5wdXQudmFsdWUsIGRhdGVJbnB1dC52YWx1ZSkpXHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlbmRlclByb2plY3QoU3RvcmFnZS5nZXRBcHAoKS5nZXRQcm9qZWN0KHByb2plY3RUaXRsZSkpXHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG92ZXJsYXkuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xyXG4gICAgICAgICAgICBwb3B1cC5yZW1vdmUoKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgYnV0dG9uRGl2LmFwcGVuZENoaWxkKGFkZEJ0bilcclxuICAgICAgICBjb25zdCBjYW5CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxyXG4gICAgICAgIGNhbkJ0bi5pbm5lckhUTUwgPSAnQ2FuY2VsJ1xyXG4gICAgICAgIGNhbkJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgcG9wdXAucmVtb3ZlKClcclxuICAgICAgICAgICAgb3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXHJcbiAgICAgICAgfSlcclxuICAgICAgICBidXR0b25EaXYuYXBwZW5kQ2hpbGQoY2FuQnRuKVxyXG4gICAgICAgIHBvcHVwLmFwcGVuZENoaWxkKGJ1dHRvbkRpdilcclxuXHJcblxyXG5cclxuICAgICAgICB0aGlzLmNvbnRlbnQuYXBwZW5kQ2hpbGQocG9wdXApXHJcblxyXG4gICAgfVxyXG5cclxuICAgIGFkZFRvZG9Qb3AocHJvamVjdFRpdGxlLCB0b2RvRGl2KSB7XHJcbiAgICAgICAgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvdmVybGF5JylcclxuICAgICAgICBvdmVybGF5LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCJcclxuICAgICAgICBvdmVybGF5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBwb3B1cC5yZW1vdmUoKVxyXG4gICAgICAgICAgICBvdmVybGF5LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIlxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgY29uc3QgcG9wdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJylcclxuICAgICAgICBwb3B1cC5jbGFzc0xpc3QuYWRkKCdwb3B1cCcpXHJcbiAgICAgICAgcG9wdXAuaWQgPSAnYWRkVG9kb1BvcCdcclxuXHJcbiAgICAgICAgY29uc3QgcG9wdXBUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJylcclxuICAgICAgICBwb3B1cFRpdGxlLnRleHRDb250ZW50ID0gJ0FkZCBUb2RvJ1xyXG4gICAgICAgIHBvcHVwLmFwcGVuZENoaWxkKHBvcHVwVGl0bGUpXHJcblxyXG4gICAgICAgIGNvbnN0IHRpdGxlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXHJcbiAgICAgICAgdGl0bGVMYWJlbC50ZXh0Q29udGVudCA9ICdUaXRsZSdcclxuICAgICAgICB0aXRsZUxhYmVsLmh0bWxGb3IgPSAndGl0bGVJbnB1dCdcclxuICAgICAgICBwb3B1cC5hcHBlbmRDaGlsZCh0aXRsZUxhYmVsKVxyXG5cclxuICAgICAgICBjb25zdCB0aXRsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxyXG4gICAgICAgIHRpdGxlSW5wdXQudHlwZSA9ICd0ZXh0J1xyXG4gICAgICAgIHRpdGxlSW5wdXQuaWQgPSAndG9kb1RpdGxlaW5wdXQnXHJcbiAgICAgICAgdGl0bGVJbnB1dC5yZXF1aXJlZCA9IFwidHJ1ZVwiXHJcbiAgICAgICAgcG9wdXAuYXBwZW5kQ2hpbGQodGl0bGVJbnB1dClcclxuXHJcbiAgICAgICAgY29uc3QgYnV0dG9uRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgICBidXR0b25EaXYuY2xhc3NMaXN0LmFkZCgnYnRuRGl2JylcclxuICAgICAgICBjb25zdCBhZGRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxyXG4gICAgICAgIGFkZEJ0bi5pbm5lckhUTUwgPSAnQWRkIFRvZG8nXHJcbiAgICAgICAgYWRkQnRuLnR5cGUgPSAnc3VibWl0J1xyXG4gICAgICAgIGFkZEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgICAgICBpZih0aXRsZUlucHV0LnZhbHVlICE9PSBcIlwiKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBTdG9yYWdlLmFkZFRvZG8ocHJvamVjdFRpdGxlLCBuZXcgVG9kbyh0aXRsZUlucHV0LnZhbHVlKSlcclxuICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyUHJvamVjdChTdG9yYWdlLmdldEFwcCgpLmdldFByb2plY3QocHJvamVjdFRpdGxlKSlcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG92ZXJsYXkuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xyXG4gICAgICAgICAgICBwb3B1cC5yZW1vdmUoKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgYnV0dG9uRGl2LmFwcGVuZENoaWxkKGFkZEJ0bilcclxuICAgICAgICBjb25zdCBjYW5CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxyXG4gICAgICAgIGNhbkJ0bi5pbm5lckhUTUwgPSAnQ2FuY2VsJ1xyXG4gICAgICAgIGNhbkJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+ICB7XHJcbiAgICAgICAgICAgIG92ZXJsYXkuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xyXG4gICAgICAgICAgICBwb3B1cC5yZW1vdmUoKVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGJ1dHRvbkRpdi5hcHBlbmRDaGlsZChjYW5CdG4pXHJcbiAgICAgICAgcG9wdXAuYXBwZW5kQ2hpbGQoYnV0dG9uRGl2KVxyXG5cclxuICAgICAgICB0aGlzLmNvbnRlbnQuYXBwZW5kQ2hpbGQocG9wdXApXHJcblxyXG4gICAgfSAgIFxyXG5cclxuICAgIHByb2plY3RFZGl0UG9wKHByb2plY3QpIHtcclxuICAgICAgICBjb25zdCBvdmVybGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ292ZXJsYXknKVxyXG4gICAgICAgIG92ZXJsYXkuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIlxyXG4gICAgICAgIG92ZXJsYXkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHBvcHVwLnJlbW92ZSgpXHJcbiAgICAgICAgICAgIG92ZXJsYXkuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiXHJcbiAgICAgICAgfSlcclxuICAgICAgICBjb25zdCBwb3B1cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgcG9wdXAuaWQgPSAncHJvZGpFZGl0J1xyXG4gICAgICAgIGNvbnN0IHJlbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKVxyXG4gICAgICAgIHJlbmFtZS50ZXh0Q29udGVudCA9IFwiUmVuYW1lIFByb2plY3RcIlxyXG4gICAgICAgIHJlbmFtZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5yZW5hbWVQcm9qZWN0KHByb2plY3QpXHJcbiAgICAgICAgICAgIHBvcHVwLnJlbW92ZSgpXHJcbiAgICAgICAgfSlcclxuICAgICAgICBwb3B1cC5hcHBlbmRDaGlsZChyZW5hbWUpXHJcbiAgICAgICAgY29uc3QgZGVsZXRlUHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJylcclxuICAgICAgICBkZWxldGVQcm9qZWN0LnRleHRDb250ZW50ID0gXCJEZWxldGUgUHJvamVjdFwiXHJcbiAgICAgICAgZGVsZXRlUHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgb3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXHJcbiAgICAgICAgICAgIHBvcHVwLnJlbW92ZSgpXHJcbiAgICAgICAgfSlcclxuICAgICAgICBwb3B1cC5hcHBlbmRDaGlsZChkZWxldGVQcm9qZWN0KVxyXG5cclxuICAgICAgICBjb25zdCBjYW5CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpXHJcbiAgICAgICAgY2FuQnRuLnRleHRDb250ZW50ID0gXCJDYW5jZWxcIlxyXG4gICAgICAgIGNhbkJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgb3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXHJcbiAgICAgICAgICAgIHBvcHVwLnJlbW92ZSgpXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgcG9wdXAuYXBwZW5kQ2hpbGQoY2FuQnRuKVxyXG5cclxuXHJcbiAgICAgICAgdGhpcy5jb250ZW50LmFwcGVuZENoaWxkKHBvcHVwKVxyXG4gICAgfXNcclxuXHJcbiAgICByZW5hbWVQcm9qZWN0KHByb2plY3QpIHtcclxuICAgICAgICBjb25zdCBvdmVybGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ292ZXJsYXknKVxyXG4gICAgICAgIG92ZXJsYXkuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIlxyXG4gICAgICAgIG92ZXJsYXkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHBvcHVwLnJlbW92ZSgpXHJcbiAgICAgICAgICAgIG92ZXJsYXkuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiXHJcbiAgICAgICAgfSlcclxuICAgICAgICBjb25zdCBwb3B1cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKVxyXG4gICAgICAgIHBvcHVwLmNsYXNzTGlzdC5hZGQoJ3BvcHVwJylcclxuICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJylcclxuICAgICAgICB0aXRsZS50ZXh0Q29udGVudCA9IFwiUmVuYW1lIFByb2plY3RcIlxyXG4gICAgICAgIHBvcHVwLmFwcGVuZENoaWxkKHRpdGxlKVxyXG4gICAgICAgIGNvbnN0IHRpdGxlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXHJcbiAgICAgICAgdGl0bGVJbnB1dC50eXBlID0gJ3RleHQnXHJcblxyXG4gICAgICAgIHBvcHVwLmFwcGVuZENoaWxkKHRpdGxlSW5wdXQpXHJcbiAgICAgICAgY29uc3Qgc3VibWl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcclxuICAgICAgICBzdWJtaXRCdG4udHlwZSA9ICdzdWJtaXQnXHJcbiAgICAgICAgc3VibWl0QnRuLmlubmVySFRNTCA9IFwiU3VibWl0XCJcclxuICAgICAgICBzdWJtaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICAgICAgaWYodGl0bGVJbnB1dC52YWx1ZSAhPT0gXCJcIikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb250ZW50LmlubmVySFRNTCA9IFwiXCJcclxuICAgICAgICAgICAgICAgIFN0b3JhZ2UucmVuYW1lUHJvamVjdChwcm9qZWN0LmdldFRpdGxlKCksIHRpdGxlSW5wdXQudmFsdWUpXHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlbmRlclByb2plY3QoU3RvcmFnZS5nZXRBcHAoKS5nZXRQcm9qZWN0KHRpdGxlSW5wdXQudmFsdWUpKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJTaWRlYmFyKClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvdmVybGF5LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcclxuICAgICAgICAgICAgcG9wdXAucmVtb3ZlKClcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBwb3B1cC5hcHBlbmRDaGlsZChzdWJtaXRCdG4pXHJcblxyXG4gICAgICAgIHRoaXMuY29udGVudC5hcHBlbmRDaGlsZChwb3B1cClcclxuICAgIH1cclxuXHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBVSSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIlxyXG5pbXBvcnQgJy4vc3R5bGUuY3NzJ1xyXG5cclxuaW1wb3J0IFN0b3JhZ2UgZnJvbSAnLi9sb2dpYy9zdG9yYWdlJztcclxuaW1wb3J0IEFwcCBmcm9tICcuL2xvZ2ljL2FwcCdcclxuaW1wb3J0IFRhc2sgZnJvbSAnLi9sb2dpYy90YXNrJztcclxuaW1wb3J0IFRvZG8gZnJvbSAnLi9sb2dpYy90b2RvJztcclxuaW1wb3J0IFByb2plY3QgZnJvbSAnLi9sb2dpYy9wcm9qZWN0JztcclxuaW1wb3J0IFVJIGZyb20gXCIuL3VpXCI7XHJcblxyXG5jb25zdCB1aSA9IG5ldyBVSSgpXHJcblxyXG5cclxudWkucmVuZGVyU2lkZWJhcigpXHJcblxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=