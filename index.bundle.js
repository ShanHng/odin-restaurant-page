"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkodin_restaurant_page"] = self["webpackChunkodin_restaurant_page"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! resource/CedarvilleCursive-Regular.ttf */ \"./src/resource/CedarvilleCursive-Regular.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! resource/bg-bats.png */ \"./src/resource/bg-bats.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! resource/cross.svg */ \"./src/resource/cross.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! resource/parchment.png */ \"./src/resource/parchment.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);\nvar ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\n  padding: 0;\n  margin: 0;\n  font-family: 'Times New Roman', Times, serif;\n}\n\n@font-face {\n  font-family: 'Cedarville';\n  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\n}\n\nhtml {\n  background-color: darkred;\n  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});\n}\n\nbody {\n  display: flex;\n  flex-direction: column;\n  height: 100vh;\n}\n\n.content {\n  flex-grow: 1;\n}\n\n.footer {\n  flex-grow: 0;\n}\n\n.logo {\n  font-family: 'Cedarville';\n  color: white;\n  background-color: black;\n  text-align: center;\n  font-size: 3rem;\n  padding-bottom: 1rem;\n}\n\n.navbar {\n  display: flex;\n  list-style-type: none;\n  gap: 2rem;\n  justify-content: center;\n  font-size: 1.5rem;\n}\n\n.navbar > li {\n  border: 0.2rem solid black;\n  padding: 0rem 0.5rem;\n  background-color: black;\n  color: darkred;\n  font-weight: bold;\n  border-radius: 0 0 0.5rem 0.5rem;\n  display: inline-block;\n}\n\n.navbar > li:hover, li.selected {\n  background-color: darkred;\n  color: white;\n  z-index: 10;\n}\n\n.navbar > li:hover::before, .selected::before {\n  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_2___});\n  height: 2rem;\n  width: 2rem;\n  content: '';\n  background-size: contain;\n  display: block;\n  margin: 0 auto;\n  color: #8b0000;\n  position: absolute;\n  transform: translate(0, -100%);\n  /* filter generated from this program https://codepen.io/sosuke/pen/Pjoqqp */\n  filter: invert(8%) sepia(96%) saturate(4406%) hue-rotate(356deg)\n    brightness(55%) contrast(111%);\n}\n\n.content {\n  margin: 5vh 10vw;\n  padding: 4vw;\n  background-color: black;\n  border-radius: 2rem;\n  color: white;\n}\n\n.text-welcome {\n  font-size: 2rem;\n}\n\n.text-copy {\n  font-family: 'Cedarville';\n  font-size: 1.5rem;\n  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_3___});\n  background-size: cover;\n  padding: 5vw;\n  color: black;\n  padding-bottom: 0vh;\n}\n\n.text-copy-author {\n  font-family: inherit;\n  font-weight: bolder;\n  text-align: right;\n}\n\n.footer {\n  background-color: black;\n  color: white;\n  min-height: 10vh;\n  padding: 2rem;\n  display: flex;\n  justify-content: space-between;\n}\n\n.footer a:visited {\n  color: white;\n}\n\n.text-contacts-h1 {\n  font-size: 3rem;\n  font-weight: bold;\n  margin-bottom: 1rem;\n}\n\n.text-contacts-info {\n  font-size: 2rem;\n}\n\n.menu-card {\n  width: 50%;\n  margin: 0 auto;\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n  padding-bottom: 4rem;\n}\n\n.menu-card-img {\n  width: 30vh;\n  height: 30vh;\n  filter: brightness(0.8);\n  align-self: center;\n}\n\n.menu-card-title {\n  font-size: 2rem;\n  align-self: center;\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n}\n\n.menu-card-type {\n  margin-top: 1rem;\n  text-transform: uppercase;\n}\n\n\n.menu-card-price {\n  font-weight: bold;\n  font-size: 1.5rem;\n  display: inline;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://odin-restaurant-page/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://odin-restaurant-page/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://odin-restaurant-page/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://odin-restaurant-page/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://odin-restaurant-page/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://odin-restaurant-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://odin-restaurant-page/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://odin-restaurant-page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://odin-restaurant-page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://odin-restaurant-page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://odin-restaurant-page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/contacts-page.js":
/*!******************************!*\
  !*** ./src/contacts-page.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst contactsPage = (() => {\n\n    const content = document.createElement('div')\n    const contactsHeading = document.createElement('div')\n    const contactsInfo = document.createElement('div')\n\n    contactsHeading.className = 'text-contacts-h1'\n    contactsInfo.className = 'text-contacts-info'\n    content.className = 'content'\n\n    contactsHeading.textContent = 'Any enquiries or wanna make a reservation?'\n    contactsInfo.innerHTML = '<i>Call us at +666-10458204</i> <br/> or <br/>  email us at thevampireentrees@fangs.com.' +\n    '<br/> <br/>We can\\'t wait to hear from you (or seat you). If we ghost you, dinner is on us!'\n\n    content.append(contactsHeading, contactsInfo)\n    return content\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contactsPage);\n\n//# sourceURL=webpack://odin-restaurant-page/./src/contacts-page.js?");

/***/ }),

