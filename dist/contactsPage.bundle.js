"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkodin_restaurant_page"] = self["webpackChunkodin_restaurant_page"] || []).push([["contactsPage"],{

/***/ "./src/contacts-page.js":
/*!******************************!*\
  !*** ./src/contacts-page.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst contactsPage = (() => {\n\n    const content = document.createElement('div')\n    const contactsHeading = document.createElement('div')\n    const contactsInfo = document.createElement('div')\n\n    contactsHeading.className = 'text-contacts-h1'\n    contactsInfo.className = 'text-contacts-info'\n    content.className = 'content'\n\n    contactsHeading.textContent = 'Any enquiries or wanna make a reservation?'\n    contactsInfo.innerHTML = '<i>Call us at +666-10458204</i> <br/> or <br/>  email us at thevampireentrees@fangs.com.' +\n    '<br/> <br/>We can\\'t wait to hear from you (or seat you). If we ghost you, dinner is on us!'\n\n    content.append(contactsHeading, contactsInfo)\n    return content\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contactsPage);\n\n//# sourceURL=webpack://odin-restaurant-page/./src/contacts-page.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/contacts-page.js"));
/******/ }
]);