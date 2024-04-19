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

/***/ "./src/components/Film/Film.ts":
/*!*************************************!*\
  !*** ./src/components/Film/Film.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AttributesFilm\": () => (/* binding */ AttributesFilm),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar AttributesFilm;\n(function (AttributesFilm) {\n    AttributesFilm[\"btn_favorite\"] = \"btn_favorite\";\n    AttributesFilm[\"utitle\"] = \"utitle\";\n    AttributesFilm[\"original_title\"] = \"original_title\";\n    AttributesFilm[\"release_date\"] = \"release_date\";\n    AttributesFilm[\"description\"] = \"description\";\n    AttributesFilm[\"director\"] = \"director\";\n    AttributesFilm[\"btn_people\"] = \"btn_people\";\n})(AttributesFilm || (AttributesFilm = {}));\nclass Film extends HTMLElement {\n    constructor() {\n        super();\n        this.attachShadow({ mode: 'open' });\n    }\n    static get observedAttributes() {\n        const attrs = {\n            btn_favorite: null,\n            utitle: null,\n            original_title: null,\n            release_date: null,\n            description: null,\n            director: null,\n            btn_people: null,\n        };\n        return Object.keys(attrs);\n    }\n    attributeChangedCallback(propName, oldValue, newValue) {\n        switch (propName) {\n            default:\n                this[propName] = newValue;\n                break;\n        }\n        this.render();\n    }\n    ConnectedCallback() {\n        this.render();\n    }\n    render() {\n        if (this.shadowRoot) {\n            this.shadowRoot.innerHTML = `\r\n<h1>${this.utitle}</h1>\r\n<h2>${this.original_title}</h2>\r\n<b><p>${this.release_date}</p></b>\r\n<b><p>${this.director}</p></b>\r\n<p>${this.description}</p>\r\n<button>${this.btn_favorite || 'add to favorites'}</button>\r\n<button>${this.btn_people || 'show people'}</button>\r\n`;\n        }\n    }\n}\ncustomElements.define('film', Film);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Film);\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/components/Film/Film.ts?");

/***/ }),

/***/ "./src/components/People/People.ts":
/*!*****************************************!*\
  !*** ./src/components/People/People.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AttributesPeople\": () => (/* binding */ AttributesPeople),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar AttributesPeople;\n(function (AttributesPeople) {\n    AttributesPeople[\"name\"] = \"name\";\n    AttributesPeople[\"gender\"] = \"gender\";\n})(AttributesPeople || (AttributesPeople = {}));\nclass People extends HTMLElement {\n    constructor() {\n        super();\n        this.attachShadow({ mode: 'open' });\n    }\n    static get observedAttributes() {\n        const attrs = {\n            name: null,\n            gender: null,\n        };\n        return Object.keys(attrs);\n    }\n    attributeChangedCallback(propName, oldValue, newValue) {\n        switch (propName) {\n            default:\n                this[propName] = newValue;\n                break;\n        }\n        this.render();\n    }\n    ConnectedCallback() {\n        this.render();\n    }\n    render() {\n        if (this.shadowRoot) {\n            this.shadowRoot.innerHTML = `\r\n<b><p>${this.name}</p></b>\r\n<p>${this.gender}</p>\r\n`;\n        }\n    }\n}\ncustomElements.define('people', People);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (People);\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/components/People/People.ts?");

/***/ }),

/***/ "./src/components/indexPadre.ts":
/*!**************************************!*\
  !*** ./src/components/indexPadre.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Film\": () => (/* reexport safe */ _Film_Film__WEBPACK_IMPORTED_MODULE_0__[\"default\"]),\n/* harmony export */   \"People\": () => (/* reexport safe */ _People_People__WEBPACK_IMPORTED_MODULE_1__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _Film_Film__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Film/Film */ \"./src/components/Film/Film.ts\");\n/* harmony import */ var _People_People__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./People/People */ \"./src/components/People/People.ts\");\n\n\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/components/indexPadre.ts?");

/***/ }),

/***/ "./src/data/dataFetchFilms.ts":
/*!************************************!*\
  !*** ./src/data/dataFetchFilms.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getFilms\": () => (/* binding */ getFilms)\n/* harmony export */ });\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nfunction getFilms() {\n    return __awaiter(this, void 0, void 0, function* () {\n        try {\n            const data = yield fetch('https://ghibliapi.vercel.app/films').then((res) => res.json());\n            console.log(data);\n            return data.results;\n        }\n        catch (error) {\n            console.error('no funciona');\n        }\n    });\n}\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/data/dataFetchFilms.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_indexPadre__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/indexPadre */ \"./src/components/indexPadre.ts\");\n/* harmony import */ var _data_dataFetchFilms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data/dataFetchFilms */ \"./src/data/dataFetchFilms.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\n\n\nclass AppContainer extends HTMLElement {\n    constructor() {\n        super();\n        this.attachShadow({ mode: 'open' });\n    }\n    connectedCallback() {\n        return __awaiter(this, void 0, void 0, function* () {\n            const dataFilms = yield (0,_data_dataFetchFilms__WEBPACK_IMPORTED_MODULE_1__.getFilms)();\n            console.log(dataFilms);\n            this.render(dataFilms);\n        });\n    }\n    render(dataFilms) {\n        if (this.shadowRoot) {\n            this.shadowRoot.innerHTML = `\n\t\t\t<film\n\t\t\tutitle='${dataFilms.title}'\n\t\t\toriginal_title='${dataFilms.original_title}'\n\t\t\tdirector='${dataFilms.director}'\n\t\t\tdescription='${dataFilms.description}'\n\t\t\trelease_date='${dataFilms.release_date}'\n\t</film>\n`;\n        }\n    }\n}\ncustomElements.define('app-container', AppContainer);\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/index.ts?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;