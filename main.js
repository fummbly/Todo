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

/***/ "./src/close.png":
/*!***********************!*\
  !*** ./src/close.png ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "96e81c10a9d5f78bda7437b98323d469.png");

/***/ }),

/***/ "./src/dots.png":
/*!**********************!*\
  !*** ./src/dots.png ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "ec5b5ccaa875c41d047a702b61f3332f.png");

/***/ }),

/***/ "./src/menu.png":
/*!**********************!*\
  !*** ./src/menu.png ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "32c13fb6a77fcefd589498442270f540.png");

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
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
  }

  // For old IE
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
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
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
/* harmony import */ var _close_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./close.png */ "./src/close.png");
/* harmony import */ var _dots_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dots.png */ "./src/dots.png");
/* harmony import */ var _menu_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./menu.png */ "./src/menu.png");









class UI {
    constructor() {
        this.content = document.getElementById('content')
        this.sidebar = document.getElementById('sidebar')
        this.menu = document.getElementById('menu')
        this.menu.src = _menu_png__WEBPACK_IMPORTED_MODULE_6__["default"]
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
        todoDelete.src = _close_png__WEBPACK_IMPORTED_MODULE_4__["default"]
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
        threedot.src = _dots_png__WEBPACK_IMPORTED_MODULE_5__["default"]
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
        closeBtn.src = _close_png__WEBPACK_IMPORTED_MODULE_4__["default"]
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZTs7Ozs7Ozs7Ozs7Ozs7QUM1RmY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWU7Ozs7Ozs7Ozs7Ozs7O0FDdkNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFDZ0I7QUFDQTtBQUNNO0FBQ0E7QUFDTjtBQUNGO0FBQ0E7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsaURBQUk7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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Q0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ29CO0FBQ3BCO0FBQ3NDO0FBQ1Q7QUFDRztBQUNBO0FBQ007QUFDaEI7QUFDdEI7QUFDQSxlQUFlLDJDQUFFO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvY2xvc2UucG5nIiwid2VicGFjazovL3RvZG8vLi9zcmMvZG90cy5wbmciLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9tZW51LnBuZyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9sb2dpYy9hcHAuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9sb2dpYy9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvbG9naWMvc3RvcmFnZS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2xvZ2ljL3Rhc2suanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9sb2dpYy90b2RvLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvdWkuanMiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXHJcXG4gICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuKiB7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbiNvdmVybGF5IHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB3aWR0aDogMTAwdnc7XFxyXFxuICAgIGhlaWdodDogMTAwdmg7XFxyXFxuICAgIHotaW5kZXg6IDI7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbiN0aXRsZUJhciB7XFxyXFxuICAgIHBhZGRpbmc6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5idXR0b25Db250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxufVxcclxcblxcclxcbi5pY29uIHtcXHJcXG4gICAgaGVpZ2h0OiAycmVtO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5zbWwge1xcclxcbiAgICBoZWlnaHQ6IDFyZW07XFxyXFxufVxcclxcblxcclxcbiNjb250ZW50IHtcXHJcXG4gICAgd2lkdGg6IDEwMHZ3O1xcclxcbn1cXHJcXG5cXHJcXG4jc2lkZWJhciB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICBsZWZ0OiAtMTAwJTtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjVzO1xcclxcbiAgICB6LWluZGV4OiAzO1xcclxcbn1cXHJcXG5cXHJcXG4jc2lkZWJhciA+ICoge1xcclxcbiAgICBtYXJnaW46IDFyZW07XFxyXFxuICAgIFxcclxcbn1cXHJcXG5cXHJcXG4jcHJvamVjdERpdiA+ICoge1xcclxcbiAgICBwYWRkaW5nOiAuNXJlbSAwO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbiNwcm9qZWN0RGl2ID4gKjpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Ymx1ZTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLnByb2plY3RDb250ZW50IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC13cmFwOiBub3dyYXA7XFxyXFxuICAgIG92ZXJmbG93LXg6IGF1dG87XFxyXFxuXFxyXFxuICAgIC1tcy1vdmVyZmxvdy1zdHlsZTogbm9uZTtcXHJcXG4gICAgc2Nyb2xsYmFyLXdpZHRoOiBub25lO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0Q29udGVudDo6LXdlYmtpdC1zY3JvbGxiYXIge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uZG90cyB7XFxyXFxuICAgIGhlaWdodDogMi41cmVtO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0IHtcXHJcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTYyMDIwNzQxODMwMi00MzliMzg3NDQxYjA/aXhsaWI9cmItNC4wLjMmaXhpZD1Nbnd4TWpBM2ZEQjhNSHh3YUc5MGJ5MXdZV2RsZkh4OGZHVnVmREI4Zkh4OCZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTk2NyZxPTgwXFxcIik7XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwdmg7XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbi50b2RvLCAucHJvamVjdFRpdGxlLCAuYWRkVG9kbyB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kbyB7XFxyXFxuICAgIGZsZXg6IDAgMCBhdXRvO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBib3gtc2hhZG93OiA1cHggNXB4IDIwcHggcmdiYSgwLDAsMCwwLjI1KTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogLjVyZW07XFxyXFxuICAgIHdpZHRoOiAyMHJlbTtcXHJcXG4gICAgbWF4LWhlaWdodDogODAlO1xcclxcbiAgICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgICBtYXJnaW46IDFyZW07XFxyXFxuICAgIGFsaWduLXNlbGY6IHNlbGYtc3RhcnQ7XFxyXFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxyXFxuXFxyXFxuICAgIC1tcy1vdmVyZmxvdy1zdHlsZTogbm9uZTtcXHJcXG4gICAgc2Nyb2xsYmFyLXdpZHRoOiAycHg7XFxyXFxufVxcclxcblxcclxcbi50b2RvOjotd2Via2l0LXNjcm9sbGJhciB7XFxyXFxuICAgIHdpZHRoOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4udG9kbzo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTIxMjEyO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG86Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogLjVyZW07XFxyXFxufVxcclxcblxcclxcbi5hZGRUb2RvIHtcXHJcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgICBtaW4td2lkdGg6IDEwcmVtO1xcclxcbiAgICBoZWlnaHQ6IDEwcmVtO1xcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZCBnYWluc2Jvcm87XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IC41cmVtO1xcclxcbiAgICBwYWRkaW5nOiAuNXJlbSAxcmVtO1xcclxcbiAgICBtYXJnaW46IDFyZW07XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2sge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQgZ2FpbnNib3JvO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAuNXJlbTtcXHJcXG4gICAgcGFkZGluZzogLjVyZW0gMXJlbTtcXHJcXG4gICAgbWFyZ2luOiAxcmVtIGF1dG87XFxyXFxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4yNXMsIGJvcmRlci1jb2xvciAwLjI1cztcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2tEYXRlIHtcXHJcXG4gICAgZm9udC1zaXplOiAuNzVyZW07XFxyXFxuICAgIGNvbG9yOiBncmV5O1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuIHtcXHJcXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQgZ2FpbnNib3JvO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAuNXJlbTtcXHJcXG4gICAgcGFkZGluZzogLjVyZW0gMXJlbTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXAge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogMTAlO1xcclxcbiAgICBsZWZ0OiA1MCU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIHdpZHRoOiAxMHJlbTtcXHJcXG4gICAgcGFkZGluZzogMXJlbTtcXHJcXG4gICAgYm94LXNoYWRvdzogNXB4IDVweCAyMHB4IHJnYmEoMCwwLDAsIDAuMjUpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAuNXJlbTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC03cmVtLCAwKTtcXHJcXG4gICAgei1pbmRleDogMztcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwID4gaW5wdXQsIC5wb3B1cCA+IGgyIHtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogLjVyZW07XFxyXFxufVxcclxcblxcclxcbi5idG5EaXYge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bkRpdiBidXR0b24ge1xcclxcbiAgICB3aWR0aDogNTAlO1xcclxcbiAgICBwYWRkaW5nOiAuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3RUaXRsZSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgbWFyZ2luOiAxcmVtO1xcclxcbiAgICBib3gtc2hhZG93OiA1cHggNXB4IDIwcHggcmdiYSgwLDAsMCwwLjI1KTtcXHJcXG4gICAgcGFkZGluZzogMXJlbSAycmVtO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kb0RpdiB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxufVxcclxcblxcclxcbi5kb25lIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmVlbjtcXHJcXG4gICAgYm9yZGVyLWNvbG9yOiBtZWRpdW1zZWFncmVlbjtcXHJcXG59XFxyXFxuXFxyXFxuLnJlZCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Y29yYWw7XFxyXFxuICAgIGJvcmRlci1jb2xvcjogbWFyb29uO1xcclxcbn1cXHJcXG5cXHJcXG4jcHJvZGpFZGl0IHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICByaWdodDogMnJlbTtcXHJcXG4gICAgdG9wOiA2cmVtO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgcGFkZGluZzogLjVyZW0gMXJlbTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogLjVyZW07XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgei1pbmRleDogMztcXHJcXG59XFxyXFxuI3Byb2RqRWRpdCA+ICoge1xcclxcbiAgICBwYWRkaW5nOiAxcmVtIC41cmVtO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IC41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jcHJvZGpFZGl0ID4gKjpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Ymx1ZTtcXHJcXG59XFxyXFxuXFxyXFxuLnNob3cge1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxMDAlLCAwKTtcXHJcXG59XFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHNCQUFzQjtBQUMxQjs7O0FBR0E7SUFDSSxVQUFVO0lBQ1YsU0FBUztBQUNiOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixnQkFBZ0I7SUFDaEIsc0JBQXNCOztBQUUxQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osYUFBYTtJQUNiLFVBQVU7SUFDVixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sV0FBVztJQUNYLGNBQWM7SUFDZCx1QkFBdUI7SUFDdkIsV0FBVztJQUNYLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsVUFBVTtBQUNkOztBQUVBO0lBQ0ksWUFBWTs7QUFFaEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsc0JBQXNCO0lBQ3RCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSwyQkFBMkI7QUFDL0I7OztBQUdBO0lBQ0ksYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixnQkFBZ0I7O0lBRWhCLHdCQUF3QjtJQUN4QixxQkFBcUI7SUFDckIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHNMQUFzTDtJQUN0TCwyQkFBMkI7SUFDM0Isc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWCxhQUFhO0lBQ2IsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsc0JBQXNCO0lBQ3RCLDhCQUE4QjtJQUM5Qix5Q0FBeUM7SUFDekMsb0JBQW9CO0lBQ3BCLFlBQVk7SUFDWixlQUFlO0lBQ2YsYUFBYTtJQUNiLFlBQVk7SUFDWixzQkFBc0I7SUFDdEIsZ0JBQWdCOztJQUVoQix3QkFBd0I7SUFDeEIsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYiwyQkFBMkI7SUFDM0Isb0JBQW9CO0lBQ3BCLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw2QkFBNkI7SUFDN0Isc0JBQXNCO0lBQ3RCLDJCQUEyQjtJQUMzQixvQkFBb0I7SUFDcEIsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixzREFBc0Q7QUFDMUQ7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsV0FBVztBQUNmOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLDJCQUEyQjtJQUMzQix5QkFBeUI7SUFDekIsb0JBQW9CO0lBQ3BCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixTQUFTO0lBQ1QsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osYUFBYTtJQUNiLDBDQUEwQztJQUMxQyxvQkFBb0I7SUFDcEIsdUJBQXVCO0lBQ3ZCLDhCQUE4QjtJQUM5QixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsV0FBVztBQUNmOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1oseUNBQXlDO0lBQ3pDLGtCQUFrQjtJQUNsQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksNEJBQTRCO0lBQzVCLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLDRCQUE0QjtJQUM1QixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFNBQVM7SUFDVCx1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsVUFBVTtBQUNkO0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLDZCQUE2QjtBQUNqQ1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XFxyXFxufVxcclxcblxcclxcblxcclxcbioge1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG4jb3ZlcmxheSB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgICB6LWluZGV4OiAyO1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4jdGl0bGVCYXIge1xcclxcbiAgICBwYWRkaW5nOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uYnV0dG9uQ29udGFpbmVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbn1cXHJcXG5cXHJcXG4uaWNvbiB7XFxyXFxuICAgIGhlaWdodDogMnJlbTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uc21sIHtcXHJcXG4gICAgaGVpZ2h0OiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jY29udGVudCB7XFxyXFxuICAgIHdpZHRoOiAxMDB2dztcXHJcXG59XFxyXFxuXFxyXFxuI3NpZGViYXIge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgbGVmdDogLTEwMCU7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC41cztcXHJcXG4gICAgei1pbmRleDogMztcXHJcXG59XFxyXFxuXFxyXFxuI3NpZGViYXIgPiAqIHtcXHJcXG4gICAgbWFyZ2luOiAxcmVtO1xcclxcbiAgICBcXHJcXG59XFxyXFxuXFxyXFxuI3Byb2plY3REaXYgPiAqIHtcXHJcXG4gICAgcGFkZGluZzogLjVyZW0gMDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4jcHJvamVjdERpdiA+ICo6aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGJsdWU7XFxyXFxufVxcclxcblxcclxcblxcclxcbi5wcm9qZWN0Q29udGVudCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtd3JhcDogbm93cmFwO1xcclxcbiAgICBvdmVyZmxvdy14OiBhdXRvO1xcclxcblxcclxcbiAgICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7XFxyXFxuICAgIHNjcm9sbGJhci13aWR0aDogbm9uZTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdENvbnRlbnQ6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmRvdHMge1xcclxcbiAgICBoZWlnaHQ6IDIuNXJlbTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdCB7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE2MjAyMDc0MTgzMDItNDM5YjM4NzQ0MWIwP2l4bGliPXJiLTQuMC4zJml4aWQ9TW53eE1qQTNmREI4TUh4d2FHOTBieTF3WVdkbGZIeDhmR1Z1ZkRCOGZIeDgmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz05NjcmcT04MFxcXCIpO1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kbywgLnByb2plY3RUaXRsZSwgLmFkZFRvZG8ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8ge1xcclxcbiAgICBmbGV4OiAwIDAgYXV0bztcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC13cmFwOiBub3dyYXA7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgYm94LXNoYWRvdzogNXB4IDVweCAyMHB4IHJnYmEoMCwwLDAsMC4yNSk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IC41cmVtO1xcclxcbiAgICB3aWR0aDogMjByZW07XFxyXFxuICAgIG1heC1oZWlnaHQ6IDgwJTtcXHJcXG4gICAgcGFkZGluZzogMXJlbTtcXHJcXG4gICAgbWFyZ2luOiAxcmVtO1xcclxcbiAgICBhbGlnbi1zZWxmOiBzZWxmLXN0YXJ0O1xcclxcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcclxcblxcclxcbiAgICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7XFxyXFxuICAgIHNjcm9sbGJhci13aWR0aDogMnB4O1xcclxcbn1cXHJcXG5cXHJcXG4udG9kbzo6LXdlYmtpdC1zY3JvbGxiYXIge1xcclxcbiAgICB3aWR0aDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG86Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzEyMTIxMjtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogLjVyZW07XFxyXFxufVxcclxcblxcclxcbi50b2RvOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IC41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkVG9kbyB7XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gICAgbWluLXdpZHRoOiAxMHJlbTtcXHJcXG4gICAgaGVpZ2h0OiAxMHJlbTtcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQgZ2FpbnNib3JvO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAuNXJlbTtcXHJcXG4gICAgcGFkZGluZzogLjVyZW0gMXJlbTtcXHJcXG4gICAgbWFyZ2luOiAxcmVtO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi50YXNrIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGdhaW5zYm9ybztcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogLjVyZW07XFxyXFxuICAgIHBhZGRpbmc6IC41cmVtIDFyZW07XFxyXFxuICAgIG1hcmdpbjogMXJlbSBhdXRvO1xcclxcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMjVzLCBib3JkZXItY29sb3IgMC4yNXM7XFxyXFxufVxcclxcblxcclxcbi50YXNrRGF0ZSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogLjc1cmVtO1xcclxcbiAgICBjb2xvcjogZ3JleTtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0biB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDFyZW07XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGdhaW5zYm9ybztcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogLjVyZW07XFxyXFxuICAgIHBhZGRpbmc6IC41cmVtIDFyZW07XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0b3A6IDEwJTtcXHJcXG4gICAgbGVmdDogNTAlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICB3aWR0aDogMTByZW07XFxyXFxuICAgIHBhZGRpbmc6IDFyZW07XFxyXFxuICAgIGJveC1zaGFkb3c6IDVweCA1cHggMjBweCByZ2JhKDAsMCwwLCAwLjI1KTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogLjVyZW07XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtN3JlbSwgMCk7XFxyXFxuICAgIHotaW5kZXg6IDM7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cCA+IGlucHV0LCAucG9wdXAgPiBoMiB7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IC41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuRGl2IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5idG5EaXYgYnV0dG9uIHtcXHJcXG4gICAgd2lkdGg6IDUwJTtcXHJcXG4gICAgcGFkZGluZzogLjVyZW07XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0VGl0bGUge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIG1hcmdpbjogMXJlbTtcXHJcXG4gICAgYm94LXNoYWRvdzogNXB4IDVweCAyMHB4IHJnYmEoMCwwLDAsMC4yNSk7XFxyXFxuICAgIHBhZGRpbmc6IDFyZW0gMnJlbTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG9EaXYge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbn1cXHJcXG5cXHJcXG4uZG9uZSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JlZW47XFxyXFxuICAgIGJvcmRlci1jb2xvcjogbWVkaXVtc2VhZ3JlZW47XFxyXFxufVxcclxcblxcclxcbi5yZWQge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGNvcmFsO1xcclxcbiAgICBib3JkZXItY29sb3I6IG1hcm9vbjtcXHJcXG59XFxyXFxuXFxyXFxuI3Byb2RqRWRpdCB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgcmlnaHQ6IDJyZW07XFxyXFxuICAgIHRvcDogNnJlbTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICAgIHBhZGRpbmc6IC41cmVtIDFyZW07XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IC41cmVtO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIHotaW5kZXg6IDM7XFxyXFxufVxcclxcbiNwcm9kakVkaXQgPiAqIHtcXHJcXG4gICAgcGFkZGluZzogMXJlbSAuNXJlbTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI3Byb2RqRWRpdCA+ICo6aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGJsdWU7XFxyXFxufVxcclxcblxcclxcbi5zaG93IHtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTAwJSwgMCk7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjk2ZTgxYzEwYTlkNWY3OGJkYTc0MzdiOTgzMjNkNDY5LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJlYzViNWNjYWE4NzVjNDFkMDQ3YTcwMmI2MWYzMzMyZi5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiMzJjMTNmYjZhNzdmY2VmZDU4OTQ5ODQ0MjI3MGY1NDAucG5nXCI7IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjbGFzcyBBcHAge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5wcm9qZWN0cyA9IFtdXHJcbiAgICB9XHJcblxyXG4gICAgYWRkUHJvamVjdChuZXdQcm9qZWN0KSB7XHJcbiAgICAgICAgaWYodGhpcy5wcm9qZWN0cy5maW5kKChwcm9qZWN0KSA9PiBwcm9qZWN0LmdldFRpdGxlKCkgPT09IG5ld1Byb2plY3QuZ2V0VGl0bGUoKSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMucHJvamVjdHMucHVzaChuZXdQcm9qZWN0KVxyXG4gICAgfVxyXG5cclxuICAgIGdldFByb2plY3QocHJvamVjdE5hbWUpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wcm9qZWN0cy5maW5kKChwcm9qZWN0KSA9PiBwcm9qZWN0LmdldFRpdGxlKCkgPT09IHByb2plY3ROYW1lKVxyXG4gICAgfVxyXG5cclxuICAgIGdldFByb2plY3RzKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnByb2plY3RzXHJcbiAgICB9XHJcblxyXG4gICAgc2V0UHJvamVjdHMocHJvamVjdHMpIHtcclxuICAgICAgICB0aGlzLnByb2plY3RzID0gcHJvamVjdHNcclxuICAgIH1cclxuXHJcbiAgICBkZWxldGVQcm9qZWN0KHByb2plY3ROYW1lKSB7XHJcbiAgICAgICAgY29uc3QgcHJvamVjdFRvRGVsZXRlID0gdGhpcy5nZXRQcm9qZWN0KHByb2plY3ROYW1lKVxyXG5cclxuICAgICAgICB0aGlzLnByb2plY3RzLnNwbGljZSh0aGlzLnByb2plY3RzLmluZGV4T2YocHJvamVjdFRvRGVsZXRlKSwgMSlcclxuICAgIH1cclxuXHJcbiAgICBkZWxldGVUb2RvKHByb2plY3ROYW1lLCB0b2RvTmFtZSkge1xyXG4gICAgICAgIGNvbnN0IHByb2plY3QgPSB0aGlzLmdldFByb2plY3QocHJvamVjdE5hbWUpXHJcblxyXG4gICAgICAgIHByb2plY3QuZGVsZXRlVG9kbyh0b2RvTmFtZSlcclxuICAgIH1cclxuXHJcbiAgICBkZWxldGVUYXNrcyhwcm9qZWN0TmFtZSwgdG9kb05hbWUpIHtcclxuICAgICAgICBjb25zdCB0b2RvID0gdGhpcy5nZXRQcm9qZWN0KHByb2plY3ROYW1lKS5nZXRUb2RvKHRvZG9OYW1lKVxyXG5cclxuICAgICAgICB0b2RvLmRlbGV0ZVRhc2tzKClcclxuICAgIH1cclxuXHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcHAiLCJjbGFzcyBQcm9qZWN0IHtcclxuICAgIGNvbnN0cnVjdG9yKHRpdGxlKSB7XHJcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xyXG4gICAgICAgIHRoaXMudG9kb3MgPSBbXVxyXG4gICAgfVxyXG5cclxuICAgIGdldFRpdGxlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRpdGxlXHJcbiAgICB9XHJcblxyXG4gICAgc2V0VGl0bGUodGl0bGUpIHtcclxuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGVcclxuICAgIH1cclxuXHJcblxyXG4gICAgYWRkVG9kbyhuZXdUb2RvKSB7XHJcbiAgICAgICAgaWYodGhpcy50b2Rvcy5maW5kKCh0b2RvKSA9PiB0b2RvLmdldFRpdGxlKCkgPT09IG5ld1RvZG8uZ2V0VGl0bGUoKSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnRvZG9zLnB1c2gobmV3VG9kbylcclxuICAgIH1cclxuXHJcbiAgICBnZXRUb2RvKHRvZG9OYW1lKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudG9kb3MuZmluZCgodG9kbykgPT4gdG9kby5nZXRUaXRsZSgpID09PSB0b2RvTmFtZSlcclxuICAgIH1cclxuXHJcbiAgICBnZXRUb2RvcygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50b2Rvc1xyXG4gICAgfVxyXG5cclxuICAgIHNldFRvZG9zKHRvZG9zKSB7XHJcbiAgICAgICAgdGhpcy50b2RvcyA9IHRvZG9zXHJcbiAgICB9XHJcblxyXG4gICAgZGVsZXRlVG9kbyh0b2RvTmFtZSkge1xyXG4gICAgICAgIGNvbnN0IHRvZG9Ub0RlbGV0ZSA9IHRoaXMudG9kb3MuZmluZCgodG9kbykgPT4gdG9kby5nZXRUaXRsZSgpID09PSB0b2RvTmFtZSlcclxuXHJcbiAgICAgICAgdGhpcy50b2Rvcy5zcGxpY2UodGhpcy50b2Rvcy5pbmRleE9mKHRvZG9Ub0RlbGV0ZSksIDEpXHJcbiAgICB9XHJcblxyXG4gICAgZGVsZXRlXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2plY3QiLCJpbXBvcnQgQXBwIGZyb20gXCIuL2FwcFwiO1xyXG5pbXBvcnQgUHJvamVjdCBmcm9tIFwiLi9wcm9qZWN0XCI7XHJcbmltcG9ydCBUYXNrIGZyb20gXCIuL3Rhc2tcIjtcclxuaW1wb3J0IFRvZG8gZnJvbSBcIi4vdG9kb1wiO1xyXG5cclxuY2xhc3MgU3RvcmFnZSB7XHJcbiAgICBzdGF0aWMgc2F2ZUFwcChkYXRhKSB7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2FwcCcsIEpTT04uc3RyaW5naWZ5KGRhdGEpKVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXRBcHAoKSB7XHJcbiAgICAgICAgY29uc3QgYXBwID0gT2JqZWN0LmFzc2lnbihuZXcgQXBwKCksIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FwcCcpKSlcclxuXHJcbiAgICAgICAgYXBwLnNldFByb2plY3RzKFxyXG4gICAgICAgICAgICBhcHAuZ2V0UHJvamVjdHMoKS5tYXAoKHByb2plY3QpID0+IE9iamVjdC5hc3NpZ24obmV3IFByb2plY3QoKSwgcHJvamVjdCkpXHJcbiAgICAgICAgKVxyXG5cclxuICAgICAgICBhcHAuZ2V0UHJvamVjdHMoKS5mb3JFYWNoKChwcm9qZWN0KSA9PiBcclxuICAgICAgICAgICAgcHJvamVjdC5zZXRUb2Rvcyhwcm9qZWN0LmdldFRvZG9zKCkubWFwKCh0b2RvKSA9PiBPYmplY3QuYXNzaWduKG5ldyBUb2RvKCksIHRvZG8pKSkpXHJcblxyXG4gICAgICAgIGFwcC5nZXRQcm9qZWN0cygpLmZvckVhY2goKHByb2plY3QpID0+IFxyXG4gICAgICAgICAgICBwcm9qZWN0LmdldFRvZG9zKCkuZm9yRWFjaCgodG9kbykgPT4gXHJcbiAgICAgICAgICAgICAgICB0b2RvLnNldFRhc2tzKHRvZG8uZ2V0VGFza3MoKS5tYXAoKHRhc2spID0+IE9iamVjdC5hc3NpZ24obmV3IFRhc2ssIHRhc2spKSkpKVxyXG5cclxuICAgICAgICByZXR1cm4gYXBwO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBhZGRQcm9qZWN0KHByb2plY3QpIHtcclxuICAgICAgICBjb25zdCBhcHAgPSBTdG9yYWdlLmdldEFwcCgpXHJcbiAgICAgICAgYXBwLmFkZFByb2plY3QocHJvamVjdClcclxuICAgICAgICBTdG9yYWdlLnNhdmVBcHAoYXBwKVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBhZGRUb2RvKHByb2plY3ROYW1lLCB0b2RvKSB7XHJcbiAgICAgICAgY29uc3QgYXBwID0gU3RvcmFnZS5nZXRBcHAoKVxyXG4gICAgICAgIGFwcC5nZXRQcm9qZWN0KHByb2plY3ROYW1lKS5hZGRUb2RvKHRvZG8pXHJcbiAgICAgICAgU3RvcmFnZS5zYXZlQXBwKGFwcClcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgYWRkVGFzayhwcm9qZWN0TmFtZSwgdG9kb05hbWUsIHRhc2spIHtcclxuICAgICAgICBjb25zdCBhcHAgPSBTdG9yYWdlLmdldEFwcCgpXHJcbiAgICAgICAgYXBwLmdldFByb2plY3QocHJvamVjdE5hbWUpLmdldFRvZG8odG9kb05hbWUpLmFkZFRhc2sodGFzaylcclxuICAgICAgICBTdG9yYWdlLnNhdmVBcHAoYXBwKVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyByZW5hbWVQcm9qZWN0KHByb2plY3ROYW1lLCBuZXdQcm9qZWN0TmFtZSkge1xyXG4gICAgICAgIGNvbnN0IGFwcCA9IFN0b3JhZ2UuZ2V0QXBwKClcclxuICAgICAgICBhcHAuZ2V0UHJvamVjdChwcm9qZWN0TmFtZSkuc2V0VGl0bGUobmV3UHJvamVjdE5hbWUpXHJcbiAgICAgICAgU3RvcmFnZS5zYXZlQXBwKGFwcClcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgcmVuYW1lVG9kbyhwcm9qZWN0TmFtZSwgdG9kb05hbWUsIG5ld1RvZG9OYW1lKSB7XHJcbiAgICAgICAgY29uc3QgYXBwID0gU3RvcmFnZS5nZXRBcHAoKVxyXG4gICAgICAgIGFwcC5nZXRQcm9qZWN0KHByb2plY3ROYW1lKS5nZXRUb2RvKHRvZG9OYW1lKS5zZXRUaXRsZShuZXdUb2RvTmFtZSlcclxuICAgICAgICBTdG9yYWdlLnNhdmVBcHAoYXBwKVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyByZW5hbWVUYXNrKHByb2plY3ROYW1lLCB0b2RvTmFtZSwgdGFza05hbWUsIG5ld1Rhc2tOYW1lKSB7XHJcbiAgICAgICAgY29uc3QgYXBwID0gU3RvcmFnZS5nZXRBcHAoKVxyXG4gICAgICAgIGFwcC5nZXRQcm9qZWN0KHByb2plY3ROYW1lKS5nZXRUb2RvKHRvZG9OYW1lKS5nZXRUYXNrKHRhc2tOYW1lKS5zZXRUaXRsZShuZXdUYXNrTmFtZSlcclxuICAgICAgICBTdG9yYWdlLnNhdmVBcHAoYXBwKVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBjaGFuZ2VEb25lKHByb2plY3ROYW1lLCB0b2RvTmFtZSwgdGFza05hbWUpIHtcclxuICAgICAgICBjb25zdCBhcHAgPSBTdG9yYWdlLmdldEFwcCgpXHJcbiAgICAgICAgYXBwLmdldFByb2plY3QocHJvamVjdE5hbWUpLmdldFRvZG8odG9kb05hbWUpLmdldFRhc2sodGFza05hbWUpLmNoYW5nZURvbmUoKVxyXG4gICAgICAgIFN0b3JhZ2Uuc2F2ZUFwcChhcHApXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGRlbGV0ZVByb2plY3QocHJvamVjdE5hbWUpIHtcclxuICAgICAgICBjb25zdCBhcHAgPSBTdG9yYWdlLmdldEFwcCgpXHJcbiAgICAgICAgYXBwLmRlbGV0ZVByb2plY3QocHJvamVjdE5hbWUpXHJcbiAgICAgICAgU3RvcmFnZS5zYXZlQXBwKGFwcClcclxuICAgIH1cclxuICAgIFxyXG5cclxuICAgIHN0YXRpYyBkZWxldGVUb2RvKHByb2plY3ROYW1lLCB0b2RvTmFtZSkge1xyXG4gICAgICAgIGNvbnN0IGFwcCA9IFN0b3JhZ2UuZ2V0QXBwKClcclxuICAgICAgICBhcHAuZGVsZXRlVG9kbyhwcm9qZWN0TmFtZSwgdG9kb05hbWUpXHJcbiAgICAgICAgU3RvcmFnZS5zYXZlQXBwKGFwcClcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZGVsZXRlVGFzayhwcm9qZWN0TmFtZSwgdG9kb05hbWUpIHtcclxuICAgICAgICBjb25zdCBhcHAgPSBTdG9yYWdlLmdldEFwcCgpXHJcbiAgICAgICAgYXBwLmRlbGV0ZVRhc2tzKHByb2plY3ROYW1lLCB0b2RvTmFtZSlcclxuICAgICAgICBTdG9yYWdlLnNhdmVBcHAoYXBwKVxyXG4gICAgfVxyXG5cclxuXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBTdG9yYWdlIiwiY2xhc3MgVGFzayB7XHJcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzYyA9ICcnLCBkdWVkYXRlID0gJycpIHtcclxuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XHJcbiAgICAgICAgdGhpcy5kZXNjID0gZGVzYztcclxuICAgICAgICB0aGlzLmR1ZWRhdGUgPSBkdWVkYXRlXHJcbiAgICAgICAgdGhpcy5kb25lID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VGl0bGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudGl0bGU7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0VGl0bGUodmFsdWUpIHtcclxuICAgICAgICB0aGlzLnRpdGxlID0gdmFsdWVcclxuICAgIH1cclxuXHJcbiAgICBnZXREZXNjKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmRlc2M7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0RGVzYyh2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuZGVzYyA9IHZhbHVlXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0RHVlRGF0ZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5kdWVkYXRlXHJcbiAgICB9XHJcblxyXG4gICAgc2V0RHVlRGF0ZSh2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuZHVlZGF0ZSA9IHZhbHVlXHJcbiAgICB9XHJcblxyXG4gICAgXHJcblxyXG4gICAgY2hhbmdlRG9uZSgpIHtcclxuICAgICAgICB0aGlzLmRvbmUgPSAhdGhpcy5kb25lXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRhc2siLCJcclxuXHJcbmNsYXNzIFRvZG8ge1xyXG4gICAgY29uc3RydWN0b3IodGl0bGUpIHtcclxuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGVcclxuICAgICAgICB0aGlzLnRhc2tzID0gW11cclxuICAgIH1cclxuICAgIFxyXG4gICAgZ2V0VGl0bGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudGl0bGU7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0VGl0bGUodmFsdWUpIHtcclxuICAgICAgICB0aGlzLnRpdGxlID0gdmFsdWVcclxuICAgIH1cclxuXHJcbiAgICBhZGRUYXNrKHRhc2spIHtcclxuICAgICAgICB0aGlzLnRhc2tzLnB1c2godGFzaylcclxuICAgIH1cclxuXHJcbiAgICBnZXRUYXNrKHRhc2tUaXRsZSkge1xyXG4gICAgICAgcmV0dXJuIHRoaXMudGFza3MuZmluZCgodGFzaykgPT4gdGFzay5nZXRUaXRsZSgpID09PSB0YXNrVGl0bGUpXHJcblxyXG4gICAgfVxyXG5cclxuICAgIGdldFRhc2tzKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRhc2tzXHJcbiAgICB9XHJcbiAgICBzZXRUYXNrcyh0YXNrcykge1xyXG4gICAgICAgIHRoaXMudGFza3MgPSB0YXNrc1xyXG4gICAgfVxyXG5cclxuICAgIGRlbGV0ZVRhc2tzKCkge1xyXG4gICAgICAgIHRoaXMudGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xyXG4gICAgICAgICAgICBpZih0YXNrLmRvbmUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudGFza3Muc3BsaWNlKHRoaXMudGFza3MuaW5kZXhPZih0YXNrKSwgMSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBUb2RvIiwiaW1wb3J0IFRhc2sgZnJvbSBcIi4vbG9naWMvdGFza1wiXHJcbmltcG9ydCBUb2RvIGZyb20gXCIuL2xvZ2ljL3RvZG9cIlxyXG5pbXBvcnQgUHJvamVjdCBmcm9tIFwiLi9sb2dpYy9wcm9qZWN0XCJcclxuaW1wb3J0IFN0b3JhZ2UgZnJvbSBcIi4vbG9naWMvc3RvcmFnZVwiXHJcbmltcG9ydCBDbG9zZSBmcm9tICcuL2Nsb3NlLnBuZydcclxuaW1wb3J0IERvdHMgZnJvbSAnLi9kb3RzLnBuZydcclxuaW1wb3J0IE1lbnUgZnJvbSAnLi9tZW51LnBuZydcclxuXHJcblxyXG5jbGFzcyBVSSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpXHJcbiAgICAgICAgdGhpcy5zaWRlYmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NpZGViYXInKVxyXG4gICAgICAgIHRoaXMubWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZW51JylcclxuICAgICAgICB0aGlzLm1lbnUuc3JjID0gTWVudVxyXG4gICAgICAgIHRoaXMubWVudS5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNpZGViYXIuY2xhc3NMaXN0LmFkZCgnc2hvdycpXHJcbiAgICAgICAgICAgIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb3ZlcmxheScpXHJcbiAgICAgICAgICAgIG92ZXJsYXkuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIlxyXG4gICAgICAgICAgICBvdmVybGF5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zaWRlYmFyLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3cnKVxyXG4gICAgICAgICAgICAgICAgb3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCJcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyVG9kbyhwcm9qZWN0VGl0bGUsIHRvZG8pIHtcclxuICAgICAgICBjb25zdCB0b2RvRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgICB0b2RvRGl2LmNsYXNzTGlzdC5hZGQoJ3RvZG8nKVxyXG4gICAgICAgIGNvbnN0IHRvZG9UaXRsZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcclxuICAgICAgICB0b2RvVGl0bGVEaXYuY2xhc3NMaXN0LmFkZCgnYnV0dG9uQ29udGFpbmVyJylcclxuICAgICAgICBjb25zdCB0b2RvVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpXHJcbiAgICAgICAgdG9kb1RpdGxlLnRleHRDb250ZW50ICA9IHRvZG8udGl0bGU7XHJcbiAgICAgICAgdG9kb1RpdGxlRGl2LmFwcGVuZENoaWxkKHRvZG9UaXRsZSlcclxuICAgICAgICBjb25zdCB0b2RvRGVsZXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcclxuICAgICAgICB0b2RvRGVsZXRlLmNsYXNzTGlzdC5hZGQoJ2ljb24nKVxyXG4gICAgICAgIHRvZG9EZWxldGUuY2xhc3NMaXN0LmFkZCgnc21sJylcclxuICAgICAgICB0b2RvRGVsZXRlLnNyYyA9IENsb3NlXHJcbiAgICAgICAgdG9kb1RpdGxlRGl2LmFwcGVuZENoaWxkKHRvZG9EZWxldGUpXHJcbiAgICAgICAgdG9kb0Rpdi5hcHBlbmRDaGlsZCh0b2RvVGl0bGVEaXYpXHJcbiAgICAgICAgY29uc3QgdGFza0hvbGRlckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgdGhpcy5yZW5kZXJUYXNrcyhwcm9qZWN0VGl0bGUsIHRvZG8uZ2V0VGl0bGUoKSwgdG9kby50YXNrcywgdGFza0hvbGRlckRpdilcclxuICAgICAgICB0b2RvRGl2LmFwcGVuZENoaWxkKHRhc2tIb2xkZXJEaXYpXHJcbiAgICAgICAgY29uc3QgYWRkVGFza0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXHJcbiAgICAgICAgYWRkVGFza0J0bi5pbm5lckhUTUwgPSBcIkFkZCBUYXNrXCJcclxuICAgICAgICBhZGRUYXNrQnRuLmNsYXNzTGlzdC5hZGQoJ2J0bicpXHJcbiAgICAgICAgYWRkVGFza0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5hZGRUYXNrUG9wKHByb2plY3RUaXRsZSwgdG9kby5nZXRUaXRsZSgpLCB0YXNrSG9sZGVyRGl2KVxyXG4gICAgICAgIH0pXHJcblxyXG5cclxuICAgICAgICB0b2RvRGl2LmFwcGVuZENoaWxkKGFkZFRhc2tCdG4pXHJcblxyXG4gICAgICAgIGNvbnN0IHJlbW92ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXHJcbiAgICAgICAgcmVtb3ZlQnRuLmlubmVySFRNTCA9ICdSZW1vdmUgRG9uZSBUYXNrcydcclxuICAgICAgICByZW1vdmVCdG4uY2xhc3NMaXN0LmFkZCgnYnRuJylcclxuICAgICAgICByZW1vdmVCdG4uY2xhc3NMaXN0LmFkZCgncmVkJylcclxuICAgICAgICByZW1vdmVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIFN0b3JhZ2UuZGVsZXRlVGFzayhwcm9qZWN0VGl0bGUsIHRvZG8uZ2V0VGl0bGUoKSlcclxuICAgICAgICAgICAgdGhpcy5yZW5kZXJQcm9qZWN0KFN0b3JhZ2UuZ2V0QXBwKCkuZ2V0UHJvamVjdChwcm9qZWN0VGl0bGUpKVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIHRvZG9EaXYuYXBwZW5kQ2hpbGQocmVtb3ZlQnRuKVxyXG5cclxuICAgICAgICByZXR1cm4gdG9kb0RpdlxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlclRhc2socHJvamVjdFRpdGxlLCB0b2RvVGl0bGUsIHRhc2spIHtcclxuICAgICAgICBjb25zdCB0YXNrRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgICB0YXNrRGl2LmNsYXNzTGlzdC5hZGQoJ3Rhc2snKVxyXG4gICAgICAgIGNvbnN0IHRhc2tUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxyXG4gICAgICAgIHRhc2tUaXRsZS50ZXh0Q29udGVudCA9IHRhc2sudGl0bGVcclxuICAgICAgICB0YXNrRGl2LmFwcGVuZENoaWxkKHRhc2tUaXRsZSlcclxuICAgICAgICB0YXNrRGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBTdG9yYWdlLmNoYW5nZURvbmUocHJvamVjdFRpdGxlLCB0b2RvVGl0bGUsIHRhc2suZ2V0VGl0bGUoKSlcclxuICAgICAgICAgICAgdGhpcy5yZW5kZXJQcm9qZWN0KFN0b3JhZ2UuZ2V0QXBwKCkuZ2V0UHJvamVjdChwcm9qZWN0VGl0bGUpKVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGlmKHRhc2suZG9uZSkge1xyXG4gICAgICAgICAgICB0YXNrRGl2LmNsYXNzTGlzdC5hZGQoJ2RvbmUnKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYodGFzay5kZXNjICE9PSBcIlwiKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRhc2tEZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIilcclxuICAgICAgICAgICAgdGFza0Rlc2MudGV4dENvbnRlbnQgPSB0YXNrLmRlc2NcclxuICAgICAgICAgICAgdGFza0Rpdi5hcHBlbmRDaGlsZCh0YXNrRGVzYylcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKHRhc2suZHVlZGF0ZSAhPT0gXCJcIikge1xyXG4gICAgICAgICAgICBjb25zdCBzcGxpdERhdGUgPSB0YXNrLmR1ZWRhdGUuc3BsaXQoJy0nKVxyXG4gICAgICAgICAgICBjb25zdCB0YXNrRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxyXG4gICAgICAgICAgICB0YXNrRGF0ZS5jbGFzc0xpc3QuYWRkKCd0YXNrRGF0ZScpXHJcbiAgICAgICAgICAgIHRhc2tEYXRlLnRleHRDb250ZW50ID0gYCR7c3BsaXREYXRlWzFdfS0ke3NwbGl0RGF0ZVsyXX0tJHtzcGxpdERhdGVbMF19YFxyXG4gICAgICAgICAgICB0YXNrRGl2LmFwcGVuZENoaWxkKHRhc2tEYXRlKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRhc2tEaXZcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJUYXNrcyhwcm9qZWN0VGl0bGUsIHRvZG9UaXRsZSwgdGFza3MsIHBhcmVudCkge1xyXG4gICAgICAgIHBhcmVudC50ZXh0Q29udGVudCA9IFwiXCJcclxuICAgICAgICBmb3IobGV0IHRhc2sgb2YgdGFza3MpIHtcclxuICAgICAgICAgICAgcGFyZW50LmFwcGVuZENoaWxkKHRoaXMucmVuZGVyVGFzayhwcm9qZWN0VGl0bGUsIHRvZG9UaXRsZSwgdGFzaykpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlclByb2plY3QocHJvamVjdCkge1xyXG4gICAgICAgIHRoaXMuY29udGVudC5pbm5lckhUTUwgPSBcIlwiXHJcbiAgICAgICAgY29uc3QgcHJvamVjdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgcHJvamVjdERpdi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0JylcclxuICAgICAgICBjb25zdCBwcm9qZWN0VGl0bGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICAgIHByb2plY3RUaXRsZURpdi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0VGl0bGUnKVxyXG4gICAgICAgIGNvbnN0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJylcclxuICAgICAgICBwcm9qZWN0VGl0bGUudGV4dENvbnRlbnQgPSBwcm9qZWN0LnRpdGxlXHJcbiAgICAgICAgcHJvamVjdFRpdGxlRGl2LmFwcGVuZENoaWxkKHByb2plY3RUaXRsZSlcclxuICAgICAgICBjb25zdCB0aHJlZWRvdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXHJcbiAgICAgICAgdGhyZWVkb3QuY2xhc3NMaXN0LmFkZCgnZG90cycpXHJcbiAgICAgICAgdGhyZWVkb3Quc3JjID0gRG90c1xyXG4gICAgICAgIHRocmVlZG90LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnByb2plY3RFZGl0UG9wKHByb2plY3QpXHJcbiAgICAgICAgfSlcclxuICAgICAgICBwcm9qZWN0VGl0bGVEaXYuYXBwZW5kQ2hpbGQodGhyZWVkb3QpXHJcbiAgICAgICAgcHJvamVjdERpdi5hcHBlbmRDaGlsZChwcm9qZWN0VGl0bGVEaXYpXHJcbiAgICAgICAgY29uc3QgcHJvamVjdENvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICAgIHByb2plY3RDb250ZW50LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RDb250ZW50JylcclxuICAgICAgICBjb25zdCB0b2RvRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgICB0b2RvRGl2LmNsYXNzTGlzdC5hZGQoJ3RvZG9EaXYnKVxyXG4gICAgICAgIHByb2plY3QuZ2V0VG9kb3MoKS5mb3JFYWNoKCh0b2RvKSA9PiB0b2RvRGl2LmFwcGVuZENoaWxkKHRoaXMucmVuZGVyVG9kbyhwcm9qZWN0LmdldFRpdGxlKCksdG9kbykpKVxyXG4gICAgICAgIHByb2plY3RDb250ZW50LmFwcGVuZENoaWxkKHRvZG9EaXYpXHJcbiAgICAgICAgY29uc3QgYWRkVG9kb0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXHJcbiAgICAgICAgYWRkVG9kb0J0bi5jbGFzc0xpc3QuYWRkKCdhZGRUb2RvJylcclxuICAgICAgICBhZGRUb2RvQnRuLmlubmVySFRNTCA9ICdBZGQgVG9kbydcclxuICAgICAgICBhZGRUb2RvQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmFkZFRvZG9Qb3AocHJvamVjdC5nZXRUaXRsZSgpLCB0b2RvRGl2KVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgcHJvamVjdENvbnRlbnQuYWRkRXZlbnRMaXN0ZW5lcignd2hlZWwnLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICAgICAgcHJvamVjdENvbnRlbnQuc2Nyb2xsTGVmdCArPSBlLmRlbHRhWVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgcHJvamVjdENvbnRlbnQuYXBwZW5kQ2hpbGQoYWRkVG9kb0J0bilcclxuICAgICAgICBwcm9qZWN0RGl2LmFwcGVuZENoaWxkKHByb2plY3RDb250ZW50KVxyXG4gICAgICAgIHRoaXMuY29udGVudC5hcHBlbmRDaGlsZChwcm9qZWN0RGl2KVxyXG5cclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJTaWRlYmFyUHJvamVjdHMocGFyZW50KSB7XHJcbiAgICAgICAgcGFyZW50LnRleHRDb250ZW50ID0gXCJcIlxyXG4gICAgICAgIFN0b3JhZ2UuZ2V0QXBwKCkuZ2V0UHJvamVjdHMoKS5mb3JFYWNoKChwcm9qZWN0KSA9PiAge1xyXG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpXHJcbiAgICAgICAgICAgIHByb2plY3RUaXRsZS50ZXh0Q29udGVudCA9IHByb2plY3QudGl0bGVcclxuICAgICAgICAgICAgcHJvamVjdFRpdGxlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb250ZW50LmlubmVySFRNTCA9ICcnXHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlbmRlclByb2plY3QoU3RvcmFnZS5nZXRBcHAoKS5nZXRQcm9qZWN0KHByb2plY3QuZ2V0VGl0bGUoKSkpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHBhcmVudC5hcHBlbmRDaGlsZChwcm9qZWN0VGl0bGUpXHJcbiAgICAgICAgfSlcclxuICAgICAgICByZXR1cm4gcGFyZW50XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyU2lkZWJhcigpIHtcclxuICAgICAgICBjb25zdCBvdmVybGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ292ZXJsYXknKVxyXG4gICAgICAgIHRoaXMuc2lkZWJhci5pbm5lckhUTUwgPSAnJ1xyXG4gICAgICAgIGNvbnN0IHRpdGxlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxyXG4gICAgICAgIHRpdGxlRGl2LmNsYXNzTGlzdC5hZGQoJ2J1dHRvbkNvbnRhaW5lcicpXHJcbiAgICAgICAgY29uc3Qgc2lkZWJhclRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKVxyXG4gICAgICAgIHNpZGViYXJUaXRsZS50ZXh0Q29udGVudCA9ICdZb3VyIFByb2plY3RzJ1xyXG4gICAgICAgIHRpdGxlRGl2LmFwcGVuZENoaWxkKHNpZGViYXJUaXRsZSlcclxuICAgICAgICBjb25zdCBjbG9zZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXHJcbiAgICAgICAgY2xvc2VCdG4uc3JjID0gQ2xvc2VcclxuICAgICAgICBjbG9zZUJ0bi5jbGFzc0xpc3QuYWRkKCdpY29uJylcclxuICAgICAgICBjbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zaWRlYmFyLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3cnKVxyXG4gICAgICAgICAgICBvdmVybGF5LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcclxuICAgICAgICB9KVxyXG4gICAgICAgIHRpdGxlRGl2LmFwcGVuZENoaWxkKGNsb3NlQnRuKVxyXG4gICAgICAgIHRoaXMuc2lkZWJhci5hcHBlbmRDaGlsZCh0aXRsZURpdilcclxuICAgICAgICBjb25zdCBwcm9qZWN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgICBwcm9qZWN0RGl2LmlkID0gJ3Byb2plY3REaXYnXHJcbiAgICAgICAgdGhpcy5zaWRlYmFyLmFwcGVuZENoaWxkKHRoaXMucmVuZGVyU2lkZWJhclByb2plY3RzKHByb2plY3REaXYpKVxyXG5cclxuICAgICAgICBjb25zdCBhZGRQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcclxuICAgICAgICBhZGRQcm9qZWN0LmlubmVySFRNTCA9IFwiQWRkIFByb2plY3RcIlxyXG4gICAgICAgIGFkZFByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuYWRkUHJvalBvcCh0aGlzLmFwcClcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICB0aGlzLnNpZGViYXIuYXBwZW5kQ2hpbGQoYWRkUHJvamVjdClcclxuXHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgYWRkUHJvalBvcCgpIHtcclxuICAgICAgICBjb25zdCBvdmVybGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ292ZXJsYXknKVxyXG4gICAgICAgIG92ZXJsYXkuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIlxyXG4gICAgICAgIG92ZXJsYXkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHBvcHVwLnJlbW92ZSgpXHJcbiAgICAgICAgICAgIG92ZXJsYXkuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiXHJcbiAgICAgICAgfSlcclxuICAgICAgICBjb25zdCBwb3B1cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKVxyXG4gICAgICAgIHBvcHVwLmNsYXNzTGlzdC5hZGQoJ3BvcHVwJylcclxuICAgICAgICBwb3B1cC5pZCA9ICdhZGRQcm9qZWN0UG9wdXAnXHJcbiAgICAgICAgY29uc3QgcG9wdXBUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJylcclxuICAgICAgICBwb3B1cFRpdGxlLnRleHRDb250ZW50ID0gJ0FkZCBQcm9qZWN0J1xyXG4gICAgICAgIHBvcHVwLmFwcGVuZENoaWxkKHBvcHVwVGl0bGUpXHJcbiAgICAgICAgY29uc3QgcHJvalRpdGxlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXHJcbiAgICAgICAgcHJvalRpdGxlSW5wdXQudHlwZSA9ICd0ZXh0J1xyXG4gICAgICAgIHBvcHVwLmFwcGVuZENoaWxkKHByb2pUaXRsZUlucHV0KVxyXG4gICAgICAgIGNvbnN0IHN1Ym1pdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXHJcbiAgICAgICAgc3VibWl0QnRuLnR5cGUgPSAnc3VibWl0J1xyXG4gICAgICAgIHN1Ym1pdEJ0bi5pbm5lckhUTUwgPSAnU3VibWl0J1xyXG4gICAgICAgIHN1Ym1pdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgICAgICBpZihwcm9qVGl0bGVJbnB1dC52YWx1ZSAhPT0gXCJcIikge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbmV3UHJvaiA9IG5ldyBQcm9qZWN0KHByb2pUaXRsZUlucHV0LnZhbHVlKVxyXG4gICAgICAgICAgICAgICAgU3RvcmFnZS5hZGRQcm9qZWN0KG5ld1Byb2opXHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlbmRlclNpZGViYXIoKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJQcm9qZWN0KG5ld1Byb2opXHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG92ZXJsYXkuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiXHJcbiAgICAgICAgICAgIHBvcHVwLnJlbW92ZSgpXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgcG9wdXAuYXBwZW5kQ2hpbGQoc3VibWl0QnRuKVxyXG5cclxuICAgICAgICB0aGlzLmNvbnRlbnQuYXBwZW5kQ2hpbGQocG9wdXApXHJcbiAgICB9XHJcblxyXG4gICAgYWRkVGFza1BvcChwcm9qZWN0VGl0bGUsIHRvZG9UaXRsZSwgdGFza0Rpdikge1xyXG4gICAgICAgIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb3ZlcmxheScpXHJcbiAgICAgICAgb3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiXHJcbiAgICAgICAgb3ZlcmxheS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgcG9wdXAucmVtb3ZlKClcclxuICAgICAgICAgICAgb3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCJcclxuICAgICAgICB9KVxyXG4gICAgICAgIGNvbnN0IHBvcHVwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpXHJcbiAgICAgICAgcG9wdXAuY2xhc3NMaXN0LmFkZCgncG9wdXAnKVxyXG4gICAgICAgIHBvcHVwLmlkID0gXCJhZGRUYXNrUG9wdXBcIlxyXG4gICAgICAgIGNvbnN0IHBvcHVwVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpXHJcbiAgICAgICAgcG9wdXBUaXRsZS50ZXh0Q29udGVudCA9IFwiQWRkIFRhc2tcIlxyXG4gICAgICAgIHBvcHVwLmFwcGVuZENoaWxkKHBvcHVwVGl0bGUpXHJcbiAgICAgICAgY29uc3QgdGl0bGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcclxuICAgICAgICB0aXRsZUxhYmVsLmh0bWxGb3IgPSBcInRpdGxlSW5wdXRcIlxyXG4gICAgICAgIHRpdGxlTGFiZWwudGV4dENvbnRlbnQgPSBcIlRpdGxlXCJcclxuICAgICAgICBwb3B1cC5hcHBlbmRDaGlsZCh0aXRsZUxhYmVsKVxyXG4gICAgICAgIGNvbnN0IHRpdGxlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXHJcbiAgICAgICAgdGl0bGVJbnB1dC50eXBlID0gXCJ0ZXh0XCJcclxuICAgICAgICB0aXRsZUlucHV0LnJlcXVpcmVkID0gXCJ0cnVlXCJcclxuICAgICAgICBwb3B1cC5hcHBlbmRDaGlsZCh0aXRsZUlucHV0KVxyXG4gICAgICAgIGNvbnN0IGRlc2NMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcclxuICAgICAgICBkZXNjTGFiZWwuaHRtbEZvciA9ICdkZXNjSW5wdXQnXHJcbiAgICAgICAgZGVzY0xhYmVsLnRleHRDb250ZW50ID0gXCJEZXNjcmlwdGlvblwiXHJcbiAgICAgICAgcG9wdXAuYXBwZW5kQ2hpbGQoZGVzY0xhYmVsKVxyXG4gICAgICAgIGNvbnN0IGRlc2NJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcclxuICAgICAgICBkZXNjSW5wdXQudHlwZSA9ICd0ZXh0J1xyXG4gICAgICAgIHBvcHVwLmFwcGVuZENoaWxkKGRlc2NJbnB1dClcclxuICAgICAgICBjb25zdCBkYXRlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXHJcbiAgICAgICAgZGF0ZUxhYmVsLmh0bWxGb3IgPSAnZGF0ZUlucHV0J1xyXG4gICAgICAgIGRhdGVMYWJlbC50ZXh0Q29udGVudCA9ICdEdWUgRGF0ZSdcclxuICAgICAgICBwb3B1cC5hcHBlbmRDaGlsZChkYXRlTGFiZWwpXHJcbiAgICAgICAgY29uc3QgZGF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxyXG4gICAgICAgIGRhdGVJbnB1dC50eXBlID0gJ2RhdGUnXHJcbiAgICAgICAgcG9wdXAuYXBwZW5kQ2hpbGQoZGF0ZUlucHV0KVxyXG5cclxuICAgICAgICBjb25zdCBidXR0b25EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICAgIGJ1dHRvbkRpdi5jbGFzc0xpc3QuYWRkKCdidG5EaXYnKVxyXG4gICAgICAgIGNvbnN0IGFkZEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXHJcbiAgICAgICAgYWRkQnRuLnR5cGUgPSAnc3VibWl0J1xyXG4gICAgICAgIGFkZEJ0bi5pbm5lckhUTUwgPSAnQWRkIFRhc2snXHJcbiAgICAgICAgYWRkQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgICAgIGlmKHRpdGxlSW5wdXQudmFsdWUgIT09IFwiXCIpIHtcclxuICAgICAgICAgICAgICAgIFN0b3JhZ2UuYWRkVGFzayhwcm9qZWN0VGl0bGUsIHRvZG9UaXRsZSwgbmV3IFRhc2sodGl0bGVJbnB1dC52YWx1ZSwgZGVzY0lucHV0LnZhbHVlLCBkYXRlSW5wdXQudmFsdWUpKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJQcm9qZWN0KFN0b3JhZ2UuZ2V0QXBwKCkuZ2V0UHJvamVjdChwcm9qZWN0VGl0bGUpKVxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvdmVybGF5LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcclxuICAgICAgICAgICAgcG9wdXAucmVtb3ZlKClcclxuICAgICAgICB9KVxyXG4gICAgICAgIGJ1dHRvbkRpdi5hcHBlbmRDaGlsZChhZGRCdG4pXHJcbiAgICAgICAgY29uc3QgY2FuQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcclxuICAgICAgICBjYW5CdG4uaW5uZXJIVE1MID0gJ0NhbmNlbCdcclxuICAgICAgICBjYW5CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHBvcHVwLnJlbW92ZSgpXHJcbiAgICAgICAgICAgIG92ZXJsYXkuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgYnV0dG9uRGl2LmFwcGVuZENoaWxkKGNhbkJ0bilcclxuICAgICAgICBwb3B1cC5hcHBlbmRDaGlsZChidXR0b25EaXYpXHJcblxyXG5cclxuXHJcbiAgICAgICAgdGhpcy5jb250ZW50LmFwcGVuZENoaWxkKHBvcHVwKVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBhZGRUb2RvUG9wKHByb2plY3RUaXRsZSwgdG9kb0Rpdikge1xyXG4gICAgICAgIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb3ZlcmxheScpXHJcbiAgICAgICAgb3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiXHJcbiAgICAgICAgb3ZlcmxheS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgcG9wdXAucmVtb3ZlKClcclxuICAgICAgICAgICAgb3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCJcclxuICAgICAgICB9KVxyXG4gICAgICAgIGNvbnN0IHBvcHVwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpXHJcbiAgICAgICAgcG9wdXAuY2xhc3NMaXN0LmFkZCgncG9wdXAnKVxyXG4gICAgICAgIHBvcHVwLmlkID0gJ2FkZFRvZG9Qb3AnXHJcblxyXG4gICAgICAgIGNvbnN0IHBvcHVwVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpXHJcbiAgICAgICAgcG9wdXBUaXRsZS50ZXh0Q29udGVudCA9ICdBZGQgVG9kbydcclxuICAgICAgICBwb3B1cC5hcHBlbmRDaGlsZChwb3B1cFRpdGxlKVxyXG5cclxuICAgICAgICBjb25zdCB0aXRsZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxyXG4gICAgICAgIHRpdGxlTGFiZWwudGV4dENvbnRlbnQgPSAnVGl0bGUnXHJcbiAgICAgICAgdGl0bGVMYWJlbC5odG1sRm9yID0gJ3RpdGxlSW5wdXQnXHJcbiAgICAgICAgcG9wdXAuYXBwZW5kQ2hpbGQodGl0bGVMYWJlbClcclxuXHJcbiAgICAgICAgY29uc3QgdGl0bGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcclxuICAgICAgICB0aXRsZUlucHV0LnR5cGUgPSAndGV4dCdcclxuICAgICAgICB0aXRsZUlucHV0LmlkID0gJ3RvZG9UaXRsZWlucHV0J1xyXG4gICAgICAgIHRpdGxlSW5wdXQucmVxdWlyZWQgPSBcInRydWVcIlxyXG4gICAgICAgIHBvcHVwLmFwcGVuZENoaWxkKHRpdGxlSW5wdXQpXHJcblxyXG4gICAgICAgIGNvbnN0IGJ1dHRvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgYnV0dG9uRGl2LmNsYXNzTGlzdC5hZGQoJ2J0bkRpdicpXHJcbiAgICAgICAgY29uc3QgYWRkQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcclxuICAgICAgICBhZGRCdG4uaW5uZXJIVE1MID0gJ0FkZCBUb2RvJ1xyXG4gICAgICAgIGFkZEJ0bi50eXBlID0gJ3N1Ym1pdCdcclxuICAgICAgICBhZGRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICAgICAgaWYodGl0bGVJbnB1dC52YWx1ZSAhPT0gXCJcIilcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgU3RvcmFnZS5hZGRUb2RvKHByb2plY3RUaXRsZSwgbmV3IFRvZG8odGl0bGVJbnB1dC52YWx1ZSkpXHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlbmRlclByb2plY3QoU3RvcmFnZS5nZXRBcHAoKS5nZXRQcm9qZWN0KHByb2plY3RUaXRsZSkpXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvdmVybGF5LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcclxuICAgICAgICAgICAgcG9wdXAucmVtb3ZlKClcclxuICAgICAgICB9KVxyXG4gICAgICAgIGJ1dHRvbkRpdi5hcHBlbmRDaGlsZChhZGRCdG4pXHJcbiAgICAgICAgY29uc3QgY2FuQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcclxuICAgICAgICBjYW5CdG4uaW5uZXJIVE1MID0gJ0NhbmNlbCdcclxuICAgICAgICBjYW5CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiAge1xyXG4gICAgICAgICAgICBvdmVybGF5LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcclxuICAgICAgICAgICAgcG9wdXAucmVtb3ZlKClcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBidXR0b25EaXYuYXBwZW5kQ2hpbGQoY2FuQnRuKVxyXG4gICAgICAgIHBvcHVwLmFwcGVuZENoaWxkKGJ1dHRvbkRpdilcclxuXHJcbiAgICAgICAgdGhpcy5jb250ZW50LmFwcGVuZENoaWxkKHBvcHVwKVxyXG5cclxuICAgIH0gICBcclxuXHJcbiAgICBwcm9qZWN0RWRpdFBvcChwcm9qZWN0KSB7XHJcbiAgICAgICAgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvdmVybGF5JylcclxuICAgICAgICBvdmVybGF5LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCJcclxuICAgICAgICBvdmVybGF5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBwb3B1cC5yZW1vdmUoKVxyXG4gICAgICAgICAgICBvdmVybGF5LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIlxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgY29uc3QgcG9wdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICAgIHBvcHVwLmlkID0gJ3Byb2RqRWRpdCdcclxuICAgICAgICBjb25zdCByZW5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIilcclxuICAgICAgICByZW5hbWUudGV4dENvbnRlbnQgPSBcIlJlbmFtZSBQcm9qZWN0XCJcclxuICAgICAgICByZW5hbWUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMucmVuYW1lUHJvamVjdChwcm9qZWN0KVxyXG4gICAgICAgICAgICBwb3B1cC5yZW1vdmUoKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgcG9wdXAuYXBwZW5kQ2hpbGQocmVuYW1lKVxyXG4gICAgICAgIGNvbnN0IGRlbGV0ZVByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpXHJcbiAgICAgICAgZGVsZXRlUHJvamVjdC50ZXh0Q29udGVudCA9IFwiRGVsZXRlIFByb2plY3RcIlxyXG4gICAgICAgIGRlbGV0ZVByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIG92ZXJsYXkuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xyXG4gICAgICAgICAgICBwb3B1cC5yZW1vdmUoKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgcG9wdXAuYXBwZW5kQ2hpbGQoZGVsZXRlUHJvamVjdClcclxuXHJcbiAgICAgICAgY29uc3QgY2FuQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKVxyXG4gICAgICAgIGNhbkJ0bi50ZXh0Q29udGVudCA9IFwiQ2FuY2VsXCJcclxuICAgICAgICBjYW5CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIG92ZXJsYXkuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xyXG4gICAgICAgICAgICBwb3B1cC5yZW1vdmUoKVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIHBvcHVwLmFwcGVuZENoaWxkKGNhbkJ0bilcclxuXHJcblxyXG4gICAgICAgIHRoaXMuY29udGVudC5hcHBlbmRDaGlsZChwb3B1cClcclxuICAgIH1zXHJcblxyXG4gICAgcmVuYW1lUHJvamVjdChwcm9qZWN0KSB7XHJcbiAgICAgICAgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvdmVybGF5JylcclxuICAgICAgICBvdmVybGF5LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCJcclxuICAgICAgICBvdmVybGF5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBwb3B1cC5yZW1vdmUoKVxyXG4gICAgICAgICAgICBvdmVybGF5LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIlxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgY29uc3QgcG9wdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJylcclxuICAgICAgICBwb3B1cC5jbGFzc0xpc3QuYWRkKCdwb3B1cCcpXHJcbiAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpXHJcbiAgICAgICAgdGl0bGUudGV4dENvbnRlbnQgPSBcIlJlbmFtZSBQcm9qZWN0XCJcclxuICAgICAgICBwb3B1cC5hcHBlbmRDaGlsZCh0aXRsZSlcclxuICAgICAgICBjb25zdCB0aXRsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxyXG4gICAgICAgIHRpdGxlSW5wdXQudHlwZSA9ICd0ZXh0J1xyXG5cclxuICAgICAgICBwb3B1cC5hcHBlbmRDaGlsZCh0aXRsZUlucHV0KVxyXG4gICAgICAgIGNvbnN0IHN1Ym1pdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXHJcbiAgICAgICAgc3VibWl0QnRuLnR5cGUgPSAnc3VibWl0J1xyXG4gICAgICAgIHN1Ym1pdEJ0bi5pbm5lckhUTUwgPSBcIlN1Ym1pdFwiXHJcbiAgICAgICAgc3VibWl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgICAgIGlmKHRpdGxlSW5wdXQudmFsdWUgIT09IFwiXCIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29udGVudC5pbm5lckhUTUwgPSBcIlwiXHJcbiAgICAgICAgICAgICAgICBTdG9yYWdlLnJlbmFtZVByb2plY3QocHJvamVjdC5nZXRUaXRsZSgpLCB0aXRsZUlucHV0LnZhbHVlKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJQcm9qZWN0KFN0b3JhZ2UuZ2V0QXBwKCkuZ2V0UHJvamVjdCh0aXRsZUlucHV0LnZhbHVlKSlcclxuICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyU2lkZWJhcigpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXHJcbiAgICAgICAgICAgIHBvcHVwLnJlbW92ZSgpXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgcG9wdXAuYXBwZW5kQ2hpbGQoc3VibWl0QnRuKVxyXG5cclxuICAgICAgICB0aGlzLmNvbnRlbnQuYXBwZW5kQ2hpbGQocG9wdXApXHJcbiAgICB9XHJcblxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVUkiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIlxyXG5pbXBvcnQgJy4vc3R5bGUuY3NzJ1xyXG5cclxuaW1wb3J0IFN0b3JhZ2UgZnJvbSAnLi9sb2dpYy9zdG9yYWdlJztcclxuaW1wb3J0IEFwcCBmcm9tICcuL2xvZ2ljL2FwcCdcclxuaW1wb3J0IFRhc2sgZnJvbSAnLi9sb2dpYy90YXNrJztcclxuaW1wb3J0IFRvZG8gZnJvbSAnLi9sb2dpYy90b2RvJztcclxuaW1wb3J0IFByb2plY3QgZnJvbSAnLi9sb2dpYy9wcm9qZWN0JztcclxuaW1wb3J0IFVJIGZyb20gXCIuL3VpXCI7XHJcblxyXG5jb25zdCB1aSA9IG5ldyBVSSgpXHJcblxyXG5cclxudWkucmVuZGVyU2lkZWJhcigpXHJcblxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=