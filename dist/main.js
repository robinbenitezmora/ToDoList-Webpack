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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("const list = document.getElementById('list');\r\nconst input = document.getElementById('input');\r\nconst btnEnter = document.getElementById('enter');\r\n\r\n// Add task function\r\n\r\nconst addTask = (task) => {\r\n  const element = `\r\n  <li class='list-item' id='element'>          \r\n    <i class='far fa-square co\" id='0' data-='finished'></i>\r\n    <p class='text'>${task}</p>\r\n    <i class='fas fa-trash de' id='0' data-='eliminated'></i>\r\n  </li>\r\n`;\r\n  list.insertAdjacentHTML('beforeend', element);\r\n}\r\n\r\nbtnEnter.addEventListener('click', () => {\r\n  const task = input.value;\r\n  if (task === '') {\r\n    alert('Please enter a task');\r\n  } else {\r\n    addTask(task);\r\n    input.value = '';\r\n  }\r\n});\r\n\r\ndocument.addEventListener('keyup', (e) => {\r\n  if (e.key === 'Enter') {\r\n    const task = input.value;\r\n    if (task === '') {\r\n      alert('Please enter a task');\r\n    } else {\r\n      addTask(task);\r\n      input.value = '';\r\n    }\r\n  }\r\n});\r\n\r\n\n\n//# sourceURL=webpack://todolist/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;