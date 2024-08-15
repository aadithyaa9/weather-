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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _requests_weather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./requests/weather */ \"./src/requests/weather.js\");\n/* harmony import */ var _requests_gif__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./requests/gif */ \"./src/requests/gif.js\");\n\n\nconst button = document.querySelector(\".find-btn\");\nconst input = document.querySelector(\"#search\");\nconst message = document.querySelector(\".message\");\nconst weatherdiv = document.querySelector(\".weather-data\");\nlet inputlocation;\nlet url;\nlet weatherarray = [];\n\n// Event Listener for button\nbutton.addEventListener(\"click\", async function (event) {\n  event.preventDefault(); // Prevent the default form submission behavior\n\n  // Check if the input value is empty\n  if (input.value === \"\") {\n    message.textContent = \"Invalid Location\";\n  } else {\n    inputlocation = input.value.trim();\n    // Fetch the weather data and GIF\n    try {\n      weatherarray = await (0,_requests_weather__WEBPACK_IMPORTED_MODULE_0__.getWeather)(inputlocation, message);\n      url = await (0,_requests_gif__WEBPACK_IMPORTED_MODULE_1__.getGif)(weatherarray[1]);\n\n      // Clear the message and update the DOM with weather data\n      message.textContent = \"\";\n      input.value = \"\"; // Clear the input field\n\n      // Convert temperature to Celsius for initial display\n      const celsiusTemp = Math.round((weatherarray[0] - 32) * (5 / 9));\n\n      // Set initial HTML for weather data with Celsius as default\n      weatherdiv.innerHTML = `\n        <div class=\"title-row\">\n          <h2>${weatherarray[4]}</h2>\n          <button class=\"toggle\">°F</button>\n        </div>\n        <div class=\"temp-row\">\n          <span class=\"temp\">${celsiusTemp}<span class=\"super-script\">°<sup>C</sup></span></span>\n          <img class=\"icon\" src=\"./icons/${weatherarray[2]}.svg\" />\n        </div>\n        <div class=\"gif-container\">\n          <img class=\"gif\" src=\"${url}\" alt=\"#\" />\n        </div>\n        <div class=\"condition\">\n          <h3>${weatherarray[1]}</h3>\n        </div>\n        <div class=\"description\">\n          <p>${weatherarray[3]}</p>\n        </div>`;\n\n      // Get the toggle button and temperature span\n      const togglebtn = document.querySelector(\".toggle\");\n      const tempspan = document.querySelector(\".temp\");\n      togglebtn.addEventListener(\"click\", function () {\n        togglebtn.classList.toggle(\"celsius\");\n        if (togglebtn.textContent === \"°F\") {\n          // Convert to Fahrenheit\n          tempspan.innerHTML = `\n            ${Math.round(weatherarray[0])}<span class=\"super-script\">°<sup>F</sup></span>\n          `;\n          togglebtn.textContent = \"°C\"; // Update button text to show Celsius option\n        } else {\n          // Convert to Celsius\n          tempspan.innerHTML = `\n            ${celsiusTemp}<span class=\"super-script\">°<sup>C</sup></span>\n          `;\n          togglebtn.textContent = \"°F\"; // Update button text to show Fahrenheit option\n        }\n      });\n    } catch (error) {\n      console.error(\"Error fetching data:\", error);\n      message.textContent = \"Error fetching weather data.\";\n    }\n  }\n});\n\n//# sourceURL=webpack://weather/./src/index.js?");

/***/ }),

/***/ "./src/requests/gif.js":
/*!*****************************!*\
  !*** ./src/requests/gif.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getGif: () => (/* binding */ getGif)\n/* harmony export */ });\nasync function getGif(climate_condition) {\n  try {\n    const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=QekxzTEPMcNHKFH3eXPGGy94njaQE32Y&q=${climate_condition}`);\n    const datas = await response.json();\n    return datas.data[2].images.original.url;\n  } catch (error) {\n    console.log(`Error: ${error}`);\n  }\n}\n\n\n//# sourceURL=webpack://weather/./src/requests/gif.js?");

/***/ }),

/***/ "./src/requests/weather.js":
/*!*********************************!*\
  !*** ./src/requests/weather.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getWeather: () => (/* binding */ getWeather)\n/* harmony export */ });\nasync function getWeather(location, message) {\n  message.textContent = \"Loading...\";\n  try {\n    const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/today?unitGroup=us&include=current&key=WBJ8N28RSTEG4YKPQ3FFEUMBQ&contentType=json`, {\n      mode: \"cors\"\n    });\n    const data = await response.json();\n    return [data.currentConditions.temp, data.currentConditions.conditions, data.currentConditions.icon, data.days[0].description, data.resolvedAddress];\n  } catch (error) {\n    message.textContent = \"Invalid Location\";\n    console.log(`Error: ${error}`);\n  }\n}\n\n\n//# sourceURL=webpack://weather/./src/requests/weather.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;