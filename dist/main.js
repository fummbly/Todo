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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\r\n    font-family: monospace;\r\n}\r\n\r\n\r\n* {\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n\r\nbody {\r\n    display: flex;\r\n    flex-direction: column;\r\n    overflow: hidden;\r\n    box-sizing: border-box;\r\n\r\n}\r\n\r\n#overlay {\r\n    position: absolute;\r\n    width: 100vw;\r\n    height: 100vh;\r\n    z-index: 2;\r\n    display: none;\r\n}\r\n\r\n#titleBar {\r\n    padding: 1rem;\r\n}\r\n\r\n.buttonContainer {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n}\r\n\r\n.icon {\r\n    height: 2rem;\r\n    cursor: pointer;\r\n    color: inherit;\r\n}\r\n\r\n.sml {\r\n    height: 1rem;\r\n}\r\n\r\n#content {\r\n    width: 100vw;\r\n}\r\n\r\n.round {\r\n    margin: 0 .5rem;\r\n    height:  3rem;\r\n    aspect-ratio: 1;\r\n    border-radius: 100%;\r\n    cursor: pointer;\r\n    border: none;\r\n}\r\n\r\n#sidebar {\r\n    position: absolute;\r\n    top: 0;\r\n    left: -100%;\r\n    display: block;\r\n    background-color: white;\r\n    width: 100%;\r\n    text-align: center;\r\n    transition: transform .5s;\r\n    z-index: 3;\r\n}\r\n\r\n#sidebar > * {\r\n    margin: 1rem;\r\n    \r\n}\r\n\r\n#projectDiv > * {\r\n    padding: .5rem 0;\r\n    border-radius: 0.25rem;\r\n    cursor: pointer;\r\n}\r\n\r\n#projectDiv > *:hover {\r\n    background-color: lightblue;\r\n}\r\n\r\n\r\n.projectContent {\r\n    display: flex;\r\n    flex-wrap: nowrap;\r\n    overflow-x: auto;\r\n\r\n    -ms-overflow-style: none;\r\n    scrollbar-width: none;\r\n    height: 100%;\r\n}\r\n\r\n.projectContent::-webkit-scrollbar {\r\n    display: none;\r\n}\r\n\r\n.dots {\r\n    height: 2.5rem;\r\n    cursor: pointer;\r\n    fill: white;\r\n}\r\n\r\n.project {\r\n    width: 100%;\r\n    height: 100vh;\r\n    overflow: hidden;\r\n\r\n}\r\n\r\n.todo, .projectTitle, .addTodo {\r\n    background-color: white;\r\n}\r\n\r\n.todo {\r\n    flex: 0 0 auto;\r\n    display: flex;\r\n    flex-wrap: nowrap;\r\n    flex-direction: column;\r\n    justify-content: space-between;\r\n    box-shadow: 5px 5px 20px rgba(0,0,0,0.25);\r\n    border-radius: .5rem;\r\n    width: 20rem;\r\n    max-height: 80%;\r\n    padding: 1rem;\r\n    margin: 1rem;\r\n    align-self: self-start;\r\n    overflow-y: auto;\r\n\r\n    -ms-overflow-style: none;\r\n    scrollbar-width: 2px;\r\n}\r\n\r\n.todo::-webkit-scrollbar {\r\n    width: 10px;\r\n}\r\n\r\n.todo::-webkit-scrollbar-track {\r\n    background-color: #121212;\r\n    border-radius: .5rem;\r\n}\r\n\r\n.todo::-webkit-scrollbar-thumb {\r\n    background-color: #eee;\r\n    border-radius: .5rem;\r\n}\r\n\r\n.addTodo {\r\n    display: inline-block;\r\n    min-width: 10rem;\r\n    height: 10rem;\r\n    border: none;\r\n    box-shadow: 5px 5px 20px rgba(0,0,0, 0.25);\r\n    border-radius: .5rem;\r\n    padding: .5rem 1rem;\r\n    margin: 1rem;\r\n    cursor: pointer;\r\n}\r\n\r\n.task {\r\n    display: flex;\r\n    justify-content: space-evenly;\r\n    flex-direction: column;\r\n    border: 2px solid gainsboro;\r\n    border-radius: .5rem;\r\n    padding: .5rem 1rem;\r\n    margin: 1rem auto;\r\n    transition: background-color 0.25s, border-color 0.25s;\r\n}\r\n\r\n.taskDate {\r\n    font-size: .75rem;\r\n    color: grey;\r\n}\r\n\r\n.btn {\r\n    margin-top: 1rem;\r\n    border: 2px solid gainsboro;\r\n    background-color: inherit;\r\n    border-radius: .5rem;\r\n    padding: .5rem 1rem;\r\n    cursor: pointer;\r\n    font-weight: bolder;\r\n}\r\n\r\n.popup {\r\n    position: absolute;\r\n    top: 10%;\r\n    left: 50%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    width: 10rem;\r\n    padding: 1rem;\r\n    box-shadow: 5px 5px 20px rgba(0,0,0, 0.25);\r\n    border-radius: .5rem;\r\n    background-color: white;\r\n    transform: translate(-7rem, 0);\r\n    z-index: 3;\r\n}\r\n\r\n.popup > input, .popup > h2 {\r\n    margin-bottom: .5rem;\r\n}\r\n\r\n.popup > input {\r\n    width: 100%;\r\n}\r\n\r\n.btnDiv {\r\n    display: flex;\r\n    width: 100%;\r\n}\r\n\r\n.btnDiv button {\r\n    width: 50%;\r\n    padding: .5rem;\r\n}\r\n\r\n.projectTitle {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    margin: 1rem;\r\n    box-shadow: 5px 5px 20px rgba(0,0,0,0.25);\r\n    padding: 1rem 2rem;\r\n    border-radius: 2rem;\r\n    color: white;\r\n}\r\n\r\n.todoDiv {\r\n    display: flex;\r\n}\r\n\r\n.done {\r\n    background-color: lightgreen;\r\n    border-color: mediumseagreen;\r\n}\r\n\r\n.red {\r\n    background-color: lightcoral;\r\n    border-color: maroon;\r\n}\r\n\r\n#prodjEdit {\r\n    position: absolute;\r\n    right: 2rem;\r\n    top: 6rem;\r\n    background-color: white;\r\n    padding: .5rem 1rem;\r\n    border-radius: .5rem;\r\n    text-align: center;\r\n    z-index: 3;\r\n}\r\n#prodjEdit > * {\r\n    padding: 1rem .5rem;\r\n    cursor: pointer;\r\n    border-radius: .5rem;\r\n}\r\n\r\n#prodjEdit > *:hover {\r\n    background-color: lightblue;\r\n}\r\n\r\n.show {\r\n    transform: translate(100%, 0);\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":[":root {\r\n    font-family: monospace;\r\n}\r\n\r\n\r\n* {\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n\r\nbody {\r\n    display: flex;\r\n    flex-direction: column;\r\n    overflow: hidden;\r\n    box-sizing: border-box;\r\n\r\n}\r\n\r\n#overlay {\r\n    position: absolute;\r\n    width: 100vw;\r\n    height: 100vh;\r\n    z-index: 2;\r\n    display: none;\r\n}\r\n\r\n#titleBar {\r\n    padding: 1rem;\r\n}\r\n\r\n.buttonContainer {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n}\r\n\r\n.icon {\r\n    height: 2rem;\r\n    cursor: pointer;\r\n    color: inherit;\r\n}\r\n\r\n.sml {\r\n    height: 1rem;\r\n}\r\n\r\n#content {\r\n    width: 100vw;\r\n}\r\n\r\n.round {\r\n    margin: 0 .5rem;\r\n    height:  3rem;\r\n    aspect-ratio: 1;\r\n    border-radius: 100%;\r\n    cursor: pointer;\r\n    border: none;\r\n}\r\n\r\n#sidebar {\r\n    position: absolute;\r\n    top: 0;\r\n    left: -100%;\r\n    display: block;\r\n    background-color: white;\r\n    width: 100%;\r\n    text-align: center;\r\n    transition: transform .5s;\r\n    z-index: 3;\r\n}\r\n\r\n#sidebar > * {\r\n    margin: 1rem;\r\n    \r\n}\r\n\r\n#projectDiv > * {\r\n    padding: .5rem 0;\r\n    border-radius: 0.25rem;\r\n    cursor: pointer;\r\n}\r\n\r\n#projectDiv > *:hover {\r\n    background-color: lightblue;\r\n}\r\n\r\n\r\n.projectContent {\r\n    display: flex;\r\n    flex-wrap: nowrap;\r\n    overflow-x: auto;\r\n\r\n    -ms-overflow-style: none;\r\n    scrollbar-width: none;\r\n    height: 100%;\r\n}\r\n\r\n.projectContent::-webkit-scrollbar {\r\n    display: none;\r\n}\r\n\r\n.dots {\r\n    height: 2.5rem;\r\n    cursor: pointer;\r\n    fill: white;\r\n}\r\n\r\n.project {\r\n    width: 100%;\r\n    height: 100vh;\r\n    overflow: hidden;\r\n\r\n}\r\n\r\n.todo, .projectTitle, .addTodo {\r\n    background-color: white;\r\n}\r\n\r\n.todo {\r\n    flex: 0 0 auto;\r\n    display: flex;\r\n    flex-wrap: nowrap;\r\n    flex-direction: column;\r\n    justify-content: space-between;\r\n    box-shadow: 5px 5px 20px rgba(0,0,0,0.25);\r\n    border-radius: .5rem;\r\n    width: 20rem;\r\n    max-height: 80%;\r\n    padding: 1rem;\r\n    margin: 1rem;\r\n    align-self: self-start;\r\n    overflow-y: auto;\r\n\r\n    -ms-overflow-style: none;\r\n    scrollbar-width: 2px;\r\n}\r\n\r\n.todo::-webkit-scrollbar {\r\n    width: 10px;\r\n}\r\n\r\n.todo::-webkit-scrollbar-track {\r\n    background-color: #121212;\r\n    border-radius: .5rem;\r\n}\r\n\r\n.todo::-webkit-scrollbar-thumb {\r\n    background-color: #eee;\r\n    border-radius: .5rem;\r\n}\r\n\r\n.addTodo {\r\n    display: inline-block;\r\n    min-width: 10rem;\r\n    height: 10rem;\r\n    border: none;\r\n    box-shadow: 5px 5px 20px rgba(0,0,0, 0.25);\r\n    border-radius: .5rem;\r\n    padding: .5rem 1rem;\r\n    margin: 1rem;\r\n    cursor: pointer;\r\n}\r\n\r\n.task {\r\n    display: flex;\r\n    justify-content: space-evenly;\r\n    flex-direction: column;\r\n    border: 2px solid gainsboro;\r\n    border-radius: .5rem;\r\n    padding: .5rem 1rem;\r\n    margin: 1rem auto;\r\n    transition: background-color 0.25s, border-color 0.25s;\r\n}\r\n\r\n.taskDate {\r\n    font-size: .75rem;\r\n    color: grey;\r\n}\r\n\r\n.btn {\r\n    margin-top: 1rem;\r\n    border: 2px solid gainsboro;\r\n    background-color: inherit;\r\n    border-radius: .5rem;\r\n    padding: .5rem 1rem;\r\n    cursor: pointer;\r\n    font-weight: bolder;\r\n}\r\n\r\n.popup {\r\n    position: absolute;\r\n    top: 10%;\r\n    left: 50%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    width: 10rem;\r\n    padding: 1rem;\r\n    box-shadow: 5px 5px 20px rgba(0,0,0, 0.25);\r\n    border-radius: .5rem;\r\n    background-color: white;\r\n    transform: translate(-7rem, 0);\r\n    z-index: 3;\r\n}\r\n\r\n.popup > input, .popup > h2 {\r\n    margin-bottom: .5rem;\r\n}\r\n\r\n.popup > input {\r\n    width: 100%;\r\n}\r\n\r\n.btnDiv {\r\n    display: flex;\r\n    width: 100%;\r\n}\r\n\r\n.btnDiv button {\r\n    width: 50%;\r\n    padding: .5rem;\r\n}\r\n\r\n.projectTitle {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    margin: 1rem;\r\n    box-shadow: 5px 5px 20px rgba(0,0,0,0.25);\r\n    padding: 1rem 2rem;\r\n    border-radius: 2rem;\r\n    color: white;\r\n}\r\n\r\n.todoDiv {\r\n    display: flex;\r\n}\r\n\r\n.done {\r\n    background-color: lightgreen;\r\n    border-color: mediumseagreen;\r\n}\r\n\r\n.red {\r\n    background-color: lightcoral;\r\n    border-color: maroon;\r\n}\r\n\r\n#prodjEdit {\r\n    position: absolute;\r\n    right: 2rem;\r\n    top: 6rem;\r\n    background-color: white;\r\n    padding: .5rem 1rem;\r\n    border-radius: .5rem;\r\n    text-align: center;\r\n    z-index: 3;\r\n}\r\n#prodjEdit > * {\r\n    padding: 1rem .5rem;\r\n    cursor: pointer;\r\n    border-radius: .5rem;\r\n}\r\n\r\n#prodjEdit > *:hover {\r\n    background-color: lightblue;\r\n}\r\n\r\n.show {\r\n    transform: translate(100%, 0);\r\n}\r\n"],"sourceRoot":""}]);
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

/***/ "./src/dots-3-vertical-svgrepo-com.svg":
/*!*********************************************!*\
  !*** ./src/dots-3-vertical-svgrepo-com.svg ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "8282e5bca8dbd435f1ecd7205f4d7453.svg");

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

    getFirstProject() {
        return this.projects[0]
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
        this.color = 200;
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

    getColor() {
        return this.color
    }

    setColor(value) {
        this.color = value
    }
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

    static changeProjectColor(projectName, color) {
        const app = Storage.getApp()
        app.getProject(projectName).setColor(color)
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
/* harmony import */ var _dots_3_vertical_svgrepo_com_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dots-3-vertical-svgrepo-com.svg */ "./src/dots-3-vertical-svgrepo-com.svg");
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

        if(_logic_storage__WEBPACK_IMPORTED_MODULE_3__["default"].getApp().getProjects().length > 0) {
            this.renderProject(_logic_storage__WEBPACK_IMPORTED_MODULE_3__["default"].getApp().getFirstProject())
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
        todoDelete.addEventListener('click', () => {
            _logic_storage__WEBPACK_IMPORTED_MODULE_3__["default"].deleteTodo(projectTitle, todo.title)
            this.renderProject(_logic_storage__WEBPACK_IMPORTED_MODULE_3__["default"].getApp().getProject(projectTitle))
        })
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
        projectDiv.style.backgroundColor = `hsl(${project.getColor()}, 50%, 80%)`
        const projectTitleDiv = document.createElement('div')
        projectTitleDiv.classList.add('projectTitle')
        projectTitleDiv.style.backgroundColor = `hsl(${project.getColor()}, 50%, 60%)`
        const projectTitle = document.createElement('h1')
        //projectTitle.style.color = `hsl(${project.getColor()}, 500%, 60%)`
        projectTitle.textContent = project.title
        projectTitleDiv.appendChild(projectTitle)
        const threedot = document.createElement('div')
        threedot.innerHTML = `<?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
        <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14 5C14 6.10457 13.1046 7 12 7C10.8954 7 10 6.10457 10 5C10 3.89543 10.8954 3 12 3C13.1046 3 14 3.89543 14 5Z" fill="#fff"/>
        <path d="M14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12Z" fill="#fff"/>
        <path d="M12 21C13.1046 21 14 20.1046 14 19C14 17.8954 13.1046 17 12 17C10.8954 17 10 17.8954 10 19C10 20.1046 10.8954 21 12 21Z" fill="#fff"/>
        </svg>`
        threedot.classList.add('dots')
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
        addTodoBtn.style.backgroundColor = `hsl(${project.getColor()}, 50%, 60%)`
        addTodoBtn.style.color = `white`
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
                this.sidebar.classList.remove('show')
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
        addProject.classList.add('btn')
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
            this.sidebar.classList.remove('show')
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
        const changeColor = document.createElement('h2')
        changeColor.textContent = "Change Color"
        changeColor.addEventListener('click', () => {
            this.changeColorPop(project)
            popup.remove()
        })
        popup.appendChild(changeColor)
        const deleteProject = document.createElement('h2')
        deleteProject.textContent = "Delete Project"
        deleteProject.addEventListener('click', () => {
            overlay.style.display = 'none'
            _logic_storage__WEBPACK_IMPORTED_MODULE_3__["default"].deleteProject(project.title)
            this.renderSidebar()
            this.renderProject(_logic_storage__WEBPACK_IMPORTED_MODULE_3__["default"].getApp().getFirstProject())
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
    }


    changeColorPop(project) {
        const overlay = document.getElementById('overlay')
        overlay.style.display = "block"
        overlay.addEventListener('click', () => {
            popup.remove()
            overlay.style.display = 'none'
        })

        const popup = document.createElement('div')
        popup.classList.add('popup')
        popup.style.width = "auto"
        const title = document.createElement('h2')
        title.textContent = "Change Color"
        popup.appendChild(title)

        const btnDiv = document.createElement('div')
        btnDiv.classList.add('buttonContainer')
        const blueBtn = document.createElement('button');
        blueBtn.classList.add('round')
        blueBtn.style.backgroundColor = `hsl(200, 50%, 60%)`
        blueBtn.addEventListener('click', () => {
           _logic_storage__WEBPACK_IMPORTED_MODULE_3__["default"].changeProjectColor(project.title, 200)
           this.renderProject(_logic_storage__WEBPACK_IMPORTED_MODULE_3__["default"].getApp().getProject(project.title))
           popup.remove()
        })
        btnDiv.appendChild(blueBtn)

        const redBtn = document.createElement('button')
        redBtn.classList.add('round')
        redBtn.style.backgroundColor = `hsl(0, 50%, 60%)`
        redBtn.addEventListener('click', () => {
            _logic_storage__WEBPACK_IMPORTED_MODULE_3__["default"].changeProjectColor(project.title, 0)
            this.renderProject(_logic_storage__WEBPACK_IMPORTED_MODULE_3__["default"].getApp().getProject(project.title))
        })
        btnDiv.appendChild(redBtn)


        const greenBtn = document.createElement('button')
        greenBtn.classList.add('round')
        greenBtn.style.backgroundColor = `hsl(500, 50%, 60%)`
        greenBtn.addEventListener('click', () => {
            _logic_storage__WEBPACK_IMPORTED_MODULE_3__["default"].changeProjectColor(project.title, 500)
            this.renderProject(_logic_storage__WEBPACK_IMPORTED_MODULE_3__["default"].getApp().getProject(project.title))
        })
        btnDiv.appendChild(greenBtn)

        const purpBtn = document.createElement('button')
        purpBtn.classList.add('round')
        purpBtn.style.backgroundColor = `hsl(260, 50%, 60%)`
        purpBtn.addEventListener('click', () => {
            _logic_storage__WEBPACK_IMPORTED_MODULE_3__["default"].changeProjectColor(project.title, 260)
            this.renderProject(_logic_storage__WEBPACK_IMPORTED_MODULE_3__["default"].getApp().getProject(project.title))
        })
        btnDiv.appendChild(purpBtn)

        popup.appendChild(btnDiv)


        this.content.appendChild(popup)

    }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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S0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLFFBQVEsS0FBSyxVQUFVLFlBQVksY0FBYyxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxjQUFjLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxLQUFLLEtBQUssWUFBWSxXQUFXLFlBQVks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QTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQzVEYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlOzs7Ozs7Ozs7Ozs7OztBQ2pEZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkRTO0FBQ1E7QUFDTjtBQUNBO0FB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V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDb0I7QUFDcEI7QUFDc0M7QUFDVDtBQUNHO0FBQ0E7QUFDTTtBQUNoQjtBQUN0QjtBQUNBLGVBQWUsMkNBQUU7QUFDakI7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9jbG9zZS5wbmciLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9kb3RzLTMtdmVydGljYWwtc3ZncmVwby1jb20uc3ZnIiwid2VicGFjazovL3RvZG8vLi9zcmMvbWVudS5wbmciLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvbG9naWMvYXBwLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvbG9naWMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2xvZ2ljL3N0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9sb2dpYy90YXNrLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvbG9naWMvdG9kby5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL3VpLmpzIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XFxyXFxufVxcclxcblxcclxcblxcclxcbioge1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG4jb3ZlcmxheSB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgICB6LWluZGV4OiAyO1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4jdGl0bGVCYXIge1xcclxcbiAgICBwYWRkaW5nOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uYnV0dG9uQ29udGFpbmVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbn1cXHJcXG5cXHJcXG4uaWNvbiB7XFxyXFxuICAgIGhlaWdodDogMnJlbTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBjb2xvcjogaW5oZXJpdDtcXHJcXG59XFxyXFxuXFxyXFxuLnNtbCB7XFxyXFxuICAgIGhlaWdodDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI2NvbnRlbnQge1xcclxcbiAgICB3aWR0aDogMTAwdnc7XFxyXFxufVxcclxcblxcclxcbi5yb3VuZCB7XFxyXFxuICAgIG1hcmdpbjogMCAuNXJlbTtcXHJcXG4gICAgaGVpZ2h0OiAgM3JlbTtcXHJcXG4gICAgYXNwZWN0LXJhdGlvOiAxO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuI3NpZGViYXIge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgbGVmdDogLTEwMCU7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC41cztcXHJcXG4gICAgei1pbmRleDogMztcXHJcXG59XFxyXFxuXFxyXFxuI3NpZGViYXIgPiAqIHtcXHJcXG4gICAgbWFyZ2luOiAxcmVtO1xcclxcbiAgICBcXHJcXG59XFxyXFxuXFxyXFxuI3Byb2plY3REaXYgPiAqIHtcXHJcXG4gICAgcGFkZGluZzogLjVyZW0gMDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4jcHJvamVjdERpdiA+ICo6aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGJsdWU7XFxyXFxufVxcclxcblxcclxcblxcclxcbi5wcm9qZWN0Q29udGVudCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtd3JhcDogbm93cmFwO1xcclxcbiAgICBvdmVyZmxvdy14OiBhdXRvO1xcclxcblxcclxcbiAgICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7XFxyXFxuICAgIHNjcm9sbGJhci13aWR0aDogbm9uZTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdENvbnRlbnQ6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmRvdHMge1xcclxcbiAgICBoZWlnaHQ6IDIuNXJlbTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBmaWxsOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3Qge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8sIC5wcm9qZWN0VGl0bGUsIC5hZGRUb2RvIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi50b2RvIHtcXHJcXG4gICAgZmxleDogMCAwIGF1dG87XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtd3JhcDogbm93cmFwO1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIGJveC1zaGFkb3c6IDVweCA1cHggMjBweCByZ2JhKDAsMCwwLDAuMjUpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAuNXJlbTtcXHJcXG4gICAgd2lkdGg6IDIwcmVtO1xcclxcbiAgICBtYXgtaGVpZ2h0OiA4MCU7XFxyXFxuICAgIHBhZGRpbmc6IDFyZW07XFxyXFxuICAgIG1hcmdpbjogMXJlbTtcXHJcXG4gICAgYWxpZ24tc2VsZjogc2VsZi1zdGFydDtcXHJcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXHJcXG5cXHJcXG4gICAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lO1xcclxcbiAgICBzY3JvbGxiYXItd2lkdGg6IDJweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG86Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXHJcXG4gICAgd2lkdGg6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi50b2RvOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMjEyMTI7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IC41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kbzo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZFRvZG8ge1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICAgIG1pbi13aWR0aDogMTByZW07XFxyXFxuICAgIGhlaWdodDogMTByZW07XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgYm94LXNoYWRvdzogNXB4IDVweCAyMHB4IHJnYmEoMCwwLDAsIDAuMjUpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAuNXJlbTtcXHJcXG4gICAgcGFkZGluZzogLjVyZW0gMXJlbTtcXHJcXG4gICAgbWFyZ2luOiAxcmVtO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi50YXNrIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGdhaW5zYm9ybztcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogLjVyZW07XFxyXFxuICAgIHBhZGRpbmc6IC41cmVtIDFyZW07XFxyXFxuICAgIG1hcmdpbjogMXJlbSBhdXRvO1xcclxcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMjVzLCBib3JkZXItY29sb3IgMC4yNXM7XFxyXFxufVxcclxcblxcclxcbi50YXNrRGF0ZSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogLjc1cmVtO1xcclxcbiAgICBjb2xvcjogZ3JleTtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0biB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDFyZW07XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGdhaW5zYm9ybztcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogLjVyZW07XFxyXFxuICAgIHBhZGRpbmc6IC41cmVtIDFyZW07XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0b3A6IDEwJTtcXHJcXG4gICAgbGVmdDogNTAlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICB3aWR0aDogMTByZW07XFxyXFxuICAgIHBhZGRpbmc6IDFyZW07XFxyXFxuICAgIGJveC1zaGFkb3c6IDVweCA1cHggMjBweCByZ2JhKDAsMCwwLCAwLjI1KTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogLjVyZW07XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtN3JlbSwgMCk7XFxyXFxuICAgIHotaW5kZXg6IDM7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cCA+IGlucHV0LCAucG9wdXAgPiBoMiB7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IC41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXAgPiBpbnB1dCB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuRGl2IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5idG5EaXYgYnV0dG9uIHtcXHJcXG4gICAgd2lkdGg6IDUwJTtcXHJcXG4gICAgcGFkZGluZzogLjVyZW07XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0VGl0bGUge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIG1hcmdpbjogMXJlbTtcXHJcXG4gICAgYm94LXNoYWRvdzogNXB4IDVweCAyMHB4IHJnYmEoMCwwLDAsMC4yNSk7XFxyXFxuICAgIHBhZGRpbmc6IDFyZW0gMnJlbTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMnJlbTtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kb0RpdiB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxufVxcclxcblxcclxcbi5kb25lIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmVlbjtcXHJcXG4gICAgYm9yZGVyLWNvbG9yOiBtZWRpdW1zZWFncmVlbjtcXHJcXG59XFxyXFxuXFxyXFxuLnJlZCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Y29yYWw7XFxyXFxuICAgIGJvcmRlci1jb2xvcjogbWFyb29uO1xcclxcbn1cXHJcXG5cXHJcXG4jcHJvZGpFZGl0IHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICByaWdodDogMnJlbTtcXHJcXG4gICAgdG9wOiA2cmVtO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgcGFkZGluZzogLjVyZW0gMXJlbTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogLjVyZW07XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgei1pbmRleDogMztcXHJcXG59XFxyXFxuI3Byb2RqRWRpdCA+ICoge1xcclxcbiAgICBwYWRkaW5nOiAxcmVtIC41cmVtO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IC41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jcHJvZGpFZGl0ID4gKjpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Ymx1ZTtcXHJcXG59XFxyXFxuXFxyXFxuLnNob3cge1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxMDAlLCAwKTtcXHJcXG59XFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHNCQUFzQjtBQUMxQjs7O0FBR0E7SUFDSSxVQUFVO0lBQ1YsU0FBUztBQUNiOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixnQkFBZ0I7SUFDaEIsc0JBQXNCOztBQUUxQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixZ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QixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFNBQVM7SUFDVCx1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsVUFBVTtBQUNkO0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLDZCQUE2QjtBQUNqQ1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XFxyXFxufVxcclxcblxcclxcblxcclxcbioge1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG4jb3ZlcmxheSB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgICB6LWluZGV4OiAyO1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4jdGl0bGVCYXIge1xcclxcbiAgICBwYWRkaW5nOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uYnV0dG9uQ29udGFpbmVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbn1cXHJcXG5cXHJcXG4uaWNvbiB7XFxyXFxuICAgIGhlaWdodDogMnJlbTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBjb2xvcjogaW5oZXJpdDtcXHJcXG59XFxyXFxuXFxyXFxuLnNtbCB7XFxyXFxuICAgIGhlaWdodDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI2NvbnRlbnQge1xcclxcbiAgICB3aWR0aDogMTAwdnc7XFxyXFxufVxcclxcblxcclxcbi5yb3VuZCB7XFxyXFxuICAgIG1hcmdpbjogMCAuNXJlbTtcXHJcXG4gICAgaGVpZ2h0OiAgM3JlbTtcXHJcXG4gICAgYXNwZWN0LXJhdGlvOiAxO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuI3NpZGViYXIge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgbGVmdDogLTEwMCU7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC41cztcXHJcXG4gICAgei1pbmRleDogMztcXHJcXG59XFxyXFxuXFxyXFxuI3NpZGViYXIgPiAqIHtcXHJcXG4gICAgbWFyZ2luOiAxcmVtO1xcclxcbiAgICBcXHJcXG59XFxyXFxuXFxyXFxuI3Byb2plY3REaXYgPiAqIHtcXHJcXG4gICAgcGFkZGluZzogLjVyZW0gMDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4jcHJvamVjdERpdiA+ICo6aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGJsdWU7XFxyXFxufVxcclxcblxcclxcblxcclxcbi5wcm9qZWN0Q29udGVudCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtd3JhcDogbm93cmFwO1xcclxcbiAgICBvdmVyZmxvdy14OiBhdXRvO1xcclxcblxcclxcbiAgICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7XFxyXFxuICAgIHNjcm9sbGJhci13aWR0aDogbm9uZTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdENvbnRlbnQ6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmRvdHMge1xcclxcbiAgICBoZWlnaHQ6IDIuNXJlbTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBmaWxsOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3Qge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8sIC5wcm9qZWN0VGl0bGUsIC5hZGRUb2RvIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi50b2RvIHtcXHJcXG4gICAgZmxleDogMCAwIGF1dG87XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtd3JhcDogbm93cmFwO1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIGJveC1zaGFkb3c6IDVweCA1cHggMjBweCByZ2JhKDAsMCwwLDAuMjUpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAuNXJlbTtcXHJcXG4gICAgd2lkdGg6IDIwcmVtO1xcclxcbiAgICBtYXgtaGVpZ2h0OiA4MCU7XFxyXFxuICAgIHBhZGRpbmc6IDFyZW07XFxyXFxuICAgIG1hcmdpbjogMXJlbTtcXHJcXG4gICAgYWxpZ24tc2VsZjogc2VsZi1zdGFydDtcXHJcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXHJcXG5cXHJcXG4gICAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lO1xcclxcbiAgICBzY3JvbGxiYXItd2lkdGg6IDJweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG86Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXHJcXG4gICAgd2lkdGg6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi50b2RvOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMjEyMTI7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IC41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kbzo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZFRvZG8ge1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICAgIG1pbi13aWR0aDogMTByZW07XFxyXFxuICAgIGhlaWdodDogMTByZW07XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgYm94LXNoYWRvdzogNXB4IDVweCAyMHB4IHJnYmEoMCwwLDAsIDAuMjUpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAuNXJlbTtcXHJcXG4gICAgcGFkZGluZzogLjVyZW0gMXJlbTtcXHJcXG4gICAgbWFyZ2luOiAxcmVtO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi50YXNrIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGdhaW5zYm9ybztcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogLjVyZW07XFxyXFxuICAgIHBhZGRpbmc6IC41cmVtIDFyZW07XFxyXFxuICAgIG1hcmdpbjogMXJlbSBhdXRvO1xcclxcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMjVzLCBib3JkZXItY29sb3IgMC4yNXM7XFxyXFxufVxcclxcblxcclxcbi50YXNrRGF0ZSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogLjc1cmVtO1xcclxcbiAgICBjb2xvcjogZ3JleTtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0biB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDFyZW07XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGdhaW5zYm9ybztcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogLjVyZW07XFxyXFxuICAgIHBhZGRpbmc6IC41cmVtIDFyZW07XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0b3A6IDEwJTtcXHJcXG4gICAgbGVmdDogNTAlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICB3aWR0aDogMTByZW07XFxyXFxuICAgIHBhZGRpbmc6IDFyZW07XFxyXFxuICAgIGJveC1zaGFkb3c6IDVweCA1cHggMjBweCByZ2JhKDAsMCwwLCAwLjI1KTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogLjVyZW07XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtN3JlbSwgMCk7XFxyXFxuICAgIHotaW5kZXg6IDM7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cCA+IGlucHV0LCAucG9wdXAgPiBoMiB7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IC41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXAgPiBpbnB1dCB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuRGl2IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5idG5EaXYgYnV0dG9uIHtcXHJcXG4gICAgd2lkdGg6IDUwJTtcXHJcXG4gICAgcGFkZGluZzogLjVyZW07XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0VGl0bGUge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIG1hcmdpbjogMXJlbTtcXHJcXG4gICAgYm94LXNoYWRvdzogNXB4IDVweCAyMHB4IHJnYmEoMCwwLDAsMC4yNSk7XFxyXFxuICAgIHBhZGRpbmc6IDFyZW0gMnJlbTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMnJlbTtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kb0RpdiB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxufVxcclxcblxcclxcbi5kb25lIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmVlbjtcXHJcXG4gICAgYm9yZGVyLWNvbG9yOiBtZWRpdW1zZWFncmVlbjtcXHJcXG59XFxyXFxuXFxyXFxuLnJlZCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Y29yYWw7XFxyXFxuICAgIGJvcmRlci1jb2xvcjogbWFyb29uO1xcclxcbn1cXHJcXG5cXHJcXG4jcHJvZGpFZGl0IHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICByaWdodDogMnJlbTtcXHJcXG4gICAgdG9wOiA2cmVtO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgcGFkZGluZzogLjVyZW0gMXJlbTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogLjVyZW07XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgei1pbmRleDogMztcXHJcXG59XFxyXFxuI3Byb2RqRWRpdCA+ICoge1xcclxcbiAgICBwYWRkaW5nOiAxcmVtIC41cmVtO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IC41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jcHJvZGpFZGl0ID4gKjpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Ymx1ZTtcXHJcXG59XFxyXFxuXFxyXFxuLnNob3cge1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxMDAlLCAwKTtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiOTZlODFjMTBhOWQ1Zjc4YmRhNzQzN2I5ODMyM2Q0NjkucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjgyODJlNWJjYThkYmQ0MzVmMWVjZDcyMDVmNGQ3NDUzLnN2Z1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIzMmMxM2ZiNmE3N2ZjZWZkNTg5NDk4NDQyMjcwZjU0MC5wbmdcIjsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNsYXNzIEFwcCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLnByb2plY3RzID0gW11cclxuICAgIH1cclxuXHJcbiAgICBhZGRQcm9qZWN0KG5ld1Byb2plY3QpIHtcclxuICAgICAgICBpZih0aGlzLnByb2plY3RzLmZpbmQoKHByb2plY3QpID0+IHByb2plY3QuZ2V0VGl0bGUoKSA9PT0gbmV3UHJvamVjdC5nZXRUaXRsZSgpKSkge1xyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5wcm9qZWN0cy5wdXNoKG5ld1Byb2plY3QpXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0UHJvamVjdChwcm9qZWN0TmFtZSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnByb2plY3RzLmZpbmQoKHByb2plY3QpID0+IHByb2plY3QuZ2V0VGl0bGUoKSA9PT0gcHJvamVjdE5hbWUpXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Rmlyc3RQcm9qZWN0KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnByb2plY3RzWzBdXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0UHJvamVjdHMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvamVjdHNcclxuICAgIH1cclxuXHJcbiAgICBzZXRQcm9qZWN0cyhwcm9qZWN0cykge1xyXG4gICAgICAgIHRoaXMucHJvamVjdHMgPSBwcm9qZWN0c1xyXG4gICAgfVxyXG5cclxuICAgIGRlbGV0ZVByb2plY3QocHJvamVjdE5hbWUpIHtcclxuICAgICAgICBjb25zdCBwcm9qZWN0VG9EZWxldGUgPSB0aGlzLmdldFByb2plY3QocHJvamVjdE5hbWUpXHJcblxyXG4gICAgICAgIHRoaXMucHJvamVjdHMuc3BsaWNlKHRoaXMucHJvamVjdHMuaW5kZXhPZihwcm9qZWN0VG9EZWxldGUpLCAxKVxyXG4gICAgfVxyXG5cclxuICAgIGRlbGV0ZVRvZG8ocHJvamVjdE5hbWUsIHRvZG9OYW1lKSB7XHJcbiAgICAgICAgY29uc3QgcHJvamVjdCA9IHRoaXMuZ2V0UHJvamVjdChwcm9qZWN0TmFtZSlcclxuXHJcbiAgICAgICAgcHJvamVjdC5kZWxldGVUb2RvKHRvZG9OYW1lKVxyXG4gICAgfVxyXG5cclxuICAgIGRlbGV0ZVRhc2tzKHByb2plY3ROYW1lLCB0b2RvTmFtZSkge1xyXG4gICAgICAgIGNvbnN0IHRvZG8gPSB0aGlzLmdldFByb2plY3QocHJvamVjdE5hbWUpLmdldFRvZG8odG9kb05hbWUpXHJcblxyXG4gICAgICAgIHRvZG8uZGVsZXRlVGFza3MoKVxyXG4gICAgfVxyXG5cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFwcCIsImNsYXNzIFByb2plY3Qge1xyXG4gICAgY29uc3RydWN0b3IodGl0bGUpIHtcclxuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XHJcbiAgICAgICAgdGhpcy5jb2xvciA9IDIwMDtcclxuICAgICAgICB0aGlzLnRvZG9zID0gW11cclxuICAgIH1cclxuXHJcbiAgICBnZXRUaXRsZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50aXRsZVxyXG4gICAgfVxyXG5cclxuICAgIHNldFRpdGxlKHRpdGxlKSB7XHJcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlXHJcbiAgICB9XHJcblxyXG5cclxuICAgIGFkZFRvZG8obmV3VG9kbykge1xyXG4gICAgICAgIGlmKHRoaXMudG9kb3MuZmluZCgodG9kbykgPT4gdG9kby5nZXRUaXRsZSgpID09PSBuZXdUb2RvLmdldFRpdGxlKCkpKSB7XHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy50b2Rvcy5wdXNoKG5ld1RvZG8pXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VG9kbyh0b2RvTmFtZSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRvZG9zLmZpbmQoKHRvZG8pID0+IHRvZG8uZ2V0VGl0bGUoKSA9PT0gdG9kb05hbWUpXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VG9kb3MoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudG9kb3NcclxuICAgIH1cclxuXHJcbiAgICBzZXRUb2Rvcyh0b2Rvcykge1xyXG4gICAgICAgIHRoaXMudG9kb3MgPSB0b2Rvc1xyXG4gICAgfVxyXG5cclxuICAgIGRlbGV0ZVRvZG8odG9kb05hbWUpIHtcclxuICAgICAgICBjb25zdCB0b2RvVG9EZWxldGUgPSB0aGlzLnRvZG9zLmZpbmQoKHRvZG8pID0+IHRvZG8uZ2V0VGl0bGUoKSA9PT0gdG9kb05hbWUpXHJcblxyXG4gICAgICAgIHRoaXMudG9kb3Muc3BsaWNlKHRoaXMudG9kb3MuaW5kZXhPZih0b2RvVG9EZWxldGUpLCAxKVxyXG4gICAgfVxyXG5cclxuICAgIGdldENvbG9yKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNvbG9yXHJcbiAgICB9XHJcblxyXG4gICAgc2V0Q29sb3IodmFsdWUpIHtcclxuICAgICAgICB0aGlzLmNvbG9yID0gdmFsdWVcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdCIsImltcG9ydCBBcHAgZnJvbSBcIi4vYXBwXCI7XHJcbmltcG9ydCBQcm9qZWN0IGZyb20gXCIuL3Byb2plY3RcIjtcclxuaW1wb3J0IFRhc2sgZnJvbSBcIi4vdGFza1wiO1xyXG5pbXBvcnQgVG9kbyBmcm9tIFwiLi90b2RvXCI7XHJcblxyXG5jbGFzcyBTdG9yYWdlIHtcclxuICAgIHN0YXRpYyBzYXZlQXBwKGRhdGEpIHtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYXBwJywgSlNPTi5zdHJpbmdpZnkoZGF0YSkpXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldEFwcCgpIHtcclxuICAgICAgICBjb25zdCBhcHAgPSBPYmplY3QuYXNzaWduKG5ldyBBcHAoKSwgSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYXBwJykpKVxyXG5cclxuICAgICAgICBhcHAuc2V0UHJvamVjdHMoXHJcbiAgICAgICAgICAgIGFwcC5nZXRQcm9qZWN0cygpLm1hcCgocHJvamVjdCkgPT4gT2JqZWN0LmFzc2lnbihuZXcgUHJvamVjdCgpLCBwcm9qZWN0KSlcclxuICAgICAgICApXHJcblxyXG4gICAgICAgIGFwcC5nZXRQcm9qZWN0cygpLmZvckVhY2goKHByb2plY3QpID0+IFxyXG4gICAgICAgICAgICBwcm9qZWN0LnNldFRvZG9zKHByb2plY3QuZ2V0VG9kb3MoKS5tYXAoKHRvZG8pID0+IE9iamVjdC5hc3NpZ24obmV3IFRvZG8oKSwgdG9kbykpKSlcclxuXHJcbiAgICAgICAgYXBwLmdldFByb2plY3RzKCkuZm9yRWFjaCgocHJvamVjdCkgPT4gXHJcbiAgICAgICAgICAgIHByb2plY3QuZ2V0VG9kb3MoKS5mb3JFYWNoKCh0b2RvKSA9PiBcclxuICAgICAgICAgICAgICAgIHRvZG8uc2V0VGFza3ModG9kby5nZXRUYXNrcygpLm1hcCgodGFzaykgPT4gT2JqZWN0LmFzc2lnbihuZXcgVGFzaywgdGFzaykpKSkpXHJcblxyXG4gICAgICAgIHJldHVybiBhcHA7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGFkZFByb2plY3QocHJvamVjdCkge1xyXG4gICAgICAgIGNvbnN0IGFwcCA9IFN0b3JhZ2UuZ2V0QXBwKClcclxuICAgICAgICBhcHAuYWRkUHJvamVjdChwcm9qZWN0KVxyXG4gICAgICAgIFN0b3JhZ2Uuc2F2ZUFwcChhcHApXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGFkZFRvZG8ocHJvamVjdE5hbWUsIHRvZG8pIHtcclxuICAgICAgICBjb25zdCBhcHAgPSBTdG9yYWdlLmdldEFwcCgpXHJcbiAgICAgICAgYXBwLmdldFByb2plY3QocHJvamVjdE5hbWUpLmFkZFRvZG8odG9kbylcclxuICAgICAgICBTdG9yYWdlLnNhdmVBcHAoYXBwKVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBhZGRUYXNrKHByb2plY3ROYW1lLCB0b2RvTmFtZSwgdGFzaykge1xyXG4gICAgICAgIGNvbnN0IGFwcCA9IFN0b3JhZ2UuZ2V0QXBwKClcclxuICAgICAgICBhcHAuZ2V0UHJvamVjdChwcm9qZWN0TmFtZSkuZ2V0VG9kbyh0b2RvTmFtZSkuYWRkVGFzayh0YXNrKVxyXG4gICAgICAgIFN0b3JhZ2Uuc2F2ZUFwcChhcHApXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHJlbmFtZVByb2plY3QocHJvamVjdE5hbWUsIG5ld1Byb2plY3ROYW1lKSB7XHJcbiAgICAgICAgY29uc3QgYXBwID0gU3RvcmFnZS5nZXRBcHAoKVxyXG4gICAgICAgIGFwcC5nZXRQcm9qZWN0KHByb2plY3ROYW1lKS5zZXRUaXRsZShuZXdQcm9qZWN0TmFtZSlcclxuICAgICAgICBTdG9yYWdlLnNhdmVBcHAoYXBwKVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBjaGFuZ2VQcm9qZWN0Q29sb3IocHJvamVjdE5hbWUsIGNvbG9yKSB7XHJcbiAgICAgICAgY29uc3QgYXBwID0gU3RvcmFnZS5nZXRBcHAoKVxyXG4gICAgICAgIGFwcC5nZXRQcm9qZWN0KHByb2plY3ROYW1lKS5zZXRDb2xvcihjb2xvcilcclxuICAgICAgICBTdG9yYWdlLnNhdmVBcHAoYXBwKVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyByZW5hbWVUb2RvKHByb2plY3ROYW1lLCB0b2RvTmFtZSwgbmV3VG9kb05hbWUpIHtcclxuICAgICAgICBjb25zdCBhcHAgPSBTdG9yYWdlLmdldEFwcCgpXHJcbiAgICAgICAgYXBwLmdldFByb2plY3QocHJvamVjdE5hbWUpLmdldFRvZG8odG9kb05hbWUpLnNldFRpdGxlKG5ld1RvZG9OYW1lKVxyXG4gICAgICAgIFN0b3JhZ2Uuc2F2ZUFwcChhcHApXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHJlbmFtZVRhc2socHJvamVjdE5hbWUsIHRvZG9OYW1lLCB0YXNrTmFtZSwgbmV3VGFza05hbWUpIHtcclxuICAgICAgICBjb25zdCBhcHAgPSBTdG9yYWdlLmdldEFwcCgpXHJcbiAgICAgICAgYXBwLmdldFByb2plY3QocHJvamVjdE5hbWUpLmdldFRvZG8odG9kb05hbWUpLmdldFRhc2sodGFza05hbWUpLnNldFRpdGxlKG5ld1Rhc2tOYW1lKVxyXG4gICAgICAgIFN0b3JhZ2Uuc2F2ZUFwcChhcHApXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGNoYW5nZURvbmUocHJvamVjdE5hbWUsIHRvZG9OYW1lLCB0YXNrTmFtZSkge1xyXG4gICAgICAgIGNvbnN0IGFwcCA9IFN0b3JhZ2UuZ2V0QXBwKClcclxuICAgICAgICBhcHAuZ2V0UHJvamVjdChwcm9qZWN0TmFtZSkuZ2V0VG9kbyh0b2RvTmFtZSkuZ2V0VGFzayh0YXNrTmFtZSkuY2hhbmdlRG9uZSgpXHJcbiAgICAgICAgU3RvcmFnZS5zYXZlQXBwKGFwcClcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZGVsZXRlUHJvamVjdChwcm9qZWN0TmFtZSkge1xyXG4gICAgICAgIGNvbnN0IGFwcCA9IFN0b3JhZ2UuZ2V0QXBwKClcclxuICAgICAgICBhcHAuZGVsZXRlUHJvamVjdChwcm9qZWN0TmFtZSlcclxuICAgICAgICBTdG9yYWdlLnNhdmVBcHAoYXBwKVxyXG4gICAgfVxyXG4gICAgXHJcblxyXG4gICAgc3RhdGljIGRlbGV0ZVRvZG8ocHJvamVjdE5hbWUsIHRvZG9OYW1lKSB7XHJcbiAgICAgICAgY29uc3QgYXBwID0gU3RvcmFnZS5nZXRBcHAoKVxyXG4gICAgICAgIGFwcC5kZWxldGVUb2RvKHByb2plY3ROYW1lLCB0b2RvTmFtZSlcclxuICAgICAgICBTdG9yYWdlLnNhdmVBcHAoYXBwKVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBkZWxldGVUYXNrKHByb2plY3ROYW1lLCB0b2RvTmFtZSkge1xyXG4gICAgICAgIGNvbnN0IGFwcCA9IFN0b3JhZ2UuZ2V0QXBwKClcclxuICAgICAgICBhcHAuZGVsZXRlVGFza3MocHJvamVjdE5hbWUsIHRvZG9OYW1lKVxyXG4gICAgICAgIFN0b3JhZ2Uuc2F2ZUFwcChhcHApXHJcbiAgICB9XHJcblxyXG5cclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFN0b3JhZ2UiLCJjbGFzcyBUYXNrIHtcclxuICAgIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjID0gJycsIGR1ZWRhdGUgPSAnJykge1xyXG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcclxuICAgICAgICB0aGlzLmRlc2MgPSBkZXNjO1xyXG4gICAgICAgIHRoaXMuZHVlZGF0ZSA9IGR1ZWRhdGVcclxuICAgICAgICB0aGlzLmRvbmUgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRUaXRsZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50aXRsZTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRUaXRsZSh2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMudGl0bGUgPSB2YWx1ZVxyXG4gICAgfVxyXG5cclxuICAgIGdldERlc2MoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGVzYztcclxuICAgIH1cclxuXHJcbiAgICBzZXREZXNjKHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5kZXNjID0gdmFsdWVcclxuICAgIH1cclxuXHJcbiAgICBnZXREdWVEYXRlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmR1ZWRhdGVcclxuICAgIH1cclxuXHJcbiAgICBzZXREdWVEYXRlKHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5kdWVkYXRlID0gdmFsdWVcclxuICAgIH1cclxuXHJcbiAgICBcclxuXHJcbiAgICBjaGFuZ2VEb25lKCkge1xyXG4gICAgICAgIHRoaXMuZG9uZSA9ICF0aGlzLmRvbmVcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGFzayIsIlxyXG5cclxuY2xhc3MgVG9kbyB7XHJcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSkge1xyXG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZVxyXG4gICAgICAgIHRoaXMudGFza3MgPSBbXVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBnZXRUaXRsZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50aXRsZTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRUaXRsZSh2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMudGl0bGUgPSB2YWx1ZVxyXG4gICAgfVxyXG5cclxuICAgIGFkZFRhc2sodGFzaykge1xyXG4gICAgICAgIHRoaXMudGFza3MucHVzaCh0YXNrKVxyXG4gICAgfVxyXG5cclxuICAgIGdldFRhc2sodGFza1RpdGxlKSB7XHJcbiAgICAgICByZXR1cm4gdGhpcy50YXNrcy5maW5kKCh0YXNrKSA9PiB0YXNrLmdldFRpdGxlKCkgPT09IHRhc2tUaXRsZSlcclxuXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VGFza3MoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudGFza3NcclxuICAgIH1cclxuICAgIHNldFRhc2tzKHRhc2tzKSB7XHJcbiAgICAgICAgdGhpcy50YXNrcyA9IHRhc2tzXHJcbiAgICB9XHJcblxyXG4gICAgZGVsZXRlVGFza3MoKSB7XHJcbiAgICAgICAgdGhpcy50YXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XHJcbiAgICAgICAgICAgIGlmKHRhc2suZG9uZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy50YXNrcy5zcGxpY2UodGhpcy50YXNrcy5pbmRleE9mKHRhc2spLCAxKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRvZG8iLCJpbXBvcnQgVGFzayBmcm9tIFwiLi9sb2dpYy90YXNrXCJcclxuaW1wb3J0IFRvZG8gZnJvbSBcIi4vbG9naWMvdG9kb1wiXHJcbmltcG9ydCBQcm9qZWN0IGZyb20gXCIuL2xvZ2ljL3Byb2plY3RcIlxyXG5pbXBvcnQgU3RvcmFnZSBmcm9tIFwiLi9sb2dpYy9zdG9yYWdlXCJcclxuaW1wb3J0IENsb3NlIGZyb20gJy4vY2xvc2UucG5nJ1xyXG5pbXBvcnQgRG90cyBmcm9tICcuL2RvdHMtMy12ZXJ0aWNhbC1zdmdyZXBvLWNvbS5zdmcnXHJcbmltcG9ydCBNZW51IGZyb20gJy4vbWVudS5wbmcnXHJcblxyXG5cclxuY2xhc3MgVUkge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5jb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKVxyXG4gICAgICAgIHRoaXMuc2lkZWJhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaWRlYmFyJylcclxuICAgICAgICB0aGlzLm1lbnUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVudScpXHJcbiAgICAgICAgdGhpcy5tZW51LnNyYyA9IE1lbnVcclxuICAgICAgICB0aGlzLm1lbnUub25jbGljayA9ICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zaWRlYmFyLmNsYXNzTGlzdC5hZGQoJ3Nob3cnKVxyXG4gICAgICAgICAgICBjb25zdCBvdmVybGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ292ZXJsYXknKVxyXG4gICAgICAgICAgICBvdmVybGF5LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCJcclxuICAgICAgICAgICAgb3ZlcmxheS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2lkZWJhci5jbGFzc0xpc3QucmVtb3ZlKCdzaG93JylcclxuICAgICAgICAgICAgICAgIG92ZXJsYXkuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZihTdG9yYWdlLmdldEFwcCgpLmdldFByb2plY3RzKCkubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICB0aGlzLnJlbmRlclByb2plY3QoU3RvcmFnZS5nZXRBcHAoKS5nZXRGaXJzdFByb2plY3QoKSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyVG9kbyhwcm9qZWN0VGl0bGUsIHRvZG8pIHtcclxuICAgICAgICBjb25zdCB0b2RvRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgICB0b2RvRGl2LmNsYXNzTGlzdC5hZGQoJ3RvZG8nKVxyXG4gICAgICAgIGNvbnN0IHRvZG9UaXRsZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcclxuICAgICAgICB0b2RvVGl0bGVEaXYuY2xhc3NMaXN0LmFkZCgnYnV0dG9uQ29udGFpbmVyJylcclxuICAgICAgICBjb25zdCB0b2RvVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpXHJcbiAgICAgICAgdG9kb1RpdGxlLnRleHRDb250ZW50ICA9IHRvZG8udGl0bGU7XHJcbiAgICAgICAgdG9kb1RpdGxlRGl2LmFwcGVuZENoaWxkKHRvZG9UaXRsZSlcclxuICAgICAgICBjb25zdCB0b2RvRGVsZXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcclxuICAgICAgICB0b2RvRGVsZXRlLmNsYXNzTGlzdC5hZGQoJ2ljb24nKVxyXG4gICAgICAgIHRvZG9EZWxldGUuY2xhc3NMaXN0LmFkZCgnc21sJylcclxuICAgICAgICB0b2RvRGVsZXRlLnNyYyA9IENsb3NlXHJcbiAgICAgICAgdG9kb0RlbGV0ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgU3RvcmFnZS5kZWxldGVUb2RvKHByb2plY3RUaXRsZSwgdG9kby50aXRsZSlcclxuICAgICAgICAgICAgdGhpcy5yZW5kZXJQcm9qZWN0KFN0b3JhZ2UuZ2V0QXBwKCkuZ2V0UHJvamVjdChwcm9qZWN0VGl0bGUpKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdG9kb1RpdGxlRGl2LmFwcGVuZENoaWxkKHRvZG9EZWxldGUpXHJcbiAgICAgICAgdG9kb0Rpdi5hcHBlbmRDaGlsZCh0b2RvVGl0bGVEaXYpXHJcbiAgICAgICAgY29uc3QgdGFza0hvbGRlckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgdGhpcy5yZW5kZXJUYXNrcyhwcm9qZWN0VGl0bGUsIHRvZG8uZ2V0VGl0bGUoKSwgdG9kby50YXNrcywgdGFza0hvbGRlckRpdilcclxuICAgICAgICB0b2RvRGl2LmFwcGVuZENoaWxkKHRhc2tIb2xkZXJEaXYpXHJcbiAgICAgICAgY29uc3QgYWRkVGFza0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXHJcbiAgICAgICAgYWRkVGFza0J0bi5pbm5lckhUTUwgPSBcIkFkZCBUYXNrXCJcclxuICAgICAgICBhZGRUYXNrQnRuLmNsYXNzTGlzdC5hZGQoJ2J0bicpXHJcbiAgICAgICAgYWRkVGFza0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5hZGRUYXNrUG9wKHByb2plY3RUaXRsZSwgdG9kby5nZXRUaXRsZSgpLCB0YXNrSG9sZGVyRGl2KVxyXG4gICAgICAgIH0pXHJcblxyXG5cclxuICAgICAgICB0b2RvRGl2LmFwcGVuZENoaWxkKGFkZFRhc2tCdG4pXHJcblxyXG4gICAgICAgIGNvbnN0IHJlbW92ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXHJcbiAgICAgICAgcmVtb3ZlQnRuLmlubmVySFRNTCA9ICdSZW1vdmUgRG9uZSBUYXNrcydcclxuICAgICAgICByZW1vdmVCdG4uY2xhc3NMaXN0LmFkZCgnYnRuJylcclxuICAgICAgICByZW1vdmVCdG4uY2xhc3NMaXN0LmFkZCgncmVkJylcclxuICAgICAgICByZW1vdmVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIFN0b3JhZ2UuZGVsZXRlVGFzayhwcm9qZWN0VGl0bGUsIHRvZG8uZ2V0VGl0bGUoKSlcclxuICAgICAgICAgICAgdGhpcy5yZW5kZXJQcm9qZWN0KFN0b3JhZ2UuZ2V0QXBwKCkuZ2V0UHJvamVjdChwcm9qZWN0VGl0bGUpKVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIHRvZG9EaXYuYXBwZW5kQ2hpbGQocmVtb3ZlQnRuKVxyXG5cclxuICAgICAgICByZXR1cm4gdG9kb0RpdlxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlclRhc2socHJvamVjdFRpdGxlLCB0b2RvVGl0bGUsIHRhc2spIHtcclxuICAgICAgICBjb25zdCB0YXNrRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgICB0YXNrRGl2LmNsYXNzTGlzdC5hZGQoJ3Rhc2snKVxyXG4gICAgICAgIGNvbnN0IHRhc2tUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxyXG4gICAgICAgIHRhc2tUaXRsZS50ZXh0Q29udGVudCA9IHRhc2sudGl0bGVcclxuICAgICAgICB0YXNrRGl2LmFwcGVuZENoaWxkKHRhc2tUaXRsZSlcclxuICAgICAgICB0YXNrRGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBTdG9yYWdlLmNoYW5nZURvbmUocHJvamVjdFRpdGxlLCB0b2RvVGl0bGUsIHRhc2suZ2V0VGl0bGUoKSlcclxuICAgICAgICAgICAgdGhpcy5yZW5kZXJQcm9qZWN0KFN0b3JhZ2UuZ2V0QXBwKCkuZ2V0UHJvamVjdChwcm9qZWN0VGl0bGUpKVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGlmKHRhc2suZG9uZSkge1xyXG4gICAgICAgICAgICB0YXNrRGl2LmNsYXNzTGlzdC5hZGQoJ2RvbmUnKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYodGFzay5kZXNjICE9PSBcIlwiKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRhc2tEZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIilcclxuICAgICAgICAgICAgdGFza0Rlc2MudGV4dENvbnRlbnQgPSB0YXNrLmRlc2NcclxuICAgICAgICAgICAgdGFza0Rpdi5hcHBlbmRDaGlsZCh0YXNrRGVzYylcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKHRhc2suZHVlZGF0ZSAhPT0gXCJcIikge1xyXG4gICAgICAgICAgICBjb25zdCBzcGxpdERhdGUgPSB0YXNrLmR1ZWRhdGUuc3BsaXQoJy0nKVxyXG4gICAgICAgICAgICBjb25zdCB0YXNrRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxyXG4gICAgICAgICAgICB0YXNrRGF0ZS5jbGFzc0xpc3QuYWRkKCd0YXNrRGF0ZScpXHJcbiAgICAgICAgICAgIHRhc2tEYXRlLnRleHRDb250ZW50ID0gYCR7c3BsaXREYXRlWzFdfS0ke3NwbGl0RGF0ZVsyXX0tJHtzcGxpdERhdGVbMF19YFxyXG4gICAgICAgICAgICB0YXNrRGl2LmFwcGVuZENoaWxkKHRhc2tEYXRlKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRhc2tEaXZcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJUYXNrcyhwcm9qZWN0VGl0bGUsIHRvZG9UaXRsZSwgdGFza3MsIHBhcmVudCkge1xyXG4gICAgICAgIHBhcmVudC50ZXh0Q29udGVudCA9IFwiXCJcclxuICAgICAgICBmb3IobGV0IHRhc2sgb2YgdGFza3MpIHtcclxuICAgICAgICAgICAgcGFyZW50LmFwcGVuZENoaWxkKHRoaXMucmVuZGVyVGFzayhwcm9qZWN0VGl0bGUsIHRvZG9UaXRsZSwgdGFzaykpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlclByb2plY3QocHJvamVjdCkge1xyXG4gICAgICAgIHRoaXMuY29udGVudC5pbm5lckhUTUwgPSBcIlwiXHJcbiAgICAgICAgY29uc3QgcHJvamVjdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgcHJvamVjdERpdi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0JylcclxuICAgICAgICBwcm9qZWN0RGl2LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGBoc2woJHtwcm9qZWN0LmdldENvbG9yKCl9LCA1MCUsIDgwJSlgXHJcbiAgICAgICAgY29uc3QgcHJvamVjdFRpdGxlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgICBwcm9qZWN0VGl0bGVEaXYuY2xhc3NMaXN0LmFkZCgncHJvamVjdFRpdGxlJylcclxuICAgICAgICBwcm9qZWN0VGl0bGVEaXYuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gYGhzbCgke3Byb2plY3QuZ2V0Q29sb3IoKX0sIDUwJSwgNjAlKWBcclxuICAgICAgICBjb25zdCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpXHJcbiAgICAgICAgLy9wcm9qZWN0VGl0bGUuc3R5bGUuY29sb3IgPSBgaHNsKCR7cHJvamVjdC5nZXRDb2xvcigpfSwgNTAwJSwgNjAlKWBcclxuICAgICAgICBwcm9qZWN0VGl0bGUudGV4dENvbnRlbnQgPSBwcm9qZWN0LnRpdGxlXHJcbiAgICAgICAgcHJvamVjdFRpdGxlRGl2LmFwcGVuZENoaWxkKHByb2plY3RUaXRsZSlcclxuICAgICAgICBjb25zdCB0aHJlZWRvdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgdGhyZWVkb3QuaW5uZXJIVE1MID0gYDw/eG1sIHZlcnNpb249XCIxLjBcIiBlbmNvZGluZz1cInV0Zi04XCI/PjwhLS0gVXBsb2FkZWQgdG86IFNWRyBSZXBvLCB3d3cuc3ZncmVwby5jb20sIEdlbmVyYXRvcjogU1ZHIFJlcG8gTWl4ZXIgVG9vbHMgLS0+XHJcbiAgICAgICAgPHN2ZyB3aWR0aD1cImF1dG9cIiBoZWlnaHQ9XCJhdXRvXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxyXG4gICAgICAgIDxwYXRoIGQ9XCJNMTQgNUMxNCA2LjEwNDU3IDEzLjEwNDYgNyAxMiA3QzEwLjg5NTQgNyAxMCA2LjEwNDU3IDEwIDVDMTAgMy44OTU0MyAxMC44OTU0IDMgMTIgM0MxMy4xMDQ2IDMgMTQgMy44OTU0MyAxNCA1WlwiIGZpbGw9XCIjZmZmXCIvPlxyXG4gICAgICAgIDxwYXRoIGQ9XCJNMTQgMTJDMTQgMTMuMTA0NiAxMy4xMDQ2IDE0IDEyIDE0QzEwLjg5NTQgMTQgMTAgMTMuMTA0NiAxMCAxMkMxMCAxMC44OTU0IDEwLjg5NTQgMTAgMTIgMTBDMTMuMTA0NiAxMCAxNCAxMC44OTU0IDE0IDEyWlwiIGZpbGw9XCIjZmZmXCIvPlxyXG4gICAgICAgIDxwYXRoIGQ9XCJNMTIgMjFDMTMuMTA0NiAyMSAxNCAyMC4xMDQ2IDE0IDE5QzE0IDE3Ljg5NTQgMTMuMTA0NiAxNyAxMiAxN0MxMC44OTU0IDE3IDEwIDE3Ljg5NTQgMTAgMTlDMTAgMjAuMTA0NiAxMC44OTU0IDIxIDEyIDIxWlwiIGZpbGw9XCIjZmZmXCIvPlxyXG4gICAgICAgIDwvc3ZnPmBcclxuICAgICAgICB0aHJlZWRvdC5jbGFzc0xpc3QuYWRkKCdkb3RzJylcclxuICAgICAgICB0aHJlZWRvdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5wcm9qZWN0RWRpdFBvcChwcm9qZWN0KVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgcHJvamVjdFRpdGxlRGl2LmFwcGVuZENoaWxkKHRocmVlZG90KVxyXG4gICAgICAgIHByb2plY3REaXYuYXBwZW5kQ2hpbGQocHJvamVjdFRpdGxlRGl2KVxyXG4gICAgICAgIGNvbnN0IHByb2plY3RDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgICBwcm9qZWN0Q29udGVudC5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0Q29udGVudCcpXHJcbiAgICAgICAgY29uc3QgdG9kb0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgdG9kb0Rpdi5jbGFzc0xpc3QuYWRkKCd0b2RvRGl2JylcclxuICAgICAgICBwcm9qZWN0LmdldFRvZG9zKCkuZm9yRWFjaCgodG9kbykgPT4gdG9kb0Rpdi5hcHBlbmRDaGlsZCh0aGlzLnJlbmRlclRvZG8ocHJvamVjdC5nZXRUaXRsZSgpLHRvZG8pKSlcclxuICAgICAgICBwcm9qZWN0Q29udGVudC5hcHBlbmRDaGlsZCh0b2RvRGl2KVxyXG4gICAgICAgIGNvbnN0IGFkZFRvZG9CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxyXG4gICAgICAgIGFkZFRvZG9CdG4uY2xhc3NMaXN0LmFkZCgnYWRkVG9kbycpXHJcbiAgICAgICAgYWRkVG9kb0J0bi5pbm5lckhUTUwgPSAnQWRkIFRvZG8nXHJcbiAgICAgICAgYWRkVG9kb0J0bi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBgaHNsKCR7cHJvamVjdC5nZXRDb2xvcigpfSwgNTAlLCA2MCUpYFxyXG4gICAgICAgIGFkZFRvZG9CdG4uc3R5bGUuY29sb3IgPSBgd2hpdGVgXHJcbiAgICAgICAgYWRkVG9kb0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5hZGRUb2RvUG9wKHByb2plY3QuZ2V0VGl0bGUoKSwgdG9kb0RpdilcclxuICAgICAgICB9KVxyXG4gICAgICAgIHByb2plY3RDb250ZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3doZWVsJywgKGUpID0+IHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgICAgIHByb2plY3RDb250ZW50LnNjcm9sbExlZnQgKz0gZS5kZWx0YVlcclxuICAgICAgICB9KVxyXG4gICAgICAgIHByb2plY3RDb250ZW50LmFwcGVuZENoaWxkKGFkZFRvZG9CdG4pXHJcbiAgICAgICAgcHJvamVjdERpdi5hcHBlbmRDaGlsZChwcm9qZWN0Q29udGVudClcclxuICAgICAgICB0aGlzLmNvbnRlbnQuYXBwZW5kQ2hpbGQocHJvamVjdERpdilcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyU2lkZWJhclByb2plY3RzKHBhcmVudCkge1xyXG4gICAgICAgIHBhcmVudC50ZXh0Q29udGVudCA9IFwiXCJcclxuICAgICAgICBTdG9yYWdlLmdldEFwcCgpLmdldFByb2plY3RzKCkuZm9yRWFjaCgocHJvamVjdCkgPT4gIHtcclxuICAgICAgICAgICAgY29uc3QgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKVxyXG4gICAgICAgICAgICBwcm9qZWN0VGl0bGUudGV4dENvbnRlbnQgPSBwcm9qZWN0LnRpdGxlXHJcbiAgICAgICAgICAgIHByb2plY3RUaXRsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29udGVudC5pbm5lckhUTUwgPSAnJ1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zaWRlYmFyLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3cnKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJQcm9qZWN0KFN0b3JhZ2UuZ2V0QXBwKCkuZ2V0UHJvamVjdChwcm9qZWN0LmdldFRpdGxlKCkpKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQocHJvamVjdFRpdGxlKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgcmV0dXJuIHBhcmVudFxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlclNpZGViYXIoKSB7XHJcbiAgICAgICAgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvdmVybGF5JylcclxuICAgICAgICB0aGlzLnNpZGViYXIuaW5uZXJIVE1MID0gJydcclxuICAgICAgICBjb25zdCB0aXRsZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcclxuICAgICAgICB0aXRsZURpdi5jbGFzc0xpc3QuYWRkKCdidXR0b25Db250YWluZXInKVxyXG4gICAgICAgIGNvbnN0IHNpZGViYXJUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJylcclxuICAgICAgICBzaWRlYmFyVGl0bGUudGV4dENvbnRlbnQgPSAnWW91ciBQcm9qZWN0cydcclxuICAgICAgICB0aXRsZURpdi5hcHBlbmRDaGlsZChzaWRlYmFyVGl0bGUpXHJcbiAgICAgICAgY29uc3QgY2xvc2VCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxyXG4gICAgICAgIGNsb3NlQnRuLnNyYyA9IENsb3NlXHJcbiAgICAgICAgY2xvc2VCdG4uY2xhc3NMaXN0LmFkZCgnaWNvbicpXHJcbiAgICAgICAgY2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc2lkZWJhci5jbGFzc0xpc3QucmVtb3ZlKCdzaG93JylcclxuICAgICAgICAgICAgb3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXHJcbiAgICAgICAgfSlcclxuICAgICAgICB0aXRsZURpdi5hcHBlbmRDaGlsZChjbG9zZUJ0bilcclxuICAgICAgICB0aGlzLnNpZGViYXIuYXBwZW5kQ2hpbGQodGl0bGVEaXYpXHJcbiAgICAgICAgY29uc3QgcHJvamVjdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgcHJvamVjdERpdi5pZCA9ICdwcm9qZWN0RGl2J1xyXG4gICAgICAgIHRoaXMuc2lkZWJhci5hcHBlbmRDaGlsZCh0aGlzLnJlbmRlclNpZGViYXJQcm9qZWN0cyhwcm9qZWN0RGl2KSlcclxuXHJcbiAgICAgICAgY29uc3QgYWRkUHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXHJcbiAgICAgICAgYWRkUHJvamVjdC5jbGFzc0xpc3QuYWRkKCdidG4nKVxyXG4gICAgICAgIGFkZFByb2plY3QuaW5uZXJIVE1MID0gXCJBZGQgUHJvamVjdFwiXHJcbiAgICAgICAgYWRkUHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5hZGRQcm9qUG9wKHRoaXMuYXBwKVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIHRoaXMuc2lkZWJhci5hcHBlbmRDaGlsZChhZGRQcm9qZWN0KVxyXG5cclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBhZGRQcm9qUG9wKCkge1xyXG4gICAgICAgIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb3ZlcmxheScpXHJcbiAgICAgICAgb3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiXHJcbiAgICAgICAgb3ZlcmxheS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgcG9wdXAucmVtb3ZlKClcclxuICAgICAgICAgICAgb3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCJcclxuICAgICAgICB9KVxyXG4gICAgICAgIGNvbnN0IHBvcHVwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpXHJcbiAgICAgICAgcG9wdXAuY2xhc3NMaXN0LmFkZCgncG9wdXAnKVxyXG4gICAgICAgIHBvcHVwLmlkID0gJ2FkZFByb2plY3RQb3B1cCdcclxuICAgICAgICBjb25zdCBwb3B1cFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKVxyXG4gICAgICAgIHBvcHVwVGl0bGUudGV4dENvbnRlbnQgPSAnQWRkIFByb2plY3QnXHJcbiAgICAgICAgcG9wdXAuYXBwZW5kQ2hpbGQocG9wdXBUaXRsZSlcclxuICAgICAgICBjb25zdCBwcm9qVGl0bGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcclxuICAgICAgICBwcm9qVGl0bGVJbnB1dC50eXBlID0gJ3RleHQnXHJcbiAgICAgICAgcG9wdXAuYXBwZW5kQ2hpbGQocHJvalRpdGxlSW5wdXQpXHJcbiAgICAgICAgY29uc3Qgc3VibWl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcclxuICAgICAgICBzdWJtaXRCdG4udHlwZSA9ICdzdWJtaXQnXHJcbiAgICAgICAgc3VibWl0QnRuLmlubmVySFRNTCA9ICdTdWJtaXQnXHJcbiAgICAgICAgc3VibWl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgICAgIGlmKHByb2pUaXRsZUlucHV0LnZhbHVlICE9PSBcIlwiKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdQcm9qID0gbmV3IFByb2plY3QocHJvalRpdGxlSW5wdXQudmFsdWUpXHJcbiAgICAgICAgICAgICAgICBTdG9yYWdlLmFkZFByb2plY3QobmV3UHJvailcclxuICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyU2lkZWJhcigpXHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlbmRlclByb2plY3QobmV3UHJvailcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCJcclxuICAgICAgICAgICAgdGhpcy5zaWRlYmFyLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3cnKVxyXG4gICAgICAgICAgICBwb3B1cC5yZW1vdmUoKVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIHBvcHVwLmFwcGVuZENoaWxkKHN1Ym1pdEJ0bilcclxuXHJcbiAgICAgICAgdGhpcy5jb250ZW50LmFwcGVuZENoaWxkKHBvcHVwKVxyXG4gICAgfVxyXG5cclxuICAgIGFkZFRhc2tQb3AocHJvamVjdFRpdGxlLCB0b2RvVGl0bGUsIHRhc2tEaXYpIHtcclxuICAgICAgICBjb25zdCBvdmVybGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ292ZXJsYXknKVxyXG4gICAgICAgIG92ZXJsYXkuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIlxyXG4gICAgICAgIG92ZXJsYXkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHBvcHVwLnJlbW92ZSgpXHJcbiAgICAgICAgICAgIG92ZXJsYXkuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiXHJcbiAgICAgICAgfSlcclxuICAgICAgICBjb25zdCBwb3B1cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKVxyXG4gICAgICAgIHBvcHVwLmNsYXNzTGlzdC5hZGQoJ3BvcHVwJylcclxuICAgICAgICBwb3B1cC5pZCA9IFwiYWRkVGFza1BvcHVwXCJcclxuICAgICAgICBjb25zdCBwb3B1cFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKVxyXG4gICAgICAgIHBvcHVwVGl0bGUudGV4dENvbnRlbnQgPSBcIkFkZCBUYXNrXCJcclxuICAgICAgICBwb3B1cC5hcHBlbmRDaGlsZChwb3B1cFRpdGxlKVxyXG4gICAgICAgIGNvbnN0IHRpdGxlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXHJcbiAgICAgICAgdGl0bGVMYWJlbC5odG1sRm9yID0gXCJ0aXRsZUlucHV0XCJcclxuICAgICAgICB0aXRsZUxhYmVsLnRleHRDb250ZW50ID0gXCJUaXRsZVwiXHJcbiAgICAgICAgcG9wdXAuYXBwZW5kQ2hpbGQodGl0bGVMYWJlbClcclxuICAgICAgICBjb25zdCB0aXRsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxyXG4gICAgICAgIHRpdGxlSW5wdXQudHlwZSA9IFwidGV4dFwiXHJcbiAgICAgICAgdGl0bGVJbnB1dC5yZXF1aXJlZCA9IFwidHJ1ZVwiXHJcbiAgICAgICAgcG9wdXAuYXBwZW5kQ2hpbGQodGl0bGVJbnB1dClcclxuICAgICAgICBjb25zdCBkZXNjTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXHJcbiAgICAgICAgZGVzY0xhYmVsLmh0bWxGb3IgPSAnZGVzY0lucHV0J1xyXG4gICAgICAgIGRlc2NMYWJlbC50ZXh0Q29udGVudCA9IFwiRGVzY3JpcHRpb25cIlxyXG4gICAgICAgIHBvcHVwLmFwcGVuZENoaWxkKGRlc2NMYWJlbClcclxuICAgICAgICBjb25zdCBkZXNjSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXHJcbiAgICAgICAgZGVzY0lucHV0LnR5cGUgPSAndGV4dCdcclxuICAgICAgICBwb3B1cC5hcHBlbmRDaGlsZChkZXNjSW5wdXQpXHJcbiAgICAgICAgY29uc3QgZGF0ZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxyXG4gICAgICAgIGRhdGVMYWJlbC5odG1sRm9yID0gJ2RhdGVJbnB1dCdcclxuICAgICAgICBkYXRlTGFiZWwudGV4dENvbnRlbnQgPSAnRHVlIERhdGUnXHJcbiAgICAgICAgcG9wdXAuYXBwZW5kQ2hpbGQoZGF0ZUxhYmVsKVxyXG4gICAgICAgIGNvbnN0IGRhdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcclxuICAgICAgICBkYXRlSW5wdXQudHlwZSA9ICdkYXRlJ1xyXG4gICAgICAgIHBvcHVwLmFwcGVuZENoaWxkKGRhdGVJbnB1dClcclxuXHJcbiAgICAgICAgY29uc3QgYnV0dG9uRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgICBidXR0b25EaXYuY2xhc3NMaXN0LmFkZCgnYnRuRGl2JylcclxuICAgICAgICBjb25zdCBhZGRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxyXG4gICAgICAgIGFkZEJ0bi50eXBlID0gJ3N1Ym1pdCdcclxuICAgICAgICBhZGRCdG4uaW5uZXJIVE1MID0gJ0FkZCBUYXNrJ1xyXG4gICAgICAgIGFkZEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgICAgICBpZih0aXRsZUlucHV0LnZhbHVlICE9PSBcIlwiKSB7XHJcbiAgICAgICAgICAgICAgICBTdG9yYWdlLmFkZFRhc2socHJvamVjdFRpdGxlLCB0b2RvVGl0bGUsIG5ldyBUYXNrKHRpdGxlSW5wdXQudmFsdWUsIGRlc2NJbnB1dC52YWx1ZSwgZGF0ZUlucHV0LnZhbHVlKSlcclxuICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyUHJvamVjdChTdG9yYWdlLmdldEFwcCgpLmdldFByb2plY3QocHJvamVjdFRpdGxlKSlcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXHJcbiAgICAgICAgICAgIHBvcHVwLnJlbW92ZSgpXHJcbiAgICAgICAgfSlcclxuICAgICAgICBidXR0b25EaXYuYXBwZW5kQ2hpbGQoYWRkQnRuKVxyXG4gICAgICAgIGNvbnN0IGNhbkJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXHJcbiAgICAgICAgY2FuQnRuLmlubmVySFRNTCA9ICdDYW5jZWwnXHJcbiAgICAgICAgY2FuQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBwb3B1cC5yZW1vdmUoKVxyXG4gICAgICAgICAgICBvdmVybGF5LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcclxuICAgICAgICB9KVxyXG4gICAgICAgIGJ1dHRvbkRpdi5hcHBlbmRDaGlsZChjYW5CdG4pXHJcbiAgICAgICAgcG9wdXAuYXBwZW5kQ2hpbGQoYnV0dG9uRGl2KVxyXG5cclxuXHJcblxyXG4gICAgICAgIHRoaXMuY29udGVudC5hcHBlbmRDaGlsZChwb3B1cClcclxuXHJcbiAgICB9XHJcblxyXG4gICAgYWRkVG9kb1BvcChwcm9qZWN0VGl0bGUsIHRvZG9EaXYpIHtcclxuICAgICAgICBjb25zdCBvdmVybGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ292ZXJsYXknKVxyXG4gICAgICAgIG92ZXJsYXkuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIlxyXG4gICAgICAgIG92ZXJsYXkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHBvcHVwLnJlbW92ZSgpXHJcbiAgICAgICAgICAgIG92ZXJsYXkuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiXHJcbiAgICAgICAgfSlcclxuICAgICAgICBjb25zdCBwb3B1cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKVxyXG4gICAgICAgIHBvcHVwLmNsYXNzTGlzdC5hZGQoJ3BvcHVwJylcclxuICAgICAgICBwb3B1cC5pZCA9ICdhZGRUb2RvUG9wJ1xyXG5cclxuICAgICAgICBjb25zdCBwb3B1cFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKVxyXG4gICAgICAgIHBvcHVwVGl0bGUudGV4dENvbnRlbnQgPSAnQWRkIFRvZG8nXHJcbiAgICAgICAgcG9wdXAuYXBwZW5kQ2hpbGQocG9wdXBUaXRsZSlcclxuXHJcbiAgICAgICAgY29uc3QgdGl0bGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcclxuICAgICAgICB0aXRsZUxhYmVsLnRleHRDb250ZW50ID0gJ1RpdGxlJ1xyXG4gICAgICAgIHRpdGxlTGFiZWwuaHRtbEZvciA9ICd0aXRsZUlucHV0J1xyXG4gICAgICAgIHBvcHVwLmFwcGVuZENoaWxkKHRpdGxlTGFiZWwpXHJcblxyXG4gICAgICAgIGNvbnN0IHRpdGxlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXHJcbiAgICAgICAgdGl0bGVJbnB1dC50eXBlID0gJ3RleHQnXHJcbiAgICAgICAgdGl0bGVJbnB1dC5pZCA9ICd0b2RvVGl0bGVpbnB1dCdcclxuICAgICAgICB0aXRsZUlucHV0LnJlcXVpcmVkID0gXCJ0cnVlXCJcclxuICAgICAgICBwb3B1cC5hcHBlbmRDaGlsZCh0aXRsZUlucHV0KVxyXG5cclxuICAgICAgICBjb25zdCBidXR0b25EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICAgIGJ1dHRvbkRpdi5jbGFzc0xpc3QuYWRkKCdidG5EaXYnKVxyXG4gICAgICAgIGNvbnN0IGFkZEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXHJcbiAgICAgICAgYWRkQnRuLmlubmVySFRNTCA9ICdBZGQgVG9kbydcclxuICAgICAgICBhZGRCdG4udHlwZSA9ICdzdWJtaXQnXHJcbiAgICAgICAgYWRkQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgICAgIGlmKHRpdGxlSW5wdXQudmFsdWUgIT09IFwiXCIpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFN0b3JhZ2UuYWRkVG9kbyhwcm9qZWN0VGl0bGUsIG5ldyBUb2RvKHRpdGxlSW5wdXQudmFsdWUpKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJQcm9qZWN0KFN0b3JhZ2UuZ2V0QXBwKCkuZ2V0UHJvamVjdChwcm9qZWN0VGl0bGUpKVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXHJcbiAgICAgICAgICAgIHBvcHVwLnJlbW92ZSgpXHJcbiAgICAgICAgfSlcclxuICAgICAgICBidXR0b25EaXYuYXBwZW5kQ2hpbGQoYWRkQnRuKVxyXG4gICAgICAgIGNvbnN0IGNhbkJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXHJcbiAgICAgICAgY2FuQnRuLmlubmVySFRNTCA9ICdDYW5jZWwnXHJcbiAgICAgICAgY2FuQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gIHtcclxuICAgICAgICAgICAgb3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXHJcbiAgICAgICAgICAgIHBvcHVwLnJlbW92ZSgpXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgYnV0dG9uRGl2LmFwcGVuZENoaWxkKGNhbkJ0bilcclxuICAgICAgICBwb3B1cC5hcHBlbmRDaGlsZChidXR0b25EaXYpXHJcblxyXG4gICAgICAgIHRoaXMuY29udGVudC5hcHBlbmRDaGlsZChwb3B1cClcclxuXHJcbiAgICB9ICAgXHJcblxyXG4gICAgcHJvamVjdEVkaXRQb3AocHJvamVjdCkge1xyXG4gICAgICAgIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb3ZlcmxheScpXHJcbiAgICAgICAgb3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiXHJcbiAgICAgICAgb3ZlcmxheS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgcG9wdXAucmVtb3ZlKClcclxuICAgICAgICAgICAgb3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCJcclxuICAgICAgICB9KVxyXG4gICAgICAgIGNvbnN0IHBvcHVwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgICBwb3B1cC5pZCA9ICdwcm9kakVkaXQnXHJcbiAgICAgICAgY29uc3QgcmVuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpXHJcbiAgICAgICAgcmVuYW1lLnRleHRDb250ZW50ID0gXCJSZW5hbWUgUHJvamVjdFwiXHJcbiAgICAgICAgcmVuYW1lLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnJlbmFtZVByb2plY3QocHJvamVjdClcclxuICAgICAgICAgICAgcG9wdXAucmVtb3ZlKClcclxuICAgICAgICB9KVxyXG4gICAgICAgIHBvcHVwLmFwcGVuZENoaWxkKHJlbmFtZSlcclxuICAgICAgICBjb25zdCBjaGFuZ2VDb2xvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJylcclxuICAgICAgICBjaGFuZ2VDb2xvci50ZXh0Q29udGVudCA9IFwiQ2hhbmdlIENvbG9yXCJcclxuICAgICAgICBjaGFuZ2VDb2xvci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5jaGFuZ2VDb2xvclBvcChwcm9qZWN0KVxyXG4gICAgICAgICAgICBwb3B1cC5yZW1vdmUoKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgcG9wdXAuYXBwZW5kQ2hpbGQoY2hhbmdlQ29sb3IpXHJcbiAgICAgICAgY29uc3QgZGVsZXRlUHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJylcclxuICAgICAgICBkZWxldGVQcm9qZWN0LnRleHRDb250ZW50ID0gXCJEZWxldGUgUHJvamVjdFwiXHJcbiAgICAgICAgZGVsZXRlUHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgb3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXHJcbiAgICAgICAgICAgIFN0b3JhZ2UuZGVsZXRlUHJvamVjdChwcm9qZWN0LnRpdGxlKVxyXG4gICAgICAgICAgICB0aGlzLnJlbmRlclNpZGViYXIoKVxyXG4gICAgICAgICAgICB0aGlzLnJlbmRlclByb2plY3QoU3RvcmFnZS5nZXRBcHAoKS5nZXRGaXJzdFByb2plY3QoKSlcclxuICAgICAgICAgICAgcG9wdXAucmVtb3ZlKClcclxuICAgICAgICB9KVxyXG4gICAgICAgIHBvcHVwLmFwcGVuZENoaWxkKGRlbGV0ZVByb2plY3QpXHJcblxyXG4gICAgICAgIGNvbnN0IGNhbkJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJylcclxuICAgICAgICBjYW5CdG4udGV4dENvbnRlbnQgPSBcIkNhbmNlbFwiXHJcbiAgICAgICAgY2FuQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBvdmVybGF5LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcclxuICAgICAgICAgICAgcG9wdXAucmVtb3ZlKClcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBwb3B1cC5hcHBlbmRDaGlsZChjYW5CdG4pXHJcblxyXG5cclxuICAgICAgICB0aGlzLmNvbnRlbnQuYXBwZW5kQ2hpbGQocG9wdXApXHJcbiAgICB9XHJcblxyXG5cclxuICAgIGNoYW5nZUNvbG9yUG9wKHByb2plY3QpIHtcclxuICAgICAgICBjb25zdCBvdmVybGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ292ZXJsYXknKVxyXG4gICAgICAgIG92ZXJsYXkuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIlxyXG4gICAgICAgIG92ZXJsYXkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHBvcHVwLnJlbW92ZSgpXHJcbiAgICAgICAgICAgIG92ZXJsYXkuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGNvbnN0IHBvcHVwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgICBwb3B1cC5jbGFzc0xpc3QuYWRkKCdwb3B1cCcpXHJcbiAgICAgICAgcG9wdXAuc3R5bGUud2lkdGggPSBcImF1dG9cIlxyXG4gICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKVxyXG4gICAgICAgIHRpdGxlLnRleHRDb250ZW50ID0gXCJDaGFuZ2UgQ29sb3JcIlxyXG4gICAgICAgIHBvcHVwLmFwcGVuZENoaWxkKHRpdGxlKVxyXG5cclxuICAgICAgICBjb25zdCBidG5EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICAgIGJ0bkRpdi5jbGFzc0xpc3QuYWRkKCdidXR0b25Db250YWluZXInKVxyXG4gICAgICAgIGNvbnN0IGJsdWVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICBibHVlQnRuLmNsYXNzTGlzdC5hZGQoJ3JvdW5kJylcclxuICAgICAgICBibHVlQnRuLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGBoc2woMjAwLCA1MCUsIDYwJSlgXHJcbiAgICAgICAgYmx1ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICBTdG9yYWdlLmNoYW5nZVByb2plY3RDb2xvcihwcm9qZWN0LnRpdGxlLCAyMDApXHJcbiAgICAgICAgICAgdGhpcy5yZW5kZXJQcm9qZWN0KFN0b3JhZ2UuZ2V0QXBwKCkuZ2V0UHJvamVjdChwcm9qZWN0LnRpdGxlKSlcclxuICAgICAgICAgICBwb3B1cC5yZW1vdmUoKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgYnRuRGl2LmFwcGVuZENoaWxkKGJsdWVCdG4pXHJcblxyXG4gICAgICAgIGNvbnN0IHJlZEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXHJcbiAgICAgICAgcmVkQnRuLmNsYXNzTGlzdC5hZGQoJ3JvdW5kJylcclxuICAgICAgICByZWRCdG4uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gYGhzbCgwLCA1MCUsIDYwJSlgXHJcbiAgICAgICAgcmVkQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBTdG9yYWdlLmNoYW5nZVByb2plY3RDb2xvcihwcm9qZWN0LnRpdGxlLCAwKVxyXG4gICAgICAgICAgICB0aGlzLnJlbmRlclByb2plY3QoU3RvcmFnZS5nZXRBcHAoKS5nZXRQcm9qZWN0KHByb2plY3QudGl0bGUpKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgYnRuRGl2LmFwcGVuZENoaWxkKHJlZEJ0bilcclxuXHJcblxyXG4gICAgICAgIGNvbnN0IGdyZWVuQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcclxuICAgICAgICBncmVlbkJ0bi5jbGFzc0xpc3QuYWRkKCdyb3VuZCcpXHJcbiAgICAgICAgZ3JlZW5CdG4uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gYGhzbCg1MDAsIDUwJSwgNjAlKWBcclxuICAgICAgICBncmVlbkJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgU3RvcmFnZS5jaGFuZ2VQcm9qZWN0Q29sb3IocHJvamVjdC50aXRsZSwgNTAwKVxyXG4gICAgICAgICAgICB0aGlzLnJlbmRlclByb2plY3QoU3RvcmFnZS5nZXRBcHAoKS5nZXRQcm9qZWN0KHByb2plY3QudGl0bGUpKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgYnRuRGl2LmFwcGVuZENoaWxkKGdyZWVuQnRuKVxyXG5cclxuICAgICAgICBjb25zdCBwdXJwQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcclxuICAgICAgICBwdXJwQnRuLmNsYXNzTGlzdC5hZGQoJ3JvdW5kJylcclxuICAgICAgICBwdXJwQnRuLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGBoc2woMjYwLCA1MCUsIDYwJSlgXHJcbiAgICAgICAgcHVycEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgU3RvcmFnZS5jaGFuZ2VQcm9qZWN0Q29sb3IocHJvamVjdC50aXRsZSwgMjYwKVxyXG4gICAgICAgICAgICB0aGlzLnJlbmRlclByb2plY3QoU3RvcmFnZS5nZXRBcHAoKS5nZXRQcm9qZWN0KHByb2plY3QudGl0bGUpKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgYnRuRGl2LmFwcGVuZENoaWxkKHB1cnBCdG4pXHJcblxyXG4gICAgICAgIHBvcHVwLmFwcGVuZENoaWxkKGJ0bkRpdilcclxuXHJcblxyXG4gICAgICAgIHRoaXMuY29udGVudC5hcHBlbmRDaGlsZChwb3B1cClcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmVuYW1lUHJvamVjdChwcm9qZWN0KSB7XHJcbiAgICAgICAgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvdmVybGF5JylcclxuICAgICAgICBvdmVybGF5LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCJcclxuICAgICAgICBvdmVybGF5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBwb3B1cC5yZW1vdmUoKVxyXG4gICAgICAgICAgICBvdmVybGF5LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIlxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgY29uc3QgcG9wdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJylcclxuICAgICAgICBwb3B1cC5jbGFzc0xpc3QuYWRkKCdwb3B1cCcpXHJcbiAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpXHJcbiAgICAgICAgdGl0bGUudGV4dENvbnRlbnQgPSBcIlJlbmFtZSBQcm9qZWN0XCJcclxuICAgICAgICBwb3B1cC5hcHBlbmRDaGlsZCh0aXRsZSlcclxuICAgICAgICBjb25zdCB0aXRsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxyXG4gICAgICAgIHRpdGxlSW5wdXQudHlwZSA9ICd0ZXh0J1xyXG5cclxuICAgICAgICBwb3B1cC5hcHBlbmRDaGlsZCh0aXRsZUlucHV0KVxyXG4gICAgICAgIGNvbnN0IHN1Ym1pdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXHJcbiAgICAgICAgc3VibWl0QnRuLnR5cGUgPSAnc3VibWl0J1xyXG4gICAgICAgIHN1Ym1pdEJ0bi5pbm5lckhUTUwgPSBcIlN1Ym1pdFwiXHJcbiAgICAgICAgc3VibWl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgICAgIGlmKHRpdGxlSW5wdXQudmFsdWUgIT09IFwiXCIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29udGVudC5pbm5lckhUTUwgPSBcIlwiXHJcbiAgICAgICAgICAgICAgICBTdG9yYWdlLnJlbmFtZVByb2plY3QocHJvamVjdC5nZXRUaXRsZSgpLCB0aXRsZUlucHV0LnZhbHVlKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJQcm9qZWN0KFN0b3JhZ2UuZ2V0QXBwKCkuZ2V0UHJvamVjdCh0aXRsZUlucHV0LnZhbHVlKSlcclxuICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyU2lkZWJhcigpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXHJcbiAgICAgICAgICAgIHBvcHVwLnJlbW92ZSgpXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgcG9wdXAuYXBwZW5kQ2hpbGQoc3VibWl0QnRuKVxyXG5cclxuICAgICAgICB0aGlzLmNvbnRlbnQuYXBwZW5kQ2hpbGQocG9wdXApXHJcbiAgICB9XHJcblxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVUkiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIlxyXG5pbXBvcnQgJy4vc3R5bGUuY3NzJ1xyXG5cclxuaW1wb3J0IFN0b3JhZ2UgZnJvbSAnLi9sb2dpYy9zdG9yYWdlJztcclxuaW1wb3J0IEFwcCBmcm9tICcuL2xvZ2ljL2FwcCdcclxuaW1wb3J0IFRhc2sgZnJvbSAnLi9sb2dpYy90YXNrJztcclxuaW1wb3J0IFRvZG8gZnJvbSAnLi9sb2dpYy90b2RvJztcclxuaW1wb3J0IFByb2plY3QgZnJvbSAnLi9sb2dpYy9wcm9qZWN0JztcclxuaW1wb3J0IFVJIGZyb20gXCIuL3VpXCI7XHJcblxyXG5jb25zdCB1aSA9IG5ldyBVSSgpXHJcblxyXG5cclxudWkucmVuZGVyU2lkZWJhcigpXHJcblxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=