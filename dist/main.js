/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/cart.css":
/*!****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/cart.css ***!
  \****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".price-section {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n}\r\n\r\n.price-section>div {\r\n    display: flex;\r\n    width: 40%;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n}\r\n\r\n.price {\r\n    font-size: 1.5rem;\r\n    font-weight: bold;\r\n}\r\n\r\n.price+span {\r\n    color: var(--orange);\r\n    font-weight: bold;\r\n    font-size: 0.9rem;\r\n}\r\n\r\n.price-section>span {\r\n    text-decoration: line-through;\r\n    font-size: 0.9rem;\r\n    color: var(--darkGrayishBlue);\r\n}\r\n\r\n.add-item-section {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    padding: 0 1rem;\r\n    font-weight: bold;\r\n    list-style: none;\r\n    margin: 2rem 0;\r\n}\r\n\r\n.btn {\r\n    width: 100%;\r\n    background-color: var(--orange);\r\n    border: none;\r\n    height: 2.5rem;\r\n    border-radius: 8px;\r\n    color: var(--paleOrange);\r\n    font-family: var(--kumbhSans);\r\n}\r\n\r\n.cart-btn-wrapper {\r\n    margin: 0 0 80px;\r\n}\r\n\r\n.add-to-cart-btn {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;   \r\n}\r\n\r\n.add-to-cart-btn svg {\r\n    margin-right: 10px;\r\n}\r\n\r\n.add-to-cart-btn p {\r\n    margin-left: 10px;   \r\n}\r\n\r\n.bg-cart-box {\r\n    position: fixed;\r\n    top: 0;\r\n    width: 100%;\r\n    bottom: 0;\r\n    background-color: var(--blackFaded);\r\n    z-index: 2;    \r\n    justify-content: center;\r\n    display: none;\r\n    /* opacity: 0;\r\n    transition: opacity 0.5s; */\r\n}\r\n\r\n.cart-box {\r\n    /* min-height: 40%; */\r\n    position: fixed;\r\n    top: 55px;\r\n    border-radius: 10px;\r\n    width: 95%;\r\n    background-color: var(--white);\r\n    z-index: 3;\r\n}\r\n\r\n.cart-box h4 {\r\n    border-bottom: 2px solid var(--blackFaded);\r\n    padding: 1rem;\r\n}\r\n\r\n.inner-cart-box,.inner-cart-box + div {\r\n    padding: 1rem;\r\n}\r\n\r\n.card-detail {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    font-size: 0.91rem;\r\n}\r\n\r\n.card-detail > div:first-child {\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.product-thumbnail {\r\n    width: 40px;\r\n    border-radius: 5px;\r\n}\r\n\r\n.product-delete-wrapper {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;    \r\n}\r\n\r\n.product-thumbnail + div {\r\n   margin-left: 10px;\r\n}\r\n\r\n.checkout-cart-active {\r\n    display: flex;  \r\n}\r\n\r\n.cart-div {\r\n    position: relative;\r\n}\r\n\r\n.cart-count {\r\n  position: absolute;\r\n  background-color: var(--orange);\r\n  color: var(--white);\r\n  font-family: sans-serif;\r\n  font-size: 12px;\r\n  border-radius: 50%;\r\n  width: 20px;\r\n  height: 15px;\r\n  text-align: center;\r\n  top: -10px;\r\n  right: 25px;\r\n}\r\n\r\n.empty-message {\r\n  width: 100%; \r\n  text-align: center;\r\n  margin: 30px 0;\r\n  font-size: 12px;\r\n  font-weight: bold;\r\n  color: var(--darkGrayishBlue);\r\n}", "",{"version":3,"sources":["webpack://./src/css/cart.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,UAAU;IACV,8BAA8B;IAC9B,mBAAmB;AACvB;;AAEA;IACI,iBAAiB;IACjB,iBAAiB;AACrB;;AAEA;IACI,oBAAoB;IACpB,iBAAiB;IACjB,iBAAiB;AACrB;;AAEA;IACI,6BAA6B;IAC7B,iBAAiB;IACjB,6BAA6B;AACjC;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,eAAe;IACf,iBAAiB;IACjB,gBAAgB;IAChB,cAAc;AAClB;;AAEA;IACI,WAAW;IACX,+BAA+B;IAC/B,YAAY;IACZ,cAAc;IACd,kBAAkB;IAClB,wBAAwB;IACxB,6BAA6B;AACjC;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;AAC3B;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,eAAe;IACf,MAAM;IACN,WAAW;IACX,SAAS;IACT,mCAAmC;IACnC,UAAU;IACV,uBAAuB;IACvB,aAAa;IACb;+BAC2B;AAC/B;;AAEA;IACI,qBAAqB;IACrB,eAAe;IACf,SAAS;IACT,mBAAmB;IACnB,UAAU;IACV,8BAA8B;IAC9B,UAAU;AACd;;AAEA;IACI,0CAA0C;IAC1C,aAAa;AACjB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;IACnB,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,WAAW;IACX,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;GACG,iBAAiB;AACpB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;EACE,kBAAkB;EAClB,+BAA+B;EAC/B,mBAAmB;EACnB,uBAAuB;EACvB,eAAe;EACf,kBAAkB;EAClB,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,UAAU;EACV,WAAW;AACb;;AAEA;EACE,WAAW;EACX,kBAAkB;EAClB,cAAc;EACd,eAAe;EACf,iBAAiB;EACjB,6BAA6B;AAC/B","sourcesContent":[".price-section {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n}\r\n\r\n.price-section>div {\r\n    display: flex;\r\n    width: 40%;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n}\r\n\r\n.price {\r\n    font-size: 1.5rem;\r\n    font-weight: bold;\r\n}\r\n\r\n.price+span {\r\n    color: var(--orange);\r\n    font-weight: bold;\r\n    font-size: 0.9rem;\r\n}\r\n\r\n.price-section>span {\r\n    text-decoration: line-through;\r\n    font-size: 0.9rem;\r\n    color: var(--darkGrayishBlue);\r\n}\r\n\r\n.add-item-section {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    padding: 0 1rem;\r\n    font-weight: bold;\r\n    list-style: none;\r\n    margin: 2rem 0;\r\n}\r\n\r\n.btn {\r\n    width: 100%;\r\n    background-color: var(--orange);\r\n    border: none;\r\n    height: 2.5rem;\r\n    border-radius: 8px;\r\n    color: var(--paleOrange);\r\n    font-family: var(--kumbhSans);\r\n}\r\n\r\n.cart-btn-wrapper {\r\n    margin: 0 0 80px;\r\n}\r\n\r\n.add-to-cart-btn {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;   \r\n}\r\n\r\n.add-to-cart-btn svg {\r\n    margin-right: 10px;\r\n}\r\n\r\n.add-to-cart-btn p {\r\n    margin-left: 10px;   \r\n}\r\n\r\n.bg-cart-box {\r\n    position: fixed;\r\n    top: 0;\r\n    width: 100%;\r\n    bottom: 0;\r\n    background-color: var(--blackFaded);\r\n    z-index: 2;    \r\n    justify-content: center;\r\n    display: none;\r\n    /* opacity: 0;\r\n    transition: opacity 0.5s; */\r\n}\r\n\r\n.cart-box {\r\n    /* min-height: 40%; */\r\n    position: fixed;\r\n    top: 55px;\r\n    border-radius: 10px;\r\n    width: 95%;\r\n    background-color: var(--white);\r\n    z-index: 3;\r\n}\r\n\r\n.cart-box h4 {\r\n    border-bottom: 2px solid var(--blackFaded);\r\n    padding: 1rem;\r\n}\r\n\r\n.inner-cart-box,.inner-cart-box + div {\r\n    padding: 1rem;\r\n}\r\n\r\n.card-detail {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    font-size: 0.91rem;\r\n}\r\n\r\n.card-detail > div:first-child {\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.product-thumbnail {\r\n    width: 40px;\r\n    border-radius: 5px;\r\n}\r\n\r\n.product-delete-wrapper {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;    \r\n}\r\n\r\n.product-thumbnail + div {\r\n   margin-left: 10px;\r\n}\r\n\r\n.checkout-cart-active {\r\n    display: flex;  \r\n}\r\n\r\n.cart-div {\r\n    position: relative;\r\n}\r\n\r\n.cart-count {\r\n  position: absolute;\r\n  background-color: var(--orange);\r\n  color: var(--white);\r\n  font-family: sans-serif;\r\n  font-size: 12px;\r\n  border-radius: 50%;\r\n  width: 20px;\r\n  height: 15px;\r\n  text-align: center;\r\n  top: -10px;\r\n  right: 25px;\r\n}\r\n\r\n.empty-message {\r\n  width: 100%; \r\n  text-align: center;\r\n  margin: 30px 0;\r\n  font-size: 12px;\r\n  font-weight: bold;\r\n  color: var(--darkGrayishBlue);\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/headline.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/headline.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".headline,.cart-section {\r\n  padding: 1rem 1.2rem 0;\r\n}\r\n\r\n.headline > span {\r\n  color: var(--orange);\r\n  text-transform: uppercase;\r\n  font-size: 0.75rem;\r\n  font-weight: 700;\r\n  font-style: normal;\r\n  letter-spacing: 2px;\r\n}\r\n\r\n.headline > h2 {\r\n  margin: 0.5rem 0;\r\n  font-weight: bold;\r\n  color: var(--black);\r\n}\r\n\r\n.headline > p {\r\n  line-height: 1.4rem;\r\n  font-size: 0.9rem;\r\n  color: var(--veryVarkBlue);\r\n}", "",{"version":3,"sources":["webpack://./src/css/headline.css"],"names":[],"mappings":"AAAA;EACE,sBAAsB;AACxB;;AAEA;EACE,oBAAoB;EACpB,yBAAyB;EACzB,kBAAkB;EAClB,gBAAgB;EAChB,kBAAkB;EAClB,mBAAmB;AACrB;;AAEA;EACE,gBAAgB;EAChB,iBAAiB;EACjB,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;EACnB,iBAAiB;EACjB,0BAA0B;AAC5B","sourcesContent":[".headline,.cart-section {\r\n  padding: 1rem 1.2rem 0;\r\n}\r\n\r\n.headline > span {\r\n  color: var(--orange);\r\n  text-transform: uppercase;\r\n  font-size: 0.75rem;\r\n  font-weight: 700;\r\n  font-style: normal;\r\n  letter-spacing: 2px;\r\n}\r\n\r\n.headline > h2 {\r\n  margin: 0.5rem 0;\r\n  font-weight: bold;\r\n  color: var(--black);\r\n}\r\n\r\n.headline > p {\r\n  line-height: 1.4rem;\r\n  font-size: 0.9rem;\r\n  color: var(--veryVarkBlue);\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/index.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/index.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n}\r\n\r\n/* colors */\r\n:root {\r\n    --mobile: 375px;\r\n    --desktop: 1440px;\r\n    --orange: hsl(26, 100%, 55%);\r\n    --paleOrange: hsl(25, 100%, 94%);\r\n    --veryVarkBlue: hsl(220, 13%, 13%);\r\n    --darkGrayishBlue: hsl(219, 9%, 45%);\r\n    --grayishBlue: hsl(220, 14%, 75%);\r\n    --lightGrayishBlue: hsl(223, 64%, 98%);\r\n    --white: hsl(0, 0%, 100%);\r\n    --whiteFaded: hsla(0, 0%, 100%, 0.59);\r\n    --blackFaded: hsla(0, 0%, 0%, 0.253);\r\n    --black: hsl(0, 0%, 0%);\r\n    --kumbhSans: 'Kumbh Sans', sans-serif;\r\n    --fontSize: 1rem;\r\n}\r\n\r\nbody {\r\n    font-family: var(--kumbhSans);\r\n}\r\n\r\n.navbar {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    padding: 1rem;\r\n    height: 3rem;  \r\n}\r\n\r\n.navbar div {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;   \r\n    font-family: var(--kumbhSans);\r\n}\r\n\r\n.navbar svg {\r\n    margin-right: 1rem;   \r\n}\r\n\r\n.cart-div > img {\r\n    width: 20px;\r\n}\r\n\r\n.img-courosal {\r\n    width: 100%;\r\n}\r\n\r\n.attribution {\r\n    font-size: 11px;\r\n    text-align: center;\r\n    display: none;\r\n}\r\n\r\n.attribution a {\r\n    color: hsl(228, 45%, 44%);\r\n}\r\n\r\n\r\n", "",{"version":3,"sources":["webpack://./src/css/index.css"],"names":[],"mappings":"AAAA;IACI,SAAS;IACT,UAAU;IACV,sBAAsB;AAC1B;;AAEA,WAAW;AACX;IACI,eAAe;IACf,iBAAiB;IACjB,4BAA4B;IAC5B,gCAAgC;IAChC,kCAAkC;IAClC,oCAAoC;IACpC,iCAAiC;IACjC,sCAAsC;IACtC,yBAAyB;IACzB,qCAAqC;IACrC,oCAAoC;IACpC,uBAAuB;IACvB,qCAAqC;IACrC,gBAAgB;AACpB;;AAEA;IACI,6BAA6B;AACjC;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,aAAa;IACb,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,6BAA6B;AACjC;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,eAAe;IACf,kBAAkB;IAClB,aAAa;AACjB;;AAEA;IACI,yBAAyB;AAC7B","sourcesContent":["* {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n}\r\n\r\n/* colors */\r\n:root {\r\n    --mobile: 375px;\r\n    --desktop: 1440px;\r\n    --orange: hsl(26, 100%, 55%);\r\n    --paleOrange: hsl(25, 100%, 94%);\r\n    --veryVarkBlue: hsl(220, 13%, 13%);\r\n    --darkGrayishBlue: hsl(219, 9%, 45%);\r\n    --grayishBlue: hsl(220, 14%, 75%);\r\n    --lightGrayishBlue: hsl(223, 64%, 98%);\r\n    --white: hsl(0, 0%, 100%);\r\n    --whiteFaded: hsla(0, 0%, 100%, 0.59);\r\n    --blackFaded: hsla(0, 0%, 0%, 0.253);\r\n    --black: hsl(0, 0%, 0%);\r\n    --kumbhSans: 'Kumbh Sans', sans-serif;\r\n    --fontSize: 1rem;\r\n}\r\n\r\nbody {\r\n    font-family: var(--kumbhSans);\r\n}\r\n\r\n.navbar {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    padding: 1rem;\r\n    height: 3rem;  \r\n}\r\n\r\n.navbar div {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;   \r\n    font-family: var(--kumbhSans);\r\n}\r\n\r\n.navbar svg {\r\n    margin-right: 1rem;   \r\n}\r\n\r\n.cart-div > img {\r\n    width: 20px;\r\n}\r\n\r\n.img-courosal {\r\n    width: 100%;\r\n}\r\n\r\n.attribution {\r\n    font-size: 11px;\r\n    text-align: center;\r\n    display: none;\r\n}\r\n\r\n.attribution a {\r\n    color: hsl(228, 45%, 44%);\r\n}\r\n\r\n\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/sidebar.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/sidebar.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".menu-container {\r\n    position: fixed;\r\n    list-style: none;\r\n    /* padding: 3rem 2rem; */\r\n    width: 0;\r\n    top: 0;\r\n    left: 0;\r\n    bottom: 0;\r\n    background-color: var(--white);\r\n    z-index: 5;\r\n    overflow-x: hidden;   \r\n    transition: 0.5s;\r\n}\r\n\r\n.menu-container li {\r\n    margin-top: 1rem;\r\n}\r\n\r\n.menu-container a {\r\n    text-decoration: none;\r\n    color: var(--black);\r\n    font-weight: bold;\r\n}\r\n\r\n.menu-container a:hover {\r\n    color: var(--veryVarkBlue);\r\n  }\r\n\r\n.close {\r\n    position: absolute;\r\n    top: 20px;\r\n}", "",{"version":3,"sources":["webpack://./src/css/sidebar.css"],"names":[],"mappings":"AAAA;IACI,eAAe;IACf,gBAAgB;IAChB,wBAAwB;IACxB,QAAQ;IACR,MAAM;IACN,OAAO;IACP,SAAS;IACT,8BAA8B;IAC9B,UAAU;IACV,kBAAkB;IAClB,gBAAgB;AACpB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,qBAAqB;IACrB,mBAAmB;IACnB,iBAAiB;AACrB;;AAEA;IACI,0BAA0B;EAC5B;;AAEF;IACI,kBAAkB;IAClB,SAAS;AACb","sourcesContent":[".menu-container {\r\n    position: fixed;\r\n    list-style: none;\r\n    /* padding: 3rem 2rem; */\r\n    width: 0;\r\n    top: 0;\r\n    left: 0;\r\n    bottom: 0;\r\n    background-color: var(--white);\r\n    z-index: 5;\r\n    overflow-x: hidden;   \r\n    transition: 0.5s;\r\n}\r\n\r\n.menu-container li {\r\n    margin-top: 1rem;\r\n}\r\n\r\n.menu-container a {\r\n    text-decoration: none;\r\n    color: var(--black);\r\n    font-weight: bold;\r\n}\r\n\r\n.menu-container a:hover {\r\n    color: var(--veryVarkBlue);\r\n  }\r\n\r\n.close {\r\n    position: absolute;\r\n    top: 20px;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/slideshow.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/slideshow.css ***!
  \*********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".slideshow-container { \r\n  position: relative;\r\n  height: 340px; \r\n  overflow: hidden;\r\n}\r\n\r\n.myslide {\r\n  display: none;\r\n}\r\n\r\n.circle {\r\n  border-radius: 50%;\r\n  position: absolute;\r\n  top: 47%;\r\n  background-color: var(--white);\r\n  width: 30px;\r\n  height: 30px;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  cursor: pointer;\r\n  transition: 0.6s ease;\r\n}\r\n\r\n.prev,.next {\r\n  cursor: pointer;\r\n  font-weight: bold;\r\n  user-select: none;\r\n}\r\n\r\n.circle-prev {\r\n  left: 10px;\r\n}\r\n\r\n.circle-next {\r\n  right: 10px;\r\n}\r\n\r\n.circle-prev:hover {\r\n  background-color: var(--whiteFaded);\r\n}\r\n\r\n.circle-next:hover {\r\n  background-color: var(--whiteFaded);\r\n}\r\n\r\n.fade {\r\n  animation-name: fade;\r\n  animation-duration: 1.5s;\r\n}\r\n\r\n@keyframes fade {\r\n  from {opacity: .4}\r\n  to {opacity: 1}\r\n}", "",{"version":3,"sources":["webpack://./src/css/slideshow.css"],"names":[],"mappings":"AAAA;EACE,kBAAkB;EAClB,aAAa;EACb,gBAAgB;AAClB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,kBAAkB;EAClB,kBAAkB;EAClB,QAAQ;EACR,8BAA8B;EAC9B,WAAW;EACX,YAAY;EACZ,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,eAAe;EACf,qBAAqB;AACvB;;AAEA;EACE,eAAe;EACf,iBAAiB;EACjB,iBAAiB;AACnB;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,mCAAmC;AACrC;;AAEA;EACE,mCAAmC;AACrC;;AAEA;EACE,oBAAoB;EACpB,wBAAwB;AAC1B;;AAEA;EACE,MAAM,WAAW;EACjB,IAAI,UAAU;AAChB","sourcesContent":[".slideshow-container { \r\n  position: relative;\r\n  height: 340px; \r\n  overflow: hidden;\r\n}\r\n\r\n.myslide {\r\n  display: none;\r\n}\r\n\r\n.circle {\r\n  border-radius: 50%;\r\n  position: absolute;\r\n  top: 47%;\r\n  background-color: var(--white);\r\n  width: 30px;\r\n  height: 30px;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  cursor: pointer;\r\n  transition: 0.6s ease;\r\n}\r\n\r\n.prev,.next {\r\n  cursor: pointer;\r\n  font-weight: bold;\r\n  user-select: none;\r\n}\r\n\r\n.circle-prev {\r\n  left: 10px;\r\n}\r\n\r\n.circle-next {\r\n  right: 10px;\r\n}\r\n\r\n.circle-prev:hover {\r\n  background-color: var(--whiteFaded);\r\n}\r\n\r\n.circle-next:hover {\r\n  background-color: var(--whiteFaded);\r\n}\r\n\r\n.fade {\r\n  animation-name: fade;\r\n  animation-duration: 1.5s;\r\n}\r\n\r\n@keyframes fade {\r\n  from {opacity: .4}\r\n  to {opacity: 1}\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/css/cart.css":
/*!**************************!*\
  !*** ./src/css/cart.css ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_cart_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./cart.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/cart.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_cart_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_cart_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_cart_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_cart_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/css/headline.css":
/*!******************************!*\
  !*** ./src/css/headline.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_headline_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./headline.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/headline.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_headline_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_headline_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_headline_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_headline_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/css/index.css":
/*!***************************!*\
  !*** ./src/css/index.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/index.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/css/sidebar.css":
/*!*****************************!*\
  !*** ./src/css/sidebar.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_sidebar_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./sidebar.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/sidebar.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_sidebar_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_sidebar_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_sidebar_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_sidebar_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/css/slideshow.css":
/*!*******************************!*\
  !*** ./src/css/slideshow.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_slideshow_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./slideshow.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/slideshow.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_slideshow_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_slideshow_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_slideshow_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_slideshow_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./node_modules/uniqid/index.js":
/*!**************************************!*\
  !*** ./node_modules/uniqid/index.js ***!
  \**************************************/
/***/ ((module) => {

/* 
(The MIT License)
Copyright (c) 2014-2021 Halász Ádám <adam@aimform.com>
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

//  Unique Hexatridecimal ID Generator
// ================================================

//  Dependencies
// ================================================
var pid = typeof process !== 'undefined' && process.pid ? process.pid.toString(36) : '' ;
var address = '';
if(false){ var i, networkInterfaces, mac, os; } 

//  Exports
// ================================================
module.exports = module.exports["default"] = function(prefix, suffix){ return (prefix ? prefix : '') + address + pid + now().toString(36) + (suffix ? suffix : ''); }
module.exports.process = function(prefix, suffix){ return (prefix ? prefix : '') + pid + now().toString(36) + (suffix ? suffix : ''); }
module.exports.time    = function(prefix, suffix){ return (prefix ? prefix : '') + now().toString(36) + (suffix ? suffix : ''); }

//  Helpers
// ================================================
function now(){
    var time = Date.now();
    var last = now.last || time;
    return now.last = time > last ? time : last + 1;
}


/***/ }),

/***/ "./src/components/cart.js":
/*!********************************!*\
  !*** ./src/components/cart.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.js */ "./src/components/dom.js");
/* harmony import */ var uniqid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uniqid */ "./node_modules/uniqid/index.js");
/* harmony import */ var uniqid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(uniqid__WEBPACK_IMPORTED_MODULE_1__);



class Cart {
    static cart = [
         {
        images: {
          image1: {
            image: '',
            imageThumnail: ''
          },
          image2: {
            image: '',
            imageThumnail: ''
          },
          image3: {
            image: '',
            imageThumnail: ''
          },
          image4: {
            image: '',
            imageThumnail: ''
          },
    
        },   
        productName: 'Capri Limited Edition...',
        qty: 4,
        price: 125,
        id: uniqid__WEBPACK_IMPORTED_MODULE_1___default()(),
    }
];

    static updateQty = (product) => {
        // let newProduct =  Object.assign({}, product); //Update qty by adding one
        // console.log(newProduct)
        product.qty += 1;
        return product;
    }

    static addToCart = (product) => {
        const index = Cart.cart.findIndex((prod) => product.id === prod.id);     
        if(index === -1){           
            Cart.cart = [...Cart.cart, Cart.updateQty(product)];
            console.log(Cart.cart);
            return true;
        } else {                     
            return false;
        }        
    }

    static removeProduct = (product) => {
        Cart.cart = Cart.cart.filter((prod) => prod.id !== product.id);        
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Cart);

/***/ }),