/***/ "./src/home-page.js":
/*!**************************!*\
  !*** ./src/home-page.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst homePage = (() => {\n  const homePage = document.createElement('div')\n  const welcomeText = document.createElement('div')\n  const copyText = document.createElement('div')\n\n  welcomeText.className = 'text-welcome'\n  copyText.className = 'text-copy'\n\n  welcomeText.innerHTML =\n    '🌙🦇 Welcome to Vampire Entrees, where mortal delicacies meet immortal' +\n    'delights! Unleash your inner nocturnal spirit and embark on a ' +\n    'fang-tastic culinary journey that will leave you enchanted with every ' +\n    'bite! 🍽️🩸🖤 <br /> You need your #factcheck? Here is a review from one of our star guest:'\n\n  copyText.innerHTML =\n    \"Omg, brace yourselves, fellow night creatures, 'cause The Vampire\" +\n    'Entrees is the bomb dot com! 🌙🦇 As Count Dracula, I have to say, this' +\n    'place is like my crypt away from home! 🏰💜 From the moment I descended' +\n    'into this dining haven, I felt a dark, bewitching ambiance that spoke to' +\n    \"my immortal soul! 👻🕯️ Now, let's talk about the 'Bloody Hell' steak\" +\n    \"entree! 🥩🩸 It's positively sinful! The aged prime beef, infused with\" +\n    'Transylvanian magic, is seared to perfection! 😍 And that blood-red wine' +\n    'reduction sauce is to die for! 🍷💀 Calling all mortals and creatures of' +\n    'the night, you MUST sink your fangs into this fang-tastic feast!' +\n    \"<div class='text-copy-author'>🖤 Count D. ⚡🌕</div>\"\n    \n    homePage.append(welcomeText, copyText)\n    homePage.className = \"content\"\n\n    return homePage\n})()\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (homePage);\n\n//# sourceURL=webpack://odin-restaurant-page/./src/home-page.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-page */ \"./src/home-page.js\");\n/* harmony import */ var _menu_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu-page */ \"./src/menu-page.js\");\n/* harmony import */ var _contacts_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contacts-page */ \"./src/contacts-page.js\");\n\n\n\n\n\nconst body = document.querySelector('body')\nlet content = _home_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n\nconst header = (() => {\n  const header = document.createElement('div')\n  const logo = document.createElement('div')\n  const navbar = document.createElement('ul')\n\n  header.className = 'header'\n  logo.className = 'logo'\n  navbar.className = 'navbar'\n\n  logo.textContent = 'My Vampire Entrees'\n\n  const linkTexts = ['About Uz', 'Our Bloody Menu', 'Hit Us Up']\n\n  const links = linkTexts.map(item => {\n    const li = document.createElement('li')\n    li.textContent = item\n    return li\n  })\n\n  const [homePageLink, menuPageLink, contactsPageLink] = links\n\n  function linkHandlerFactory (page) {\n    return function linkHandler (event) {\n      homePageLink.classList = ''\n      contactsPageLink.classList = ''\n      menuPageLink.classList = ''\n\n      body.replaceChildren(header, page, footer)\n      content = page\n      event.target.className = 'selected'\n    }\n  }\n\n  homePageLink.addEventListener('click', linkHandlerFactory(_home_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"]))\n  contactsPageLink.addEventListener('click', linkHandlerFactory(_contacts_page__WEBPACK_IMPORTED_MODULE_3__[\"default\"]))\n  menuPageLink.addEventListener('click', linkHandlerFactory(_menu_page__WEBPACK_IMPORTED_MODULE_2__[\"default\"]))\n\n  homePageLink.className = 'selected'\n  navbar.append(homePageLink, menuPageLink, contactsPageLink)\n  header.append(logo, navbar)\n\n  return header\n})()\n\nconst footer = (() => {\n  const footer = document.createElement('div')\n  const infoOperatingHours = document.createElement('div')\n  const infoAddress = document.createElement('div')\n  const infoCredits = document.createElement('div')\n\n  footer.className = 'footer'\n  infoOperatingHours.className = 'text-hours'\n  infoAddress.className = 'text-address'\n  infoCredits.className = 'text-credits'\n\n  infoOperatingHours.innerHTML = 'Operating hours: <br /> 7pm - 7am'\n  infoAddress.innerHTML =\n    'Address: <br /> 123 Nightshade Lane, Transylvanian Haven, Darkshire, TRN 66666'\n  infoCredits.innerHTML =\n    'Background image by <a href=\"https://www.freepik.com/free-vector/halloween-bat-decor-paper-cut-style_10817112.htm#page=2&query=bats&position=19&from_view=search&track=sph\">zaie</a> ' +\n    'on Freepik. <br /> Parchment image by <a href=\"https://www.freepik.com/free-vector/blank-brown-paper-design_15228111.htm#query=scroll&position=45&from_view=search&track=sph\">rawpixel.com</a> ' +\n    'on Freepik. <br /> Icons are created by flaticon, and menu images generated with Freepik AI generator.  </div>'\n\n  footer.append(infoAddress, infoOperatingHours, infoCredits)\n  return footer\n})()\n\nbody.append(header, content, footer)\n\n\n//# sourceURL=webpack://odin-restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu-page.js":
/*!**************************!*\
  !*** ./src/menu-page.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _resource_bloody_steak_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./resource/bloody-steak.png */ \"./src/resource/bloody-steak.png\");\n/* harmony import */ var _resource_pulled_pork_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./resource/pulled-pork.png */ \"./src/resource/pulled-pork.png\");\n/* harmony import */ var _resource_rainbow_puke_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./resource/rainbow-puke.png */ \"./src/resource/rainbow-puke.png\");\n/* harmony import */ var _resource_blood_cells_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./resource/blood-cells.png */ \"./src/resource/blood-cells.png\");\n\n\n\n\n\nfunction MenuItem (title, desc, imgPath, price, type) {\n  this.title = title\n  this.desc = desc\n  this.imgPath = imgPath\n  this.price = price\n  this.type = type\n}\n\nconst menuItems = [\n  new MenuItem(\n    'Bloody Hell',\n    'Some A5 wagyu premium cuts with some grilled asparagus on the side and our house special BloodJuice!',\n    _resource_bloody_steak_png__WEBPACK_IMPORTED_MODULE_0__,\n    '$20.70',\n    'Main'\n  ),\n  new MenuItem(\n    'Peppa Pig',\n    'Slimy pesto on top of our childhood fave, Peppa Pig in its true form roasted to perfection! Some handbattered onion rings on the side.',\n    _resource_pulled_pork_png__WEBPACK_IMPORTED_MODULE_1__,\n    '$16.50',\n    'Main'\n  ),\n  new MenuItem(\n    'Rainbow Puke',\n    'All these colorful but nasty veggies make me puke, but you do you... Thank Satan we have some fresh tuna sashimi to make it less disastrous.',\n    _resource_rainbow_puke_png__WEBPACK_IMPORTED_MODULE_2__,\n    '$19.70',\n    'Main'\n  ),\n  new MenuItem(\n    'RBC&WBC',\n    'We made human blood sweet here! The luscious blood red pudding pairs exquisitely with the white vanilla ice cream.',\n    _resource_blood_cells_png__WEBPACK_IMPORTED_MODULE_3__,\n    '$10.70',\n    'Dessert'\n  )\n]\n\nconst menuCardFactory = item => {\n  const container = document.createElement('div')\n  const img = document.createElement('img')\n  const title = document.createElement('div')\n  const description = document.createElement('div')\n  const type = document.createElement('div')\n\n  container.className = 'menu-card'\n  title.className = 'menu-card-title'\n  img.className = 'menu-card-img'\n  description.className = 'menu-card-desc'\n  type.className = 'menu-card-type'\n\n  type.textContent = item.type\n  title.textContent = item.title + ' | ' + item.price\n  img.src = item.imgPath\n  description.textContent = item.desc\n\n  container.append(img, type, title, description)\n  return container\n}\n\nconst menuPage = (() => {\n  const content = document.createElement('div')\n  content.className = 'content'\n\n  const menuHeading = document.createElement('div')\n  menuHeading.className = 'text-menu-h1'\n  menuHeading.textContent =\n    'Some bloody delights to warm you up or cool you down.'\n\n  const menuCards = menuItems.map(item => menuCardFactory(item))\n\n  content.append(...menuCards)\n\n  return content\n})()\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menuPage);\n\n\n//# sourceURL=webpack://odin-restaurant-page/./src/menu-page.js?");

/***/ }),

