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
___CSS_LOADER_EXPORT___.push([module.id, ".price-section {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.price-section > div {\r\n  display: flex;\r\n  width: 40%;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.price {\r\n  font-size: 1.5rem;\r\n  font-weight: bold;\r\n}\r\n\r\n.price + span {\r\n  color: var(--orange);\r\n  font-weight: bold;\r\n  font-size: 0.9rem;\r\n}\r\n\r\n.price-section > span {\r\n  text-decoration: line-through;\r\n  font-size: 0.9rem;\r\n  color: var(--darkGrayishBlue);\r\n}\r\n\r\n.add-item-section {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  padding: 0 1rem;\r\n  font-weight: bold;\r\n  list-style: none;\r\n  margin: 2rem 0;\r\n}\r\n\r\n.btn {\r\n  width: 100%;\r\n  background-color: var(--orange);\r\n  border: none;\r\n  height: 2.5rem;\r\n  border-radius: 8px;\r\n  color: var(--paleOrange);\r\n  font-family: var(--kumbhSans);\r\n}\r\n\r\n.cart-btn-wrapper {\r\n  margin: 0 0 80px;\r\n}\r\n\r\n.add-to-cart-btn {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n.add-to-cart-btn svg {\r\n  margin-right: 10px;\r\n}\r\n\r\n.add-to-cart-btn p {\r\n  margin-left: 10px;\r\n}\r\n\r\n.bg-cart-box {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  bottom: 0;\r\n  background-color: var(--blackFaded);\r\n  z-index: 5;\r\n  justify-content: center;\r\n  display: flex;\r\n  visibility: hidden;\r\n  opacity: 0;\r\n  transition: visibility 0s, opacity 0.5s;\r\n}\r\n\r\n.cart-box {\r\n  position: fixed;\r\n  top: 55px;\r\n  border-radius: 10px;\r\n  width: 95%;\r\n  background-color: var(--white);\r\n}\r\n\r\n.cart-box h4 {\r\n  border-bottom: 2px solid var(--blackFaded);\r\n  padding: 1rem;\r\n}\r\n\r\n.inner-cart-box,\r\n.inner-cart-box + div {\r\n  padding: 1rem;\r\n}\r\n\r\n.card-detail {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  font-size: 0.91rem;\r\n}\r\n\r\n.product-thumbnail + div {\r\n  margin-left: 10px;\r\n}\r\n\r\n.card-detail > div:first-child {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.product-thumbnail {\r\n  width: 40px;\r\n  border-radius: 5px;\r\n}\r\n\r\n.product-delete-wrapper {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.checkout-cart-active {\r\n  visibility: visible;\r\n  opacity: 1;\r\n}\r\n\r\n.cart-div {\r\n  position: relative;\r\n}\r\n\r\n.cart-count {\r\n  position: absolute;\r\n  background-color: var(--orange);\r\n  color: var(--white);\r\n  font-family: sans-serif;\r\n  font-size: 12px;\r\n  border-radius: 50%;\r\n  width: 20px;\r\n  height: 15px;\r\n  text-align: center;\r\n  top: -10px;\r\n  right: 25px;\r\n}\r\n\r\n.empty-message {\r\n  width: 100%;\r\n  text-align: center;\r\n  margin: 30px 0;\r\n  font-size: 12px;\r\n  font-weight: bold;\r\n  color: var(--darkGrayishBlue);\r\n}\r\n\r\n@media screen and (min-width: 375px) {\r\n  .price-section {\r\n    display: block;\r\n    grid-column: span 2;\r\n  }\r\n\r\n  .cart-section {\r\n    display: grid;\r\n    grid-template-columns: 1fr 2fr;\r\n    height: 100px;\r\n  }\r\n\r\n  .add-item-section {\r\n    display: flex;\r\n    align-items: center;\r\n  }\r\n\r\n  .cart-btn-wrapper {\r\n    margin: 30px 0;\r\n  }\r\n\r\n  .minus-icon {\r\n    padding-bottom: 4px;\r\n  }\r\n\r\n  .cart-count {\r\n    position: absolute;\r\n    background-color: var(--orange);\r\n    color: var(--white);\r\n    font-family: sans-serif;\r\n    font-size: 12px;\r\n    border-radius: 50%;\r\n    width: 20px;\r\n    height: 15px;\r\n    text-align: center;\r\n    top: 0;\r\n    right: 45px;\r\n  }\r\n\r\n  .cart-box {\r\n    top: 5.625rem;\r\n    width: 22%;\r\n    right: 5.625rem;\r\n    box-shadow: 0 15px 25px -5px rgb(155, 155, 155);\r\n  }\r\n\r\n  .bg-cart-box {\r\n    justify-content: flex-end;\r\n    background-color: rgba(243, 247, 248, 0);\r\n  }\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/css/cart.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,UAAU;EACV,8BAA8B;EAC9B,mBAAmB;AACrB;;AAEA;EACE,iBAAiB;EACjB,iBAAiB;AACnB;;AAEA;EACE,oBAAoB;EACpB,iBAAiB;EACjB,iBAAiB;AACnB;;AAEA;EACE,6BAA6B;EAC7B,iBAAiB;EACjB,6BAA6B;AAC/B;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,eAAe;EACf,iBAAiB;EACjB,gBAAgB;EAChB,cAAc;AAChB;;AAEA;EACE,WAAW;EACX,+BAA+B;EAC/B,YAAY;EACZ,cAAc;EACd,kBAAkB;EAClB,wBAAwB;EACxB,6BAA6B;AAC/B;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,eAAe;EACf,MAAM;EACN,OAAO;EACP,WAAW;EACX,SAAS;EACT,mCAAmC;EACnC,UAAU;EACV,uBAAuB;EACvB,aAAa;EACb,kBAAkB;EAClB,UAAU;EACV,uCAAuC;AACzC;;AAEA;EACE,eAAe;EACf,SAAS;EACT,mBAAmB;EACnB,UAAU;EACV,8BAA8B;AAChC;;AAEA;EACE,0CAA0C;EAC1C,aAAa;AACf;;AAEA;;EAEE,aAAa;AACf;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,WAAW;EACX,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;EACnB,UAAU;AACZ;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,+BAA+B;EAC/B,mBAAmB;EACnB,uBAAuB;EACvB,eAAe;EACf,kBAAkB;EAClB,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,UAAU;EACV,WAAW;AACb;;AAEA;EACE,WAAW;EACX,kBAAkB;EAClB,cAAc;EACd,eAAe;EACf,iBAAiB;EACjB,6BAA6B;AAC/B;;AAEA;EACE;IACE,cAAc;IACd,mBAAmB;EACrB;;EAEA;IACE,aAAa;IACb,8BAA8B;IAC9B,aAAa;EACf;;EAEA;IACE,aAAa;IACb,mBAAmB;EACrB;;EAEA;IACE,cAAc;EAChB;;EAEA;IACE,mBAAmB;EACrB;;EAEA;IACE,kBAAkB;IAClB,+BAA+B;IAC/B,mBAAmB;IACnB,uBAAuB;IACvB,eAAe;IACf,kBAAkB;IAClB,WAAW;IACX,YAAY;IACZ,kBAAkB;IAClB,MAAM;IACN,WAAW;EACb;;EAEA;IACE,aAAa;IACb,UAAU;IACV,eAAe;IACf,+CAA+C;EACjD;;EAEA;IACE,yBAAyB;IACzB,wCAAwC;EAC1C;AACF","sourcesContent":[".price-section {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.price-section > div {\r\n  display: flex;\r\n  width: 40%;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.price {\r\n  font-size: 1.5rem;\r\n  font-weight: bold;\r\n}\r\n\r\n.price + span {\r\n  color: var(--orange);\r\n  font-weight: bold;\r\n  font-size: 0.9rem;\r\n}\r\n\r\n.price-section > span {\r\n  text-decoration: line-through;\r\n  font-size: 0.9rem;\r\n  color: var(--darkGrayishBlue);\r\n}\r\n\r\n.add-item-section {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  padding: 0 1rem;\r\n  font-weight: bold;\r\n  list-style: none;\r\n  margin: 2rem 0;\r\n}\r\n\r\n.btn {\r\n  width: 100%;\r\n  background-color: var(--orange);\r\n  border: none;\r\n  height: 2.5rem;\r\n  border-radius: 8px;\r\n  color: var(--paleOrange);\r\n  font-family: var(--kumbhSans);\r\n}\r\n\r\n.cart-btn-wrapper {\r\n  margin: 0 0 80px;\r\n}\r\n\r\n.add-to-cart-btn {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n.add-to-cart-btn svg {\r\n  margin-right: 10px;\r\n}\r\n\r\n.add-to-cart-btn p {\r\n  margin-left: 10px;\r\n}\r\n\r\n.bg-cart-box {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  bottom: 0;\r\n  background-color: var(--blackFaded);\r\n  z-index: 5;\r\n  justify-content: center;\r\n  display: flex;\r\n  visibility: hidden;\r\n  opacity: 0;\r\n  transition: visibility 0s, opacity 0.5s;\r\n}\r\n\r\n.cart-box {\r\n  position: fixed;\r\n  top: 55px;\r\n  border-radius: 10px;\r\n  width: 95%;\r\n  background-color: var(--white);\r\n}\r\n\r\n.cart-box h4 {\r\n  border-bottom: 2px solid var(--blackFaded);\r\n  padding: 1rem;\r\n}\r\n\r\n.inner-cart-box,\r\n.inner-cart-box + div {\r\n  padding: 1rem;\r\n}\r\n\r\n.card-detail {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  font-size: 0.91rem;\r\n}\r\n\r\n.product-thumbnail + div {\r\n  margin-left: 10px;\r\n}\r\n\r\n.card-detail > div:first-child {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.product-thumbnail {\r\n  width: 40px;\r\n  border-radius: 5px;\r\n}\r\n\r\n.product-delete-wrapper {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.checkout-cart-active {\r\n  visibility: visible;\r\n  opacity: 1;\r\n}\r\n\r\n.cart-div {\r\n  position: relative;\r\n}\r\n\r\n.cart-count {\r\n  position: absolute;\r\n  background-color: var(--orange);\r\n  color: var(--white);\r\n  font-family: sans-serif;\r\n  font-size: 12px;\r\n  border-radius: 50%;\r\n  width: 20px;\r\n  height: 15px;\r\n  text-align: center;\r\n  top: -10px;\r\n  right: 25px;\r\n}\r\n\r\n.empty-message {\r\n  width: 100%;\r\n  text-align: center;\r\n  margin: 30px 0;\r\n  font-size: 12px;\r\n  font-weight: bold;\r\n  color: var(--darkGrayishBlue);\r\n}\r\n\r\n@media screen and (min-width: 375px) {\r\n  .price-section {\r\n    display: block;\r\n    grid-column: span 2;\r\n  }\r\n\r\n  .cart-section {\r\n    display: grid;\r\n    grid-template-columns: 1fr 2fr;\r\n    height: 100px;\r\n  }\r\n\r\n  .add-item-section {\r\n    display: flex;\r\n    align-items: center;\r\n  }\r\n\r\n  .cart-btn-wrapper {\r\n    margin: 30px 0;\r\n  }\r\n\r\n  .minus-icon {\r\n    padding-bottom: 4px;\r\n  }\r\n\r\n  .cart-count {\r\n    position: absolute;\r\n    background-color: var(--orange);\r\n    color: var(--white);\r\n    font-family: sans-serif;\r\n    font-size: 12px;\r\n    border-radius: 50%;\r\n    width: 20px;\r\n    height: 15px;\r\n    text-align: center;\r\n    top: 0;\r\n    right: 45px;\r\n  }\r\n\r\n  .cart-box {\r\n    top: 5.625rem;\r\n    width: 22%;\r\n    right: 5.625rem;\r\n    box-shadow: 0 15px 25px -5px rgb(155, 155, 155);\r\n  }\r\n\r\n  .bg-cart-box {\r\n    justify-content: flex-end;\r\n    background-color: rgba(243, 247, 248, 0);\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.id, ".headline,\r\n.cart-section {\r\n  padding: 2.5rem 1.2rem 0;\r\n}\r\n\r\n.headline > h1 {\r\n  color: var(--orange);\r\n  text-transform: uppercase;\r\n  font-size: 0.75rem;\r\n  font-weight: 700;\r\n  font-style: normal;\r\n  letter-spacing: 2px;\r\n}\r\n\r\n.headline > h2 {\r\n  margin: 0.5rem 0;\r\n  font-weight: bold;\r\n  color: var(--black);\r\n}\r\n\r\n.headline > p {\r\n  line-height: 1.4rem;\r\n  font-size: 0.9rem;\r\n  color: var(--veryVarkBlue);\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/css/headline.css"],"names":[],"mappings":"AAAA;;EAEE,wBAAwB;AAC1B;;AAEA;EACE,oBAAoB;EACpB,yBAAyB;EACzB,kBAAkB;EAClB,gBAAgB;EAChB,kBAAkB;EAClB,mBAAmB;AACrB;;AAEA;EACE,gBAAgB;EAChB,iBAAiB;EACjB,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;EACnB,iBAAiB;EACjB,0BAA0B;AAC5B","sourcesContent":[".headline,\r\n.cart-section {\r\n  padding: 2.5rem 1.2rem 0;\r\n}\r\n\r\n.headline > h1 {\r\n  color: var(--orange);\r\n  text-transform: uppercase;\r\n  font-size: 0.75rem;\r\n  font-weight: 700;\r\n  font-style: normal;\r\n  letter-spacing: 2px;\r\n}\r\n\r\n.headline > h2 {\r\n  margin: 0.5rem 0;\r\n  font-weight: bold;\r\n  color: var(--black);\r\n}\r\n\r\n.headline > p {\r\n  line-height: 1.4rem;\r\n  font-size: 0.9rem;\r\n  color: var(--veryVarkBlue);\r\n}\r\n"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\n/* colors */\r\n:root {\r\n  --mobile: 375px;\r\n  --desktop: 1440px;\r\n  --orange: hsl(26, 100%, 55%);\r\n  --paleOrange: hsl(25, 100%, 94%);\r\n  --veryVarkBlue: hsl(220, 13%, 13%);\r\n  --darkGrayishBlue: hsl(219, 9%, 45%);\r\n  --grayishBlue: hsl(220, 14%, 75%);\r\n  --lightGrayishBlue: hsl(223, 64%, 98%);\r\n  --white: hsl(0, 0%, 100%);\r\n  --whiteFaded: hsla(0, 0%, 100%, 0.59);\r\n  --blackFaded: hsla(0, 0%, 0%, 0.253);\r\n  --black: hsl(0, 0%, 0%);\r\n  --kumbhSans: 'Kumbh Sans', sans-serif;\r\n  --fontSize: 1rem;\r\n}\r\n\r\nbody {\r\n  font-family: var(--kumbhSans);\r\n}\r\n\r\n.navbar {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  padding: 1rem;\r\n  height: 3.4rem;\r\n}\r\n\r\n.navbar div {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  font-family: var(--kumbhSans);\r\n}\r\n\r\n.navbar svg {\r\n  margin-right: 1rem;\r\n}\r\n\r\n.cart-div > img {\r\n  width: 20px;\r\n}\r\n\r\n.img-courosal {\r\n  width: 100%;\r\n}\r\n\r\n.attribution {\r\n  font-size: 11px;\r\n  text-align: center;\r\n  display: none;\r\n}\r\n\r\n.attribution a {\r\n  color: hsl(228, 45%, 44%);\r\n}\r\n\r\n@media screen and (min-width: 375px) {\r\n  body {\r\n    padding: 0 13%;\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr;\r\n\r\n    /* grid-template-rows: 9rem repeat(2, 1fr); */\r\n    column-gap: 1rem;\r\n    min-height: 100vh;\r\n  }\r\n\r\n  .navbar {\r\n    min-height: 6rem !important;\r\n    grid-column: span 2;\r\n    padding: 0;\r\n    border-bottom: 1px solid var(--grayishBlue);\r\n    margin-bottom: 5rem;\r\n  }\r\n\r\n  .headline {\r\n    margin-top: 1rem;\r\n  }\r\n\r\n  .headline > p {\r\n    margin-top: 1.5rem;\r\n  }\r\n\r\n  .cart-div > img {\r\n    width: 40px;\r\n  }\r\n\r\n  .logo {\r\n    width: 128px;\r\n  }\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/css/index.css"],"names":[],"mappings":"AAAA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;;AAEA,WAAW;AACX;EACE,eAAe;EACf,iBAAiB;EACjB,4BAA4B;EAC5B,gCAAgC;EAChC,kCAAkC;EAClC,oCAAoC;EACpC,iCAAiC;EACjC,sCAAsC;EACtC,yBAAyB;EACzB,qCAAqC;EACrC,oCAAoC;EACpC,uBAAuB;EACvB,qCAAqC;EACrC,gBAAgB;AAClB;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,aAAa;EACb,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,6BAA6B;AAC/B;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,eAAe;EACf,kBAAkB;EAClB,aAAa;AACf;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE;IACE,cAAc;IACd,aAAa;IACb,8BAA8B;;IAE9B,6CAA6C;IAC7C,gBAAgB;IAChB,iBAAiB;EACnB;;EAEA;IACE,2BAA2B;IAC3B,mBAAmB;IACnB,UAAU;IACV,2CAA2C;IAC3C,mBAAmB;EACrB;;EAEA;IACE,gBAAgB;EAClB;;EAEA;IACE,kBAAkB;EACpB;;EAEA;IACE,WAAW;EACb;;EAEA;IACE,YAAY;EACd;AACF","sourcesContent":["* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\n/* colors */\r\n:root {\r\n  --mobile: 375px;\r\n  --desktop: 1440px;\r\n  --orange: hsl(26, 100%, 55%);\r\n  --paleOrange: hsl(25, 100%, 94%);\r\n  --veryVarkBlue: hsl(220, 13%, 13%);\r\n  --darkGrayishBlue: hsl(219, 9%, 45%);\r\n  --grayishBlue: hsl(220, 14%, 75%);\r\n  --lightGrayishBlue: hsl(223, 64%, 98%);\r\n  --white: hsl(0, 0%, 100%);\r\n  --whiteFaded: hsla(0, 0%, 100%, 0.59);\r\n  --blackFaded: hsla(0, 0%, 0%, 0.253);\r\n  --black: hsl(0, 0%, 0%);\r\n  --kumbhSans: 'Kumbh Sans', sans-serif;\r\n  --fontSize: 1rem;\r\n}\r\n\r\nbody {\r\n  font-family: var(--kumbhSans);\r\n}\r\n\r\n.navbar {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  padding: 1rem;\r\n  height: 3.4rem;\r\n}\r\n\r\n.navbar div {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  font-family: var(--kumbhSans);\r\n}\r\n\r\n.navbar svg {\r\n  margin-right: 1rem;\r\n}\r\n\r\n.cart-div > img {\r\n  width: 20px;\r\n}\r\n\r\n.img-courosal {\r\n  width: 100%;\r\n}\r\n\r\n.attribution {\r\n  font-size: 11px;\r\n  text-align: center;\r\n  display: none;\r\n}\r\n\r\n.attribution a {\r\n  color: hsl(228, 45%, 44%);\r\n}\r\n\r\n@media screen and (min-width: 375px) {\r\n  body {\r\n    padding: 0 13%;\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr;\r\n\r\n    /* grid-template-rows: 9rem repeat(2, 1fr); */\r\n    column-gap: 1rem;\r\n    min-height: 100vh;\r\n  }\r\n\r\n  .navbar {\r\n    min-height: 6rem !important;\r\n    grid-column: span 2;\r\n    padding: 0;\r\n    border-bottom: 1px solid var(--grayishBlue);\r\n    margin-bottom: 5rem;\r\n  }\r\n\r\n  .headline {\r\n    margin-top: 1rem;\r\n  }\r\n\r\n  .headline > p {\r\n    margin-top: 1.5rem;\r\n  }\r\n\r\n  .cart-div > img {\r\n    width: 40px;\r\n  }\r\n\r\n  .logo {\r\n    width: 128px;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.id, "@media screen and (max-width: 651px) {\r\n  .menu-container {\r\n    position: fixed;\r\n    list-style: none;\r\n    width: 0;\r\n    top: 0;\r\n    left: 0;\r\n    bottom: 0;\r\n    background-color: var(--white);\r\n    z-index: 5;\r\n    overflow-x: hidden;\r\n    transition: 0.5s;\r\n  }\r\n\r\n  .menu-container li {\r\n    margin-top: 1rem;\r\n  }\r\n\r\n  .logo {\r\n    width: 100px;\r\n  }\r\n}\r\n\r\n.menu-container li {\r\n  list-style: none;\r\n}\r\n\r\n.menu-container a {\r\n  text-decoration: none;\r\n  color: var(--black);\r\n  font-weight: bold;\r\n}\r\n\r\n.menu-container a:hover {\r\n  color: var(--veryVarkBlue);\r\n}\r\n\r\n.close {\r\n  position: absolute;\r\n  top: 20px;\r\n}\r\n\r\n@media screen and (min-width: 650px) {\r\n  .hamburger {\r\n    display: none;\r\n  }\r\n\r\n  .menu-container {\r\n    display: flex;\r\n    margin: 0 1.5rem;\r\n  }\r\n\r\n  .menu-container li {\r\n    display: flex;\r\n    align-items: center;\r\n    font-size: 0.85rem;\r\n    padding-right: 20px;\r\n  }\r\n\r\n  .menu-container a {\r\n    color: var(--darkGrayishBlue);\r\n    font-weight: bold;\r\n  }\r\n\r\n  .menu-container a:hover {\r\n    color: var(--black);\r\n    font-weight: bold;\r\n  }\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/css/sidebar.css"],"names":[],"mappings":"AAAA;EACE;IACE,eAAe;IACf,gBAAgB;IAChB,QAAQ;IACR,MAAM;IACN,OAAO;IACP,SAAS;IACT,8BAA8B;IAC9B,UAAU;IACV,kBAAkB;IAClB,gBAAgB;EAClB;;EAEA;IACE,gBAAgB;EAClB;;EAEA;IACE,YAAY;EACd;AACF;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,qBAAqB;EACrB,mBAAmB;EACnB,iBAAiB;AACnB;;AAEA;EACE,0BAA0B;AAC5B;;AAEA;EACE,kBAAkB;EAClB,SAAS;AACX;;AAEA;EACE;IACE,aAAa;EACf;;EAEA;IACE,aAAa;IACb,gBAAgB;EAClB;;EAEA;IACE,aAAa;IACb,mBAAmB;IACnB,kBAAkB;IAClB,mBAAmB;EACrB;;EAEA;IACE,6BAA6B;IAC7B,iBAAiB;EACnB;;EAEA;IACE,mBAAmB;IACnB,iBAAiB;EACnB;AACF","sourcesContent":["@media screen and (max-width: 651px) {\r\n  .menu-container {\r\n    position: fixed;\r\n    list-style: none;\r\n    width: 0;\r\n    top: 0;\r\n    left: 0;\r\n    bottom: 0;\r\n    background-color: var(--white);\r\n    z-index: 5;\r\n    overflow-x: hidden;\r\n    transition: 0.5s;\r\n  }\r\n\r\n  .menu-container li {\r\n    margin-top: 1rem;\r\n  }\r\n\r\n  .logo {\r\n    width: 100px;\r\n  }\r\n}\r\n\r\n.menu-container li {\r\n  list-style: none;\r\n}\r\n\r\n.menu-container a {\r\n  text-decoration: none;\r\n  color: var(--black);\r\n  font-weight: bold;\r\n}\r\n\r\n.menu-container a:hover {\r\n  color: var(--veryVarkBlue);\r\n}\r\n\r\n.close {\r\n  position: absolute;\r\n  top: 20px;\r\n}\r\n\r\n@media screen and (min-width: 650px) {\r\n  .hamburger {\r\n    display: none;\r\n  }\r\n\r\n  .menu-container {\r\n    display: flex;\r\n    margin: 0 1.5rem;\r\n  }\r\n\r\n  .menu-container li {\r\n    display: flex;\r\n    align-items: center;\r\n    font-size: 0.85rem;\r\n    padding-right: 20px;\r\n  }\r\n\r\n  .menu-container a {\r\n    color: var(--darkGrayishBlue);\r\n    font-weight: bold;\r\n  }\r\n\r\n  .menu-container a:hover {\r\n    color: var(--black);\r\n    font-weight: bold;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.id, ".slideshow-container {\r\n  position: relative;\r\n  height: 340px;\r\n  overflow: hidden;\r\n}\r\n\r\n.myslide {\r\n  display: none;\r\n}\r\n\r\n.circle {\r\n  border-radius: 50%;\r\n  position: absolute;\r\n  background-color: var(--white);\r\n  width: 30px;\r\n  height: 30px;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  cursor: pointer;\r\n  transition: 0.6s ease;\r\n}\r\n\r\n.prev,\r\n.next {\r\n  cursor: pointer;\r\n  font-weight: bold;\r\n  user-select: none;\r\n}\r\n\r\n.circle-prev {\r\n  left: 10px;\r\n  top: 47%;\r\n}\r\n\r\n.circle-next {\r\n  right: 10px;\r\n  top: 47%;\r\n}\r\n\r\n.circle-prev:hover {\r\n  background-color: var(--whiteFaded);\r\n}\r\n\r\n.circle-next:hover {\r\n  background-color: var(--whiteFaded);\r\n}\r\n\r\n.fade {\r\n  animation-name: fade;\r\n  animation-duration: 1.5s;\r\n}\r\n\r\n@keyframes fade {\r\n  from { opacity: 0.4; }\r\n  to { opacity: 1; }\r\n}\r\n\r\n.thumbnail-container {\r\n  display: none;\r\n}\r\n\r\n@media screen and (min-width: 375px) {\r\n  .image-slide-wrapper {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n  }\r\n\r\n  .slideshow-container {\r\n    grid-row: 2 / 3;\r\n    margin-bottom: 1rem;\r\n    border-radius: 15px;\r\n    width: 80%;\r\n  }\r\n\r\n  .thumbnail-container {\r\n    width: 80%;\r\n    height: 85px;\r\n    margin-bottom: 10rem;\r\n    display: flex;\r\n    gap: 10px;\r\n  }\r\n\r\n  .myThumbnails {\r\n    border-radius: 10px;\r\n    overflow: hidden;\r\n    list-style: none;\r\n    position: relative;\r\n  }\r\n\r\n  /* .myThumbnails:hover {\r\n    opacity: 0.6;\r\n  } */\r\n\r\n  .myThumbnails:focus {\r\n    border: 1px solid var(--orange);\r\n    outline: 1px solid var(--orange);\r\n  }\r\n\r\n  .faded-thumbnail-bg {\r\n    position: absolute;\r\n    width: 100%;\r\n  }\r\n\r\n  .faded-thumbnail-bg-focus {\r\n    background-color: rgba(255, 255, 255, 0.559);\r\n    height: 100%;\r\n  }\r\n\r\n  .myThumbnails img {\r\n    width: 100%;\r\n\r\n    /* height: 100%; */\r\n  }\r\n\r\n  .circle {\r\n    display: none;\r\n  }\r\n\r\n  .slide-pop-bg {\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    bottom: 0;\r\n    background-color: rgba(0, 0, 0, 0.876);\r\n    z-index: 5;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n    visibility: hidden;\r\n    opacity: 0;\r\n    transition: visibility 0s, opacity 0.5s;\r\n  }\r\n\r\n  .inner-slide {\r\n    width: 30%;\r\n    overflow: hidden;\r\n    border-radius: 10px;\r\n    height: 390px;\r\n  }\r\n\r\n  .inner-slide img {\r\n    width: 100%;\r\n  }\r\n\r\n  .pop-thumbnail {\r\n    width: 25%;\r\n    height: 74px;\r\n    margin-top: 10px;\r\n    display: flex;\r\n    gap: 10px;\r\n  }\r\n\r\n  .pop-close {\r\n    position: absolute;\r\n    top: 40px;\r\n    left: 63.5%;\r\n    width: 19px;\r\n    fill: var(--white);\r\n    cursor: pointer;\r\n  }\r\n\r\n  .popup-circle-next,\r\n  .popup-circle-prev {\r\n    display: flex;\r\n    width: 40px;\r\n    height: 40px;\r\n    top: 15rem;\r\n  }\r\n\r\n  .popup-circle-next {\r\n    right: 28rem;\r\n  }\r\n\r\n  .popup-circle-prev {\r\n    left: 28rem;\r\n  }\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/css/slideshow.css"],"names":[],"mappings":"AAAA;EACE,kBAAkB;EAClB,aAAa;EACb,gBAAgB;AAClB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,kBAAkB;EAClB,kBAAkB;EAClB,8BAA8B;EAC9B,WAAW;EACX,YAAY;EACZ,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,eAAe;EACf,qBAAqB;AACvB;;AAEA;;EAEE,eAAe;EACf,iBAAiB;EACjB,iBAAiB;AACnB;;AAEA;EACE,UAAU;EACV,QAAQ;AACV;;AAEA;EACE,WAAW;EACX,QAAQ;AACV;;AAEA;EACE,mCAAmC;AACrC;;AAEA;EACE,mCAAmC;AACrC;;AAEA;EACE,oBAAoB;EACpB,wBAAwB;AAC1B;;AAEA;EACE,OAAO,YAAY,EAAE;EACrB,KAAK,UAAU,EAAE;AACnB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE;IACE,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;EACrB;;EAEA;IACE,eAAe;IACf,mBAAmB;IACnB,mBAAmB;IACnB,UAAU;EACZ;;EAEA;IACE,UAAU;IACV,YAAY;IACZ,oBAAoB;IACpB,aAAa;IACb,SAAS;EACX;;EAEA;IACE,mBAAmB;IACnB,gBAAgB;IAChB,gBAAgB;IAChB,kBAAkB;EACpB;;EAEA;;KAEG;;EAEH;IACE,+BAA+B;IAC/B,gCAAgC;EAClC;;EAEA;IACE,kBAAkB;IAClB,WAAW;EACb;;EAEA;IACE,4CAA4C;IAC5C,YAAY;EACd;;EAEA;IACE,WAAW;;IAEX,kBAAkB;EACpB;;EAEA;IACE,aAAa;EACf;;EAEA;IACE,eAAe;IACf,MAAM;IACN,OAAO;IACP,WAAW;IACX,SAAS;IACT,sCAAsC;IACtC,UAAU;IACV,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,uBAAuB;IACvB,kBAAkB;IAClB,UAAU;IACV,uCAAuC;EACzC;;EAEA;IACE,UAAU;IACV,gBAAgB;IAChB,mBAAmB;IACnB,aAAa;EACf;;EAEA;IACE,WAAW;EACb;;EAEA;IACE,UAAU;IACV,YAAY;IACZ,gBAAgB;IAChB,aAAa;IACb,SAAS;EACX;;EAEA;IACE,kBAAkB;IAClB,SAAS;IACT,WAAW;IACX,WAAW;IACX,kBAAkB;IAClB,eAAe;EACjB;;EAEA;;IAEE,aAAa;IACb,WAAW;IACX,YAAY;IACZ,UAAU;EACZ;;EAEA;IACE,YAAY;EACd;;EAEA;IACE,WAAW;EACb;AACF","sourcesContent":[".slideshow-container {\r\n  position: relative;\r\n  height: 340px;\r\n  overflow: hidden;\r\n}\r\n\r\n.myslide {\r\n  display: none;\r\n}\r\n\r\n.circle {\r\n  border-radius: 50%;\r\n  position: absolute;\r\n  background-color: var(--white);\r\n  width: 30px;\r\n  height: 30px;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  cursor: pointer;\r\n  transition: 0.6s ease;\r\n}\r\n\r\n.prev,\r\n.next {\r\n  cursor: pointer;\r\n  font-weight: bold;\r\n  user-select: none;\r\n}\r\n\r\n.circle-prev {\r\n  left: 10px;\r\n  top: 47%;\r\n}\r\n\r\n.circle-next {\r\n  right: 10px;\r\n  top: 47%;\r\n}\r\n\r\n.circle-prev:hover {\r\n  background-color: var(--whiteFaded);\r\n}\r\n\r\n.circle-next:hover {\r\n  background-color: var(--whiteFaded);\r\n}\r\n\r\n.fade {\r\n  animation-name: fade;\r\n  animation-duration: 1.5s;\r\n}\r\n\r\n@keyframes fade {\r\n  from { opacity: 0.4; }\r\n  to { opacity: 1; }\r\n}\r\n\r\n.thumbnail-container {\r\n  display: none;\r\n}\r\n\r\n@media screen and (min-width: 375px) {\r\n  .image-slide-wrapper {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n  }\r\n\r\n  .slideshow-container {\r\n    grid-row: 2 / 3;\r\n    margin-bottom: 1rem;\r\n    border-radius: 15px;\r\n    width: 80%;\r\n  }\r\n\r\n  .thumbnail-container {\r\n    width: 80%;\r\n    height: 85px;\r\n    margin-bottom: 10rem;\r\n    display: flex;\r\n    gap: 10px;\r\n  }\r\n\r\n  .myThumbnails {\r\n    border-radius: 10px;\r\n    overflow: hidden;\r\n    list-style: none;\r\n    position: relative;\r\n  }\r\n\r\n  /* .myThumbnails:hover {\r\n    opacity: 0.6;\r\n  } */\r\n\r\n  .myThumbnails:focus {\r\n    border: 1px solid var(--orange);\r\n    outline: 1px solid var(--orange);\r\n  }\r\n\r\n  .faded-thumbnail-bg {\r\n    position: absolute;\r\n    width: 100%;\r\n  }\r\n\r\n  .faded-thumbnail-bg-focus {\r\n    background-color: rgba(255, 255, 255, 0.559);\r\n    height: 100%;\r\n  }\r\n\r\n  .myThumbnails img {\r\n    width: 100%;\r\n\r\n    /* height: 100%; */\r\n  }\r\n\r\n  .circle {\r\n    display: none;\r\n  }\r\n\r\n  .slide-pop-bg {\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    bottom: 0;\r\n    background-color: rgba(0, 0, 0, 0.876);\r\n    z-index: 5;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n    visibility: hidden;\r\n    opacity: 0;\r\n    transition: visibility 0s, opacity 0.5s;\r\n  }\r\n\r\n  .inner-slide {\r\n    width: 30%;\r\n    overflow: hidden;\r\n    border-radius: 10px;\r\n    height: 390px;\r\n  }\r\n\r\n  .inner-slide img {\r\n    width: 100%;\r\n  }\r\n\r\n  .pop-thumbnail {\r\n    width: 25%;\r\n    height: 74px;\r\n    margin-top: 10px;\r\n    display: flex;\r\n    gap: 10px;\r\n  }\r\n\r\n  .pop-close {\r\n    position: absolute;\r\n    top: 40px;\r\n    left: 63.5%;\r\n    width: 19px;\r\n    fill: var(--white);\r\n    cursor: pointer;\r\n  }\r\n\r\n  .popup-circle-next,\r\n  .popup-circle-prev {\r\n    display: flex;\r\n    width: 40px;\r\n    height: 40px;\r\n    top: 15rem;\r\n  }\r\n\r\n  .popup-circle-next {\r\n    right: 28rem;\r\n  }\r\n\r\n  .popup-circle-prev {\r\n    left: 28rem;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
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
class Cart {
    static cart = [

    ];

    static updateQty = (product) => {
      // let newProduct =  Object.assign({}, product); //Update qty by adding one
      // console.log(newProduct)
      product.qty += 1;
      return product;
    }

    static addToCart = (product) => {
      const index = Cart.cart.findIndex((prod) => product.id === prod.id);
      if (index === -1) {
        Cart.cart = [...Cart.cart, Cart.updateQty(product)];
        return true;
      }
      return false;
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
/* harmony export */   "createNextIcon": () => (/* binding */ createNextIcon),
/* harmony export */   "createPopupBg": () => (/* binding */ createPopupBg),
/* harmony export */   "createPrevIcon": () => (/* binding */ createPrevIcon),
/* harmony export */   "displaySlideCard": () => (/* binding */ displaySlideCard),
/* harmony export */   "insertCartCard": () => (/* binding */ insertCartCard),
/* harmony export */   "insertCloseIcon": () => (/* binding */ insertCloseIcon),
/* harmony export */   "insertThumbnailEl": () => (/* binding */ insertThumbnailEl)
/* harmony export */ });
/* harmony import */ var _css_sidebar_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/sidebar.css */ "./src/css/sidebar.css");
/* harmony import */ var _images_icon_close_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/icon-close.svg */ "./src/images/icon-close.svg");
/* harmony import */ var _images_icon_delete_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/icon-delete.svg */ "./src/images/icon-delete.svg");




const insertCloseIcon = (location) => {
  const img = document.createElement('img');
  img.src = _images_icon_close_svg__WEBPACK_IMPORTED_MODULE_1__;
  location.appendChild(img);
  return img;
};

const insertCartCard = ({
  images, productName, qty, price, id,
}) => {
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
        <img class="product-delete" src="${_images_icon_delete_svg__WEBPACK_IMPORTED_MODULE_2__}" alt="delete-icon">
      </div>
      </div>         
  </div>`;

  const innerCartBox = document.querySelector('.inner-cart-box');
  innerCartBox.insertAdjacentHTML('beforeend', cartCard);
};

const slideCard = (image, location, classNam) => {
  const slides = `<div class="${classNam} fade">
    <img class="img-courosal" src="${image}" alt="img-courosal">
  </div>`;
  location.insertAdjacentHTML('afterbegin', slides);
};

const displaySlideCard = (location, classNam, imageArr) => {
  imageArr.forEach((image) => {
    slideCard(image, location, classNam);
  });
};

const createPrevIcon = (location, classNam) => {
  location.insertAdjacentHTML('beforeend',
    `<div class="circle ${classNam}">
        <a class="prev">&#10094;</a>
   </div>
   `);
};

const createNextIcon = (location, classNam) => {
  location.insertAdjacentHTML('beforeend',
    ` <div class="circle ${classNam}">
        <a class="next">&#10095;</a>
      </div>`);
};

const createThumbnailEl = (image, id) => {
  const slides = document.createElement('li');
  slides.classList.add('myThumbnails');
  slides.setAttribute('tabIndex', '0');
  slides.id = `thumb-${id}`;
  slides.innerHTML = `
  <div class='faded-thumbnail-bg'></div>
  <img src="${image}" id="${id}" alt='product-thumbnail' >`;
  return slides;
};

const insertThumbnailEl = (location, thumbnailsArr, id = 0) => {
  thumbnailsArr.forEach((item, index) => {
    location.appendChild(createThumbnailEl(item, index + 1 + id));
  });
};

const createPopupBg = () => {
  const popupModal = `
      <div class="slide-pop-bg">            

        <ul class="pop-thumbnail">
  
        </ul>
    </div>`;
  const slideshowContainer = document.querySelector('.slideshow-container');
  slideshowContainer.insertAdjacentHTML('beforebegin', popupModal);
};



/***/ }),

/***/ "./src/components/product.js":
/*!***********************************!*\
  !*** ./src/components/product.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "imagesArr": () => (/* binding */ imagesArr),
/* harmony export */   "product": () => (/* binding */ product),
/* harmony export */   "thumbnailsArr": () => (/* binding */ thumbnailsArr)
/* harmony export */ });
/* harmony import */ var uniqid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uniqid */ "./node_modules/uniqid/index.js");
/* harmony import */ var uniqid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uniqid__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _images_image_product_1_thumbnail_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/image-product-1-thumbnail.jpg */ "./src/images/image-product-1-thumbnail.jpg");
/* harmony import */ var _images_image_product_1_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/image-product-1.jpg */ "./src/images/image-product-1.jpg");
/* harmony import */ var _images_image_product_2_thumbnail_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/image-product-2-thumbnail.jpg */ "./src/images/image-product-2-thumbnail.jpg");
/* harmony import */ var _images_image_product_2_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/image-product-2.jpg */ "./src/images/image-product-2.jpg");
/* harmony import */ var _images_image_product_3_thumbnail_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../images/image-product-3-thumbnail.jpg */ "./src/images/image-product-3-thumbnail.jpg");
/* harmony import */ var _images_image_product_3_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../images/image-product-3.jpg */ "./src/images/image-product-3.jpg");
/* harmony import */ var _images_image_product_4_thumbnail_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../images/image-product-4-thumbnail.jpg */ "./src/images/image-product-4-thumbnail.jpg");
/* harmony import */ var _images_image_product_4_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../images/image-product-4.jpg */ "./src/images/image-product-4.jpg");










const product = {
  images: {
    image1: {
      image: _images_image_product_1_jpg__WEBPACK_IMPORTED_MODULE_2__,
      imageThumnail: _images_image_product_1_thumbnail_jpg__WEBPACK_IMPORTED_MODULE_1__,
    },
    image2: {
      image: _images_image_product_2_jpg__WEBPACK_IMPORTED_MODULE_4__,
      imageThumnail: _images_image_product_2_thumbnail_jpg__WEBPACK_IMPORTED_MODULE_3__,
    },
    image3: {
      image: _images_image_product_3_jpg__WEBPACK_IMPORTED_MODULE_6__,
      imageThumnail: _images_image_product_3_thumbnail_jpg__WEBPACK_IMPORTED_MODULE_5__,
    },
    image4: {
      image: _images_image_product_4_jpg__WEBPACK_IMPORTED_MODULE_8__,
      imageThumnail: _images_image_product_4_thumbnail_jpg__WEBPACK_IMPORTED_MODULE_7__,
    },

  },
  productName: 'Autumn Limited Edition...',
  qty: 0,
  price: 125,
  id: uniqid__WEBPACK_IMPORTED_MODULE_0___default()(),
};

const imagesArr = [_images_image_product_1_jpg__WEBPACK_IMPORTED_MODULE_2__, _images_image_product_2_jpg__WEBPACK_IMPORTED_MODULE_4__, _images_image_product_3_jpg__WEBPACK_IMPORTED_MODULE_6__, _images_image_product_4_jpg__WEBPACK_IMPORTED_MODULE_8__];
const thumbnailsArr = [_images_image_product_4_thumbnail_jpg__WEBPACK_IMPORTED_MODULE_7__, _images_image_product_3_thumbnail_jpg__WEBPACK_IMPORTED_MODULE_5__, _images_image_product_2_thumbnail_jpg__WEBPACK_IMPORTED_MODULE_3__, _images_image_product_1_thumbnail_jpg__WEBPACK_IMPORTED_MODULE_1__];



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

/***/ }),

/***/ "./src/images/logo.svg":
/*!*****************************!*\
  !*** ./src/images/logo.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "4fe9c1e86cf9bf600f0c.svg";

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
/* harmony import */ var _components_product_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/product.js */ "./src/components/product.js");
/* harmony import */ var _css_index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./css/index.css */ "./src/css/index.css");
/* harmony import */ var _css_slideshow_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./css/slideshow.css */ "./src/css/slideshow.css");
/* harmony import */ var _css_headline_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./css/headline.css */ "./src/css/headline.css");
/* harmony import */ var _css_cart_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./css/cart.css */ "./src/css/cart.css");
/* harmony import */ var _images_image_avatar_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/image-avatar.png */ "./src/images/image-avatar.png");
/* harmony import */ var _images_icon_plus_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./images/icon-plus.svg */ "./src/images/icon-plus.svg");
/* harmony import */ var _images_icon_minus_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./images/icon-minus.svg */ "./src/images/icon-minus.svg");
/* harmony import */ var _images_logo_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./images/logo.svg */ "./src/images/logo.svg");
/* harmony import */ var _components_cart_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/cart.js */ "./src/components/cart.js");












const avatar = document.querySelector('.avatar');
const plusIconEl = document.querySelector('.plus-icon');
const minusIconEl = document.querySelector('.minus-icon');
const logoEl = document.querySelector('.logo');

logoEl.src = _images_logo_svg__WEBPACK_IMPORTED_MODULE_9__;
avatar.src = _images_image_avatar_png__WEBPACK_IMPORTED_MODULE_6__;
plusIconEl.src = _images_icon_plus_svg__WEBPACK_IMPORTED_MODULE_7__;
minusIconEl.src = _images_icon_minus_svg__WEBPACK_IMPORTED_MODULE_8__;

// display cart items
const updateCartCounts = (cart) => {
  const cartCount = document.querySelector('.cart-count');
  let count = 0;
  cart.forEach((item) => {
    count += item.qty;
  });
  cartCount.textContent = count;
};

const displayCard = () => {
  const innerCartBox = document.querySelector('.inner-cart-box');
  const emptyEl = document.createElement('p');
  emptyEl.className = 'empty-message';
  emptyEl.textContent = 'Your cart is empty.';
  if (_components_cart_js__WEBPACK_IMPORTED_MODULE_10__["default"].cart.length === 0) {
    innerCartBox.appendChild(emptyEl);
    // return emptyEl;
  }
  _components_cart_js__WEBPACK_IMPORTED_MODULE_10__["default"].cart.forEach((item) => {
    (0,_components_dom_js__WEBPACK_IMPORTED_MODULE_0__.insertCartCard)(item);
  });

  updateCartCounts(_components_cart_js__WEBPACK_IMPORTED_MODULE_10__["default"].cart);
};

const resetCheckoutItems = () => {
  const innerCartBox = document.querySelector('.inner-cart-box');
  while (innerCartBox.firstElementChild) {
    innerCartBox.removeChild(innerCartBox.firstElementChild);
  }
  displayCard();
};

resetCheckoutItems();

// Menu onclick
const hamburger = document.querySelector('.hamburger');
hamburger.addEventListener('click', () => {
  const menuEl = document.querySelector('.menu-container');
  const closeEl = (0,_components_dom_js__WEBPACK_IMPORTED_MODULE_0__.insertCloseIcon)(menuEl);
  closeEl.classList.add('close');

  document.querySelector('.menu-container').style.width = '85%';
  document.querySelector('.menu-container').style.padding = '3rem 2rem';

  document.querySelector('.close').addEventListener('click', () => {
    document.querySelector('.menu-container').style.width = '';
    document.querySelector('.menu-container').style.padding = '';
    closeEl.remove();
  });
});

// Checkout cart click event

const executeCheckoutCloseEvent = () => {
  const bgCartBox = document.querySelector('.bg-cart-box');
  const checkoutFn = (e) => {
    if (e.target === bgCartBox) {
      bgCartBox.classList.remove('checkout-cart-active');
      bgCartBox.removeEventListener('click', checkoutFn);
    }
  };
  bgCartBox.addEventListener('click', checkoutFn);
};

const displayCheckout = () => {
  const bgCartBox = document.querySelector('.bg-cart-box');
  bgCartBox.classList.add('checkout-cart-active');
  executeCheckoutCloseEvent();
};

const checkoutCart = document.querySelector('.checkout-cart');
checkoutCart.addEventListener('click', displayCheckout);

// Add to cart event
const addToCartBtn = document.querySelector('.add-to-cart-btn');

const productCountIncrement = () => {
  const productQtyCount = document.querySelector('.productQtyCount');

  productQtyCount.textContent = Number(productQtyCount.textContent) + 1;
};

const productCountDecrement = () => {
  const productQtyCount = document.querySelector('.productQtyCount');
  // const cartCount = document.querySelector('.cart-count');
  if (Number(productQtyCount.textContent) > 0) {
    productQtyCount.textContent = Number(productQtyCount.textContent) - 1;
  }
};

const alreadyInCart = (msg) => {
  const addToCartBtn = document.querySelector('.add-to-cart-btn');
  addToCartBtn.lastElementChild.textContent = msg;
};

const attachDeleteEvent = () => {
  const deleteProductIcon = Array.from(document.querySelectorAll('.product-delete'));
  if (deleteProductIcon.length) {
    deleteProductIcon.forEach((item) => {
      item.addEventListener('click', () => {
        _components_cart_js__WEBPACK_IMPORTED_MODULE_10__["default"].removeProduct(_components_product_js__WEBPACK_IMPORTED_MODULE_1__.product);
        _components_product_js__WEBPACK_IMPORTED_MODULE_1__.product.qty = 0;
        resetCheckoutItems();
        alreadyInCart('Add to cart');
        attachDeleteEvent();
        const productQtyCount = document.querySelector('.productQtyCount');
        productQtyCount.textContent = 0;
        updateCartCounts(_components_cart_js__WEBPACK_IMPORTED_MODULE_10__["default"].cart);
      });
    });
  }
};

addToCartBtn.addEventListener('click', () => {
  const isAdded = _components_cart_js__WEBPACK_IMPORTED_MODULE_10__["default"].addToCart(_components_product_js__WEBPACK_IMPORTED_MODULE_1__.product);
  if (isAdded) {
    productCountIncrement();
    resetCheckoutItems();
    alreadyInCart('Already in cart');
    attachDeleteEvent();
  } else {
    alreadyInCart('Already in cart');
  }
});

// Increase or decrease qty event
const productQtyIncrement = (cart, product) => {
  cart.forEach((item) => {
    if (item.id === product.id) {
      item.qty += 1;
    }
  });
};

const productQtyDecrement = (cart, product) => {
  if (product.qty > 0) {
    cart.forEach((item) => {
      if (item.id === product.id) {
        item.qty -= 1;
      }
    });
  }
};

plusIconEl.addEventListener('click', () => {
  const isAdded = _components_cart_js__WEBPACK_IMPORTED_MODULE_10__["default"].addToCart(_components_product_js__WEBPACK_IMPORTED_MODULE_1__.product);
  if (isAdded) {
    alreadyInCart('Already in cart');
    productCountIncrement();
    resetCheckoutItems();
    attachDeleteEvent();
  } else {
    alreadyInCart('Already in cart');
    productCountIncrement();
    productQtyIncrement(_components_cart_js__WEBPACK_IMPORTED_MODULE_10__["default"].cart, _components_product_js__WEBPACK_IMPORTED_MODULE_1__.product);
    resetCheckoutItems();
    attachDeleteEvent();
  }
});

minusIconEl.addEventListener('click', () => {
  productCountDecrement();
  productQtyDecrement(_components_cart_js__WEBPACK_IMPORTED_MODULE_10__["default"].cart, _components_product_js__WEBPACK_IMPORTED_MODULE_1__.product); // update qty in cart
  resetCheckoutItems();

  let productQty = 0;
  _components_cart_js__WEBPACK_IMPORTED_MODULE_10__["default"].cart.forEach((item) => {
    if (item.id === _components_product_js__WEBPACK_IMPORTED_MODULE_1__.product.id) {
      productQty = item.qty;
    }
  });
  if (productQty < 1) {
    alreadyInCart('Add to cart');
  }
  if (productQty < 2) {
    productQtyDecrement(_components_cart_js__WEBPACK_IMPORTED_MODULE_10__["default"].cart, _components_product_js__WEBPACK_IMPORTED_MODULE_1__.product);
    _components_cart_js__WEBPACK_IMPORTED_MODULE_10__["default"].removeProduct(_components_product_js__WEBPACK_IMPORTED_MODULE_1__.product);
  }
});

// Slide show event

const slideshow = () => {
  const slideshowContainer = document.querySelector('.slideshow-container');
  const slideClassName = 'myslide';

  (0,_components_dom_js__WEBPACK_IMPORTED_MODULE_0__.displaySlideCard)(slideshowContainer, slideClassName, _components_product_js__WEBPACK_IMPORTED_MODULE_1__.imagesArr); // Display slide initial show
  (0,_components_dom_js__WEBPACK_IMPORTED_MODULE_0__.createNextIcon)(slideshowContainer, 'circle-next');
  (0,_components_dom_js__WEBPACK_IMPORTED_MODULE_0__.createPrevIcon)(slideshowContainer, 'circle-prev');

  let slideIndex = 1;
  const showSlider = (n, classNam) => {
    let i;
    const slides = document.getElementsByClassName(classNam);

    if (n > slides.length) {
      slideIndex = 1;
    }

    if (n < 1) {
      slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i += 1) {
      slides[i].style.display = 'none';
    }

    slides[slideIndex - 1].style.display = 'block';
  };

  showSlider(slideIndex, slideClassName);

  const plusSlides = (n, classNam) => {
    showSlider(slideIndex += n, classNam);
  };

  function currentSlide(n, classNam) {
    showSlider(slideIndex = n, classNam);
  }

  const prev = document.querySelector('.circle-prev');
  const next = document.querySelector('.circle-next');

  const previousImage = () => plusSlides(-1, slideClassName);
  prev.addEventListener('click', previousImage);

  const nextImage = () => plusSlides(1, slideClassName);
  next.addEventListener('click', nextImage);

  // Thumbnails image event
  const thumbnailContainer = document.querySelector('.thumbnail-container');
  (0,_components_dom_js__WEBPACK_IMPORTED_MODULE_0__.insertThumbnailEl)(thumbnailContainer, _components_product_js__WEBPACK_IMPORTED_MODULE_1__.thumbnailsArr);

  thumbnailContainer.addEventListener('click', (e) => {
    if (e.target.id === 'thumb-1') {
      currentSlide(1, slideClassName);
    }
    if (e.target.id === 'thumb-2') {
      currentSlide(2, slideClassName);
    }
    if (e.target.id === 'thumb-3') {
      currentSlide(3, slideClassName);
    }
    if (e.target.id === 'thumb-4') {
      currentSlide(4, slideClassName);
    }
  });

  const resetShadeBgColor = () => {
    const { children } = thumbnailContainer;
    for (let i = 0; i < children.length; i += 1) {
      children[i].firstElementChild.classList.remove('faded-thumbnail-bg-focus');
    }
  };

  const resetPopupShadeBgColor = () => {
    const { children } = document.querySelector('.pop-thumbnail');
    for (let i = 0; i < children.length; i += 1) {
      children[i].firstElementChild.classList.remove('faded-thumbnail-bg-focus');
    }
  };

  thumbnailContainer.addEventListener('focusin', (e) => {
    if (e.target.id === 'thumb-1') {
      resetShadeBgColor();
      e.target.firstElementChild.classList.add('faded-thumbnail-bg-focus');
    }
    if (e.target.id === 'thumb-2') {
      resetShadeBgColor();
      e.target.firstElementChild.classList.add('faded-thumbnail-bg-focus');
    }
    if (e.target.id === 'thumb-3') {
      resetShadeBgColor();
      e.target.firstElementChild.classList.add('faded-thumbnail-bg-focus');
    }
    if (e.target.id === 'thumb-4') {
      resetShadeBgColor();
      e.target.firstElementChild.classList.add('faded-thumbnail-bg-focus');
    }
  });
  thumbnailContainer.firstElementChild.focus();

  //   popup image click display event
  const popupSlideClassName = 'inner-slide';

  const popupPreviousImage = () => plusSlides(-1, popupSlideClassName);

  const popupNextImage = () => plusSlides(1, popupSlideClassName);

  slideshowContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('img-courosal') && window.innerWidth > 375) {
      (0,_components_dom_js__WEBPACK_IMPORTED_MODULE_0__.createPopupBg)();
      const popupSlideBg = document.querySelector('.slide-pop-bg');
      (0,_components_dom_js__WEBPACK_IMPORTED_MODULE_0__.displaySlideCard)(popupSlideBg, popupSlideClassName, _components_product_js__WEBPACK_IMPORTED_MODULE_1__.imagesArr);

      (0,_components_dom_js__WEBPACK_IMPORTED_MODULE_0__.createNextIcon)(popupSlideBg, 'popup-circle-next');
      (0,_components_dom_js__WEBPACK_IMPORTED_MODULE_0__.createPrevIcon)(popupSlideBg, 'popup-circle-prev');

      showSlider(slideIndex, popupSlideClassName); // effect slideshow event

      // Effect popup next and prev click event
      const popupPrev = document.querySelector('.popup-circle-prev');
      const popupNext = document.querySelector('.popup-circle-next');
      popupPrev.addEventListener('click', popupPreviousImage);
      popupNext.addEventListener('click', popupNextImage);

      // effect the event item for popup thumbnails
      const popThumbnail = document.querySelector('.pop-thumbnail');
      (0,_components_dom_js__WEBPACK_IMPORTED_MODULE_0__.insertThumbnailEl)(popThumbnail, _components_product_js__WEBPACK_IMPORTED_MODULE_1__.thumbnailsArr, 10);

      popThumbnail.addEventListener('click', (e) => {
        if (e.target.id === 'thumb-11') {
          currentSlide(1, popupSlideClassName);
        }
        if (e.target.id === 'thumb-12') {
          currentSlide(2, popupSlideClassName);
        }
        if (e.target.id === 'thumb-13') {
          currentSlide(3, popupSlideClassName);
        }
        if (e.target.id === 'thumb-14') {
          currentSlide(4, popupSlideClassName);
        }
      });

      popThumbnail.addEventListener('focusin', (e) => {
        if (e.target.id === 'thumb-11') {
          resetPopupShadeBgColor();
          e.target.firstElementChild.classList.add('faded-thumbnail-bg-focus');
        }
        if (e.target.id === 'thumb-12') {
          resetPopupShadeBgColor();
          e.target.firstElementChild.classList.add('faded-thumbnail-bg-focus');
        }
        if (e.target.id === 'thumb-13') {
          resetPopupShadeBgColor();
          e.target.firstElementChild.classList.add('faded-thumbnail-bg-focus');
        }
        if (e.target.id === 'thumb-14') {
          resetPopupShadeBgColor();
          e.target.firstElementChild.classList.add('faded-thumbnail-bg-focus');
        }
      });

      popThumbnail.firstElementChild.focus();
      // Insert close icon
      const closeEll = (0,_components_dom_js__WEBPACK_IMPORTED_MODULE_0__.insertCloseIcon)(popupSlideBg);
      closeEll.classList.add('pop-close');
      popupSlideBg.classList.add('checkout-cart-active');

      closeEll.addEventListener('click', () => {
        popupSlideBg.classList.toggle('checkout-cart-active');
        thumbnailContainer.firstElementChild.focus();
        popupSlideBg.remove();
      });
    }
  });
};

slideshow();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVksV0FBVztBQUN2QixvQkFBb0IscUJBQXFCO0FBQ3pDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLE1BQU0saUVBQWE7QUFDbkI7QUFDQSxNQUFNLG9FQUFnQixvQ0FBb0MsNkRBQVM7O0FBRW5FLE1BQU0sa0VBQWM7QUFDcEIsTUFBTSxrRUFBYzs7QUFFcEIsbURBQW1EOztBQUVuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNLHFFQUFpQixlQUFlLGlFQUFhOztBQUVuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBLHVCQUF1QixtRUFBZTtBQUN0QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsR0FBRztBQUNIOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZWNvbW1lcmNlLXByb2R1Y3QtcGFnZS1tYWluLy4vc3JjL2Nzcy9jYXJ0LmNzcyIsIndlYnBhY2s6Ly9lY29tbWVyY2UtcHJvZHVjdC1wYWdlLW1haW4vLi9zcmMvY3NzL2hlYWRsaW5lLmNzcyIsIndlYnBhY2s6Ly9lY29tbWVyY2UtcHJvZHVjdC1wYWdlLW1haW4vLi9zcmMvY3NzL2luZGV4LmNzcyIsIndlYnBhY2s6Ly9lY29tbWVyY2UtcHJvZHVjdC1wYWdlLW1haW4vLi9zcmMvY3NzL3NpZGViYXIuY3NzIiwid2VicGFjazovL2Vjb21tZXJjZS1wcm9kdWN0LXBhZ2UtbWFpbi8uL3NyYy9jc3Mvc2xpZGVzaG93LmNzcyIsIndlYnBhY2s6Ly9lY29tbWVyY2UtcHJvZHVjdC1wYWdlLW1haW4vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2Vjb21tZXJjZS1wcm9kdWN0LXBhZ2UtbWFpbi8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2Vjb21tZXJjZS1wcm9kdWN0LXBhZ2UtbWFpbi8uL3NyYy9jc3MvY2FydC5jc3M/NDA3OCIsIndlYnBhY2s6Ly9lY29tbWVyY2UtcHJvZHVjdC1wYWdlLW1haW4vLi9zcmMvY3NzL2hlYWRsaW5lLmNzcz81ZTc1Iiwid2VicGFjazovL2Vjb21tZXJjZS1wcm9kdWN0LXBhZ2UtbWFpbi8uL3NyYy9jc3MvaW5kZXguY3NzP2Y3ZWEiLCJ3ZWJwYWNrOi8vZWNvbW1lcmNlLXByb2R1Y3QtcGFnZS1tYWluLy4vc3JjL2Nzcy9zaWRlYmFyLmNzcz9lMTkzIiwid2VicGFjazovL2Vjb21tZXJjZS1wcm9kdWN0LXBhZ2UtbWFpbi8uL3NyYy9jc3Mvc2xpZGVzaG93LmNzcz8zOGFmIiwid2VicGFjazovL2Vjb21tZXJjZS1wcm9kdWN0LXBhZ2UtbWFpbi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9lY29tbWVyY2UtcHJvZHVjdC1wYWdlLW1haW4vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2Vjb21tZXJjZS1wcm9kdWN0LXBhZ2UtbWFpbi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9lY29tbWVyY2UtcHJvZHVjdC1wYWdlLW1haW4vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vZWNvbW1lcmNlLXByb2R1Y3QtcGFnZS1tYWluLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vZWNvbW1lcmNlLXByb2R1Y3QtcGFnZS1tYWluLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vZWNvbW1lcmNlLXByb2R1Y3QtcGFnZS1tYWluLy4vbm9kZV9tb2R1bGVzL3VuaXFpZC9pbmRleC5qcyIsIndlYnBhY2s6Ly9lY29tbWVyY2UtcHJvZHVjdC1wYWdlLW1haW4vLi9zcmMvY29tcG9uZW50cy9jYXJ0LmpzIiwid2VicGFjazovL2Vjb21tZXJjZS1wcm9kdWN0LXBhZ2UtbWFpbi8uL3NyYy9jb21wb25lbnRzL2RvbS5qcyIsIndlYnBhY2s6Ly9lY29tbWVyY2UtcHJvZHVjdC1wYWdlLW1haW4vLi9zcmMvY29tcG9uZW50cy9wcm9kdWN0LmpzIiwid2VicGFjazovL2Vjb21tZXJjZS1wcm9kdWN0LXBhZ2UtbWFpbi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9lY29tbWVyY2UtcHJvZHVjdC1wYWdlLW1haW4vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vZWNvbW1lcmNlLXByb2R1Y3QtcGFnZS1tYWluL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9lY29tbWVyY2UtcHJvZHVjdC1wYWdlLW1haW4vd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9lY29tbWVyY2UtcHJvZHVjdC1wYWdlLW1haW4vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9lY29tbWVyY2UtcHJvZHVjdC1wYWdlLW1haW4vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9lY29tbWVyY2UtcHJvZHVjdC1wYWdlLW1haW4vd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vZWNvbW1lcmNlLXByb2R1Y3QtcGFnZS1tYWluL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9lY29tbWVyY2UtcHJvZHVjdC1wYWdlLW1haW4vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIucHJpY2Utc2VjdGlvbiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnByaWNlLXNlY3Rpb24gPiBkaXYge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIHdpZHRoOiA0MCU7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJpY2Uge1xcclxcbiAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuXFxyXFxuLnByaWNlICsgc3BhbiB7XFxyXFxuICBjb2xvcjogdmFyKC0tb3JhbmdlKTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgZm9udC1zaXplOiAwLjlyZW07XFxyXFxufVxcclxcblxcclxcbi5wcmljZS1zZWN0aW9uID4gc3BhbiB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXHJcXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xcclxcbiAgY29sb3I6IHZhcigtLWRhcmtHcmF5aXNoQmx1ZSk7XFxyXFxufVxcclxcblxcclxcbi5hZGQtaXRlbS1zZWN0aW9uIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBwYWRkaW5nOiAwIDFyZW07XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICBtYXJnaW46IDJyZW0gMDtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0biB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW9yYW5nZSk7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBoZWlnaHQ6IDIuNXJlbTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG4gIGNvbG9yOiB2YXIoLS1wYWxlT3JhbmdlKTtcXHJcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1rdW1iaFNhbnMpO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FydC1idG4td3JhcHBlciB7XFxyXFxuICBtYXJnaW46IDAgMCA4MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkLXRvLWNhcnQtYnRuIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5hZGQtdG8tY2FydC1idG4gc3ZnIHtcXHJcXG4gIG1hcmdpbi1yaWdodDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZC10by1jYXJ0LWJ0biBwIHtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYmctY2FydC1ib3gge1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgYm90dG9tOiAwO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmxhY2tGYWRlZCk7XFxyXFxuICB6LWluZGV4OiA1O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcclxcbiAgb3BhY2l0eTogMDtcXHJcXG4gIHRyYW5zaXRpb246IHZpc2liaWxpdHkgMHMsIG9wYWNpdHkgMC41cztcXHJcXG59XFxyXFxuXFxyXFxuLmNhcnQtYm94IHtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHRvcDogNTVweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICB3aWR0aDogOTUlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FydC1ib3ggaDQge1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLWJsYWNrRmFkZWQpO1xcclxcbiAgcGFkZGluZzogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmlubmVyLWNhcnQtYm94LFxcclxcbi5pbm5lci1jYXJ0LWJveCArIGRpdiB7XFxyXFxuICBwYWRkaW5nOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZC1kZXRhaWwge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBmb250LXNpemU6IDAuOTFyZW07XFxyXFxufVxcclxcblxcclxcbi5wcm9kdWN0LXRodW1ibmFpbCArIGRpdiB7XFxyXFxuICBtYXJnaW4tbGVmdDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQtZGV0YWlsID4gZGl2OmZpcnN0LWNoaWxkIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvZHVjdC10aHVtYm5haWwge1xcclxcbiAgd2lkdGg6IDQwcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5wcm9kdWN0LWRlbGV0ZS13cmFwcGVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5jaGVja291dC1jYXJ0LWFjdGl2ZSB7XFxyXFxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcclxcbiAgb3BhY2l0eTogMTtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcnQtZGl2IHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcnQtY291bnQge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tb3JhbmdlKTtcXHJcXG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxyXFxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXHJcXG4gIGZvbnQtc2l6ZTogMTJweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gIHdpZHRoOiAyMHB4O1xcclxcbiAgaGVpZ2h0OiAxNXB4O1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgdG9wOiAtMTBweDtcXHJcXG4gIHJpZ2h0OiAyNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZW1wdHktbWVzc2FnZSB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIG1hcmdpbjogMzBweCAwO1xcclxcbiAgZm9udC1zaXplOiAxMnB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICBjb2xvcjogdmFyKC0tZGFya0dyYXlpc2hCbHVlKTtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMzc1cHgpIHtcXHJcXG4gIC5wcmljZS1zZWN0aW9uIHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIGdyaWQtY29sdW1uOiBzcGFuIDI7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY2FydC1zZWN0aW9uIHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMmZyO1xcclxcbiAgICBoZWlnaHQ6IDEwMHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLmFkZC1pdGVtLXNlY3Rpb24ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNhcnQtYnRuLXdyYXBwZXIge1xcclxcbiAgICBtYXJnaW46IDMwcHggMDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5taW51cy1pY29uIHtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IDRweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jYXJ0LWNvdW50IHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1vcmFuZ2UpO1xcclxcbiAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xcclxcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXHJcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICAgIHdpZHRoOiAyMHB4O1xcclxcbiAgICBoZWlnaHQ6IDE1cHg7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICByaWdodDogNDVweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jYXJ0LWJveCB7XFxyXFxuICAgIHRvcDogNS42MjVyZW07XFxyXFxuICAgIHdpZHRoOiAyMiU7XFxyXFxuICAgIHJpZ2h0OiA1LjYyNXJlbTtcXHJcXG4gICAgYm94LXNoYWRvdzogMCAxNXB4IDI1cHggLTVweCByZ2IoMTU1LCAxNTUsIDE1NSk7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuYmctY2FydC1ib3gge1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0MywgMjQ3LCAyNDgsIDApO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL2NhcnQuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsVUFBVTtFQUNWLDhCQUE4QjtFQUM5QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLGlCQUFpQjtFQUNqQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSw2QkFBNkI7RUFDN0IsaUJBQWlCO0VBQ2pCLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCwrQkFBK0I7RUFDL0IsWUFBWTtFQUNaLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsd0JBQXdCO0VBQ3hCLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZUFBZTtFQUNmLE1BQU07RUFDTixPQUFPO0VBQ1AsV0FBVztFQUNYLFNBQVM7RUFDVCxtQ0FBbUM7RUFDbkMsVUFBVTtFQUNWLHVCQUF1QjtFQUN2QixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVix1Q0FBdUM7QUFDekM7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsU0FBUztFQUNULG1CQUFtQjtFQUNuQixVQUFVO0VBQ1YsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsMENBQTBDO0VBQzFDLGFBQWE7QUFDZjs7QUFFQTs7RUFFRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQiwrQkFBK0I7RUFDL0IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFO0lBQ0UsY0FBYztJQUNkLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsYUFBYTtFQUNmOztFQUVBO0lBQ0UsYUFBYTtJQUNiLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsK0JBQStCO0lBQy9CLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sV0FBVztFQUNiOztFQUVBO0lBQ0UsYUFBYTtJQUNiLFVBQVU7SUFDVixlQUFlO0lBQ2YsK0NBQStDO0VBQ2pEOztFQUVBO0lBQ0UseUJBQXlCO0lBQ3pCLHdDQUF3QztFQUMxQztBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5wcmljZS1zZWN0aW9uIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJpY2Utc2VjdGlvbiA+IGRpdiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgd2lkdGg6IDQwJTtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5wcmljZSB7XFxyXFxuICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJpY2UgKyBzcGFuIHtcXHJcXG4gIGNvbG9yOiB2YXIoLS1vcmFuZ2UpO1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICBmb250LXNpemU6IDAuOXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnByaWNlLXNlY3Rpb24gPiBzcGFuIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcclxcbiAgZm9udC1zaXplOiAwLjlyZW07XFxyXFxuICBjb2xvcjogdmFyKC0tZGFya0dyYXlpc2hCbHVlKTtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZC1pdGVtLXNlY3Rpb24ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIHBhZGRpbmc6IDAgMXJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gIG1hcmdpbjogMnJlbSAwO1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tb3JhbmdlKTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGhlaWdodDogMi41cmVtO1xcclxcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcclxcbiAgY29sb3I6IHZhcigtLXBhbGVPcmFuZ2UpO1xcclxcbiAgZm9udC1mYW1pbHk6IHZhcigtLWt1bWJoU2Fucyk7XFxyXFxufVxcclxcblxcclxcbi5jYXJ0LWJ0bi13cmFwcGVyIHtcXHJcXG4gIG1hcmdpbjogMCAwIDgwcHg7XFxyXFxufVxcclxcblxcclxcbi5hZGQtdG8tY2FydC1idG4ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZC10by1jYXJ0LWJ0biBzdmcge1xcclxcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkLXRvLWNhcnQtYnRuIHAge1xcclxcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5iZy1jYXJ0LWJveCB7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBib3R0b206IDA7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibGFja0ZhZGVkKTtcXHJcXG4gIHotaW5kZXg6IDU7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxyXFxuICBvcGFjaXR5OiAwO1xcclxcbiAgdHJhbnNpdGlvbjogdmlzaWJpbGl0eSAwcywgb3BhY2l0eSAwLjVzO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FydC1ib3gge1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgdG9wOiA1NXB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIHdpZHRoOiA5NSU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XFxyXFxufVxcclxcblxcclxcbi5jYXJ0LWJveCBoNCB7XFxyXFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0tYmxhY2tGYWRlZCk7XFxyXFxuICBwYWRkaW5nOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uaW5uZXItY2FydC1ib3gsXFxyXFxuLmlubmVyLWNhcnQtYm94ICsgZGl2IHtcXHJcXG4gIHBhZGRpbmc6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5jYXJkLWRldGFpbCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGZvbnQtc2l6ZTogMC45MXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2R1Y3QtdGh1bWJuYWlsICsgZGl2IHtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZC1kZXRhaWwgPiBkaXY6Zmlyc3QtY2hpbGQge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5wcm9kdWN0LXRodW1ibmFpbCB7XFxyXFxuICB3aWR0aDogNDBweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2R1Y3QtZGVsZXRlLXdyYXBwZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmNoZWNrb3V0LWNhcnQtYWN0aXZlIHtcXHJcXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XFxyXFxuICBvcGFjaXR5OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FydC1kaXYge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FydC1jb3VudCB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1vcmFuZ2UpO1xcclxcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcXHJcXG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC1zaXplOiAxMnB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgd2lkdGg6IDIwcHg7XFxyXFxuICBoZWlnaHQ6IDE1cHg7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICB0b3A6IC0xMHB4O1xcclxcbiAgcmlnaHQ6IDI1cHg7XFxyXFxufVxcclxcblxcclxcbi5lbXB0eS1tZXNzYWdlIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgbWFyZ2luOiAzMHB4IDA7XFxyXFxuICBmb250LXNpemU6IDEycHg7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIGNvbG9yOiB2YXIoLS1kYXJrR3JheWlzaEJsdWUpO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzNzVweCkge1xcclxcbiAgLnByaWNlLXNlY3Rpb24ge1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgZ3JpZC1jb2x1bW46IHNwYW4gMjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jYXJ0LXNlY3Rpb24ge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyZnI7XFxyXFxuICAgIGhlaWdodDogMTAwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuYWRkLWl0ZW0tc2VjdGlvbiB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY2FydC1idG4td3JhcHBlciB7XFxyXFxuICAgIG1hcmdpbjogMzBweCAwO1xcclxcbiAgfVxcclxcblxcclxcbiAgLm1pbnVzLWljb24ge1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogNHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNhcnQtY291bnQge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW9yYW5nZSk7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcclxcbiAgICBmb250LXNpemU6IDEycHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gICAgd2lkdGg6IDIwcHg7XFxyXFxuICAgIGhlaWdodDogMTVweDtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIHJpZ2h0OiA0NXB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNhcnQtYm94IHtcXHJcXG4gICAgdG9wOiA1LjYyNXJlbTtcXHJcXG4gICAgd2lkdGg6IDIyJTtcXHJcXG4gICAgcmlnaHQ6IDUuNjI1cmVtO1xcclxcbiAgICBib3gtc2hhZG93OiAwIDE1cHggMjVweCAtNXB4IHJnYigxNTUsIDE1NSwgMTU1KTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5iZy1jYXJ0LWJveCB7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQzLCAyNDcsIDI0OCwgMCk7XFxyXFxuICB9XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5oZWFkbGluZSxcXHJcXG4uY2FydC1zZWN0aW9uIHtcXHJcXG4gIHBhZGRpbmc6IDIuNXJlbSAxLjJyZW0gMDtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRsaW5lID4gaDEge1xcclxcbiAgY29sb3I6IHZhcigtLW9yYW5nZSk7XFxyXFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcclxcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gIGxldHRlci1zcGFjaW5nOiAycHg7XFxyXFxufVxcclxcblxcclxcbi5oZWFkbGluZSA+IGgyIHtcXHJcXG4gIG1hcmdpbjogMC41cmVtIDA7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIGNvbG9yOiB2YXIoLS1ibGFjayk7XFxyXFxufVxcclxcblxcclxcbi5oZWFkbGluZSA+IHAge1xcclxcbiAgbGluZS1oZWlnaHQ6IDEuNHJlbTtcXHJcXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xcclxcbiAgY29sb3I6IHZhcigtLXZlcnlWYXJrQmx1ZSk7XFxyXFxufVxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3MvaGVhZGxpbmUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOztFQUVFLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLDBCQUEwQjtBQUM1QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuaGVhZGxpbmUsXFxyXFxuLmNhcnQtc2VjdGlvbiB7XFxyXFxuICBwYWRkaW5nOiAyLjVyZW0gMS4ycmVtIDA7XFxyXFxufVxcclxcblxcclxcbi5oZWFkbGluZSA+IGgxIHtcXHJcXG4gIGNvbG9yOiB2YXIoLS1vcmFuZ2UpO1xcclxcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXHJcXG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICBsZXR0ZXItc3BhY2luZzogMnB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGxpbmUgPiBoMiB7XFxyXFxuICBtYXJnaW46IDAuNXJlbSAwO1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICBjb2xvcjogdmFyKC0tYmxhY2spO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGxpbmUgPiBwIHtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxLjRyZW07XFxyXFxuICBmb250LXNpemU6IDAuOXJlbTtcXHJcXG4gIGNvbG9yOiB2YXIoLS12ZXJ5VmFya0JsdWUpO1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBjb2xvcnMgKi9cXHJcXG46cm9vdCB7XFxyXFxuICAtLW1vYmlsZTogMzc1cHg7XFxyXFxuICAtLWRlc2t0b3A6IDE0NDBweDtcXHJcXG4gIC0tb3JhbmdlOiBoc2woMjYsIDEwMCUsIDU1JSk7XFxyXFxuICAtLXBhbGVPcmFuZ2U6IGhzbCgyNSwgMTAwJSwgOTQlKTtcXHJcXG4gIC0tdmVyeVZhcmtCbHVlOiBoc2woMjIwLCAxMyUsIDEzJSk7XFxyXFxuICAtLWRhcmtHcmF5aXNoQmx1ZTogaHNsKDIxOSwgOSUsIDQ1JSk7XFxyXFxuICAtLWdyYXlpc2hCbHVlOiBoc2woMjIwLCAxNCUsIDc1JSk7XFxyXFxuICAtLWxpZ2h0R3JheWlzaEJsdWU6IGhzbCgyMjMsIDY0JSwgOTglKTtcXHJcXG4gIC0td2hpdGU6IGhzbCgwLCAwJSwgMTAwJSk7XFxyXFxuICAtLXdoaXRlRmFkZWQ6IGhzbGEoMCwgMCUsIDEwMCUsIDAuNTkpO1xcclxcbiAgLS1ibGFja0ZhZGVkOiBoc2xhKDAsIDAlLCAwJSwgMC4yNTMpO1xcclxcbiAgLS1ibGFjazogaHNsKDAsIDAlLCAwJSk7XFxyXFxuICAtLWt1bWJoU2FuczogJ0t1bWJoIFNhbnMnLCBzYW5zLXNlcmlmO1xcclxcbiAgLS1mb250U2l6ZTogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBmb250LWZhbWlseTogdmFyKC0ta3VtYmhTYW5zKTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdmJhciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDFyZW07XFxyXFxuICBoZWlnaHQ6IDMuNHJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdmJhciBkaXYge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1rdW1iaFNhbnMpO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2YmFyIHN2ZyB7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5jYXJ0LWRpdiA+IGltZyB7XFxyXFxuICB3aWR0aDogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmltZy1jb3Vyb3NhbCB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmF0dHJpYnV0aW9uIHtcXHJcXG4gIGZvbnQtc2l6ZTogMTFweDtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5hdHRyaWJ1dGlvbiBhIHtcXHJcXG4gIGNvbG9yOiBoc2woMjI4LCA0NSUsIDQ0JSk7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDM3NXB4KSB7XFxyXFxuICBib2R5IHtcXHJcXG4gICAgcGFkZGluZzogMCAxMyU7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXHJcXG5cXHJcXG4gICAgLyogZ3JpZC10ZW1wbGF0ZS1yb3dzOiA5cmVtIHJlcGVhdCgyLCAxZnIpOyAqL1xcclxcbiAgICBjb2x1bW4tZ2FwOiAxcmVtO1xcclxcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5uYXZiYXIge1xcclxcbiAgICBtaW4taGVpZ2h0OiA2cmVtICFpbXBvcnRhbnQ7XFxyXFxuICAgIGdyaWQtY29sdW1uOiBzcGFuIDI7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1ncmF5aXNoQmx1ZSk7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDVyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuaGVhZGxpbmUge1xcclxcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmhlYWRsaW5lID4gcCB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDEuNXJlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jYXJ0LWRpdiA+IGltZyB7XFxyXFxuICAgIHdpZHRoOiA0MHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLmxvZ28ge1xcclxcbiAgICB3aWR0aDogMTI4cHg7XFxyXFxuICB9XFxyXFxufVxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3MvaW5kZXguY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixzQkFBc0I7QUFDeEI7O0FBRUEsV0FBVztBQUNYO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQiw0QkFBNEI7RUFDNUIsZ0NBQWdDO0VBQ2hDLGtDQUFrQztFQUNsQyxvQ0FBb0M7RUFDcEMsaUNBQWlDO0VBQ2pDLHNDQUFzQztFQUN0Qyx5QkFBeUI7RUFDekIscUNBQXFDO0VBQ3JDLG9DQUFvQztFQUNwQyx1QkFBdUI7RUFDdkIscUNBQXFDO0VBQ3JDLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRTtJQUNFLGNBQWM7SUFDZCxhQUFhO0lBQ2IsOEJBQThCOztJQUU5Qiw2Q0FBNkM7SUFDN0MsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLDJCQUEyQjtJQUMzQixtQkFBbUI7SUFDbkIsVUFBVTtJQUNWLDJDQUEyQztJQUMzQyxtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxXQUFXO0VBQ2I7O0VBRUE7SUFDRSxZQUFZO0VBQ2Q7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBjb2xvcnMgKi9cXHJcXG46cm9vdCB7XFxyXFxuICAtLW1vYmlsZTogMzc1cHg7XFxyXFxuICAtLWRlc2t0b3A6IDE0NDBweDtcXHJcXG4gIC0tb3JhbmdlOiBoc2woMjYsIDEwMCUsIDU1JSk7XFxyXFxuICAtLXBhbGVPcmFuZ2U6IGhzbCgyNSwgMTAwJSwgOTQlKTtcXHJcXG4gIC0tdmVyeVZhcmtCbHVlOiBoc2woMjIwLCAxMyUsIDEzJSk7XFxyXFxuICAtLWRhcmtHcmF5aXNoQmx1ZTogaHNsKDIxOSwgOSUsIDQ1JSk7XFxyXFxuICAtLWdyYXlpc2hCbHVlOiBoc2woMjIwLCAxNCUsIDc1JSk7XFxyXFxuICAtLWxpZ2h0R3JheWlzaEJsdWU6IGhzbCgyMjMsIDY0JSwgOTglKTtcXHJcXG4gIC0td2hpdGU6IGhzbCgwLCAwJSwgMTAwJSk7XFxyXFxuICAtLXdoaXRlRmFkZWQ6IGhzbGEoMCwgMCUsIDEwMCUsIDAuNTkpO1xcclxcbiAgLS1ibGFja0ZhZGVkOiBoc2xhKDAsIDAlLCAwJSwgMC4yNTMpO1xcclxcbiAgLS1ibGFjazogaHNsKDAsIDAlLCAwJSk7XFxyXFxuICAtLWt1bWJoU2FuczogJ0t1bWJoIFNhbnMnLCBzYW5zLXNlcmlmO1xcclxcbiAgLS1mb250U2l6ZTogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBmb250LWZhbWlseTogdmFyKC0ta3VtYmhTYW5zKTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdmJhciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDFyZW07XFxyXFxuICBoZWlnaHQ6IDMuNHJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdmJhciBkaXYge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1rdW1iaFNhbnMpO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2YmFyIHN2ZyB7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5jYXJ0LWRpdiA+IGltZyB7XFxyXFxuICB3aWR0aDogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmltZy1jb3Vyb3NhbCB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmF0dHJpYnV0aW9uIHtcXHJcXG4gIGZvbnQtc2l6ZTogMTFweDtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5hdHRyaWJ1dGlvbiBhIHtcXHJcXG4gIGNvbG9yOiBoc2woMjI4LCA0NSUsIDQ0JSk7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDM3NXB4KSB7XFxyXFxuICBib2R5IHtcXHJcXG4gICAgcGFkZGluZzogMCAxMyU7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXHJcXG5cXHJcXG4gICAgLyogZ3JpZC10ZW1wbGF0ZS1yb3dzOiA5cmVtIHJlcGVhdCgyLCAxZnIpOyAqL1xcclxcbiAgICBjb2x1bW4tZ2FwOiAxcmVtO1xcclxcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5uYXZiYXIge1xcclxcbiAgICBtaW4taGVpZ2h0OiA2cmVtICFpbXBvcnRhbnQ7XFxyXFxuICAgIGdyaWQtY29sdW1uOiBzcGFuIDI7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1ncmF5aXNoQmx1ZSk7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDVyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuaGVhZGxpbmUge1xcclxcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmhlYWRsaW5lID4gcCB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDEuNXJlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jYXJ0LWRpdiA+IGltZyB7XFxyXFxuICAgIHdpZHRoOiA0MHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLmxvZ28ge1xcclxcbiAgICB3aWR0aDogMTI4cHg7XFxyXFxuICB9XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY1MXB4KSB7XFxyXFxuICAubWVudS1jb250YWluZXIge1xcclxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICAgIHdpZHRoOiAwO1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIGJvdHRvbTogMDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xcclxcbiAgICB6LWluZGV4OiA1O1xcclxcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XFxyXFxuICAgIHRyYW5zaXRpb246IDAuNXM7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubWVudS1jb250YWluZXIgbGkge1xcclxcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmxvZ28ge1xcclxcbiAgICB3aWR0aDogMTAwcHg7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5tZW51LWNvbnRhaW5lciBsaSB7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudS1jb250YWluZXIgYSB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICBjb2xvcjogdmFyKC0tYmxhY2spO1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcblxcclxcbi5tZW51LWNvbnRhaW5lciBhOmhvdmVyIHtcXHJcXG4gIGNvbG9yOiB2YXIoLS12ZXJ5VmFya0JsdWUpO1xcclxcbn1cXHJcXG5cXHJcXG4uY2xvc2Uge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2NTBweCkge1xcclxcbiAgLmhhbWJ1cmdlciB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubWVudS1jb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBtYXJnaW46IDAgMS41cmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgLm1lbnUtY29udGFpbmVyIGxpIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZm9udC1zaXplOiAwLjg1cmVtO1xcclxcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLm1lbnUtY29udGFpbmVyIGEge1xcclxcbiAgICBjb2xvcjogdmFyKC0tZGFya0dyYXlpc2hCbHVlKTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubWVudS1jb250YWluZXIgYTpob3ZlciB7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1ibGFjayk7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL3NpZGViYXIuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0U7SUFDRSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLFFBQVE7SUFDUixNQUFNO0lBQ04sT0FBTztJQUNQLFNBQVM7SUFDVCw4QkFBOEI7SUFDOUIsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxZQUFZO0VBQ2Q7QUFDRjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixtQkFBbUI7RUFDbkIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7QUFDWDs7QUFFQTtFQUNFO0lBQ0UsYUFBYTtFQUNmOztFQUVBO0lBQ0UsYUFBYTtJQUNiLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLDZCQUE2QjtJQUM3QixpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxtQkFBbUI7SUFDbkIsaUJBQWlCO0VBQ25CO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjUxcHgpIHtcXHJcXG4gIC5tZW51LWNvbnRhaW5lciB7XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gICAgd2lkdGg6IDA7XFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgbGVmdDogMDtcXHJcXG4gICAgYm90dG9tOiAwO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XFxyXFxuICAgIHotaW5kZXg6IDU7XFxyXFxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcXHJcXG4gICAgdHJhbnNpdGlvbjogMC41cztcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5tZW51LWNvbnRhaW5lciBsaSB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDFyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubG9nbyB7XFxyXFxuICAgIHdpZHRoOiAxMDBweDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUtY29udGFpbmVyIGxpIHtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5tZW51LWNvbnRhaW5lciBhIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIGNvbG9yOiB2YXIoLS1ibGFjayk7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUtY29udGFpbmVyIGE6aG92ZXIge1xcclxcbiAgY29sb3I6IHZhcigtLXZlcnlWYXJrQmx1ZSk7XFxyXFxufVxcclxcblxcclxcbi5jbG9zZSB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDY1MHB4KSB7XFxyXFxuICAuaGFtYnVyZ2VyIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5tZW51LWNvbnRhaW5lciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIG1hcmdpbjogMCAxLjVyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubWVudS1jb250YWluZXIgbGkge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBmb250LXNpemU6IDAuODVyZW07XFxyXFxuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubWVudS1jb250YWluZXIgYSB7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1kYXJrR3JheWlzaEJsdWUpO1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5tZW51LWNvbnRhaW5lciBhOmhvdmVyIHtcXHJcXG4gICAgY29sb3I6IHZhcigtLWJsYWNrKTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICB9XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5zbGlkZXNob3ctY29udGFpbmVyIHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIGhlaWdodDogMzQwcHg7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG4ubXlzbGlkZSB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uY2lyY2xlIHtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcXHJcXG4gIHdpZHRoOiAzMHB4O1xcclxcbiAgaGVpZ2h0OiAzMHB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIHRyYW5zaXRpb246IDAuNnMgZWFzZTtcXHJcXG59XFxyXFxuXFxyXFxuLnByZXYsXFxyXFxuLm5leHQge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmNpcmNsZS1wcmV2IHtcXHJcXG4gIGxlZnQ6IDEwcHg7XFxyXFxuICB0b3A6IDQ3JTtcXHJcXG59XFxyXFxuXFxyXFxuLmNpcmNsZS1uZXh0IHtcXHJcXG4gIHJpZ2h0OiAxMHB4O1xcclxcbiAgdG9wOiA0NyU7XFxyXFxufVxcclxcblxcclxcbi5jaXJjbGUtcHJldjpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZUZhZGVkKTtcXHJcXG59XFxyXFxuXFxyXFxuLmNpcmNsZS1uZXh0OmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlRmFkZWQpO1xcclxcbn1cXHJcXG5cXHJcXG4uZmFkZSB7XFxyXFxuICBhbmltYXRpb24tbmFtZTogZmFkZTtcXHJcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMS41cztcXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBmYWRlIHtcXHJcXG4gIGZyb20geyBvcGFjaXR5OiAwLjQ7IH1cXHJcXG4gIHRvIHsgb3BhY2l0eTogMTsgfVxcclxcbn1cXHJcXG5cXHJcXG4udGh1bWJuYWlsLWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzNzVweCkge1xcclxcbiAgLmltYWdlLXNsaWRlLXdyYXBwZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5zbGlkZXNob3ctY29udGFpbmVyIHtcXHJcXG4gICAgZ3JpZC1yb3c6IDIgLyAzO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcclxcbiAgICB3aWR0aDogODAlO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnRodW1ibmFpbC1jb250YWluZXIge1xcclxcbiAgICB3aWR0aDogODAlO1xcclxcbiAgICBoZWlnaHQ6IDg1cHg7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDEwcmVtO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBnYXA6IDEwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubXlUaHVtYm5haWxzIHtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgfVxcclxcblxcclxcbiAgLyogLm15VGh1bWJuYWlsczpob3ZlciB7XFxyXFxuICAgIG9wYWNpdHk6IDAuNjtcXHJcXG4gIH0gKi9cXHJcXG5cXHJcXG4gIC5teVRodW1ibmFpbHM6Zm9jdXMge1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1vcmFuZ2UpO1xcclxcbiAgICBvdXRsaW5lOiAxcHggc29saWQgdmFyKC0tb3JhbmdlKTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5mYWRlZC10aHVtYm5haWwtYmcge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmZhZGVkLXRodW1ibmFpbC1iZy1mb2N1cyB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41NTkpO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubXlUaHVtYm5haWxzIGltZyB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcblxcclxcbiAgICAvKiBoZWlnaHQ6IDEwMCU7ICovXFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY2lyY2xlIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5zbGlkZS1wb3AtYmcge1xcclxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgbGVmdDogMDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGJvdHRvbTogMDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3Nik7XFxyXFxuICAgIHotaW5kZXg6IDU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxyXFxuICAgIG9wYWNpdHk6IDA7XFxyXFxuICAgIHRyYW5zaXRpb246IHZpc2liaWxpdHkgMHMsIG9wYWNpdHkgMC41cztcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5pbm5lci1zbGlkZSB7XFxyXFxuICAgIHdpZHRoOiAzMCU7XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAgIGhlaWdodDogMzkwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuaW5uZXItc2xpZGUgaW1nIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAucG9wLXRodW1ibmFpbCB7XFxyXFxuICAgIHdpZHRoOiAyNSU7XFxyXFxuICAgIGhlaWdodDogNzRweDtcXHJcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZ2FwOiAxMHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLnBvcC1jbG9zZSB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOiA0MHB4O1xcclxcbiAgICBsZWZ0OiA2My41JTtcXHJcXG4gICAgd2lkdGg6IDE5cHg7XFxyXFxuICAgIGZpbGw6IHZhcigtLXdoaXRlKTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnBvcHVwLWNpcmNsZS1uZXh0LFxcclxcbiAgLnBvcHVwLWNpcmNsZS1wcmV2IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgd2lkdGg6IDQwcHg7XFxyXFxuICAgIGhlaWdodDogNDBweDtcXHJcXG4gICAgdG9wOiAxNXJlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5wb3B1cC1jaXJjbGUtbmV4dCB7XFxyXFxuICAgIHJpZ2h0OiAyOHJlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5wb3B1cC1jaXJjbGUtcHJldiB7XFxyXFxuICAgIGxlZnQ6IDI4cmVtO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL3NsaWRlc2hvdy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsOEJBQThCO0VBQzlCLFdBQVc7RUFDWCxZQUFZO0VBQ1osYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLHFCQUFxQjtBQUN2Qjs7QUFFQTs7RUFFRSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsUUFBUTtBQUNWOztBQUVBO0VBQ0UsbUNBQW1DO0FBQ3JDOztBQUVBO0VBQ0UsbUNBQW1DO0FBQ3JDOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLE9BQU8sWUFBWSxFQUFFO0VBQ3JCLEtBQUssVUFBVSxFQUFFO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0U7SUFDRSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixVQUFVO0VBQ1o7O0VBRUE7SUFDRSxVQUFVO0lBQ1YsWUFBWTtJQUNaLG9CQUFvQjtJQUNwQixhQUFhO0lBQ2IsU0FBUztFQUNYOztFQUVBO0lBQ0UsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0VBQ3BCOztFQUVBOztLQUVHOztFQUVIO0lBQ0UsK0JBQStCO0lBQy9CLGdDQUFnQztFQUNsQzs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixXQUFXO0VBQ2I7O0VBRUE7SUFDRSw0Q0FBNEM7SUFDNUMsWUFBWTtFQUNkOztFQUVBO0lBQ0UsV0FBVzs7SUFFWCxrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxlQUFlO0lBQ2YsTUFBTTtJQUNOLE9BQU87SUFDUCxXQUFXO0lBQ1gsU0FBUztJQUNULHNDQUFzQztJQUN0QyxVQUFVO0lBQ1YsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsdUNBQXVDO0VBQ3pDOztFQUVBO0lBQ0UsVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsYUFBYTtFQUNmOztFQUVBO0lBQ0UsV0FBVztFQUNiOztFQUVBO0lBQ0UsVUFBVTtJQUNWLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLFNBQVM7RUFDWDs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsV0FBVztJQUNYLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsZUFBZTtFQUNqQjs7RUFFQTs7SUFFRSxhQUFhO0lBQ2IsV0FBVztJQUNYLFlBQVk7SUFDWixVQUFVO0VBQ1o7O0VBRUE7SUFDRSxZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxXQUFXO0VBQ2I7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuc2xpZGVzaG93LWNvbnRhaW5lciB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBoZWlnaHQ6IDM0MHB4O1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxuLm15c2xpZGUge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmNpcmNsZSB7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XFxyXFxuICB3aWR0aDogMzBweDtcXHJcXG4gIGhlaWdodDogMzBweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICB0cmFuc2l0aW9uOiAwLjZzIGVhc2U7XFxyXFxufVxcclxcblxcclxcbi5wcmV2LFxcclxcbi5uZXh0IHtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5jaXJjbGUtcHJldiB7XFxyXFxuICBsZWZ0OiAxMHB4O1xcclxcbiAgdG9wOiA0NyU7XFxyXFxufVxcclxcblxcclxcbi5jaXJjbGUtbmV4dCB7XFxyXFxuICByaWdodDogMTBweDtcXHJcXG4gIHRvcDogNDclO1xcclxcbn1cXHJcXG5cXHJcXG4uY2lyY2xlLXByZXY6aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGVGYWRlZCk7XFxyXFxufVxcclxcblxcclxcbi5jaXJjbGUtbmV4dDpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZUZhZGVkKTtcXHJcXG59XFxyXFxuXFxyXFxuLmZhZGUge1xcclxcbiAgYW5pbWF0aW9uLW5hbWU6IGZhZGU7XFxyXFxuICBhbmltYXRpb24tZHVyYXRpb246IDEuNXM7XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgZmFkZSB7XFxyXFxuICBmcm9tIHsgb3BhY2l0eTogMC40OyB9XFxyXFxuICB0byB7IG9wYWNpdHk6IDE7IH1cXHJcXG59XFxyXFxuXFxyXFxuLnRodW1ibmFpbC1jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMzc1cHgpIHtcXHJcXG4gIC5pbWFnZS1zbGlkZS13cmFwcGVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuc2xpZGVzaG93LWNvbnRhaW5lciB7XFxyXFxuICAgIGdyaWQtcm93OiAyIC8gMztcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXHJcXG4gICAgd2lkdGg6IDgwJTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC50aHVtYm5haWwtY29udGFpbmVyIHtcXHJcXG4gICAgd2lkdGg6IDgwJTtcXHJcXG4gICAgaGVpZ2h0OiA4NXB4O1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxMHJlbTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZ2FwOiAxMHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLm15VGh1bWJuYWlscyB7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC8qIC5teVRodW1ibmFpbHM6aG92ZXIge1xcclxcbiAgICBvcGFjaXR5OiAwLjY7XFxyXFxuICB9ICovXFxyXFxuXFxyXFxuICAubXlUaHVtYm5haWxzOmZvY3VzIHtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tb3JhbmdlKTtcXHJcXG4gICAgb3V0bGluZTogMXB4IHNvbGlkIHZhcigtLW9yYW5nZSk7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuZmFkZWQtdGh1bWJuYWlsLWJnIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5mYWRlZC10aHVtYm5haWwtYmctZm9jdXMge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNTU5KTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgfVxcclxcblxcclxcbiAgLm15VGh1bWJuYWlscyBpbWcge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG5cXHJcXG4gICAgLyogaGVpZ2h0OiAxMDAlOyAqL1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNpcmNsZSB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuc2xpZGUtcG9wLWJnIHtcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBib3R0b206IDA7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44NzYpO1xcclxcbiAgICB6LWluZGV4OiA1O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcclxcbiAgICBvcGFjaXR5OiAwO1xcclxcbiAgICB0cmFuc2l0aW9uOiB2aXNpYmlsaXR5IDBzLCBvcGFjaXR5IDAuNXM7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuaW5uZXItc2xpZGUge1xcclxcbiAgICB3aWR0aDogMzAlO1xcclxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICBoZWlnaHQ6IDM5MHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLmlubmVyLXNsaWRlIGltZyB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnBvcC10aHVtYm5haWwge1xcclxcbiAgICB3aWR0aDogMjUlO1xcclxcbiAgICBoZWlnaHQ6IDc0cHg7XFxyXFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGdhcDogMTBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5wb3AtY2xvc2Uge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogNDBweDtcXHJcXG4gICAgbGVmdDogNjMuNSU7XFxyXFxuICAgIHdpZHRoOiAxOXB4O1xcclxcbiAgICBmaWxsOiB2YXIoLS13aGl0ZSk7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5wb3B1cC1jaXJjbGUtbmV4dCxcXHJcXG4gIC5wb3B1cC1jaXJjbGUtcHJldiB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIHdpZHRoOiA0MHB4O1xcclxcbiAgICBoZWlnaHQ6IDQwcHg7XFxyXFxuICAgIHRvcDogMTVyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICAucG9wdXAtY2lyY2xlLW5leHQge1xcclxcbiAgICByaWdodDogMjhyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICAucG9wdXAtY2lyY2xlLXByZXYge1xcclxcbiAgICBsZWZ0OiAyOHJlbTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9jYXJ0LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vY2FydC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaGVhZGxpbmUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9oZWFkbGluZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc2lkZWJhci5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3NpZGViYXIuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3NsaWRlc2hvdy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3NsaWRlc2hvdy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLyogXG4oVGhlIE1JVCBMaWNlbnNlKVxuQ29weXJpZ2h0IChjKSAyMDE0LTIwMjEgSGFsw6FzeiDDgWTDoW0gPGFkYW1AYWltZm9ybS5jb20+XG5QZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbiovXG5cbi8vICBVbmlxdWUgSGV4YXRyaWRlY2ltYWwgSUQgR2VuZXJhdG9yXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuLy8gIERlcGVuZGVuY2llc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG52YXIgcGlkID0gdHlwZW9mIHByb2Nlc3MgIT09ICd1bmRlZmluZWQnICYmIHByb2Nlc3MucGlkID8gcHJvY2Vzcy5waWQudG9TdHJpbmcoMzYpIDogJycgO1xudmFyIGFkZHJlc3MgPSAnJztcbmlmKHR5cGVvZiBfX3dlYnBhY2tfcmVxdWlyZV9fICE9PSAnZnVuY3Rpb24nICYmIHR5cGVvZiByZXF1aXJlICE9PSAndW5kZWZpbmVkJyl7XG4gICAgdmFyIG1hYyA9ICcnLCBvcyA9IHJlcXVpcmUoJ29zJyk7IFxuICAgIGlmKG9zLm5ldHdvcmtJbnRlcmZhY2VzKSB2YXIgbmV0d29ya0ludGVyZmFjZXMgPSBvcy5uZXR3b3JrSW50ZXJmYWNlcygpO1xuICAgIGlmKG5ldHdvcmtJbnRlcmZhY2VzKXtcbiAgICAgICAgbG9vcDpcbiAgICAgICAgZm9yKGxldCBpbnRlcmZhY2Vfa2V5IGluIG5ldHdvcmtJbnRlcmZhY2VzKXtcbiAgICAgICAgICAgIGNvbnN0IG5ldHdvcmtJbnRlcmZhY2UgPSBuZXR3b3JrSW50ZXJmYWNlc1tpbnRlcmZhY2Vfa2V5XTtcbiAgICAgICAgICAgIGNvbnN0IGxlbmd0aCA9IG5ldHdvcmtJbnRlcmZhY2UubGVuZ3RoO1xuICAgICAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgICAgICBpZihuZXR3b3JrSW50ZXJmYWNlW2ldICE9PSB1bmRlZmluZWQgJiYgbmV0d29ya0ludGVyZmFjZVtpXS5tYWMgJiYgbmV0d29ya0ludGVyZmFjZVtpXS5tYWMgIT0gJzAwOjAwOjAwOjAwOjAwOjAwJyl7XG4gICAgICAgICAgICAgICAgICAgIG1hYyA9IG5ldHdvcmtJbnRlcmZhY2VbaV0ubWFjOyBicmVhayBsb29wO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBhZGRyZXNzID0gbWFjID8gcGFyc2VJbnQobWFjLnJlcGxhY2UoL1xcOnxcXEQrL2dpLCAnJykpLnRvU3RyaW5nKDM2KSA6ICcnIDtcbiAgICB9XG59IFxuXG4vLyAgRXhwb3J0c1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5tb2R1bGUuZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbihwcmVmaXgsIHN1ZmZpeCl7IHJldHVybiAocHJlZml4ID8gcHJlZml4IDogJycpICsgYWRkcmVzcyArIHBpZCArIG5vdygpLnRvU3RyaW5nKDM2KSArIChzdWZmaXggPyBzdWZmaXggOiAnJyk7IH1cbm1vZHVsZS5leHBvcnRzLnByb2Nlc3MgPSBmdW5jdGlvbihwcmVmaXgsIHN1ZmZpeCl7IHJldHVybiAocHJlZml4ID8gcHJlZml4IDogJycpICsgcGlkICsgbm93KCkudG9TdHJpbmcoMzYpICsgKHN1ZmZpeCA/IHN1ZmZpeCA6ICcnKTsgfVxubW9kdWxlLmV4cG9ydHMudGltZSAgICA9IGZ1bmN0aW9uKHByZWZpeCwgc3VmZml4KXsgcmV0dXJuIChwcmVmaXggPyBwcmVmaXggOiAnJykgKyBub3coKS50b1N0cmluZygzNikgKyAoc3VmZml4ID8gc3VmZml4IDogJycpOyB9XG5cbi8vICBIZWxwZXJzXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbmZ1bmN0aW9uIG5vdygpe1xuICAgIHZhciB0aW1lID0gRGF0ZS5ub3coKTtcbiAgICB2YXIgbGFzdCA9IG5vdy5sYXN0IHx8IHRpbWU7XG4gICAgcmV0dXJuIG5vdy5sYXN0ID0gdGltZSA+IGxhc3QgPyB0aW1lIDogbGFzdCArIDE7XG59XG4iLCJjbGFzcyBDYXJ0IHtcbiAgICBzdGF0aWMgY2FydCA9IFtcblxuICAgIF07XG5cbiAgICBzdGF0aWMgdXBkYXRlUXR5ID0gKHByb2R1Y3QpID0+IHtcbiAgICAgIC8vIGxldCBuZXdQcm9kdWN0ID0gIE9iamVjdC5hc3NpZ24oe30sIHByb2R1Y3QpOyAvL1VwZGF0ZSBxdHkgYnkgYWRkaW5nIG9uZVxuICAgICAgLy8gY29uc29sZS5sb2cobmV3UHJvZHVjdClcbiAgICAgIHByb2R1Y3QucXR5ICs9IDE7XG4gICAgICByZXR1cm4gcHJvZHVjdDtcbiAgICB9XG5cbiAgICBzdGF0aWMgYWRkVG9DYXJ0ID0gKHByb2R1Y3QpID0+IHtcbiAgICAgIGNvbnN0IGluZGV4ID0gQ2FydC5jYXJ0LmZpbmRJbmRleCgocHJvZCkgPT4gcHJvZHVjdC5pZCA9PT0gcHJvZC5pZCk7XG4gICAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICAgIENhcnQuY2FydCA9IFsuLi5DYXJ0LmNhcnQsIENhcnQudXBkYXRlUXR5KHByb2R1Y3QpXTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgc3RhdGljIHJlbW92ZVByb2R1Y3QgPSAocHJvZHVjdCkgPT4ge1xuICAgICAgQ2FydC5jYXJ0ID0gQ2FydC5jYXJ0LmZpbHRlcigocHJvZCkgPT4gcHJvZC5pZCAhPT0gcHJvZHVjdC5pZCk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDYXJ0OyIsImltcG9ydCAnLi4vY3NzL3NpZGViYXIuY3NzJztcbmltcG9ydCBjbG9zZUljb24gZnJvbSAnLi4vaW1hZ2VzL2ljb24tY2xvc2Uuc3ZnJztcbmltcG9ydCBkZWxldGVJY29uIGZyb20gJy4uL2ltYWdlcy9pY29uLWRlbGV0ZS5zdmcnO1xuXG5jb25zdCBpbnNlcnRDbG9zZUljb24gPSAobG9jYXRpb24pID0+IHtcbiAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIGltZy5zcmMgPSBjbG9zZUljb247XG4gIGxvY2F0aW9uLmFwcGVuZENoaWxkKGltZyk7XG4gIHJldHVybiBpbWc7XG59O1xuXG5jb25zdCBpbnNlcnRDYXJ0Q2FyZCA9ICh7XG4gIGltYWdlcywgcHJvZHVjdE5hbWUsIHF0eSwgcHJpY2UsIGlkLFxufSkgPT4ge1xuICBjb25zdCBwcm9kdWN0VGh1bW5haWwgPSBpbWFnZXMuaW1hZ2UxLmltYWdlVGh1bW5haWw7XG5cbiAgY29uc3QgY2FydENhcmQgPSBgXG4gICAgPGRpdiBjbGFzcz1cImNhcnQtY2FyZFwiIGlkPVwiJHtpZH1cIj5cbiAgICA8ZGl2IGNsYXNzPVwiY2FyZC1kZXRhaWxcIj5cbiAgICAgPGRpdj5cbiAgICAgICAgPGltZyBjbGFzcz1cInByb2R1Y3QtdGh1bWJuYWlsXCIgc3JjPVwiJHtwcm9kdWN0VGh1bW5haWx9XCIgYWx0PVwicHJvZHVjdC10aHVtYm5haWxcIj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicHJvZHVjdC1uYW1lXCI+JHtwcm9kdWN0TmFtZX08L3NwYW4+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicHJvZHVjdC1hbW91bnRcIj4kJHtwcmljZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4+eDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInByb2R1Y3QtcXR5XCI+JHtxdHl9PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuPj08L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJwcm9kdWN0LXRvdGFsXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+JCR7cXR5ICogcHJpY2V9PC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPSdwcm9kdWN0LWRlbGV0ZS13cmFwcGVyJz5cbiAgICAgICAgPGltZyBjbGFzcz1cInByb2R1Y3QtZGVsZXRlXCIgc3JjPVwiJHtkZWxldGVJY29ufVwiIGFsdD1cImRlbGV0ZS1pY29uXCI+XG4gICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PiAgICAgICAgIFxuICA8L2Rpdj5gO1xuXG4gIGNvbnN0IGlubmVyQ2FydEJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbm5lci1jYXJ0LWJveCcpO1xuICBpbm5lckNhcnRCb3guaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCBjYXJ0Q2FyZCk7XG59O1xuXG5jb25zdCBzbGlkZUNhcmQgPSAoaW1hZ2UsIGxvY2F0aW9uLCBjbGFzc05hbSkgPT4ge1xuICBjb25zdCBzbGlkZXMgPSBgPGRpdiBjbGFzcz1cIiR7Y2xhc3NOYW19IGZhZGVcIj5cbiAgICA8aW1nIGNsYXNzPVwiaW1nLWNvdXJvc2FsXCIgc3JjPVwiJHtpbWFnZX1cIiBhbHQ9XCJpbWctY291cm9zYWxcIj5cbiAgPC9kaXY+YDtcbiAgbG9jYXRpb24uaW5zZXJ0QWRqYWNlbnRIVE1MKCdhZnRlcmJlZ2luJywgc2xpZGVzKTtcbn07XG5cbmNvbnN0IGRpc3BsYXlTbGlkZUNhcmQgPSAobG9jYXRpb24sIGNsYXNzTmFtLCBpbWFnZUFycikgPT4ge1xuICBpbWFnZUFyci5mb3JFYWNoKChpbWFnZSkgPT4ge1xuICAgIHNsaWRlQ2FyZChpbWFnZSwgbG9jYXRpb24sIGNsYXNzTmFtKTtcbiAgfSk7XG59O1xuXG5jb25zdCBjcmVhdGVQcmV2SWNvbiA9IChsb2NhdGlvbiwgY2xhc3NOYW0pID0+IHtcbiAgbG9jYXRpb24uaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLFxuICAgIGA8ZGl2IGNsYXNzPVwiY2lyY2xlICR7Y2xhc3NOYW19XCI+XG4gICAgICAgIDxhIGNsYXNzPVwicHJldlwiPiYjMTAwOTQ7PC9hPlxuICAgPC9kaXY+XG4gICBgKTtcbn07XG5cbmNvbnN0IGNyZWF0ZU5leHRJY29uID0gKGxvY2F0aW9uLCBjbGFzc05hbSkgPT4ge1xuICBsb2NhdGlvbi5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsXG4gICAgYCA8ZGl2IGNsYXNzPVwiY2lyY2xlICR7Y2xhc3NOYW19XCI+XG4gICAgICAgIDxhIGNsYXNzPVwibmV4dFwiPiYjMTAwOTU7PC9hPlxuICAgICAgPC9kaXY+YCk7XG59O1xuXG5jb25zdCBjcmVhdGVUaHVtYm5haWxFbCA9IChpbWFnZSwgaWQpID0+IHtcbiAgY29uc3Qgc2xpZGVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgc2xpZGVzLmNsYXNzTGlzdC5hZGQoJ215VGh1bWJuYWlscycpO1xuICBzbGlkZXMuc2V0QXR0cmlidXRlKCd0YWJJbmRleCcsICcwJyk7XG4gIHNsaWRlcy5pZCA9IGB0aHVtYi0ke2lkfWA7XG4gIHNsaWRlcy5pbm5lckhUTUwgPSBgXG4gIDxkaXYgY2xhc3M9J2ZhZGVkLXRodW1ibmFpbC1iZyc+PC9kaXY+XG4gIDxpbWcgc3JjPVwiJHtpbWFnZX1cIiBpZD1cIiR7aWR9XCIgYWx0PSdwcm9kdWN0LXRodW1ibmFpbCcgPmA7XG4gIHJldHVybiBzbGlkZXM7XG59O1xuXG5jb25zdCBpbnNlcnRUaHVtYm5haWxFbCA9IChsb2NhdGlvbiwgdGh1bWJuYWlsc0FyciwgaWQgPSAwKSA9PiB7XG4gIHRodW1ibmFpbHNBcnIuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICBsb2NhdGlvbi5hcHBlbmRDaGlsZChjcmVhdGVUaHVtYm5haWxFbChpdGVtLCBpbmRleCArIDEgKyBpZCkpO1xuICB9KTtcbn07XG5cbmNvbnN0IGNyZWF0ZVBvcHVwQmcgPSAoKSA9PiB7XG4gIGNvbnN0IHBvcHVwTW9kYWwgPSBgXG4gICAgICA8ZGl2IGNsYXNzPVwic2xpZGUtcG9wLWJnXCI+ICAgICAgICAgICAgXG5cbiAgICAgICAgPHVsIGNsYXNzPVwicG9wLXRodW1ibmFpbFwiPlxuICBcbiAgICAgICAgPC91bD5cbiAgICA8L2Rpdj5gO1xuICBjb25zdCBzbGlkZXNob3dDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2xpZGVzaG93LWNvbnRhaW5lcicpO1xuICBzbGlkZXNob3dDb250YWluZXIuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmViZWdpbicsIHBvcHVwTW9kYWwpO1xufTtcblxuZXhwb3J0IHtcbiAgaW5zZXJ0Q2xvc2VJY29uLFxuICBpbnNlcnRDYXJ0Q2FyZCxcbiAgZGlzcGxheVNsaWRlQ2FyZCxcbiAgaW5zZXJ0VGh1bWJuYWlsRWwsXG4gIGNyZWF0ZVBvcHVwQmcsXG4gIGNyZWF0ZU5leHRJY29uLFxuICBjcmVhdGVQcmV2SWNvbixcbn07IiwiaW1wb3J0IHVuaXFpZCBmcm9tICd1bmlxaWQnO1xuaW1wb3J0IGltYWdlMVRodW1uYWlsIGZyb20gJy4uL2ltYWdlcy9pbWFnZS1wcm9kdWN0LTEtdGh1bWJuYWlsLmpwZyc7XG5pbXBvcnQgcHJvZHVjdEltYWdlMSBmcm9tICcuLi9pbWFnZXMvaW1hZ2UtcHJvZHVjdC0xLmpwZyc7XG5pbXBvcnQgaW1hZ2UyVGh1bW5haWwgZnJvbSAnLi4vaW1hZ2VzL2ltYWdlLXByb2R1Y3QtMi10aHVtYm5haWwuanBnJztcbmltcG9ydCBwcm9kdWN0SW1hZ2UyIGZyb20gJy4uL2ltYWdlcy9pbWFnZS1wcm9kdWN0LTIuanBnJztcbmltcG9ydCBpbWFnZTNUaHVtbmFpbCBmcm9tICcuLi9pbWFnZXMvaW1hZ2UtcHJvZHVjdC0zLXRodW1ibmFpbC5qcGcnO1xuaW1wb3J0IHByb2R1Y3RJbWFnZTMgZnJvbSAnLi4vaW1hZ2VzL2ltYWdlLXByb2R1Y3QtMy5qcGcnO1xuaW1wb3J0IGltYWdlNFRodW1uYWlsIGZyb20gJy4uL2ltYWdlcy9pbWFnZS1wcm9kdWN0LTQtdGh1bWJuYWlsLmpwZyc7XG5pbXBvcnQgcHJvZHVjdEltYWdlNCBmcm9tICcuLi9pbWFnZXMvaW1hZ2UtcHJvZHVjdC00LmpwZyc7XG5cbmNvbnN0IHByb2R1Y3QgPSB7XG4gIGltYWdlczoge1xuICAgIGltYWdlMToge1xuICAgICAgaW1hZ2U6IHByb2R1Y3RJbWFnZTEsXG4gICAgICBpbWFnZVRodW1uYWlsOiBpbWFnZTFUaHVtbmFpbCxcbiAgICB9LFxuICAgIGltYWdlMjoge1xuICAgICAgaW1hZ2U6IHByb2R1Y3RJbWFnZTIsXG4gICAgICBpbWFnZVRodW1uYWlsOiBpbWFnZTJUaHVtbmFpbCxcbiAgICB9LFxuICAgIGltYWdlMzoge1xuICAgICAgaW1hZ2U6IHByb2R1Y3RJbWFnZTMsXG4gICAgICBpbWFnZVRodW1uYWlsOiBpbWFnZTNUaHVtbmFpbCxcbiAgICB9LFxuICAgIGltYWdlNDoge1xuICAgICAgaW1hZ2U6IHByb2R1Y3RJbWFnZTQsXG4gICAgICBpbWFnZVRodW1uYWlsOiBpbWFnZTRUaHVtbmFpbCxcbiAgICB9LFxuXG4gIH0sXG4gIHByb2R1Y3ROYW1lOiAnQXV0dW1uIExpbWl0ZWQgRWRpdGlvbi4uLicsXG4gIHF0eTogMCxcbiAgcHJpY2U6IDEyNSxcbiAgaWQ6IHVuaXFpZCgpLFxufTtcblxuY29uc3QgaW1hZ2VzQXJyID0gW3Byb2R1Y3RJbWFnZTEsIHByb2R1Y3RJbWFnZTIsIHByb2R1Y3RJbWFnZTMsIHByb2R1Y3RJbWFnZTRdO1xuY29uc3QgdGh1bWJuYWlsc0FyciA9IFtpbWFnZTRUaHVtbmFpbCwgaW1hZ2UzVGh1bW5haWwsIGltYWdlMlRodW1uYWlsLCBpbWFnZTFUaHVtbmFpbF07XG5cbmV4cG9ydCB7IHByb2R1Y3QsIGltYWdlc0FyciwgdGh1bWJuYWlsc0FyciB9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQge1xuICBpbnNlcnRDbG9zZUljb24sXG4gIGluc2VydENhcnRDYXJkLFxuICBkaXNwbGF5U2xpZGVDYXJkLFxuICBpbnNlcnRUaHVtYm5haWxFbCxcbiAgY3JlYXRlUG9wdXBCZyxcbiAgY3JlYXRlTmV4dEljb24sXG4gIGNyZWF0ZVByZXZJY29uLFxufSBmcm9tICcuL2NvbXBvbmVudHMvZG9tLmpzJztcbmltcG9ydCB7IHByb2R1Y3QsIGltYWdlc0FyciwgdGh1bWJuYWlsc0FyciB9IGZyb20gJy4vY29tcG9uZW50cy9wcm9kdWN0LmpzJztcbmltcG9ydCAnLi9jc3MvaW5kZXguY3NzJztcbmltcG9ydCAnLi9jc3Mvc2xpZGVzaG93LmNzcyc7XG5pbXBvcnQgJy4vY3NzL2hlYWRsaW5lLmNzcyc7XG5pbXBvcnQgJy4vY3NzL2NhcnQuY3NzJztcbmltcG9ydCBhdmF0YXJJbWcgZnJvbSAnLi9pbWFnZXMvaW1hZ2UtYXZhdGFyLnBuZyc7XG5pbXBvcnQgcGx1c0ljb24gZnJvbSAnLi9pbWFnZXMvaWNvbi1wbHVzLnN2Zyc7XG5pbXBvcnQgbWludXNJY29uIGZyb20gJy4vaW1hZ2VzL2ljb24tbWludXMuc3ZnJztcbmltcG9ydCBsb2dvIGZyb20gJy4vaW1hZ2VzL2xvZ28uc3ZnJztcbmltcG9ydCBDYXJ0IGZyb20gJy4vY29tcG9uZW50cy9jYXJ0LmpzJztcblxuY29uc3QgYXZhdGFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmF2YXRhcicpO1xuY29uc3QgcGx1c0ljb25FbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbHVzLWljb24nKTtcbmNvbnN0IG1pbnVzSWNvbkVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1pbnVzLWljb24nKTtcbmNvbnN0IGxvZ29FbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb2dvJyk7XG5cbmxvZ29FbC5zcmMgPSBsb2dvO1xuYXZhdGFyLnNyYyA9IGF2YXRhckltZztcbnBsdXNJY29uRWwuc3JjID0gcGx1c0ljb247XG5taW51c0ljb25FbC5zcmMgPSBtaW51c0ljb247XG5cbi8vIGRpc3BsYXkgY2FydCBpdGVtc1xuY29uc3QgdXBkYXRlQ2FydENvdW50cyA9IChjYXJ0KSA9PiB7XG4gIGNvbnN0IGNhcnRDb3VudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJ0LWNvdW50Jyk7XG4gIGxldCBjb3VudCA9IDA7XG4gIGNhcnQuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgIGNvdW50ICs9IGl0ZW0ucXR5O1xuICB9KTtcbiAgY2FydENvdW50LnRleHRDb250ZW50ID0gY291bnQ7XG59O1xuXG5jb25zdCBkaXNwbGF5Q2FyZCA9ICgpID0+IHtcbiAgY29uc3QgaW5uZXJDYXJ0Qm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmlubmVyLWNhcnQtYm94Jyk7XG4gIGNvbnN0IGVtcHR5RWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGVtcHR5RWwuY2xhc3NOYW1lID0gJ2VtcHR5LW1lc3NhZ2UnO1xuICBlbXB0eUVsLnRleHRDb250ZW50ID0gJ1lvdXIgY2FydCBpcyBlbXB0eS4nO1xuICBpZiAoQ2FydC5jYXJ0Lmxlbmd0aCA9PT0gMCkge1xuICAgIGlubmVyQ2FydEJveC5hcHBlbmRDaGlsZChlbXB0eUVsKTtcbiAgICAvLyByZXR1cm4gZW1wdHlFbDtcbiAgfVxuICBDYXJ0LmNhcnQuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgIGluc2VydENhcnRDYXJkKGl0ZW0pO1xuICB9KTtcblxuICB1cGRhdGVDYXJ0Q291bnRzKENhcnQuY2FydCk7XG59O1xuXG5jb25zdCByZXNldENoZWNrb3V0SXRlbXMgPSAoKSA9PiB7XG4gIGNvbnN0IGlubmVyQ2FydEJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbm5lci1jYXJ0LWJveCcpO1xuICB3aGlsZSAoaW5uZXJDYXJ0Qm94LmZpcnN0RWxlbWVudENoaWxkKSB7XG4gICAgaW5uZXJDYXJ0Qm94LnJlbW92ZUNoaWxkKGlubmVyQ2FydEJveC5maXJzdEVsZW1lbnRDaGlsZCk7XG4gIH1cbiAgZGlzcGxheUNhcmQoKTtcbn07XG5cbnJlc2V0Q2hlY2tvdXRJdGVtcygpO1xuXG4vLyBNZW51IG9uY2xpY2tcbmNvbnN0IGhhbWJ1cmdlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oYW1idXJnZXInKTtcbmhhbWJ1cmdlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgY29uc3QgbWVudUVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnUtY29udGFpbmVyJyk7XG4gIGNvbnN0IGNsb3NlRWwgPSBpbnNlcnRDbG9zZUljb24obWVudUVsKTtcbiAgY2xvc2VFbC5jbGFzc0xpc3QuYWRkKCdjbG9zZScpO1xuXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51LWNvbnRhaW5lcicpLnN0eWxlLndpZHRoID0gJzg1JSc7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51LWNvbnRhaW5lcicpLnN0eWxlLnBhZGRpbmcgPSAnM3JlbSAycmVtJztcblxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2xvc2UnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudS1jb250YWluZXInKS5zdHlsZS53aWR0aCA9ICcnO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51LWNvbnRhaW5lcicpLnN0eWxlLnBhZGRpbmcgPSAnJztcbiAgICBjbG9zZUVsLnJlbW92ZSgpO1xuICB9KTtcbn0pO1xuXG4vLyBDaGVja291dCBjYXJ0IGNsaWNrIGV2ZW50XG5cbmNvbnN0IGV4ZWN1dGVDaGVja291dENsb3NlRXZlbnQgPSAoKSA9PiB7XG4gIGNvbnN0IGJnQ2FydEJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5iZy1jYXJ0LWJveCcpO1xuICBjb25zdCBjaGVja291dEZuID0gKGUpID0+IHtcbiAgICBpZiAoZS50YXJnZXQgPT09IGJnQ2FydEJveCkge1xuICAgICAgYmdDYXJ0Qm94LmNsYXNzTGlzdC5yZW1vdmUoJ2NoZWNrb3V0LWNhcnQtYWN0aXZlJyk7XG4gICAgICBiZ0NhcnRCb3gucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjaGVja291dEZuKTtcbiAgICB9XG4gIH07XG4gIGJnQ2FydEJveC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNoZWNrb3V0Rm4pO1xufTtcblxuY29uc3QgZGlzcGxheUNoZWNrb3V0ID0gKCkgPT4ge1xuICBjb25zdCBiZ0NhcnRCb3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYmctY2FydC1ib3gnKTtcbiAgYmdDYXJ0Qm94LmNsYXNzTGlzdC5hZGQoJ2NoZWNrb3V0LWNhcnQtYWN0aXZlJyk7XG4gIGV4ZWN1dGVDaGVja291dENsb3NlRXZlbnQoKTtcbn07XG5cbmNvbnN0IGNoZWNrb3V0Q2FydCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaGVja291dC1jYXJ0Jyk7XG5jaGVja291dENhcnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkaXNwbGF5Q2hlY2tvdXQpO1xuXG4vLyBBZGQgdG8gY2FydCBldmVudFxuY29uc3QgYWRkVG9DYXJ0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC10by1jYXJ0LWJ0bicpO1xuXG5jb25zdCBwcm9kdWN0Q291bnRJbmNyZW1lbnQgPSAoKSA9PiB7XG4gIGNvbnN0IHByb2R1Y3RRdHlDb3VudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9kdWN0UXR5Q291bnQnKTtcblxuICBwcm9kdWN0UXR5Q291bnQudGV4dENvbnRlbnQgPSBOdW1iZXIocHJvZHVjdFF0eUNvdW50LnRleHRDb250ZW50KSArIDE7XG59O1xuXG5jb25zdCBwcm9kdWN0Q291bnREZWNyZW1lbnQgPSAoKSA9PiB7XG4gIGNvbnN0IHByb2R1Y3RRdHlDb3VudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9kdWN0UXR5Q291bnQnKTtcbiAgLy8gY29uc3QgY2FydENvdW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcnQtY291bnQnKTtcbiAgaWYgKE51bWJlcihwcm9kdWN0UXR5Q291bnQudGV4dENvbnRlbnQpID4gMCkge1xuICAgIHByb2R1Y3RRdHlDb3VudC50ZXh0Q29udGVudCA9IE51bWJlcihwcm9kdWN0UXR5Q291bnQudGV4dENvbnRlbnQpIC0gMTtcbiAgfVxufTtcblxuY29uc3QgYWxyZWFkeUluQ2FydCA9IChtc2cpID0+IHtcbiAgY29uc3QgYWRkVG9DYXJ0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC10by1jYXJ0LWJ0bicpO1xuICBhZGRUb0NhcnRCdG4ubGFzdEVsZW1lbnRDaGlsZC50ZXh0Q29udGVudCA9IG1zZztcbn07XG5cbmNvbnN0IGF0dGFjaERlbGV0ZUV2ZW50ID0gKCkgPT4ge1xuICBjb25zdCBkZWxldGVQcm9kdWN0SWNvbiA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2R1Y3QtZGVsZXRlJykpO1xuICBpZiAoZGVsZXRlUHJvZHVjdEljb24ubGVuZ3RoKSB7XG4gICAgZGVsZXRlUHJvZHVjdEljb24uZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgQ2FydC5yZW1vdmVQcm9kdWN0KHByb2R1Y3QpO1xuICAgICAgICBwcm9kdWN0LnF0eSA9IDA7XG4gICAgICAgIHJlc2V0Q2hlY2tvdXRJdGVtcygpO1xuICAgICAgICBhbHJlYWR5SW5DYXJ0KCdBZGQgdG8gY2FydCcpO1xuICAgICAgICBhdHRhY2hEZWxldGVFdmVudCgpO1xuICAgICAgICBjb25zdCBwcm9kdWN0UXR5Q291bnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvZHVjdFF0eUNvdW50Jyk7XG4gICAgICAgIHByb2R1Y3RRdHlDb3VudC50ZXh0Q29udGVudCA9IDA7XG4gICAgICAgIHVwZGF0ZUNhcnRDb3VudHMoQ2FydC5jYXJ0KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG59O1xuXG5hZGRUb0NhcnRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIGNvbnN0IGlzQWRkZWQgPSBDYXJ0LmFkZFRvQ2FydChwcm9kdWN0KTtcbiAgaWYgKGlzQWRkZWQpIHtcbiAgICBwcm9kdWN0Q291bnRJbmNyZW1lbnQoKTtcbiAgICByZXNldENoZWNrb3V0SXRlbXMoKTtcbiAgICBhbHJlYWR5SW5DYXJ0KCdBbHJlYWR5IGluIGNhcnQnKTtcbiAgICBhdHRhY2hEZWxldGVFdmVudCgpO1xuICB9IGVsc2Uge1xuICAgIGFscmVhZHlJbkNhcnQoJ0FscmVhZHkgaW4gY2FydCcpO1xuICB9XG59KTtcblxuLy8gSW5jcmVhc2Ugb3IgZGVjcmVhc2UgcXR5IGV2ZW50XG5jb25zdCBwcm9kdWN0UXR5SW5jcmVtZW50ID0gKGNhcnQsIHByb2R1Y3QpID0+IHtcbiAgY2FydC5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgaWYgKGl0ZW0uaWQgPT09IHByb2R1Y3QuaWQpIHtcbiAgICAgIGl0ZW0ucXR5ICs9IDE7XG4gICAgfVxuICB9KTtcbn07XG5cbmNvbnN0IHByb2R1Y3RRdHlEZWNyZW1lbnQgPSAoY2FydCwgcHJvZHVjdCkgPT4ge1xuICBpZiAocHJvZHVjdC5xdHkgPiAwKSB7XG4gICAgY2FydC5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICBpZiAoaXRlbS5pZCA9PT0gcHJvZHVjdC5pZCkge1xuICAgICAgICBpdGVtLnF0eSAtPSAxO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59O1xuXG5wbHVzSWNvbkVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBjb25zdCBpc0FkZGVkID0gQ2FydC5hZGRUb0NhcnQocHJvZHVjdCk7XG4gIGlmIChpc0FkZGVkKSB7XG4gICAgYWxyZWFkeUluQ2FydCgnQWxyZWFkeSBpbiBjYXJ0Jyk7XG4gICAgcHJvZHVjdENvdW50SW5jcmVtZW50KCk7XG4gICAgcmVzZXRDaGVja291dEl0ZW1zKCk7XG4gICAgYXR0YWNoRGVsZXRlRXZlbnQoKTtcbiAgfSBlbHNlIHtcbiAgICBhbHJlYWR5SW5DYXJ0KCdBbHJlYWR5IGluIGNhcnQnKTtcbiAgICBwcm9kdWN0Q291bnRJbmNyZW1lbnQoKTtcbiAgICBwcm9kdWN0UXR5SW5jcmVtZW50KENhcnQuY2FydCwgcHJvZHVjdCk7XG4gICAgcmVzZXRDaGVja291dEl0ZW1zKCk7XG4gICAgYXR0YWNoRGVsZXRlRXZlbnQoKTtcbiAgfVxufSk7XG5cbm1pbnVzSWNvbkVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBwcm9kdWN0Q291bnREZWNyZW1lbnQoKTtcbiAgcHJvZHVjdFF0eURlY3JlbWVudChDYXJ0LmNhcnQsIHByb2R1Y3QpOyAvLyB1cGRhdGUgcXR5IGluIGNhcnRcbiAgcmVzZXRDaGVja291dEl0ZW1zKCk7XG5cbiAgbGV0IHByb2R1Y3RRdHkgPSAwO1xuICBDYXJ0LmNhcnQuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgIGlmIChpdGVtLmlkID09PSBwcm9kdWN0LmlkKSB7XG4gICAgICBwcm9kdWN0UXR5ID0gaXRlbS5xdHk7XG4gICAgfVxuICB9KTtcbiAgaWYgKHByb2R1Y3RRdHkgPCAxKSB7XG4gICAgYWxyZWFkeUluQ2FydCgnQWRkIHRvIGNhcnQnKTtcbiAgfVxuICBpZiAocHJvZHVjdFF0eSA8IDIpIHtcbiAgICBwcm9kdWN0UXR5RGVjcmVtZW50KENhcnQuY2FydCwgcHJvZHVjdCk7XG4gICAgQ2FydC5yZW1vdmVQcm9kdWN0KHByb2R1Y3QpO1xuICB9XG59KTtcblxuLy8gU2xpZGUgc2hvdyBldmVudFxuXG5jb25zdCBzbGlkZXNob3cgPSAoKSA9PiB7XG4gIGNvbnN0IHNsaWRlc2hvd0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zbGlkZXNob3ctY29udGFpbmVyJyk7XG4gIGNvbnN0IHNsaWRlQ2xhc3NOYW1lID0gJ215c2xpZGUnO1xuXG4gIGRpc3BsYXlTbGlkZUNhcmQoc2xpZGVzaG93Q29udGFpbmVyLCBzbGlkZUNsYXNzTmFtZSwgaW1hZ2VzQXJyKTsgLy8gRGlzcGxheSBzbGlkZSBpbml0aWFsIHNob3dcbiAgY3JlYXRlTmV4dEljb24oc2xpZGVzaG93Q29udGFpbmVyLCAnY2lyY2xlLW5leHQnKTtcbiAgY3JlYXRlUHJldkljb24oc2xpZGVzaG93Q29udGFpbmVyLCAnY2lyY2xlLXByZXYnKTtcblxuICBsZXQgc2xpZGVJbmRleCA9IDE7XG4gIGNvbnN0IHNob3dTbGlkZXIgPSAobiwgY2xhc3NOYW0pID0+IHtcbiAgICBsZXQgaTtcbiAgICBjb25zdCBzbGlkZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGNsYXNzTmFtKTtcblxuICAgIGlmIChuID4gc2xpZGVzLmxlbmd0aCkge1xuICAgICAgc2xpZGVJbmRleCA9IDE7XG4gICAgfVxuXG4gICAgaWYgKG4gPCAxKSB7XG4gICAgICBzbGlkZUluZGV4ID0gc2xpZGVzLmxlbmd0aDtcbiAgICB9XG4gICAgZm9yIChpID0gMDsgaSA8IHNsaWRlcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgc2xpZGVzW2ldLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgfVxuXG4gICAgc2xpZGVzW3NsaWRlSW5kZXggLSAxXS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgfTtcblxuICBzaG93U2xpZGVyKHNsaWRlSW5kZXgsIHNsaWRlQ2xhc3NOYW1lKTtcblxuICBjb25zdCBwbHVzU2xpZGVzID0gKG4sIGNsYXNzTmFtKSA9PiB7XG4gICAgc2hvd1NsaWRlcihzbGlkZUluZGV4ICs9IG4sIGNsYXNzTmFtKTtcbiAgfTtcblxuICBmdW5jdGlvbiBjdXJyZW50U2xpZGUobiwgY2xhc3NOYW0pIHtcbiAgICBzaG93U2xpZGVyKHNsaWRlSW5kZXggPSBuLCBjbGFzc05hbSk7XG4gIH1cblxuICBjb25zdCBwcmV2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNpcmNsZS1wcmV2Jyk7XG4gIGNvbnN0IG5leHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2lyY2xlLW5leHQnKTtcblxuICBjb25zdCBwcmV2aW91c0ltYWdlID0gKCkgPT4gcGx1c1NsaWRlcygtMSwgc2xpZGVDbGFzc05hbWUpO1xuICBwcmV2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcHJldmlvdXNJbWFnZSk7XG5cbiAgY29uc3QgbmV4dEltYWdlID0gKCkgPT4gcGx1c1NsaWRlcygxLCBzbGlkZUNsYXNzTmFtZSk7XG4gIG5leHQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBuZXh0SW1hZ2UpO1xuXG4gIC8vIFRodW1ibmFpbHMgaW1hZ2UgZXZlbnRcbiAgY29uc3QgdGh1bWJuYWlsQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRodW1ibmFpbC1jb250YWluZXInKTtcbiAgaW5zZXJ0VGh1bWJuYWlsRWwodGh1bWJuYWlsQ29udGFpbmVyLCB0aHVtYm5haWxzQXJyKTtcblxuICB0aHVtYm5haWxDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGlmIChlLnRhcmdldC5pZCA9PT0gJ3RodW1iLTEnKSB7XG4gICAgICBjdXJyZW50U2xpZGUoMSwgc2xpZGVDbGFzc05hbWUpO1xuICAgIH1cbiAgICBpZiAoZS50YXJnZXQuaWQgPT09ICd0aHVtYi0yJykge1xuICAgICAgY3VycmVudFNsaWRlKDIsIHNsaWRlQ2xhc3NOYW1lKTtcbiAgICB9XG4gICAgaWYgKGUudGFyZ2V0LmlkID09PSAndGh1bWItMycpIHtcbiAgICAgIGN1cnJlbnRTbGlkZSgzLCBzbGlkZUNsYXNzTmFtZSk7XG4gICAgfVxuICAgIGlmIChlLnRhcmdldC5pZCA9PT0gJ3RodW1iLTQnKSB7XG4gICAgICBjdXJyZW50U2xpZGUoNCwgc2xpZGVDbGFzc05hbWUpO1xuICAgIH1cbiAgfSk7XG5cbiAgY29uc3QgcmVzZXRTaGFkZUJnQ29sb3IgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBjaGlsZHJlbiB9ID0gdGh1bWJuYWlsQ29udGFpbmVyO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGNoaWxkcmVuW2ldLmZpcnN0RWxlbWVudENoaWxkLmNsYXNzTGlzdC5yZW1vdmUoJ2ZhZGVkLXRodW1ibmFpbC1iZy1mb2N1cycpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCByZXNldFBvcHVwU2hhZGVCZ0NvbG9yID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgY2hpbGRyZW4gfSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3AtdGh1bWJuYWlsJyk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgY2hpbGRyZW5baV0uZmlyc3RFbGVtZW50Q2hpbGQuY2xhc3NMaXN0LnJlbW92ZSgnZmFkZWQtdGh1bWJuYWlsLWJnLWZvY3VzJyk7XG4gICAgfVxuICB9O1xuXG4gIHRodW1ibmFpbENvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdmb2N1c2luJywgKGUpID0+IHtcbiAgICBpZiAoZS50YXJnZXQuaWQgPT09ICd0aHVtYi0xJykge1xuICAgICAgcmVzZXRTaGFkZUJnQ29sb3IoKTtcbiAgICAgIGUudGFyZ2V0LmZpcnN0RWxlbWVudENoaWxkLmNsYXNzTGlzdC5hZGQoJ2ZhZGVkLXRodW1ibmFpbC1iZy1mb2N1cycpO1xuICAgIH1cbiAgICBpZiAoZS50YXJnZXQuaWQgPT09ICd0aHVtYi0yJykge1xuICAgICAgcmVzZXRTaGFkZUJnQ29sb3IoKTtcbiAgICAgIGUudGFyZ2V0LmZpcnN0RWxlbWVudENoaWxkLmNsYXNzTGlzdC5hZGQoJ2ZhZGVkLXRodW1ibmFpbC1iZy1mb2N1cycpO1xuICAgIH1cbiAgICBpZiAoZS50YXJnZXQuaWQgPT09ICd0aHVtYi0zJykge1xuICAgICAgcmVzZXRTaGFkZUJnQ29sb3IoKTtcbiAgICAgIGUudGFyZ2V0LmZpcnN0RWxlbWVudENoaWxkLmNsYXNzTGlzdC5hZGQoJ2ZhZGVkLXRodW1ibmFpbC1iZy1mb2N1cycpO1xuICAgIH1cbiAgICBpZiAoZS50YXJnZXQuaWQgPT09ICd0aHVtYi00Jykge1xuICAgICAgcmVzZXRTaGFkZUJnQ29sb3IoKTtcbiAgICAgIGUudGFyZ2V0LmZpcnN0RWxlbWVudENoaWxkLmNsYXNzTGlzdC5hZGQoJ2ZhZGVkLXRodW1ibmFpbC1iZy1mb2N1cycpO1xuICAgIH1cbiAgfSk7XG4gIHRodW1ibmFpbENvbnRhaW5lci5maXJzdEVsZW1lbnRDaGlsZC5mb2N1cygpO1xuXG4gIC8vICAgcG9wdXAgaW1hZ2UgY2xpY2sgZGlzcGxheSBldmVudFxuICBjb25zdCBwb3B1cFNsaWRlQ2xhc3NOYW1lID0gJ2lubmVyLXNsaWRlJztcblxuICBjb25zdCBwb3B1cFByZXZpb3VzSW1hZ2UgPSAoKSA9PiBwbHVzU2xpZGVzKC0xLCBwb3B1cFNsaWRlQ2xhc3NOYW1lKTtcblxuICBjb25zdCBwb3B1cE5leHRJbWFnZSA9ICgpID0+IHBsdXNTbGlkZXMoMSwgcG9wdXBTbGlkZUNsYXNzTmFtZSk7XG5cbiAgc2xpZGVzaG93Q29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdpbWctY291cm9zYWwnKSAmJiB3aW5kb3cuaW5uZXJXaWR0aCA+IDM3NSkge1xuICAgICAgY3JlYXRlUG9wdXBCZygpO1xuICAgICAgY29uc3QgcG9wdXBTbGlkZUJnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNsaWRlLXBvcC1iZycpO1xuICAgICAgZGlzcGxheVNsaWRlQ2FyZChwb3B1cFNsaWRlQmcsIHBvcHVwU2xpZGVDbGFzc05hbWUsIGltYWdlc0Fycik7XG5cbiAgICAgIGNyZWF0ZU5leHRJY29uKHBvcHVwU2xpZGVCZywgJ3BvcHVwLWNpcmNsZS1uZXh0Jyk7XG4gICAgICBjcmVhdGVQcmV2SWNvbihwb3B1cFNsaWRlQmcsICdwb3B1cC1jaXJjbGUtcHJldicpO1xuXG4gICAgICBzaG93U2xpZGVyKHNsaWRlSW5kZXgsIHBvcHVwU2xpZGVDbGFzc05hbWUpOyAvLyBlZmZlY3Qgc2xpZGVzaG93IGV2ZW50XG5cbiAgICAgIC8vIEVmZmVjdCBwb3B1cCBuZXh0IGFuZCBwcmV2IGNsaWNrIGV2ZW50XG4gICAgICBjb25zdCBwb3B1cFByZXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wdXAtY2lyY2xlLXByZXYnKTtcbiAgICAgIGNvbnN0IHBvcHVwTmV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cC1jaXJjbGUtbmV4dCcpO1xuICAgICAgcG9wdXBQcmV2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcG9wdXBQcmV2aW91c0ltYWdlKTtcbiAgICAgIHBvcHVwTmV4dC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHBvcHVwTmV4dEltYWdlKTtcblxuICAgICAgLy8gZWZmZWN0IHRoZSBldmVudCBpdGVtIGZvciBwb3B1cCB0aHVtYm5haWxzXG4gICAgICBjb25zdCBwb3BUaHVtYm5haWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wLXRodW1ibmFpbCcpO1xuICAgICAgaW5zZXJ0VGh1bWJuYWlsRWwocG9wVGh1bWJuYWlsLCB0aHVtYm5haWxzQXJyLCAxMCk7XG5cbiAgICAgIHBvcFRodW1ibmFpbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGlmIChlLnRhcmdldC5pZCA9PT0gJ3RodW1iLTExJykge1xuICAgICAgICAgIGN1cnJlbnRTbGlkZSgxLCBwb3B1cFNsaWRlQ2xhc3NOYW1lKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZS50YXJnZXQuaWQgPT09ICd0aHVtYi0xMicpIHtcbiAgICAgICAgICBjdXJyZW50U2xpZGUoMiwgcG9wdXBTbGlkZUNsYXNzTmFtZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGUudGFyZ2V0LmlkID09PSAndGh1bWItMTMnKSB7XG4gICAgICAgICAgY3VycmVudFNsaWRlKDMsIHBvcHVwU2xpZGVDbGFzc05hbWUpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChlLnRhcmdldC5pZCA9PT0gJ3RodW1iLTE0Jykge1xuICAgICAgICAgIGN1cnJlbnRTbGlkZSg0LCBwb3B1cFNsaWRlQ2xhc3NOYW1lKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIHBvcFRodW1ibmFpbC5hZGRFdmVudExpc3RlbmVyKCdmb2N1c2luJywgKGUpID0+IHtcbiAgICAgICAgaWYgKGUudGFyZ2V0LmlkID09PSAndGh1bWItMTEnKSB7XG4gICAgICAgICAgcmVzZXRQb3B1cFNoYWRlQmdDb2xvcigpO1xuICAgICAgICAgIGUudGFyZ2V0LmZpcnN0RWxlbWVudENoaWxkLmNsYXNzTGlzdC5hZGQoJ2ZhZGVkLXRodW1ibmFpbC1iZy1mb2N1cycpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChlLnRhcmdldC5pZCA9PT0gJ3RodW1iLTEyJykge1xuICAgICAgICAgIHJlc2V0UG9wdXBTaGFkZUJnQ29sb3IoKTtcbiAgICAgICAgICBlLnRhcmdldC5maXJzdEVsZW1lbnRDaGlsZC5jbGFzc0xpc3QuYWRkKCdmYWRlZC10aHVtYm5haWwtYmctZm9jdXMnKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZS50YXJnZXQuaWQgPT09ICd0aHVtYi0xMycpIHtcbiAgICAgICAgICByZXNldFBvcHVwU2hhZGVCZ0NvbG9yKCk7XG4gICAgICAgICAgZS50YXJnZXQuZmlyc3RFbGVtZW50Q2hpbGQuY2xhc3NMaXN0LmFkZCgnZmFkZWQtdGh1bWJuYWlsLWJnLWZvY3VzJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGUudGFyZ2V0LmlkID09PSAndGh1bWItMTQnKSB7XG4gICAgICAgICAgcmVzZXRQb3B1cFNoYWRlQmdDb2xvcigpO1xuICAgICAgICAgIGUudGFyZ2V0LmZpcnN0RWxlbWVudENoaWxkLmNsYXNzTGlzdC5hZGQoJ2ZhZGVkLXRodW1ibmFpbC1iZy1mb2N1cycpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgcG9wVGh1bWJuYWlsLmZpcnN0RWxlbWVudENoaWxkLmZvY3VzKCk7XG4gICAgICAvLyBJbnNlcnQgY2xvc2UgaWNvblxuICAgICAgY29uc3QgY2xvc2VFbGwgPSBpbnNlcnRDbG9zZUljb24ocG9wdXBTbGlkZUJnKTtcbiAgICAgIGNsb3NlRWxsLmNsYXNzTGlzdC5hZGQoJ3BvcC1jbG9zZScpO1xuICAgICAgcG9wdXBTbGlkZUJnLmNsYXNzTGlzdC5hZGQoJ2NoZWNrb3V0LWNhcnQtYWN0aXZlJyk7XG5cbiAgICAgIGNsb3NlRWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBwb3B1cFNsaWRlQmcuY2xhc3NMaXN0LnRvZ2dsZSgnY2hlY2tvdXQtY2FydC1hY3RpdmUnKTtcbiAgICAgICAgdGh1bWJuYWlsQ29udGFpbmVyLmZpcnN0RWxlbWVudENoaWxkLmZvY3VzKCk7XG4gICAgICAgIHBvcHVwU2xpZGVCZy5yZW1vdmUoKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSk7XG59O1xuXG5zbGlkZXNob3coKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==