/***/ "./src/components/dom.js":
/*!*******************************!*\
  !*** ./src/components/dom.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "insertCartCard": () => (/* binding */ insertCartCard),
/* harmony export */   "insertCloseIcon": () => (/* binding */ insertCloseIcon),
/* harmony export */   "product": () => (/* binding */ product)
/* harmony export */ });
/* harmony import */ var uniqid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uniqid */ "./node_modules/uniqid/index.js");
/* harmony import */ var uniqid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uniqid__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_sidebar_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/sidebar.css */ "./src/css/sidebar.css");
/* harmony import */ var _images_icon_close_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/icon-close.svg */ "./src/images/icon-close.svg");
/* harmony import */ var _images_image_product_1_thumbnail_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/image-product-1-thumbnail.jpg */ "./src/images/image-product-1-thumbnail.jpg");
/* harmony import */ var _images_image_product_1_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/image-product-1.jpg */ "./src/images/image-product-1.jpg");
/* harmony import */ var _images_image_product_2_thumbnail_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../images/image-product-2-thumbnail.jpg */ "./src/images/image-product-2-thumbnail.jpg");
/* harmony import */ var _images_image_product_2_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../images/image-product-2.jpg */ "./src/images/image-product-2.jpg");
/* harmony import */ var _images_image_product_3_thumbnail_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../images/image-product-3-thumbnail.jpg */ "./src/images/image-product-3-thumbnail.jpg");
/* harmony import */ var _images_image_product_3_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../images/image-product-3.jpg */ "./src/images/image-product-3.jpg");
/* harmony import */ var _images_image_product_4_thumbnail_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../images/image-product-4-thumbnail.jpg */ "./src/images/image-product-4-thumbnail.jpg");
/* harmony import */ var _images_image_product_4_jpg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../images/image-product-4.jpg */ "./src/images/image-product-4.jpg");
/* harmony import */ var _images_icon_delete_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../images/icon-delete.svg */ "./src/images/icon-delete.svg");















const insertCloseIcon = (location) => {
    const img = document.createElement('img');
    img.src = _images_icon_close_svg__WEBPACK_IMPORTED_MODULE_2__;   
    location.appendChild(img);
    return img;
}


const product =  {
    images: {
      image1: {
        image: _images_image_product_1_jpg__WEBPACK_IMPORTED_MODULE_4__,
        imageThumnail: _images_image_product_1_thumbnail_jpg__WEBPACK_IMPORTED_MODULE_3__
      },
      image2: {
        image: _images_image_product_2_jpg__WEBPACK_IMPORTED_MODULE_6__,
        imageThumnail: _images_image_product_2_thumbnail_jpg__WEBPACK_IMPORTED_MODULE_5__
      },
      image3: {
        image: _images_image_product_3_jpg__WEBPACK_IMPORTED_MODULE_8__,
        imageThumnail: _images_image_product_3_thumbnail_jpg__WEBPACK_IMPORTED_MODULE_7__
      },
      image4: {
        image: _images_image_product_4_jpg__WEBPACK_IMPORTED_MODULE_10__,
        imageThumnail: _images_image_product_4_thumbnail_jpg__WEBPACK_IMPORTED_MODULE_9__
      },

    },   
    productName: 'Autumn Limited Edition...',
    qty: 0,
    price: 125,
    id: uniqid__WEBPACK_IMPORTED_MODULE_0___default()(),
}

