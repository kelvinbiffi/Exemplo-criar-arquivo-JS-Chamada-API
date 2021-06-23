/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/anuncios.js":
/*!*************************!*\
  !*** ./src/anuncios.js ***!
  \*************************/
/***/ ((module) => {

eval("const anuncios = [{\"nome\":\"first\",\"tamanho\":\"300x200\",\"descricao\":\"banner inicial\"},{\"nome\":\"under\",\"tamanho\":\"800x120\",\"descricao\":\"banner fixo na parte inferior da tela\"},{\"nome\":\"postitial\",\"tamanho\":\"320x280\",\"descricao\":\"banner que aparece ao clicar em um link de transição\"}];\n\nmodule.exports = { anuncios };\n\n\n//# sourceURL=webpack://Exemplo-criar-arquivo-JS-Chamada-API/./src/anuncios.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const { anuncios } = __webpack_require__(/*! ./anuncios */ \"./src/anuncios.js\");\r\n\r\n(() => {\r\n  const list = document.getElementById('anuncios');\r\n\r\n  const getAnuncioTitle = (i) => {\r\n    return `<h2>Anúncio ${i}</h2>`;\r\n  };\r\n\r\n  const getCorpoAnuncio = (anuncio) => {\r\n    return `\r\n      <div>${anuncio.nome}</div>\r\n      <div>${anuncio.tamanho}</div>\r\n      <div>${anuncio.descricao}</div>\r\n    `;\r\n  };\r\n\r\n  const getAnuncioHTMLItem = (anuncio, i) => {\r\n    return `\r\n      <li>\r\n        ${getAnuncioTitle(i)}\r\n        ${getCorpoAnuncio(anuncio)}\r\n      </li>\r\n    `;\r\n  };\r\n\r\n  for (i in anuncios) {\r\n    const anuncio = anuncios[i];\r\n\r\n    list.insertAdjacentHTML(\r\n      'beforeend',\r\n      getAnuncioHTMLItem(anuncio, i),\r\n    );\r\n  }\r\n})();\r\n\n\n//# sourceURL=webpack://Exemplo-criar-arquivo-JS-Chamada-API/./src/main.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.js");
/******/ 	
/******/ })()
;