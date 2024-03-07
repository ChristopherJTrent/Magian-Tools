/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _lib_Nyzul_index_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/Nyzul/index.mjs */ \"./src/js/lib/Nyzul/index.mjs\");\n\n\nconst nyzul = new _lib_Nyzul_index_mjs__WEBPACK_IMPORTED_MODULE_0__.Nyzul();\n\nlet p = document.createElement('p');\np.innerText = 'hello, world! from Nyzul!'\nnyzul.appendChild(p)\n\n//# sourceURL=webpack://magian-tools/./src/js/index.js?");

/***/ }),

/***/ "./src/js/lib/Nyzul/engine/_node.js":
/*!******************************************!*\
  !*** ./src/js/lib/Nyzul/engine/_node.js ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   NyzulNode: () => (/* binding */ NyzulNode)\n/* harmony export */ });\n/**\n * A wrapper around HtmlElement that adds component functionality\n */\nclass NyzulNode {\n    /**\n     * \n     * @param {HTMLElement} element \n     */\n    constructor(element) {\n        this.element = element;\n    }\n    /**\n     * appends an HTMLElement to this node\n     * @param {HTMLElement} element \n     */\n    appendChild(element) {\n        this.element.appendChild(element);\n    }\n    /**\n     * appends the render output of a component to the DOM tree of this node\n     * @param {Component} component \n     */\n    appendComponent(component) {\n        this.appendChild(component.render());\n    }\n}\n\n//# sourceURL=webpack://magian-tools/./src/js/lib/Nyzul/engine/_node.js?");

/***/ }),

/***/ "./src/js/lib/Nyzul/engine/nyzul.js":
/*!******************************************!*\
  !*** ./src/js/lib/Nyzul/engine/nyzul.js ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Nyzul)\n/* harmony export */ });\n/* harmony import */ var _node_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_node.js */ \"./src/js/lib/Nyzul/engine/_node.js\");\n\n/**\n * The root object for all Nyzul projects\n * Every element you add to your page will hang off of this object.\n */\nclass Nyzul extends _node_js__WEBPACK_IMPORTED_MODULE_0__.NyzulNode {\n    /**\n     * \n     * @param {String} rootId [default: 'pageContainer'] the html element to use as the root of your project\n     */\n    constructor(rootId = 'pageContainer') {\n        super();\n        this.element = document.getElementById(rootId);\n    }\n}\n\n//# sourceURL=webpack://magian-tools/./src/js/lib/Nyzul/engine/nyzul.js?");

/***/ }),

/***/ "./src/js/lib/Nyzul/index.mjs":
/*!************************************!*\
  !*** ./src/js/lib/Nyzul/index.mjs ***!
  \************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Nyzul: () => (/* reexport safe */ _engine_nyzul_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _engine_nyzul_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./engine/nyzul.js */ \"./src/js/lib/Nyzul/engine/nyzul.js\");\n\n\n//# sourceURL=webpack://magian-tools/./src/js/lib/Nyzul/index.mjs?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;