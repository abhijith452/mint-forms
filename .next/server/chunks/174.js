exports.id = 174;
exports.ids = [174];
exports.modules = {

/***/ 936:
/***/ ((module) => {

// Exports
module.exports = {
	"label": "styles_label__DQ9xL",
	"input": "styles_input__h6qDh",
	"inputContainer": "styles_inputContainer___1bxz",
	"errorMsg": "styles_errorMsg__ASszU"
};


/***/ }),

/***/ 7174:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(936);
/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__WEBPACK_IMPORTED_MODULE_1__);


const FormInput = ({ label , placeholder , value , onChange , errors ,  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_1___default().inputContainer),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_1___default().label),
                children: label
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                placeholder: placeholder,
                value: value,
                style: {
                    // boxShadow:
                    //   errors !==""
                    //     ? '0 12px 20px 0 rgba(255, 45, 45, 0.301),inset 0 -1px 8px 0 #ff5f5f6e'
                    //     : '0 12px 20px 0 rgba(136,174,222,0.42),inset 0 -1px 8px 0 #B9D1F1',
                    boxShadow: "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
                    outlineColor: errors !== "" ? "red" : "#1479ff"
                },
                onChange: (e)=>onChange(e),
                className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_1___default().input)
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_1___default().errorMsg),
                children: errors
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FormInput);


/***/ })

};
;