/***/ "./src/resource/CedarvilleCursive-Regular.ttf":
/*!****************************************************!*\
  !*** ./src/resource/CedarvilleCursive-Regular.ttf ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"a669593f51bb81ad0cc1.ttf\";\n\n//# sourceURL=webpack://odin-restaurant-page/./src/resource/CedarvilleCursive-Regular.ttf?");

/***/ }),

/***/ "./src/resource/bg-bats.png":
/*!**********************************!*\
  !*** ./src/resource/bg-bats.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"41f1362065b13b5c2268.png\";\n\n//# sourceURL=webpack://odin-restaurant-page/./src/resource/bg-bats.png?");

/***/ }),

/***/ "./src/resource/blood-cells.png":
/*!**************************************!*\
  !*** ./src/resource/blood-cells.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"079003ea0eb80c064372.png\";\n\n//# sourceURL=webpack://odin-restaurant-page/./src/resource/blood-cells.png?");

/***/ }),

/***/ "./src/resource/bloody-steak.png":
/*!***************************************!*\
  !*** ./src/resource/bloody-steak.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"844ba21f7e743abfd346.png\";\n\n//# sourceURL=webpack://odin-restaurant-page/./src/resource/bloody-steak.png?");

/***/ }),

/***/ "./src/resource/cross.svg":
/*!********************************!*\
  !*** ./src/resource/cross.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"553324c6967af4f03f5e.svg\";\n\n//# sourceURL=webpack://odin-restaurant-page/./src/resource/cross.svg?");

/***/ }),

/***/ "./src/resource/parchment.png":
/*!************************************!*\
  !*** ./src/resource/parchment.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"119470174374f3966d79.png\";\n\n//# sourceURL=webpack://odin-restaurant-page/./src/resource/parchment.png?");

/***/ }),

/***/ "./src/resource/pulled-pork.png":
/*!**************************************!*\
  !*** ./src/resource/pulled-pork.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"b32f3932d05514e360b9.png\";\n\n//# sourceURL=webpack://odin-restaurant-page/./src/resource/pulled-pork.png?");

/***/ }),

/***/ "./src/resource/rainbow-puke.png":
/*!***************************************!*\
  !*** ./src/resource/rainbow-puke.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"88f0208412cd8e91c7e5.png\";\n\n//# sourceURL=webpack://odin-restaurant-page/./src/resource/rainbow-puke.png?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);