const insertCartCard = ({images, productName, qty, price, id}) => {
    const productThumnail = images.image1.imageThumnail;  
    
    const cartCard = `
    <div class="cart-card" id="${id}">
    <div class="card-detail">
     <div>
        <img class="product-thumbnail" src="${productThumnail}" alt="product-thumbnail">
        <div>
            <span class="product-name">${productName}</span>
            <div>
                <span class="product-amount">$${price}</span>
                <span>x</span>
                <span class="product-qty">${qty}</span>
                <span>=</span>
                <span class="product-total">
                    <strong>$${qty * price}</strong>
                </span>
            </div>
        </div>
      </div>
      <div class='product-delete-wrapper'>
        <img class="product-delete" src="${_images_icon_delete_svg__WEBPACK_IMPORTED_MODULE_11__}" alt="delete-icon">
      </div>
      </div>         
  </div>`

  const innerCartBox = document.querySelector('.inner-cart-box');
  innerCartBox.insertAdjacentHTML('beforeend', cartCard)
};




const executeSlideShow = () => {  
  const slideCard = (image) => {
    const slides = 
    `<div class="myslide fade">
      <img class="img-courosal" src="${image}" alt="img-courosal">
    </div>`
    const slideshowContainer = document.querySelector('.slideshow-container');
    slideshowContainer.insertAdjacentHTML('afterbegin', slides)
  }

  const showSlider = (n) => {
    let i;
    let slides = document.getElementsByClassName("myslide");
    if (n > slides.length) {
      slideIndex = 1
    }

    if (n < 1) {
      slideIndex = slides.length
    
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    slides[slideIndex-1].style.display = "block";
    }


  const imagesArr = [_images_image_product_1_jpg__WEBPACK_IMPORTED_MODULE_4__, _images_image_product_2_jpg__WEBPACK_IMPORTED_MODULE_6__, _images_image_product_3_jpg__WEBPACK_IMPORTED_MODULE_8__, _images_image_product_4_jpg__WEBPACK_IMPORTED_MODULE_10__ ];
  imagesArr.forEach((item) => {
    slideCard(item)
  });

  let slideIndex = 1;
  showSlider(slideIndex);

  const plusSlides = (n) => {
    console.log('clicked')
    showSlider(slideIndex += n);
  }
  
 
    
  const prev = document.querySelector('.circle-prev');
  const next = document.querySelector('.circle-next');

  prev.addEventListener('click', () => {
    plusSlides(-1)
  });

  next.addEventListener('click', () => {
    plusSlides(1)
  });

  }

  executeSlideShow();



/***/ }),

/***/ "./src/images/icon-close.svg":
/*!***********************************!*\
  !*** ./src/images/icon-close.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "c390448669f3a8a4c4b2.svg";

/***/ }),

/***/ "./src/images/icon-delete.svg":
/*!************************************!*\
  !*** ./src/images/icon-delete.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "1fd1f1f7d9f8ce5557b4.svg";

/***/ }),

/***/ "./src/images/icon-minus.svg":
/*!***********************************!*\
  !*** ./src/images/icon-minus.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "f5073aa8273785ecf6b7.svg";

/***/ }),

/***/ "./src/images/icon-plus.svg":
/*!**********************************!*\
  !*** ./src/images/icon-plus.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "b297868c5f938612f4f0.svg";

/***/ }),

/***/ "./src/images/image-avatar.png":
/*!*************************************!*\
  !*** ./src/images/image-avatar.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "faae000862fa4e4f34e8.png";

/***/ }),

/***/ "./src/images/image-product-1-thumbnail.jpg":
/*!**************************************************!*\
  !*** ./src/images/image-product-1-thumbnail.jpg ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "41da6fdd0ac384f6e068.jpg";

/***/ }),

/***/ "./src/images/image-product-1.jpg":
/*!****************************************!*\
  !*** ./src/images/image-product-1.jpg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "520cc50bd13955f55cb2.jpg";

/***/ }),

/***/ "./src/images/image-product-2-thumbnail.jpg":
/*!**************************************************!*\
  !*** ./src/images/image-product-2-thumbnail.jpg ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "cf503aaea954964f5273.jpg";

/***/ }),

/***/ "./src/images/image-product-2.jpg":
/*!****************************************!*\
  !*** ./src/images/image-product-2.jpg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "c8bb0aaccecdebb16596.jpg";

/***/ }),

/***/ "./src/images/image-product-3-thumbnail.jpg":
/*!**************************************************!*\
  !*** ./src/images/image-product-3-thumbnail.jpg ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "b7a62a37890871a8ff78.jpg";

/***/ }),

/***/ "./src/images/image-product-3.jpg":
/*!****************************************!*\
  !*** ./src/images/image-product-3.jpg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "af5c71ba9ffcc0b8b54d.jpg";

/***/ }),

/***/ "./src/images/image-product-4-thumbnail.jpg":
/*!**************************************************!*\
  !*** ./src/images/image-product-4-thumbnail.jpg ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "9f21a1e6071bec55863b.jpg";

/***/ }),

/***/ "./src/images/image-product-4.jpg":
/*!****************************************!*\
  !*** ./src/images/image-product-4.jpg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "9962862ef3eff6d65e5b.jpg";

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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
/* harmony import */ var _components_dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/dom.js */ "./src/components/dom.js");
/* harmony import */ var _css_index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/index.css */ "./src/css/index.css");
/* harmony import */ var _css_slideshow_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./css/slideshow.css */ "./src/css/slideshow.css");
/* harmony import */ var _css_headline_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./css/headline.css */ "./src/css/headline.css");
/* harmony import */ var _css_cart_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./css/cart.css */ "./src/css/cart.css");
/* harmony import */ var _images_image_avatar_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/image-avatar.png */ "./src/images/image-avatar.png");
/* harmony import */ var _images_image_product_1_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/image-product-1.jpg */ "./src/images/image-product-1.jpg");
/* harmony import */ var _images_icon_plus_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./images/icon-plus.svg */ "./src/images/icon-plus.svg");
/* harmony import */ var _images_icon_minus_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./images/icon-minus.svg */ "./src/images/icon-minus.svg");
/* harmony import */ var _components_cart_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/cart.js */ "./src/components/cart.js");












const avatar = document.querySelector('.avatar');
const imgCourosal = document.querySelector('.img-courosal');
const plusIconEl = document.querySelector('.plus-icon');
const minusIconEl = document.querySelector('.minus-icon');

avatar.src = _images_image_avatar_png__WEBPACK_IMPORTED_MODULE_5__;
imgCourosal.src = _images_image_product_1_jpg__WEBPACK_IMPORTED_MODULE_6__;
plusIconEl.src = _images_icon_plus_svg__WEBPACK_IMPORTED_MODULE_7__;
minusIconEl.src = _images_icon_minus_svg__WEBPACK_IMPORTED_MODULE_8__;

// display cart items
const displayCard = () => {    
    const innerCartBox = document.querySelector('.inner-cart-box');
    const emptyEl = document.createElement('p');
    emptyEl.className = 'empty-message'
    emptyEl.textContent = 'Your cart is empty.'
    if(_components_cart_js__WEBPACK_IMPORTED_MODULE_9__["default"].cart.length === 0){
        innerCartBox.appendChild(emptyEl)
        return emptyEl;
    }else {
        _components_cart_js__WEBPACK_IMPORTED_MODULE_9__["default"].cart.forEach((item) => {          
            (0,_components_dom_js__WEBPACK_IMPORTED_MODULE_0__.insertCartCard)(item)
        });   
    }
    updateCartCounts(_components_cart_js__WEBPACK_IMPORTED_MODULE_9__["default"].cart)  
}


const updateCartCounts = (cart) => {
    // const productQtyCount = document.querySelector('.productQtyCount');
    const cartCount = document.querySelector('.cart-count');
    let count = 0;
    cart.forEach((item) => {
        count = count + item.qty;
    });
    // productQtyCount.textContent = count;
    cartCount.textContent = count;
}

const updateProductCount = (cart, product) => {
    const productQtyCount = document.querySelector('.productQtyCount');
    let count = 0;
    cart.forEach((item) => {
        if(item.id === product.id){
            count = item.qty;
        }      
    });
    productQtyCount.textContent = 0;    
}

const resetCheckoutItems = () => {
    const innerCartBox = document.querySelector('.inner-cart-box');   
    while(innerCartBox.firstElementChild){
        innerCartBox.removeChild(innerCartBox.firstElementChild)
    }
    displayCard();
}

resetCheckoutItems();

// Menu onclick
const hamburger = document.querySelector('.hamburger');
hamburger.addEventListener('click', () => {
    const menuEl = document.querySelector('.menu-container');
    const closeEl = (0,_components_dom_js__WEBPACK_IMPORTED_MODULE_0__.insertCloseIcon)(menuEl);
    closeEl.classList.add('close');

    document.querySelector(".menu-container").style.width = "85%";
    document.querySelector(".menu-container").style.padding = "3rem 2rem";

    document.querySelector('.close').addEventListener('click', () => {
        document.querySelector(".menu-container").style.width = "";
        document.querySelector(".menu-container").style.padding = "";
        closeEl.remove();
    })
});

// Checkout cart click event
const displayCheckout = (e) => {    
    const bgCartBox = document.querySelector('.bg-cart-box');
    bgCartBox.classList.add('checkout-cart-active');   
    executeCheckoutCloseEvent()
}

const executeCheckoutCloseEvent = () => {
    const bgCartBox = document.querySelector('.bg-cart-box');
    const checkoutFn = (e) => {               
        if(e.target === bgCartBox){
            bgCartBox.classList.remove('checkout-cart-active');
            bgCartBox.removeEventListener('click', checkoutFn);
        }       
    }
    bgCartBox.addEventListener('click', checkoutFn);  
}

const checkoutCart = document.querySelector('.checkout-cart');
checkoutCart.addEventListener('click', displayCheckout);


// Add to cart event
const addToCartBtn = document.querySelector('.add-to-cart-btn');

const productCountIncrement = () => {
    const productQtyCount = document.querySelector('.productQtyCount');
    // const cartCount = document.querySelector('.cart-count');
    productQtyCount.textContent = Number(productQtyCount.textContent) + 1;
    // cartCount.textContent = Number(cartCount.textContent) + 1
} 

const productCountDecrement = () => {
    const productQtyCount = document.querySelector('.productQtyCount');
    // const cartCount = document.querySelector('.cart-count');
    if(Number(productQtyCount.textContent) > 0){
        productQtyCount.textContent = Number(productQtyCount.textContent) - 1;
        // cartCount.textContent = Number(cartCount.textContent) - 1;       
    }else {
        return;
    }
} 

// const resetUICount = () => {
//     const productQtyCount = document.querySelector('.productQtyCount');
//     const cartCount = document.querySelector('.cart-count');    
//     productQtyCount.textContent = 0;
//     cartCount.textContent = 0;   
// }

const alreadyInCart = (msg) => {
    const addToCartBtn = document.querySelector('.add-to-cart-btn');
    addToCartBtn.lastElementChild.textContent = msg;
}

addToCartBtn.addEventListener('click', () => {
    const isAdded = _components_cart_js__WEBPACK_IMPORTED_MODULE_9__["default"].addToCart(_components_dom_js__WEBPACK_IMPORTED_MODULE_0__.product);   
    if(isAdded){
        productCountIncrement();         
        resetCheckoutItems();
        alreadyInCart('Already in cart');
        attachDeleteEvent();
    }else {
        alreadyInCart('Already in cart');
    }    
})

// Increase or decrease qty event
const productQtyIncrement = (cart, product) => {
    cart.forEach((item) => {
        if(item.id === product.id){
            item.qty +=1;
        }
    });        
}

const productQtyDecrement = (cart, product) => {
    if(product.qty > 0){
        cart.forEach((item) => {
            if(item.id === product.id){
                item.qty -=1;
                console.log('increased from productQtyFn')
            }
        });           
    }
}


plusIconEl.addEventListener('click', () => {
    const isAdded = _components_cart_js__WEBPACK_IMPORTED_MODULE_9__["default"].addToCart(_components_dom_js__WEBPACK_IMPORTED_MODULE_0__.product);
    if(isAdded){
        alreadyInCart('Already in cart')
        productCountIncrement();        
        resetCheckoutItems();
        attachDeleteEvent();
        console.log(_components_cart_js__WEBPACK_IMPORTED_MODULE_9__["default"].cart)
    }else {
        alreadyInCart('Already in cart')
        productCountIncrement();
        productQtyIncrement(_components_cart_js__WEBPACK_IMPORTED_MODULE_9__["default"].cart, _components_dom_js__WEBPACK_IMPORTED_MODULE_0__.product);    
        resetCheckoutItems();
        attachDeleteEvent();
        console.log('qty updated in falses')
        console.log(_components_cart_js__WEBPACK_IMPORTED_MODULE_9__["default"].cart)
    }    
});

