"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkodin_restaurant_page"] = self["webpackChunkodin_restaurant_page"] || []).push([["menuPage"],{

/***/ "./src/menu-page.js":
/*!**************************!*\
  !*** ./src/menu-page.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _resource_bloody_steak_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./resource/bloody-steak.png */ \"./src/resource/bloody-steak.png\");\n/* harmony import */ var _resource_pulled_pork_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./resource/pulled-pork.png */ \"./src/resource/pulled-pork.png\");\n/* harmony import */ var _resource_rainbow_puke_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./resource/rainbow-puke.png */ \"./src/resource/rainbow-puke.png\");\n/* harmony import */ var _resource_blood_cells_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./resource/blood-cells.png */ \"./src/resource/blood-cells.png\");\n\n\n\n\n\nfunction MenuItem (title, desc, imgPath, price, type) {\n  this.title = title\n  this.desc = desc\n  this.imgPath = imgPath\n  this.price = price\n  this.type = type\n}\n\nconst menuItems = [\n  new MenuItem(\n    'Bloody Hell',\n    'Some A5 wagyu premium cuts with some grilled asparagus on the side and our house special BloodJuice!',\n    _resource_bloody_steak_png__WEBPACK_IMPORTED_MODULE_0__,\n    '$20.70',\n    'Main'\n  ),\n  new MenuItem(\n    'Peppa Pig',\n    'Slimy pesto on top of our childhood fave, Peppa Pig in its true form roasted to perfection! Some handbattered onion rings on the side.',\n    _resource_pulled_pork_png__WEBPACK_IMPORTED_MODULE_1__,\n    '$16.50',\n    'Main'\n  ),\n  new MenuItem(\n    'Rainbow Puke',\n    'All these colorful but nasty veggies make me puke, but you do you... Thank Satan we have some fresh tuna sashimi to make it less disastrous.',\n    _resource_rainbow_puke_png__WEBPACK_IMPORTED_MODULE_2__,\n    '$19.70',\n    'Main'\n  ),\n  new MenuItem(\n    'RBC&WBC',\n    'We made human blood sweet here! The luscious blood red pudding pairs exquisitely with the white vanilla ice cream.',\n    _resource_blood_cells_png__WEBPACK_IMPORTED_MODULE_3__,\n    '$10.70',\n    'Dessert'\n  )\n]\n\nconst menuCardFactory = item => {\n  const container = document.createElement('div')\n  const img = document.createElement('img')\n  const title = document.createElement('div')\n  const description = document.createElement('div')\n  const type = document.createElement('div')\n\n  container.className = 'menu-card'\n  title.className = 'menu-card-title'\n  img.className = 'menu-card-img'\n  description.className = 'menu-card-desc'\n  type.className = 'menu-card-type'\n\n  type.textContent = item.type\n  title.textContent = item.title + ' | ' + item.price\n  img.src = item.imgPath\n  description.textContent = item.desc\n\n  container.append(img, type, title, description)\n  return container\n}\n\nconst menuPage = (() => {\n  const content = document.createElement('div')\n  content.className = 'content'\n\n  const menuHeading = document.createElement('div')\n  menuHeading.className = 'text-menu-h1'\n  menuHeading.textContent =\n    'Some bloody delights to warm you up or cool you down.'\n\n  const menuCards = menuItems.map(item => menuCardFactory(item))\n\n  content.append(...menuCards)\n\n  return content\n})()\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menuPage);\n\n\n//# sourceURL=webpack://odin-restaurant-page/./src/menu-page.js?");

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
/******/ var __webpack_exports__ = (__webpack_exec__("./src/menu-page.js"));
/******/ }
]);