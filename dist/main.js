/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/main.js":
/*!*****************************!*\
  !*** ./src/scripts/main.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _navigation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navigation */ "./src/scripts/navigation.js");
/* harmony import */ var _navigation__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_navigation__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _youtube_embed__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./youtube_embed */ "./src/scripts/youtube_embed.js");
/* harmony import */ var _youtube_embed__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_youtube_embed__WEBPACK_IMPORTED_MODULE_1__);



/***/ }),

/***/ "./src/scripts/navigation.js":
/*!***********************************!*\
  !*** ./src/scripts/navigation.js ***!
  \***********************************/
/***/ (() => {

/**
 * File navigation.js.
 *
 * Handles toggling the navigation menu for small screens and enables TAB key
 * navigation support for dropdown menus.
 */
(function () {
  const siteNavigation = document.getElementById('site-navigation');

  // Return early if the navigation doesn't exist.
  if (!siteNavigation) {
    return;
  }
  const button = siteNavigation.getElementsByTagName('button')[0];

  // Return early if the button doesn't exist.
  if ('undefined' === typeof button) {
    return;
  }
  const menu = siteNavigation.getElementsByTagName('ul')[0];

  // Hide menu toggle button if menu is empty and return early.
  if ('undefined' === typeof menu) {
    button.style.display = 'none';
    return;
  }
  if (!menu.classList.contains('nav-menu')) {
    menu.classList.add('nav-menu');
  }

  // Toggle the .toggled class and the aria-expanded value each time the button is clicked.
  button.addEventListener('click', function () {
    siteNavigation.classList.toggle('is-active');
    button.classList.toggle('is-active');
    if (button.getAttribute('aria-expanded') === 'true') {
      button.setAttribute('aria-expanded', 'false');
    } else {
      button.setAttribute('aria-expanded', 'true');
    }
  });

  // Remove the .toggled class and set aria-expanded to false when the user clicks outside the navigation.
  document.addEventListener('click', function (event) {
    const isClickInside = siteNavigation.contains(event.target);
    if (!isClickInside) {
      siteNavigation.classList.remove('is-active');
      button.setAttribute('aria-expanded', 'false');
    }
  });

  // Get all the link elements within the menu.
  const links = menu.getElementsByTagName('a');

  // Get all the link elements with children within the menu.
  const linksWithChildren = menu.querySelectorAll('.menu-item-has-children > a, .page_item_has_children > a');

  // Toggle focus each time a menu link is focused or blurred.
  for (const link of links) {
    link.addEventListener('focus', toggleFocus, true);
    link.addEventListener('blur', toggleFocus, true);
  }

  // Toggle focus each time a menu link with children receive a touch event.
  for (const link of linksWithChildren) {
    link.addEventListener('touchstart', toggleFocus, false);
  }

  /**
   * Sets or removes .focus class on an element.
   */
  function toggleFocus() {
    if (event.type === 'focus' || event.type === 'blur') {
      let self = this;
      // Move up through the ancestors of the current link until we hit .nav-menu.
      while (!self.classList.contains('nav-menu')) {
        // On li elements toggle the class .focus.
        if ('li' === self.tagName.toLowerCase()) {
          self.classList.toggle('focus');
        }
        self = self.parentNode;
      }
    }
    if (event.type === 'touchstart') {
      const menuItem = this.parentNode;
      event.preventDefault();
      for (const link of menuItem.parentNode.children) {
        if (menuItem !== link) {
          link.classList.remove('focus');
        }
      }
      menuItem.classList.toggle('focus');
    }
  }
})();

/***/ }),

/***/ "./src/scripts/youtube_embed.js":
/*!**************************************!*\
  !*** ./src/scripts/youtube_embed.js ***!
  \**************************************/
/***/ (() => {

const previews = document.querySelectorAll('.preview-container');
previews.forEach(embedYoutubePlayer);
async function embedYoutubePlayer(el) {
  const endpoint = 'https://www.googleapis.com/youtube/v3/videos';
  const parameters = {
    maxWidth: 200,
    part: 'contentDetails,snippet,player',
    id: el.dataset.video_id,
    key: 'AIzaSyAf4vbBO39etdZt_8HyyMiMlcVA5-EhqEk'
  };
  const url = `${endpoint}?${new URLSearchParams(parameters)}`;
  const resp = await fetch(url);
  const data = await resp.json();

  // const thumbnail = data.items[ 0 ].snippet.thumbnails.medium.url;
  const embedHtml = data.items[0].player.embedHtml;
  const aspectRatio = data.items[0].player.embedWidth / data.items[0].player.embedHeight;
  const embed = `
	<div class="embed-container" style="aspect-ratio: ${aspectRatio}; ">
	${embedHtml}
</div>`;
  el.innerHTML = embed;
}

// embedYoutubePlayer();

/***/ }),

/***/ "./src/scss/index.scss":
/*!*****************************!*\
  !*** ./src/scss/index.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/index.scss */ "./src/scss/index.scss");
/* harmony import */ var _scripts_main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/main */ "./src/scripts/main.js");
// import main stylesheet


// start scripts

})();

/******/ })()
;
//# sourceMappingURL=main.js.map