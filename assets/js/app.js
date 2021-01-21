/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/assets/js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/js/app.js":
/*!******************************!*\
  !*** ./src/assets/js/app.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//  Бургер меню и все что с ним свзяно\r\n\r\nconst burgerToggle = document.querySelector('#burger-toggle');\r\nconst openMenu = document.querySelector('.menu-plashka');\r\nconst body = document.body;\r\n\r\nlet unlock = true;\r\nlet timeout = 400;\r\n\r\n// open mobile menu and lock body\r\n\r\n\r\nburgerToggle.onclick = function(){\r\n    burgerToggle.classList.toggle('burger-active');\r\n    openMenu.classList.toggle('open');\r\n\r\n    if(body.classList.contains('lock')){\r\n        bodyUnlock();\r\n    } else{ bodyLock(); }\r\n}\r\n\r\nfunction bodyLock(){\r\n    const lockValue = window.innerWidth - openMenu.offsetWidth + 'px';\r\n    body.style.paddingRight = lockValue;\r\n    body.classList.add('lock');\r\n\r\n\r\n    unlock = false;\r\n    setTimeout(() => {\r\n        unlock = true;\r\n    }, timeout);\r\n}\r\n\r\nfunction bodyUnlock(){\r\n    setTimeout(() => {\r\n        body.style.paddingRight = '0px';\r\n        body.classList.remove('lock');\r\n\r\n    }, timeout);\r\n\r\n    unlock = false;\r\n    setTimeout(() => {\r\n        unlock = true;\r\n    }, timeout);\r\n}\r\n\r\n\r\n\r\n// Бомбический preloader на сайт\r\n\r\nconst Preloader = document.querySelector('.preloader');\r\nvar date = new Date;\r\nlet images = document.images,\r\n      images_total_count = images.length,\r\n      images_loaded_count = 0,\r\n      display_perc = document.querySelector('.perc');\r\n\r\n\r\ndocument.body.onload = function(){\r\n\r\n    for(let i = 0; i < images_total_count; i++){\r\n        image_clone = new Image();\r\n        image_clone.onload = image_loaded;\r\n        image_clone.onerror = image_loaded;\r\n        image_clone.src = images[i].src;\r\n    }\r\n\r\n    function image_loaded(){\r\n        images_loaded_count++;\r\n        display_perc.innerHTML = (((100 / images_total_count) * images_loaded_count) << 0 ) + '%';\r\n        if(images_loaded_count >= images_total_count){\r\n            setTimeout(function() {\r\n                if(!Preloader.classList.contains('loaded')){\r\n                    Preloader.classList.add('loaded');\r\n                }\r\n            }, 1500)\r\n        }\r\n    }\r\n}\r\n\r\n\r\n// input autoresize function\r\n\r\nconst textArea = document.querySelectorAll('[data-autoresize]');\r\n\r\ntextArea.forEach(item => {\r\n\r\n    item.addEventListener('input', (e) => {\r\n        let $this = e.target;\r\n\r\n        $this.style.height = '20px';\r\n        $this.style.height = $this.scrollHeight + 'px';\r\n    });\r\n\r\n});\r\n\r\n\r\n\r\n// User popup\r\n\r\nconst btns = document.querySelectorAll('.popup-btn');\r\nconst modalOverlay = document.querySelector('.popup');\r\nconst modalBody = document.querySelector('.popup-body');\r\nconst modals = document.querySelectorAll('.popup-content');\r\nconst modalClose = document.querySelector('.modal-close');\r\n\r\nbtns.forEach((el) => {\r\n\tel.addEventListener('click', (e) => {\r\n        let path = e.currentTarget.getAttribute('data-path');\r\n\r\n\t\tmodals.forEach((el) => {\r\n            el.classList.remove('modal-show');\r\n\t\t});\r\n\r\n        document.querySelector(`[data-target=\"${path}\"]`).classList.add('modal-show');\r\n        modalOverlay.classList.add('open');\r\n\t});\r\n});\r\n\r\nmodalOverlay.addEventListener('click', (e) => {\r\n    if(e.target == modalBody){\r\n        popupClose();\r\n    }\r\n});\r\n\r\nmodalClose.addEventListener('click', (e) => {\r\n    popupClose();\r\n});\r\n\r\n\r\nfunction popupClose(){\r\n    modalOverlay.classList.remove('open');\r\n\t\tmodals.forEach((el) => {\r\n\t\t\tel.classList.remove('modal-show');\r\n    });\r\n}\n\n//# sourceURL=webpack:///./src/assets/js/app.js?");

/***/ })

/******/ });