minusIconEl.addEventListener('click', () => {    
    productCountDecrement();
    productQtyDecrement(_components_cart_js__WEBPACK_IMPORTED_MODULE_9__["default"].cart, _components_dom_js__WEBPACK_IMPORTED_MODULE_0__.product); //update qty in cart
    resetCheckoutItems();
    console.log(_components_cart_js__WEBPACK_IMPORTED_MODULE_9__["default"].cart);

    let productQty = 0;    
    _components_cart_js__WEBPACK_IMPORTED_MODULE_9__["default"].cart.forEach((item) => {
        if(item.id === _components_dom_js__WEBPACK_IMPORTED_MODULE_0__.product.id){
            productQty = item.qty;
        }
    });
    if(productQty < 1){
        alreadyInCart('Add to cart')
    }
    if(productQty < 2){
        productQtyDecrement(_components_cart_js__WEBPACK_IMPORTED_MODULE_9__["default"].cart, _components_dom_js__WEBPACK_IMPORTED_MODULE_0__.product); 
        _components_cart_js__WEBPACK_IMPORTED_MODULE_9__["default"].removeProduct(_components_dom_js__WEBPACK_IMPORTED_MODULE_0__.product);
        // resetCheckoutItems();    
    }
})

// remove product from the cart
const attachDeleteEvent = () => {
    const deleteProductIcon = Array.from(document.querySelectorAll('.product-delete'));   
    if(deleteProductIcon.length) {       
        deleteProductIcon.forEach((item) => {
        item.addEventListener('click', () => {
                _components_cart_js__WEBPACK_IMPORTED_MODULE_9__["default"].removeProduct(_components_dom_js__WEBPACK_IMPORTED_MODULE_0__.product);
                _components_dom_js__WEBPACK_IMPORTED_MODULE_0__.product.qty = 0;                            
                resetCheckoutItems();
                alreadyInCart('Add to cart');
                attachDeleteEvent();
                const productQtyCount = document.querySelector('.productQtyCount');   
                productQtyCount.textContent = 0;    
               
            })
        })       
    }else {
        console.log('no delete btn')
    } 
}

