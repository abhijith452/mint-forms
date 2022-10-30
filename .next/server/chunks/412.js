exports.id = 412;
exports.ids = [412];
exports.modules = {

/***/ 2534:
/***/ ((module) => {

// Exports
module.exports = {
	"label": "styles_label__U8772",
	"inputContainer": "styles_inputContainer__oOFFP",
	"errorMsg": "styles_errorMsg__OOgnn"
};


/***/ }),

/***/ 6412:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2534);
/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1929);
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_select__WEBPACK_IMPORTED_MODULE_1__);



const FormOptions = ({ label , options , value , onChange , errors ,  })=>{
    const customStyles = {
        control: ()=>({
                display: "flex",
                height: "60px",
                borderRadius: "10px",
                border: "1px rgb(222, 222, 222) solid",
                padding: "10px",
                boxShadow: "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px"
            })
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_2___default().inputContainer),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_2___default().label),
                children: label
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_select__WEBPACK_IMPORTED_MODULE_1___default()), {
                instanceId: "ssdsd",
                value: value,
                styles: customStyles,
                onChange: (e)=>onChange(e),
                options: options
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_2___default().errorMsg),
                children: errors
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FormOptions);


/***/ })

};
;