// SLide show event



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixxRUFBYyxDQUFDLHVEQUFPO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsZ0VBQVM7QUFDN0IsS0FBSztBQUNMO0FBQ0E7QUFDQSw0QkFBNEIsZ0VBQVMsRUFBRSx1REFBTztBQUM5QztBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsZ0VBQVM7QUFDN0I7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGdFQUFTLEVBQUUsdURBQU8sR0FBRztBQUM3QztBQUNBLGdCQUFnQixnRUFBUztBQUN6QjtBQUNBO0FBQ0EsSUFBSSx3RUFBaUI7QUFDckIsdUJBQXVCLDBEQUFVO0FBQ2pDO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsZ0VBQVMsRUFBRSx1REFBTztBQUM5QyxRQUFRLHlFQUFrQixDQUFDLHVEQUFPO0FBQ2xDO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IseUVBQWtCLENBQUMsdURBQU87QUFDMUMsZ0JBQWdCLDJEQUFXO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZWNvbW1lcmNlLXByb2R1Y3QtcGFnZS1tYWluLy4vc3JjL2Nzcy9jYXJ0LmNzcyIsIndlYnBhY2s6Ly9lY29tbWVyY2UtcHJvZHVjdC1wYWdlLW1haW4vLi9zcmMvY3NzL2hlYWRsaW5lLmNzcyIsIndlYnBhY2s6Ly9lY29tbWVyY2UtcHJvZHVjdC1wYWdlLW1haW4vLi9zcmMvY3NzL2luZGV4LmNzcyIsIndlYnBhY2s6Ly9lY29tbWVyY2UtcHJvZHVjdC1wYWdlLW1haW4vLi9zcmMvY3NzL3NpZGViYXIuY3NzIiwid2VicGFjazovL2Vjb21tZXJjZS1wcm9kdWN0LXBhZ2UtbWFpbi8uL3NyYy9jc3Mvc2xpZGVzaG93LmNzcyIsIndlYnBhY2s6Ly9lY29tbWVyY2UtcHJvZHVjdC1wYWdlLW1haW4vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2Vjb21tZXJjZS1wcm9kdWN0LXBhZ2UtbWFpbi8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2Vjb21tZXJjZS1wcm9kdWN0LXBhZ2UtbWFpbi8uL3NyYy9jc3MvY2FydC5jc3M/NDA3OCIsIndlYnBhY2s6Ly9lY29tbWVyY2UtcHJvZHVjdC1wYWdlLW1haW4vLi9zcmMvY3NzL2hlYWRsaW5lLmNzcz81ZTc1Iiwid2VicGFjazovL2Vjb21tZXJjZS1wcm9kdWN0LXBhZ2UtbWFpbi8uL3NyYy9jc3MvaW5kZXguY3NzP2Y3ZWEiLCJ3ZWJwYWNrOi8vZWNvbW1lcmNlLXByb2R1Y3QtcGFnZS1tYWluLy4vc3JjL2Nzcy9zaWRlYmFyLmNzcz9lMTkzIiwid2VicGFjazovL2Vjb21tZXJjZS1wcm9kdWN0LXBhZ2UtbWFpbi8uL3NyYy9jc3Mvc2xpZGVzaG93LmNzcz8zOGFmIiwid2VicGFjazovL2Vjb21tZXJjZS1wcm9kdWN0LXBhZ2UtbWFpbi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9lY29tbWVyY2UtcHJvZHVjdC1wYWdlLW1haW4vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2Vjb21tZXJjZS1wcm9kdWN0LXBhZ2UtbWFpbi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9lY29tbWVyY2UtcHJvZHVjdC1wYWdlLW1haW4vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vZWNvbW1lcmNlLXByb2R1Y3QtcGFnZS1tYWluLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vZWNvbW1lcmNlLXByb2R1Y3QtcGFnZS1tYWluLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vZWNvbW1lcmNlLXByb2R1Y3QtcGFnZS1tYWluLy4vbm9kZV9tb2R1bGVzL3VuaXFpZC9pbmRleC5qcyIsIndlYnBhY2s6Ly9lY29tbWVyY2UtcHJvZHVjdC1wYWdlLW1haW4vLi9zcmMvY29tcG9uZW50cy9jYXJ0LmpzIiwid2VicGFjazovL2Vjb21tZXJjZS1wcm9kdWN0LXBhZ2UtbWFpbi8uL3NyYy9jb21wb25lbnRzL2RvbS5qcyIsIndlYnBhY2s6Ly9lY29tbWVyY2UtcHJvZHVjdC1wYWdlLW1haW4vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZWNvbW1lcmNlLXByb2R1Y3QtcGFnZS1tYWluL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2Vjb21tZXJjZS1wcm9kdWN0LXBhZ2UtbWFpbi93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZWNvbW1lcmNlLXByb2R1Y3QtcGFnZS1tYWluL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vZWNvbW1lcmNlLXByb2R1Y3QtcGFnZS1tYWluL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZWNvbW1lcmNlLXByb2R1Y3QtcGFnZS1tYWluL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZWNvbW1lcmNlLXByb2R1Y3QtcGFnZS1tYWluL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2Vjb21tZXJjZS1wcm9kdWN0LXBhZ2UtbWFpbi93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vZWNvbW1lcmNlLXByb2R1Y3QtcGFnZS1tYWluLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLnByaWNlLXNlY3Rpb24ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5wcmljZS1zZWN0aW9uPmRpdiB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIHdpZHRoOiA0MCU7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnByaWNlIHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJpY2Urc3BhbiB7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1vcmFuZ2UpO1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgZm9udC1zaXplOiAwLjlyZW07XFxyXFxufVxcclxcblxcclxcbi5wcmljZS1zZWN0aW9uPnNwYW4ge1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXHJcXG4gICAgZm9udC1zaXplOiAwLjlyZW07XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1kYXJrR3JheWlzaEJsdWUpO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkLWl0ZW0tc2VjdGlvbiB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgcGFkZGluZzogMCAxcmVtO1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gICAgbWFyZ2luOiAycmVtIDA7XFxyXFxufVxcclxcblxcclxcbi5idG4ge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tb3JhbmdlKTtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBoZWlnaHQ6IDIuNXJlbTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcclxcbiAgICBjb2xvcjogdmFyKC0tcGFsZU9yYW5nZSk7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1rdW1iaFNhbnMpO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FydC1idG4td3JhcHBlciB7XFxyXFxuICAgIG1hcmdpbjogMCAwIDgwcHg7XFxyXFxufVxcclxcblxcclxcbi5hZGQtdG8tY2FydC1idG4ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgICBcXHJcXG59XFxyXFxuXFxyXFxuLmFkZC10by1jYXJ0LWJ0biBzdmcge1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5hZGQtdG8tY2FydC1idG4gcCB7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4OyAgIFxcclxcbn1cXHJcXG5cXHJcXG4uYmctY2FydC1ib3gge1xcclxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGJvdHRvbTogMDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmxhY2tGYWRlZCk7XFxyXFxuICAgIHotaW5kZXg6IDI7ICAgIFxcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgLyogb3BhY2l0eTogMDtcXHJcXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjVzOyAqL1xcclxcbn1cXHJcXG5cXHJcXG4uY2FydC1ib3gge1xcclxcbiAgICAvKiBtaW4taGVpZ2h0OiA0MCU7ICovXFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgdG9wOiA1NXB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICB3aWR0aDogOTUlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XFxyXFxuICAgIHotaW5kZXg6IDM7XFxyXFxufVxcclxcblxcclxcbi5jYXJ0LWJveCBoNCB7XFxyXFxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS1ibGFja0ZhZGVkKTtcXHJcXG4gICAgcGFkZGluZzogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmlubmVyLWNhcnQtYm94LC5pbm5lci1jYXJ0LWJveCArIGRpdiB7XFxyXFxuICAgIHBhZGRpbmc6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5jYXJkLWRldGFpbCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZm9udC1zaXplOiAwLjkxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZC1kZXRhaWwgPiBkaXY6Zmlyc3QtY2hpbGQge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvZHVjdC10aHVtYm5haWwge1xcclxcbiAgICB3aWR0aDogNDBweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvZHVjdC1kZWxldGUtd3JhcHBlciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyOyAgICBcXHJcXG59XFxyXFxuXFxyXFxuLnByb2R1Y3QtdGh1bWJuYWlsICsgZGl2IHtcXHJcXG4gICBtYXJnaW4tbGVmdDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNoZWNrb3V0LWNhcnQtYWN0aXZlIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDsgIFxcclxcbn1cXHJcXG5cXHJcXG4uY2FydC1kaXYge1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcbi5jYXJ0LWNvdW50IHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW9yYW5nZSk7XFxyXFxuICBjb2xvcjogdmFyKC0td2hpdGUpO1xcclxcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxyXFxuICBmb250LXNpemU6IDEycHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICB3aWR0aDogMjBweDtcXHJcXG4gIGhlaWdodDogMTVweDtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIHRvcDogLTEwcHg7XFxyXFxuICByaWdodDogMjVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmVtcHR5LW1lc3NhZ2Uge1xcclxcbiAgd2lkdGg6IDEwMCU7IFxcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgbWFyZ2luOiAzMHB4IDA7XFxyXFxuICBmb250LXNpemU6IDEycHg7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIGNvbG9yOiB2YXIoLS1kYXJrR3JheWlzaEJsdWUpO1xcclxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL2NhcnQuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsVUFBVTtJQUNWLDhCQUE4QjtJQUM5QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLGlCQUFpQjtJQUNqQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSw2QkFBNkI7SUFDN0IsaUJBQWlCO0lBQ2pCLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCwrQkFBK0I7SUFDL0IsWUFBWTtJQUNaLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsd0JBQXdCO0lBQ3hCLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLE1BQU07SUFDTixXQUFXO0lBQ1gsU0FBUztJQUNULG1DQUFtQztJQUNuQyxVQUFVO0lBQ1YsdUJBQXVCO0lBQ3ZCLGFBQWE7SUFDYjsrQkFDMkI7QUFDL0I7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsZUFBZTtJQUNmLFNBQVM7SUFDVCxtQkFBbUI7SUFDbkIsVUFBVTtJQUNWLDhCQUE4QjtJQUM5QixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSwwQ0FBMEM7SUFDMUMsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0dBQ0csaUJBQWlCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQiwrQkFBK0I7RUFDL0IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLDZCQUE2QjtBQUMvQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIucHJpY2Utc2VjdGlvbiB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnByaWNlLXNlY3Rpb24+ZGl2IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgd2lkdGg6IDQwJTtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJpY2Uge1xcclxcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcblxcclxcbi5wcmljZStzcGFuIHtcXHJcXG4gICAgY29sb3I6IHZhcigtLW9yYW5nZSk7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICBmb250LXNpemU6IDAuOXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnByaWNlLXNlY3Rpb24+c3BhbiB7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcclxcbiAgICBmb250LXNpemU6IDAuOXJlbTtcXHJcXG4gICAgY29sb3I6IHZhcigtLWRhcmtHcmF5aXNoQmx1ZSk7XFxyXFxufVxcclxcblxcclxcbi5hZGQtaXRlbS1zZWN0aW9uIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBwYWRkaW5nOiAwIDFyZW07XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgICBtYXJnaW46IDJyZW0gMDtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0biB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1vcmFuZ2UpO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGhlaWdodDogMi41cmVtO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1wYWxlT3JhbmdlKTtcXHJcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWt1bWJoU2Fucyk7XFxyXFxufVxcclxcblxcclxcbi5jYXJ0LWJ0bi13cmFwcGVyIHtcXHJcXG4gICAgbWFyZ2luOiAwIDAgODBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZC10by1jYXJ0LWJ0biB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyOyAgIFxcclxcbn1cXHJcXG5cXHJcXG4uYWRkLXRvLWNhcnQtYnRuIHN2ZyB7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZC10by1jYXJ0LWJ0biBwIHtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7ICAgXFxyXFxufVxcclxcblxcclxcbi5iZy1jYXJ0LWJveCB7XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgYm90dG9tOiAwO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibGFja0ZhZGVkKTtcXHJcXG4gICAgei1pbmRleDogMjsgICAgXFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICAvKiBvcGFjaXR5OiAwO1xcclxcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNXM7ICovXFxyXFxufVxcclxcblxcclxcbi5jYXJ0LWJveCB7XFxyXFxuICAgIC8qIG1pbi1oZWlnaHQ6IDQwJTsgKi9cXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICB0b3A6IDU1cHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAgIHdpZHRoOiA5NSU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcXHJcXG4gICAgei1pbmRleDogMztcXHJcXG59XFxyXFxuXFxyXFxuLmNhcnQtYm94IGg0IHtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLWJsYWNrRmFkZWQpO1xcclxcbiAgICBwYWRkaW5nOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uaW5uZXItY2FydC1ib3gsLmlubmVyLWNhcnQtYm94ICsgZGl2IHtcXHJcXG4gICAgcGFkZGluZzogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQtZGV0YWlsIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBmb250LXNpemU6IDAuOTFyZW07XFxyXFxufVxcclxcblxcclxcbi5jYXJkLWRldGFpbCA+IGRpdjpmaXJzdC1jaGlsZCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5wcm9kdWN0LXRodW1ibmFpbCB7XFxyXFxuICAgIHdpZHRoOiA0MHB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5wcm9kdWN0LWRlbGV0ZS13cmFwcGVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7ICAgIFxcclxcbn1cXHJcXG5cXHJcXG4ucHJvZHVjdC10aHVtYm5haWwgKyBkaXYge1xcclxcbiAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY2hlY2tvdXQtY2FydC1hY3RpdmUge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4OyAgXFxyXFxufVxcclxcblxcclxcbi5jYXJ0LWRpdiB7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcnQtY291bnQge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tb3JhbmdlKTtcXHJcXG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxyXFxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXHJcXG4gIGZvbnQtc2l6ZTogMTJweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gIHdpZHRoOiAyMHB4O1xcclxcbiAgaGVpZ2h0OiAxNXB4O1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgdG9wOiAtMTBweDtcXHJcXG4gIHJpZ2h0OiAyNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZW1wdHktbWVzc2FnZSB7XFxyXFxuICB3aWR0aDogMTAwJTsgXFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBtYXJnaW46IDMwcHggMDtcXHJcXG4gIGZvbnQtc2l6ZTogMTJweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgY29sb3I6IHZhcigtLWRhcmtHcmF5aXNoQmx1ZSk7XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5oZWFkbGluZSwuY2FydC1zZWN0aW9uIHtcXHJcXG4gIHBhZGRpbmc6IDFyZW0gMS4ycmVtIDA7XFxyXFxufVxcclxcblxcclxcbi5oZWFkbGluZSA+IHNwYW4ge1xcclxcbiAgY29sb3I6IHZhcigtLW9yYW5nZSk7XFxyXFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcclxcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gIGxldHRlci1zcGFjaW5nOiAycHg7XFxyXFxufVxcclxcblxcclxcbi5oZWFkbGluZSA+IGgyIHtcXHJcXG4gIG1hcmdpbjogMC41cmVtIDA7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIGNvbG9yOiB2YXIoLS1ibGFjayk7XFxyXFxufVxcclxcblxcclxcbi5oZWFkbGluZSA+IHAge1xcclxcbiAgbGluZS1oZWlnaHQ6IDEuNHJlbTtcXHJcXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xcclxcbiAgY29sb3I6IHZhcigtLXZlcnlWYXJrQmx1ZSk7XFxyXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3MvaGVhZGxpbmUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsMEJBQTBCO0FBQzVCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5oZWFkbGluZSwuY2FydC1zZWN0aW9uIHtcXHJcXG4gIHBhZGRpbmc6IDFyZW0gMS4ycmVtIDA7XFxyXFxufVxcclxcblxcclxcbi5oZWFkbGluZSA+IHNwYW4ge1xcclxcbiAgY29sb3I6IHZhcigtLW9yYW5nZSk7XFxyXFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcclxcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gIGxldHRlci1zcGFjaW5nOiAycHg7XFxyXFxufVxcclxcblxcclxcbi5oZWFkbGluZSA+IGgyIHtcXHJcXG4gIG1hcmdpbjogMC41cmVtIDA7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIGNvbG9yOiB2YXIoLS1ibGFjayk7XFxyXFxufVxcclxcblxcclxcbi5oZWFkbGluZSA+IHAge1xcclxcbiAgbGluZS1oZWlnaHQ6IDEuNHJlbTtcXHJcXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xcclxcbiAgY29sb3I6IHZhcigtLXZlcnlWYXJrQmx1ZSk7XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbi8qIGNvbG9ycyAqL1xcclxcbjpyb290IHtcXHJcXG4gICAgLS1tb2JpbGU6IDM3NXB4O1xcclxcbiAgICAtLWRlc2t0b3A6IDE0NDBweDtcXHJcXG4gICAgLS1vcmFuZ2U6IGhzbCgyNiwgMTAwJSwgNTUlKTtcXHJcXG4gICAgLS1wYWxlT3JhbmdlOiBoc2woMjUsIDEwMCUsIDk0JSk7XFxyXFxuICAgIC0tdmVyeVZhcmtCbHVlOiBoc2woMjIwLCAxMyUsIDEzJSk7XFxyXFxuICAgIC0tZGFya0dyYXlpc2hCbHVlOiBoc2woMjE5LCA5JSwgNDUlKTtcXHJcXG4gICAgLS1ncmF5aXNoQmx1ZTogaHNsKDIyMCwgMTQlLCA3NSUpO1xcclxcbiAgICAtLWxpZ2h0R3JheWlzaEJsdWU6IGhzbCgyMjMsIDY0JSwgOTglKTtcXHJcXG4gICAgLS13aGl0ZTogaHNsKDAsIDAlLCAxMDAlKTtcXHJcXG4gICAgLS13aGl0ZUZhZGVkOiBoc2xhKDAsIDAlLCAxMDAlLCAwLjU5KTtcXHJcXG4gICAgLS1ibGFja0ZhZGVkOiBoc2xhKDAsIDAlLCAwJSwgMC4yNTMpO1xcclxcbiAgICAtLWJsYWNrOiBoc2woMCwgMCUsIDAlKTtcXHJcXG4gICAgLS1rdW1iaFNhbnM6ICdLdW1iaCBTYW5zJywgc2Fucy1zZXJpZjtcXHJcXG4gICAgLS1mb250U2l6ZTogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1rdW1iaFNhbnMpO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2YmFyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgICBoZWlnaHQ6IDNyZW07ICBcXHJcXG59XFxyXFxuXFxyXFxuLm5hdmJhciBkaXYge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgICBcXHJcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWt1bWJoU2Fucyk7XFxyXFxufVxcclxcblxcclxcbi5uYXZiYXIgc3ZnIHtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAxcmVtOyAgIFxcclxcbn1cXHJcXG5cXHJcXG4uY2FydC1kaXYgPiBpbWcge1xcclxcbiAgICB3aWR0aDogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmltZy1jb3Vyb3NhbCB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4uYXR0cmlidXRpb24ge1xcclxcbiAgICBmb250LXNpemU6IDExcHg7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmF0dHJpYnV0aW9uIGEge1xcclxcbiAgICBjb2xvcjogaHNsKDIyOCwgNDUlLCA0NCUpO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL2luZGV4LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0lBQ1Ysc0JBQXNCO0FBQzFCOztBQUVBLFdBQVc7QUFDWDtJQUNJLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsNEJBQTRCO0lBQzVCLGdDQUFnQztJQUNoQyxrQ0FBa0M7SUFDbEMsb0NBQW9DO0lBQ3BDLGlDQUFpQztJQUNqQyxzQ0FBc0M7SUFDdEMseUJBQXlCO0lBQ3pCLHFDQUFxQztJQUNyQyxvQ0FBb0M7SUFDcEMsdUJBQXVCO0lBQ3ZCLHFDQUFxQztJQUNyQyxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLGFBQWE7SUFDYixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixhQUFhO0FBQ2pCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbi8qIGNvbG9ycyAqL1xcclxcbjpyb290IHtcXHJcXG4gICAgLS1tb2JpbGU6IDM3NXB4O1xcclxcbiAgICAtLWRlc2t0b3A6IDE0NDBweDtcXHJcXG4gICAgLS1vcmFuZ2U6IGhzbCgyNiwgMTAwJSwgNTUlKTtcXHJcXG4gICAgLS1wYWxlT3JhbmdlOiBoc2woMjUsIDEwMCUsIDk0JSk7XFxyXFxuICAgIC0tdmVyeVZhcmtCbHVlOiBoc2woMjIwLCAxMyUsIDEzJSk7XFxyXFxuICAgIC0tZGFya0dyYXlpc2hCbHVlOiBoc2woMjE5LCA5JSwgNDUlKTtcXHJcXG4gICAgLS1ncmF5aXNoQmx1ZTogaHNsKDIyMCwgMTQlLCA3NSUpO1xcclxcbiAgICAtLWxpZ2h0R3JheWlzaEJsdWU6IGhzbCgyMjMsIDY0JSwgOTglKTtcXHJcXG4gICAgLS13aGl0ZTogaHNsKDAsIDAlLCAxMDAlKTtcXHJcXG4gICAgLS13aGl0ZUZhZGVkOiBoc2xhKDAsIDAlLCAxMDAlLCAwLjU5KTtcXHJcXG4gICAgLS1ibGFja0ZhZGVkOiBoc2xhKDAsIDAlLCAwJSwgMC4yNTMpO1xcclxcbiAgICAtLWJsYWNrOiBoc2woMCwgMCUsIDAlKTtcXHJcXG4gICAgLS1rdW1iaFNhbnM6ICdLdW1iaCBTYW5zJywgc2Fucy1zZXJpZjtcXHJcXG4gICAgLS1mb250U2l6ZTogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1rdW1iaFNhbnMpO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2YmFyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgICBoZWlnaHQ6IDNyZW07ICBcXHJcXG59XFxyXFxuXFxyXFxuLm5hdmJhciBkaXYge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgICBcXHJcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWt1bWJoU2Fucyk7XFxyXFxufVxcclxcblxcclxcbi5uYXZiYXIgc3ZnIHtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAxcmVtOyAgIFxcclxcbn1cXHJcXG5cXHJcXG4uY2FydC1kaXYgPiBpbWcge1xcclxcbiAgICB3aWR0aDogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmltZy1jb3Vyb3NhbCB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4uYXR0cmlidXRpb24ge1xcclxcbiAgICBmb250LXNpemU6IDExcHg7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmF0dHJpYnV0aW9uIGEge1xcclxcbiAgICBjb2xvcjogaHNsKDIyOCwgNDUlLCA0NCUpO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIubWVudS1jb250YWluZXIge1xcclxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICAgIC8qIHBhZGRpbmc6IDNyZW0gMnJlbTsgKi9cXHJcXG4gICAgd2lkdGg6IDA7XFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgbGVmdDogMDtcXHJcXG4gICAgYm90dG9tOiAwO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XFxyXFxuICAgIHotaW5kZXg6IDU7XFxyXFxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjsgICBcXHJcXG4gICAgdHJhbnNpdGlvbjogMC41cztcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUtY29udGFpbmVyIGxpIHtcXHJcXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUtY29udGFpbmVyIGEge1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1ibGFjayk7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudS1jb250YWluZXIgYTpob3ZlciB7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS12ZXJ5VmFya0JsdWUpO1xcclxcbiAgfVxcclxcblxcclxcbi5jbG9zZSB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOiAyMHB4O1xcclxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL3NpZGViYXIuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQix3QkFBd0I7SUFDeEIsUUFBUTtJQUNSLE1BQU07SUFDTixPQUFPO0lBQ1AsU0FBUztJQUNULDhCQUE4QjtJQUM5QixVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksMEJBQTBCO0VBQzVCOztBQUVGO0lBQ0ksa0JBQWtCO0lBQ2xCLFNBQVM7QUFDYlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIubWVudS1jb250YWluZXIge1xcclxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICAgIC8qIHBhZGRpbmc6IDNyZW0gMnJlbTsgKi9cXHJcXG4gICAgd2lkdGg6IDA7XFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgbGVmdDogMDtcXHJcXG4gICAgYm90dG9tOiAwO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XFxyXFxuICAgIHotaW5kZXg6IDU7XFxyXFxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjsgICBcXHJcXG4gICAgdHJhbnNpdGlvbjogMC41cztcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUtY29udGFpbmVyIGxpIHtcXHJcXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUtY29udGFpbmVyIGEge1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1ibGFjayk7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudS1jb250YWluZXIgYTpob3ZlciB7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS12ZXJ5VmFya0JsdWUpO1xcclxcbiAgfVxcclxcblxcclxcbi5jbG9zZSB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOiAyMHB4O1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuc2xpZGVzaG93LWNvbnRhaW5lciB7IFxcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgaGVpZ2h0OiAzNDBweDsgXFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG4ubXlzbGlkZSB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uY2lyY2xlIHtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogNDclO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xcclxcbiAgd2lkdGg6IDMwcHg7XFxyXFxuICBoZWlnaHQ6IDMwcHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgdHJhbnNpdGlvbjogMC42cyBlYXNlO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJldiwubmV4dCB7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uY2lyY2xlLXByZXYge1xcclxcbiAgbGVmdDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNpcmNsZS1uZXh0IHtcXHJcXG4gIHJpZ2h0OiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY2lyY2xlLXByZXY6aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGVGYWRlZCk7XFxyXFxufVxcclxcblxcclxcbi5jaXJjbGUtbmV4dDpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZUZhZGVkKTtcXHJcXG59XFxyXFxuXFxyXFxuLmZhZGUge1xcclxcbiAgYW5pbWF0aW9uLW5hbWU6IGZhZGU7XFxyXFxuICBhbmltYXRpb24tZHVyYXRpb246IDEuNXM7XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgZmFkZSB7XFxyXFxuICBmcm9tIHtvcGFjaXR5OiAuNH1cXHJcXG4gIHRvIHtvcGFjaXR5OiAxfVxcclxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL3NsaWRlc2hvdy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLDhCQUE4QjtFQUM5QixXQUFXO0VBQ1gsWUFBWTtFQUNaLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLG1DQUFtQztBQUNyQzs7QUFFQTtFQUNFLG1DQUFtQztBQUNyQzs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQix3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxNQUFNLFdBQVc7RUFDakIsSUFBSSxVQUFVO0FBQ2hCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5zbGlkZXNob3ctY29udGFpbmVyIHsgXFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBoZWlnaHQ6IDM0MHB4OyBcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbi5teXNsaWRlIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5jaXJjbGUge1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiA0NyU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XFxyXFxuICB3aWR0aDogMzBweDtcXHJcXG4gIGhlaWdodDogMzBweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICB0cmFuc2l0aW9uOiAwLjZzIGVhc2U7XFxyXFxufVxcclxcblxcclxcbi5wcmV2LC5uZXh0IHtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5jaXJjbGUtcHJldiB7XFxyXFxuICBsZWZ0OiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY2lyY2xlLW5leHQge1xcclxcbiAgcmlnaHQ6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5jaXJjbGUtcHJldjpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZUZhZGVkKTtcXHJcXG59XFxyXFxuXFxyXFxuLmNpcmNsZS1uZXh0OmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlRmFkZWQpO1xcclxcbn1cXHJcXG5cXHJcXG4uZmFkZSB7XFxyXFxuICBhbmltYXRpb24tbmFtZTogZmFkZTtcXHJcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMS41cztcXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBmYWRlIHtcXHJcXG4gIGZyb20ge29wYWNpdHk6IC40fVxcclxcbiAgdG8ge29wYWNpdHk6IDF9XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vY2FydC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2NhcnQuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2hlYWRsaW5lLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaGVhZGxpbmUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3NpZGViYXIuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zaWRlYmFyLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zbGlkZXNob3cuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zbGlkZXNob3cuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8qIFxuKFRoZSBNSVQgTGljZW5zZSlcbkNvcHlyaWdodCAoYykgMjAxNC0yMDIxIEhhbMOhc3ogw4Fkw6FtIDxhZGFtQGFpbWZvcm0uY29tPlxuUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4qL1xuXG4vLyAgVW5pcXVlIEhleGF0cmlkZWNpbWFsIElEIEdlbmVyYXRvclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbi8vICBEZXBlbmRlbmNpZXNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxudmFyIHBpZCA9IHR5cGVvZiBwcm9jZXNzICE9PSAndW5kZWZpbmVkJyAmJiBwcm9jZXNzLnBpZCA/IHByb2Nlc3MucGlkLnRvU3RyaW5nKDM2KSA6ICcnIDtcbnZhciBhZGRyZXNzID0gJyc7XG5pZih0eXBlb2YgX193ZWJwYWNrX3JlcXVpcmVfXyAhPT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgcmVxdWlyZSAhPT0gJ3VuZGVmaW5lZCcpe1xuICAgIHZhciBtYWMgPSAnJywgb3MgPSByZXF1aXJlKCdvcycpOyBcbiAgICBpZihvcy5uZXR3b3JrSW50ZXJmYWNlcykgdmFyIG5ldHdvcmtJbnRlcmZhY2VzID0gb3MubmV0d29ya0ludGVyZmFjZXMoKTtcbiAgICBpZihuZXR3b3JrSW50ZXJmYWNlcyl7XG4gICAgICAgIGxvb3A6XG4gICAgICAgIGZvcihsZXQgaW50ZXJmYWNlX2tleSBpbiBuZXR3b3JrSW50ZXJmYWNlcyl7XG4gICAgICAgICAgICBjb25zdCBuZXR3b3JrSW50ZXJmYWNlID0gbmV0d29ya0ludGVyZmFjZXNbaW50ZXJmYWNlX2tleV07XG4gICAgICAgICAgICBjb25zdCBsZW5ndGggPSBuZXR3b3JrSW50ZXJmYWNlLmxlbmd0aDtcbiAgICAgICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICAgICAgaWYobmV0d29ya0ludGVyZmFjZVtpXSAhPT0gdW5kZWZpbmVkICYmIG5ldHdvcmtJbnRlcmZhY2VbaV0ubWFjICYmIG5ldHdvcmtJbnRlcmZhY2VbaV0ubWFjICE9ICcwMDowMDowMDowMDowMDowMCcpe1xuICAgICAgICAgICAgICAgICAgICBtYWMgPSBuZXR3b3JrSW50ZXJmYWNlW2ldLm1hYzsgYnJlYWsgbG9vcDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYWRkcmVzcyA9IG1hYyA/IHBhcnNlSW50KG1hYy5yZXBsYWNlKC9cXDp8XFxEKy9naSwgJycpKS50b1N0cmluZygzNikgOiAnJyA7XG4gICAgfVxufSBcblxuLy8gIEV4cG9ydHNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxubW9kdWxlLmV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24ocHJlZml4LCBzdWZmaXgpeyByZXR1cm4gKHByZWZpeCA/IHByZWZpeCA6ICcnKSArIGFkZHJlc3MgKyBwaWQgKyBub3coKS50b1N0cmluZygzNikgKyAoc3VmZml4ID8gc3VmZml4IDogJycpOyB9XG5tb2R1bGUuZXhwb3J0cy5wcm9jZXNzID0gZnVuY3Rpb24ocHJlZml4LCBzdWZmaXgpeyByZXR1cm4gKHByZWZpeCA/IHByZWZpeCA6ICcnKSArIHBpZCArIG5vdygpLnRvU3RyaW5nKDM2KSArIChzdWZmaXggPyBzdWZmaXggOiAnJyk7IH1cbm1vZHVsZS5leHBvcnRzLnRpbWUgICAgPSBmdW5jdGlvbihwcmVmaXgsIHN1ZmZpeCl7IHJldHVybiAocHJlZml4ID8gcHJlZml4IDogJycpICsgbm93KCkudG9TdHJpbmcoMzYpICsgKHN1ZmZpeCA/IHN1ZmZpeCA6ICcnKTsgfVxuXG4vLyAgSGVscGVyc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5mdW5jdGlvbiBub3coKXtcbiAgICB2YXIgdGltZSA9IERhdGUubm93KCk7XG4gICAgdmFyIGxhc3QgPSBub3cubGFzdCB8fCB0aW1lO1xuICAgIHJldHVybiBub3cubGFzdCA9IHRpbWUgPiBsYXN0ID8gdGltZSA6IGxhc3QgKyAxO1xufVxuIiwiaW1wb3J0IHsgcHJvZHVjdCB9IGZyb20gXCIuL2RvbS5qc1wiO1xyXG5pbXBvcnQgdW5pcWlkIGZyb20gJ3VuaXFpZCdcclxuXHJcbmNsYXNzIENhcnQge1xyXG4gICAgc3RhdGljIGNhcnQgPSBbXHJcbiAgICAgICAgIHtcclxuICAgICAgICBpbWFnZXM6IHtcclxuICAgICAgICAgIGltYWdlMToge1xyXG4gICAgICAgICAgICBpbWFnZTogJycsXHJcbiAgICAgICAgICAgIGltYWdlVGh1bW5haWw6ICcnXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgaW1hZ2UyOiB7XHJcbiAgICAgICAgICAgIGltYWdlOiAnJyxcclxuICAgICAgICAgICAgaW1hZ2VUaHVtbmFpbDogJydcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBpbWFnZTM6IHtcclxuICAgICAgICAgICAgaW1hZ2U6ICcnLFxyXG4gICAgICAgICAgICBpbWFnZVRodW1uYWlsOiAnJ1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGltYWdlNDoge1xyXG4gICAgICAgICAgICBpbWFnZTogJycsXHJcbiAgICAgICAgICAgIGltYWdlVGh1bW5haWw6ICcnXHJcbiAgICAgICAgICB9LFxyXG4gICAgXHJcbiAgICAgICAgfSwgICBcclxuICAgICAgICBwcm9kdWN0TmFtZTogJ0NhcHJpIExpbWl0ZWQgRWRpdGlvbi4uLicsXHJcbiAgICAgICAgcXR5OiA0LFxyXG4gICAgICAgIHByaWNlOiAxMjUsXHJcbiAgICAgICAgaWQ6IHVuaXFpZCgpLFxyXG4gICAgfVxyXG5dO1xyXG5cclxuICAgIHN0YXRpYyB1cGRhdGVRdHkgPSAocHJvZHVjdCkgPT4ge1xyXG4gICAgICAgIC8vIGxldCBuZXdQcm9kdWN0ID0gIE9iamVjdC5hc3NpZ24oe30sIHByb2R1Y3QpOyAvL1VwZGF0ZSBxdHkgYnkgYWRkaW5nIG9uZVxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKG5ld1Byb2R1Y3QpXHJcbiAgICAgICAgcHJvZHVjdC5xdHkgKz0gMTtcclxuICAgICAgICByZXR1cm4gcHJvZHVjdDtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgYWRkVG9DYXJ0ID0gKHByb2R1Y3QpID0+IHtcclxuICAgICAgICBjb25zdCBpbmRleCA9IENhcnQuY2FydC5maW5kSW5kZXgoKHByb2QpID0+IHByb2R1Y3QuaWQgPT09IHByb2QuaWQpOyAgICAgXHJcbiAgICAgICAgaWYoaW5kZXggPT09IC0xKXsgICAgICAgICAgIFxyXG4gICAgICAgICAgICBDYXJ0LmNhcnQgPSBbLi4uQ2FydC5jYXJ0LCBDYXJ0LnVwZGF0ZVF0eShwcm9kdWN0KV07XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKENhcnQuY2FydCk7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7ICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9ICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgcmVtb3ZlUHJvZHVjdCA9IChwcm9kdWN0KSA9PiB7XHJcbiAgICAgICAgQ2FydC5jYXJ0ID0gQ2FydC5jYXJ0LmZpbHRlcigocHJvZCkgPT4gcHJvZC5pZCAhPT0gcHJvZHVjdC5pZCk7ICAgICAgICBcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FydDsiLCJpbXBvcnQgdW5pcWlkIGZyb20gJ3VuaXFpZCc7XHJcbmltcG9ydCAnLi4vY3NzL3NpZGViYXIuY3NzJztcclxuaW1wb3J0IGNsb3NlSWNvbiBmcm9tICcuLi9pbWFnZXMvaWNvbi1jbG9zZS5zdmcnO1xyXG5pbXBvcnQgaW1hZ2UxVGh1bW5haWwgZnJvbSAnLi4vaW1hZ2VzL2ltYWdlLXByb2R1Y3QtMS10aHVtYm5haWwuanBnJ1xyXG5pbXBvcnQgcHJvZHVjdEltYWdlMSBmcm9tICcuLi9pbWFnZXMvaW1hZ2UtcHJvZHVjdC0xLmpwZydcclxuaW1wb3J0IGltYWdlMlRodW1uYWlsIGZyb20gJy4uL2ltYWdlcy9pbWFnZS1wcm9kdWN0LTItdGh1bWJuYWlsLmpwZydcclxuaW1wb3J0IHByb2R1Y3RJbWFnZTIgZnJvbSAnLi4vaW1hZ2VzL2ltYWdlLXByb2R1Y3QtMi5qcGcnXHJcbmltcG9ydCBpbWFnZTNUaHVtbmFpbCBmcm9tICcuLi9pbWFnZXMvaW1hZ2UtcHJvZHVjdC0zLXRodW1ibmFpbC5qcGcnXHJcbmltcG9ydCBwcm9kdWN0SW1hZ2UzIGZyb20gJy4uL2ltYWdlcy9pbWFnZS1wcm9kdWN0LTMuanBnJ1xyXG5pbXBvcnQgaW1hZ2U0VGh1bW5haWwgZnJvbSAnLi4vaW1hZ2VzL2ltYWdlLXByb2R1Y3QtNC10aHVtYm5haWwuanBnJ1xyXG5pbXBvcnQgcHJvZHVjdEltYWdlNCBmcm9tICcuLi9pbWFnZXMvaW1hZ2UtcHJvZHVjdC00LmpwZydcclxuaW1wb3J0IGRlbGV0ZUljb24gZnJvbSAnLi4vaW1hZ2VzL2ljb24tZGVsZXRlLnN2ZydcclxuXHJcblxyXG5cclxuY29uc3QgaW5zZXJ0Q2xvc2VJY29uID0gKGxvY2F0aW9uKSA9PiB7XHJcbiAgICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgIGltZy5zcmMgPSBjbG9zZUljb247ICAgXHJcbiAgICBsb2NhdGlvbi5hcHBlbmRDaGlsZChpbWcpO1xyXG4gICAgcmV0dXJuIGltZztcclxufVxyXG5cclxuXHJcbmNvbnN0IHByb2R1Y3QgPSAge1xyXG4gICAgaW1hZ2VzOiB7XHJcbiAgICAgIGltYWdlMToge1xyXG4gICAgICAgIGltYWdlOiBwcm9kdWN0SW1hZ2UxLFxyXG4gICAgICAgIGltYWdlVGh1bW5haWw6IGltYWdlMVRodW1uYWlsXHJcbiAgICAgIH0sXHJcbiAgICAgIGltYWdlMjoge1xyXG4gICAgICAgIGltYWdlOiBwcm9kdWN0SW1hZ2UyLFxyXG4gICAgICAgIGltYWdlVGh1bW5haWw6IGltYWdlMlRodW1uYWlsXHJcbiAgICAgIH0sXHJcbiAgICAgIGltYWdlMzoge1xyXG4gICAgICAgIGltYWdlOiBwcm9kdWN0SW1hZ2UzLFxyXG4gICAgICAgIGltYWdlVGh1bW5haWw6IGltYWdlM1RodW1uYWlsXHJcbiAgICAgIH0sXHJcbiAgICAgIGltYWdlNDoge1xyXG4gICAgICAgIGltYWdlOiBwcm9kdWN0SW1hZ2U0LFxyXG4gICAgICAgIGltYWdlVGh1bW5haWw6IGltYWdlNFRodW1uYWlsXHJcbiAgICAgIH0sXHJcblxyXG4gICAgfSwgICBcclxuICAgIHByb2R1Y3ROYW1lOiAnQXV0dW1uIExpbWl0ZWQgRWRpdGlvbi4uLicsXHJcbiAgICBxdHk6IDAsXHJcbiAgICBwcmljZTogMTI1LFxyXG4gICAgaWQ6IHVuaXFpZCgpLFxyXG59XHJcblxyXG5jb25zdCBpbnNlcnRDYXJ0Q2FyZCA9ICh7aW1hZ2VzLCBwcm9kdWN0TmFtZSwgcXR5LCBwcmljZSwgaWR9KSA9PiB7XHJcbiAgICBjb25zdCBwcm9kdWN0VGh1bW5haWwgPSBpbWFnZXMuaW1hZ2UxLmltYWdlVGh1bW5haWw7ICBcclxuICAgIFxyXG4gICAgY29uc3QgY2FydENhcmQgPSBgXHJcbiAgICA8ZGl2IGNsYXNzPVwiY2FydC1jYXJkXCIgaWQ9XCIke2lkfVwiPlxyXG4gICAgPGRpdiBjbGFzcz1cImNhcmQtZGV0YWlsXCI+XHJcbiAgICAgPGRpdj5cclxuICAgICAgICA8aW1nIGNsYXNzPVwicHJvZHVjdC10aHVtYm5haWxcIiBzcmM9XCIke3Byb2R1Y3RUaHVtbmFpbH1cIiBhbHQ9XCJwcm9kdWN0LXRodW1ibmFpbFwiPlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicHJvZHVjdC1uYW1lXCI+JHtwcm9kdWN0TmFtZX08L3NwYW4+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInByb2R1Y3QtYW1vdW50XCI+JCR7cHJpY2V9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+eDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicHJvZHVjdC1xdHlcIj4ke3F0eX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj49PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJwcm9kdWN0LXRvdGFsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz4kJHtxdHkgKiBwcmljZX08L3N0cm9uZz5cclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPSdwcm9kdWN0LWRlbGV0ZS13cmFwcGVyJz5cclxuICAgICAgICA8aW1nIGNsYXNzPVwicHJvZHVjdC1kZWxldGVcIiBzcmM9XCIke2RlbGV0ZUljb259XCIgYWx0PVwiZGVsZXRlLWljb25cIj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PiAgICAgICAgIFxyXG4gIDwvZGl2PmBcclxuXHJcbiAgY29uc3QgaW5uZXJDYXJ0Qm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmlubmVyLWNhcnQtYm94Jyk7XHJcbiAgaW5uZXJDYXJ0Qm94Lmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgY2FydENhcmQpXHJcbn07XHJcblxyXG5cclxuXHJcblxyXG5jb25zdCBleGVjdXRlU2xpZGVTaG93ID0gKCkgPT4geyAgXHJcbiAgY29uc3Qgc2xpZGVDYXJkID0gKGltYWdlKSA9PiB7XHJcbiAgICBjb25zdCBzbGlkZXMgPSBcclxuICAgIGA8ZGl2IGNsYXNzPVwibXlzbGlkZSBmYWRlXCI+XHJcbiAgICAgIDxpbWcgY2xhc3M9XCJpbWctY291cm9zYWxcIiBzcmM9XCIke2ltYWdlfVwiIGFsdD1cImltZy1jb3Vyb3NhbFwiPlxyXG4gICAgPC9kaXY+YFxyXG4gICAgY29uc3Qgc2xpZGVzaG93Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNsaWRlc2hvdy1jb250YWluZXInKTtcclxuICAgIHNsaWRlc2hvd0NvbnRhaW5lci5pbnNlcnRBZGphY2VudEhUTUwoJ2FmdGVyYmVnaW4nLCBzbGlkZXMpXHJcbiAgfVxyXG5cclxuICBjb25zdCBzaG93U2xpZGVyID0gKG4pID0+IHtcclxuICAgIGxldCBpO1xyXG4gICAgbGV0IHNsaWRlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJteXNsaWRlXCIpO1xyXG4gICAgaWYgKG4gPiBzbGlkZXMubGVuZ3RoKSB7XHJcbiAgICAgIHNsaWRlSW5kZXggPSAxXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKG4gPCAxKSB7XHJcbiAgICAgIHNsaWRlSW5kZXggPSBzbGlkZXMubGVuZ3RoXHJcbiAgICBcclxuICAgIH1cclxuICAgIGZvciAoaSA9IDA7IGkgPCBzbGlkZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgc2xpZGVzW2ldLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgIH1cclxuXHJcbiAgICBzbGlkZXNbc2xpZGVJbmRleC0xXS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgY29uc3QgaW1hZ2VzQXJyID0gW3Byb2R1Y3RJbWFnZTEsIHByb2R1Y3RJbWFnZTIsIHByb2R1Y3RJbWFnZTMsIHByb2R1Y3RJbWFnZTQgXTtcclxuICBpbWFnZXNBcnIuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgc2xpZGVDYXJkKGl0ZW0pXHJcbiAgfSk7XHJcblxyXG4gIGxldCBzbGlkZUluZGV4ID0gMTtcclxuICBzaG93U2xpZGVyKHNsaWRlSW5kZXgpO1xyXG5cclxuICBjb25zdCBwbHVzU2xpZGVzID0gKG4pID0+IHtcclxuICAgIGNvbnNvbGUubG9nKCdjbGlja2VkJylcclxuICAgIHNob3dTbGlkZXIoc2xpZGVJbmRleCArPSBuKTtcclxuICB9XHJcbiAgXHJcbiBcclxuICAgIFxyXG4gIGNvbnN0IHByZXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2lyY2xlLXByZXYnKTtcclxuICBjb25zdCBuZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNpcmNsZS1uZXh0Jyk7XHJcblxyXG4gIHByZXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBwbHVzU2xpZGVzKC0xKVxyXG4gIH0pO1xyXG5cclxuICBuZXh0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgcGx1c1NsaWRlcygxKVxyXG4gIH0pO1xyXG5cclxuICB9XHJcblxyXG4gIGV4ZWN1dGVTbGlkZVNob3coKTtcclxuXHJcbmV4cG9ydCB7IGluc2VydENsb3NlSWNvbiwgaW5zZXJ0Q2FydENhcmQsIHByb2R1Y3QgfSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgeyBpbnNlcnRDbG9zZUljb24sIGluc2VydENhcnRDYXJkLCBwcm9kdWN0IH0gZnJvbSAnLi9jb21wb25lbnRzL2RvbS5qcyc7XHJcbmltcG9ydCAnLi9jc3MvaW5kZXguY3NzJztcclxuaW1wb3J0ICcuL2Nzcy9zbGlkZXNob3cuY3NzJztcclxuaW1wb3J0ICcuL2Nzcy9oZWFkbGluZS5jc3MnO1xyXG5pbXBvcnQgJy4vY3NzL2NhcnQuY3NzJztcclxuaW1wb3J0IGF2YXRhckltZyBmcm9tICcuL2ltYWdlcy9pbWFnZS1hdmF0YXIucG5nJztcclxuaW1wb3J0IGNvdXJvc2FsSW1nIGZyb20gJy4vaW1hZ2VzL2ltYWdlLXByb2R1Y3QtMS5qcGcnO1xyXG5pbXBvcnQgcGx1c0ljb24gZnJvbSAnLi9pbWFnZXMvaWNvbi1wbHVzLnN2Zyc7XHJcbmltcG9ydCBtaW51c0ljb24gZnJvbSAnLi9pbWFnZXMvaWNvbi1taW51cy5zdmcnO1xyXG5pbXBvcnQgQ2FydCBmcm9tICcuL2NvbXBvbmVudHMvY2FydC5qcyc7XHJcblxyXG5cclxuY29uc3QgYXZhdGFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmF2YXRhcicpO1xyXG5jb25zdCBpbWdDb3Vyb3NhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbWctY291cm9zYWwnKTtcclxuY29uc3QgcGx1c0ljb25FbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbHVzLWljb24nKTtcclxuY29uc3QgbWludXNJY29uRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWludXMtaWNvbicpO1xyXG5cclxuYXZhdGFyLnNyYyA9IGF2YXRhckltZztcclxuaW1nQ291cm9zYWwuc3JjID0gY291cm9zYWxJbWc7XHJcbnBsdXNJY29uRWwuc3JjID0gcGx1c0ljb247XHJcbm1pbnVzSWNvbkVsLnNyYyA9IG1pbnVzSWNvbjtcclxuXHJcbi8vIGRpc3BsYXkgY2FydCBpdGVtc1xyXG5jb25zdCBkaXNwbGF5Q2FyZCA9ICgpID0+IHsgICAgXHJcbiAgICBjb25zdCBpbm5lckNhcnRCb3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5uZXItY2FydC1ib3gnKTtcclxuICAgIGNvbnN0IGVtcHR5RWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBlbXB0eUVsLmNsYXNzTmFtZSA9ICdlbXB0eS1tZXNzYWdlJ1xyXG4gICAgZW1wdHlFbC50ZXh0Q29udGVudCA9ICdZb3VyIGNhcnQgaXMgZW1wdHkuJ1xyXG4gICAgaWYoQ2FydC5jYXJ0Lmxlbmd0aCA9PT0gMCl7XHJcbiAgICAgICAgaW5uZXJDYXJ0Qm94LmFwcGVuZENoaWxkKGVtcHR5RWwpXHJcbiAgICAgICAgcmV0dXJuIGVtcHR5RWw7XHJcbiAgICB9ZWxzZSB7XHJcbiAgICAgICAgQ2FydC5jYXJ0LmZvckVhY2goKGl0ZW0pID0+IHsgICAgICAgICAgXHJcbiAgICAgICAgICAgIGluc2VydENhcnRDYXJkKGl0ZW0pXHJcbiAgICAgICAgfSk7ICAgXHJcbiAgICB9XHJcbiAgICB1cGRhdGVDYXJ0Q291bnRzKENhcnQuY2FydCkgIFxyXG59XHJcblxyXG5cclxuY29uc3QgdXBkYXRlQ2FydENvdW50cyA9IChjYXJ0KSA9PiB7XHJcbiAgICAvLyBjb25zdCBwcm9kdWN0UXR5Q291bnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvZHVjdFF0eUNvdW50Jyk7XHJcbiAgICBjb25zdCBjYXJ0Q291bnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FydC1jb3VudCcpO1xyXG4gICAgbGV0IGNvdW50ID0gMDtcclxuICAgIGNhcnQuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgIGNvdW50ID0gY291bnQgKyBpdGVtLnF0eTtcclxuICAgIH0pO1xyXG4gICAgLy8gcHJvZHVjdFF0eUNvdW50LnRleHRDb250ZW50ID0gY291bnQ7XHJcbiAgICBjYXJ0Q291bnQudGV4dENvbnRlbnQgPSBjb3VudDtcclxufVxyXG5cclxuY29uc3QgdXBkYXRlUHJvZHVjdENvdW50ID0gKGNhcnQsIHByb2R1Y3QpID0+IHtcclxuICAgIGNvbnN0IHByb2R1Y3RRdHlDb3VudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9kdWN0UXR5Q291bnQnKTtcclxuICAgIGxldCBjb3VudCA9IDA7XHJcbiAgICBjYXJ0LmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICBpZihpdGVtLmlkID09PSBwcm9kdWN0LmlkKXtcclxuICAgICAgICAgICAgY291bnQgPSBpdGVtLnF0eTtcclxuICAgICAgICB9ICAgICAgXHJcbiAgICB9KTtcclxuICAgIHByb2R1Y3RRdHlDb3VudC50ZXh0Q29udGVudCA9IDA7ICAgIFxyXG59XHJcblxyXG5jb25zdCByZXNldENoZWNrb3V0SXRlbXMgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBpbm5lckNhcnRCb3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5uZXItY2FydC1ib3gnKTsgICBcclxuICAgIHdoaWxlKGlubmVyQ2FydEJveC5maXJzdEVsZW1lbnRDaGlsZCl7XHJcbiAgICAgICAgaW5uZXJDYXJ0Qm94LnJlbW92ZUNoaWxkKGlubmVyQ2FydEJveC5maXJzdEVsZW1lbnRDaGlsZClcclxuICAgIH1cclxuICAgIGRpc3BsYXlDYXJkKCk7XHJcbn1cclxuXHJcbnJlc2V0Q2hlY2tvdXRJdGVtcygpO1xyXG5cclxuLy8gTWVudSBvbmNsaWNrXHJcbmNvbnN0IGhhbWJ1cmdlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oYW1idXJnZXInKTtcclxuaGFtYnVyZ2VyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgY29uc3QgbWVudUVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnUtY29udGFpbmVyJyk7XHJcbiAgICBjb25zdCBjbG9zZUVsID0gaW5zZXJ0Q2xvc2VJY29uKG1lbnVFbCk7XHJcbiAgICBjbG9zZUVsLmNsYXNzTGlzdC5hZGQoJ2Nsb3NlJyk7XHJcblxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51LWNvbnRhaW5lclwiKS5zdHlsZS53aWR0aCA9IFwiODUlXCI7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnUtY29udGFpbmVyXCIpLnN0eWxlLnBhZGRpbmcgPSBcIjNyZW0gMnJlbVwiO1xyXG5cclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jbG9zZScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudS1jb250YWluZXJcIikuc3R5bGUud2lkdGggPSBcIlwiO1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudS1jb250YWluZXJcIikuc3R5bGUucGFkZGluZyA9IFwiXCI7XHJcbiAgICAgICAgY2xvc2VFbC5yZW1vdmUoKTtcclxuICAgIH0pXHJcbn0pO1xyXG5cclxuLy8gQ2hlY2tvdXQgY2FydCBjbGljayBldmVudFxyXG5jb25zdCBkaXNwbGF5Q2hlY2tvdXQgPSAoZSkgPT4geyAgICBcclxuICAgIGNvbnN0IGJnQ2FydEJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5iZy1jYXJ0LWJveCcpO1xyXG4gICAgYmdDYXJ0Qm94LmNsYXNzTGlzdC5hZGQoJ2NoZWNrb3V0LWNhcnQtYWN0aXZlJyk7ICAgXHJcbiAgICBleGVjdXRlQ2hlY2tvdXRDbG9zZUV2ZW50KClcclxufVxyXG5cclxuY29uc3QgZXhlY3V0ZUNoZWNrb3V0Q2xvc2VFdmVudCA9ICgpID0+IHtcclxuICAgIGNvbnN0IGJnQ2FydEJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5iZy1jYXJ0LWJveCcpO1xyXG4gICAgY29uc3QgY2hlY2tvdXRGbiA9IChlKSA9PiB7ICAgICAgICAgICAgICAgXHJcbiAgICAgICAgaWYoZS50YXJnZXQgPT09IGJnQ2FydEJveCl7XHJcbiAgICAgICAgICAgIGJnQ2FydEJveC5jbGFzc0xpc3QucmVtb3ZlKCdjaGVja291dC1jYXJ0LWFjdGl2ZScpO1xyXG4gICAgICAgICAgICBiZ0NhcnRCb3gucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjaGVja291dEZuKTtcclxuICAgICAgICB9ICAgICAgIFxyXG4gICAgfVxyXG4gICAgYmdDYXJ0Qm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2hlY2tvdXRGbik7ICBcclxufVxyXG5cclxuY29uc3QgY2hlY2tvdXRDYXJ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNoZWNrb3V0LWNhcnQnKTtcclxuY2hlY2tvdXRDYXJ0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGlzcGxheUNoZWNrb3V0KTtcclxuXHJcblxyXG4vLyBBZGQgdG8gY2FydCBldmVudFxyXG5jb25zdCBhZGRUb0NhcnRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXRvLWNhcnQtYnRuJyk7XHJcblxyXG5jb25zdCBwcm9kdWN0Q291bnRJbmNyZW1lbnQgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBwcm9kdWN0UXR5Q291bnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvZHVjdFF0eUNvdW50Jyk7XHJcbiAgICAvLyBjb25zdCBjYXJ0Q291bnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FydC1jb3VudCcpO1xyXG4gICAgcHJvZHVjdFF0eUNvdW50LnRleHRDb250ZW50ID0gTnVtYmVyKHByb2R1Y3RRdHlDb3VudC50ZXh0Q29udGVudCkgKyAxO1xyXG4gICAgLy8gY2FydENvdW50LnRleHRDb250ZW50ID0gTnVtYmVyKGNhcnRDb3VudC50ZXh0Q29udGVudCkgKyAxXHJcbn0gXHJcblxyXG5jb25zdCBwcm9kdWN0Q291bnREZWNyZW1lbnQgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBwcm9kdWN0UXR5Q291bnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvZHVjdFF0eUNvdW50Jyk7XHJcbiAgICAvLyBjb25zdCBjYXJ0Q291bnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FydC1jb3VudCcpO1xyXG4gICAgaWYoTnVtYmVyKHByb2R1Y3RRdHlDb3VudC50ZXh0Q29udGVudCkgPiAwKXtcclxuICAgICAgICBwcm9kdWN0UXR5Q291bnQudGV4dENvbnRlbnQgPSBOdW1iZXIocHJvZHVjdFF0eUNvdW50LnRleHRDb250ZW50KSAtIDE7XHJcbiAgICAgICAgLy8gY2FydENvdW50LnRleHRDb250ZW50ID0gTnVtYmVyKGNhcnRDb3VudC50ZXh0Q29udGVudCkgLSAxOyAgICAgICBcclxuICAgIH1lbHNlIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbn0gXHJcblxyXG4vLyBjb25zdCByZXNldFVJQ291bnQgPSAoKSA9PiB7XHJcbi8vICAgICBjb25zdCBwcm9kdWN0UXR5Q291bnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvZHVjdFF0eUNvdW50Jyk7XHJcbi8vICAgICBjb25zdCBjYXJ0Q291bnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FydC1jb3VudCcpOyAgICBcclxuLy8gICAgIHByb2R1Y3RRdHlDb3VudC50ZXh0Q29udGVudCA9IDA7XHJcbi8vICAgICBjYXJ0Q291bnQudGV4dENvbnRlbnQgPSAwOyAgIFxyXG4vLyB9XHJcblxyXG5jb25zdCBhbHJlYWR5SW5DYXJ0ID0gKG1zZykgPT4ge1xyXG4gICAgY29uc3QgYWRkVG9DYXJ0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC10by1jYXJ0LWJ0bicpO1xyXG4gICAgYWRkVG9DYXJ0QnRuLmxhc3RFbGVtZW50Q2hpbGQudGV4dENvbnRlbnQgPSBtc2c7XHJcbn1cclxuXHJcbmFkZFRvQ2FydEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIGNvbnN0IGlzQWRkZWQgPSBDYXJ0LmFkZFRvQ2FydChwcm9kdWN0KTsgICBcclxuICAgIGlmKGlzQWRkZWQpe1xyXG4gICAgICAgIHByb2R1Y3RDb3VudEluY3JlbWVudCgpOyAgICAgICAgIFxyXG4gICAgICAgIHJlc2V0Q2hlY2tvdXRJdGVtcygpO1xyXG4gICAgICAgIGFscmVhZHlJbkNhcnQoJ0FscmVhZHkgaW4gY2FydCcpO1xyXG4gICAgICAgIGF0dGFjaERlbGV0ZUV2ZW50KCk7XHJcbiAgICB9ZWxzZSB7XHJcbiAgICAgICAgYWxyZWFkeUluQ2FydCgnQWxyZWFkeSBpbiBjYXJ0Jyk7XHJcbiAgICB9ICAgIFxyXG59KVxyXG5cclxuLy8gSW5jcmVhc2Ugb3IgZGVjcmVhc2UgcXR5IGV2ZW50XHJcbmNvbnN0IHByb2R1Y3RRdHlJbmNyZW1lbnQgPSAoY2FydCwgcHJvZHVjdCkgPT4ge1xyXG4gICAgY2FydC5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgaWYoaXRlbS5pZCA9PT0gcHJvZHVjdC5pZCl7XHJcbiAgICAgICAgICAgIGl0ZW0ucXR5ICs9MTtcclxuICAgICAgICB9XHJcbiAgICB9KTsgICAgICAgIFxyXG59XHJcblxyXG5jb25zdCBwcm9kdWN0UXR5RGVjcmVtZW50ID0gKGNhcnQsIHByb2R1Y3QpID0+IHtcclxuICAgIGlmKHByb2R1Y3QucXR5ID4gMCl7XHJcbiAgICAgICAgY2FydC5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIGlmKGl0ZW0uaWQgPT09IHByb2R1Y3QuaWQpe1xyXG4gICAgICAgICAgICAgICAgaXRlbS5xdHkgLT0xO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2luY3JlYXNlZCBmcm9tIHByb2R1Y3RRdHlGbicpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTsgICAgICAgICAgIFxyXG4gICAgfVxyXG59XHJcblxyXG5cclxucGx1c0ljb25FbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIGNvbnN0IGlzQWRkZWQgPSBDYXJ0LmFkZFRvQ2FydChwcm9kdWN0KTtcclxuICAgIGlmKGlzQWRkZWQpe1xyXG4gICAgICAgIGFscmVhZHlJbkNhcnQoJ0FscmVhZHkgaW4gY2FydCcpXHJcbiAgICAgICAgcHJvZHVjdENvdW50SW5jcmVtZW50KCk7ICAgICAgICBcclxuICAgICAgICByZXNldENoZWNrb3V0SXRlbXMoKTtcclxuICAgICAgICBhdHRhY2hEZWxldGVFdmVudCgpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKENhcnQuY2FydClcclxuICAgIH1lbHNlIHtcclxuICAgICAgICBhbHJlYWR5SW5DYXJ0KCdBbHJlYWR5IGluIGNhcnQnKVxyXG4gICAgICAgIHByb2R1Y3RDb3VudEluY3JlbWVudCgpO1xyXG4gICAgICAgIHByb2R1Y3RRdHlJbmNyZW1lbnQoQ2FydC5jYXJ0LCBwcm9kdWN0KTsgICAgXHJcbiAgICAgICAgcmVzZXRDaGVja291dEl0ZW1zKCk7XHJcbiAgICAgICAgYXR0YWNoRGVsZXRlRXZlbnQoKTtcclxuICAgICAgICBjb25zb2xlLmxvZygncXR5IHVwZGF0ZWQgaW4gZmFsc2VzJylcclxuICAgICAgICBjb25zb2xlLmxvZyhDYXJ0LmNhcnQpXHJcbiAgICB9ICAgIFxyXG59KTtcclxuXHJcbm1pbnVzSWNvbkVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4geyAgICBcclxuICAgIHByb2R1Y3RDb3VudERlY3JlbWVudCgpO1xyXG4gICAgcHJvZHVjdFF0eURlY3JlbWVudChDYXJ0LmNhcnQsIHByb2R1Y3QpOyAvL3VwZGF0ZSBxdHkgaW4gY2FydFxyXG4gICAgcmVzZXRDaGVja291dEl0ZW1zKCk7XHJcbiAgICBjb25zb2xlLmxvZyhDYXJ0LmNhcnQpO1xyXG5cclxuICAgIGxldCBwcm9kdWN0UXR5ID0gMDsgICAgXHJcbiAgICBDYXJ0LmNhcnQuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgIGlmKGl0ZW0uaWQgPT09IHByb2R1Y3QuaWQpe1xyXG4gICAgICAgICAgICBwcm9kdWN0UXR5ID0gaXRlbS5xdHk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBpZihwcm9kdWN0UXR5IDwgMSl7XHJcbiAgICAgICAgYWxyZWFkeUluQ2FydCgnQWRkIHRvIGNhcnQnKVxyXG4gICAgfVxyXG4gICAgaWYocHJvZHVjdFF0eSA8IDIpe1xyXG4gICAgICAgIHByb2R1Y3RRdHlEZWNyZW1lbnQoQ2FydC5jYXJ0LCBwcm9kdWN0KTsgXHJcbiAgICAgICAgQ2FydC5yZW1vdmVQcm9kdWN0KHByb2R1Y3QpO1xyXG4gICAgICAgIC8vIHJlc2V0Q2hlY2tvdXRJdGVtcygpOyAgICBcclxuICAgIH1cclxufSlcclxuXHJcbi8vIHJlbW92ZSBwcm9kdWN0IGZyb20gdGhlIGNhcnRcclxuY29uc3QgYXR0YWNoRGVsZXRlRXZlbnQgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBkZWxldGVQcm9kdWN0SWNvbiA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2R1Y3QtZGVsZXRlJykpOyAgIFxyXG4gICAgaWYoZGVsZXRlUHJvZHVjdEljb24ubGVuZ3RoKSB7ICAgICAgIFxyXG4gICAgICAgIGRlbGV0ZVByb2R1Y3RJY29uLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgQ2FydC5yZW1vdmVQcm9kdWN0KHByb2R1Y3QpO1xyXG4gICAgICAgICAgICAgICAgcHJvZHVjdC5xdHkgPSAwOyAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHJlc2V0Q2hlY2tvdXRJdGVtcygpO1xyXG4gICAgICAgICAgICAgICAgYWxyZWFkeUluQ2FydCgnQWRkIHRvIGNhcnQnKTtcclxuICAgICAgICAgICAgICAgIGF0dGFjaERlbGV0ZUV2ZW50KCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwcm9kdWN0UXR5Q291bnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvZHVjdFF0eUNvdW50Jyk7ICAgXHJcbiAgICAgICAgICAgICAgICBwcm9kdWN0UXR5Q291bnQudGV4dENvbnRlbnQgPSAwOyAgICBcclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSkgICAgICAgXHJcbiAgICB9ZWxzZSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ25vIGRlbGV0ZSBidG4nKVxyXG4gICAgfSBcclxufVxyXG5cclxuLy8gU0xpZGUgc2hvdyBldmVudFxyXG5cclxuXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==